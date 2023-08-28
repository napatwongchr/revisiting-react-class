import axios from "axios";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import ProductCategory from "./components/ProductCategory";
import ProductHighlight from "./components/ProductHighlight";
import Footer from "./components/Footer";

// 🛠️ Todo 1: สร้าง Context API ด้วย Function createContext ที่จะต้อง Import มาจาก Package react ในไฟล์ App.jsx
// เช่น
// import { useState, useEffect, createContext } from "react";

// 🛠️ Todo 2: ให้ Execute ตัว Function `createContext` โดยที่กำหนด Parameter ของ `createContext` เป็น {} ซึ่งคือ Value ตั้งต้นของ Context
// แล้ว Assign ผลลัพธ์ที่ได้จากการ Execute ไว้ใน Variable `ProductContext`
// แล้วให้ Export ตัว Variable `ProductContext` ด้วย
// เช่น
// export const ProductContext = createContext({});

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
      {/* 🛠️ Todo 3: นำ Component ProductContext.Provider มาครอบ 
        และกำหนด Data ที่จะ Share ไปให้ Component ที่อยู่ภายใต้ ProductContext.Provider ผ่าน Prop ชื่อว่า `value`
        เช่น
        <ProductContext.Provider
          value={ // Data ที่จะ Share ไปให้ Component ที่อยู่ภายใต้ ProductContext.Provider}
        >
          // Component ที่อยู่ภายใต้ Provider
        </ProductContext.Provider>
    
    */}
      <Navbar />
      {/* 🛠️ Todo 4: ลบ Prop ที่ส่งเข้าไปใน Component ProductHighlight ออก 
        เพราะเดี๋ยวเราจะไป Consume ข้อมูล products และ totalProductNumber ที่เก็บไว้ใน ProductContext
      */}
      <ProductHighlight
        products={products}
        totalProductNumber={totalProductNumber}
      />
      <ProductCategory />
      {/* 🛠️ Todo 10: ลบ Prop ที่ส่งเข้าไปใน Component Footer ออก 
        เพราะเดี๋ยวเราจะไป Consume ข้อมูล totalProductNumber ที่เก็บไว้ใน ProductContext
      */}
      <Footer totalProductNumber={totalProductNumber} />
    </>
  );
}

export default App;
