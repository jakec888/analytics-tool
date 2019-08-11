import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

import moment from 'moment';

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
        <Bar
          data={{
            labels: [
              `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
              `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
              `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
              `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
              `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
              `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
            ],
            datasets: [
              {
                label: 'Clicks',
                data: [617594, 181045, 153060, 106519, 105162, 95072],
                backgroundColor: '#147afe'
              }
            ]
          }}
          options={{
            title: {
              display: true,
              text: 'Link Statistics',
              fontSize: 25
            },
            legend: {
              display: true,
              position: 'bottom'
            }
          }}
        />
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
