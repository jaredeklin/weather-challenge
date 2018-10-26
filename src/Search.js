import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.getLocationData(this.state.location);
    this.setState({
      location: ''
    });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          onChange={this.handleChange}
          value={this.state.location}
        />
        <button>Submit Location</button>
      </form>
    );
  }
}

export default Search;
