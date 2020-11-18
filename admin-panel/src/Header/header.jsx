import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Searchbar from './Searchbar';

function header(props){
    return(
        <div className='Header'>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <Searchbar />
        </div>
    )
}

export default header;