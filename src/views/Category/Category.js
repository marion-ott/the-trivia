import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ categoryName, category }) => {
  const alreadyAsked = [];
  
  return (
    <section>
      <h1>Category page: {categoryName}</h1>
      {category.clues.map(clue => (
        <div>
          <p>{clue.question}</p>
          <input placeholder="Type your answer"></input>
        </div>
      ))}
    </section>
  );
}

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default Category;