import React, { useEffect, useState } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './beerItem.css';
import { connect } from 'react-redux';
import { orderBeer, selectBeer, setAlert } from '../store/actions';
import Link from '@mui/material/Link';
import { Button, Card, CardActions, CardContent } from '@mui/material';


const BeerItem = ({ beer, orderBeers, orderBeer, setAlert }) => {
    const { id, image_url, name, volume } = beer;
    const [isOrdered, setIsOrdered] = useState(false);
    const handelOrder = () => {
      let beers = [...orderBeers];
      beers.push(beer);
      orderBeer(beers);
      setAlert({status: "success",message: "This beer is added to your shop!"});
    };
    const removeOrder = () => {
      let beers = [...orderBeers];
      const idx = beers.findIndex(value => value.id === beer.id );
      beers.splice(idx,1);
      orderBeer(beers);
      setAlert({status: "warning",message: "This beer is removed from your shop!"});
    };
    const ordered = () => {
      let beers = [...orderBeers];
      const beer = beers && beers.find(beer => beer.id == id);
      return beer ? true : false;
    }

    useEffect(() => {
      setIsOrdered(ordered);
    }, [orderBeers]);

    return (
      <Card variant="outlined" className='cardItem'>
         <CardContent>
        <Link href={`/beerList/${id}`} key={id}>
          <ImageListItem key={id} className='listItem'>
            <img
              src={`${image_url}?w=248&fit=crop&auto=format`}
              srcSet={`${image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={name}
              loading="lazy"
              className='imgItem'
            />
            <ImageListItemBar
              className='imgItemBar--below'
              title={name}
              subtitle={<span>Volume: {volume.value} {volume.unit}</span>}
              position="below"
            />
            {isOrdered && <ImageListItemBar
              className='imgItemBar--top'
              title={"Ordered!"}
              position="top"
            />}
          </ImageListItem>
              
        </Link>
        </CardContent>
        <CardActions>
        {!isOrdered && <Button className='primary_button' size="small" onClick={handelOrder}>order it</Button>}
        {isOrdered && <Button className='secondary_button' size="small" color="secondary" onClick={removeOrder}>remove it</Button>}
      </CardActions>
      </Card>
    );
};

const mapStateToProps = state => {
  return {
      orderBeers: state.orderBeers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    orderBeer: (beers) => dispatch(orderBeer(beers)),
    setAlert: (alert) => dispatch(setAlert(alert))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerItem);
