const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth')

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(express.static(path.join(__dirname, '../client/build')));


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'), function (err) {
        if (err) {
            console.log("sent new version to user")
            res.status(500).send(err)
        }
    })
})

// app.get("/", function (request, response) {
//     response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '/'), function (err) {
//         if (err) {
//             res.status(500).send(err)
//         }
//     })
// })


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

