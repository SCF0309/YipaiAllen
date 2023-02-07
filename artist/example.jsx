import React, { useState } from 'react';

const data = [
  { name: 'John', age: 25, city: 'New York' },
  { name: 'Jane', age: 32, city: 'London' },
  { name: 'Jim', age: 28, city: 'Paris' },
  { name: 'Jake', age: 30, city: 'New York' },
  { name: 'Jack', age: 35, city: 'London' },
];

const FilterExample = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [ageRange, setAgeRange] = useState([20, 40]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleAgeRangeChange = (event) => {
    setAgeRange([event.target.value[0], event.target.value[1]]);
  };

  const filteredData = data.filter(
    (person) =>
      (selectedCity === '' || person.city === selectedCity) &&
      person.age >= ageRange[0] &&
      person.age <= ageRange[1]
  );

  return (
    <div>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">All cities</option>
        <option value="New York">New York</option>
        <option value="London">London</option>
        <option value="Paris">Paris</option>
      </select>

      <input
        type="range"
        min={20}
        max={40}
        value={ageRange}
        onChange={handleAgeRangeChange}
      />

      <ul>
        {filteredData.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterExample;
