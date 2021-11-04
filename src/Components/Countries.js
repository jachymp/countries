import { useEffect, useState } from "react";
import Country from "./Country";

function Countries({countries, setCountries})
{
    
    const countriesUrl = 'https://restcountries.com/v3.1/all';

    async function fetchAllCountriesData(){
        const countriesResp = await fetch(countriesUrl);
        const countriesRes = await countriesResp.json();
        setCountries(countriesRes);
    }

    useEffect(() => {
        fetchAllCountriesData();
    }, []);

    return(
        <div className="countries">
            {/* {console.log(countries)} */}
            {countries && countries.length ? 
            countries.map((country, index) => (
                <div className="country">
                    <Country key={index} oneCountry={country}/>
                </div>
                
            ))
            :
            <p>Does not exist</p>
            }

        </div>
    )
}

export default Countries;