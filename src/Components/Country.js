function Country({oneCountry})
{
    return(
        <div>
            <img width="250px" src={oneCountry.flags.svg}/>
            <h3>{oneCountry.name.common}</h3>
            <p><strong>Population: </strong>{oneCountry.population}</p>
            <p><strong>Region: </strong>{oneCountry.region}</p>
            <p><strong>Capital: </strong>{oneCountry.capital}</p>
            
        </div>
    )
}

export default Country;