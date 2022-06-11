import React, { Component, useContext ,useEffect} from 'react'
import { CarritoContext } from '../carrito/carritoProvider.js';
import { types } from "../carrito/carritoReducers.js";
import ProductoUnicoCarrito from './productoUnicoCarrito.js';


const  Carrito = (props) =>  {
     const [carrito, dispatch] = useContext(CarritoContext);
     //desestructuro lo que me viene del contexto
     //
     console.log(carrito)
     useEffect(() => {
        
     }, [carrito]);

    
     var numeroDeElementos = 0;
     var elementosCarrito = carrito ?? null;
     elementosCarrito = elementosCarrito['productos'] ? elementosCarrito['productos'] : null;
     numeroDeElementos = elementosCarrito.length >0 ? elementosCarrito.length : 0;

     //obtener suma total carrito
     var subtotal =0;
     var total =0;

     {elementosCarrito.map((item) => (
          subtotal+= item['precio']
     ))}
     if(subtotal != 0){total = subtotal+20;}else{ total = 0}     


     return (
          <>
          <section className="h-100 h-custom" style={{ backgroundColor: '#eee', borderRadius: '.5rem .5rem 0 0' }} >
               <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                         <div className="col">
                         <div className="card">
                              <div className="card-body p-4">

                              <div className="row">

                              <div className="col-lg-7">
                                   <h5 className="mb-3"><a href="/" className="text-body"><i
                                        className="fas fa-long-arrow-alt-left me-2"></i>Seguir comprando</a></h5>
                                   <hr></hr>

                                   <div className="d-flex justify-content-between align-items-center mb-4">
                                   <div className="row">
                                        
                                        <h6 className=" col mb-0">Tienes {numeroDeElementos} productos en el carrito</h6>
                                        <a><h6 className="col mb-0" onClick={() => {dispatch({type: types.limpiarCarrito})}}> ¿ Limpiar carrito ?</h6></a>
                                   </div>
                                  
                                   </div>
                                   
                                   {/* //recorro carrito */}
                                   {elementosCarrito.map((item) => (
                                        <ProductoUnicoCarrito informacion={item} />
                                   ))}
                                   


                              </div>
                              <div className="col-lg-5">

                                   <div className="card bg-primary text-white rounded-3">
                                   <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h5 className="mb-0">Detalles de la tarjeta</h5>
                                        <img src={`https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp`} className="img-fluid rounded-3" style={{width: '45px'}} alt="Avatar" />
                                        </div>

                                        <p className="small mb-2">Tipo de tarjeta</p>
                                             <i class="fas fa-credit-card"></i>

                                        <form className="mt-4">
                                        <div className="form-outline form-white mb-4">
                                        <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                             placeholder="Nombre ..." />
                                        <label className="form-label" >Nombre reflejado en la tarjeta</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                        <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                                             placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
                                        <label className="form-label" >Numero tarjeta</label>
                                        </div>

                                        <div className="row mb-4">
                                        <div className="col-md-6">
                                             <div className="form-outline form-white">
                                             <input type="text" id="typeExp" className="form-control form-control-lg"
                                                  placeholder="MM/YYYY" size="7"  minLength="7" maxLength="7" />
                                             <label className="form-label" >Expiración</label>
                                             </div>
                                        </div>
                                        <div className="col-md-6">
                                             <div className="form-outline form-white">
                                             <input type="password" id="typeText" className="form-control form-control-lg"
                                                  placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                                             <label className="form-label">CVV</label>
                                             </div>
                                        </div>
                                        </div>

                                        </form>

                                        <hr className="my-4"></hr>

                                        <div className="d-flex justify-content-between">
                                        <p className="mb-2">Subtotal</p>
                                        <p className="mb-2">{subtotal != 0 ? subtotal : '-'} €</p>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                        <p className="mb-2">Envío</p>
                                        <p className="mb-2">20.00 €</p>
                                        </div>

                                        <div className="d-flex justify-content-between mb-4">
                                        <p className="mb-2">Total</p>
                                        <p className="mb-2">{total != 0 ? Math.round(total,2) : '-'} €</p>
                                        </div>

                                        <button type="button" className="btn btn-info btn-block btn-lg">
                                        <div className="d-flex justify-content-between">
                                        <span></span>
                                        <span>Pagar <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                                        </div>
                                        </button>

                                   </div>
                                   </div>

                              </div>

                              </div>

                              </div>
                         </div>
                         </div>
                    </div>
               </div>
          </section>
          </>
     );

}
export default Carrito;