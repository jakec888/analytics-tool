import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Button, InputGroup, FormControl } from 'react-bootstrap';

import axios from 'axios';
import cheerio from 'cheerio';

export class CreateLink extends Component {
  getTitle = () => {
    axios
      .get('https://www.nfl.com/')
      .then((result) => {
        const html = result.data;
        const $ = cheerio.load(html);

        var title = $(html)
          .filter('title')
          .text();

        console.log(title);
      })
      .catch((err) => {
        console.log('error');
        console.log(err);
      });
  };

  render() {
    return (
      <Fragment>
        <Card.Title>Create Link</Card.Title>
        <Form onSubmit={this.onSignUp}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon3">Your URL</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateLink);
