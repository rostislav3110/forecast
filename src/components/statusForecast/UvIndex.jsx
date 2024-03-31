import React from 'react'
import { useApp } from '../../utils/context';
import uv from '../../assets/photo_2024-03-30_03-24-22-removebg-preview.png';


function UvIndex() {
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
      <span style={{alignSelf: "start"}}>UV Indesx</span>
      <img src={uv} style={{width: "150px"}} alt="demo" />
      <p>{weatherState.current?.uv} UV</p>
    </div>
  )
}

export default UvIndex;