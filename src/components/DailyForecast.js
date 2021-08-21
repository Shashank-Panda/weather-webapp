import React from "react";

let flag = false;

const toggleInfo = () => {
  const columns = document.querySelectorAll(".extra-information");
  const dailyForecast = document.getElementById("daily-forecast");

  columns.forEach((column) => {
    column.classList.toggle("invisible");
  });
  if (dailyForecast.style.width == "40%") dailyForecast.style.width = "75%";
  else dailyForecast.style.width = "40%";
  console.log(dailyForecast);
};

function DailyForecast({ weatherInfo }) {
  let tableRow = [],
    num1,
    num2;
  let dailyInfo = weatherInfo.daily;
  console.log(weatherInfo);
  console.log(dailyInfo);
  const offset = weatherInfo.timezone_offset;

  for (let i = 0; i < 8; i++) {
    let windDir;
    if (dailyInfo[i].wind_deg === 0) {
      windDir = "W";
    } else if (
      dailyInfo[i].wind_deg > 0 &&
      dailyInfo[i].wind_deg < 90
    ) {
      windDir = "NW";
    } else if (dailyInfo[i].wind_deg === 90) {
      windDir = "N";
    } else if (
      dailyInfo[i].wind_deg > 90 &&
      dailyInfo[i].wind_deg < 180
    ) {
      windDir = "NE";
    } else if (dailyInfo[i].wind_deg === 180) {
      windDir = "E";
    } else if (
      dailyInfo[i].wind_deg > 180 &&
      dailyInfo[i].wind_deg < 270
    ) {
      windDir = "SE";
    } else if (dailyInfo[i].wind_deg === 270) {
      windDir = "S";
    } else if (
      dailyInfo[i].wind_deg > 270 &&
      dailyInfo[i].wind_deg < 360
    ) {
      windDir = "SW";
    }

    const dt = dailyInfo[i].dt;
    const local = 19800;

    let weekDay, month, year, day;
    function Unix_timestamp(t) {
      let dt = new Date(t * 1000);
      weekDay = dt.toLocaleString("en-US", { weekday: "long" });
      month = dt.toLocaleString("en-US", { month: "long" });
      year = dt.toLocaleString("en-US", { year: "numeric" });
      day = dt.toLocaleString("en-US", { day: "numeric" });
      let hr = dt.getHours();
      let m = "0" + dt.getMinutes();
      // let s = "0" + dt.getSeconds();
      return hr + ":" + m.substr(-2);
    }

    const time = Unix_timestamp(dt - local + offset);
    num1 = dailyInfo[i].temp.max - 273;
    num2 = dailyInfo[i].temp.min - 273;
    num1 = num1.toFixed(1);
    num2 = num2.toFixed(1);
    tableRow.push(
      <tr>
        <td className = 'tableElement' >
          {weekDay}, {day}th {month}
        </td>
        <td className = 'tableElement'>
          {num1} °C/{num2} °C
        </td>
        <td className = 'tableElement'>{dailyInfo[i].weather[0].description}</td>
        <td className="tableElement extra-information invisible">{dailyInfo[i].wind_speed} m/s {windDir}</td>
        <td className="tableElement extra-information invisible">{dailyInfo[i].humidity} %</td>
        <td className="tableElement extra-information invisible">{dailyInfo[i].pressure} hPa</td>
      </tr>
    );
  }
  let tableElement = React.createElement(
    "table",
    {
      id: "daily-forecast",
      style: { width: "40%" },
    },
    [...tableRow]
  );
  return (
    <React.Fragment>
      {tableElement}
      <button id="add-information" onClick={toggleInfo}>
        Show Details
      </button>
    </React.Fragment>
  );
}

export default DailyForecast;