// tslint:disable
// this is an auto generated file. This will be overwritten

export const createLink = `mutation CreateLink($input: CreateLinkInput!) {
  createLink(input: $input) {
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
export const updateLink = `mutation UpdateLink($input: UpdateLinkInput!) {
  updateLink(input: $input) {
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
export const deleteLink = `mutation DeleteLink($input: DeleteLinkInput!) {
  deleteLink(input: $input) {
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
export const createData = `mutation CreateData($input: CreateDataInput!) {
  createData(input: $input) {
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
export const updateData = `mutation UpdateData($input: UpdateDataInput!) {
  updateData(input: $input) {
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
export const deleteData = `mutation DeleteData($input: DeleteDataInput!) {
  deleteData(input: $input) {
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
