function TotalProductCount(props) {
  return (
    <div className="container mx-auto text-center">
      <p>
        Total number of highlight product on website is
        <b>{props.totalProductNumber} products</b>
      </p>
    </div>
  );
}

export default TotalProductCount;
