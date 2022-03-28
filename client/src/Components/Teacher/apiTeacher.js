export const createCategoryApi = (userId, token, category) => {
    return fetch(`/category/create/${userId}`, {
        method: "POST",
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(category)

    })
    .then(res => res.json())
    .catch(err => console.log(err))
    
}