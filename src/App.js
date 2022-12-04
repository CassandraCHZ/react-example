import './App.css';
import React from 'react';
import Navigation from "./Navigation";
import {BrowserRouter,Route,Routes} from "react-router-dom";

//components
import Home from "./components/Home";
import Login from "./components/Login";
import ShoppingCart from "./components/ShoppingCart";
import Administration from "./components/Administration";
import ProductCard from "./components/ProductCard";
import Contact from "./components/Contact";
import Register from "./components/Register";
import PurchaseOrder from "./components/PurchaseOrder";
import Catalog from "./components/Catalog";

function App() {
  return (
    <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/react-example" component={App}element={<Navigation />} >
                        <Route index element={<Home/>} />
                        <Route path="Home"  element={<Home/>} />
                        <Route path="Login"  element={<Login/>} />
                        <Route path="ShoppingCart"  element={<ShoppingCart/>} />
                        <Route path="Administratation"  element={<Administration/>} />
                        <Route path="ProductCard"  element={<ProductCard/>} />
                        <Route path="Contact"  element={<Contact/>} />
                        <Route path="Register"  element={<Register/>} />
                        <Route path="PurchaseOrder"  element={<PurchaseOrder/>} />
                        <Route path="Catalog"  element={<Catalog/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
  );
}
export default App;
