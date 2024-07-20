import React from 'react';
import './ProductShow.css';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={`https://picsum.photos/200/300?random=${product.id}`} alt={product.name} className="product-image" />
    <h3>{product.name}</h3>
    <p>Company: {product.company}</p>
    <p>Category: {product.category}</p>
    <p>Price: ${product.price}</p>
    <p>Rating: {product.rating}</p>
    <p>Discount: {product.discount}%</p>
    <p>Availability: {product.availability ? 'yes' : 'no'}</p>
  </div>
);

export default ProductCard;