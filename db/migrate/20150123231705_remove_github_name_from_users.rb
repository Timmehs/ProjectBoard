class RemoveGithubNameFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :github_name
  end
end
