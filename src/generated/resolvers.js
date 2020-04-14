import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import env from '../config/env';

const { SECRET_KEY } = env;

const resolvers = {

  Query: {
    getProjects: async (root, { secretKey }, { models }) => {
      if (secretKey !== SECRET_KEY) throw new Error('secret key does not match');
      return models.Project.findAll();
    },
  },

  Mutation: {
    addProject: async (parent,
      {
        title,
        category,
        description,
        stacks,
        githubUrl,
        externalUrl,
        docsUrl,
        secretKey,
      }, { models }) => {
      if (secretKey !== SECRET_KEY) throw new Error('secret key does not match');
      return models.Project.create({
        title,
        category,
        description,
        stacks,
        githubUrl,
        externalUrl,
        docsUrl,
      });
    },
  },

};

module.exports = resolvers;
