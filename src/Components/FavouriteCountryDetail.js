import React from "react";
// import AllFavouriteCountries from "./AllFavouriteCountries";

const FavouriteCountryDetail = ({favouriteCountry}) => {

   

    const listFavCountry = favouriteCountry.map((country) => {
       return (
        
            <h1 key={country.id} name={country.name.common}>{country.name.common}</h1>
        
       )
  
    })
 
    
    return(
        <div>
            {listFavCountry}
        </div>
    )
}
export default FavouriteCountryDetail