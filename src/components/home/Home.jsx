import Animation from "./home-components/Animation";
import HomeHeader from "./home-components/HomeHeader";
import WeAreBetter from "./home-components/WeAreBetter";
import { useSelector } from "react-redux";
import "./home.css";

function Home() {
  const theUser = useSelector((state) => state.theUser);
  return (
    <div className="Home">
      {theUser.name ? (
        <h2>Welcome back! {theUser.name}</h2>
      ) : (
        <h2 style={{ color: "red" }}>Please Sign-In</h2>
      )}

      <HomeHeader />
      <Animation />
      <WeAreBetter />
    </div>
  );
}

export default Home;
