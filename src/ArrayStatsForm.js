import React from 'react';

class ArrayStatsForm extends React.Component {
    initialState = {
        userInput: '',
        computationMethod: '',
        output: ''
    };
    constructor() {
        super();
        this.state = this.initialState;
    }
    render() {
        const { userInput, array, computationMethod, output } = this.state
        return (
            <form onSubmit={this.handleFormSubmission}>
                <p>Enter each number in the array, separated by a ','</p>
                <p>
                    <input value={userInput} onChange={this.handleInputChange}></input>
                </p>
                <p>
                    <select value={computationMethod} onChange={this.handleSelectChange}>
                        <option value=''></option>
                        <option value='sum'>sum</option>
                        <option value='average'>average</option>
                        <option value='mode'>mode</option>
                    </select>
                </p>
                <button>Calculate</button>
                <p hidden={false}>{output}</p>
            </form>
        )
    }
    handleSelectChange = (event) => {
        this.setState({computationMethod: event.target.value});
    }
    handleInputChange = (event) => {
        this.setState({userInput:event.target.value});
    }
    handleFormSubmission = (event) => {
        event.preventDefault();
        const arr = this.commaSeparatedStringToArray(this.state.userInput);
        if (arr) {
            const output = this.calculate(arr, this.state.computationMethod);
            this.setState({output: output});
        } else {
            this.setState({output:'Invalid input'});
        }
    }
    commaSeparatedStringToArray = (str) => {
        const arr = str.split(',');
        if (arr.every((elem) => !isNaN(elem))) {
            return arr;
        } else {
            return '';
        }
    }
    calculate = (arr, method) => {
        if (method === 'sum') {
            return this.sum(arr);
        }  else if (method === 'average') {
            return this.average(arr);   
        } else if (method === 'mode') {
            return this.mode(arr);
        } else {
            return 'Select a method';
        }        
    }
    sum = (arr) => {
        return arr.reduce((comb, elem) => +comb + +elem, 0);
    }
    average = (arr) => {
        return this.sum(arr) / arr.length;
    }
    mode = (arr) => {
        var obj = {};
        for (const val of arr) {
            obj[val] = (obj[val] || 0) + 1;
        }
        //https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object
        const keyWithLargestValue = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
        return keyWithLargestValue;
    }
}

export default ArrayStatsForm;