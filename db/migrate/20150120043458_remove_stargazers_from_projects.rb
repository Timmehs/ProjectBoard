class RemoveStargazersFromProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :stargazers
    remove_column :projects, :watchers
  end
end
