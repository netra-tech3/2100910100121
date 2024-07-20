const axios = require('axios');

const API_URL = 'http://20.244.56.144/test/companies';
const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];
const accessToken = process.env.ACCESS_TOKEN;

let prodid = 0;

function generateUniqueId() {
  return `${Date.now()}-${prodid++}`;
}

const  fetchProd= async(category, minPrice, maxPrice, top)=> {
  try {
    const productPromises = companies.map(company =>
      axios.get(`${API_URL}/${company}/categories/${category}/products`, {
        params: {
          top,
          minPrice,
          maxPrice
        },
        headers: {
          'Authorization':` Bearer ${accessToken}`
        }
      })
    );
    const productResponses = await Promise.all(productPromises);

    const products = productResponses.flatMap(response => response.data.products);
    return products.map(product => ({
      ...product,
      id: generateUniqueId()
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

const  fetchProdByid= async(category, productId)=> {
  try {
    const products = await fetchProd(category);
    return products.find(product => product.id === productId);
  } catch (error) {
    console.error('Error occured :', error);
    throw error;
  }
}

module.exports = { fetchProd, fetchProdByid };