import * as React from 'react';
import {Card, Form, Button} from 'react-bootstrap';

type Props = {
  email: string;
  password: string;
  onUpdateEmail: (e: string) => void;
  onUpdatePassword: (e: string) => void;
  onLogin: (e: string) => void;
};

const LoginView: React.FC<Props> = props => {
  const {email, password, onUpdateEmail, onUpdatePassword, onLogin} = props;

  const UpdateEmail = (event: any) => {
    onUpdateEmail(event);
  };

  const UpdatePassword = (event: any) => {
    onUpdatePassword(event);
  };

  const Login = (event: any) => {
    onLogin(event);
  };

  return (
    <div>
      <Card.Title>Login</Card.Title>
      <Form onSubmit={Login}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={UpdateEmail}
            value={email}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={UpdatePassword}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginView;
