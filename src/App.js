import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './Paginas/Inicio';
import Temas from './Paginas/Temas';
import Autores from './Paginas/Autores';
import NotFound from './Paginas/NotFound';
import Navbar from './Componentes/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/temas' element={<Temas/>}/>
        <Route path='/autores' element={<Autores/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
