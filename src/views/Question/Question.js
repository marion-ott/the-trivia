import React, { Component } from 'react';

export default class Question extends Component {
    submittedAnswer = React.createRef();
    handleSubmit = () => {
        console.log(this.submittedAnswer.value.value);
    }
    render() {
        const answer = this.props.answer;
        return(
            <div>
                <p>{this.props.question}</p>
                <input ref={this.submittedAnswer} placeholder="Type your answer here"></input>
                <button type="submit" onClick={this.handleSubmit}>Valider</button>
            </div>
        )
    }
}