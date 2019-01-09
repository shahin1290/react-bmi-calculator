import React from 'react';
import { mount, shallow } from 'enzyme';
import { stub } from 'sinon';

// import DisplayResult from './DisplayResult'
// import MethodSelect from './MethodSelect';
import App from '../App';

describe('<App />', () => {
  it('renders header', () => {
    const component = shallow(<App />);
    const header = <h1>BMI Calculator</h1>;
    expect(component.contains(header)).toEqual(true);
  });

  it('shows metric as the standard method', () => {
    const component = shallow(<App />);
    const weightLabel = <label>Weight (kg)</label>;
    const heightLabel = <label>Height (cm)</label>;
    expect(component.contains(weightLabel)).toEqual(true);
    expect(component.contains(heightLabel)).toEqual(true);
  })

  it('can change method', () => {
    const component = shallow(<App />);
    const weightLabel = <label>Weight (lbs)</label>;
    const heightLabel = <label>Height (inch)</label>;
    component.find("#selectMethod").simulate('click');
    expect(component.contains(weightLabel)).toEqual(true);
    expect(component.contains(heightLabel)).toEqual(true);
  })
})