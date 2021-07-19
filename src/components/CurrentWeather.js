import React from 'react'

const CurrentWeather = ({report}) => {
    if(report.cod >= 400){
        console.log('Invalid input');
        return (
            <>
            </>
        )
    }
    // console.log(report);
    console.log(report.main.temp);
    return (
        <div>
          {report.main.temp}
        </div>
    )
}

export default CurrentWeather
