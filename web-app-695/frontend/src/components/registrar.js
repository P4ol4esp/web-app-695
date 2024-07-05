import img_register from "../imagenes/registro.png";

function Registrar(){
        return(
            <div>
                <h1>REGISTRO DE USUARIOS</h1>
                <img className= 'img-icon' src={img_register}></img><br/><br/>
                <form action= '/registrar_usuarios' method= 'post'>
                    <label>Name </label><input name="name"/><br/><br/>
                    <label>Lastname </label><input name="lastname"/><br/><br/>
                    <label>Id </label><input name="id"/><br/><br/>
                    <button>Registrar</button>
                </form>
             </div>
        )
}
export {Registrar}