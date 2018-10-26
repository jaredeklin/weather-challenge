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
    console.log(this.state.location);
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
          onBlur={this.handleSubmit}
          value={this.state.location}
        />
      </form>
    );
  }
}

export default Search;
