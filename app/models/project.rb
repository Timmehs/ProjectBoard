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
  attr_reader :uri, :branch_heads
  validates :name, :owner_id, :html_url, :uid, :description, presence: true
  validates :name, uniqueness: true
  acts_as_taggable
  after_initialize :cpd_score

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )




  def update_branches
    @uri ||= 'https://api.github.com/repos/' + self.author.username + '/' + self.name
    @branch_heads ||= {}
    response = HTTParty.get(@uri + '/branches')
    response.each do |branch|
      @branch_heads[branch['name']] = branch['commit']['sha']
    end
  end

  def get_commits
    @cpd_commits = 0

    @branch_heads.values.each do |sha|
      @cpd_commits += query_commits(sha).length
    end

  end

  def query_commits(sha)
    t = (Time.now - 14.days)
    one_week_ago = t.strftime("%F") + "T" + t.strftime("%T")
    query_url = @uri + "/commits?per_page=1000&sha=" + sha +"&since=" + one_week_ago
    response = HTTParty.get(query_url);
  end

  def cpd_score
    update_branches if !@branch_heads
    get_commits if !@cpd_commits

    @cpd = @cpd_commits / 14.0
  end

end
