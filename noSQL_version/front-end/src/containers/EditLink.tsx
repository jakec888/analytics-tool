import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { AppState } from '../redux/rootAppState';

import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/rootType.actions';

import { updateTitle } from '../redux/actions/selectedActions.actions';

interface EditLinkPageProps {}

interface EditLinkPageState {}

type Props = EditLinkPageProps & LinkStateProps & LinkDispatchProps;

export class EditLink extends Component<Props, EditLinkPageState> {

  onUpdate = () => {
    console.log('Update!')
  }

  onUpdateTitle = (event: any) => {
    this.props.updateTitle(event.target.value);
  }

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.onUpdate}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
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
  // link: string;
  title: string;
  // redirectURL: string;
  // date: string;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  // link: state.Selected.link,
  title: state.Selected.title,
  // redirectURL: state.Selected.redirectURL,
  // date: new Date(state.Selected.date).toUTCString(),
});


interface LinkDispatchProps {
  updateTitle: (title: string) => void;
}


const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  updateTitle: bindActionCreators(updateTitle, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLink);
