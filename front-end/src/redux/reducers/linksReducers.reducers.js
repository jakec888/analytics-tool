import { GET_LINKS } from "../actions/linksActions.actions";

const initialState = {
  links: [
    {
      _id: 1,
      link: "https://nfl.com",
      title: "Something NFL",
      date: "Sun, 8 Aug 2019 08:06:36 GMT",
      data: []
    },
    {
      _id: 2,
      link: "https://stackoverflow.com/",
      title: "Stack Overflow",
      date: "Sun, 9 Aug 2019 07:06:36 GMT",
      data: [
        {
          date: "1/12/2019",
          clicks: 617594
        },
        {
          date: "2/30/2019",
          clicks: 181045
        },
        {
          date: "4/14/2019",
          clicks: 153060
        },
        {
          date: "5/23/2019",
          clicks: 106519
        },
        {
          date: "6/2/2019",
          clicks: 105162
        },
        {
          date: "7/4/2019",
          clicks: 95072
        }
      ]
    },
    {
      _id: 3,
      link: "https://react-bootstrap.github.io",
      title: "React Bootstrap",
      date: "Sun, 10 Aug 2019 03:06:36 GMT",
      data: [
        {
          date: "1/12/2019",
          clicks: 617594
        },
        {
          date: "2/30/2019",
          clicks: 181045
        },
        {
          date: "4/14/2019",
          clicks: 153060
        },
        {
          date: "5/23/2019",
          clicks: 106519
        },
        {
          date: "6/2/2019",
          clicks: 105162
        },
        {
          date: "7/4/2019",
          clicks: 95072
        }
      ]
    },
    {
      _id: 4,
      link: "https://www.nba.com/news",
      title: "NBA News",
      date: "Sun, 11 Aug 2019 02:06:36 GMT",
      data: [
        {
          date: "1/12/2019",
          clicks: 617594
        },
        {
          date: "2/30/2019",
          clicks: 181045
        },
        {
          date: "4/14/2019",
          clicks: 153060
        },
        {
          date: "5/23/2019",
          clicks: 106519
        },
        {
          date: "6/2/2019",
          clicks: 105162
        },
        {
          date: "7/4/2019",
          clicks: 95072
        }
      ]
    },
    {
      _id: 5,
      link: "https://www.baltimoreravens.com/",
      title: "Ravens",
      date: "Sun, 12 Aug 2019 05:06:36 GMT",
      data: [
        {
          date: "1/12/2019",
          clicks: 617594
        },
        {
          date: "2/30/2019",
          clicks: 181045
        },
        {
          date: "4/14/2019",
          clicks: 153060
        },
        {
          date: "5/23/2019",
          clicks: 106519
        },
        {
          date: "6/2/2019",
          clicks: 105162
        },
        {
          date: "7/4/2019",
          clicks: 95072
        }
      ]
    }
  ]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LINKS:
      return { ...state, links: payload.links };
    default:
      return state;
  }
};
