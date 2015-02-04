class BoardMembership < ActiveRecord::Base
  validates :user_id, :board_id, presence: true
  validates_uniqueness_of :user_id, :scope => :board_id

  belongs_to :member, class_name: "User", foreign_key: :user_id, primary_key: :id
  belongs_to :board
end
