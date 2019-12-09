/*
 *
 * This is the "page" that handles the logic for editing the selected link.
 *
 */
import * as React from 'react';
import {Form, Button} from 'react-bootstrap';

type Props = {
  title: string;
  onEdit: (e: string) => void;
  onEditTitle: (e: string) => void;
};

const EditLinkView: React.FC<Props> = props => {
  const {title, onEdit, onEditTitle} = props;

  const Edit = (event: any) => {
    onEdit(event);
  };

  const EditTitle = (event: any) => {
    onEditTitle(event);
  };

  return (
    <div>
      <Form onSubmit={Edit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            placeholder="Title"
            onChange={EditTitle}
            value={title}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditLinkView;
