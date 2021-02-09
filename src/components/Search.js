import React from "react";
import {useState} from "react";


function Search({setSearch}) {

  const[searchValue, setSearchValue] = useState("")  

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(searchValue);

    setSearchValue("")
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)} 
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
