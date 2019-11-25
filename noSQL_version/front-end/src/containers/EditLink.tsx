import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { AppState } from '../redux/rootAppState';

import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/rootType.actions';

import { updateTitle, updateLink } from '../redux/actions/selectedActions.actions';

interface EditLinkPageProps {
  history?: any;
}

interface EditLinkPageState {}

type Props = EditLinkPageProps & LinkStateProps & LinkDispatchProps;

export class EditLink extends Component<Props, EditLinkPageState> {
  onUpdateTitle = (event: any) => {
    this.props.updateTitle(event.target.value);
  }

  onUpdate = (event: any) => {
    event.preventDefault();
    console.log('Updating!')
    console.log(this.props.linkId)
    console.log(this.props.title)
    this.props.updateLink(this.props.linkId, this.props.title, this.props.history)
    console.log('Done')
  }

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.onUpdate}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='title'
              placeholder='Title'
              onChange={this.onUpdateTitle}
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
  updateTitle: (title: string) => void;
  updateLink: (linkId: string, title: string, history: any) => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  updateTitle: bindActionCreators(updateTitle, dispatch),
  updateLink: bindActionCreators(updateLink, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLink);
