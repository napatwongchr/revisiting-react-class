import express from "express";
import cors from "cors";
import { products } from "./data/products.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Define the GET API route to retrieve product data
app.get("/products", (req, res) => {
  return res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
