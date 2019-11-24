import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../redux/rootAppState';
import { DataTypes } from '../types/links/link';

interface EditLinkPageProps {}

interface EditLinkPageState {}

type Props = EditLinkPageProps & LinkStateProps;

export class EditLink extends Component<Props, EditLinkPageState> {
  render() {
    return (
      <Fragment>
        <div><p>sample</p></div>
      </Fragment>
    );
  }
}

interface LinkStateProps {
  link: string;
  title: string;
  redirectURL: string;
  date: string;
  data: DataTypes[];
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  link: state.Selected.link,
  title: state.Selected.title,
  redirectURL: state.Selected.redirectURL,
  date: new Date(state.Selected.date).toUTCString(),
  data: state.Selected.data
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLink);
