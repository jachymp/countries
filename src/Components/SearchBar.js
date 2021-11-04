import { useEffect, useState } from "react";

function SearchBar({setValue, value, setCountries, setValueType, valueType})
{
    
    const countryNameUrl = `https://restcountries.com/v3.1/${valueType}/${value}`;

    async function fetchCountriesData(){
        const searchCountryResp = await fetch(countryNameUrl);
        const searchCountryRes = await searchCountryResp.json();
        setCountries(searchCountryRes);
    }

    useEffect(() => {
        if(value){
            fetchCountriesData();
        }
        
    }, [value])


    return(
        <div>
            <input type='text' className="searchBar"/>
            <button onClick={() => (setValue(document.querySelector('.searchBar').value, setValueType('name')))}>
                Search country
            </button>
            
        </div>
    )
}

export default SearchBar;