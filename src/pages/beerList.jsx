import ImageList from '@mui/material/ImageList';
import React from 'react';
import BeerItem from '../components/beerItem';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import { connect } from 'react-redux';
import { setBeersData } from '../store/actions';
import './BeerList.css';

const BeerList = ({ beersData, searchedBeers }) => {
    const filtredData = searchedBeers.length > 0 ? searchedBeers : beersData;

    if (filtredData.length === 0) {
        return null;
    }

    return (
        <>
            <ImageList cols={3}>
                <ImageListItem key="Subheader" cols={3}>
                    <ListSubheader component="div">
                        <h3>Beer List</h3>
                    </ListSubheader>
                </ImageListItem>
                {filtredData.map((beer) => (
                    <BeerItem key={beer.id} beer={beer} />
                ))}
            </ImageList>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        beersData: state.beersData,
        searchedBeers: state.searchedBeers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setBeersData: (beersData) => dispatch(setBeersData(beersData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
