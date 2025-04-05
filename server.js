const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 4000

app.use(cors())
app.use(bodyParser.json())

// Sample product data with unique IDs
let products = [
  { id: 1, title: 'Product 1', price: 10, image: '/images/download.jpeg', category: 'Electronics' },
  { id: 2, title: 'Product 2', price: 20, image: '/images/download.jpeg', category: 'Clothing' },
  { id: 3, title: 'Product 3', price: 30, image: '/images/download.jpeg', category: 'Electronics' },
  { id: 4, title: 'Product 4', price: 15, image: '/images/download.jpeg', category: 'Home' },
  { id: 5, title: 'Product 5', price: 25, image: '/images/download.jpeg', category: 'Clothing' }
]

let cart = []

// API route to get products
app.get('/api/products', (req, res) => {
  res.json(products);
})

// API route to add items to the cart
app.post('/api/cart', (req, res) => {
  const product = req.body
  const existingItem = cart.find(item => item.id === product.id)
  
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  res.json(cart)
})


app.get('/api/cart', (req, res) => {
  res.json(cart);
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})