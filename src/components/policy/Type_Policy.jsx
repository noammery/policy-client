import {Route,Routes} from "react-router-dom";

function Type() {
  return (
    <div className="Type">
      <div>
        <div><p>Third Side Party</p></div>
        <div><p>Luggage</p></div>
        <div><p>Search And Rescue</p></div>
        <div><p>Winter Sport</p></div>
        <div><p>Water Sport</p></div>
        <div><p>Extreme Sport</p></div>
        <div><p>Cellphone</p></div>
        <div><p>Laptop</p></div>
        <div><p>Deterioration In Medical Condition</p></div>
      </div>

      <Routes>
        <Route path="Payment"></Route>
      </Routes>
    </div>
  );
}

export default Type;
