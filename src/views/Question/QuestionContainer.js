import React, { Component } from 'react';
import Question from './Question';

export default class QuestionContainer extends Component {
    render() {
        const questions = [];
        const answers = [];
        this.props.items.forEach(function(item) {
            questions.push(item.question)
            answers.push(item.answer)
        })
        
        return(
            <Question 
                question={questions[0]}
                answer={answers[0]}    
            />
        )
    }
}