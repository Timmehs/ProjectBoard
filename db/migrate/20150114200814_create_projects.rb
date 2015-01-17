class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false
      t.string :html_url, null: false
      t.string :homepage, null: false
      t.integer :stargazers, null: false
      t.integer :watchers, null: false
      t.string :notifications_url, null: false

      t.timestamps
    end
    
    add_index :projects, :owner_id
    add_index :projects, :name
  end
  
end
