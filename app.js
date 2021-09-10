"use strict";
import graphql from "graphql";
import express from "express";
import expressGraphQl from "express-graphql";
const { GraphQLSchema } = graphql;
import { query } from "./schemas/queries";
import { mutation } from "./schemas/mutations";

const schema = new GraphQLSchema({
  query,
  mutation
});

var app = express();
app.use(
  '/',
  expressGraphQl({
    schema: schema,
    graphiql: true
  })
);

app.listen(3000, () =>
  console.log('GraphQL server running on localhost:3000')
);