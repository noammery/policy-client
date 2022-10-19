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
import BasicModal from "./modal";
import axios from "axios";

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
  const [disabled, setDisabled] = useState(true);

  const [policys, setPolicys] = useState([]);

  const onSubmit = async (data) => {
    setPolicys([...policys, data]);
    await axios.post(`http://localhost:3001/policyapi/policy`, data);
  };
  const getPolicys = () => {
    axios.get(`http://localhost:3001/policyapi/policy`).then((res) => {
      res.data && setPolicys(res.data);
    });
  };
  useEffect(() => {
    getPolicys();
  }, []);
  console.log(policys);
  return (
    <div className="allOfMaximWork">
      {step === 1 ? (
        <div className="calendarWrap">
          <h1>Pick Your Dates:</h1>
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
                months={1}
                direction="horizontal"
                className="calendarElement"
              />
            )}
          </div>
          <h1>✈️Pick a region✈️</h1>
          <div className="Continent">
            <div
              className={`regionDiv ${region === "America" ? "black" : <></>}`}
              onClick={() => setRegion("America")}
            >
              <p>America</p>
            </div>
            <div
              className={`regionDiv ${
                region === "South America" ? "black" : <></>
              }`}
              onClick={() => setRegion("South America")}
            >
              <p>South America</p>
            </div>
            <div
              className={`regionDiv ${region === "Asia" ? "black" : <></>}`}
              onClick={() => setRegion("Asia")}
            >
              <p>Asia</p>
            </div>
            <div
              className={`regionDiv ${region === "Europe" ? "black" : <></>}`}
              onClick={() => setRegion("Europe")}
            >
              <p>Europe</p>
            </div>
            <div
              className={`regionDiv ${region === "Africa" ? "black" : <></>}`}
              onClick={() => setRegion("Africa")}
            >
              <p>Africa</p>
            </div>
            <div
              className={`regionDiv ${
                region === "Australia" ? "black" : <></>
              }`}
              onClick={() => setRegion("Australia")}
            >
              <p>Australia</p>
            </div>
            <div
              className={`regionDiv ${
                region === "Antartica" ? "black" : <></>
              }`}
              onClick={() => setRegion("Antartica")}
            >
              <p>Antartica</p>
            </div>
            <div
              className={`regionDiv ${region === "Israel" ? "black" : <></>}`}
              onClick={() => setRegion("Israel")}
            >
              <p>Israel</p>
            </div>
          </div>
          {region === "" ? (
            <></>
          ) : (
            <button onClick={() => setStep(2)} className="button-19 next">
              next
            </button>
          )}
        </div>
      ) : step == 2 ? (
        <div>
          <div className="Type">
            <h1>What policy are you searching for?</h1>
            <div className="insuranceContainer">
              <div className="insuranceType">
                <input
                  onClick={handleClick}
                  checked={checked}
                  type="checkbox"
                />
                <p className={checked ? "green" : null}>
                  Third Side Party - 1₪
                </p>
              </div>
              <div className="insuranceType">
                <input
                  onClick={handleClick1}
                  checked={checked1}
                  type="checkbox"
                />
                <p className={checked1 ? "green" : null}>
                  Search And Rescue - 2₪{" "}
                </p>
              </div>
              <div className="insuranceType">
                <input
                  onClick={handleClick2}
                  checked={checked2}
                  type="checkbox"
                />
                <p className={checked2 ? "green" : null}>Winter Sport - 3₪</p>
              </div>
              <div className="insuranceType">
                <input
                  onClick={handleClick3}
                  checked={checked3}
                  type="checkbox"
                />
                <p className={checked3 ? "green" : null}>Water Sport - 4₪</p>
              </div>
              <div className="insuranceType">
                <input
                  onClick={handleClick4}
                  checked={checked4}
                  type="checkbox"
                />
                <p className={checked4 ? "green" : null}>Extreme Sport - 5₪</p>
              </div>
              <div className="insuranceType">
                <input
                  onClick={handleClick5}
                  checked={checked5}
                  type="checkbox"
                />
                <p className={checked5 ? "green" : null}>Luggage - 6₪</p>
              </div>
              <div className="insuranceType">
                <input
                  onClick={handleClick6}
                  checked={checked6}
                  type="checkbox"
                />
                <p className={checked6 ? "green" : null}>Cellphone - 7₪</p>
              </div>
              <div className="insuranceType">
                <input
                  onClick={handleClick7}
                  checked={checked7}
                  type="checkbox"
                />
                <p className={checked7 ? "green" : null}>Laptop - 8₪</p>
              </div>
              <div className="insuranceType">
                <input
                  onClick={handleClick8}
                  checked={checked8}
                  type="checkbox"
                />
                <p className={checked8 ? "green" : null}>
                  Deterioration In Medical Condition - 9₪
                </p>
              </div>
            </div>
            {disabled ? (
              <button
                className="button-19 next"
                onClick={() => {
                  handleSubmit1();
                  setDisabled(false);
                }}
              >
                submit choices
              </button>
            ) : (
              <></>
            )}

            <h1>Current total:{much}₪</h1>
          </div>
          <button onClick={() => setStep(3)} className="button-19 next">
            next
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="data-purchase">
            <div className="dataContainer">
              <h2>Your Current policy</h2>
              <h3>Total to pay: {much}₪</h3>
              <br />
              <h3>trip to {region}</h3>
              <br />
              <h3>
                <h2
                  style={{
                    fontWeight: "900",
                    color: "gold",
                    textDecoration: "2px solid black underline",
                  }}
                >
                  From:
                </h2>
                {range[0].startDate.toString()}
                <br />
                <h2
                  style={{
                    fontWeight: "900",
                    color: "gold",
                    textDecoration: "2px solid black underline",
                  }}
                >
                  Until:
                </h2>
                {range[0].endDate.toString()}
              </h3>
            </div>
            <div className="purchaseContainer">
              <div className="inputs">
                <label>Credit Card Number</label>
                <input {...register("CreditCardNumber")} />
                {errors?.CreditCardNumber && (
                  <p>{errors?.CreditCardNumber?.message || "Error!"}</p>
                )}
              </div>
              <div className="inputs">
                <label>Expiration Date</label>
                <input {...register("ExpirationDate")} />
                {errors?.ExpirationDate && (
                  <p>{errors?.ExpirationDate?.message || "Error!"}</p>
                )}
              </div>
              <div className="inputs">
                <label>CVV</label>
                <input placeholder="cvv" {...register("cvv")} />
                {errors?.cvv && <p>{errors?.cvv?.message || "Error!"}</p>}
              </div>
              <div className="inputs">
                <label>Card Holder Full Name</label>
                <input {...register("CardHolderFullName")} />
                {errors?.CardHolderFullName && (
                  <p>{errors?.CardHolderFullName?.message || "Error!"}</p>
                )}
              </div>
              <div className="inputs">
                <label>ID</label>
                <input placeholder="ID" {...register("PersonID")} />
              </div>
              {errors?.PersonID && (
                <p>{errors?.PersonID?.message || "Error!"}</p>
              )}
            </div>
          </div>
          <BasicModal isValid={isValid}></BasicModal>
        </form>
      )}
    </div>
  );
};

export default DateRangePickerComp;
