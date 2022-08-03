import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const BeerItem = (beerInfos) => {
    const { image_url, name } = beerInfos.beerInfos;
    console.log(beerInfos);
    return (
        <ImageListItem key={image_url}>
          <img
            src={`${image_url}?w=248&fit=crop&auto=format`}
            srcSet={`${image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={name}
            loading="lazy"
          />
          <ImageListItemBar
            title={name}
          />
        </ImageListItem>
    );
};

export default BeerItem;