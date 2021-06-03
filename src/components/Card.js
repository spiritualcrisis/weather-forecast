import React from "react";
import PropTypes from "prop-types";

const iconLink = "https://openweathermap.org/img/wn/";
const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function Card({ data }) {
  return (
    <div className="future-weather max-w-3xl text-sm bg-yellow-300 px-6 py-8 text-white-200 overflow-hidden">
      {data.map((item) => {
        return (
          <div className="flex items-center" key={item.dt_txt}>
            <div className="w-1/3 text-md text-white-200">
              {days[new Date(item.dt_txt).getDay()]}
              <br />
              {item.dt_txt.split(" ")[0].split("-")[2] +
                "" +
                monthNames[new Date(item.dt_txt.split(" ")[0]).getMonth()]}
            </div>
            <div className="w-1/3  flex items-center">
              <div className="weather-icons">
                <img
                  src={iconLink + item.weather[0].icon + ".png"}
                  alt="weather icon"
                />
              </div>
              <div className="ml-3 text-white-200">
                {item.weather[0].description}
              </div>
            </div>
            <div className="w-1/3 text-right">
              <div>Max Temp : {Math.round(item.main.temp_max)}°C</div>
              <div>Min Temp : {Math.round(item.main.temp_min)}°C</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dt_txt: PropTypes.string.isRequired,
      weather: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired,
        })
      ),
      main: PropTypes.shape({
        temp_max: PropTypes.number.isRequired,
        temp_min: PropTypes.number.isRequired,
      }),
    })
  ),
};
Card.defaultProps = {
  data: [
    {
      dt_txt: "",
      weather: {
        description: "",
        icon: "",
      },
      main: {
        temp_max: 0,
        temp_min: 0,
      },
    },
  ],
};
export default Card;
