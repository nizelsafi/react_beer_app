import axios from "axios";

const getBeersData = async () => {

    const url = `https://api.punkapi.com/v2/beers`;
    let beersData;

    try {
        const res = await axios.get(url);
        console.log(res.data);
        beersData = res.data;
    } catch (err) {
        console.error(err);
    }
    
    return beersData;
}

export default getBeersData;