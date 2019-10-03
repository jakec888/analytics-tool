import { Link } from "./models/link";

export const resolvers = {
  Query: {
    getLinks: (_, {userId}) => Link.find({userId:userId})
  },
  Mutation: {
    createLink: async (_, { userId, redirectId, redirectURL, link, title, date }) => {
      const newLink = new Link({ userId, redirectId, redirectURL, link, title, date, data: [] });
      await newLink.save();
      return newLink;
    }
  }
};