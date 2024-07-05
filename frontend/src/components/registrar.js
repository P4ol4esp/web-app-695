function Registrar(){
        return(
            <div>
                <h1>REGISTRO DE USUARIOS</h1>
                <img id="img-home" src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" alt="Imagen"></img><br/><br/>
                <form action= '/registrar_usuarios' method= 'post'>
                    <label>Name </label><input name='name'/><br/><br/>
                    <label>Lastname </label><input name='lastname'/><br/><br/>
                    <label>Id </label><input name='id'/><br/><br/>
                   
                    <button onClick={consultar_usuarios}>Registrar</button>
                </form>
                </div>
        )
}
export {Registrar}