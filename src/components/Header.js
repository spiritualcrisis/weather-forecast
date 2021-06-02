import React from "react";
import PropTypes from "prop-types";

const iconLink = "https://openweathermap.org/img/wn/";

function Header({ oneDayData, weatherData }) {
  return (
    <div>
      <div className="spacing-4 text-center text-5xl font-semibold px-8 py-8">
        Weather Forecast
      </div>
      <div className="current-weather flex items-center justify-center px-6 py-8">
        <div className="flex flex-col md:flex-row items-center">
          <div>
            <div className="text-6xl font-semibold">
              {Math.round(oneDayData.main.temp)}
            </div>
            <div>Feels Like : {Math.round(oneDayData.main.feels_like)} °C</div>
          </div>
          <div className="mx-5">
            <div>
              <span>{weatherData && weatherData.city}</span>
              <br />
              <span>{weatherData && weatherData.country}</span>
            </div>
            <div className="font-semibold">
              {oneDayData.weather[0].description}
            </div>
          </div>
          <div>
            <img
              src={iconLink + oneDayData.weather[0].icon + ".png"}
              width="90px"
              height="90px"
              alt="weather icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
Header.propTypes = {
  oneDayData: PropTypes.shape({
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ),
    main: PropTypes.shape({
      feels_like: PropTypes.number.isRequired,
      temp: PropTypes.number.isRequired,
    }),
  }),
  weatherData: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }),
};
Header.defaultProps = {
  oneDayData: {
    weather: [
      {
        description: "-",
        icon: "",
      },
    ],
    main: {
      feels_like: 0,
      temp: 0,
    },
  },
  weatherData: {
    city: "-",
    country: "-",
  },
};
export default Header;
