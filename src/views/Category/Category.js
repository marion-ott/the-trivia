import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Score from '../Score/Score'
import css from './category.scss'

const Category = ({ category, currentQuestionIndex, handleSubmit, answerInput, score }) => {
  const currentQuestion = category.clues[currentQuestionIndex];
  return (
    <section className={css.component}>
      <div className="container">
        <Link to={'/'} className="back">Back to categories</Link>
        <h2>Catégorie : <span>{category.title}</span></h2>
          <Score score={score}/>
          <form onSubmit={handleSubmit}>
            <div className="question">
              <div className="position">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <h3 className="question__title">
                {currentQuestion.question}
              </h3>
            </div>
            <div className="answer">
              <div className="question__answerInput">
                {/* We give the ref below in order check the value */}
                <input ref={answerInput} defaultValue="" placeholder="Tapez votre réponse" />
              </div>
              <button className="question__submit" type="submit" onClick={handleSubmit}>
                Next
              </button>
            </div>
          </form>
      </div>
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