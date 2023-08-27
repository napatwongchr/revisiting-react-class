import ProductCard from "./ProductCard";

function ProductHighlight() {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
