import HomeHeader from "./home-components/HomeHeader";
import WeAreBetter from "./home-components/WeAreBetter";
import "./home.css";
function Home() {
  return (
    <div className="Home">
      <HomeHeader />
      <WeAreBetter />
    </div>
  );
}

export default Home;
