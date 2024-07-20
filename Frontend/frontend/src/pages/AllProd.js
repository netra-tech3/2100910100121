import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { getProducts } from '../context/context.js';
import './AllProd.css';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [rating, setRating] = useState('');
  const [sort, setSort] = useState('');
  const [order, setOrder] = useState('');
  const [availability, setAvailability] = useState('');

  const fetchProducts = async () => {
    const params = { category, minPrice: priceRange[0], maxPrice: priceRange[1], rating, sort, order, availability };
    const data = await getProducts(params);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, [category, priceRange, rating, sort, order, availability]);

  return (
    <div className="all-products-page">
      <h1>All Products</h1>
      <div className="filters">
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="All">All</option>
          {/* Add more categories as needed */}
          <option value="Phone">Phone</option>
          <option value="Laptop">Laptop</option>
        </select>
        <input
          type="text"
          value={priceRange}
          onChange={e => setPriceRange(e.target.value.split(',').map(Number))}
          placeholder="Price Range"
        />
        <input
          type="text"
          value={rating}
          onChange={e => setRating(e.target.value)}
          placeholder="Rating"
        />
        <input
          type="text"
          value={sort}
          onChange={e => setSort(e.target.value)}
          placeholder="Sort By"
        />
        <input
          type="text"
          value={order}
          onChange={e => setOrder(e.target.value)}
          placeholder="Order"
        />
        <select value={availability} onChange={e => setAvailability(e.target.value)}>
          <option value="">All</option>
          <option value="true">In Stock</option>
          <option value="false">Out of Stock</option>
        </select>
        <button onClick={fetchProducts}>Filter</button>
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default AllProductsPage;