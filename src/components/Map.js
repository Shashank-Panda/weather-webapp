import React from "react";

function Map({ city }) {
  
  const apiKey = 'AIzaSyBiVryxblIj0xtSAki3qq36xJkyJasU2-0';
  let link = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${city}`;
  const styleset = {border: 0}
  return (
    <iframe
        id="map" 
        width="100%"
        height="370px"
        style = {styleset}
        loading="lazy"
        allowFullScreen
        src={link}
    ></iframe>
  );
}

export default Map;
