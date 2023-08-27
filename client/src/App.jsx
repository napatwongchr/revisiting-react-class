import axios from "axios";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import ProductCategory from "./components/ProductCategory";
import ProductHighlight from "./components/ProductHighlight";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const productDataFromServer = await axios.get(
      "http://localhost:4000/products"
    );
    setProducts(productDataFromServer.data);
  };

  const totalProductNumber = products.length;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <ProductHighlight
        products={products}
        totalProductNumber={totalProductNumber}
      />
      <ProductCategory />
      <Footer totalProductNumber={totalProductNumber} />
    </>
  );
}

export default App;
