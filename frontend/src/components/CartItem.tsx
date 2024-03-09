import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
  cartItem: any;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const { productId, photo, productName, productPrice, productQuantity } =
    cartItem;
  return (
    <div className="cart-item">
      <img src={photo} alt={productName} />
      <article>
        <Link to={`/product/${productId}`}>{productName}</Link>
        <span>
          ₹{productPrice} X {productQuantity} = ₹
          {productPrice * productQuantity}
        </span>
      </article>

      <div>
        <button>-</button>
        <p>{productQuantity}</p>
        <button>+</button>
      </div>

      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
