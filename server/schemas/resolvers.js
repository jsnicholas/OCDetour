const { AuthenticationError } = require('apollo-server-express')
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { email }) => {
      console.log(`this is the email: ${email}`)
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
      console.log(user)
      const token = signToken(user);

      return { token, user }
    },
    saveActivity: async (parent, args, context) => {
      console.log(`User context ${JSON.stringify(context.user)}`)
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
      if (context.user) {
        const activity = await User.findOneAndUpdate(
          { _id: context.user_id },
          { $pull: { savedActivities: args } },
          { new: true }
        );
        return activity;
      }
      throw new AuthenticationError('Please log in to perform this action',)
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