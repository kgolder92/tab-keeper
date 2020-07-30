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
    const { tabs } = this.props;
    return (
      <Container>
        { tabs.map((tab) => <Tab key={tab._id} tab={tab} />)}
      </Container>
    );
  }
}

export default TabList;
