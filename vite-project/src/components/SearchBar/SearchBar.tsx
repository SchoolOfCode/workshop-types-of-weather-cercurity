import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  // Handle the form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behaviour
    onSearch(city); // Call the onSearch function passed via props
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

