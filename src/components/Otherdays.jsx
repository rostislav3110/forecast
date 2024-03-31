import React from "react";
import { useApp } from "../utils/context";

function Otherdays() {
  const { weatherState } = useApp(); // Додано updateWeatherState
  const forecastData = weatherState.forecast?.forecastday;

  // Функція для форматування дати
  const formatDay = (date) => {
    return new Date(date).toLocaleDateString("uk-UA");
  };

  return (
    <div style={{ marginRight: "20px" }}>
      <div className="citys">
        <ul style={{ listStyle: "none" }}>
          {forecastData?.map((item) => (
            <li key={item.date} style={{ marginBottom: "20px" }} id={item.date}>
              <div className="text">
                <div className="text-wrapper">
                  <p
                    style={{
                      marginBottom: "15px",
                      color: "rgb(239, 239, 239)",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "17px",
                    }}
                  >
                    {formatDay(item.date)}
                  </p>
                  <p>{item.day.condition.text}</p>
                </div>
                <div className="image">
                  <img src={item.day.condition.icon} alt="demo" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Otherdays;
