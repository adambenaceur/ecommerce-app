import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

function Header() {
  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="flex items-center justify-between px-8 py-2">
          <div className="flex items-center">
            <div className="border border-black flex items-center rounded-md px-2">
              <SearchIcon className="mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="border-none outline-none"
              />
            </div>
          </div>
          <div className="text-2xl font-bold">Time Luxe</div>
          <div className="flex items-center space-x-4">
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
    </div>
  );
}

export default Header;