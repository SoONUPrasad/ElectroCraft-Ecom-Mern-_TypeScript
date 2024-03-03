type ProductsProps = {
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string;
  productStock: number;
  handler: () => void;
};

const server = "http://localhost";

const ProductCard = ({
  productId,
  productImage,
  productName,
  productPrice,
  productStock,
  handler,
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={productImage} alt={productName} />
      {/* <div className="product-info"> */}
        <h3>{productName}</h3>
        <p>Price: ${productPrice}</p>
        <p>Stock: {productStock}</p>
        <div>
          <button onClick={() => handler()}>-</button>
          <button onClick={() => handler()}>+</button>
        </div>
      {/* </div> */}
    </div>
  );
};

export default ProductCard;
