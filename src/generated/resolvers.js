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
    editProject: async (parent, {
      id,
      secretKey,
      title,
      category,
      description,
      stacks,
      githubUrl,
      externalUrl,
      docsUrl,
    }, { models }) => {
      if (secretKey !== SECRET_KEY) throw new Error('secret key does not match');
      const updateData = {
        title,
        category,
        description,
        stacks,
        githubUrl,
        externalUrl,
        docsUrl,
      };
      const [rowaffected, [entity]] = await models.Project.update(
        updateData, { returning: true, where: { id } }
      );
      if (!rowaffected) throw new Error('Project to be edited not found');
      return entity.dataValues;
    },
  },

};

module.exports = resolvers;
