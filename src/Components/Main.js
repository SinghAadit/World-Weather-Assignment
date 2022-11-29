
import axios from "axios";
import React from "react";
import Weather from "./Weather"
import "./Main.css"


const countriesURL="https://countriesnow.space/api/v0.1/countries";

function Main() {

    const [countries, setCountries] = React.useState(null);
    const [current, setCurrent] = React.useState("Algeria");
    
    React.useEffect(() => {
        axios.get(countriesURL).then((response) => {
            setCountries(response.data);
            });
          

}, []);

    

      if (!countries) return null;
     
     

      

    return (
        
      <div className="Main">
       
      <Weather key={current} country={current } />
       {Object.values(countries.data).map((key, index) => {
        return (
          
          <h2  className="country"onClick={()=> {setCurrent(key.country)
            
          }}
          key={index}>{key.country} </h2>


          
        

        )})}
      


     
      
      </div>
    );
  }
  
  export default Main;