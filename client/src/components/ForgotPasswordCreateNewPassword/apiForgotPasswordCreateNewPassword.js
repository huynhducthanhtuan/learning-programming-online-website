export const createNewPasswordApi = (data) => {
  return fetch("forgot-password/create-new-password/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => err);
};
