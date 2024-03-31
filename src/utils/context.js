import { createContext, useContext, useEffect, useState } from "react";
import { WEATHER_URL } from "./weather_api";

const AppContent = createContext();

export const useApp = () => {
  return useContext(AppContent);
};

export const AppProvider = ({ children }) => {
  const [weatherState, setWeather] = useState([]);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [weatherIndex, setWeatherIndex] = useState(0);

  const getWeatherData = async (...objValue) => {
    const searchValue = objValue[0] || "ukraine";
    try {
      const response = await fetch(
        // `${WEATHER_URL.start_url}?q=${searchValue}&lang=uk&appid=${WEATHER_URL.api_url}`
        `${WEATHER_URL.start_url}${objValue[1]}?${WEATHER_URL.api_url}&q=${searchValue}&aqi=yes&lang=uk&${objValue[2]}`
      );
      const data = await response.json();
      setWeather(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem('isDarkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    // Зберігаємо значення isDarkMode у localStorage при кожній зміні
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  
 

  function toogleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  const updateWeatherState = (newIndex) => {
    setWeatherIndex(newIndex);
  };

  return (
    <AppContent.Provider
      value={{
        getWeatherData,
        weatherState,
        toogleTheme,
        isDarkMode,
        weatherIndex,
        updateWeatherState,
      }}
    >
      {children}
    </AppContent.Provider>
  );
};
