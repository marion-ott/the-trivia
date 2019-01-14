import React, { Component, createRef } from 'react';
import api from '../../helpers/api';
import Category from './Category';
import Score from '../Score/Score';
import { Link } from 'react-router-dom';


class CategoryContainer extends Component {
  constructor(props) {
    super(props)


    if (!localStorage.getItem('quizData')) {
      localStorage.setItem('quizData', JSON.stringify({errors: 0, score: 0, tries: 1, questionsAsked: []}));
    }

    const score = JSON.parse(localStorage.getItem('quizData')).score;
    const errors = JSON.parse(localStorage.getItem('quizData')).errors;
    const tries = JSON.parse(localStorage.getItem('quizData')).tries;
    const questionsAsked = JSON.parse(localStorage.getItem('quizData')).questionsAsked;

    this.state = {
      category: null,
      currentQuestion: 0,
      questionsAsked: questionsAsked,
      score: score,
      errors: errors,
      tries: tries
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateErrors = this.updateErrors.bind(this)
    this.updateNextId = this.updateNextId.bind(this)
    this.updateScore = this.updateScore.bind(this)
    this.updateLocalStorage = this.updateLocalStorage.bind(this)
  }


  // createRef in order to bring back input value to its parent
  answerInput = createRef();

  // async needed when using promise
  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    // stored response in the state;
    this.setState({
      category: data,
    });
  }

  handleSubmit(e) {
    // here I prevent the default bh of submitting form
    e.preventDefault();
    // remove punctuation from the answer
    const questionAnswered = this.state.category.clues[this.state.currentQuestion].answer.match(/[^_\W]+/g).join(' ')    
    // write logic to handle good/bad answer
    // increment currentQuestion
    // save in the storage the id of the question
    // if no more question, remove category from categories playable
    // increment score somewhere and redirect to /
    let answer = this.answerInput.current.value
    const isCorrect = (answer.toLowerCase()) === (questionAnswered.toLowerCase()) ? true : false
    isCorrect ? this.updateScore() : this.updateErrors()
    const questionsAsked = this.state.questionsAsked
    if(this.state.currentQuestion <= 4) {
      this.updateNextId()
    }
    questionsAsked.push(this.state.category.clues[this.state.currentQuestion].id)
    this.setState({
      questionsAsked
    })
    this.updateLocalStorage(questionsAsked)
    
    // check if answer is equal to the requested answer from the current question
  }

  updateNextId() {
    const nextId = this.state.currentQuestion + 1
    this.setState({
      currentQuestion: nextId,
    })
  }

  updateLocalStorage(array) {
    localStorage.setItem('quizData', JSON.stringify({errors: this.state.errors, score: this.state.score, tries: this.state.tries, questionsAsked: array}));
  }
  // Method to update error count
  updateErrors() {
    let errors = this.state.errors + 1
    if(errors === 3) {
      let tries = this.state.tries + 1
      this.setState({
        score: 0,
        errors: 0,
        tries: tries,
      })
      alert(`Vous avez fait ${errors} erreurs :( - Score remis à 0`)
    } else {
      this.setState({
        errors: errors
      })
    }
  }

  
  // Method to update current score
  updateScore() {
    const score = this.state.score + 2
    this.setState({
      score
    })
    if(score === 10) {
      alert("T'es un winner !")
    }
  }


  // Method to check if the current question has been asked before
  // If so, another question will be displayed
  checkQuestionsAsked = () => {
    const { category, currentQuestion, score, errors, tries } = this.state;
    if((currentQuestion <= 4) && (this.state.questionsAsked.includes(this.state.category.clues[this.state.currentQuestion].id))) {
      this.updateNextId() 
    } else if(currentQuestion <= 4) {
      return(<Category 
        category={category} 
        currentQuestionIndex={currentQuestion} 
        handleSubmit={this.handleSubmit}
        answerInput={this.answerInput}
        score={score}
        errors={errors}
        tries={tries}
      />)
    } else {
      return(
          <div className="noMoreQuestions">
            <Link to={'/'} className="back">Retour aux catégories</Link>
              <p>Vous avez répondu à toutes les questions de la catégorie <span>{category.title}</span></p>
            <Score score={score}/>
          </div>
        )
    }
  }
  
  render() {
    //const { category, currentQuestion, score } = this.state;
    // at first render, category will be null so we need to wait
    // before using data.
    if (!this.state.category) return <div>is loading</div>
    return (
      <div className="categoryContainer">
        <p>{this.props.name}</p>
        <svg className="svgBackground0" width="1440" height="861" viewBox="0 0 1440 861" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 593.372C52.1889 543.472 186.39 375.5 386 375.5C635.513 375.5 649.131 443.674 748.538 405.059C847.945 366.445 939.458 160.243 1184 64.5C1355.03 -2.46134 1442.62 15.8795 1453.87 6.23648L1454 0C1455.52 2.88284 1455.48 4.84924 1453.87 6.23648L1435.44 860.5H0V593.372Z" fill="url(#paint0_linear)"/>
          <defs>
          <linearGradient id="paint0_linear" x1="1382.5" y1="142.5" x2="8.26731e-05" y2="860.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8248FF"/>
          <stop offset="1" stopColor="#4CB3FF"/>
          </linearGradient>
          </defs>
        </svg>
        <svg className="svgBackground1" width="1440" height="841" viewBox="0 0 1440 841" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 574.872C52.1889 524.972 206.469 425.174 406.079 425.174C655.592 425.174 649.131 425.174 748.538 386.559C847.945 347.945 982.643 262.252 1227.18 166.509C1376.31 108.125 1429.06 55.61 1440.36 23.7876L1440.5 0.5C1443.38 5.94966 1443.88 13.8621 1440.36 23.7876L1435.44 842H0V574.872Z" fill="url(#paint0_linear)"/>
          <defs>
          <linearGradient id="paint0_linear" x1="1382.5" y1="124" x2="-2.84378e-05" y2="842" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8248FF"/>
          <stop offset="1" stopColor="#4CB3FF"/>
          </linearGradient>
          </defs>
        </svg>
        { this.checkQuestionsAsked() }
      </div>
    )
  }
}

export default CategoryContainer;