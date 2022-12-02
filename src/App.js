import './App.css';
import React from 'react';
import Navigation from "./Navigation";
import {BrowserRouter,Route,Routes} from "react-router-dom";

//components
import Home from "./components/Home";
import Login from "./components/Login";
import Carrito from "./components/Carrito";
import Administracion from "./components/Administracion";
import VistaProducto from "./components/VistaProducto";

function App() {
  return (
    <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/react-example" component={App}element={<Navigation />} >
                        <Route index element={<Home/>} />
                        <Route path="Home"  element={<Home/>} />
                        <Route path="Login"  element={<Login/>} />
                        <Route path="Carrito"  element={<Carrito/>} />
                        <Route path="Administración"  element={<Administracion/>} />
                        <Route path="VistaProducto"  element={<VistaProducto/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
  );
}
export default App;
