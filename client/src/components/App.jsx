/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';

import AddTab from './AddTab';
import TabList from './TabList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: [],
    };

    this.addTab = this.addTab.bind(this);
    this.getTabs = this.getTabs.bind(this);
    this.deleteTab = this.deleteTab.bind(this);
  }

  componentDidMount() {
    this.getTabs();
  }

  getTabs() {
    axios.get('/tabs')
      .then(({ data }) => {
        console.log(data);
        this.setState({ tabs: data });
      })
      .catch((err) => console.log(err));
  }

  addTab(tab) {
    axios.post('/addtab', tab)
      .then(() => this.getTabs())
      .catch((err) => console.log(err));
  }

  deleteTab(tabID) {
    axios.delete(`/deletetab/${tabID}`)
      .then(() => this.getTabs())
      .catch((err) => console.log(err));
  }

  render() {
    const { tabs } = this.state;
    return (
      <div>
        <AddTab tabs={tabs} addTab={this.addTab} />
        {/* <LabelSelect tabs={tabs} /> */}
        <TabList tabs={tabs} deleteTab={this.deleteTab} />
      </div>
    );
  }
}
export default App;
