import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import FloatingCard from './components/FloatingCard';
import ResultControls from './components/ResultControls';
import ResultList from './components/ResultList';

function App() {
  const [descricao, setDescricao] = useState('pesquisa');

  useEffect(() => {
    alert(descricao);
  }, [descricao]);

  const handleClick = useCallback(() => {
    console.log('clicado');

    setDescricao('pesquisado');
  }, [setDescricao]);

  const handleChange = useCallback((event) => {
    console.log(event.target.value);
  }, []);

  return (
    <div>
     <div style={{ padding: '10px', borderWidth: '0 0 1px 0', borderBottomColor: 'rgba(0,0,0,.2)', borderStyle: 'solid' }}>
      
       {descricao}
        <input onChange={handleChange} />
       <button onClick={handleClick}>pesquisar</button>
     </div>
     <div style={{ display: 'grid', gridTemplateRows: '1fr auto', gridTemplateColumns: '100px 2fr 1fr 100px', gap: '10px' }}>
      <ResultControls />
      <ResultList />
      <div style={{ gridRow: 2, gridColumn: 3 }}>
        <FloatingCard />
      </div>
     </div>
    </div>
  );
}

export default App;
