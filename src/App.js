import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LayoutConEncabezado from './componentes/compartidos/layout';
import Welcome from './componentes/publico/bienvenida';
import Revistas from './componentes/revistas/revistas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutConEncabezado><Welcome /></LayoutConEncabezado>} />
        <Route path="/revistas" element={<LayoutConEncabezado><Revistas /></LayoutConEncabezado>} />
      </Routes>
    </Router>
  );
}

export default App;
