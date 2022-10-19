import React, { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
import { ThemeContext } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../reducers/theUserSlice";
import { Link } from "react-router-dom";

import LoginIcon from "@mui/icons-material/Login";
export const usesNow = React.createContext();
function Login() {
  const dispatch = useDispatch();
  // const state = useSelector((allStates) => allStates.state.value);
  // dispatch(function1())
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [users, setUsers] = useState([]);
  const theUser = useState("");
  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const handleNameChange = (value) => {
    setFirstName(value);
  };
  const handleSubmit = () => {
    console.log("submited");
    for (let index = 0; index < users.length; index++) {
      if (
        firstName === users[index].firstName &&
        password === users[index].password
      ) {
        dispatch(update(users[index].firstName));
      }
    }
  };
  console.log(theUser);
  useEffect(() => {
    axios.get(`http://localhost:3001/api/users`).then((res) => {
      res.data && setUsers(res.data);
    });
  }, []);

  return (
    <div className="loginContainer">
      <div className="Login">
        <ThemeContext.Provider value={theUser}>
          <h1>
            Log-in <LoginIcon />
          </h1>

          <div className="inputsContainer">
            <div className="input">
              <label>First Name</label>
              <input
                type="text"
                onChange={(e) => {
                  handleNameChange(e.target.value);
                }}
              />
            </div>
            <div className="input">
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => {
                  handlePasswordChange(e.target.value);
                }}
              />
            </div>
          </div>
          <Link to="/">
            <button onClick={() => handleSubmit()}>Login</button>
          </Link>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default Login;
