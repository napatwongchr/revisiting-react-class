//  🛠️ Todo 1: ให้สร้าง ProductCard Component แล้วนำไป Render ในไฟล์ `ProductHighlight.jsx`
//  แทนที่ Product Card 1, Product Card 2 และ Product Card 3
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

function ProductCard() {
  return (
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
  );
}

export default ProductCard;
