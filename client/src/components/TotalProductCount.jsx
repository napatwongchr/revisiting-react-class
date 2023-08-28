// 🛠️ Todo 13: ให้ Import ตัว ProductContext จากไฟล์ App.jsx
// และ Import ตัว Consumer จาก Package "react"
// เช่น
// import { ProductContext } from "../App";
// import { useContext } from "react";

// 🛠️ Todo 14: ลบ Parameter `props`
function TotalProductCount(props) {
  // 🛠️ Todo 15: Consume ตัว ProductContext ด้วย Function useContext
  // เช่น
  // const contextData = useContext(ProductContext)

  return (
    <div className="container mx-auto text-center">
      <p>
        Total number of highlight product on website is
        {/* 🛠️ Todo 16: ให้ Access ตัว `totalProductNumber` จาก ProductContext */}
        <b>{props.totalProductNumber} products</b>
      </p>
    </div>
  );
}

export default TotalProductCount;
