json.user do 
    json.extract! @user, :id, :first_name, :last_name, :email, :pronoun, :username, :admin, :rank, :company_id
end 

json.company do
    json.extract! @user.company, :id, :name, :email_ending, :owner_id
    json.employee_ids @user.company.employees.pluck(:id)
end 