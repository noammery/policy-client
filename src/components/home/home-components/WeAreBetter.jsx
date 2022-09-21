import "./wearebetter.css";
import LuggageIcon from "@mui/icons-material/Luggage";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

function WeAreBetter() {
  return (
    <div className="WeAreBetter">
      <div className="better-header">
        <h3>You might have an insurance policy</h3>
        <h1>BUT NOT AS GOOD AS OWERS!</h1>
      </div>
      <div className="better-icons">
        <div className="theIcons">
          <LuggageIcon fontSize="large" />
          <h4>PREMIUM LUGGAGE SUPPORT</h4>
        </div>
        <div className="theIcons">
          <HourglassBottomIcon fontSize="large" />
          <h4>ZERO WAITING TIME</h4>
        </div>
        <div className="theIcons">
          <CurrencyExchangeIcon fontSize="large" />
          <h4>100% REFUND</h4>
        </div>
        <div className="theIcons">
          <LocalHospitalIcon fontSize="large" />
          <h4>PREMIUM MEDICAL SUPPORT</h4>
        </div>
      </div>
    </div>
  );
}

export default WeAreBetter;
