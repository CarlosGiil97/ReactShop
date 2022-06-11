import React from "react";

const Wait = () =>{
    return(
        <>
        {console.log('entro en wait')}
        <div className="spinner-border" role="status">
            <span className="sr-only"><h1>Cargando productor...</h1></span>
        </div>
        </>
    );
}

export default Wait;