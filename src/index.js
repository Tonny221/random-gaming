import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter,
         Routes,
         Route 
} from 'react-router-dom';
import FormPage from './FormPage';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/formulario" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
);
