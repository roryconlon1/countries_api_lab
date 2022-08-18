import React from "react";


const CountryListItem = ({country, onCountryClick}) => {

    const handleClick = () => {
        onCountryClick(country);
    }

    return <li onClick={handleClick}>{country.name.official}</li>
}

export default CountryListItem;