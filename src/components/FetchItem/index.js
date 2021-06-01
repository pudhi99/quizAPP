import { Component } from "react";

import Option from "../Option";

import "./index.css";

class FetchItem extends Component {
  state = {
    timer: 0,
    yes: null,
    selectedOptionState: null,
    correctAnswerState: 0,
    wrongAnswer: 0,
    visible: true,
  };

  updateTimer = () => {
    this.clockId = setInterval(this.updateCounter, 1000);
  };

  updateCounter = () => {
    this.setState((prevState) => ({
      timer: prevState.timer + 1,
    }));
  };

  validateAnswers = () => {
    const { correct, wrong } = this.props;
    const { visible } = this.state;
    return visible ? null : (
      <>
        <p className="dd">{correct}</p>
        <p className="ddd">{wrong}></p>
      </>
    );
  };

  componentDidMount() {
    this.updateTimer();
  }

  renderA = (counter) => {
    if (counter < 10) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  };

  selectedOption = async (value) => {
    const { eachQuestion, updatingAnswers } = this.props;
    const { correctAnswer } = eachQuestion;

    await this.setState({ selectedOptionState: value });
    if (correctAnswer !== value) {
      updatingAnswers(0, 1);
      this.setState({ yes: false });
      this.setState((prevState) => ({
        wrongAnswer: prevState.wrongAnswer + 1,
      }));
    } else if (correctAnswer === value) {
      updatingAnswers(1, 0);
      this.setState({ yes: true });
      this.setState((prevState) => ({
        correctAnswerState: prevState.correctAnswerState + 1,
      }));
    }
  };

  render() {
    const { eachQuestion, updateQuestion } = this.props;
    const { timer, yes, selectedOptionState } = this.state;
    const { visible } = this.state;
    if (timer === 10) {
      updateQuestion();
    }

    return (
      <li className="li">
        {this.validateAnswers()}
        <h1 className="time">{timer}</h1>
        <div className="content">
          <h1 className="question">{eachQuestion.question}</h1>
          {visible ? (
            <ul className="options-ul">
              {eachQuestion.answers.map((eachOption, index) => (
                <Option
                  eachOption={eachOption}
                  selectedOption={this.selectedOption}
                  yes={yes}
                  selectedOptionState={selectedOptionState}
                />
              ))}
            </ul>
          ) : null}
        </div>
      </li>
    );
  }
}

export default FetchItem;
