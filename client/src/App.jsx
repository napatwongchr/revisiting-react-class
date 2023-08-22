import {
  BeakerIcon,
  HomeIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  MusicalNoteIcon,
  ShoppingBagIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

function App() {
  return (
    <>
      {/* 🛠️ Todo 1: ให้สร้าง Component Navbar แล้วนำมา Render */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-xl font-semibold">
            Ecommerce
          </a>
          <ul className="flex space-x-4">
            <li className="flex items-center">
              <a href="#" className="text-white flex items-center">
                <HomeIcon className="h-5 w-5 mr-1" />
                Home
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-white flex items-center">
                <BeakerIcon className="h-5 w-5 mr-1" />
                Products
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-white flex items-center">
                <ShoppingCartIcon className="h-5 w-5 mr-1" />
                Cart
              </a>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-white flex items-center">
                <DevicePhoneMobileIcon className="h-5 w-5 mr-1" />
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* 🛠️ Todo 2: ให้สร้าง Component ProductHighlight แล้วนำมา Render */}
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 shadow-md">
              <img
                src="https://picsum.photos/id/231/200/200"
                alt="The Lorem Ipsum for photos."
                className="w-full mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">
                The Lorem Ipsum for photos.
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">$99.99</p>
                <button className="mt-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded flex items-center">
                  <ShoppingCartIcon className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md">
              <img
                src="https://picsum.photos/id/232/200/200"
                alt="Wireless Bluetooth Earbuds"
                className="w-full mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">
                Wireless Bluetooth Earbuds
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">$79.99</p>
                <button className="mt-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded flex items-center">
                  <ShoppingCartIcon className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md">
              <img
                src="https://picsum.photos/200/200"
                alt="Product 4"
                className="w-full mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">
                Stylish Cool Sunglasses in The World
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">$79.99</p>
                <button className="mt-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded flex items-center">
                  <ShoppingCartIcon className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 🛠️ Todo 3: ให้สร้าง Component ProductCategory แล้วนำมา Render */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Product Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 shadow-md flex items-center">
              <div className="mr-2">
                <ComputerDesktopIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Electronics</h3>
            </div>
            <div className="bg-white p-4 shadow-md flex items-center">
              <div className="mr-2">
                <ShoppingBagIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Fashion</h3>
            </div>
            <div className="bg-white p-4 shadow-md flex items-center">
              <div className="mr-2">
                <VideoCameraIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Photography</h3>
            </div>
            <div className="bg-white p-4 shadow-md flex items-center">
              <div className="mr-2">
                <MusicalNoteIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Audio</h3>
            </div>
          </div>
        </div>
      </section>
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
