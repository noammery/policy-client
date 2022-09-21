import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup
      .string()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(2, "Minimum 2 letters")
      .max(40, "Max of 40 letters")
      .required(),
    lastName: yup
      .string()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .required(),
    Email: yup.string().required().email("Email is not valid"),
    MobileNumber: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    PassportID: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(9, "Must be exactly 9 digits")
      .max(9, "Must be exactly 9 digits"),
  })
  .required();

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="firstName"
        placeholder="First name"
        {...register("FirstName")}
      />
      <p>{errors.firstName?.message}</p>
      <input
        type="text"
        placeholder="LastName"
        {...register("Last name", { maxLength: 100 })}
      />
      <p>{errors.lastName?.message}</p>
      <select {...register("Title")}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { pattern: /^\S+@\S+$/i })}
      />
      <p>{errors.Email?.message}</p>
      <input
        type="tel"
        placeholder="Mobile number"
        {...register("MobileNumber", { maxLength: 12 })}
      />
      <p>{errors.MobileNumber?.message}</p>
      <input
        type="text"
        placeholder="Passport ID"
        {...register("PassportID", { max: 9, min: 9, maxLength: 9 })}
      />
      <p>{errors.PassportID?.message}</p>
      <input type="submit" />
    </form>
  );
}
