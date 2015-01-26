class CreateCommits < ActiveRecord::Migration
  def change
    create_table :commits do |t|
      t.string :sha, null: false
      t.integer :user_uid, null: false
      t.text :message, null: false
      t.string :committed_on, null: false

      t.timestamps
    end

    add_index :commits, :user_uid
    add_index :commits, :sha
  end
end
