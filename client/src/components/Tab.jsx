/* eslint-disable react/prop-types */
import React from 'react';

import {
  Container,
  Image,
  Inner,
  Delete,
  Edit,
  Control,
} from '../style/Tab.style';

class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.truncate = this.truncate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  truncate(str) {
    return str.length > 30 ? `${str.substr(0, 30)}...` : str;
  }

  handleDelete(e) {
    e.preventDefault();
    const { tab, deleteTab } = this.props;
    // eslint-disable-next-line no-underscore-dangle
    deleteTab(tab._id);
  }
  handleEdit() {
    console.log('edit')
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
        <Control>
          <Edit onClick={this.handleEdit}> edit </Edit>
          <Delete onClick={this.handleDelete}>delete</Delete>
        </Control>
      </Container>
    );
  }
}

export default Tab;
