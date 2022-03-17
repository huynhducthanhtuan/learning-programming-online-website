export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const isAuth = () => {
  if (typeof window == "undefined") {
    return false;
  } else {
    if (localStorage.getItem("jwt")) {
      return true;
    } else return false;
  }
};

export const signOut = () => {
  localStorage.removeItem("jwt");

  fetch("/auth/signout", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      // Toast message - data.message
      alert(data.message);
    })
    .catch((err) => {
      console.log(err);
    });
};
