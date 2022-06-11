import React, { Component, useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation  } from "react-router-dom";
import { CarritoContext } from '../carrito/carritoProvider.js';

const NavBar = (props) =>{
    const url = useLocation();
    const partesURL = url['pathname'].split("/");
    var flagShowIcon = false;
    if(partesURL[1] != 'checkout'){
        flagShowIcon = true;
    }

    const [carrito, dispatch] = useContext(CarritoContext);
    var numElementsCart = carrito['productos'].length ?? 0;
    
    useEffect(() => {
      numElementsCart = 
      localStorage.setItem('productos', JSON.stringify(carrito));
  
    }, [carrito]);


   return(
        <>
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Tienda Padel React 🎾</a>
               <h6> {flagShowIcon ? <a href="/checkout"><i class="fa-solid fa-cart-shopping">{numElementsCart} Ver carrito</i></a> : ''}</h6>
                
            </div>
        </nav>
        </>
   )
}

export default NavBar;