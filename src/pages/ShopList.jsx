import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


const ShopList = ({ orderBeers }) => {
    //const data = searchedBeers ? searchedBeers : beersData;

    if (orderBeers.length === 0) {
        return <div>No ordered beers...</div>;
    }

    return ( 
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {orderBeers.map((beer) => (
                <Link to={`/beerList/${beer.id}`} key ={beer.id}>
                    <ListItem alignItems="flex-start" key ={beer.id}>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={beer.image_url} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={beer.name}
                            />
                        </ListItemButton>
                    </ListItem>
                </Link>
            )) }
            
        </List> 
          
    );
};

const mapStateToProps = state => {
    return {
        beersData: state.beersData,
        orderBeers: state.orderBeers
    };
};

export default connect(mapStateToProps)(ShopList);
