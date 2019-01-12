import React, { Component } from 'react';
import Home from './Home';
import api from '../../helpers/api';

class HomeContainer extends Component {
  state = {
    categories: [],
  }
  async componentDidMount() {
    const data = await api.getCategories();
    this.setState({
      categories: data,
    });
  }

  removeCategory = (index) => {
    this.state.categories.filter(category => category.id !== index)
  }

  render() {
    return (
      <Home categories={this.state.categories} removeCategory={this.removeCategory} />
    );
  }
}

export default HomeContainer;