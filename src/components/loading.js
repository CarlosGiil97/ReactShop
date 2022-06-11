import React from "react";
import "../css/spinner.css";
import { Spinner, Button } from "react-bootstrap";

const Loading = () =>{
    return (
        <>
         <div className="App">
            <div className="row">
                <div className="col-12">
                        <Spinner style={{ width: "4rem", height: "4rem" }}
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        <h1>Cargando...</h1>
                   
                </div>
            </div>
         </div>
        
           
        </>
    );
    
}

export default Loading;