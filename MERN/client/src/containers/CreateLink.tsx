/*

This is the "page" that handles the logic for creating links.

*/
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  updateLink,
  updateTitle,
  createLink,
} from '../redux/actions/createActions.actions';

import {Link} from '../types/links/link';

import {ThunkDispatch} from 'redux-thunk';
import {AppActions} from '../types/rootType.actions';
import {AppState} from '../redux/rootAppState';
import {bindActionCreators} from 'redux';

import CreateLinkView from '../views/CreateLinkView';

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
      this.props.history,
    );
  };

  render() {
    return (
      <CreateLinkView
        title={this.props.title}
        link={this.props.link}
        onUpdateTitle={this.onUpdateTitle}
        onUpdateLink={this.onUpdateLink}
        onSubmitLink={this.onSubmitLink}
      />
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
  selectedLink: state.Create,
  userId: state.Auth.userId,
  title: state.Create.title,
  link: state.Create.link,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
): LinkDispatchProps => ({
  updateLink: bindActionCreators(updateLink, dispatch),
  updateTitle: bindActionCreators(updateTitle, dispatch),
  createLink: bindActionCreators(createLink, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateLink);
