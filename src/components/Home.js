import React, { Component, useContext } from 'react'
import { useState, useEffect } from 'react';
import { db } from '../firebase-config.js';
import { ref,onValue,push,update,remove} from 'firebase/database';
import ListadoProductos from "./listadoProductos.js";
import { CarritoContext } from '../carrito/carritoProvider.js';


const Home = (props) => {
  const [carrito, dispatch] = useContext(CarritoContext);
  //desestructuro lo que me viene del contexto
  console.log(carrito)
  var estado = props.info;
  
  useEffect(() => {
    
    localStorage.setItem('productos', JSON.stringify(carrito));

  }, [carrito]);

 

 
 return (
   
      <>
        
        <div className="app-container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">

          </nav>

            <div className='container mt-5'>
                <div className="row">  
                    {estado !== [] ? Object.keys(estado).map(function(key) { return ( <> <ListadoProductos   key={estado[key].id} id={estado[key].id} nombre={estado[key].nombre} detalles={estado[key].detalles} marca={estado[key].marca} precio={estado[key].precio} stock={estado[key].stock} /> </>)   }) :  'Vacio'}
                  
                </div>
            </div>
        </div>
      </>
 )

}

export default Home;
