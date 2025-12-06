import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Logo */}
      <div className="logo-container">
        <div className="logo">aha bhojanambu</div>
      </div>

      {/* Hero content */}
      <div className="home-content">
        <h1>Welcome to Aha Bhojanambu</h1>
        <p>Delicious food delivered with love.</p>
      </div>
    </>
  );
}

export default Home;
