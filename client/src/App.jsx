import axios from "axios";
import { useState, useEffect, createContext } from "react";

import Navbar from "./components/Navbar";
import ProductCategory from "./components/ProductCategory";
import ProductHighlight from "./components/ProductHighlight";
import Footer from "./components/Footer";

export const ProductContext = createContext({});

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
      <ProductContext.Provider
        value={{
          products,
          getProducts,
          totalProductNumber,
        }}
      >
        <Navbar />
        <ProductHighlight />
        <ProductCategory />
        <Footer />
      </ProductContext.Provider>
    </>
  );
}

export default App;
