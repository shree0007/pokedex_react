import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './components/Home';
import './App.css';
import ListOfPoke from './components/ListOfPoke';


function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pokemons" element={<ListOfPoke />} />

          </Route>
        </Routes>
      </BrowserRouter >

    </div>
  );
}

export default App;
