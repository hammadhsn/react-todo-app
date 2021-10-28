import React, { useState, useEffect } from "react";
import List from "../components/List";
import "../App.css";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    
    const handleChange = event => {
        console.log(event.target.value)
        setSearchTerm(event.target.value);
        // event.preventDefault();
    };

    // useEffect(() => {
    //     const results = List.filter(data =>
    //     data.toLowerCase().includes(searchTerm)
    //     );
    //     setSearchResults(results);
    //     }, [searchTerm]);

    return (

        <div className="form2-control">
            <input type="text" className="search-item" placeholder="Search Item" 
            value={searchTerm} onChange={handleChange} />

        <ul>
            {searchResults.map(item => (
            <li>
                {item}
            
            </li>
            ))}
        </ul>

            <button type="submit" className="submit-btn">
                Search
            </button>
        </div>
    )
}

export default Search;
