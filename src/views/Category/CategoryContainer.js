import React, { Component } from 'react';
import Category from './Category';

class CategoryContainer extends Component {
  state = {
    clues: [],
  }
  componentDidMount() {
    fetch(`http://jservice.io/api/category?id=${this.props.match.params.name}`).then(response => {
      response.json().then(category => {
        console.log(category);
        this.setState({
          clues: category.clues,
        })
      })
    })
  }
  render() {
    console.log(this.props);
    return (
      <Category
        clues={this.state.clues}
        categoryName={this.props.match.params.name}
      />
    );
  }
}

export default CategoryContainer;