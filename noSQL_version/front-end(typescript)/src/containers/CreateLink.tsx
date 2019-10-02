import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Button, InputGroup, FormControl } from 'react-bootstrap';

import {
  updateLink,
  updateTitle,
  createLink
} from '../redux/actions/selectedActions.actions';

import { Link } from '../types/links/link';

import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/rootType.actions';
import { AppState } from '../redux/rootAppState';
import { bindActionCreators } from 'redux';

interface CreateLinkPageProps {
  history?: any;
}

interface CreateLinkPageState {}

type Props = CreateLinkPageProps & LinkStateProps & LinkDispatchProps;

export class CreateLink extends Component<Props, CreateLinkPageState> {
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

interface LinkStateProps {
  selectedLink: Link;
  userId: string;
  title: string;
  link: string;
}

interface LinkDispatchProps {
  updateLink: (e: string) => void;
  updateTitle: (e: string) => void;
  createLink: (selectedLink: Link, userId: string, history: any) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  selectedLink: state.Selected,
  userId: state.Auth.userId,
  title: state.Link.title,
  link: state.Link.link
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  updateLink: bindActionCreators(updateLink, dispatch),
  updateTitle: bindActionCreators(updateTitle, dispatch),
  createLink: bindActionCreators(createLink, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateLink);
