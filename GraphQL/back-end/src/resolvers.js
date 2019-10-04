import uuid from "uuid";
import { Link } from "./models/link";

export const resolvers = {
  Query: {
    getLinks: (_, {userId}) => Link.find({userId:userId})
  },
  Mutation: {
    createLink: async (_, { userId, link, title, date }) => {
      const protocol = 'http'
      const host = 'localhost:3001'

      const redirectId = uuid.v4()

      console.log(redirectId)
    
      const redirectURL = `${protocol}://${host}/redirect/${redirectId}`

      const newLink = new Link({ 
        redirectId,
        redirectURL,
        userId,
        link,
        title,
        date
      });
      await newLink.save();
      return newLink;
    }
  }
};