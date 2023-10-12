import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './Components/App.jsx';
import NotFound from './Components/NotFound.jsx';
import './styles/app.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/rockPaperScissor" element={<App />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </Router>
);
