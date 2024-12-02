import React, {useState} from "react";
import '../Styles/TareaFormulario.css'
import {v4 as uuidv4} from 'uuid';

function TareaFormulario (props){

    const [input,setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value);//nos permite extraer el valor que escribio el usuario
    }

    const manejarEnvio = e =>{
        e.preventDefault(); //este metodo es para que el formulario no se recargue

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }

    return(
        <form 
        className="tarea-formulario"
        onSubmit={manejarEnvio}>
            <input
                className="tarea-input"
                type="text"
                placeholder="Escribe una tarea"
                name="texto"
                onChange={manejarCambio}
            />
            <button className="tarea-boton">
                Agregar Tarea
            </button>
        </form>
    );
}

export default TareaFormulario