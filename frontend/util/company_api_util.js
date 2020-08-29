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