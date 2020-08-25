class AddColumnToCompany < ActiveRecord::Migration[5.2]
  def change
    add_column :companies, :owner_id, :integer, null: false 
    add_index :users, :email, unique: true 
    add_index :companies, :name, unique: true 
  end
end
