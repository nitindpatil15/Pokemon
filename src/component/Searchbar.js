import React from 'react';

const Searchbar = ({ onSearch }) => {
  return (
    <div className=''>
      <input 
      type="search"
      placeholder="Search Pokémon here"
      onChange={(e) => onSearch(e.target.value)}
      className="m-8 p-4 border-2 rounded-lg lg:w-[30rem] border-gray-600"
    />
    </div>
  );
};

export default Searchbar;
