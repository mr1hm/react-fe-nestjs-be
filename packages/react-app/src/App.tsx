import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Login from './components/login';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props: object) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => {

  };

  getUser = (id: number) => {
    const user = fetch('http://localhost:3001/users')
    console.log(user);
    return 'Success!';
  };

  render() {
    return (
      <Container fluid className="premium-client">
        <Row className="h-25">
          <Col xs="12">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="text-center">
                Welcome to Client Services
                <br />
                Please login to continue.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                about
              </a>
            </header>
          </Col>
          <Login />
        </Row>
      </Container>
    );
  }
}
