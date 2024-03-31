import React from "react";
import mapstyle from "../style/map.module.css";
function ForecastMap() {
  return (
    <div className={mapstyle.map_box}>
        <p className={mapstyle.explore_global_map}>
          Explore global map of wind <br />
          weather and ocean condition
        </p>
        <div className={mapstyle.GET_STARTED_button}>
          <a href="https://www.ventusky.com/" target="_blank" rel="noopener noreferrer"> GET STARTED</a>
        </div>
    </div>
  );
}

export default ForecastMap;
