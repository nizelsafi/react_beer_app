import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './BeerDetail.scss';
import { connect } from 'react-redux';
import BeerDetail from './beerDetail';
import BeerCart from './beerCart';
import getBeersData from '../api/getBeersData';
import { setBeersData, setSearchedBeers } from '../store/actions';
import BeerList from './beerList';
import Header from '../components/Header';
import Nav from '../components/Nav';
import SearchBox from '../components/SearchBox';


const HomePage = ({ beersData, selectedBeer, setBeersData, setSearchedBeers }) => {
    const [searchTerm, setSearchTerm] = useState('')

    console.log("state");
    useEffect(() => {
        getBeersData().then(beersData => {
            setBeersData(beersData);
        });
        const searchedBeers = beersData && beersData.filter(result => { 
            if (searchTerm) {
              return result.name.toLowerCase().includes(searchTerm);
            }
            return beersData;
        });
        setSearchedBeers(searchedBeers)
    }, []) 

    const handleInput = event => {
        const inputValue = event.target.value.toLowerCase();
        setSearchTerm(inputValue)
    }
    

    return (
        <>
        <Nav />
        <Header />
        <SearchBox handleInput={handleInput} searchTerm={searchTerm}/>
        {beersData && <BeerCart beersData={beersData} />}
        {selectedBeer && <BeerDetail />}
        </>
    );
}

const mapStateToProps = state => {
    console.log(state);
    return {
        beersData: state.beersData,
        selectedBeer: state.selectedBeer,
        searchedBeers: state.searchedBeers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setBeersData: (beersData) => dispatch(setBeersData(beersData)),
        setSearchedBeers: (searchedBeers) => dispatch(setSearchedBeers(searchedBeers))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);