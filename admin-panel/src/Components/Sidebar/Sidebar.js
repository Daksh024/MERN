import React, { Component } from 'react';
import "./Sidebar.css"

class Sidebar extends Component {
    render() {
        return (
            <div className="sidenav">
                <a href=".">Company Name</a>
                <a href="#home">Home</a>
                <a href="#product">Products</a>
                <a href="#clients">Clients</a>
                <a href="#sales">Sales</a>
            </div>
        );
    }
}

export default Sidebar;