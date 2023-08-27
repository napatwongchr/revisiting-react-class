import { ProductContext } from "../App";
import { useContext } from "react";

function TotalProductCount() {
  const { totalProductNumber } = useContext(ProductContext);
  return (
    <div className="container mx-auto text-center">
      <p>
        Total number of highlight product on website is{" "}
        <b>{totalProductNumber} products</b>
      </p>
    </div>
  );
}

export default TotalProductCount;
