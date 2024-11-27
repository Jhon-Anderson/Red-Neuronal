import React from 'react'; // Asegúrate de importar React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio'; // Importamos la página de Inicio

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} /> {/* Página principal */}
        {/* Agregar más rutas si es necesario */}
      </Routes>
    </Router>
  </StrictMode>
);
