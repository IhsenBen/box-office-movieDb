import { createApplication } from 'graphql-modules';
import { users } from './modules/user/users';

export const application = createApplication({
  modules: [users],
});
