import React, { Component } from "react";
import { Button, FormControl} from 'react-bootstrap';
import { btnStyleInSearchBar, searchBarStyle, displayFlex } from '../style/index'
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

  //submit the search keyword
  //set the flag to close the new appointment form
  //set the local state for storing input to empty;
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
      <div style={displayFlex}>
        <FormControl
          type="text"
          componentClass='input'
          placeholder="Type to Search"
          style={searchBarStyle}
          value={this.state.content}
          onChange={this.handleOnChange}
        />
        <Button bsStyle="primary" style={btnStyleInSearchBar} onClick={this.submitSearch}>Search</Button>
      </div>
    );
  }
}

export default connect(null, { searchAppt, closeApptArea })(SearchBar);
