import { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import logo from './art-logo.svg';

interface Props {
  getUser: (username: string, password: string) => string
}

interface State {
  email: string,
  password: string
}

export default class WelcomeLogin extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount = () => {

  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name as any;
    this.setState({ ...this.state, [name]: value })
  }

  render() {
    return (
      <Row className="App-header">
        <Col xs="12">
          <header className="text-center">
            <img src={logo} className="App-logo mb-3" alt="logo" />
            <p className="text-center">
              Welcome to Client Services
              <br />
              Please login to continue.
            </p>
            <Form className="login-form">
              <Form.Group className="mb-3 w-25">
                <Form.Control onChange={this.handleChange} name="email" type="email" placeholder="Email" value={this.state.email} />
              </Form.Group>
              <Form.Group className="mb-3 w-25">
                <Form.Control onChange={this.handleChange} name="password" type="password" placeholder="Password" value={this.state.password}></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Remember Me"></Form.Check>
              </Form.Group>
              <Form.Text className="text-muted mb-3">
                We'll never share your information with anyone else.
              </Form.Text>
              <Button className="login-submit mb-3" variant="outline-secondary" type="submit">
                Submit
              </Button>
            </Form>
          </header>
        </Col>
        <Col className="" xs="2">
          <a
            className="App-link vertical-center-element mb-3"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            about
          </a>
        </Col>
      </Row>
    );
  }
}
