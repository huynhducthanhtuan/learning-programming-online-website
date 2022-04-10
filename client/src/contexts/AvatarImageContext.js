import { useState, useEffect, createContext } from "react";
import { isAuthenticated } from "../components/Auth";

// Context
const AvatarImageContext = createContext();

// API
export const viewProfileApi = (data) => {
  return fetch("profile/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => err);
};

// Provider
function AvatarImageContextProvider({ children }) {
  const [avatarImage, setAvatarImage] = useState("");

  useEffect(async () => {
    // Lấy userId từ localStorage
    const userId = isAuthenticated() ? isAuthenticated().user._id : "";

    // Call API
    const data = await viewProfileApi({ _id: userId });

    // Xử lí kết quả trả về từ API
    setAvatarImage(data.pic);
  }, [avatarImage]);

  return (
    <AvatarImageContext.Provider value={{ avatarImage, setAvatarImage }}>
      {children}
    </AvatarImageContext.Provider>
  );
}

export { AvatarImageContext, AvatarImageContextProvider };
