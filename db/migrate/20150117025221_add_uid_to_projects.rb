class AddUidToProjects < ActiveRecord::Migration
  def self.up
    add_column :projects, :uid, :integer
  end

  def self.down
    remove_column :projects, :uid
  end
end
