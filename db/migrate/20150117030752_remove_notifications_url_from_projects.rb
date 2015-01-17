class RemoveNotificationsUrlFromProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :notifications_url
  end
end
