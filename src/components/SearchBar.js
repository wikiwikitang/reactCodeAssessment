import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { searchAppt, closeApptArea } from "../actions/index";
import { connect } from "react-redux";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  handleOnChange = event => {
    this.setState({
      content: event.target.value
    });
  };

  submitSearch = () => {
    console.log("call the searchAPI");
    this.props.closeApptArea();
    this.props.searchAppt(this.state.content);

    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type to Search"
          value={this.state.content}
          onChange={this.handleOnChange}
        />
        <Button onClick={this.submitSearch}>Search</Button>
      </div>
    );
  }
}

export default connect(null, { searchAppt, closeApptArea })(SearchBar);
