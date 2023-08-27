import ProductCard from "./ProductCard";

function ProductHighlight(props) {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Featured Products (Total is {props.totalProductNumber})
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
