import { createModule, gql } from 'graphql-modules';
const { prisma } = require('../../../../prisma/client');

const usersResolver: any = {
  Query: {
    /// create a new user with username, password and email
    createUser: async (args: any) => {
      const user = await prisma.user.create({
        data: {
          username: args.username,
          password: args.password,
          email: args.email,
        },
      });
      return user;
    },
  },
};
export const users = createModule({
  id: 'users',
  dirname: __dirname,
  typeDefs: gql`
    type User {
      id: ID
      userName: String
      password: String
      email: String
      role: String
    }

    type Query {
      createUser(username: String, password: String, email: String): User
    }
  `,
  resolvers: usersResolver,
});
