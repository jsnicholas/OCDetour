const { AuthenticationError } = require('apollo-server-express')
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { email }) => {
      return User.findOne({ email: email });
    },
  },
  Mutation: {
    createUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
      const token = signToken(user);
      return { token, user }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Cannot locate this user');
      }

      const token = signToken(user);

      return { token, user }
    },
    saveActivity: async (parent, ars, context) => {
      if (context.user) {
        const activity = await User.create(args);

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedActivities: args } },
          { new: true, runValidators }
        );
        return activity;
      }
      throw new AuthenticationError('Please log in to perform this action')
    },
    deleteActivity: async (parent, args, context) => {
      if (context.user) {
        const activity = await User.findOneAndUpdate(
          { _id: context.user_id },
          { $pull: { savedActivities: args } },
          { new: true }
        );
        return activity;
      }
      throw new AuthenticationError('Please log in to perform this action')
    }
  }
};

module.exports = resolvers;


// const { Tech, Matchup } = require('../models');

// const resolvers = {
//   Query: {
//     tech: async () => {
//       return Tech.find({});
//     },
//     matchups: async (parent, { _id }) => {
//       const params = _id ? { _id } : {};
//       return Matchup.find(params);
//     },
//   },
//   Mutation: {
//     createMatchup: async (parent, args) => {
//       const matchup = await Matchup.create(args);
//       return matchup;
//     },
//     createVote: async (parent, { _id, techNum }) => {
//       const vote = await Matchup.findOneAndUpdate(
//         { _id },
//         { $inc: { [`tech${techNum}_votes`]: 1 } },
//         { new: true }
//       );
//       return vote;
//     },
//   },
// };

// module.exports = resolvers;
