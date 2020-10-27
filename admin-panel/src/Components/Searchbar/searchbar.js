import React, { Component } from 'react';
import './searchbar.css'

class searchbar extends Component {
    render() {
        return (
            <div className="wrap">
               <div className="search">
                  <input type="text" class="searchTerm" placeholder="Want Any?" />
                  <button type="submit" class="searchButton">
                      Search
                  </button>
               </div>
            </div>
        );
    }
}

export default searchbar;