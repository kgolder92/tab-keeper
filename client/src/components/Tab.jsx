/* eslint-disable no-underscore-dangle */
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

import Modal from './Modal';

class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.truncate = this.truncate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  // eslint-disable-next-line class-methods-use-this
  truncate(str) {
    return str.length > 30 ? `${str.substr(0, 30)}...` : str;
  }

  handleDelete(e) {
    e.preventDefault();
    const { tab, deleteTab } = this.props;
    deleteTab(tab._id);
  }

  handleEdit(e) {
    e.preventDefault();
    const { tab, editTab } = this.props;
    editTab(tab._id);
  }

  render() {
    const { show } = this.state;
    const { tab, editTab } = this.props;
    const resultStr = tab.title !== '' ? tab.title : tab.website;
    return (
      <Container>
        {tab.label}
        <Inner>
          {this.truncate(resultStr)}
          <a rel="noreferrer" target="_blank" href={tab.website}>
            <Image alt={tab.title} src={tab.image} />
          </a>
        </Inner>
        <Control>
          <Modal show={show} handleClose={this.hideModal} tab={tab} editTab={editTab} />
          <Edit onClick={this.showModal}> edit </Edit>
          <Delete onClick={this.handleDelete}>delete</Delete>
        </Control>
      </Container>
    );
  }
}

export default Tab;
