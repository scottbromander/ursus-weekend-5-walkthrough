import React, { Component } from "react";
import { connect } from "react-redux";

class PageUnderstanding extends Component {
  state = {
    understanding: 0,
    showButton: false,
  };

  handleChange = (event) => {
    const understandingValue = parseInt(event.target.value);

    if (understandingValue > 0 && understandingValue <= 5) {
      this.setState({
        understanding: understandingValue,
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
    this.props.dispatch({
      type: "SET_UNDERSTANDING",
      payload: this.state.understanding,
    });
    // navigate to next page
    this.props.history.push("/supported");
  };

  render() {
    return (
      <div>
        <h1>How well did you understand the material today?</h1>
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

export default connect()(PageUnderstanding);
