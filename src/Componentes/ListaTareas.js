import React, {useState } from "react";
import TareaFormulario from "./Formulario";
import Tarea from "./Tarea";
import '../Styles/ListaTareas.css'


function ListaTareas (){

    const [tareas,setTareas] = useState([]);

    const agregarTarea = tarea => {
        if(tarea.texto.trim()){ //verificamos si la cadena no esta vacia
            tarea.texto = tarea.texto.trim();//le quitamos los espacios
            const taresActualizadas = [tarea, ...tareas];//le decimos que muestre de primero la tarea que se agregue, y que las convierta en individuales
            setTareas(taresActualizadas);//actualizamos el estado
        }
    }

    const eliminarTarea = id => {
        const taresActualizadas = tareas.filter (tarea => tarea.id !==id);
        setTareas(taresActualizadas);
    }
    
    const completarTarea = id => {
        const taresActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;//Esto invierte el estado de la tarea (de false a True)
            }
            return tarea;
        })
        setTareas(taresActualizadas);
    }

    return(
        // (<> </>) estos se llaman fragmentos y nos permiten escribir la estructura
        //y se eliminan cuando no aparece la estructura en html, en lugar de agregar un contenedor adicional (div)
        <>
            <TareaFormulario onSubmit = {agregarTarea}/>
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}//le asignamos un indicador unico, para que sepa el orden en el que debe poner las tareas
                            id={tarea.id}
                            texto = {tarea.texto}
                            completada = {tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaTareas