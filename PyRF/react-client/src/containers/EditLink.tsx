import React, {Component} from 'react';
import {connect} from 'react-redux';

import {AppState} from '../redux/rootAppState';

import {bindActionCreators} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {AppActions} from '../types/rootType.actions';

import {editTitle, editLink} from '../redux/actions/selectedActions.actions';

import EditLinkView from '../views/EditLinkView';

interface EditLinkPageProps {
  history?: any;
}

interface EditLinkPageState {}

type Props = EditLinkPageProps & LinkStateProps & LinkDispatchProps;

export class EditLink extends Component<Props, EditLinkPageState> {
  onEditTitle = (event: any) => {
    this.props.editTitle(event.target.value);
  };

  onEdit = (event: any) => {
    event.preventDefault();
    this.props.editLink(
      this.props.linkId,
      this.props.title,
      this.props.history,
    );
  };

  render() {
    return (
      <EditLinkView
        title={this.props.title}
        onEdit={this.onEdit}
        onEditTitle={this.onEditTitle}
      />
    );
  }
}

interface LinkStateProps {
  linkId: string;
  title: string;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  linkId: state.Selected.id,
  title: state.Selected.title,
});

interface LinkDispatchProps {
  editTitle: (title: string) => void;
  editLink: (linkId: string, title: string, history: any) => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
): LinkDispatchProps => ({
  editTitle: bindActionCreators(editTitle, dispatch),
  editLink: bindActionCreators(editLink, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditLink);
