import {Route,Routes} from "react-router-dom";
import { useEffect, useRef, useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './Date_Place.css'


const DateRangePickerComp = () => {

  const [region,setRegion] = useState("")

    const [range, setRange] = useState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
      }
    ])
    console.log(range);
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

  return (
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
            months={1}
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

      <Routes>
        <Route path="Type"></Route>
      </Routes>
    </div>
  );
}

export default DateRangePickerComp;