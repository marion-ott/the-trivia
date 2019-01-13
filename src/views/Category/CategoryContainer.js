import React, { Component, createRef } from 'react';
import api from '../../helpers/api';
import Category from './Category';

class CategoryContainer extends Component {
  constructor(props) {
    super(props)


    if (!localStorage.getItem('quizData')) {
      localStorage.setItem('quizData', JSON.stringify({errors: 0, score: 0, tries: 0}));
    }

    const score = JSON.parse(localStorage.getItem('quizData')).score;
    const errors = JSON.parse(localStorage.getItem('quizData')).errors;
    const tries = JSON.parse(localStorage.getItem('quizData')).tries;

    this.state = {
      category: null,
      currentQuestion: 0,
      questionsAsked: [],
      score: score,
      errors: errors
    }
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
    console.log(data)
  }

  handleSubmit = (e) => {
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
    this.updateNextId()
    questionsAsked.push(this.state.category.clues[this.state.currentQuestion].id)
    this.setState({
        questionsAsked
    })
    // check if answer is equal to the requested answer from the current question
  }

  updateNextId = () => {
    const nextId = this.state.currentQuestion + 1
    this.setState({
      currentQuestion: nextId,
    })
  }


  // Method to update error count
  updateErrors = () => {
    const errors = this.state.errors + 1
    this.setState({
      errors
    })
  }

  
  // Method to update current score
  updateScore = () => {
    const score = this.state.score + 2
    this.setState({
      score
    })
  }


  // Method to check if the current question has been asked before
  // If so, another question will be displayed
  checkQuestionsAsked = () => {
    const { category, currentQuestion, score } = this.state;
    if(this.state.questionsAsked.includes(this.state.category.clues[this.state.currentQuestion].id)) {
      this.updateNextId() 
    } else {
      return(<Category 
        category={category} 
        currentQuestionIndex={currentQuestion} 
        handleSubmit={this.handleSubmit}
        answerInput={this.answerInput}
        score={score}
      />)
    }
  }
  
  render() {
    //const { category, currentQuestion, score } = this.state;
    // at first render, category will be null so we need to wait
    // before using data.
    if (!this.state.category) return <div>is loading</div>

    return (
      <div>
        { this.checkQuestionsAsked() }
      </div>
    )
  }
}

export default CategoryContainer;