class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string, null: false 
    add_column :users, :last_name, :string, null: false 
    add_column :users, :rank, :integer, default: 1, null: false
    add_column :users, :pronoun, :string, default: "they/them/theirs", null: false 
  end
end
