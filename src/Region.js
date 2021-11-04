function Region({setValueType, setValue})
{
    const regionArray = [
        'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
    ];

    return(
        <select onChange={(e) => {setValueType('region'); setValue(e.target.value);}}>
            {regionArray.map((region, index) => (
                    <option key={index} option={region}>{region}</option>
            ))}
        </select>
    )
}

export default Region;