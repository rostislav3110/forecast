import React, { useEffect, useState } from "react";
import { useApp } from "../utils/context";
import localstyle from "../style/hourlydata.module.css";
function HourlyData() {
  const { weatherState, weatherIndex } = useApp();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (weatherState) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [weatherState]);

  if (!weatherState) {
    return null;
  }
  const forecastData = weatherState.forecast?.forecastday[weatherIndex].hour;

  const formattedTime = (time) => {
    return new Date(time).toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <div style={{margin: "0 20px"}}>
      <form>
        <div className={localstyle.radio_group}>
          <input
            className={localstyle.input}
            type="radio"
            id="option-one"
            name="selector"
          />
          <label className={localstyle.label} htmlFor="option-one">
            Forecast
          </label>
          <input
            className={localstyle.input}
            type="radio"
            id="option-two"
            name="selector"
          />
          <label className={localstyle.label} htmlFor="option-two">
          Air Quality
          </label>
        </div>
      </form>
      <div
        className={`${localstyle.current_container}`}
      >
        <ul
          style={{
            display: "flex",
            width: "100px",
            listStyle: "none",
            padding: "0",
            margin: "0",
          }}
        >
          {forecastData?.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100px",
                backgroundColor: "rgb(27, 27, 29)",
                marginRight: "1vw",
                borderRadius: "30px",
                padding: "35px 23px",
                height: "220px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                opacity: isVisible ? 1 : 0, // Opacity controlled by isVisible state
                transition: "opacity 0.5s ease-in-out", // Smooth transition
              }}
            >
              <p style={{ fontSize: "18px" }}>{formattedTime(item.time)}</p>
              <hr
                style={{ width: "100px", border: " 1px solid rgb(57, 57, 58)" }}
              />
              <img
                src={item.condition.icon}
                alt={item.condition.text}
                style={{ width: "50px" }}
              />

              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "600",
                }}
              >
                {Math.round(item.temp_c)}°C
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HourlyData;
