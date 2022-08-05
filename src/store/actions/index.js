export const setBeersData = (beersData) => {
    return {
        type: 'SET_BEERS_DATA',
        payload: beersData
    };
};

export const setSearchedBeers = (searchedBeers) => {
    return {
        type: 'SET_SEARCHED_BEERS',
        payload: searchedBeers
    };
};

export const orderBeer = (beers) => {
    return {
        type: 'ORDER_BEER',
        payload: beers
    };
};

export const setAlert = (alert) => {
    return {
        type: 'SET_ALERT',
        payload: alert
    };
};
