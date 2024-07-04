import React from "react";
import img_consult from "../imagenes/consultar.png";

class Consultar extends React.Component{
    render(){
        return(
            <div>
                <h1>CONSULTA DE ACTIVIDADES</h1>
                <label>Nombre de Usuario </label><input/><br/><br/>
                <img className="img-icon" src={img_consult} alt="Imagen"></img><br/> <br/>
                <button>Consultar</button><br/> <br/>
                <h2>RESULTADO</h2>
                <label>Actividad realizada&nbsp;</label><input/><br/><br/>
                <label>Horas trabajadas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input/><br/><br/>
                <label>Observaciones&nbsp;</label> 
                <textarea></textarea><br/> <br/>
                
            </div>
        )
    }
}
export default Consultar
