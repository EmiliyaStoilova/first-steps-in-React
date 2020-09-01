import React, { Component } from 'react';
import './App.css';
import Player from './components/choosePlayer';

class App extends Component {
 
    state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    }

  checkWinner = () => {
    let winLines =
    [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"]
    ]

    let {board, winner} = this.state;

    for(let i = 0; i < winLines.length; i++)
    {
      const [a, b, c] = winLines[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c])
      {
        alert('You won');
        this.setState(prevState => ({...prevState, winner: prevState.player}))
      }
    }

    const [a1, b2, c3] = winLines[0];
    const [a4, b5, c6] = winLines[1];
    const [a7, b8, c9] = winLines[2];

    if (board[a1] && board[b2] && board[c3] &&
      board[a4] && board[b5] && board[c6] &&
      board[a7] && board[b8] && board[c9] && !winner)
    {
      this.setState(prevState => ({...prevState, winner: '='}))
    }
  }

  handleClick = (index) => {
    if(this.state.player && !this.state.winner)
    {
      let newBoard = this.state.board;

      if(this.state.board[index] === null)
      {
        newBoard[index] = this.state.player;

        this.setState((prevState) => ({
          ...prevState, 
          board: newBoard, 
          player: prevState.player === "X" ? "O" : "X"
        }))

        this.checkWinner();
      }
    }
    
  }

  setPlayer = (player) => {
    this.setState({ player })
  }

  reset = () => {
    this.setState({
      board: Array(9).fill(null),
      player: null,
      winner: null
    })
  }

  render(){
    let {player,winner} = this.state;
  const Box = this.state.board
    .map((box, index) => <div className="box" key={index} onClick={() => this.handleClick(index)}>{box}</div>);

    let status = player ? <h4>Next is: {player}</h4> : <Player player={(e) => this.setPlayer(e)}/>;

    return (
      <div className="container">
        <h1> Tic Tac Toe </h1>
        <button onClick={() => this.reset()}> Reset </button>
        {!winner ? status : <h4>Game finished</h4>}
        <div className="board">
          {Box}
        </div>
      </div>
    );
  }
}

export default App;
