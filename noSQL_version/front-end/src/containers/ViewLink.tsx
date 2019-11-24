import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import moment from 'moment';

import { AppState } from '../redux/rootAppState';
import { DataTypes } from '../types/links/link';

interface ViewLinkPageProps {}

interface ViewLinkPageState {}

type Props = ViewLinkPageProps & LinkStateProps;

export class ViewLink extends Component<Props, ViewLinkPageState> {
  render() {
    return (
      <Fragment>
        <div style={{display: 'flex', justifyContent: 'space-between'}}> 
          <div>
            <Card.Text>
              Created On <span className='link-date'>{moment(this.props.date).format('LLL')}</span> | (
              <span className='link-time'>
                {moment(new Date(this.props.date)).fromNow()}
              </span>
              )
            </Card.Text>
          </div>
          <div>
            <Button variant="outline-primary" style={{marginLeft: '10px', marginRight: '10px'}}>Edit</Button>
            <Button variant="outline-danger">Delete</Button>
          </div>
        </div>
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
        {/* <Card.Text>
          <a
            href={this.props.link}
            rel='noopener noreferrer'
            target='_blank'
            style={{ textDecoration: 'none', color: 'black' }}
            className='link-link'
          >
            {this.props.link}
          </a>
        </Card.Text> */}
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
            labels: this.props.data.map((data) => data.date),
            datasets: [
              {
                label: 'Clicks',
                data: this.props.data.map((data) => data.clicks),
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
)(ViewLink);
