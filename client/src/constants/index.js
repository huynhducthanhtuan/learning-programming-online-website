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

// source: https://jsfiddle.net/4djhso1y/
export const validateFullname = (fullname) => {
  const firstLetter = "[A-EGHIK-VXYÂĐỔÔÚỨ]".normalize("NFC");
  const otherLetters =
    "[a-eghik-vxyàáâãèéêìíòóôõùúýỳỹỷỵựửữừứưụủũợởỡờớơộổỗồốọỏịỉĩệểễềếẹẻẽặẳẵằắăậẩẫầấạảđ₫]".normalize(
      "NFC"
    );
  const regexString =
    "^" +
    firstLetter +
    otherLetters +
    "+\\s" +
    "(" +
    firstLetter +
    otherLetters +
    "+\\s)*" +
    firstLetter +
    otherLetters +
    "+$";
  const regexPattern = RegExp(regexString);

  if (regexPattern.test(fullname.normalize("NFC"))) {
    return { isValid: true, error: "" };
  } else {
    return {
      isValid: false,
      error: "Fullname is not valid",
    };
  }
};

export const validateEmail = (email) => {
  const regexp =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
  const checkingResult = regexp.exec(email);

  if (checkingResult !== null) {
    return { isValid: true, error: "" };
  } else {
    return {
      isValid: false,
      error: "Email is not valid",
    };
  }
};

export const validatePhoneNumber = (phoneNumber) => {
  const regexp = /^\d{10}$/;
  const checkingResult = regexp.exec(phoneNumber);

  if (checkingResult !== null) {
    return { isValid: true, error: "" };
  } else {
    return {
      isValid: false,
      error: "Phone number must has 10 numbers",
    };
  }
};

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
