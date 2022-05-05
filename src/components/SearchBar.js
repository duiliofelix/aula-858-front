import React, { useState, useCallback } from 'react';

const SearchBar = ({ onPesquisar }) => {
  const [descricao, setDescricao] = useState('pesquisa');

  const handleClick = useCallback(() => {
    onPesquisar(descricao);
  }, [descricao, onPesquisar]);

  const handleChange = useCallback((event) => {
    setDescricao(event.target.value);
  }, [setDescricao]);

  return (
    <div style={{ padding: '10px', borderWidth: '0 0 1px 0', borderBottomColor: 'rgba(0,0,0,.2)', borderStyle: 'solid' }}>
      <input onChange={handleChange} />
      <button onClick={handleClick}>pesquisar</button>
    </div>
  );
};

export default SearchBar;
