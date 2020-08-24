class CreateUsersTable < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false 
      t.string :email, null: false 
      t.integer :company_id, null: false 
      t.string :password_digest, null: false 
      t.string :session_token, null: false 

      t.timestamps
    end

    create_table :companies do |t|
      t.string :name, null: false 
      t.string :email_ending, null: false 

      t.timestamps
    end

    add_index :users, :username, unique: true
  end
end
