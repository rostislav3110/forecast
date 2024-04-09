import React from "react";
import WindStatus from "./statusForecast/WindStatus";
import UvIndex from "./statusForecast/UvIndex";
import Humidity from "./statusForecast/Humidity";
import Visibility from "./statusForecast/Visibility";
import ForecastMap from "./ForecastMap";
import Otherdays from "./Otherdays";

function Status() {
  return (
    <div className="status" >
      <div style={{display:"flex", justifyContent: "center", flexWrap: "wrap", gap: "10px"}}>
        <WindStatus />
        <UvIndex />
         <Humidity />
          <Visibility /> 
      </div>
      <ForecastMap/>
      <Otherdays/>
    </div>
  );
}

export default Status;
