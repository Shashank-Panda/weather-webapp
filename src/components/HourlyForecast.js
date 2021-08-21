import React from "react";
import { Line } from "react-chartjs-2";

function HourlyForecast({ weatherInfo }) {
  let hourlyInfo = weatherInfo.hourly , timeStamp = [], temperatureData = [];
  for( let i = 0 ; i < 8 ; i++ ){
    const offset = weatherInfo.timezone_offset;
    const dt = hourlyInfo[i].dt;
    const local = 19800;
    function Unix_timestamp(t) {
      let dt = new Date(t * 1000);
      let hr = dt.getHours();
      return hr;
    }

    let time = Unix_timestamp(dt - local + offset);
    if(time < 13){
      time = `${time} am`
    }
    else
      time = `${time - 12} pm`
    timeStamp.push(time);
    temperatureData.push(hourlyInfo[i].temp - 273);
  }
  return (
    <div id="hourly-forecast" >
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
