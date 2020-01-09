/*
 *
 * This is the file that handles the logic for viewing a selected link.
 *
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {bindActionCreators} from 'redux';

import {AppActions} from '../types/rootType.actions';

import {deleteLink} from '../redux/actions/linksActions.actions';

import {AppState} from '../redux/rootAppState';
import {AnalyticsTypes} from '../types/links/link';

import ViewLinkView from '../views/ViewLinkView';

interface ViewLinkPageProps {
  history?: any;
}

interface ViewLinkPageState {}

type Props = ViewLinkPageProps & LinkStateProps & LinkDispatchProps;

export class ViewLink extends Component<Props, ViewLinkPageState> {
  onDeleteLink = (event: any) => {
    event.preventDefault();
    this.props.deleteLink(this.props.linkId, this.props.history);
  };

  onUpdateLink = () => {
    this.props.history.push('/edit');
  };

  render() {
    return (
      <ViewLinkView
        linkId={this.props.linkId}
        link={this.props.link}
        title={this.props.title}
        redirectURL={this.props.redirectURL}
        date={this.props.date}
        analytics={this.props.analytics}
        onDeleteLink={this.onDeleteLink}
        onUpdateLink={this.onUpdateLink}
      />
    );
  }
}

interface LinkStateProps {
  linkId: string;
  link: string;
  title: string;
  redirectURL: string;
  date: string;
  analytics: AnalyticsTypes[];
}

interface LinkDispatchProps {
  deleteLink: (linkId: string, history: any) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  linkId: state.Selected.id,
  link: state.Selected.link,
  title: state.Selected.title,
  redirectURL: state.Selected.redirectURL,
  date: new Date(state.Selected.date).toUTCString(),
  analytics: state.Selected.analytics,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
): LinkDispatchProps => ({
  deleteLink: bindActionCreators(deleteLink, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewLink);
