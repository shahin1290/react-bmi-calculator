import React, { Component } from 'react';
import { bmiCalculation } from './BMICalculator';


class DisplayResult extends Component {
    state = {
        bmiMessage: ''
    }

    calculateBmi() {
        let weight= this.props.weight;
        let height= this.props.height;
        let method= this.props.methodType;

        this.setState({bmiMessage:bmiCalculation(weight, height, method) });
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>this.calculateBmi()} id="calculate">Calculate</button>
                <div>{this.state.bmiMessage}</div>
            </div>
        )
    }
}

export default DisplayResult