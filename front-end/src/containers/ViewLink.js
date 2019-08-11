import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import moment from 'moment';

// import linkActions from '../redux/actions/linkActions.actions';

export class ViewLink extends Component {
  render() {
    return (
      <Fragment>
        <Card.Text>
          Created On {this.props.date} | ({moment(new Date(this.props.date)).fromNow()})
        </Card.Text>
        <Card.Title>
          <a href={this.props.link} style={{ textDecoration: 'none', color: 'black' }}>
            {this.props.title}
          </a>
        </Card.Title>
        <Card.Text>
          <a href={this.props.link} style={{ textDecoration: 'none', color: 'black' }}>
            {this.props.link}
          </a>
        </Card.Text>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  link: state.Link.link,
  title: state.Link.title,
  date: state.Link.date
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewLink);
