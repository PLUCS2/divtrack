export const createCompany = company => (
    $.ajax({
        method: "POST", 
        url: "/api/companies", 
        data: company
    })
); 

export const fetchCompany = id => {
    return $.ajax({
        method: "GET", 
        url: `/api/companies/${id}`
    })
}; 

export const editCompany = company => {
    return $.ajax({
        method: "PATCH", 
        url: `/api/companies/${company.id}`, 
        data: company
    })
};