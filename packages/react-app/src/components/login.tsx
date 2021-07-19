import { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

export default class Login extends Component {
  constructor(props: object) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => {

  }

  render() {
    return (
      <Col xs="4">
        <Form className="login-form">
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      </Col>
    );
  }
}
