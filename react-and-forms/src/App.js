import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.initialState = {
      userInput: '',
      array: [],
      method: ''
    }

    this.state = this.initialState
  }

  handleInput = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  handleSelectChange = (event) => {
    this.setState({
      method: event.target.value
    })
  }

  render() {
    const { userInput, method } = this.state
    console.log(this.state);


    return (
      <div className="App">
        <form action="">
          <h1>Simple Calculator</h1>
          <input type="number"
            value={userInput}
            onChange={this.handleInput}
          />
          <select onChange={this.handleSelectChange} value={method}>
            <option value=''></option>
            <option value='add'>add</option>
            <option value='average'>average</option>
            <option value='mode'>mode</option>
          </select>
        </form>
      </div>
    );
  }
}

export default App;
