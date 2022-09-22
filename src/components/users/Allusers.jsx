import "./allusers.css";
import axios from "axios";
import { useEffect, useState } from "react";
function Allusers() {
  const [policys, setPolicys] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/api/users`).then((res) => {
      res.data && setUsers(res.data);
    });
    axios.get(`http://localhost:3001/policyapi/policy`).then((res) => {
      res.data && setPolicys(res.data);
    });
  }, []);

  return (
    <div className="Allusers">
      <h1>All of the users list:</h1>
      <ol>
        {users.map((user, index) => {
          return (
            <li key={index} style={{ margin: "4vw" }}>
              <p>
                <h4>First name:</h4>
                {user.firstName}
              </p>
              <p>
                <h4>Family name:</h4> {user.lastName}
              </p>
              <p>
                <h4>Phone number:</h4>
                {user.phoneNumber}
              </p>
              <p>
                <h4>Password:</h4>
                {user.password}
              </p>
              <p>
                <h4>Email:</h4>
                {user.email}
              </p>
              <p>
                <h4>Passport ID:</h4>
                {user.passportID}
              </p>
              <p>
                <h4>Adress:</h4>
                {user.adress}
              </p>
            </li>
          );
        })}
      </ol>

      <h1>All of the purchases</h1>
      <ol>
        {policys.map((policy, index) => {
          return (
            <li key={index} style={{ margin: "4vw" }}>
              <p>
                <h4>Credit Card Number:</h4>
                {policy.CreditCardNumber}
              </p>
              <p>
                <h4>Exporition Date:</h4> {policy.ExporitionDate}
              </p>
              <p>
                <h4>CVV:</h4>
                {policy.cvv}
              </p>
              <p>
                <h4>Card Holder Name:</h4>
                {policy.CardHolderFullName}
              </p>
              <p>
                <h4>Person ID:</h4>
                {policy.PersonID}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Allusers;
