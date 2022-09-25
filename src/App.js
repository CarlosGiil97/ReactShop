import React, { useReducer ,useEffect } from "react";
import { useState, render } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Home from "./components/Home.js";
import { db } from './firebase-config.js';
import { ref,onValue,push,update,remove} from 'firebase/database';
import InfoPala from './components/infoPala.js';
import Carrito from './components/carro.js';
import CarritoProvider from "./carrito/carritoProvider";
import NavBar from "./components/navBar";
import Loading from "./components/loading";
import Footer from "./components/footer.js"

const App = () => {
    const [estado,setEstado] = useState([]);
    
    useEffect(() => {
      return onValue(ref(db, '/productos'), querySnapShot => {
        let data = querySnapShot.val() || {};
        let todoItems = {...data};
        setEstado(todoItems);
        
      });
      
    },[]);
    


    const renderHtml = () => {
    return (
            <CarritoProvider>
                <Router>
                    <div className="App">
                        <NavBar  /> 
                        <Routes>
                            <Route path="/" element={<Home info={estado} />} /> 
                            <Route path="/pala/:param1" element={<InfoPala info={estado} />} /> 
                            <Route path="/checkout"  element={<Carrito  />} /> 
                        </Routes>
                        <Footer/>
                    </div>
                </Router>
            </CarritoProvider>
        );
    }

        return (
            <>
                {Object.keys(estado).length === 0 ? <Loading />  : renderHtml()} 
                {/* //condicional ternario */}
            </>
        );
    

}

export default App ;