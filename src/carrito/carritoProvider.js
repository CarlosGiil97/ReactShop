import { createContext,useReducer } from "react";

import carritoReducer, { initialCarrito } from "./carritoReducers";

const CarritoContext = createContext();


const CarritoProvider = ({ children }) => {
    const [carrito, dispatch] = useReducer(carritoReducer, initialCarrito)
    return (
        <CarritoContext.Provider value={[carrito, dispatch]}>
            {children}
        </CarritoContext.Provider>
    )
}

export { CarritoContext }
export default CarritoProvider;