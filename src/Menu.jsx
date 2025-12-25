import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu-container">
      <Link to="/veg" className="menu-card">
        <img
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
          alt="Veg"
        />
        <button>Veg Orders</button>
      </Link>

      <Link to="/nonveg" className="menu-card">
        <img
          src="https://images.pexels.com/photos/17649370/pexels-photo-17649370.jpeg"
          alt="Non Veg"
        />
        <button>Non-Veg Orders</button>
      </Link>

      <Link to="/milkshake" className="menu-card">
        <img
          src="https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg"
          alt="Milkshakes"
        />
        <button>Milkshakes</button>
      </Link>
    </div>
  );
}

export default Menu;
