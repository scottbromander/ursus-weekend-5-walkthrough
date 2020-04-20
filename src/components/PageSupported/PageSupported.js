import React, { Component } from "react";
import { connect } from "react-redux";

class PageSupported extends Component {
  state = {
    supported: 0,
    showButton: false,
  };

  handleChange = (event) => {
    const supportedValue = parseInt(event.target.value);

    if (supportedValue > 0 && supportedValue <= 5) {
      this.setState({
        supported: supportedValue,
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
      type: "SET_SUPPORTED",
      payload: this.state.supported,
    });
    // navigate to next page
    this.props.history.push("/comments");
  };

  render() {
    return (
      <div>
        <h1>Did you feel supported today?</h1>
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

export default connect()(PageSupported);
