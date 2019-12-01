// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateLink = `subscription OnCreateLink {
  onCreateLink {
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
export const onUpdateLink = `subscription OnUpdateLink {
  onUpdateLink {
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
export const onDeleteLink = `subscription OnDeleteLink {
  onDeleteLink {
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
export const onCreateData = `subscription OnCreateData {
  onCreateData {
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
export const onUpdateData = `subscription OnUpdateData {
  onUpdateData {
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
export const onDeleteData = `subscription OnDeleteData {
  onDeleteData {
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
