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

require 'test_helper'

class CommitTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
