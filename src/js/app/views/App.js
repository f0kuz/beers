import React, { Component } from 'react';
import { connect } from 'react-redux';
import { beersFetched } from './../../list/actions/index';
import AppHeader from './../../header/components/AppHeader';
import BeersList from './../../list/views/BeersList';


class App extends Component {

  // ** Lifecycles
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=20")
      .then(res => res.json())
      .then(parsedJSON => this.props.beersFetched(parsedJSON))
      .catch(err => console.log("parse failed", err))
  }

  // ** Render
  render() {
    return (
      <React.Fragment>
        <header>
          <AppHeader />
        </header>

        <main>
          <BeersList beers={this.props.beers} />
        </main>
      </React.Fragment>
    );
  }
}

// ** Connect
const mapStateToProps = (state) => {
  return {
    beers: state.beers
  }
};
const mapDispatchToProps = { beersFetched };

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
