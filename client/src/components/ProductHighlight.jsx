import ProductCard from "./ProductCard";

// Todo 1: ให้ Import ตัว Package ชื่อ axios
// และให้ Import ตัว React Hook Function ชื่อ useState และ useEffect จาก Package ชื่อ react
// เช่น
// import axios from "axios";
// import { useState, useEffect } from "react";

function ProductHighlight() {
  // Todo 2: ให้ Declare ตัว State ชื่อ products มารอรับ Data จาก Server
  // เช่น
  // const [products, setProducts] = useState([]);

  // Todo 3: Declare ตัว Function getProducts เพื่อเอาไว้สร้าง Request ไปขอข้อมูลจาก Server

  // Todo 4: ใช้ useEffect เพื่อ Execute Function getProducts เมื่อ Component ถูก Render ครั้งแรก
  // เช่น
  // useEffect(() => {
  //   Execute ตัว Function ที่อยากให้ทำงานตอน Component Render แค่ครั้งแรกครั้งเดียวเท่านั้น
  // }, []);

  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* 
            Todo 5: นำข้อมูลจาก State products มา Render ด้วย Array.map
            เช่น
            {
              products.map((item) => {
                return (
                  // Component ที่อยากจะ Render เป็น List
                );
              })
            }
          */}
          <ProductCard
            imgSrc="https://picsum.photos/id/231/200/200"
            productName="The Lorem Ipsum for photos."
            productPrice={99.99}
          />
          <ProductCard
            imgSrc="https://picsum.photos/id/232/200/200"
            productName="Wireless Bluetooth Earbuds"
            productPrice={79.99}
          />
          <ProductCard
            imgSrc="https://picsum.photos/200/200"
            productName="Stylish Cool Sunglasses in The World"
            productPrice={79.99}
          />
        </div>
      </div>
    </section>
  );
}

export default ProductHighlight;
