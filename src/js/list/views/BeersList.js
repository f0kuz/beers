import React, { Component } from 'react';

import BeerItem from './../components/BeerItem';


class BeersList extends Component {
    beerToBeerItem = beer => {
        const thumbnailUrl = beer.image_url,
            name = beer.name,
            tagline = beer.tagline,
            key = beer.id,
            description = beer.description,
            tips = beer.brewers_tips,
            ibu = beer.ibu,
            abv = beer.abv,
            ebc = beer.ebc;

        return <BeerItem
                    key={key}
                    thumbnailUrl={thumbnailUrl}
                    name={name}
                    tagline={tagline}
                    description={description}
                    tips={tips}
                    ibu={ibu}
                    abv={abv}
                    ebc={ebc}
                    beers={this.props.beers}
                />
    }

    render() {
        return (
            <div className="container-fluid text-center">
                <div className="row">
                    <ul className="list-inline">
                        {this.props.beers.map(this.beerToBeerItem)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default BeersList;