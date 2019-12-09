/*
 *
 * This is the "page" that handles the logic for viewing all links from the user.
 *
 */
import * as React from 'react';
import {ListGroup, Row, Col} from 'react-bootstrap';
import moment from 'moment';

import {Link} from '../types/links/link';

type Props = {
  links: Link[];
  history: any;
  selectLink: (history: any, selected: Link) => void;
};

const ViewLinksView: React.FC<Props> = props => {
  const {links, history, selectLink} = props;

  const ViewLink = (selected: Link) => {
    selectLink(history, selected);
  };

  return (
    <div>
      <ListGroup variant="flush">
        {links
          ? links.map((link, index) => {
              return (
                <ListGroup.Item key={index} onClick={() => ViewLink(link)}>
                  <Row>
                    <Col sm={8}>{link.title}</Col>
                    <Col
                      sm={4}
                      className="d-flex justify-content-end"
                      style={{fontStyle: 'italic'}}>
                      ({moment(new Date(link.date)).fromNow()})
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })
          : null}
      </ListGroup>
    </div>
  );
};

export default ViewLinksView;
