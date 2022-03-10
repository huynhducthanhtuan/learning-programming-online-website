import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";

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
            <Route path="/" element={<Home />}></Route>

         </Routes>    
   
  );
}

export default App;
