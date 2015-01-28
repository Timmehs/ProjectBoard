class AddCpdScoreToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :commit_count, :integer
  end
end
