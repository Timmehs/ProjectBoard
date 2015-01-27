# == Schema Information
#
# Table name: commits
#
#  id           :integer          not null, primary key
#  sha          :string(255)      not null
#  user_uid     :integer          not null
#  message      :text             not null
#  committed_on :string(255)      not null
#  created_at   :datetime
#  updated_at   :datetime
#  project_id   :integer
#

class Commit < ActiveRecord::Base
  attr_accessor :sha, :user_uid, :message, :committed_on
  validates :sha, :user_uid, :message, :committed_on, presence: true
  validates :sha, uniqueness: true

  belongs_to :project

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :user_uid,
    primary_key: :uid
  )

end
