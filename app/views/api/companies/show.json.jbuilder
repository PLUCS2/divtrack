json.company do
    json.extract! @company, :id, :name, :email_ending, :owner_id
    json.employee_ids @company.employees.pluck(:id)
end 

json.users do 
    @company.employees.each do |emp| 
        json.set! emp.id do 
            json.extract! emp, :id, :first_name, :last_name, :email, :pronoun, :username, :admin, :rank, :company_id
        end 
    end 
end 


# {company: {
#         1: {
#             id: 1, 
#             name: "Amazon"
#         }, 

#     }, 
#     users: {
#         1: {
#             id: 1, 
#             name: "Jack "
#         }
#     }
# }