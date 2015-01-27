class ChangeCommittedOnToDateTime < ActiveRecord::Migration
  def change
    remove_column :commits, :committed_on
    add_column :commits, :committed_on, :datetime
  end
end
