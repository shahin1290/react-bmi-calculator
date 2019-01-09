import React, { Component } from 'react';
import { bmiCalculation } from './BMICalculator';


class DisplayResult extends Component {
    state = {
        bmiMessage: ''
    }

    calculateBmi() {
        var weight= this.props.weight;
        var height= this.props.height;
        var method= this.props.methodType;

        this.setState({bmiMessage:bmiCalculation(weight, height) });
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>this.calculateBmi()}>Calculate</button>
                <div>{this.state.bmiMessage}</div>
            </div>
        )
    }
}

export default DisplayResult