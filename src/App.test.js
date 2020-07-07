import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const title = <p>Count BACular</p>;

  expect(wrapper.contains(title)).toEqual(true);
});
