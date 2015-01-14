class AddUidToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :uid, :string, :unique => true
    add_column :users, :provider, :string
    add_column :users, :username, :string
  end

  def self.down
    remove_column :users, :uid
    remove_column :users, :provider
    remove_column :users, :username
  end
end
