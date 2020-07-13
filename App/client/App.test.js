import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const title = <p>Count BACula</p>;

  expect(wrapper.contains(title)).toEqual(true);
});
