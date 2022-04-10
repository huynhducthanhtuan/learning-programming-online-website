export const enableScrollBehavior = (status) => {
  document.body.style.overflow = status ? "visible" : "hidden";
};

export const defaultAvatarUrl =
  "https://res.cloudinary.com/dhzbsq7fj/image/upload/v1643101647/avatardefault_92824_aifry9.png";

export const getUserRole = () => {
  try {
    return JSON.parse(localStorage.getItem("jwt")).user.role;
  } catch (e) {
    return -1;
  }
};
