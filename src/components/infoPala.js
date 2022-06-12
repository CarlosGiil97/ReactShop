import React, { Component, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation  } from "react-router-dom";
import {useState, useEffect} from 'react';
import { CarritoContext } from '../carrito/carritoProvider.js';
import { types } from "../carrito/carritoReducers.js";

const InfoPala = (props) =>{

   const [carrito, dispatch] = useContext(CarritoContext);
   //desestructuro lo que me viene del contexto

   useEffect(() => {
      console.log(carrito)
   }, [carrito]);

   const url = useLocation();
   const partesURL = url['pathname'].split("/");
   const idPala = partesURL[2] ?? null;
   var basededatos = props.info ?? null;
   
   if(basededatos != null){
      var info = basededatos[idPala] ?? null;
   }
   
   return ( 
      <>
         <div className="container-fluid">
            <div className="row mt-5">
               <div className="col-md-8">
                   <img style={{ width: '50%'}} src={`https://firebasestorage.googleapis.com/v0/b/padelreacttest.appspot.com/o/${info.id}.jpg?alt=media&token=3b5cce1a-b198-424d-b7a3-66e21baa05be`}/> 
               </div>
               <div className="col-md-4 mt-2">
                  <div className="page-header">
                     <h2>
                     {info.nombre}
                     </h2>
                  </div>
                  <blockquote className="blockquote">
                     <p className="mb-0">
                     {info.detalles}
                     </p>
                    
                  </blockquote>
                 
                     <li className="list-group-item border-0"><h6><b>Marca: </b>{info.marca}</h6></li>
                     <li className="list-group-item border-0"><h6><b>Stock: </b>{info.stock}</h6></li>
                     <li className="list-group-item border-0"><h6><b>Precio: </b>{info.precio} €</h6></li>
                     <div class="container-fluid">
                  <div class="row">
                     <div class="col-md-6">
                        
                        <button href="/" type="button" class="btn btn-block btn-info">
                           Volver atrás
                        </button>
                     </div>
                     <div class="col-md-6">
                        
                        <button type="button" onClick={() => {dispatch({type: types.anadirProductoCarrito, payload: info})}} class="btn btn-success btn-block">
                           Añadir al carrito <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                     </div>
                  </div>
</div>
                  
               </div>
            </div>
         </div>
      </>
      
   );
}

export default InfoPala;
