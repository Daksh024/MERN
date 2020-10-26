import React, { Component } from 'react';
import './Sidebar.css'
// import "./control"

class Sidebar extends Component {

    constructor(props){
        super(props)

        this.toggle = this.toggle.bind(this);
    }

    toggle(){
    }

    render() {
        window.onload = () =>{
            document.getElementsByClassName('toggle').onclick = () => {
                document.getElementsByClassName('aside').toggleClass('close');
            }
        }

        window.onmouseup = (e) =>{
            var container = document.getElementsByClassName('aside');
            if(!container.is(e.target) && container.has(e.target).length === 0)
            {
                document.getElementsByClassName('aside').removeClass("close")
            }
        }
        return (
            <div className="container">
                <div className="aside">
                  <button className="toggle">|||</button>
                  <h1>Menu</h1>
                  <div className="nav">
                    <a href=".">Home</a>
                    <a href="localhost:3000/#">About Us</a>
                    <a href=".">Services</a>
                    <a href=".">Portfolio</a>
                    <a href=".">Contact Us</a>
                  </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;