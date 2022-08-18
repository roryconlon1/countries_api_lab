import React, { useEffect, useState } from "react";
import CountrySelector from "../Components/CountrySelector"
import CountryDetail from "../Components/CountryDetail"
// import CountryList from "../Components/AllFavouriteCountries";
// import AllFavouriteCountries from "../Components/AllFavouriteCountries";
import FavouriteCountryDetail from "../Components/FavouriteCountryDetail";

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountry, setFavouriteCountry] = useState([]);

    useEffect(() => {
        getCountries();
    }, [])

    const onCountrySelected = (country) => {
        setSelectedCountry(country);
    }

    const sumPopulation = countries.reduce((runningTotal, country) => {
        return runningTotal + country.population
    }, 0)


    const getCountries = function () {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(countries => setCountries(countries));
    }

    const favouriteSubmit = (newCountry) => {
        newCountry.id = Date.now()
        const updatedFavourites = [...favouriteCountry, newCountry]
        setFavouriteCountry(updatedFavourites)
    }

    return (
        <div>
            <h4>The World Population is: {sumPopulation}</h4>
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ? <CountryDetail favouriteSubmit={favouriteSubmit} country={selectedCountry} /> : null}
            <h3>My Favourite Countries:</h3>
            {favouriteCountry ? <FavouriteCountryDetail favouriteCountry={favouriteCountry}/> : null}
            {/* <FavouriteCountryDetail /> */}
            
            
        </div>
    )
}

export default CountryContainer;