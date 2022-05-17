import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';

const App = ()=> {

  const [input, setInput] = useState('');

  const handleClick = ()=>{
    alert(input);
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

      <main className="main">
        <h2>CEP: 61890000</h2>  

        <span>Rua: Sinval Leitão</span>
        <span>Complemento: Algum aí</span>
        <span>Bairro: 17 de março</span>
        <span>Localidade: Ceara - CE</span>

      </main>

    </div>
  );
}

export default App;
