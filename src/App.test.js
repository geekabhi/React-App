import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import sinon from 'sinon';
import App from './App';
import Boxes from './Boxes';
import Counter from './Counter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Boxes', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Boxes />, div);
});

it('render the heading Boxes', () => {
  const wrapper = shallow(<Boxes/>);
  const h1 = <h1>Boxes</h1>;

  expect(wrapper.contains(h1)).toEqual(true);
})

it('counter increment', () => {
  const onButtonClick = sinon.spy();
  const wrapper = mount(<Counter/>);

  expect(wrapper.find('#increasing').length).toEqual(1);
  wrapper.find('#increasing').simulate('click');

  const h2 = <h2>1</h2>;

  expect(wrapper.contains(h2)).toEqual(1);

})


