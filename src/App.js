import React, { useState, useCallback } from 'react';
import axios from "axios";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Item from './components/Item';
import SearchBar from './components/SearchBar';

const App = () => {
  const [results, setResults] = useState([]); // ['Resultado 1', 'Resultado 2', 'Resultado 3', 'Resultado 4', 'Resultado 5'];

  const doSearch = useCallback((conteudo) => {
    axios.post(`https://api.github.com/users/${conteudo}`, { name: '' })
      .then((response) => {
        setResults([...results, response.data]);
      })
      .catch((error) => {
        console.error(error);
        alert('Deu erro =/')
      });
  }, [setResults, results]);

  return (
    <div>
      <SearchBar onPesquisar={doSearch} />
      <Routes>
        <Route path="/" element={<Home list={results} />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </div>
  );
};

export default App;
