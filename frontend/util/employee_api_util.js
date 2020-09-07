export const changeAdmin = id => {
    return $.ajax({
        url: `/api/users/admin/${id}`, 
        method: "POST"
    }); 
}; 

export const fetchUser = id => {
    return $.ajax({
        url: `/api/users/${id}`, 
        method: "GET"
    })
}; 