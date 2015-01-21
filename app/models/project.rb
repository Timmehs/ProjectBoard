# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  name        :string(255)      not null
#  owner_id    :integer          not null
#  html_url    :string(255)      not null
#  homepage    :string(255)      not null
#  stargazers  :integer          not null
#  watchers    :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#  uid         :integer
#  description :text
#

class Project < ActiveRecord::Base
  validates :name, :owner_id, :html_url, :uid, :description, presence: true
  validates :name, uniqueness: true

  acts_as_taggable

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )

end
