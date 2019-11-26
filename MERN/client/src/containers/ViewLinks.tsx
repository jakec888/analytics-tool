import React, {Component} from 'react';
import {connect} from 'react-redux';

import {selectLink} from '../redux/actions/selectedActions.actions';
import {getLinks} from '../redux/actions/linksActions.actions';

import {Link} from '../types/links/link';

import {ThunkDispatch} from 'redux-thunk';
import {AppActions} from '../types/rootType.actions';
import {AppState} from '../redux/rootAppState';
import {bindActionCreators} from 'redux';

import ViewLinksView from '../views/ViewLinksView';

interface ViewLinksPageProps {
  history?: any;
}

interface ViewLinksPageState {}

type Props = ViewLinksPageProps & LinkStateProps & LinkDispatchProps;

export class ViewLinks extends Component<Props, ViewLinksPageState> {
  componentDidMount() {
    this.props.getLinks(this.props.userId);
  }

  onViewLink = (history: any, selected: Link) => {
    this.props.selectLink(history, selected);
  };

  render() {
    return (
      <ViewLinksView
        links={this.props.links}
        history={this.props.history}
        selectLink={this.onViewLink}
      />
    );
  }
}

interface LinkStateProps {
  userId: string;
  links: Link[];
}

interface LinkDispatchProps {
  getLinks: (userId: string) => void;
  selectLink: (history: any, selected: Link) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  userId: state.Auth.userId,
  links: state.AllLinks.links,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
): LinkDispatchProps => ({
  getLinks: bindActionCreators(getLinks, dispatch),
  selectLink: bindActionCreators(selectLink, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewLinks);
