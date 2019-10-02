import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ListGroup, Row, Col } from 'react-bootstrap';
import moment from 'moment';

import { selectLink } from '../redux/actions/selectedActions.actions';
import { getLinks } from '../redux/actions/linksActions.actions';

import { Link } from '../types/links/link';
import { DataTypes } from '../types/links/link';

import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/rootType.actions';
import { AppState } from '../redux/rootAppState';
import { bindActionCreators } from 'redux';

interface ViewLinksPageProps {
  history?: any;
}

interface ViewLinksPageState {}

type Props = ViewLinksPageProps & LinkStateProps & LinkDispatchProps;

export class ViewLinks extends Component<Props, ViewLinksPageState> {
  componentDidMount() {
    this.props.getLinks(this.props.userId);
  }

  // onViewLink = ({ id, redirectURL, link, title, date, data }) => {
  //   this.props.selectLink(this.props.history, id, redirectURL, link, title, date, data);
  // };

  onViewLink = (selected: Link) => {
    this.props.selectLink(this.props.history, selected);
  };

  // onViewLink = (selectedLink: {
  //   id: string;
  //   redirectURL: string;
  //   link: string;
  //   title: string;
  //   date: string;
  //   data: DataTypes;
  // }) => {
  //   const { id, redirectURL, link, title, date, data } = selectedLink;
  //   this.props.selectLink(this.props.history, id, redirectURL, link, title, date, data);
  // };

  render() {
    return (
      <Fragment>
        <ListGroup variant='flush'>
          {this.props.links
            ? this.props.links.map((link, index) => {
                return (
                  <ListGroup.Item key={index} onClick={() => this.onViewLink(link)}>
                    <Row>
                      <Col sm={8}>{link.title}</Col>
                      <Col
                        sm={4}
                        className='d-flex justify-content-end'
                        style={{ fontStyle: 'italic' }}
                      >
                        ({moment(new Date(link.date)).fromNow()})
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })
            : null}
        </ListGroup>
      </Fragment>
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
  links: state.Link.links
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  getLinks: bindActionCreators(getLinks, dispatch),
  selectLink: bindActionCreators(selectLink, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewLinks);
