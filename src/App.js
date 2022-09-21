import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Policy from "./components/policy/Policy";
import Users from "./components/users/Users";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="policy" element={<Policy />} />
      </Routes>
    </div>
  );
}

export default App;
