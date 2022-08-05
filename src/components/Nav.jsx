import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import Badge from '@mui/material/Badge';

const Nav = ({ numOrderBeers }) => {
    return (
        <div className="nav">
            <Link to="/">
                <h3>HomePage</h3>
            </Link>
            <Link to="/beerList">
                <h3>BeerList</h3>
            </Link>
            <Link to="/shopList" className="icon">
                {numOrderBeers > 0 ? (
                    <Badge badgeContent={numOrderBeers} className={'badge'}>
                        <LocalGroceryStoreOutlinedIcon />
                    </Badge>
                ) : (
                    <LocalGroceryStoreOutlinedIcon />
                )}
            </Link>
        </div>
    );
};

export default Nav;
