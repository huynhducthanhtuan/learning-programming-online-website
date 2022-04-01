export const getCourses= (sortBy) => {
    return(
        fetch(`/course?sortBy=${sortBy}&order=desc&limit=6`, {
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
export const getCategories = () => {
    return(
        fetch(`/category`, {
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

export const getFilteredCourses = (skip, limit, filters ={}) => {
    const data ={limit, skip, filters};
    
    return fetch(`/course/by/search`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        return res.json();
    })
    .catch(err => {
        console.log(err);
    });
}

