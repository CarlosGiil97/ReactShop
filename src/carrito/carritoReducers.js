
const types = {
    anadirProductoCarrito: 'carrito anadir producto',
    eliminarProductoCarrito: 'carrito eliminar producto',
    limpiarCarrito: 'carrito-limpiar'
}
const prueba = JSON.parse(localStorage.getItem('productos'));

const initialCarrito = {

    productos : prueba.productos ?? []
}

const carritoReducer = (state, action) =>{
    switch(action.type){
        case types.anadirProductoCarrito:
            return {
                productos: [...state.productos, action.payload]
            }
        case types.eliminarProductoCarrito:
            var todo = state.productos;
            const newList = todo.filter((item) => item.id !== action.payload);

            return {
                productos : newList
            }
        case types.limpiarCarrito:
            return {
                productos : []
            }
        default:
            return state;
    }
}

export { initialCarrito, types };
export default carritoReducer;