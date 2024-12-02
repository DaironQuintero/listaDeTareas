import React from "react";
import '../Styles/Tarea.css'
import { AiFillDelete  } from "react-icons/ai";

function Tarea({id, texto, completada, completarTarea, eliminarTarea}){
    return(
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor" }>
            <div 
            className="tarea-texto"
            onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div 
            className="tarea-contenedor-icons"
            onClick={() => eliminarTarea(id)}>
               <AiFillDelete  className="tarea-icon" />
            </div>
        </div>
    );
}

export default Tarea