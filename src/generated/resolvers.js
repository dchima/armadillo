import { Projects, Articles, Publications } from '../controllers';

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

const {
  getPublication,
  getPublications,
  addPublication,
  editPublication,
  removePublication,
} = Publications;

const resolvers = {

  Query: {
    getProjects,
    getArticles,
    getPublication,
    getPublications,
  },

  Mutation: {
    addProject,
    editProject,
    removeProject,
    addArticle,
    editArticle,
    removeArticle,
    addPublication,
    editPublication,
    removePublication,
  },

};

module.exports = resolvers;
