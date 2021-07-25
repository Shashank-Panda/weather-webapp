import React from "react";
import { Line } from "react-chartjs-2";

function HourlyForecast({ weatherInfo }) {
  let hourlyInfo = weatherInfo.hourly , timeStamp = [], temperatureData = [];
  for( let i = 0 ; i < 8 ; i++ ){
    timeStamp.push(hourlyInfo[i].dt);
    temperatureData.push(hourlyInfo[i].temp - 273);
  }
  return (
    <div id="hourly-forecast" class="middle-display">
      <Line
        height = "52px"
        width = "100%"
        data = {{
            labels: timeStamp,
            datasets: [{
                label: 'Temperature',
                pointRadius : 1,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: temperatureData,
                tension : 0.1
            }]
        }}
        options = {{
            maintainAspectRatio : true,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }}
      ></Line>
    </div>
  );
}

export default HourlyForecast;
