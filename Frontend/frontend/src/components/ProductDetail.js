import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product }) => (
  <div className="product-detail">
    <img src={`https://picsum.photos/400/600?random=${product.id}`} alt={product.name} className="product-image" />
    <h3>{product.name}</h3>
    <p>Company: {product.company}</p>
    <p>Category: {product.category}</p>
    <p>Price: ${product.price}</p>
    <p>Rating: {product.rating}</p>
    <p>Discount: {product.discount}%</p>
    <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
  </div>
);

export default ProductDetail;