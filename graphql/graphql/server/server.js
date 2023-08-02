require("dotenv").config()
const cors = require('cors');
const express = require('express');
const db = require('./db');
const {ApolloServer,gql } = require('apollo-server-express');
const port = process.env.PORT_NUM || 9000;
const app = express();
const resolvers=require('./resolvers')
const typeDefs=require('./schemas')
app.use(cors());

async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

startServer()


app.listen(
   port, () => console.info(
      `Server started on port ${port}`
   )
);