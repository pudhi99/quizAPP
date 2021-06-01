import { Component } from "react";

import "./index.css";

class Home extends Component {
  changeStateLanguage = (event) => {
    const { value } = event.target;
    const { updateLevel } = this.props;

    updateLevel(value);
  };

  render() {
    return (
      <div className="background-container">
        <div className="content">
          <h1 className="main-heading">Computer science Quiz application</h1>
          <div className="difficulty-content">
            <h1 className="difficulty-heading">Select Difficulty Level</h1>
            <div className="buttons-container">
              <button
                className="button"
                value="easy"
                key="1"
                onClick={this.changeStateLanguage}
              >
                easy
              </button>
              <button
                className="button"
                value="medium"
                key="2"
                onClick={this.changeStateLanguage}
              >
                medium
              </button>
              <button
                className="button"
                value="hard"
                key="3"
                onClick={this.changeStateLanguage}
              >
                hard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
