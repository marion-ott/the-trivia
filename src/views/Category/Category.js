import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ category, categoryId }) => (
  <section>
    <h1>Category page: { categoryId }</h1>
    { category.length > 0 && (
      category.map(cat => (
        <div key={cat.id}>
          <p >{cat.question}</p>
          <input></input>
        </div>
      ))
    )}
  </section>
);

Category.propTypes = {
  categoryId: PropTypes.number.isRequired,
};

export default Category;