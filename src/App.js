import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Policy from "./components/policy/Policy";
import Login from "./components/users/Login";
import Register from "./components/users/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="policy" element={<Policy />} />
      </Routes>
    </div>
  );
}

export default App;
