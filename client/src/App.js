import React, { useReducer, createContext } from "react";
import { reducer, initialState } from "./reducers";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./components/GlobalStyle";
import Screens from "./screens";
import {
  AvatarImageContextProvider,
  ForgotPasswordContextProvider,
} from "./contexts";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStyle>
      <ToastContainer position="top-center" autoClose={1000} type="default" />
      <UserContext.Provider value={{ state, dispatch }}>
        <AvatarImageContextProvider>
          <ForgotPasswordContextProvider>
            <Screens />
          </ForgotPasswordContextProvider>
        </AvatarImageContextProvider>
      </UserContext.Provider>
    </GlobalStyle>
  );
}

export default App;
