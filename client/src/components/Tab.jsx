/* eslint-disable react/prop-types */
import React from 'react';

import { Container, Image, Inner } from '../style/Tab.style';

class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.truncate = this.truncate.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  truncate(str) {
    return str.length > 30 ? `${str.substr(0, 30)}...` : str;
  }

  render() {
    const { tab } = this.props;
    const resultStr = tab.title !== '' ? tab.title : tab.website;
    return (
      <Container>
        {/* {tab.label} */}
        <Inner>
          {this.truncate(resultStr)}
          <a rel="noreferrer" target="_blank" href={tab.website}>
            <Image alt={tab.title} src={tab.image} />
          </a>
        </Inner>
      </Container>
    );
  }
}

export default Tab;
