import React, { useState, useEffect } from "react";
import List from "../components/List";
import "../App.css";

const Search = ({ searchItem }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchData, setSearchData] = useState("");
  const handleChange = (event) => {
    const data = event.target.value;
    setSearchData(data);
    searchItem(searchData);
    event.preventDefault();
  };

  // useEffect(() => {
  //     const results = List.filter(data =>
  //     data.toLowerCase().includes(searchTerm)
  //     );
  //     setSearchResults(results);
  //     }, [searchTerm]);

  return (
    <div className="form2-control">
      <input
        type="text"
        className="search-item"
        placeholder="Search Item"
        value={searchData}
        onChange={handleChange}
      />

      <ul>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <button type="submit" className="submit-btn">
        Search
      </button>
    </div>
  );
};

export default Search;
