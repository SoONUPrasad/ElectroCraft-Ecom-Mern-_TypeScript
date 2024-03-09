import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItem = [
  {
    productId: "jkncna",
    photo:
      "https://images.unsplash.com/photo-1536627217140-899b0bc9d881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      productName: "MacBook",
      productPrice: 4545,
      productQuantity: 4,
      productStock: 10,
  },
];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subTotal + tax + shippingCharges;

const Cart = () => {
  const [coupon, setCoupon] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    };
  }, [coupon]);

  return (
    <div className="cart">
      <main>
        {cartItem.length > 0 ? cartItem.map((i, idx) => (
          <CartItem key={idx} cartItem={i}/>
        )) : <h1>No Items Edit</h1>}
      </main>
      <aside>
        <p>Subtotal: ${subTotal}</p>
        <p>Tax: ${tax}</p>
        <p>Shipping: ${shippingCharges}</p>
        <p>
          Discount: <em className="red"> - ${discount}</em>
        </p>
        <p>
          <b>Total: ${total}</b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />

        {coupon &&
          (isValidCouponCode ? (
            <span className="green">
              ${discount} off using the <code>{coupon}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}


          {cartItem.length > 0 && <Link to={"/shipping"}>Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
