import React, { useState, useEffect, Suspense } from 'react';
import getBeersData from './api/getBeersData';
import './App.css';
import BeerCart from './pages/beerCart';
import {
    BrowserRouter,
    Switch,
    Route,
    Router,
  } from "react-router-dom";
import BeerDetail from './pages/beerDetail';
import initializeBeersData from './services/initializeBeersData';
import HomePage from './pages/homePage';
import BeerList from './pages/beerList';
import Nav from './components/Nav';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import { setBeersData, setSearchedBeers } from './store/actions';
import { connect } from 'react-redux';
import Pagination from './components/Pagination';
import ShopList from './pages/ShopList';
import Alert from './components/Alert';

function App({ beersData, orderBeers, setBeersData, setSearchedBeers, alert }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const handlePageClick = (event) => {
      const newPageNum = (event.selected) % beersData.length + 1;
      setPageNum(newPageNum);
  };

  useEffect(() => {
    getBeersData(pageNum).then(beersData => {
      setBeersData(beersData);
    });
  }, [pageNum]) 

  const handleInput = event => {
    const inputValue = event.target.value.toLowerCase();

    setSearchTerm(inputValue);

    const searchedBeers = beersData && beersData.filter(result => { 
      if (searchTerm) {
        return result.name.toLowerCase().includes(searchTerm);
      }
      
      return beersData;
    });

    setSearchedBeers(searchedBeers);
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <Nav numOrderBeers={orderBeers.length} />
        <Header />
        <SearchBox handleInput={handleInput} searchTerm={searchTerm}/>
        <Switch> 
          <Route path="/beerList/:id" >
              <div className='home'>
                <BeerDetail />
              </div>
          </Route>
          <Route path="/beerList" >
              {beersData && <BeerList />}
              <Pagination
                onPageChange={handlePageClick}
              />
          </Route>
          <Route path="/shopList" >
              {orderBeers && <ShopList />}
          </Route>
          <Route path="/" >
              <div className='home'>
                {beersData && <BeerCart />}
                <Pagination
                onPageChange={handlePageClick}
                />
              </div>
          </Route>
        </Switch>
        {alert && <Alert alert={alert} />}
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
      beersData: state.beersData,
      orderBeers: state.orderBeers,
      searchedBeers: state.searchedBeers,
      alert: state.alert
  };
};

const mapDispatchToProps = dispatch => {
  return {
      setBeersData: (beersData) => dispatch(setBeersData(beersData)),
      setSearchedBeers: (searchedBeers) => dispatch(setSearchedBeers(searchedBeers))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
