export const validatePassword = (password) => {
  if (password.length == 0) {
    return {
      isValid: false,
      error: "Please input password",
    };
  }
  if (password.length >= 8 && password.length <= 20) {
    return { isValid: true, error: "" };
  } else {
    return {
      isValid: false,
      error: "Password's length must be between 8 to 20 characters",
    };
  }
};
