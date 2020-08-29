json.company do
    json.extract! @company, :id, :name, :email_ending, :owner_id
end 

json.user do 
    json.extract! @user, :id, :first_name, :last_name, :email, :pronoun, :username, :admin, :rank, :company_id
end 