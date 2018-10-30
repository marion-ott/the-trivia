import React, { Component } from 'react';
import api from '../../helpers/api';
import Category from './Category';

class CategoryContainer extends Component {
  state = {
    category: [],
  }
  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    this.setState({
      category: data,
    });
    console.log(data.clues[0].question);
  }
  
  render() {
    return (
      <Category
        categoryName={this.props.match.params.id}
        category={this.state.category}
      />
    );
  }
}

export default CategoryContainer;