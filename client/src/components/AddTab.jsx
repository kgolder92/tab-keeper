/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React from 'react';

import {
  Outer,
  Container,
  Form,
  InputAddContainer,
  Input,
  LabelInput,
} from '../style/AddTab.style';

class AddTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      website: '',
      label: '',
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

    this.setState({ website: '', label: '' });
  }

  render() {
    const { website, label } = this.state;
    return (
      <Outer>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <InputAddContainer>
              <Input placeholder="Enter url" type="url" name="website" value={website} onChange={this.handleChange} />
            </InputAddContainer>
            <LabelInput placeholder="Enter label" type="text" name="label" value={label} onChange={this.handleChange} />
            <button> add </button>
          </Form>
        </Container>
      </Outer>
    );
  }
}

export default AddTab;
