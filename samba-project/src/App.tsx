import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Form from './Components/Form/Form'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
