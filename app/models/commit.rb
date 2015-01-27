# == Schema Information
#
# Table name: commits
#
#  id           :integer          not null, primary key
#  sha          :string(255)      not null
#  user_uid     :integer          not null
#  message      :text             not null
#  created_at   :datetime
#  updated_at   :datetime
#  project_id   :integer
#  committed_on :datetime
#

class Commit < ActiveRecord::Base
  validates :sha, :user_uid, :message, :committed_on, presence: true
  validates :sha, uniqueness: true

  belongs_to :project
  belongs_to :user, foreign_key: :user_uid, primary_key: :uid

end
