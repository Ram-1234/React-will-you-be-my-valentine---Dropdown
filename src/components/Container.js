import React,{useState} from 'react';

const Container = ({states}) => {
    const [state, setState] = useState(0);
  const [city, setCity] = useState(state);
  const [town, setTown] = useState(city);
  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleTownChange = (event) => {
    setTown(event.target.value);
  };
  return (
    <div id="main">
      States:
      <select value={state} id="state" onChange={handleStateChange}>
        {states.map((item, state) => (
          <option key={state} value={state} state={state}>
            {item.name}
          </option>
        ))}
      </select>
      <div id="state-title">{states[state].name}</div>
      <div id="state-description">{states[state].description}</div>
      {/* <h1>{city}</h1> */}
      Cities:
      <select id="city" value={city} onChange={handleCityChange}>
        {states[state].city.map((item, state) => (
          <option key={state} value={state} state={state}>
            {item.name}
          </option>
        ))}
      </select>
      <div id="city-title">{states[state].city[city].name}</div>
      <div id="city-description">{states[state].city[city].description}</div>
      {/* <h1>{town}</h1> */}
      Towns:
      <select value={town} id="landmark" onChange={handleTownChange}>
        {states[state].city[city].landmarks.map((item, state) => (
          <option key={state} value={state} state={state}>
            {item.name}
          </option>
        ))}
      </select>
      <div id="landmark-title">
        {states[state].city[city].landmarks[town].name}
      </div>
      <div id="landmark-description">
        {states[state].city[city].landmarks[town].description}
      </div>
    </div>
  );
}


export default Container;