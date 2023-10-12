import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './Components/App.jsx';
import NotFound from './Components/NotFound.jsx';
import './styles/app.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
