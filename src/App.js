import './App.css';
import React from 'react';
import Navigation from "./Navigation";
import {BrowserRouter,Route,Routes} from "react-router-dom";

//components
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/react-example" element={<Navigation />} >
                        <Route index element={<Home/>} />
                        <Route path="Home"  element={<Home/>} />
                        <Route path="Login"  element={<Login/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
  );
}
export default App;
