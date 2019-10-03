import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    links: [Link!]!
  }
  type Link {
    id: ID!
    userId: String!,
    redirectId: String!,
    redirectURL: String!,
    link: String!,
    title: String!,
    date: [],
  }
  type Mutation {
    createLink(
      userId: String!,
      redirectId: String!,
      redirectURL: String!,
      link: String!,
      title: String!,
    ): Link!
  }
`;