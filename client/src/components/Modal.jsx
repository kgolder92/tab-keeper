/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';

import { ModalContainer } from '../style/Modal.style';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    const { editTab, tab } = this.props;
    const { label } = this.state;
    editTab(tab._id, label);
  }

  render() {
    const { handleClose, show } = this.props;
    const { label } = this.state;

    const styledisplay = {
      display: 'block',
    };
    const styledisplaynone = {
      display: 'none',
    };

    return (

      <div style={show ? styledisplay : styledisplaynone}>

        <ModalContainer>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="label" placeholder="Enter a new Label" onChange={this.handleChange} value={label} />
            {/* <input type="text" name="label" placeholder="Enter a new Title" value={label} /> */}
            <button type="submit"> Submit </button>
          </form>
          <button type="button" onClick={handleClose}> Cancel </button>
        </ModalContainer>
      </div>
    );
  }
}

export default Modal;
