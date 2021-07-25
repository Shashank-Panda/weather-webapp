import React from "react";
import ReactDOM from 'react-dom';

let flag = false

const toggleInfo = () => {
  const columns = document.querySelectorAll(".extra-information");
  const dailyForecast = document.getElementById("daily-forecast");
  
  columns.forEach((column) => {
      column.classList.toggle("invisible");
  });
  if(dailyForecast.style.width == "40%")
      dailyForecast.style.width = "75%";
  else
      dailyForecast.style.width = "40%";
  console.log(dailyForecast);
}

function DailyForecast({ weatherInfo }) {
  
  let tableRow = [],num1,num2;
  let dailyInfo = weatherInfo.daily ;
  console.log(weatherInfo);
  console.log(dailyInfo);

  for( let i = 0 ; i < 8 ; i++ ){
    num1 = dailyInfo[i].temp.max - 273 ;
    num2 = dailyInfo[i].temp.min - 273 ;
    num1 = num1.toFixed(1);
    num2 = num2.toFixed(1);
    tableRow.push(
      <tr>
        <td>{dailyInfo[i].dt}</td>
        <td>{num1}/{num2}</td>
        <td>{dailyInfo[i].weather[0].description}</td>
        <td className="extra-information invisible">{dailyInfo[i].wind_speed}</td>
        <td className="extra-information invisible">{dailyInfo[i].humidity}</td>
        <td className="extra-information invisible">{dailyInfo[i].pressure}</td>
      </tr>
    )
  }
  let tableElement = React.createElement(
    "table",
    { 
      id : "daily-forecast",
      style : { width : "40%" }
    },
    [ ...tableRow ]
  )
  return (
    <React.Fragment>
      {tableElement}
      <button id = "add-information" onClick = {toggleInfo} >Show Details</button>
    </React.Fragment>
  );
}

export default DailyForecast;
