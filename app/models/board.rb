class Board < ActiveRecord::Base
  validates :name, presence: true

  has_many :board_memberships
  has_many :members, class_name: "User", through: :memberships

end
