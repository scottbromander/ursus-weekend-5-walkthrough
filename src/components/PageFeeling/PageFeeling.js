import React, { Component } from "react";
import { connect } from "react-redux";

class PageFeeling extends Component {
  state = {
    feeling: 0,
    showButton: false,
  };

  handleChange = (event) => {
    const feelingValue = parseInt(event.target.value);

    if (feelingValue > 0 && feelingValue <= 5) {
      this.setState({
        feeling: feelingValue,
        showButton: true,
      });
    } else {
      this.setState({
        showButton: false,
      });
    }
  };

  handleClick = () => {
    // dispatch to reducer
    this.props.dispatch({ type: "SET_FEELING", payload: this.state.feeling });
    // navigate to next page
    this.props.history.push("/understanding");
  };

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <input onChange={this.handleChange} type="number" />

        <div>
          {!this.state.showButton && <p>Enter a value between 1 - 5</p>}
          {this.state.showButton && (
            <button onClick={this.handleClick}>Next</button>
          )}
        </div>
      </div>
    );
  }
}

export default connect()(PageFeeling);
