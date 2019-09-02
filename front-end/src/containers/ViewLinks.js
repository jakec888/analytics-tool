import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ListGroup, Row, Col } from "react-bootstrap";
import moment from "moment";

import { selectLink } from "../redux/actions/selectedActions.actions";
import { getLinks } from "../redux/actions/linksActions.actions";

export class ViewLinks extends Component {
  componentWillMount() {
    this.props.getLinks();
  }

  onViewLink = ({ _id, link, title, date, data }) => {
    this.props.selectLink(this.props.history, _id, link, title, date, data);
  };

  render() {
    return (
      <Fragment>
        <ListGroup variant="flush">
          {this.props.links.map(link => {
            return (
              <ListGroup.Item
                key={link._id}
                onClick={() => this.onViewLink(link)}
              >
                <Row>
                  <Col sm={8}>{link.title}</Col>
                  <Col
                    sm={4}
                    className="d-flex justify-content-end"
                    style={{ fontStyle: "italic" }}
                  >
                    ({moment(new Date(link.date)).fromNow()})
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  links: state.Link.links
});

const mapDispatchToProps = {
  getLinks: getLinks,
  selectLink: selectLink
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewLinks);
