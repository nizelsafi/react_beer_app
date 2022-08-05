import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectBeer } from '../store/actions';
import { Link } from "react-router-dom";

const BeerCart = ({ beersData, searchedBeers, handleSelectBeer }) => {
    const filtredData = searchedBeers.length > 0 ? searchedBeers : beersData;

    if (filtredData.length === 0) {
        return null;
    }

    return ( 
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {filtredData.map((beer) => (
                <Link to={`/beerList/${beer.id}`} key ={beer.id}>
                    <ListItem alignItems="flex-start" key ={beer.id}>
                        <ListItemButton onClick={() => handleSelectBeer(beer)}>
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
        searchedBeers: state.searchedBeers
    };
};

const mapDispatchToProps = dispatch => {
    return {
      handleSelectBeer: (beer) => dispatch(selectBeer(beer))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerCart);
