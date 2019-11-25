import * as React from 'react'
import { Card, Form, Button } from 'react-bootstrap';

type Props = {
  email: string;
  password: string;
  onUpdateEmail: (e: string) => void;
  onUpdatePassword: (e: string) => void;
  onSignUp: (e: string) => void;
};

export const SignUpView: React.FC<Props> = (props) => {
  const { email, password, onUpdateEmail, onUpdatePassword, onSignUp } = props;

  const UpdateEmail = (event: any) => {
    onUpdateEmail(event.target.value);
  };

  const UpdatePassword = (event: any) => {
    onUpdatePassword(event.target.value);
  };

  const SignUp = (event: any) => {
    onSignUp(event);
  };

  return (
    <div>
      <Card.Title>Sign Up</Card.Title>
      <Form onSubmit={SignUp}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={UpdateEmail}
            value={email}
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={UpdatePassword}
            value={password}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );

}

export default SignUpView;
