import './App.css';
import Navegation from './components/navegation';
import {Home} from "./components/home";
import {Registrar} from "./components/registrar";
import Consultar from "./components/consultar";
import {Contacto} from "./components/contacto";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navegation/>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registrar" element={<Registrar />} />    
            <Route path="/consultar" element={<Consultar />} />    
            <Route path="/contacto" element={<Contacto />} />        
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
