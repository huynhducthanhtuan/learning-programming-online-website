import React, { useReducer, createContext } from "react";
import { reducer, initialState } from "./reducers";
import GlobalStyle from "./components/GlobalStyle";
import Root from "./components/Screen/root";
import { ToastContainer, toast } from "react-toastify";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStyle>
      <ToastContainer position="top-right" autoClose={1000} type="default" />
      <UserContext.Provider value={{ state, dispatch }}>
        <Root />
      </UserContext.Provider>
    </GlobalStyle>
  );
}

export default App;
