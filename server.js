import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./SchemaResolvers/Parent-SRs/parent-SR.js";
import redisClient from "./redisClient.js";

import dotenv from "dotenv";
dotenv.config();
export const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    redis: redisClient,
  }),
});

server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
