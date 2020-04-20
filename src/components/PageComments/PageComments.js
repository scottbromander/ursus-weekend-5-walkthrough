import React, { Component } from "react";
import { connect } from "react-redux";

class PageSupported extends Component {
  state = {
    comments: "",
  };

  handleChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleClick = () => {
    // dispatch to reducer
    this.props.dispatch({
      type: "SET_COMMENTS",
      payload: this.state.comments,
    });
    // navigate to next page
    this.props.history.push("/review");
  };

  render() {
    return (
      <div>
        <h1>Any comments?</h1>
        <input onChange={this.handleChange} type="text" />

        <div>
          <button onClick={this.handleClick}>Next</button>
        </div>
      </div>
    );
  }
}

export default connect()(PageSupported);
