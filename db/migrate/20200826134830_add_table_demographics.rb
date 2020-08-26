class AddTableDemographics < ActiveRecord::Migration[5.2]
  def change
    create_table :demographics do |t|
      t.integer :user_id, null: false 
      t.string :sex
      t.string :gender
      t.string :race 
      t.string :ethnicity
      t.string :education_level 
      t.integer :age 
      t.string :primary_language 

      t.timestamps
    end
    
    add_index :demographics, :user_id, unique: true 
    add_column :users, :admin, :boolean, default: false 
  end
end
