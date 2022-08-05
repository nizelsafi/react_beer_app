import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectBeer } from '../store/actions';
import Link from '@mui/material/Link';

const ShopList = ({ orderBeers }) => {
    //const data = searchedBeers ? searchedBeers : beersData;

    if (orderBeers.length === 0) {
        return <div>No ordered beers...</div>;
    }

    return ( 
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {orderBeers.map((beer) => (
                <Link href={`/beerList/${beer.id}`} key ={beer.id}>
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

const mapDispatchToProps = dispatch => {
    return {
      handleSelectBeer: (beer) => dispatch(selectBeer(beer))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);