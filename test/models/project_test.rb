# == Schema Information
#
# Table name: projects
#
#  id                :integer          not null, primary key
#  name              :string(255)      not null
#  owner_id          :integer          not null
#  html_url          :string(255)      not null
#  homepage          :string(255)      not null
#  stargazers        :integer          not null
#  watchers          :integer          not null
#  notifications_url :string(255)      not null
#  created_at        :datetime
#  updated_at        :datetime
#  uid               :integer
#

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
