import React, { Component } from "react";
import "../styles/App.css";
import { imageGetter } from "../actions/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class searchBar extends Component {
  construction() {
    this.state = {
      inputValue: " "
    };
  }

  getInputValue = e => {
    let value = e.target.value;
    this.setState({ inputValue: value});
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>SEARCH HERE</h1>
        <input type="text" onKeyUp={this.getInputValue} />
        <input
          type="submit"
          onClick={() => this.props.getImage(this.state.inputValue)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapstate", state);
  return {
    images: state.images
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getImage: imageGetter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(searchBar);
