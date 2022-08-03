import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './beerItem.css';

const BeerItem = (beerInfos) => {
    const { id, image_url, name } = beerInfos.beerInfos;
    console.log(beerInfos);
    return (
        <ImageListItem key={id} className='listItem' >
          <img
            src={`${image_url}?w=248&fit=crop&auto=format`}
            srcSet={`${image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={name}
            loading="lazy"
            className='imgItem'
          />
          <ImageListItemBar
            title={name}
          />
        </ImageListItem>
    );
};

export default BeerItem;