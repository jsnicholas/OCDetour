const { gql } = require('apollo-server-express');

const { Date } = require('graphql-scalars')

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
    _id: ID
    activityType: String
    timeInSeconds: Int
  }

  type historySchema {
    _id: ID
    activityType: String
    timeSpent: Int
    dateCompleted: Date
  }

  type Query {
    user: [User]
  }

  type Mutation {
    createUser(email: String!, password: String): User
    login(email: String!, password: String): User
    saveActivity(activityType: String!, timeInSeconds: Int!): User
    deleteActivity(activityType: String!, timeInSeconds: Int!): User
  }
`;

module.exports = typeDefs;