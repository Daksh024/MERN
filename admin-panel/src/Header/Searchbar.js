import React from 'react';
import './css/Searchbar.css';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

function Searchbar(props) {
    return (
        <div className='SearchBar'>
            <div className='SearchInput'>
                <input type='text' placeholder='Search Here!'/>
            </div>
            <div className='SearchIcon'>
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Searchbar;