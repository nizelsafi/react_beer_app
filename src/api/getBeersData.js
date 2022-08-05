import axios from "axios";

const getBeersData = async (page = 1) => {
    const url = `https://api.punkapi.com/v2/beers?page=${page}`;
    let beersData;

    try {
        const res = await axios.get(url);
        
        beersData = res.data;
    } catch (err) {
        console.error(err);
    }
    
    return beersData;
}

export default getBeersData;