import Animation from "./home-components/Animation";
import HomeHeader from "./home-components/HomeHeader";
import WeAreBetter from "./home-components/WeAreBetter";
import { useSelector } from "react-redux";
import "./home.css";

function Home() {
  const theUser = useSelector((state) => state.theUser);
  return (
    <div className="Home">
      <p>{theUser.name}</p>
      <HomeHeader />
      <Animation />
      <WeAreBetter />
    </div>
  );
}

export default Home;
