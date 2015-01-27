class ChangeCommittedOnToDateTime < ActiveRecord::Migration
  def change
    change_column :commits, :committed_on, :datetime
  end
end
