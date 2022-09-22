import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./homeheader.css";

function HomeHeader() {
  const theUser = useSelector((state) => state.theUser);
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

      {theUser.name ? (
        <Link to="Date_Place">
          <button className="button-19">Purchase POLICY</button>
        </Link>
      ) : (
        <div>
          <button className="button-19" disabled>
            Purchase POLICY
          </button>
          <h6 style={{ color: "red" }}>(Log-in to purchase)</h6>
        </div>
      )}
    </div>
  );
}

export default HomeHeader;
