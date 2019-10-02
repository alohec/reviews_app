import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import './SearchBar.css';

const options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
};

const SearchBar = () => {
  const [restaurants, setRestaurants] = useState();
  const [fuse, setFuse] = useState();
  const [suggestions, setSuggestions] = useState();

  useEffect(() => {
    fetch('https://desolate-earth-97056.herokuapp.com/restaurants').then(response =>
      response.json().then(data => {
        setRestaurants(data);
        setFuse(new Fuse(data, options));
      })
    )
  }, []);

  const onSearch = (e) => {
    e.preventDefault();
    console.log('Searched!');
  }

  const onType = () => {
    const text = document.getElementById("searchBar").value;
    const results =  fuse.search(text);
    setSuggestions([restaurants[results[0]], restaurants[results[1]], restaurants[results[2]]]);
  }

  return (
    <div class="searchBar">
      <form>
        <input
          type="text"
          id="searchBar"
          placeholder="Search for things!"
          autoComplete="off"
          list="suggestions"
          onChange={onType}
        />
        <datalist id="suggestions">
          {suggestions && suggestions.map(s => <option value={s}/>)}
        </datalist>
        <input type="submit" style={{display: "none"}} onClick={onSearch}/>
      </form>
    </div>
  )
}

export default SearchBar;
