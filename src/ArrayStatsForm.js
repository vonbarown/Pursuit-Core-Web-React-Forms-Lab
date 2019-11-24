import React from 'react';

class ArrayStatsForm extends React.Component {
    initialState = {
        array: [],
        computationMethod: '',
        output: ''
    };
    constructor() {
        super();
        this.state = this.initialState;
    }
    render() {
        const { array, computationMethod, output } = this.state
        return (
            <div>
                <p>Enter each number in the array, separated by a ,</p>
                <input></input>
                <select>
                    <option value=''></option>
                    <option value='sum'>sum</option>
                    <option value='average'>average</option>
                    <option value='mode'>mode</option>
                    <option value='median'>median</option>
                </select>
                <button>Calculate</button>
                <p hidden={}></p>
            </div>
        )
    }
}

export default ArrayStatsForm;