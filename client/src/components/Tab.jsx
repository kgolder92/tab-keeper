/* eslint-disable react/prop-types */
import React from 'react';

import { Container, Image } from '../style/Tab.style';

class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { tab } = this.props;
    return (
      <Container>
        {tab.label}
        <p> </p>
        <a rel="noreferrer" target="_blank" href={tab.website}>
          <Image alt={tab.title} src={tab.image} />
        </a>
      </Container>
    );
  }
}

export default Tab;
