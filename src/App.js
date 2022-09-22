import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

import Login from "./components/users/Login";
import Register from "./components/users/Register";

import DateRangePickerComp from "./components/policy/Date_Place";
import Allusers from "./components/users/Allusers";
import { useSelector } from "react-redux";

function App() {
  const theUser = useSelector((state) => state.theUser);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        {theUser.name === "admin" ? (
          <Route path="allusers" element={<Allusers />} />
        ) : (
          <></>
        )}

        <Route path="Date_Place" element={<DateRangePickerComp />} />
      </Routes>
    </div>
  );
}

export default App;
