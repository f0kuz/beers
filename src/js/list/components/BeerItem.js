import React, {Component} from 'react';
import { Modal, Button } from 'react-bootstrap';

import BeerDetails from './../../details/components/BeerDetails';


class BeerItem extends Component {
    constructor() {
        super();

        this.state = {
            show: false
        }
    }

    handleClose = (e) => {
        e.stopPropagation();
        this.setState({show: false})
    }

    handleShow = (e) => {
        e.stopPropagation();
        this.setState({show: true})
    }

    render() {
        const { thumbnailUrl, name, tagline, description, tips, ibu, abv, ebc, beers } = this.props;

        return (
            <li onClick={this.handleShow} className="col-md-3 col-sm-4 col-xs-12 item-list-elem">
                <div className="item-wrapper">
                    <img className="beer-thumbnail" src={thumbnailUrl} alt={name} />
                    <h2 className="beer-title" title={name}>{name}</h2>
                    <p className="lead beer-lead" title={tagline}>{tagline}</p>   
                </div>

                <Modal className="container beer-details-wrapper" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body className="row">
                        <BeerDetails
                            name={name}
                            tagline={tagline}
                            thumbnailUrl={thumbnailUrl}
                            description={description}
                            tips={tips}
                            ibu={ibu}
                            abv={abv}
                            ebc={ebc}
                            beers={beers}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </li>
        );
    }
}

export default BeerItem;