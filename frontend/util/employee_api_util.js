export const changeAdmin = id => {
    return $.ajax({
        url: `/api/users/admin/${id}`, 
        method: "POST"
    }); 
}; 