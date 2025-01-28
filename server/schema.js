// GraphQL schema
export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(name: String!, email: String!, age: Int): User
  }
`;
