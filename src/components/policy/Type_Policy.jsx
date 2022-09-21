import { useState } from "react";
import "./type_policy.css";
function Type(props) {
  const [tempMuch, setTempMuch] = useState(0);
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
    checked ? setTempMuch(tempMuch - 1) : setTempMuch(tempMuch + 1);
  };
  const [checked1, setChecked1] = useState(false);
  const handleClick1 = () => {setChecked1(!checked1)
    checked1 ? setTempMuch(tempMuch - 2) : setTempMuch(tempMuch + 2)
  };
  const [checked2, setChecked2] = useState(false);
  const handleClick2 = () => {setChecked2(!checked2)
    checked2 ? setTempMuch(tempMuch - 3) : setTempMuch(tempMuch + 3)
  }
  const [checked3, setChecked3] = useState(false);
  const handleClick3 = () => {setChecked3(!checked3)
    checked3 ? setTempMuch(tempMuch - 4) : setTempMuch(tempMuch + 4)
  }
  const [checked4, setChecked4] = useState(false);
  const handleClick4 = () => {setChecked4(!checked4)
    checked4 ? setTempMuch(tempMuch - 5) : setTempMuch(tempMuch +5)
  }
  const [checked5, setChecked5] = useState(false);
  const handleClick5 = () => {setChecked5(!checked5)
    checked5 ? setTempMuch(tempMuch - 6) : setTempMuch(tempMuch +6)
  }
  const [checked6, setChecked6] = useState(false);
  const handleClick6 = () => {setChecked6(!checked6)
    checked6 ? setTempMuch(tempMuch - 7 ) : setTempMuch(tempMuch + 7)
  }
  const [checked7, setChecked7] = useState(false);
  const handleClick7 = () => {setChecked7(!checked7)
    checked7 ? setTempMuch(tempMuch - 8) : setTempMuch(tempMuch + 8)
  }
  const [checked8, setChecked8] = useState(false);
  const handleClick8 = () => {setChecked8(!checked8)
    checked8 ? setTempMuch(tempMuch - 9) : setTempMuch(tempMuch + 9)
  }
  let [much, setMuch] = useState(150);
  const handleSubmit = () => {
    setMuch(much+tempMuch)
  };
  return (
    <div className="Type">
      <div className="insuranceContainer">
        <div className="party">
          <input onClick={handleClick} checked={checked} type="checkbox" />
          <p className={checked ? "green" : null}>Third Side Party</p>
        </div>
        <div className="search">
          <input onClick={handleClick1} checked={checked1} type="checkbox" />
          <p className={checked1 ? "green" : null}>Search And Rescue</p>
        </div>
        <div className="winter">
          <input onClick={handleClick2} checked={checked2} type="checkbox" />
          <p className={checked2 ? "green" : null}>Winter Sport</p>
        </div>
        <div className="water">
          <input onClick={handleClick3} checked={checked3} type="checkbox" />
          <p className={checked3 ? "green" : null}>Water Sport</p>
        </div>
        <div className="extreme">
          <input onClick={handleClick4} checked={checked4} type="checkbox" />
          <p className={checked4 ? "green" : null}>Extreme Sport</p>
        </div>
        <div className="luggage">
          <input onClick={handleClick5} checked={checked5} type="checkbox" />
          <p className={checked5 ? "green" : null}>Luggage</p>
        </div>
        <div className="cellphone">
          <input onClick={handleClick6} checked={checked6} type="checkbox" />
          <p className={checked6 ? "green" : null}>Cellphone</p>
        </div>
        <div className="laptop">
          <input onClick={handleClick7} checked={checked7} type="checkbox" />
          <p className={checked7 ? "green" : null}>Laptop</p>
        </div>
        <div className="medical">
          <input onClick={handleClick8} checked={checked8} type="checkbox" />
          <p className={checked8 ? "green" : null}>
            Deterioration In Medical Condition
          </p>
        </div>
      </div>
      <button onClick={() => handleSubmit()}>submit choices</button>
      {much}
    </div>
  );
}

export default Type;
