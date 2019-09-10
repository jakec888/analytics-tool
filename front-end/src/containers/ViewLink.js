import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Card, InputGroup, FormControl, Button } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { CopyToClipboard } from "react-copy-to-clipboard";

import moment from "moment";

export class ViewLink extends Component {
  render() {
    return (
      <Fragment>
        <Card.Text>
          Created On <span className="link-date">{this.props.date}</span> | (
          <span className="link-time">
            {moment(new Date(this.props.date)).fromNow()}
          </span>
          )
        </Card.Text>
        <Card.Title>
          <a
            href={this.props.link}
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
            className="link-title"
          >
            {this.props.title}
          </a>
        </Card.Title>
        <Card.Text>
          <a
            href={this.props.link}
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
            className="link-link"
          >
            {this.props.link}
          </a>
        </Card.Text>
        <InputGroup className="mb-3">
          <FormControl
            disabled
            value={this.props.redirectURL}
            aria-describedby="basic-addon2"
            className="link-redirect"
          />
          <InputGroup.Append>
            <CopyToClipboard text={this.props.redirectURL}>
              <Button
                variant="outline-secondary"
                onClick={() => alert("Copied To Clipboard")}
              >
                Copy
              </Button>
            </CopyToClipboard>
          </InputGroup.Append>
        </InputGroup>
        <Bar
          data={{
            labels: this.props.data.map(data => data.date),
            datasets: [
              {
                label: "Clicks",
                data: this.props.data.map(data => data.clicks),
                backgroundColor: "#147afe"
              }
            ]
          }}
          options={{
            title: {
              display: true,
              text: "Link Statistics",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  link: state.Selected.link,
  title: state.Selected.title,
  redirectURL: state.Selected.redirectURL,
  date: state.Selected.date,
  data: state.Selected.data
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewLink);
