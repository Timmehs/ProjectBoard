# == Schema Information
#
# Table name: projects
#
#  id           :integer          not null, primary key
#  name         :string(255)      not null
#  owner_id     :integer          not null
#  html_url     :string(255)      not null
#  homepage     :string(255)      not null
#  created_at   :datetime
#  updated_at   :datetime
#  uid          :integer
#  description  :text
#  commit_count :integer
#

class Project < ActiveRecord::Base
  include HTTParty

  attr_reader :uri, :commit_count, :raw_commits, :new_commits

  validates :name, :owner_id, :html_url, :uid, :description, presence: true
  validates :name, uniqueness: true

  acts_as_taggable

  belongs_to :author, class_name: "User", foreign_key: :owner_id, primary_key: :id
  has_many :commits

  def self.sync_commits
    Project.all.each { |p| p.update_commits }
  end

  def get_commits(opts = {})
    @raw_commits = query_commits(opts)
    self.update(commit_count: @raw_commits.length)
  end

  def save_commits
    current_commits_shas = commits.pluck(:sha)
    ActiveRecord::Base.transaction do
      @raw_commits.each do |commit|
        next if current_commits_shas.include?(commit['sha'])
        new_commit = commits.new
        new_commit.sha = commit['sha']
        new_commit.message = commit['commit']['message']
        new_commit.user_uid = commit['author']['id']
        new_commit.committed_on = commit['commit']['author']['date']
        new_commit.save!
      end
    end

  end

  def query_commits(opts = {})
    client_id, client_secret = ENV['GITHUB_KEY'], ENV['GITHUB_SECRET']
    page_limit = opts[:page_limit] ? opts[:page_limit] : "1000"
    time_limit = opts[:days_ago] ? opts[:days_ago] : COMMIT_PERIOD
    t = (Time.now - time_limit.days)
    time_ago = t.strftime("%F") + "T" + t.strftime("%T")
    @uri ||= 'https://api.github.com/repos/' + self.author.username + '/' + self.name
    query_url = @uri + "/commits?per_page="+ page_limit + "&since=" + time_ago +
      "&client_id=" + client_id + "&client_secret=" + client_secret
    puts query_url
    response = HTTParty.get(query_url);
  end

  def update_commits
    get_commits
    save_commits
  end

  handle_asynchronously :update_commits
end
