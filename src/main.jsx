import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/pages/home';
import Services from '@/pages/services';

import App from './App';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/services' element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
