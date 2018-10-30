import React from 'react';
import PropTypes from 'prop-types';
import QuestionContainer from '../Question/QuestionContainer';

const Category = ({ categoryName, category }) => {
  const quizData = category.clues;
  
  return (
    <section>
      <h1>Category page: {categoryName}</h1>
      <QuestionContainer items={quizData}/>
    </section>
  );
}

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default Category;