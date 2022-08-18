import React from "react";


const CountryDetail = ({country, favouriteCountry, favouriteSubmit, }) => {

    const submitFavourite = () => {
        favouriteSubmit(country)
    }

    return(
        <div>
            <h2>{country.name.official}</h2>
            <p>{country.name.official == "Republic of Ireland" ? <i> There are {country.population} Legends in {country.name.official}</i>: <i> There are {country.population} cunts in {country.name.official}</i>}</p>
            <p><img src={country.flags.svg}></img></p>
            <button onClick={submitFavourite}>Add To Favourites!</button>
        </div>
    )
}

export default CountryDetail;