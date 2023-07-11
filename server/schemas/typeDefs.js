const { gql } = require('apollo-server-express');

// const { Date } = require('graphql-scalars')

const typeDefs = gql`

  scalar Date

  type User {
    _id: ID!
    email: String!
    password: String
    savedActivities: [activitySchema]!
    activityHistory: [historySchema]!
  }

  type activitySchema {
    _id: ID!
    activityType: String!
    timeInSeconds: Int!
    activityDescription: String!
  }

  type historySchema {
    _id: ID!
    activityType: String!
    timeSpent: Int!
    dateCompleted: Date!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(email: String): [User]
    activities(email: String): [activitySchema]
    history(email: String): [historySchema]
  }

  type Mutation {
    createUser(email: String!, password: String!): Auth,
    login(email: String!, password: String!): Auth,
    saveActivity(activityType: String!,activityDescription: String!, timeInSeconds: Int!): [activitySchema],
    deleteActivity(activityType: String!, timeInSeconds: Int!): [activitySchema]
    updateHistory(activityType: String!, timeSpent: Int!, dateCompleted: Date!): [historySchema]
  }
`;

module.exports = typeDefs;