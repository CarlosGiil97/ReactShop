import React, { Component, useContext } from 'react'
import { CarritoContext } from '../carrito/carritoProvider.js';
import { types } from "../carrito/carritoReducers.js";


const ListadoProductos = (props) => {
    const [carrito, dispatch] = useContext(CarritoContext);
    //desestructuro lo que me viene del contexto
    const {numeroElementosCarrito, productos} = carrito;


    return (
        <>
        <div className="col-3">
            <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{props.nombre}</h4>
            </div>
            <div className="card-body">
                <img className='card-img-top' src={`https://firebasestorage.googleapis.com/v0/b/padelreacttest.appspot.com/o/${props.id}.jpg?alt=media&token=3b5cce1a-b198-424d-b7a3-66e21baa05be`} />

                <h5 class="card-title pricing-card-title">{props.precio}<small className="text-muted fw-light"> €</small></h5>
                <ul className="list-unstyled mt-3 mb-4">
                    <li><b>Marca:</b>{props.marca}</li>
                </ul>
                <button type="button" onClick={() => {dispatch({type: types.anadirProductoCarrito, payload: props})}} className="w-50 btn btn-lg btn-outline-primary">Añadir<i class="fa-solid fa-cart-shopping"></i></button>
                <a href={`/pala/${props.id}`} className="w-50 btn btn-lg btn-outline-secondary" >Ver <i className="fa-solid fa-eye"></i></a>
            </div>
            </div>
        </div>
        </>
    );
}

export default ListadoProductos;