import React from "react";

const CountrySelector = ({countries, onCountrySelected}) => {
    
    const CountryOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name.official}</option>
    })

    const handleChange = (event) => {
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry)
    }

    return(
        <select defaultValue="" onChange={handleChange}>
        <option value="" selected>Choose a Country</option>
        {CountryOptions}
        </select>
    )
}

export default CountrySelector;