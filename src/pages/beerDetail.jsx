import React from 'react';
import './BeerDetail.scss';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';


const BeerDetail = ({beersData}) => {
    const {id} = useParams();
    const selectedBeer = beersData && beersData.find(beer => beer.id == id);

    if(!selectedBeer) {
        return null;
    }
    
    return (
        <div className="beer-page">
            <div className="beer-info">
                <img src={selectedBeer.image_url} className="beer-info__img" alt="" />

                <div className="beer-info__column">
                    <h2 className="beer-info__title">{selectedBeer.name}</h2>
                    <p><b>Brewed in:</b> {selectedBeer.first_brewed}</p>
                    <p><b>Yeast:</b> {selectedBeer.ingredients.yeast}</p>
                    <p className="beer-info__description"><em>{selectedBeer.description}</em></p>

                    <table className="beer-info__table" border="1" cellPadding="10">
                        <tbody>
                            <tr>
                                <td><b>PH</b></td>
                                <td><b>ABV</b></td>
                                <td><b>IBU</b></td>
                                <td><b>EBC</b></td>
                                <td><b>SRM</b></td>
                            </tr>
                            <tr>
                                <td>{selectedBeer.ph}</td>
                                <td>{selectedBeer.abv}</td>
                                <td>{selectedBeer.ibu}</td>
                                <td>{selectedBeer.ebc}</td>
                                <td>{selectedBeer.srm}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><b>Food Pairing:</b> {selectedBeer.food_pairing}</p>
                    <p><b>Tips:</b> {selectedBeer.brewers_tips}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        beersData: state.beersData
    };
};

export default connect(mapStateToProps)(BeerDetail);