import { Links } from "./models/links";

export const resolvers = {
  Query: {
    links: () => Links.find()
  },
  Mutation: {
    createLink: async (_, { userId, redirectId, redirectURL, link, title, date }) => {
      const newLink = new Links({ userId, redirectId, redirectURL, link, title, date, data: [] });
      await newLink.save();
      return newLink;
    }
  }
};