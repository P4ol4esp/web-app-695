import Rec from "react"

class Navegation extends Rec.Component{
    render(){
        function go_to_home(){
           window.location="/"
        }
        let go_to_register = () => {
           window.location="/registrar"
        }
        let go_to_consult = () => {
            window.location="/consultar"
         }
        
        let go_to_contact = () => {
            window.location="/contacto"
         }

        return(
            <div className='block-navegation'>
                <li className='block-items'> 
                    <button id="btn-nav" onClick={go_to_home}>Home</button>
                </li>
                <li className='block-items'> 
                    <button id="btn-nav" onClick={go_to_register}>Registrar</button>
                </li>
                <li className='block-items'> 
                    <button id="btn-nav" onClick={go_to_consult}>Consultar</button>
                </li>
                <li className='block-items'> 
                    <button id="btn-nav" onClick={go_to_contact}>Contacto</button>
                </li>
            </div>
        )
    }
}

export default Navegation
