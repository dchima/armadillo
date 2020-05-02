import { Projects, Articles, Publications } from '../controllers';

const {
  getProjects,
  getProject,
  addProject,
  editProject,
  removeProject,
} = Projects;

const {
  getArticles,
  getArticle,
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
    getProject,
    getArticles,
    getArticle,
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
