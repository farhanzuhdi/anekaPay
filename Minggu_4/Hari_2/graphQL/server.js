const express = require("express")
var { graphqlHTTP } = require('express-graphql');
const mongoose = require("mongoose")
const graphqlSchema = require("./schema")
const graphqlResolvers = require("./resolvers")

const app = express()

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
)

mongoose.connect('mongodb://localhost:27017/db_buku', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('Connect db success.') }
    else { console.log('Error in DB connection : ' + err) }
});

app.listen(3000, () => console.log("Server is running on localhost:3000"))