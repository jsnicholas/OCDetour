const { AuthenticationError } = require('apollo-server-express')
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { email }) => {
      const params = email ? { email: email } : {}
      return User.find(params);
    },
    activities: async (parent, { email }) => {
      return User.findOne({ email }).populate('savedActivities')
    },
    history: async (parent, { email }) => {
      return User.findOne({ email }).populate('activityHistory')
    },
    me: async (parent, args, context) => {
      return await User.findById(context.user._id)
    }
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

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // console.log(user)
      const token = signToken(user);

      return { token, user }
    },
    saveActivity: async (parent, args, context) => {
      // console.log(context)
      // console.log(`Save activity args are: ${JSON.stringify(args)}`)
      if (context.user) {
        const returnedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedActivities: args } },
          { new: true, runValidators: true }
        );
        return returnedUser.savedActivities;
      }
      throw new AuthenticationError('Please log in to perform this action')
    },

    deleteActivity: async (parent, args, context) => {
      // console.log(context)
      // console.log(`Trying to delete an activity with this ID: ${JSON.stringify(args._id)}`)
      if (context.user) {
        // console.log(`user context: ${context.user._id}`)
        try {
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedActivities: { _id: args._id } } },
          );
        } catch {
          console.log('error deleting activity')
        }
      }
    },
    updateHistory: async (parent, args, context) => {
      if (context.user) {
        const activity = await User.create(args);

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { activityHistory: args } },
          { new: true, runValidators }
        );
        return activity;
      }
      throw new AuthenticationError('Please log in to perform this action')
    }
  }
};

module.exports = resolvers;