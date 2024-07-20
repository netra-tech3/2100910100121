const express = require('express');
const { getProducts, getprodbyid } = require('./controllers/productcontroller.js')

const app = express();

app.get('/companies/:companyname/categories/:categoryname/products', getProducts);
app.get('/companies/:companyname/categories/:categoryname/products/:productid', getprodbyid);

module.exports = app;