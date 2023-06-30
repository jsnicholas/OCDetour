const { gql } = require('apollo-server-express');

// const { Time } = require('graphql-scalars')

const typeDefs = gql`

scalar Time,

  type User {
    _id: ID!
    email: String!
    password: String
    savedActivities: [Activity]
  }

  type Activity {
    _id: ID!
    activityType: String!
    time: Time!
  }

  type Query {
    user: [User]
  }

  type Mutation {
    createUser(email: String!, password: String): User
    login(email: String!, password: String): User
    saveActivity(activityType: String!, time: Time!): User
    deleteActivity(activityType: String!, time: Time!): User
  }
`;

module.exports = typeDefs;