import Navbar from "./components/Navbar";
import ProductCategory from "./components/ProductCategory";
import ProductHighlight from "./components/ProductHighlight";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}

export default App;
