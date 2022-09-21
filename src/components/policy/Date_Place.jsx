import { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Date_Place.css";
import "./type_policy.css";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    CreditCardNumber: yup
      .string()
      .required("is required")
      .min(16, "Valid card only")
      .max(16, "Valid card only")
      .matches(/^[0-9]+$/, "Numbers only"),
    ExpirationDate: yup
      .string()
      .required("is required")
      .min(4, "Valid card only")
      .max(4, "Valid card only")
      .matches(/^[0-9]+$/, "Numbers only"),
    cvv: yup
      .string()
      .required("is required")
      .min(3, "Valid card only")
      .max(3, "Valid card only")
      .matches(/^[0-9]+$/, "Numbers only"),
    CardHolderFullName: yup.string().required("is required"),
    PersonID: yup
      .string()
      .required("is required")
      .min(9, "Enter a valid ID")
      .matches(/^[0-9]+$/, "ID can contain only numbers"),
  })
  .required();

const DateRangePickerComp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const [step, setStep] = useState(1);
  const [region, setRegion] = useState("");
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [open, setOpen] = useState(false);

  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };
  console.log(range[0].startDate.toString());

  const [tempMuch, setTempMuch] = useState(0);
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
    checked ? setTempMuch(tempMuch - 1) : setTempMuch(tempMuch + 1);
  };
  const [checked1, setChecked1] = useState(false);
  const handleClick1 = () => {
    setChecked1(!checked1);
    checked1 ? setTempMuch(tempMuch - 2) : setTempMuch(tempMuch + 2);
  };
  const [checked2, setChecked2] = useState(false);
  const handleClick2 = () => {
    setChecked2(!checked2);
    checked2 ? setTempMuch(tempMuch - 3) : setTempMuch(tempMuch + 3);
  };
  const [checked3, setChecked3] = useState(false);
  const handleClick3 = () => {
    setChecked3(!checked3);
    checked3 ? setTempMuch(tempMuch - 4) : setTempMuch(tempMuch + 4);
  };
  const [checked4, setChecked4] = useState(false);
  const handleClick4 = () => {
    setChecked4(!checked4);
    checked4 ? setTempMuch(tempMuch - 5) : setTempMuch(tempMuch + 5);
  };
  const [checked5, setChecked5] = useState(false);
  const handleClick5 = () => {
    setChecked5(!checked5);
    checked5 ? setTempMuch(tempMuch - 6) : setTempMuch(tempMuch + 6);
  };
  const [checked6, setChecked6] = useState(false);
  const handleClick6 = () => {
    setChecked6(!checked6);
    checked6 ? setTempMuch(tempMuch - 7) : setTempMuch(tempMuch + 7);
  };
  const [checked7, setChecked7] = useState(false);
  const handleClick7 = () => {
    setChecked7(!checked7);
    checked7 ? setTempMuch(tempMuch - 8) : setTempMuch(tempMuch + 8);
  };
  const [checked8, setChecked8] = useState(false);
  const handleClick8 = () => {
    setChecked8(!checked8);
    checked8 ? setTempMuch(tempMuch - 9) : setTempMuch(tempMuch + 9);
  };
  let [much, setMuch] = useState(150);
  const handleSubmit1 = () => {
    setMuch(much + tempMuch);
  };
  return (
    <div className="allOfMaximWork">
      {step === 1 ? (
        <div className="calendarWrap">
          <h1>Pick Dates</h1>
          <input
            value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
              range[0].endDate,
              "MM/dd/yyyy"
            )}`}
            readOnly
            className="inputBox"
            onClick={() => setOpen((open) => !open)}
          />

          <div ref={refOne}>
            {open && (
              <DateRangePicker
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={2}
                direction="horizontal"
                className="calendarElement"
              />
            )}
          </div>

          <div className="Continent">
            <h1>Pick a region</h1>
            <div onClick={() => setRegion("America")}>
              <p>America</p>
            </div>
            <div onClick={() => setRegion("South America")}>
              <p>South America</p>
            </div>
            <div onClick={() => setRegion("Asia")}>
              <p>Asia</p>
            </div>
            <div onClick={() => setRegion("Europe")}>
              <p>Europe</p>
            </div>
            <div onClick={() => setRegion("Africa")}>
              <p>Africa</p>
            </div>
            <div onClick={() => setRegion("Australia")}>
              <p>Australia</p>
            </div>
            <div onClick={() => setRegion("Antartica")}>
              <p>Antartica</p>
            </div>
            <div onClick={() => setRegion("Israel")}>
              <p>Israel</p>
            </div>
          </div>

          <button onClick={() => setStep(2)}>next</button>
        </div>
      ) : step == 2 ? (
        <div>
          <div className="Type">
            <div className="insuranceContainer">
              <div className="party">
                <input
                  onClick={handleClick}
                  checked={checked}
                  type="checkbox"
                />
                <p className={checked ? "green" : null}>Third Side Party</p>
              </div>
              <div className="search">
                <input
                  onClick={handleClick1}
                  checked={checked1}
                  type="checkbox"
                />
                <p className={checked1 ? "green" : null}>Search And Rescue</p>
              </div>
              <div className="winter">
                <input
                  onClick={handleClick2}
                  checked={checked2}
                  type="checkbox"
                />
                <p className={checked2 ? "green" : null}>Winter Sport</p>
              </div>
              <div className="water">
                <input
                  onClick={handleClick3}
                  checked={checked3}
                  type="checkbox"
                />
                <p className={checked3 ? "green" : null}>Water Sport</p>
              </div>
              <div className="extreme">
                <input
                  onClick={handleClick4}
                  checked={checked4}
                  type="checkbox"
                />
                <p className={checked4 ? "green" : null}>Extreme Sport</p>
              </div>
              <div className="luggage">
                <input
                  onClick={handleClick5}
                  checked={checked5}
                  type="checkbox"
                />
                <p className={checked5 ? "green" : null}>Luggage</p>
              </div>
              <div className="cellphone">
                <input
                  onClick={handleClick6}
                  checked={checked6}
                  type="checkbox"
                />
                <p className={checked6 ? "green" : null}>Cellphone</p>
              </div>
              <div className="laptop">
                <input
                  onClick={handleClick7}
                  checked={checked7}
                  type="checkbox"
                />
                <p className={checked7 ? "green" : null}>Laptop</p>
              </div>
              <div className="medical">
                <input
                  onClick={handleClick8}
                  checked={checked8}
                  type="checkbox"
                />
                <p className={checked8 ? "green" : null}>
                  Deterioration In Medical Condition
                </p>
              </div>
            </div>
            <button onClick={() => handleSubmit1()}>submit choices</button>
            {much}
          </div>
          <button onClick={() => setStep(3)}>next</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4>
            trip to {region}
            <br />
            from <br />
            {range[0].startDate.toString()}
            <br />
            until <br />
            {range[0].endDate.toString()}
          </h4>
          <div>
            <label>Credit Card Number</label>
            <input {...register("CreditCardNumber")} />
            {errors?.CreditCardNumber && (
              <p>{errors?.CreditCardNumber?.message || "Error!"}</p>
            )}
          </div>
          <div>
            <label>Expiration Date</label>
            <input {...register("ExpirationDate")} />
            {errors?.ExpirationDate && (
              <p>{errors?.ExpirationDate?.message || "Error!"}</p>
            )}
          </div>
          <div>
            <label></label>
            <input placeholder="cvv" {...register("cvv")} />
            {errors?.cvv && <p>{errors?.cvv?.message || "Error!"}</p>}
          </div>
          <div>
            <label>Card Holder Full Name</label>
            <input {...register("CardHolderFullName")} />
            {errors?.CardHolderFullName && (
              <p>{errors?.CardHolderFullName?.message || "Error!"}</p>
            )}
          </div>
          <div>
            <label>ID</label>
            <input placeholder="ID" {...register("PersonID")} />
          </div>
          {errors?.PersonID && <p>{errors?.PersonID?.message || "Error!"}</p>}

          <input type="submit" disabled={!isValid} />
        </form>
      )}
    </div>
  );
};

export default DateRangePickerComp;
