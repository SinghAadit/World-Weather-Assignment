
import axios from "axios";
import React from "react";



function Weather(props) {

  
    const [weather, setWeather] = React.useState(null);

    React.useEffect(() => {
       var weatherURL="https://api.openweathermap.org/data/2.5/weather?q="+props.country+"&APPID=794ee95e63c5a32aaf88cd813fa2e425";

        axios.get(weatherURL).then((response) => {
            setWeather(response.data);
            
        });

        
        
      }, []);


      if (!weather) return null;
     

      
      

    return (
        
      <div className="Weather">
      
       
       <h1>Weather of {props.country}</h1>
       <h2> Temperature : {weather.main.temp }</h2>
       <h2> Humidity : {weather.main.humidity }</h2>
       <h2>Winds</h2>
       <h3>speed: {weather.wind.speed}</h3>
       <h3>degree: {weather.wind.deg}</h3>
       <h3>gust: {weather.wind.gust}</h3>
      


     
      
      </div>
    );
  }
  
  export default Weather;