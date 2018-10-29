import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ clues, categoryName }) => (
  <section>
    <h1>Category page: { categoryName }</h1>
    { clues.length > 0 && (
      clues.map(clue => (
        <div key={clue.id}>
          <p >{clue.question}</p>
          <input></input>
        </div>
      ))
    )}
  </section>
);

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default Category;