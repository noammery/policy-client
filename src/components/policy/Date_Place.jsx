import { useEffect, useRef, useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './Date_Place.css'

import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import Type from './Type_Policy'

const schema = yup.object().shape({
  CreditCardNumber: yup.string().required("is required").min(16,"Valid card only").max(16,"Valid card only").matches(/^[0-9]+$/, "Numbers only"),
  ExpirationDate: yup.string().required('is required').min(4,"Valid card only").max(4,"Valid card only").matches(/^[0-9]+$/, "Numbers only"),
  cvv: yup.string().required('is required').min(3,"Valid card only").max(3,"Valid card only").matches(/^[0-9]+$/, "Numbers only"),
  CardHolderFullName: yup.string().required('is required'),
  PersonID: yup.string().required('is required').min(9,'Enter a valid ID').matches(/^[0-9]+$/,'ID can contain only numbers')
}).required();


const DateRangePickerComp = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({mode:"onBlur", resolver:yupResolver(schema)});
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  const [step, setStep] = useState(1)
  const [region,setRegion] = useState("")
    const [range, setRange] = useState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
      }
    ])
    
    const [open, setOpen] = useState(false)
  
    const refOne = useRef(null)
  
    useEffect(() => {
      document.addEventListener("keydown", hideOnEscape, true)
      document.addEventListener("click", hideOnClickOutside, true)
    }, [])
  
    const hideOnEscape = (e) => {
      if( e.key === "Escape" ) {
        setOpen(false)
      }
    }
  
    const hideOnClickOutside = (e) => {
      
      if( refOne.current && !refOne.current.contains(e.target) ) {
        setOpen(false)
      }
    }
    console.log(range[0].startDate.toString())
  return (
    <div>
      {step === 1 ?
    <div className="calendarWrap">
      <h1>Pick Dates</h1>
        <input
        value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`}
        readOnly
        className="inputBox"
        onClick={ () => setOpen(open => !open) }
        />

      <div ref={refOne}>
        {open && 
          <DateRangePicker
          onChange={item => setRange([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={2}
          direction="horizontal"
          className="calendarElement"
          />
        }
      </div>

      <div className="Continent">
        <h1>Pick a region</h1>
        <div onClick={()=> setRegion("America")}>
          <p>America</p>
        </div>
        <div onClick={()=> setRegion('South America')}>
          <p>South America</p>
        </div>
        <div onClick={()=> setRegion('Asia')}>
          <p>Asia</p>
        </div>
        <div onClick={()=> setRegion('Europe')}>  
          <p>Europe</p>
        </div>
        <div onClick={()=> setRegion('Africa')}>
          <p>Africa</p>
        </div>
        <div onClick={()=> setRegion('Australia')}>
          <p>Australia</p>
        </div>
        <div onClick={()=> setRegion('Antartica')}>
          <p>Antartica</p>
        </div>
        <div onClick={()=> setRegion('Israel')}>
          <p>Israel</p>
        </div>
      </div>

        <button onClick={() => setStep(2)}>next</button>
    </div>:
    step == 2 ?
    <div>
    <Type />
    
     <button onClick={()=> setStep(3)}>next</button>
     </div>
 
     :
<form onSubmit={handleSubmit(onSubmit)}>
  <h4>trip to {region}
        <br />from <br/>
        {range[0].startDate.toString()}<br/>until <br/>
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
      <input  {...register("ExpirationDate")} />
      {errors?.ExpirationDate && (
        <p>{errors?.ExpirationDate?.message || "Error!"}</p>
      )}
      </div>
      <div>
      <label></label>
      <input placeholder="cvv" {...register("cvv")} />
      {errors?.cvv && (
        <p>{errors?.cvv?.message || "Error!"}</p>
      )}
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
      {errors?.PersonID && (
        <p>{errors?.PersonID?.message || "Error!"}</p>
        )}

      <input type="submit" disabled={!isValid}/>
    </form>}
        </div>
        );
      }
      
      export default DateRangePickerComp;