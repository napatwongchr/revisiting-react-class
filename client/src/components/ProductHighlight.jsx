import ProductCard from "./ProductCard";

// 🛠️ Todo 5: ให้ Import ตัว ProductContext จากไฟล์ App.jsx
// และ Import ตัว Consumer จาก Package "react"
// เช่น
// import { ProductContext } from "../App";
// import { useContext } from "react";

// 🛠️ Todo 6: ลบ Parameter `props`
function ProductHighlight(props) {
  // 🛠️ Todo 7: Consume ตัว ProductContext ด้วย Function useContext
  // เช่น
  // const contextData = useContext(ProductContext)

  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          {/* 🛠️ Todo 8: ให้ Access ตัว `totalProductNumber` จาก ProductContext แทน Access จาก Parameter props */}
          Featured Products (Total is {props.totalProductNumber})
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* 🛠️ Todo 9: ให้ Access ตัว `products` จาก ProductContext แทน Access จาก Parameter props */}
          {props.products.map((item) => {
            return (
              <ProductCard
                key={item.id}
                imgSrc={item.image}
                productName={item.name}
                productPrice={item.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductHighlight;
