import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { any } from 'prop-types';

export default class App extends Component {
  constructor(props: object) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => ({

  });

  getUsers = (id: number) => {
    const user = fetch('http://localhost:3001/users')
    console.log(user);
    return 'Success!';
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
}
}
