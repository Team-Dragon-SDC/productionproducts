require('dotenv').config();
const express = require('express'); //install express to webpack
const axios = require('axios');
const PORT = process.env.PORT || 3000;
const app = express();
const queries = require('../controllers/queries');
const { loader } = process.env;

app.use(express.json());

//configuration object instance: root to api.
const api = axios.create({
  baseURL: process.env.IP_ADDRESS,
  headers: {
    'Authorization': process.env.API_TOKEN
  }
});

app.get('/products', queries.getProducts)

app.get(`/${loader}.txt`, (req, res) => {
  res.send(loader)
})

app.listen(PORT, () => {
  console.log(`server running on port:${PORT}`);
});

//add routes here to the api then change front end to route here

