import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>
                Your Favourite Beers
                <br />
                All in one place
            </h1>
            <div className="header__overlay"></div>
        </div>
    );
};

export default Header;
