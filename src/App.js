import './App.css';
import Countries from './Components/Countries';
import SearchBar from './Components/SearchBar';
import Region from './Components/Region';
import { useState } from 'react';

function App() {

  // value for search bar
  const [value, setValue] = useState('');

  // value type - region vs name
  const [valueType, setValueType] = useState('');

  // array of countries
  const [countries, setCountries] = useState(null);

  return (
    <div className="App">
      <Region setValueType={setValueType} setValue={setValue} />
      <SearchBar setValue={setValue} value={value} setCountries={setCountries} setValueType={setValueType} valueType={valueType}/>
      <Countries countries={countries} setCountries={setCountries}/>
      
      {/* {console.log(countries)} */}
       {/* {console.log(valueType)};
       {console.log(value)}; */}
    </div>
  );
}

export default App;
