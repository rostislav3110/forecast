import React from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import Temperature from "../components/Temperature";
import ChanceOfRainChart from "../components/ChanceOfRainChart";
import HourlyData from "../components/HourlyData";
import Status from "../components/Status";

function Weather() {
  return (
    <Container>
      <Header />
      <div className="forecast">
        <div className="forecast_container">
          <Temperature />
          <HourlyData />
          <ChanceOfRainChart />
        </div>
        <div className="forecast_container">
          <div className="status_forecast">
            <div className="text_status">
              <h4>Today's Overview</h4>
              <div
                className="days"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p style={{ marginRight: "150px" }}>Other days</p>
                <p>See All</p>
              </div>
            </div>
            <Status />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Weather;
