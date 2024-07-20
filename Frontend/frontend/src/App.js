// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/AllProd';
import ProductDetailPage from './pages/ProdDetail';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/categories/:category/products/:productId" element={<ProductDetailPage />} />
      <Route path="/" element={<AllProductsPage />} />
    </Routes>
  </Router>
);

export default App;
