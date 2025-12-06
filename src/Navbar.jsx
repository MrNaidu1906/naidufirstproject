
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  // calculate total quantity
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div
      style={{
        display: "flex",
        padding: "10px 20px",
        background: "#36cf28ff",
        color: "white",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>LOGO</h2>
      <h2>Food Cart</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/veg" style={{ color: "white" }}>Veg🥗</Link>
        <Link to="/nonveg" style={{ color: "white" }}>Non-Veg🍗</Link>
        <Link to="/milkshake" style={{ color: "white" }}>Milkshake</Link>
        <Link to="/about" style={{ color: "white" }}>About</Link>

        <Link to="/cart" style={{ color: "white" }}>
          🛒 Cart ({totalQuantity})
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

