import ImageList from '@mui/material/ImageList';
import React, { useState, useEffect } from 'react';
import BeerItem from '../components/beerItem';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import getBeersData from '../api/getBeersData';

const BeerCart = () => {
    const [beersData, setBeersData] = useState(null);

    useEffect(() => {            
        getBeersData().then(data => {
            console.log(data);
            setBeersData(data);
        });              
    }, [])

    return ( beersData && 
    <ImageList sx={{ width: 500 }}>
        <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">BeerCart</ListSubheader>
        </ImageListItem>
        {beersData.map((beer) => (
            <BeerItem key ={beer.id} beerInfos={beer} />
        ))}
    </ImageList>    
    );
};

export default BeerCart;