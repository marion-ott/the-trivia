import React, { Component } from 'react';
import api from '../../helpers/api';
import Category from './Category';

class CategoryContainer extends Component {
  state = {
    category: null,
  }
  async componentDidMount() {
    const data = api.getCategoryById(this.props.match.params.id);
    this.setState({
      category: data,
    })
  }
  render() {
    console.log(this.props);
    return (
      <Category
        category={this.state.category}
        categoryId={this.props.match.params.id}
      />
    );
  }
}

export default CategoryContainer;