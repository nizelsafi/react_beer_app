import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText
} from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ShopList = ({ orderBeers, searchedBeers }) => {
    const matchedBeers =
        searchedBeers &&
        orderBeers &&
        searchedBeers.filter((obj) => {
            return orderBeers.indexOf(obj) !== -1;
        });
    const beersData = matchedBeers.length > 0 ? matchedBeers : orderBeers;

    if (beersData.length === 0) {
        return <div>No ordered beers...</div>;
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {beersData.map((beer) => (
                <Link to={`/beerList/${beer.id}`} key={beer.id} className={'link'}>
                    <ListItem alignItems="flex-start" key={beer.id}>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={beer.image_url} />
                            </ListItemAvatar>
                            <ListItemText primary={beer.name} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            ))}
        </List>
    );
};

const mapStateToProps = (state) => {
    return {
        searchedBeers: state.searchedBeers,
        orderBeers: state.orderBeers
    };
};

export default connect(mapStateToProps)(ShopList);
