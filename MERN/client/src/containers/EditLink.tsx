import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { AppState } from '../redux/rootAppState';

import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/rootType.actions';

import { editTitle, editLink } from '../redux/actions/selectedActions.actions';

interface EditLinkPageProps {
  history?: any;
}

interface EditLinkPageState {}

type Props = EditLinkPageProps & LinkStateProps & LinkDispatchProps;

export class EditLink extends Component<Props, EditLinkPageState> {
  onEditTitle = (event: any) => {
    this.props.editTitle(event.target.value);
  }

  onEdit = (event: any) => {
    event.preventDefault();
    this.props.editLink(this.props.linkId, this.props.title, this.props.history)
  }

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.onEdit}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='title'
              placeholder='Title'
              onChange={this.onEditTitle}
              value={this.props.title}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Update
          </Button>
        </Form>
      </Fragment>
    );
  }
}

interface LinkStateProps {
  linkId: string;
  title: string;
  // redirectURL: string;
  // date: string;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  linkId: state.Selected._id,
  title: state.Selected.title,
  // redirectURL: state.Selected.redirectURL,
  // date: new Date(state.Selected.date).toUTCString(),
});


interface LinkDispatchProps {
  editTitle: (title: string) => void;
  editLink: (linkId: string, title: string, history: any) => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  editTitle: bindActionCreators(editTitle, dispatch),
  editLink: bindActionCreators(editLink, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLink);
