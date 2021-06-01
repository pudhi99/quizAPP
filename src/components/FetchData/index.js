import React from "react";

import { Component } from "react";

import FetchItem from "../FetchItem";
import Home from "../home";

import "./index.css";

class FetchData extends Component {
  state = {
    myData: [],
    isHideHome: false,
    isHideQuestion: true,
    counter: 0,
    correct: 0,
    wrong: 0,
    clockId: 0,
    isHideResults: true,
  };

  componentWillUnmount() {
    clearInterval(this.clockId);
  }

  componentDidMount() {
    this.fetchData();
  }
  stopTimer = () => {
    clearInterval(this.clockId);
  };

  updateLevel = (level) => {
    this.fetchData(level);
    this.setState((prevState) => ({
      isHideHome: !prevState.isHideHome,
      isHideResults: !prevState.isHideResults,
    }));
  };

  updateQuestion = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  updatingAnswers = (correct, wrong) => {
    this.setState((prevState) => ({
      correct: prevState.correct + correct,
    }));
    this.setState((prevState) => ({
      wrong: prevState.wrong + wrong,
    }));
    setTimeout(
      function () {
        this.setState((prevState) => ({
          counter: prevState.counter + 1,
        }));
      }.bind(this),
      1000
    );
  };

  fetchData = async (level) => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=18&difficulty=${level}`
    );
    const data = await response.json();
    const formattedData = await data.results.map((eachItem, index) => ({
      id: index + 1,
      category: eachItem.category,
      correctAnswer: eachItem.correct_answer,
      difficulty: eachItem.difficulty,
      incorrectAnswers: eachItem.incorrect_answers,
      question: eachItem.question,
      type: eachItem.type,
      answers: [...eachItem.incorrect_answers, eachItem.correct_answer],
    }));
    this.setState({ myData: formattedData });
  };

  refreshPage = () => {
    window.location.reload(false);
  };

  renderAnswers = () => {
    const { isHideResults, correct, wrong } = this.state;
    console.log(isHideResults);
    return isHideResults ? null : (
      <div className="answer-bg">
        <p className="answer1">
          {`correct: ${correct}`}{" "}
          <span className="ans">{`wrong : ${wrong}`}</span>
        </p>
        <p className="try">Try Another Level</p>
        <div className="but">
          <button className="button" onClick={this.refreshPage}>
            Home Page
          </button>
        </div>
      </div>
    );
  };

  filterData = (counter) => {
    const { myData } = this.state;
    if (counter !== 10) {
      const filteredData = myData.filter(
        (eachItem) => eachItem.id === counter + 1
      );
      return filteredData;
    } else if (counter === 10) {
      const filteredData = myData.filter((eachItem) => eachItem.id === 10);
      return filteredData;
    } else {
      this.stopTimer();
    }
  };

  render() {
    const { isHideHome, isHideQuestion, counter, correct, wrong } = this.state;
    console.log(correct, wrong);
    const filteredData = this.filterData(counter);
    return (
      <div className="bg">
        {isHideHome ? null : (
          <div className="sfd">
            <Home
              updateLevel={this.updateLevel}
              updateQuestion={this.updateQuestion}
            />
          </div>
        )}
        {isHideQuestion ? (
          <ul className="ul">
            {this.renderAnswers()}
            {filteredData.map((eachQuestion) => (
              <FetchItem
                key={eachQuestion.id}
                eachQuestion={eachQuestion}
                updatingAnswers={this.updatingAnswers}
                correct={correct}
                wrong={wrong}
                counter={counter}
                updateQuestion={this.updateQuestion}
              />
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default FetchData;
