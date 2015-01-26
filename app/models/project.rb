# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  name        :string(255)      not null
#  owner_id    :integer          not null
#  html_url    :string(255)      not null
#  homepage    :string(255)      not null
#  created_at  :datetime
#  updated_at  :datetime
#  uid         :integer
#  description :text
#

class Project < ActiveRecord::Base
  include HTTParty
  attr_reader :uri, :branch_heads, :raw_commits
  validates :name, :owner_id, :html_url, :uid, :description, presence: true
  validates :name, uniqueness: true
  acts_as_taggable

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many :commits

  def update_branches
    @uri ||= 'https://api.github.com/repos/' + self.author.username + '/' + self.name
    @branch_heads ||= {}
    response = HTTParty.get(@uri + '/branches')
    response.each do |branch|
      @branch_heads[branch['name']] = branch['commit']['sha']
    end
  end

  def get_commits
    @raw_commits = query_commits
  end

  def save_commits
    new_commits = []
    @raw_commits.each do |commit|
      next if self.commits.pluck('sha').include?(commit['sha'])
      new_commit = self.commits.new
      new_commit.sha = commit['sha']
      new_commit.user_uid = commit['author']['id']
      new_commit.committed_on = commit['commit']['committer']['date']
      new_commit.message = commit['commit']['message']
      new_commit.save
    end
  end

  def query_commits
    t = (Time.now - 15.days)
    two_weeks_ago = t.strftime("%F") + "T" + t.strftime("%T")
    @uri ||= 'https://api.github.com/repos/' + self.author.username + '/' + self.name
    query_url = @uri + "/commits?per_page=1000&since=" + two_weeks_ago
    response = HTTParty.get(query_url);
  end

  def cpd_score
    update_branches if !@branch_heads
    get_commits if !@cpd_commits

    @cpd = @cpd_commits / 14.0
  end

end
