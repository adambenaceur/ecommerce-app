import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';


function Header() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='left'>
          <div className='search'>
            <SearchIcon />
            <input type='text' placeholder='Search' />
          </div>
        </div>
        <div className='right'>Time Luxe</div>
        <div className='center'>
          <div>Sign In</div>
          <div>Register</div>
          <div>
            <Badge badgeContent={4} color="primary">
             <ShoppingCartOutlinedIcon />
            </Badge> 
          </div>
          
         
        </div>
      </div>
    </div>
  );
}

export default Header;