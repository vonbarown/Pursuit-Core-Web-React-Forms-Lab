import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.initialState = {
      userInput:'',
      result:0,
      method: ''
    }
    this.state = this.initialState
  }

  handleSubmit = (event) => event.preventDefault();

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

  math = (event) => {
    const {userInput, method,result } = this.state
    let array =userInput.split('')
    console.log(array);
    let answer = 0;
    if (method === 'add') {
      for (let i = 0; i < array.length - 1; i++){
        answer += Number(i)
        this.setState({
          result:answer
        })
      }      
    }
}




  render() {
    const { userInput, method } = this.state
    console.log(this.state.result);

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
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

          <button onClick={this.math}>Calculate</button>
        </form>
      </div>
    );
  }
}

export default App;
