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

<<<<<<< HEAD
    fetch('/auth/signout', {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        }
    })
    .then(res=> res.json())
    .catch(err => {
        console.log(err);
    })
}
=======
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
>>>>>>> 391808446986ef4f9cdc229e9b90833a7210862f
