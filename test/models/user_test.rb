# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string(255)
#  password_digest :string(255)
#  session_token   :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#  uid             :string(255)
#  provider        :string(255)
#  username        :string(255)
#  avatar          :string(255)
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
