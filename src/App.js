import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { getWeatherData } from "./api/getWeatherData";

function App() {
  const [weatherData, setWeather] = useState({});
  const [fiveDayData, setFiveDayData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData();
      setWeather({
        city: data.city.name,
        country: data.city.country,
      });
      const dailyData = data.list.filter((reading) => {
        return reading.dt_txt.includes("18:00:00");
      });
      setFiveDayData(dailyData);
      console.log(dailyData);
    };
    fetchWeatherData();
    setLoading(false);
  }, []);
  const iconLink = "http://openweathermap.org/img/wn/";
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-center pt-16">
      <div className="weather-container font-sans md:w-200 max-w-lg rounded-lg overflow-hidden px-4 bg-yellow-300 shadow-lg mt-8">
        <Header />
        <div className="current-weather flex items-center justify-between px-6 py-8">
          <div className="flex flex-col md:flex-row items-center">
            <div>
              <div className="text-6xl font-semibold">
                {Math.round(fiveDayData[0].main.temp)}
              </div>
              <div>
                Feels Like : {Math.round(fiveDayData[0].main.feels_like)} °C
              </div>
            </div>
            <div className="mx-5">
              <div>
                <span>{weatherData && weatherData.city}</span>
                <br />
                <span>{weatherData && weatherData.country}</span>
              </div>
              <div className="font-semibold">
                {fiveDayData[0].weather[0].description}
              </div>
            </div>
            <div>
              <img
                src={iconLink + fiveDayData[0].weather[0].icon + ".png"}
                width="90px"
                height="90px"
                alt="weather icon"
              />
            </div>
          </div>
        </div>
        <Card data={fiveDayData} />
      </div>
    </div>
  );
}

export default App;
