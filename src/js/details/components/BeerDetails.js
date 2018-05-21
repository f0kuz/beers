import React, { Component } from 'react';


import RecommendedBeers from "./RecommendedBeers";

class BeerDetails extends Component {
    constructor() {
        super();

        this.state = {
            recommendedBeers: []
        }
    }

    // Send new request and get array of max 3 recommended beers which have similar value of abv, ibu and ebc
    getRecommendedBeers = (abv = 0, ibu = 0, ebc = 0) => {
        fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
            .then(res => res.json())
            .then(parsedJSON => {
                const recommended = parsedJSON.filter(beer => {
                    if (
                        (beer.abv > (Math.abs((abv * 0.3) - abv).toFixed()) && beer.abv < (((abv * 0.3) + abv).toFixed()))
                        && (beer.ibu > (Math.abs((ibu * 0.3) - ibu).toFixed()) && beer.ibu < (((ibu * 0.3) + ibu).toFixed()))
                        && (beer.ebc > (Math.abs((ebc * 0.3) - ebc).toFixed()) && beer.ebc < (((ebc * 0.3) + ebc).toFixed()))
                    ) return true

                })
                console.log(recommended);
                
                return recommended.length > 3 ? recommended.length = 3 : recommended;
            })
            .then(recommendedBeers => this.setState({
                recommendedBeers
            }))
            .catch(err => console.log("parse failed ", err))
        }

    // ** Lifecycles
    componentDidMount() {
        this.getRecommendedBeers(this.props.abv, this.props.ibu, this.props.ebc);
    }

    // ** Render
    render() {
        const { thumbnailUrl, name, tagline, description, tips, ibu, abv, ebc } = this.props;
        
        return (
            <React.Fragment>
                <div className="col-md-4 text-center">
                    <img className="beer-thumbnail" src={thumbnailUrl} alt={name} />
                </div>
                <div className="col-md-8">
                    <h3 className="beer-title">{name}</h3>
                    <p className="lead beer-lead">{tagline}</p>
                    <span className="divider"></span>
                    <p className="text-uppercase beer-param">
                        {ibu ? <span> ibu: </span> : ""}{ibu ? ibu : ""}
                        {abv ? <span> abv: </span> : ""}{abv ? abv : ""}
                        {ebc ? <span> ebc: </span> : ""}{ebc ? ebc : ""}
                    </p>
                    <p>{description}</p>
                    <p>{tips}</p>
                </div>
                {this.state.recommendedBeers.length > 0 ? (
                    <div className="col-md-12 recommended-beers-wrapper">
                        <div className="container-fluid text-center">
                            <div className="row">
                                <p className="text-left">You might also like</p>
                                {this.state.recommendedBeers.map(beer => {
                                    return (
                                        <RecommendedBeers key={beer.id} recommendedName={beer.name} recommendedThumbnail={beer.image_url} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                ) : ""}
            </React.Fragment>
        );
    }
}

export default BeerDetails;
