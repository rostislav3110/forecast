import React from 'react';
import humidity from "../../assets/Humidity.png";
import { useApp } from '../../utils/context';
function Humidity() {

   const {weatherState} = useApp();
  return (
    <div
      style={{
        width: "290px",
        height: "245px",
        borderRadius: "15px",
        background: "rgb(27, 27, 29)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: "14px",
      }}
    >
      <span style={{alignSelf: "start"}}>Humidity</span>
      <img src={humidity} alt="demo" />
      <p>{weatherState.current?.humidity}%</p>
    </div>
  )
}

export default Humidity