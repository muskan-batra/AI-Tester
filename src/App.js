import React from 'react';
import { Routes, Route } from "react-router-dom"
import Page from './components/Page';


function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Page />} />
      
    </Routes>
  )
}

export default App;