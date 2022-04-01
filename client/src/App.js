
import "./App.css";
import React, { useReducer, useContext, createContext } from "react";
import GlobalStyle from "./Components/GlobalStyle"
import Root from './Components/Screen/root'
import { BrowserRouter } from "react-router-dom";
import { reducer, initialState } from "./reducers";


export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
   
      <GlobalStyle>
        <UserContext.Provider value={{ state, dispatch }}>  
            <Root />     
        </UserContext.Provider>
      </GlobalStyle>
   
  );
}

export default App;
