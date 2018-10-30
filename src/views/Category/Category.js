import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ categoryName, category }) => {
  console.log(category);
  return (
    <section>
      <h1>Category page: {categoryName}</h1>
    </section>
  );
}

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default Category;