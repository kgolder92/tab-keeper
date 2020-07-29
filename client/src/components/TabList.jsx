/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';

import Tab from './Tab';

class TabList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { tabs } = this.props;
    return (
      <div>
        { tabs.map((tab) => <Tab key={tab._id} tab={tab} />)}
      </div>
    );
  }
}

export default TabList;
