import React from "react";
import wind from "../../assets/Wind.png"
import { useApp } from "../../utils/context";
function WindStatus() {

    const { weatherState } = useApp();


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
      <span style={{alignSelf: "start"}}>Wind Status</span>
      <img src={wind}alt="demo" />
      <p>{weatherState.current?.wind_kph}km/h</p>
    </div>
  );
}

export default WindStatus;
