import React from "react";
import "../App.css";

const Search = ({ click, value }) => {
return (
    <div className="form2-control">
      <input
        type="text"
        className="search-item"
        placeholder="Search Item"
        value={value}
        onChange={click}
      />
    </div>
  );
};

export default Search;
