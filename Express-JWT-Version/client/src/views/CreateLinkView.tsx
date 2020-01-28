/*
 *
 * This file handles the UI/view for creating a link
 *
 */
import * as React from 'react';
import {Card, Form, Button, InputGroup, FormControl} from 'react-bootstrap';

type Props = {
  title: string;
  link: string;
  onUpdateTitle: (e: string) => void;
  onUpdateLink: (e: string) => void;
  onSubmitLink: (e: string) => void;
};

const CreateLinkView: React.FC<Props> = props => {
  const {title, link, onUpdateTitle, onUpdateLink, onSubmitLink} = props;

  const SubmitLink = (event: any) => {
    onSubmitLink(event);
  };

  const UpdateLink = (event: any) => {
    onUpdateLink(event);
  };

  const UpdateTitle = (event: any) => {
    onUpdateTitle(event);
  };

  return (
    <div>
      <Card.Title>Create Link</Card.Title>
      <Form onSubmit={SubmitLink}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">Title</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="basic-title"
            aria-describedby="basic-addon3"
            onChange={UpdateTitle}
            value={title}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">Your URL</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="basic-url"
            aria-describedby="basic-addon3"
            onChange={UpdateLink}
            value={link}
          />
        </InputGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateLinkView;
