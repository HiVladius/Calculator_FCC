import React from "react";
import "../hojas-estilo/Boton-Clear.css"

const BotonClear = (props) => (
    <div className="boton-clear" onClick={props.oneClic}>
        {props.children}
    </div>
);

export default BotonClear