import { Projects, Articles } from '../controllers';

const {
  getProjects,
  addProject,
  editProject,
  removeProject,
} = Projects;

const {
  getArticles,
  addArticle,
  editArticle,
  removeArticle,
} = Articles;

const resolvers = {

  Query: {
    getProjects,
    getArticles,
  },

  Mutation: {
    addProject,
    editProject,
    removeProject,
    addArticle,
    editArticle,
    removeArticle,
  },

};

module.exports = resolvers;
