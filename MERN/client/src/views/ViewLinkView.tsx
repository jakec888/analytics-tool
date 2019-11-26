import * as React from 'react'
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import moment from 'moment';

import { DataTypes } from '../types/links/link';

type Props = {
  linkId: string;
  link: string;
  title: string;
  redirectURL: string;
  date: string;
  data: DataTypes[];
  onDeleteLink: (e: string) => void;
  onUpdateLink: () => void;
};

const ViewLinkView: React.FC<Props> = (props) => {
  const {
    link,
    title,
    redirectURL,
    date,
    data,
    onDeleteLink,
    onUpdateLink
   } = props;

  const DeleteLink = (event: any) => {
    onDeleteLink(event);
  };

  const UpdateLink = () => {
    onUpdateLink()
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}> 
        <div>
          <Card.Text>
            Created On <span className='link-date'>{moment(date).format('LLL')}</span> | (
            <span className='link-time'>
              {moment(new Date(date)).fromNow()}
            </span>
            )
          </Card.Text>
        </div>
        <div>
          <Button onClick={UpdateLink} variant="outline-primary" style={{marginLeft: '10px', marginRight: '10px'}}>Edit</Button>
          <Button onClick={DeleteLink} variant="outline-danger">Delete</Button>
        </div>
      </div>
      <Card.Title>
        <a
          href={link}
          rel='noopener noreferrer'
          target='_blank'
          style={{ textDecoration: 'none', color: 'black' }}
          className='link-title'
        >
          {title}
        </a>
      </Card.Title>
      <InputGroup className='mb-3'>
        <FormControl
          disabled
          value={redirectURL}
          aria-describedby='basic-addon2'
          className='link-redirect'
        />
        <InputGroup.Append>
          <CopyToClipboard text={redirectURL}>
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
          labels: data.map((data) => data.date),
          datasets: [
            {
              label: 'Clicks',
              data: data.map((data) => data.clicks),
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
    </div>
  );
}

export default ViewLinkView;