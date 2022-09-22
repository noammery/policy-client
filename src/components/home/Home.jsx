import Animation from "./home-components/Animation";
import HomeHeader from "./home-components/HomeHeader";
import WeAreBetter from "./home-components/WeAreBetter";
import { useSelector } from "react-redux";
import "./home.css";
import Footer from "../footer/footer";

function Home() {
  const theUser = useSelector((state) => state.theUser);
  return (
    <div className="Home">
      {theUser.name ? (
        <h4 className="welcome">Welcome back! {theUser.name}</h4>
      ) : (
        <h4 className="welcome" style={{ color: "red" }}>
          Please Sign-In
        </h4>
      )}

      <HomeHeader />
      <Animation />
      <WeAreBetter />
      <Footer />
    </div>
  );
}

export default Home;
