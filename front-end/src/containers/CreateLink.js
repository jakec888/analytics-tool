import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Card, Form, Button, InputGroup, FormControl } from "react-bootstrap";

import {
  updateLink,
  updateTitle,
  createLink
} from "../redux/actions/selectedActions.actions";

export class CreateLink extends Component {
  onUpdateTitle = event => {
    this.props.updateTitle(event.target.value);
  };

  onUpdateLink = event => {
    this.props.updateLink(event.target.value);
  };

  onSubmitLink = event => {
    event.preventDefault();
    this.props.createLink(
      this.props.selectedLink,
      this.props.userId,
      this.props.history
    );
  };

  render() {
    return (
      <Fragment>
        <Card.Title>Create Link</Card.Title>
        <Form onSubmit={this.onSubmitLink}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon3">Title</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id="basic-url"
              aria-describedby="basic-addon3"
              onChange={this.onUpdateTitle}
              value={this.props.title}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon3">Your URL</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id="basic-url"
              aria-describedby="basic-addon3"
              onChange={this.onUpdateLink}
              value={this.props.link}
            />
          </InputGroup>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  selectedLink: state.Selected,
  userId: state.Auth.userId,
  title: state.Link.title,
  link: state.Link.link
});

const mapDispatchToProps = {
  updateLink: updateLink,
  updateTitle: updateTitle,
  createLink: createLink
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateLink);
