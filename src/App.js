import React, {useState} from 'react';


function App() {

  const [valor, setValor ] = useState(1);
  const [contador, setContador] = useState (0);

  function menos() {
    if (contador >= 1) {
      setContador(contador-valor);
    }
  }

  function mais() {
    if (contador <= 9) {
      setContador(contador + parseInt(valor))
    }
  }


  return (
    <div>
      <input 
        type="text" 
        value = {valor}
        onChange={(event) => setValor(event.target.value)}  
        placeholder="digite valor" 
      />
      <button disabled={contador>=10} onClick={mais}>Soma</button>
      <button disabled={contador<=0} onClick={menos}>Diminuição</button>
      <p>Resultado das somas: {contador}</p>
    </div>
  );
}

export default App;
