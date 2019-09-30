import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ListGroup, Row, Col } from 'react-bootstrap';
import moment from 'moment';

import { selectLink } from '../redux/actions/selectedActions.actions';
import { getLinks } from '../redux/actions/linksActions.actions';

import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../Root';
import { SelectedActions } from '../types/selected/selected.actions';
import { LinksTypes } from '../types/links/links';
import { DataTypes } from '../types/links/data';

interface ViewLinksProps {
  history?: any;
  links: LinksTypes[];
}

interface ViewLinksState {}

type Props = ViewLinksProps & ViewLinksStateProps & ViewLinksDispatchProps;

export class ViewLinks extends Component<Props, ViewLinksState> {
  componentDidMount() {
    this.props.getLinks(this.props.userId);
  }

  onViewLink = ({ _id, redirectURL, link, title, date, data }: LinksTypes) => {
    this.props.selectLink(
      this.props.history,
      _id,
      redirectURL,
      link,
      title,
      date,
      data
    );
  };

  render() {
    return (
      <Fragment>
        <ListGroup variant='flush'>
          {this.props.links
            ? this.props.links.map((link) => {
                return (
                  <ListGroup.Item key={link._id} onClick={() => this.onViewLink(link)}>
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

interface ViewLinksStateProps {
  userId: string;
  links: LinksTypes[];
}

interface ViewLinksDispatchProps {
  getLinks: (history?: any) => void;
  selectLink: (
    history: any,
    _id: string,
    redirectURL: string,
    link: string,
    title: string,
    date: string,
    data: DataTypes[]
  ) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: ViewLinksProps
): ViewLinksStateProps => ({
  userId: state.Auth.userId,
  links: state.Link.links
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, SelectedActions>,
  ownProps: ViewLinksProps
): ViewLinksDispatchProps => ({
  getLinks: bindActionCreators(getLinks, dispatch),
  selectLink: bindActionCreators(selectLink, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewLinks);
