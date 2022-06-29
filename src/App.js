import React from "react";
import {Router, BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from "./Register";

function App() {
  return (
   <BrowserRouter>
          <Routes>
                 <Route path="Register" element={<Register/>}/>
          </Routes>
   </BrowserRouter>
  );
}

export default App;
