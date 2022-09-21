import { Link } from "react-router-dom";
import "./homeheader.css";

function HomeHeader() {
  return (
    <div className="HomeHeader">
      <h1>FLY SAFE WITH US</h1>
      <div className="h3-p-container">
        <h3 className="header-h3">M&M policy</h3>
        <p className="header-p">every flight starts with insurance.</p>
      </div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/003/510/896/original/airplane-icon-continuous-one-line-draw-of-flying-plane-minimalist-illustration-design-on-white-background-isolated-simple-line-modern-graphic-style-hand-drawn-graphic-concept-for-transport-vector.jpg"
        alt=""
        className="header-img"
      />
      <Link to="/policy">
        <button class="button-19">Purchase POLICY</button>
      </Link>
    </div>
  );
}

export default HomeHeader;
