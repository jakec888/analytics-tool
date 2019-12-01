// tslint:disable
// this is an auto generated file. This will be overwritten

export const getLink = `query GetLink($id: ID!) {
  getLink(id: $id) {
    id
    userId
    redirectId
    redirectURL
    link
    title
    date
    data {
      items {
        id
        date
        clicks
      }
      nextToken
    }
  }
}
`;
export const listLinks = `query ListLinks(
  $filter: ModelLinkFilterInput
  $limit: Int
  $nextToken: String
) {
  listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      redirectId
      redirectURL
      link
      title
      date
      data {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getData = `query GetData($id: ID!) {
  getData(id: $id) {
    id
    date
    clicks
    link {
      id
      userId
      redirectId
      redirectURL
      link
      title
      date
      data {
        nextToken
      }
    }
  }
}
`;
export const listDatas = `query ListDatas(
  $filter: ModelDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      clicks
      link {
        id
        userId
        redirectId
        redirectURL
        link
        title
        date
      }
    }
    nextToken
  }
}
`;
