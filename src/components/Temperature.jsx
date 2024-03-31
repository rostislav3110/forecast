import React from "react";
import temper from "../style/temperature.module.css";
import { useApp } from "../utils/context";
import { light_mode, dark_mode } from "../utils/theme_style";
function Temperature() {
    const { weatherState } = useApp();

    const currentDate = new Date().toLocaleDateString(undefined, {
      weekday: "long",
    })
    const currentTime = new Date().toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
    });

    const {isDarkMode} = useApp();
    const currentTheme = isDarkMode ? dark_mode : light_mode

  return (
    <div style={{...currentTheme.tempblock}}>

      <h4>Today, Tomorrow, Next 7 days</h4>

      <div className="forecastTemperature">
        <div className={temper.weather_info}>
          <div className={temper.date_time}>
            <span className={temper.date}>{currentDate}</span>
            <span className={temper.time}>{currentTime}</span>
          </div>
          <div className={temper.info_menu}>
            <div className={temper.temperature}>
              <span className={temper.value}>
                {Math.round(weatherState.current?.temp_c)}°
              </span>
              <img
                src={weatherState.current?.condition.icon}
                className={temper.weather_icon}
                alt="weather icon"
              />
            </div>

            <div className={temper.wind}>
              <span className={temper.real_feel}>
                Real Feel: {Math.round(weatherState.current?.feelslike_c)}°
              </span>
              <span className={temper.wind_speed}>
                Wind N-E: {Math.round(weatherState.current?.wind_kph)}km/h
              </span>
            </div>
            <div className={temper.pressure_humidity}>
              <span className={temper.pressure}>
                Pressure: {weatherState.current?.pressure_mb}MB
              </span>
              <span className={temper.humidity}>
                Humidity: {weatherState.current?.humidity}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temperature;
