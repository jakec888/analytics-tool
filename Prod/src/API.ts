/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateLinkInput = {
  id?: string | null,
  userId?: string | null,
  redirectId?: string | null,
  redirectURL?: string | null,
  link?: string | null,
  title?: string | null,
  date?: string | null,
};

export type UpdateLinkInput = {
  id: string,
  userId?: string | null,
  redirectId?: string | null,
  redirectURL?: string | null,
  link?: string | null,
  title?: string | null,
  date?: string | null,
};

export type DeleteLinkInput = {
  id?: string | null,
};

export type CreateDataInput = {
  id?: string | null,
  date?: string | null,
  clicks?: number | null,
  dataLinkId?: string | null,
};

export type UpdateDataInput = {
  id: string,
  date?: string | null,
  clicks?: number | null,
  dataLinkId?: string | null,
};

export type DeleteDataInput = {
  id?: string | null,
};

export type ModelLinkFilterInput = {
  id?: ModelIDFilterInput | null,
  userId?: ModelStringFilterInput | null,
  redirectId?: ModelStringFilterInput | null,
  redirectURL?: ModelStringFilterInput | null,
  link?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  date?: ModelStringFilterInput | null,
  and?: Array< ModelLinkFilterInput | null > | null,
  or?: Array< ModelLinkFilterInput | null > | null,
  not?: ModelLinkFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelDataFilterInput = {
  id?: ModelIDFilterInput | null,
  date?: ModelStringFilterInput | null,
  clicks?: ModelIntFilterInput | null,
  and?: Array< ModelDataFilterInput | null > | null,
  or?: Array< ModelDataFilterInput | null > | null,
  not?: ModelDataFilterInput | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateLinkMutationVariables = {
  input: CreateLinkInput,
};

export type CreateLinkMutation = {
  createLink:  {
    __typename: "Link",
    id: string,
    userId: string | null,
    redirectId: string | null,
    redirectURL: string | null,
    link: string | null,
    title: string | null,
    date: string | null,
    data:  {
      __typename: "ModelDataConnection",
      items:  Array< {
        __typename: "Data",
        id: string,
        date: string | null,
        clicks: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateLinkMutationVariables = {
  input: UpdateLinkInput,
};

export type UpdateLinkMutation = {
  updateLink:  {
    __typename: "Link",
    id: string,
    userId: string | null,
    redirectId: string | null,
    redirectURL: string | null,
    link: string | null,
    title: string | null,
    date: string | null,
    data:  {
      __typename: "ModelDataConnection",
      items:  Array< {
        __typename: "Data",
        id: string,
        date: string | null,
        clicks: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteLinkMutationVariables = {
  input: DeleteLinkInput,
};

export type DeleteLinkMutation = {
  deleteLink:  {
    __typename: "Link",
    id: string,
    userId: string | null,
    redirectId: string | null,
    redirectURL: string | null,
    link: string | null,
    title: string | null,
    date: string | null,
    data:  {
      __typename: "ModelDataConnection",
      items:  Array< {
        __typename: "Data",
        id: string,
        date: string | null,
        clicks: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateDataMutationVariables = {
  input: CreateDataInput,
};

export type CreateDataMutation = {
  createData:  {
    __typename: "Data",
    id: string,
    date: string | null,
    clicks: number | null,
    link:  {
      __typename: "Link",
      id: string,
      userId: string | null,
      redirectId: string | null,
      redirectURL: string | null,
      link: string | null,
      title: string | null,
      date: string | null,
      data:  {
        __typename: "ModelDataConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateDataMutationVariables = {
  input: UpdateDataInput,
};

export type UpdateDataMutation = {
  updateData:  {
    __typename: "Data",
    id: string,
    date: string | null,
    clicks: number | null,
    link:  {
      __typename: "Link",
      id: string,
      userId: string | null,
      redirectId: string | null,
      redirectURL: string | null,
      link: string | null,
      title: string | null,
      date: string | null,
      data:  {
        __typename: "ModelDataConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteDataMutationVariables = {
  input: DeleteDataInput,
};

export type DeleteDataMutation = {
  deleteData:  {
    __typename: "Data",
    id: string,
    date: string | null,
    clicks: number | null,
    link:  {
      __typename: "Link",
      id: string,
      userId: string | null,
      redirectId: string | null,
      redirectURL: string | null,
      link: string | null,
      title: string | null,
      date: string | null,
      data:  {
        __typename: "ModelDataConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetLinkQueryVariables = {
  id: string,
};

export type GetLinkQuery = {
  getLink:  {
    __typename: "Link",
    id: string,
    userId: string | null,
    redirectId: string | null,
    redirectURL: string | null,
    link: string | null,
    title: string | null,
    date: string | null,
    data:  {
      __typename: "ModelDataConnection",
      items:  Array< {
        __typename: "Data",
        id: string,
        date: string | null,
        clicks: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListLinksQueryVariables = {
  filter?: ModelLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLinksQuery = {
  listLinks:  {
    __typename: "ModelLinkConnection",
    items:  Array< {
      __typename: "Link",
      id: string,
      userId: string | null,
      redirectId: string | null,
      redirectURL: string | null,
      link: string | null,
      title: string | null,
      date: string | null,
      data:  {
        __typename: "ModelDataConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetDataQueryVariables = {
  id: string,
};

export type GetDataQuery = {
  getData:  {
    __typename: "Data",
    id: string,
    date: string | null,
    clicks: number | null,
    link:  {
      __typename: "Link",
      id: string,
      userId: string | null,
      redirectId: string | null,
      redirectURL: string | null,
      link: string | null,
      title: string | null,
      date: string | null,
      data:  {
        __typename: "ModelDataConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListDatasQueryVariables = {
  filter?: ModelDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDatasQuery = {
  listDatas:  {
    __typename: "ModelDataConnection",
    items:  Array< {
      __typename: "Data",
      id: string,
      date: string | null,
      clicks: number | null,
      link:  {
        __typename: "Link",
        id: string,
        userId: string | null,
        redirectId: string | null,
        redirectURL: string | null,
        link: string | null,
        title: string | null,
        date: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateLinkSubscription = {
  onCreateLink:  {
    __typename: "Link",
    id: string,
    userId: string | null,
    redirectId: string | null,
    redirectURL: string | null,
    link: string | null,
    title: string | null,
    date: string | null,
    data:  {
      __typename: "ModelDataConnection",
      items:  Array< {
        __typename: "Data",
        id: string,
        date: string | null,
        clicks: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateLinkSubscription = {
  onUpdateLink:  {
    __typename: "Link",
    id: string,
    userId: string | null,
    redirectId: string | null,
    redirectURL: string | null,
    link: string | null,
    title: string | null,
    date: string | null,
    data:  {
      __typename: "ModelDataConnection",
      items:  Array< {
        __typename: "Data",
        id: string,
        date: string | null,
        clicks: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteLinkSubscription = {
  onDeleteLink:  {
    __typename: "Link",
    id: string,
    userId: string | null,
    redirectId: string | null,
    redirectURL: string | null,
    link: string | null,
    title: string | null,
    date: string | null,
    data:  {
      __typename: "ModelDataConnection",
      items:  Array< {
        __typename: "Data",
        id: string,
        date: string | null,
        clicks: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateDataSubscription = {
  onCreateData:  {
    __typename: "Data",
    id: string,
    date: string | null,
    clicks: number | null,
    link:  {
      __typename: "Link",
      id: string,
      userId: string | null,
      redirectId: string | null,
      redirectURL: string | null,
      link: string | null,
      title: string | null,
      date: string | null,
      data:  {
        __typename: "ModelDataConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateDataSubscription = {
  onUpdateData:  {
    __typename: "Data",
    id: string,
    date: string | null,
    clicks: number | null,
    link:  {
      __typename: "Link",
      id: string,
      userId: string | null,
      redirectId: string | null,
      redirectURL: string | null,
      link: string | null,
      title: string | null,
      date: string | null,
      data:  {
        __typename: "ModelDataConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteDataSubscription = {
  onDeleteData:  {
    __typename: "Data",
    id: string,
    date: string | null,
    clicks: number | null,
    link:  {
      __typename: "Link",
      id: string,
      userId: string | null,
      redirectId: string | null,
      redirectURL: string | null,
      link: string | null,
      title: string | null,
      date: string | null,
      data:  {
        __typename: "ModelDataConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
