const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String
    savedActivities: [Activities]
  }

  type Activity {
    _id: ID!
    activityType: String!
    time: Number!
  }

  type Query {
    user: [User]
  }

  type Mutation {
    createUser(email: String!, password: String): User
    login(email: String!, password: String): User
    saveActivity(activityType: String!, time: Number!): User
    deleteActivity(activityType: String!, time: Number!): User
  }
`;

module.exports = typeDefs;


// const typeDefs = gql`
//   type Tech {
//     _id: ID!
//     name: String!
//   }

//   type Matchup {
//     _id: ID!
//     tech1: String!
//     tech2: String!
//     tech1_votes: Int
//     tech2_votes: Int
//   }

//   type Query {
//     tech: [Tech]
//     matchups(_id: String): [Matchup]
//   }

//   type Mutation {
//     createMatchup(tech1: String!, tech2: String!): Matchup
//     createVote(_id: String!, techNum: Int!): Matchup
//   }
// `;

// module.exports = typeDefs;
