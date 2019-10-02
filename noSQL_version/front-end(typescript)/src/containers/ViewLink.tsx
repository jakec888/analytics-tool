import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import moment from 'moment';

// import { bindActionCreators } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../Root';
import { DataTypes } from '../types/links/data';

interface ViewLinkProps {
  history?: any;
  email: string;
  password: string;
}

interface ViewLinkState {}

// type Props = ViewLinkProps & ViewLinkStateProps & ViewLinkDispatchProps;
type Props = ViewLinkProps & ViewLinkStateProps;

export class ViewLink extends Component<Props, ViewLinkState> {
  render() {
    return (
      <Fragment>
        <Card.Text>
          Created On <span className='link-date'>{this.props.date}</span> | (
          <span className='link-time'>
            {moment(new Date(this.props.date)).fromNow()}
          </span>
          )
        </Card.Text>
        <Card.Title>
          <a
            href={this.props.link}
            rel='noopener noreferrer'
            target='_blank'
            style={{ textDecoration: 'none', color: 'black' }}
            className='link-title'
          >
            {this.props.title}
          </a>
        </Card.Title>
        <Card.Text>
          <a
            href={this.props.link}
            rel='noopener noreferrer'
            target='_blank'
            style={{ textDecoration: 'none', color: 'black' }}
            className='link-link'
          >
            {this.props.link}
          </a>
        </Card.Text>
        <InputGroup className='mb-3'>
          <FormControl
            disabled
            value={this.props.redirectURL}
            aria-describedby='basic-addon2'
            className='link-redirect'
          />
          <InputGroup.Append>
            <CopyToClipboard text={this.props.redirectURL}>
              <Button
                variant='outline-secondary'
                onClick={() => alert('Copied To Clipboard')}
              >
                Copy
              </Button>
            </CopyToClipboard>
          </InputGroup.Append>
        </InputGroup>
        <Bar
          data={{
            labels: this.props.data.map((data: any) => data.date),
            datasets: [
              {
                label: 'Clicks',
                data: this.props.data.map((data: any) => data.clicks),
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

interface ViewLinkStateProps {
  link: string;
  title: string;
  redirectURL: string;
  date: string;
  data: DataTypes[];
}

// interface ViewLinkDispatchProps {
//   updateEmail: (history?: any) => void;
//   updatePassword: (history?: any) => void;
//   ViewLink: (history?: any) => void;
// }

const mapStateToProps = (
  state: AppState,
  ownProps: ViewLinkProps
): ViewLinkStateProps => ({
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
)(ViewLink);
