import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import Profile from "./pages/profile/Profile"
//  const Routing = () => {
//   return (   
//       <Routes>
//         {/* <Route path="/" element={<Header />}></Route> */}
//         <Route path="/" element={<Home />}></Route>
//       </Routes>  
//   );
// }


function App() {
  return (    
         <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/" element={<Profile />}></Route>
         </Routes>    
   
  );
}

export default App;
