import express from "express";
import { products } from "./data/products.js";

const app = express();
const PORT = 4000;

// Define the GET API route to retrieve product data
app.get("/products", (req, res) => {
  return res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
