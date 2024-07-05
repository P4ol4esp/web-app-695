function Home(){
    return(
        <div>
            <p>Puesta en marcha de una página web - Entrega Semana 2</p>
            <p>Realizado por</p>
            <p>Paola España & Oswaldo Ibarra</p>

            <div className="div-login">
            <img id="img-home" src="https://co.isotools.us/wp-content/uploads/2013/07/UNIMINUTO.jpg" alt="Imagen"></img>
            <h1>Login</h1>
            <form>
                <label>Usuario&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input/><br/><br/>
                <label>Contraseña </label><input/><br/><br/>
                <button>Ingresar</button>
            </form>
            </div>
        </div>
    )
}

export{Home}