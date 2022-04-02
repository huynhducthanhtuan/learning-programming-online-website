import React, { useReducer, createContext } from "react";
import { reducer, initialState } from "./reducers";
import GlobalStyle from "./Components/GlobalStyle"
import Root from './Components/Screen/root'

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
