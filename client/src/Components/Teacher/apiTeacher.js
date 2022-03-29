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

export const getCategories = () => {
    return(
        fetch('/category', {
            method: "GET"       
        })
        .then(res => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        })
    );
}

export const createCourse = (userId, token, course) => {
    console.log("Content course ", course);
    return(
        fetch(`/course/create/${userId}`, {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(course)
        })
        .then(res => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        })
    );
}