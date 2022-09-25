import React, { Component, useContext,useEffect } from 'react'

import { CarritoContext } from '../carrito/carritoProvider.js';
import { types } from "../carrito/carritoReducers.js";

const ProductoUnicoCarrito = (info) => {
    const [carrito, dispatch] = useContext(CarritoContext);
    useEffect(() => {
        localStorage.setItem('productos', JSON.stringify(carrito));
        
      }, [carrito]);
      
    var props = info.informacion ?? null;
    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                        <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                        <div>
                        <img src={`https://firebasestorage.googleapis.com/v0/b/padelreacttest.appspot.com/o/${props.id}.jpg?alt=media&token=3b5cce1a-b198-424d-b7a3-66e21baa05be`} className="img-fluid rounded-3" alt="Shopping item" style={{width: '65px'}} />
                        </div>
                        <div className="ms-3">
                            <h5>{props.nombre}</h5>
                            <p className="small mb-0">Marca: {props.marca}</p>
                        </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <div style={{width: '50px'}}>
                            <h5 className="fw-normal mb-0">1</h5>
                        </div>
                        <div style={{width: '80px'}}>
                            <h5 className="mb-0">{props.precio} €</h5>
                        </div>
                        <a onClick={() => {dispatch({type: types.eliminarProductoCarrito, payload: props.id})}} style={{color: '#cecece'}}><i className="fas fa-trash-alt"></i></a>
                        </div>
                        </div>
                </div>
            </div>
        </>
    );
}

export default ProductoUnicoCarrito;