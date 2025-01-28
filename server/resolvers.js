// GraphQL resolvers
export const resolvers = {
  Query: {
    users: async () => await User.find(),
  },
  Mutation: {
    addUser: async (_, { name, email, age }) => {
      const user = new User({ name, email, age });
      return await user.save();
    },
  },
};
