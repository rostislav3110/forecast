import React from 'react'
import { useApp } from '../../utils/context'
import visibility from '../../assets/Visibility.png';
function Visibility() {

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
      <span style={{alignSelf: "start"}}>Visibility </span>
      <img src={visibility} alt="demo" />
      <p>{weatherState.current?.vis_km}km</p>
    </div>
  )
}

export default Visibility