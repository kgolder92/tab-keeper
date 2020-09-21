/* eslint-disable no-undef */
import React from 'react';

import { shallow, configure } from 'enzyme';
// import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import App from '../client/src/components/App';

configure({ adapter: new Adapter() });

describe('<App/>', () => {
  it('should render App component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });
});
