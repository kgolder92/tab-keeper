/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';

import Tab from './Tab';

import { Container } from '../style/TabList.style';

class TabList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { tabs, deleteTab, editTab } = this.props;
    return (
      <Container>
        {tabs.map((tab) => (
          <Tab
            deleteTab={deleteTab}
            editTab={editTab}
            key={tab._id}
            tab={tab}
          />
        ))}
      </Container>
    );
  }
}

export default TabList;
