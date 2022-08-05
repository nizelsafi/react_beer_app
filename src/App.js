import React, { useState, useEffect } from 'react';
import getBeersData from './api/getBeersData';
import './App.css';
import BeerCart from './pages/BeerCart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BeerDetail from './pages/BeerDetail';
import BeerList from './pages/BeerList';
import Nav from './components/Nav';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import { setBeersData, setSearchedBeers } from './store/actions';
import { connect } from 'react-redux';
import Pagination from './components/Pagination';
import ShopList from './pages/ShopList';
import AlertBar from './components/AlertBar';

function App({ beersData, orderBeers, setBeersData, setSearchedBeers, alert }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNum, setPageNum] = useState(1);
    const handlePageClick = (event) => {
        const newPageNum = (event.selected % beersData.length) + 1;
        setPageNum(newPageNum);
    };

    useEffect(() => {
        getBeersData(pageNum).then((beersData) => {
            setBeersData(beersData);
        });
    }, [pageNum]);

    const handleInput = (event) => {
        const inputValue = event.target.value.toLowerCase();

        setSearchTerm(inputValue);

        const searchedBeers =
            beersData &&
            beersData.filter((result) => {
                if (searchTerm && searchTerm !== '') {
                    return result.name.toLowerCase().includes(searchTerm);
                }

                return beersData;
            });

        setSearchedBeers(searchedBeers);
    };

    return (
        <BrowserRouter>
            <div className="App">
                <Nav numOrderBeers={orderBeers.length} />
                <Switch>
                    <Route path="/beerList/:id">
                        <BeerDetail />
                    </Route>
                    <Route path="/beerList">
                        <Header />
                        <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
                        {beersData.length > 0 && <BeerList />}
                        <Pagination onPageChange={handlePageClick} />
                    </Route>
                    <Route path="/shopList">
                        <Header />
                        {orderBeers.length > 0 && (
                            <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
                        )}
                        <ShopList />
                    </Route>
                    <Route path="/">
                        <Header />
                        <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
                        {beersData.length > 0 && <BeerCart />}
                        <Pagination onPageChange={handlePageClick} />
                    </Route>
                </Switch>
                {alert && <AlertBar />}
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        beersData: state.beersData,
        orderBeers: state.orderBeers,
        alert: state.alert
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setBeersData: (beersData) => dispatch(setBeersData(beersData)),
        setSearchedBeers: (searchedBeers) => dispatch(setSearchedBeers(searchedBeers))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
