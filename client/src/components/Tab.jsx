/* eslint-disable react/prop-types */
import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { tab } = this.props;
    return (
      <div>
        {tab.label}
        <p> </p>
        {tab.website}
      </div>
    );
  }
}

export default Tab;
