import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class PageReview extends Component {
  handleClick = () => {
    const dataForServer = {
      feeling: this.props.store.feedbackReducer.feeling,
      understanding: this.props.store.feedbackReducer.understanding,
      supported: this.props.store.feedbackReducer.supported,
      comments: this.props.store.feedbackReducer.comments,
    };

    axios
      .post("/feedback", dataForServer)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/submitted");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  render() {
    return (
      <div>
        <p>Feeling: {this.props.store.feedbackReducer.feeling}</p>
        <p>Understanding: {this.props.store.feedbackReducer.understanding}</p>
        <p>Supported: {this.props.store.feedbackReducer.supported}</p>
        <p>Comments: {this.props.store.feedbackReducer.comments}</p>
        <div>
          <button onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PageReview);
