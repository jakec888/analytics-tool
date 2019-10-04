import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Data {
    clicks: Int,
    date: String
  }

  type Link {
    id: ID!
    userId: String!,
    redirectId: String!,
    redirectURL: String!,
    link: String!,
    title: String!,
    date: String!,
    data: [Data]
  }

  type Query {
    getLinks(userId: String!): [Link]
  }

  type Mutation {
    createLink(
      userId: String!,
      link: String!,
      title: String!,
      date: String!
    ): Link
  }
`;