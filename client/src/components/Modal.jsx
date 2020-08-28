/* eslint-disable react/prop-types */
import React from 'react';

import { ModalContainer } from '../style/Modal.style';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: '',
    };
  }

  render() {
    const { handleClose, show } = this.props;
    const { label } = this.state;

    const showHideClassName = show ? 'display-block' : 'display-none';

    const styledisplay = {
      display: 'block',
    };
    const styledisplaynone = {
      display: 'none',
    };

    // let sty = <style> .display-block { display: block; } .display-none { display: none } </style>

    return (

      <div className={showHideClassName} style={show ? styledisplay : styledisplaynone}>

        {/* <style dangerouslySetInnerHTML={{
          __html: `
              .display-block { display: block }
              .display-none { display: none }`,
        }}
        /> */}
        <ModalContainer>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="label" placeholder="Enter a new Label" value={label} />
            {/* <input type="text" name="label" placeholder="Enter a new Title" value={label} /> */}
            <button type="button"> Submit </button>
          </form>
          <button type="button" onClick={handleClose}> Cancel </button>
        </ModalContainer>
      </div>
    );
  }
}

export default Modal;
