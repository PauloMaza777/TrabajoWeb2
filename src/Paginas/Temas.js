import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Hojas-de-Estilo/Temas.css';

function Temas(){
 const [arrayTemas, setArrayTemas] = useState([]);
 const [estadoPeticion, setEstadoPeticion]=useState(null);

 useEffect(()=>{

  const ObtenerTemas = async () => {
    try{
      const url = 'http://localhost/temas';
      const result =  await axios.get(url);
      //console.log(result.data);
      setArrayTemas(result.data);
    }catch(error){
       //console.log(error.response.request.status);
       setEstadoPeticion(error);
    }
  }
  ObtenerTemas();
 },[]);

  return(
     <div className='temas'>
      <h1>Gestión De Temas</h1>
     
      <table className='tabla_temas'>
        <thead>
          <tr>
            <th>Temas</th>
          </tr>
        </thead>
        <tbody>
          {
            arrayTemas.map((tema)=>{
              return(
                <tr key={tema.id_tema}>
                  <td>{tema.nombre}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      {estadoPeticion && <div className='msg_error'>{estadoPeticion.message}</div>}
     </div>
  );
}

export default Temas;