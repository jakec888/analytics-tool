import uuidv4 from 'uuid/v4';

import linkActions from '../actions/linkActions.actions';

const initialState = {
  id: '',
  link: '',
  title: '',
  date: '',
  data: [],
  links: [
    {
      id: 1,
      link: 'https://nfl.com',
      title: 'Something NFL',
      date: 'Sun, 8 Aug 2019 08:06:36 GMT',
      data: [
        {
          date: '1/12/2019',
          clicks: 617594
        },
        {
          date: '2/30/2019',
          clicks: 181045
        },
        {
          date: '4/14/2019',
          clicks: 153060
        },
        {
          date: '5/23/2019',
          clicks: 106519
        },
        {
          date: '6/2/2019',
          clicks: 105162
        },
        {
          date: '7/4/2019',
          clicks: 95072
        }
      ]
    },
    {
      id: 2,
      link: 'https://stackoverflow.com/',
      title: 'Stack Overflow',
      date: 'Sun, 9 Aug 2019 07:06:36 GMT',
      data: [
        {
          date: '1/12/2019',
          clicks: 617594
        },
        {
          date: '2/30/2019',
          clicks: 181045
        },
        {
          date: '4/14/2019',
          clicks: 153060
        },
        {
          date: '5/23/2019',
          clicks: 106519
        },
        {
          date: '6/2/2019',
          clicks: 105162
        },
        {
          date: '7/4/2019',
          clicks: 95072
        }
      ]
    },
    {
      id: 3,
      link: 'https://react-bootstrap.github.io',
      title: 'React Bootstrap',
      date: 'Sun, 10 Aug 2019 03:06:36 GMT',
      data: [
        {
          date: '1/12/2019',
          clicks: 617594
        },
        {
          date: '2/30/2019',
          clicks: 181045
        },
        {
          date: '4/14/2019',
          clicks: 153060
        },
        {
          date: '5/23/2019',
          clicks: 106519
        },
        {
          date: '6/2/2019',
          clicks: 105162
        },
        {
          date: '7/4/2019',
          clicks: 95072
        }
      ]
    },
    {
      id: 4,
      link: 'https://www.nba.com/news',
      title: 'NBA News',
      date: 'Sun, 11 Aug 2019 02:06:36 GMT',
      data: [
        {
          date: '1/12/2019',
          clicks: 617594
        },
        {
          date: '2/30/2019',
          clicks: 181045
        },
        {
          date: '4/14/2019',
          clicks: 153060
        },
        {
          date: '5/23/2019',
          clicks: 106519
        },
        {
          date: '6/2/2019',
          clicks: 105162
        },
        {
          date: '7/4/2019',
          clicks: 95072
        }
      ]
    },
    {
      id: 5,
      link: 'https://www.baltimoreravens.com/',
      title: 'Ravens',
      date: 'Sun, 12 Aug 2019 05:06:36 GMT',
      data: [
        {
          date: '1/12/2019',
          clicks: 617594
        },
        {
          date: '2/30/2019',
          clicks: 181045
        },
        {
          date: '4/14/2019',
          clicks: 153060
        },
        {
          date: '5/23/2019',
          clicks: 106519
        },
        {
          date: '6/2/2019',
          clicks: 105162
        },
        {
          date: '7/4/2019',
          clicks: 95072
        }
      ]
    }
  ]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case linkActions.UPDATE_LINK:
      return { ...state, link: payload.link };
    case linkActions.UPDATE_TITLE:
      return { ...state, title: payload.title };
    case linkActions.CREATE_LINK:
      return {
        ...state,
        id: uuidv4(),
        link: payload.link,
        title: payload.title,
        date: payload.date
      };
    case linkActions.SELECT_LINK:
      return {
        ...state,
        id: payload.id,
        link: payload.link,
        title: payload.title,
        date: payload.date,
        data: payload.data
      };
    default:
      return state;
  }
};
