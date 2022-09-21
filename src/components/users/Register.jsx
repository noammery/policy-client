import { useForm } from "react-hook-form";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import "./register.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import axios from "axios";
const schema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  lastName: yup
    .string()
    .required()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  phoneNumber: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  password: yup
    .string()
    .required()
    .min(6, "Must be minimum 6 digits long")
    .max(20, "Must be maximum 20 digits long"),
  email: yup.string().email().required(),
  passportID: yup
    .string()
    .required("passport ID is a required field")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(9, "Must be exactly 9 digits")
    .max(9, "Must be exactly 9 digits"),
  adress: yup.string().required(),
});

export default function Register() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setUsers([...users, data]);
    await axios.post(`http://localhost:3001/api/users`, data);
    console.log(users);
    alert(JSON.stringify(data));
    reset();
  };
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios.get(`http://localhost:3001/api/users`).then((res) => {
      res.data && setUsers(res.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="Register">
      <h1>REGISTER</h1>
      <h4>
        If you already have an account 👉<Link to="/login">Log-in</Link>
      </h4>

      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="smallForm">
          <label>First Name</label>
          <input {...register("firstName")} />
          {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
        </div>
        <div className="smallForm">
          <label>Last Name</label>
          <input {...register("lastName")} />
          {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
        </div>

        <div className="smallForm">
          <label>Phone Number </label>

          <input {...register("phoneNumber")} placeholder="0505555555" />
          {errors?.phoneNumber && (
            <p>{errors?.phoneNumber?.message || "Error!"}</p>
          )}
        </div>

        <div className="smallForm">
          <label>Email Address</label>
          <input {...register("email")} />
          {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
        </div>

        <div className="smallForm">
          <label>Passport ID</label>
          <input {...register("passportID")} />
          {errors?.passportID && (
            <p>{errors?.passportID?.message || "Error!"}</p>
          )}
        </div>

        <div className="smallForm">
          <label>Billing Address</label>
          <input {...register("adress")} />
          {errors?.adress && <p>{errors?.adress?.message || "Error!"}</p>}
        </div>
        <div className="smallForm">
          <label>Password</label>
          <input type="password" {...register("password")} />
          {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
        </div>

        <input value="SUBMIT" type="submit" disabled={!isValid} />
      </form>
    </div>
  );
}
