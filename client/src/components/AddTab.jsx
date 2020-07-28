import React from 'react';

class AddTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { url } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="url" name="url" value={url} onChange={this.handleChange} />
      </form>
    );
  }
}

export default AddTab;
