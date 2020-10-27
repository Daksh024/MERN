/* eslint-disable default-case */
import React, { Component } from 'react';
import './Sidebar.css'

const navlnk = [
    {
        url:'.',
        name:'Name'
    },
    {
        url:'/product',
        name:'Product'
    },
    {
        url:'/about',
        name:'About Us'
    },
]

class Sidebar extends Component {

    constructor(props){
        super(props);

        this.state = {
            style:"menu",
            sidebar:"open"
        };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        switch(this.state.sidebar){
            case 'open':{
                this.setState({
                    style:"menu active",
                    sidebar:"close"
                });
                break;
            }
            case 'close':{
                this.setState({
                    style:"menu",
                    sidebar:"open"
                });
                break;
            }
        }
    }

    render(){
        window.onmouseup = (event) => {
            if(this.state.sidebar === 'close'){
                this.setState({
                    style:"menu",
                    sidebar:"open"
                });
            }
        }
        return(
            <div className="Sidebar">
                <button onClick={this.handleClick}>|||</button>
                <div className={this.state.style}>
                    <ul>
                        {navlnk.map(({url,name}) =>(
                            <li>
                                <a href={url}>{name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;