import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";


import Login from "./components/users/Login";
import Register from "./components/users/Register";


import DateRangePickerComp from "./components/policy/Date_Place"
import Payment from "./components/policy/Payment";
import Type from "./components/policy/Type_Policy";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/Date_Place/type" element={<Type />}></Route>
        {/* <Route path="payment" element={<Payment />} /> */}
       

     
        <Route path="Date_Place" element={<DateRangePickerComp></DateRangePickerComp>} />

      </Routes>
    </div>
  );
}

export default App;
