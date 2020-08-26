# == Schema Information
#
# Table name: companies
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  email_ending :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  owner_id     :integer          not null
#
class Company < ApplicationRecord 

    validates :name, :email_ending, presence: true
    validates :name, uniqueness: true 

    has_many :users

    belongs_to :owner, 
    class_name: :User 

end 