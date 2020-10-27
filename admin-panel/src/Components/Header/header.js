import React, { Component } from 'react';
import './header.css'
import Searchbar from "../Searchbar/searchbar";
import Sidebar from "../Sidebar/Sidebar";

class header extends Component {
    render() {
        return (
            <div className="header">
                <div className="NavBar">
                    <Sidebar />
                    <Searchbar />
                </div>
            </div>
        );
    }
}

export default header;