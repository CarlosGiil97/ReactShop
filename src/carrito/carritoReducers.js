
const types = {
    anadirProductoCarrito: 'carrito anadir producto',
    eliminarProductoCarrito: 'carrito eliminar producto',
    limpiarCarrito: 'carrito-limpiar'
}
var valueLocalStorage = localStorage.getItem('productos');
console.log(valueLocalStorage)
if(valueLocalStorage == '' || valueLocalStorage ==  ' ' || valueLocalStorage == null){
    localStorage.setItem('productos', 'empty');
}

var prueba = localStorage.getItem('productos');
if(prueba != 'empty'){
    prueba = JSON.parse(prueba);
    console.log(prueba,'desde provider')
}else{
    prueba = {};
}

//compruebo que prueba no es nullo o undefines para crear array productos en el localStorage

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