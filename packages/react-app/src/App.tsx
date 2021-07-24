import { Component } from 'react';
import { Container } from 'react-bootstrap';
import WelcomeLogin from './components/welcomeLogin';
import './App.css';

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {}
    this.getUser = this.getUser.bind(this)
  }

  componentDidMount = () => {

  };

  getUser = (username: string, password: string) => {
    const user = fetch('http://localhost:3001/users', {
      method: 'POST'
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err));
    console.log(user);
    return 'Success!';
  };

  render() {
    return (
      <Container fluid className="premium-client">
        <WelcomeLogin getUser={this.getUser} />
      </Container>
    );
  }
}
