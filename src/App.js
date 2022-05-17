import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import api from './services/api';
import './style.css';

const App = ()=> {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

   const handleClick = async ()=>{
    if (input === '') {
      alert("Campo Vasio! Digite um CEP");
      return;
    }
    
    try {
      
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');

    } catch {

      alert('CEP Inválido, Digite apenas numero!!');
      setInput('');
    }


  }

  return (
    <div className="container">
      <h1 className="title">Onde é esse CEP?</h1>

      <div className="inputContainer">
        <input 
        type="text" 
        placeholder="Digite aqui o cep"
        value={ input }
        onChange={ (e)=>setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleClick}>
          <FiSearch size={ 25 } color="#fff"/>
        </button>

      </div>

      {Object.keys(cep).length > 0 &&(
         <main className="main">
          <h2>CEP: {cep.cep}</h2>  
  
          <span>Rua: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Localidade: {cep.localidade} - {cep.uf}</span>
  
       </main>
      )}
      
    </div>
  );
}

export default App;
