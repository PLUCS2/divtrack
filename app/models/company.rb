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

    validates :name, :email_ending, presence: true, uniqueness: true 

    has_many :employees, 
    foreign_key: :company_id, 
    class_name: :User

    belongs_to :owner, 
    class_name: :User 

    def redo_user_emails 
        emps = self.employees 
        emps.each do |emp| 
            new_email = emp.email.split("@")[0] 
            new_email += self.email_ending
            emp.email = new_email
            emp.save! 
        end 
    end 

end 
