import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Users from "./components/users/Users";
import DateRangePickerComp from "./components/policy/Date_Place"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="Date_Place" element={<DateRangePickerComp></DateRangePickerComp>} />
      </Routes>
    </div>
  );
}

export default App;
