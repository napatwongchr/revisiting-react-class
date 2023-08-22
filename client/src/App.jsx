import Navbar from "./components/Navbar";
import ProductCategory from "./components/ProductCategory";
import ProductHighlight from "./components/ProductHighlight";

function App() {
  return (
    <>
      {/* 🛠️ Todo 1: ให้สร้าง Component Navbar แล้วนำมา Render */}
      <Navbar />
      {/* 🛠️ Todo 2: ให้สร้าง Component ProductHighlight แล้วนำมา Render */}
      <ProductHighlight />
      {/* 🛠️ Todo 3: ให้สร้าง Component ProductCategory แล้วนำมา Render */}
      <ProductCategory />
      {/* 🛠️ Todo 4: ให้สร้าง Component Footer แล้วนำมา Render */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Your Ecommerce Store. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
