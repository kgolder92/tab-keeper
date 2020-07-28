/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React from 'react';

class AddTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      website: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addTab } = this.props;
    addTab(this.state);
    console.log('submitted');
  }

  render() {
    const { website } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Enter url" type="url" name="website" value={website} onChange={this.handleChange} />
        <button> add </button>
      </form>
    );
  }
}

export default AddTab;
