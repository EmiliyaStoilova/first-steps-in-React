import React, { Component } from 'react';
import './App.css';
import KeyPad from './components/KeyPad';
import Outputs from './components/Outputs';
import Input from './components/Input';

class App extends Component {

  state = {
    history: '',
    result: '',
    prevNum: 0,
    prevNumM: 1,
    currNum: 0,
    operator: ''
  };

  buttonPressed = buttonName => {

    if (buttonName === "=")
    {
      this.calculate();
      this.setState({
        prevNum: 0,
        prevNumM: 1
      })
    } 
    else if (buttonName === "C")
    {
      this.reset();
    }
    else if (buttonName === "CE")
    {
      this.backspace();
    }
    else if (buttonName === "+")
    {
      this.setState({
        history: this.state.history + buttonName,
      })
      this.add();
    }
    else if (buttonName === "-")
    {
      this.subtraction();
      this.setState({
        history: this.state.history + buttonName,
      })
    }
    else if (buttonName === "*")
    {
      this.setState({
        history: this.state.history + buttonName
      })
      this.multiplay();
    }
    else if (buttonName === "/")
    {
      this.setState({
        history: this.state.history + buttonName,
      })
      this.divide();
    }
    else
    {
      this.setState({
        history: this.state.history + buttonName,
        result: this.state.result + buttonName,
      });
    }
  };

  backspace = () => {
    if (this.state.history.length > 1 ){
      this.setState({
      history: this.state.history.slice(0, -1),
      result: this.state.result.slice(0, -1)
      })
    }
    else{
      this.setState({
        history: "",
        result: ""
      })
    }
  };

  reset = () => {
    this.setState({
      history: "",
      result: '',
      prevNum: 0
    });
  };

  add = () => {
    this.setState((prevState) =>({...prevState,
      prevNum: (Number(prevState.result) + prevState.prevNum), 
      operator:'+',
      result: ''}));
  };

  subtraction = () => {
    this.setState((prevState) =>({...prevState, 
      prevNum: (Number(prevState.result) - prevState.prevNum), 
      operator:'-',
      result: ''}));
  };

  multiplay = () => {
    this.setState((prevState) =>({...prevState,
      prevNumM: (Number(prevState.result) * prevState.prevNumM), 
      operator:'*',
      result: ''}));
  }

  divide = () => {
    this.setState((prevState) =>({...prevState,
      prevNumM: (Number(prevState.result) / prevState.prevNumM), 
      operator:'/',
      result: ''}));
  }

  calculate = () => {
    if (this.state.operator === "+")
    {
      this.setState({
        history: eval(this.state.history),
        result: (this.state.prevNum + Number(this.state.result))
      });
    }
    else if (this.state.operator === "-")
    {
      this.setState({
        history: eval(this.state.history),
        result: (this.state.prevNum - Number(this.state.result))
      });
    }
    else if (this.state.operator === "*")
    {
      this.setState({
        history: eval(this.state.history),
        result: (this.state.prevNumM * Number(this.state.result))
      });
    }
    else if (this.state.operator === "/")
    {
      this.setState({
        history: eval(this.state.history),
        result: (this.state.prevNumM / Number(this.state.result))
      });
    }
  };

  render(){
    return (
      <div className="App">
        {this.state.history ? <Outputs history={this.state.history} /> : <h5></h5>} <br></br>
        <Input result={this.state.result} /> 
        <KeyPad buttonPressed={this.buttonPressed} />
      </div>
    );
  }
}

export default App;
