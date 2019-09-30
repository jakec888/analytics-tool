import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Button, InputGroup, FormControl } from 'react-bootstrap';

import {
  updateLink,
  updateTitle,
  createLink
} from '../redux/actions/selectedActions.actions';

import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../Root';
import { SelectedActions } from '../types/selected/selected.actions';

interface CreateLinkProps {
  history?: any;
  email: string;
  password: string;
}

interface CreateLinkState {}

type Props = CreateLinkProps & CreateLinkStateProps & CreateLinkDispatchProps;

export class CreateLink extends Component<Props, CreateLinkState> {
  onUpdateTitle = (event: any) => {
    this.props.updateTitle(event.target.value);
  };

  onUpdateLink = (event: any) => {
    this.props.updateLink(event.target.value);
  };

  onSubmitLink = (event: any) => {
    event.preventDefault();
    this.props.createLink(
      this.props.selectedLink,
      this.props.userId,
      this.props.history
    );
  };

  render() {
    return (
      <Fragment>
        <Card.Title>Create Link</Card.Title>
        <Form onSubmit={this.onSubmitLink}>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon3'>Title</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id='basic-url'
              aria-describedby='basic-addon3'
              onChange={this.onUpdateTitle}
              value={this.props.title}
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon3'>Your URL</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id='basic-url'
              aria-describedby='basic-addon3'
              onChange={this.onUpdateLink}
              value={this.props.link}
            />
          </InputGroup>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Fragment>
    );
  }
}

interface CreateLinkStateProps {
  selectedLink: string;
  userId: string;
  title: string;
  link: string;
}

interface CreateLinkDispatchProps {
  updateLink: (history?: any) => void;
  updateTitle: (history?: any) => void;
  createLink: (selectedLink: string, userId: string, istory?: any) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: CreateLinkProps
): CreateLinkStateProps => ({
  selectedLink: state.Selected,
  userId: state.Auth.userId,
  title: state.Link.title,
  link: state.Link.link
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, SelectedActions>,
  ownProps: CreateLinkProps
): CreateLinkDispatchProps => ({
  updateLink: bindActionCreators(updateLink, dispatch),
  updateTitle: bindActionCreators(updateTitle, dispatch),
  createLink: bindActionCreators(createLink, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateLink);
