import express from "express";
import mongoose from "mongoose";
import cors from "cors"

import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

import redirect from "./api/redirect"

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.use('/redirect', redirect)

app.use((req, res, next) => {
  res.status(404).json({ error: "Sorry can't find that!" })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send({ error: err.stack })
})

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

mongoose.connect("mongodb://localhost:27017/bitlyclone",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
mongoose.connection.once('open', () => {
  console.log('connected to mongoose database: bitlyclone')
})

app.listen({ port: 3001 }, () =>
  console.log(`GraphQL Server: http://localhost:3001${server.graphqlPath}`)
);

// const runServer = async () => {
//   const app = express();

//   app.use(express.json())
//   app.use(express.urlencoded({ extended: false }))

//   app.use(cors())

//   app.use('/redirect', redirect)

//   app.use((req, res, next) => {
//     res.status(404).json({ error: "Sorry can't find that!" })
//   })

//   app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send({ error: err.stack })
//   })

//   const server = new ApolloServer({
//     typeDefs,
//     resolvers
//   });

//   server.applyMiddleware({ app });

//   await mongoose.connect("mongodb://localhost:27017/bitlyclone",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     }
//   );
//   mongoose.connection.once('open', () => {
//     console.log('connected to mongoose database: bitlyclone')
//   })

//   app.listen({ port: 3001 }, () =>
//     console.log(`GraphQL Server: http://localhost:3001${server.graphqlPath}`)
//   );
// };

// runServer();