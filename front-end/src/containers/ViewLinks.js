import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

export class ViewLinks extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello World ViewLinks</h1>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewLinks);
