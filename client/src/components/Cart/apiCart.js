export const getBraintreeClientToken = (userId, token) => {
    return fetch(`/braintree/getToken/${userId}`,{
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        }
    }).then(res => res.json())
}