import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { getWeatherData } from "./api/getWeatherData";

function App() {
  const [weatherData, setWeather] = useState({});
  const [fiveDaysData, setFiveDaysData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setWeatherData();
  }, []);
  const setWeatherData = () => {
    getWeatherData().then((data) => {
      setWeather({
        city: data.city.name,
        country: data.city.country,
      });
      const filteredFiveDaysData = data.list.filter((reading) => {
        return reading.dt_txt.includes("18:00:00");
      });
      setFiveDaysData(filteredFiveDaysData);
      setLoading(false);
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-center pt-16">
      <div className="font-sans w-5/12 rounded-lg overflow-hidden px-4 bg-yellow-300 shadow-lg mt-12">
        <Header weatherData={weatherData} oneDayData={fiveDaysData[0]} />

        <Card data={fiveDaysData} />
      </div>
    </div>
  );
}

export default App;
