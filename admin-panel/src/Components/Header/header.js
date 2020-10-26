import React, { Component } from 'react';
import Sidebar from "../Sidebar/Sidebar";
import "./Header.css"

class header extends Component {
    render() {
        return (
            <div className="Navgation">
                <div className="header">
                    <a href="." className="logo">CompanyLogo</a>
                </div>
                <Sidebar />
            </div>
        );
    }
}

export default header;