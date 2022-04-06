export const getBraintreeClientToken = (userId, token) => {
    return fetch(`/braintree/getToken/${userId}`,{
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        }
    }).then(res => res.json())
    .catch(err => console.log(err))
}

export const processPayment = (userId, token, paymentData) => {
    return fetch(`/braintree/payment/${userId}`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData)
    }).then(res => {
        return res.json();
    })
    .catch(err => console.log(err))
}

export const registerCourse = (userId, token, courseId) => {

    console.log(userId);
    console.log(token);
    console.log(courseId);
    return fetch(`/user/registerCourse/${userId}`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({courseId})
    }).then(res => {
        return res.json();
    })
    .catch(err => console.log(err))
}