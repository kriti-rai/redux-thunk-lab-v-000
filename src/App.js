import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { fetchCats } from './actions/catActions';
import { connect } from 'react-redux';
import CatList from './CatList';

class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList catPics={ this.props.catPics.pictures } />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}



export default connect(state => ({catPics: state.cats}), { fetchCats })(App);
