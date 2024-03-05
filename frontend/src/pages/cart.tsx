import { useState } from "react";
import { VscError } from "react-icons/vsc";

const cartItem = [];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subTotal + tax + shippingCharges;

const Cart = () => {
  const [coupon, setCoupon] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  return (
    <div className="cart">
      <main></main>
      <aside>
        <p>Subtotal: ${subTotal}</p>
        <p>Tax: ${tax}</p>
        <p>Shipping: ${shippingCharges}</p>
        <p>
          Discount: <em> - ${discount}</em>
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

        {coupon && (
          isValidCouponCode ? (
            <span className="green">
              ${discount} off using the <code>{coupon}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          )
        )}
      </aside>
    </div>
  );
};

export default Cart;
