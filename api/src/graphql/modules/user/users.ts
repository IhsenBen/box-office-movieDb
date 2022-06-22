import { createModule, gql } from 'graphql-modules';
import { UserModule } from './generated-types/module-types';
const { UserInputError } = require('apollo-server-express');
const { prisma } = require('../../../../prisma/client');

const usersResolver: UserModule.Resolvers = {
  Query: {
    // return all users
    users: async () => {
      const users = await prisma.user.findMany();
      if (!users) {
        throw new UserInputError('No users found');
      }
      return users;
    },
    user: async (_, { id }) => {
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
      });
      if (!user) {
        throw new UserInputError('User not found');
      }
      return user;
    },
  },

  Mutation: {
    // create a new user
    createUser: async (_, { input }) => {
      const user = await prisma.user.create({
        data: {
          ...input,
        },
      });
      //check if user exists ( findUnique don't work in this case but count works -> return an interger)
      const userExists = await prisma.user.count({
        where: {
          userName: input.userName,
          email: input.email,
        },
      });
      if (userExists) {
        throw new UserInputError('This User already exists');
      }
      return user;
    },
    // update a user
    updateUser: async (_, { input }) => {
      const user = await prisma.user.update({
        where: { id: Number(input.id) },
        data: {
          ...input,
        },
      });
      if (!user) {
        throw new UserInputError('User not found');
      }
      return user;
    },
    // delete a user
    deleteUser: async (_, { id }) => {
      const exists = await prisma.user.count({
        where: { id: Number(id) },
      });
      if (!exists) {
        throw new UserInputError('User not found');
      }
      const user = await prisma.user.delete({
        where: { id: Number(id) },
      });
   
      return user;
    }
  }
};

export const usersModel = createModule({
  id: 'users',
  dirname: __dirname,
  typeDefs: gql`
    input UserInput {
      userName: String
      password: String
      email: String
      id: ID
    }

    type User {
      id: ID
      userName: String
      password: String
      email: String
      role: String
    }

    type Query {
      user(id: ID!): User
      users: [User]
    }

    type Mutation {
      createUser(input: UserInput!): User
      updateUser(input: UserInput!): User
      deleteUser(id: ID!): User
    }
  `,
  resolvers: usersResolver,
});
