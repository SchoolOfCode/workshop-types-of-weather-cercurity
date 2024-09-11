import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (input: string, isZipcode: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState(''); //Holds the city or zipcode
  const [isZipcode, setIsZipcode] = useState(false); // Determines if the input is a zipcode]

  // Handle the form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behaviour
    onSearch(input, isZipcode); // Pass the input and the type (zipcode or city) to the parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={isZipcode ? 'Enter zipcode' : 'Enter city'} // Placeholder changes based on search type
        />

    <div>
        {/* Radio buttons for choosing between city and zipcode */}
        <label>
          <input 
            type="radio" 
            name="searchType" 
            checked={!isZipcode} 
            onChange={() => setIsZipcode(false)}
          />
          City
        </label>
        
        <label>
          <input 
            type="radio" 
            name="searchType" 
            checked={isZipcode} 
            onChange={() => setIsZipcode(true)}
          />
          Zipcode
        </label>
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

