/* eslint-disable */
import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace UserModule {
  interface DefinedFields {
    User: 'id' | 'userName' | 'password' | 'email' | 'role';
    Query: 'user' | 'users';
    Mutation: 'createUser' | 'updateUser' | 'deleteUser';
  };
  
  interface DefinedInputFields {
    UserInput: 'userName' | 'password' | 'email' | 'id';
  };
  
  export type UserInput = Pick<Types.UserInput, DefinedInputFields['UserInput']>;
  export type User = Pick<Types.User, DefinedFields['User']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  
  export type UserResolvers = Pick<Types.UserResolvers, DefinedFields['User'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  
  export interface Resolvers {
    User?: UserResolvers;
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    User?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      userName?: gm.Middleware[];
      password?: gm.Middleware[];
      email?: gm.Middleware[];
      role?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      user?: gm.Middleware[];
      users?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createUser?: gm.Middleware[];
      updateUser?: gm.Middleware[];
      deleteUser?: gm.Middleware[];
    };
  };
}