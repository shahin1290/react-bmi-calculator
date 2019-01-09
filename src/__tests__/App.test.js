import React from 'react';
import { mount, shallow } from 'enzyme';
// import { stub } from 'sinon';

import DisplayResult from '../DisplayResult'
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


describe('<DisplayResult />', () => {
    it('displays the calulation correct(metric)', () => {
      const component = shallow(<DisplayResult methodType='Metric' weight='100' height='195'/>)
      const response = <div id='response'>You are Overweight with a BMI of 26.3</div>
      component.find("#calculate").simulate('click');
      expect(component.contains(response)).toEqual(true)
    })
  
    it('displays the calulation correct(imperial)', () => {
      const component = shallow(<DisplayResult methodType='Imperial' weight='140' height='73'/>)
      const response = <div id='response'>You are Underweight with a BMI of 18.47</div>
      component.find("#calculate").simulate('click');
      expect(component.contains(response)).toEqual(true)
    })
  
  })
  
