import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const runServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://localhost:27017/test8", {
    useNewUrlParser: true
  });

  app.listen({ port: 4000 }, () =>
    console.log(`GraphQL Server Ready @ http://localhost:4000${server.graphqlPath}`)
  );
};

runServer();