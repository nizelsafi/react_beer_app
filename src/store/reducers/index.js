import { combineReducers } from 'redux';

const setBeersDataReducer = (beersData = [], action) => {
    if (action.type === 'SET_BEERS_DATA') {
        return action.payload;
    }
    return beersData;
};

const setSearchedBeersReducer = (searchedBeers = [], action) => {
    if (action.type === 'SET_SEARCHED_BEERS') {
        return action.payload;
    }
    return searchedBeers;
};

const orderBeerReducer = (orderBeers = [], action) => {
    if (action.type === 'ORDER_BEER') {
        return action.payload;
    }
    return orderBeers;
};

const setAlertReducer = (alert = null, action) => {
    if (action.type === 'SET_ALERT') {
        return action.payload;
    }
    return alert;
};

export default combineReducers({
    beersData: setBeersDataReducer,
    searchedBeers: setSearchedBeersReducer,
    orderBeers: orderBeerReducer,
    alert: setAlertReducer
});
