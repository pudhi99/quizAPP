import { Component } from "react";

import "./index.css";

class Option extends Component {
  renderValue = (event) => {
    const { selectedOption } = this.props;
    const { value } = event.target;
    selectedOption(value);
  };

  render() {
    const { eachOption, yes, selectedOptionState } = this.props;

    const className = selectedOptionState === eachOption;
    const setColor = yes ? "correct" : "False";
    const optionClassName = className ? setColor : null;

    return (
      <li className="option-card">
        <button
          className={`option ${optionClassName}`}
          onClick={this.renderValue}
          value={eachOption}
        >
          {eachOption}
        </button>
      </li>
    );
  }
}

export default Option;
