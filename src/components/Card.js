import React from "react";

function Card({ data }) {
  const iconLink = "http://openweathermap.org/img/wn/";
  const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="future-weather text-sm bg-yellow-300 px-6 py-8 text-white-200 overflow-hidden">
      {data &&
        data.map((item) => {
          return (
            <div className="flex items-center">
              <div className="w-1/6 text-lg text-white-200">
                {days[new Date(item.dt_txt).getDay()]}
                <br />
                {item.dt_txt.split(" ")[0]}
              </div>
              <div className="w-4/6 px-4 flex items-center">
                <div>
                  <img
                    src={iconLink + item.weather[0].icon + ".png"}
                    width="70px"
                    height="70px"
                    alt="weather icon"
                  />
                </div>
                <div className="ml-3 text-white-200">
                  {item.weather[0].description}
                </div>
              </div>
              <div className="w-1/6 text-right">
                <div>Max Temp : {Math.round(item.main.temp_max)}°C</div>
                <div>Min Temp : {Math.round(item.main.temp_min)}°C</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Card;
