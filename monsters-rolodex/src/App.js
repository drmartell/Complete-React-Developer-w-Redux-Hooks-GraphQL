import React from 'react';
import './App.css';
import './components/CardList';
import { CardList } from './components/CardList';

class App extends React.Component {
  constructor() {
    super()
    this.state =  {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
