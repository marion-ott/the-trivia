import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Score from '../Score/Score'

const Category = ({ category, currentQuestionIndex, handleSubmit, answerInput, score }) => {
  const currentQuestion = category.clues[currentQuestionIndex];
  return (
    <section>
    <Link to={'/'} >Back to categories</Link>
      <form onSubmit={handleSubmit}>
        <h1>You chose: {category.title}</h1>
        <div className="question">
          <h3 className="question__title">
            {currentQuestion.question}
          </h3>
          <p>{currentQuestion.answer}</p>
          <div className="question__answerInput">
            {/* We give the ref below in order check the value */}
            <input ref={answerInput} defaultValue="" />
          </div>
          <button className="question__submit" type="submit" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </form>
      <Score score={(score < 10) ? score : "You win !"}/>
    </section>
  );
}

Category.propTypes = {
  category: PropTypes.shape({}).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  answerInput: PropTypes.shape({
    value: PropTypes.instanceOf(HTMLInputElement)
  }),
};

export default Category;