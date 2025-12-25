import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <h1>Welcome to Aha Bhojanambu</h1>
        <p>Delicious food delivered with love.</p>

        {/* MENU BUTTON */}
        <Link to="/menu" className="hero-btn">
          View Menu
        </Link>
      </div>
    </div>
  );
}

export default Home;
