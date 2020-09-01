import React, { Component } from 'react';
import './App.css';
import Users from './Users';
import axios from 'axios';

class App extends Component {

  state = {
    users: undefined
  }

  componentDidMount()
  {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({users: response.data})
      });
  }

  render(){
    let { users } = this.state;

    return (
      <div className='app'>
        <h1>Users</h1>
        {users && users.map(user => <Users user={user}/>)}
      </div>
    );
  } 
}

export default App;
