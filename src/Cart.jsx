import { useSelector, useDispatch } from "react-redux";
import { applyCoupon, decrementQuantity, incrementQuantity, removeFromCart } from "./Store";
import "./Cart.css";
import { useState } from "react";
import CouponApply from "./CouponApply";
import SendEmail from "./SendEmail";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const { discount: couponPercent, applied, code, message } = useSelector(
    (state) => state.coupon
  );

  const [extraDiscount, setExtraDiscount] = useState(0);
  const [customerEmail, setCustomerEmail] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const extraDiscountAmount = (subtotal * extraDiscount) / 100;
  const couponDiscountAmount = applied ? (subtotal * couponPercent) / 100 : 0;

  const totalDiscountAmount = extraDiscountAmount + couponDiscountAmount;

  const discountedTotal = subtotal - totalDiscountAmount;
  const gst = (discountedTotal * 18) / 100;
  const grandTotal = discountedTotal + gst;

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="cart-container empty">
        <h1>Your Cart is Empty 🛒</h1>
        <p>Add items to the cart to see them here.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Cart Items</h1>

      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-left">
              <img src={item.img} alt={item.name} className="cart-img" />

              <div className="cart-info">
                <span className="item-name">{item.name}</span>

                <div className="item-row quantity-row">
                  <span className="label qty-label">Qty:</span>
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(decrementQuantity(item))}
                  >
                    -
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(incrementQuantity(item))}
                  >
                    +
                  </button>
                </div>

                <div className="item-row">
                  <span className="label">Price:</span>
                  <span className="value">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="cart-buttons">
              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item))}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* EMAIL SECTION */}
      <div className="email-section">
        <h4>Enter your email to receive the order details:</h4>

        <input
          type="email"
          placeholder="Enter Your email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
        />

        <SendEmail
          cartItems={cartItems}
          netprice={grandTotal}
          tax={gst}
          discount={totalDiscountAmount}
          customerEmail={customerEmail}
          coupon={applied ? code : ""}
        />
      </div>

      {/* COUPON BOX */}
      <div className="coupon-box">
        <CouponApply />
        {message && <p className="coupon-message">{message}</p>}
      </div>

      {/* PRICE DETAILS */}
      <div className="price-details">
        <h2>Price Details</h2>
        <p>Subtotal: ₹{subtotal.toFixed(2)}</p>

        <div className="discount-buttons">
          <button onClick={() => setExtraDiscount(10)}>10% OFF</button>
          <button onClick={() => setExtraDiscount(20)}>20% OFF</button>
          <button onClick={() => setExtraDiscount(30)}>30% OFF</button>
        </div>

        {extraDiscount !== 0 && (
          <p>
            Extra Discount ({extraDiscount}%): -₹
            {extraDiscountAmount.toFixed(2)}
          </p>
        )}

        {applied && (
          <p>
            Coupon ({code}): -₹{couponDiscountAmount.toFixed(2)}
          </p>
        )}

        <p>Total Discount: -₹{totalDiscountAmount.toFixed(2)}</p>
        <p>GST (18%): ₹{gst.toFixed(2)}</p>

        <h3>Grand Total: ₹{grandTotal.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Cart;
