class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :github_name
      t.string :email
      t.string :password_digest
      t.string :session_token

      t.timestamps
    end
  end
end
