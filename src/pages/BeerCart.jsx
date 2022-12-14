import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BeerCart = ({ beersData, searchedBeers }) => {
    const filtredData = searchedBeers.length > 0 ? searchedBeers : beersData;

    if (filtredData.length === 0) {
        return null;
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {filtredData.map((beer) => (
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
        beersData: state.beersData,
        searchedBeers: state.searchedBeers
    };
};

export default connect(mapStateToProps)(BeerCart);
