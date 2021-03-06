import { gql } from 'apollo-server-express';

const typeDefs = gql`

  type Project {
    id: Int!
    title: String!
    category: String!
    description: String!
    stacks: [String!]!
    githubUrl: String
    externalUrl: String
    docsUrl: String
  }

  type Article {
    id: Int!
    title: String!
    category: String!
    author: String!
    link: String!
    summary: String!
    imageUrl: String
  }

  type Publication {
    id: Int!
    title: String!
    slug: String!
    author: String!
    views: Int
    category: String!
    description: String!
    body: String!
    imageUrl: String
  }

  type Query {
    getProjects: [Project]
    getProject(id: Int!): Project
    getArticles: [Article]
    getArticle(id: Int!): Article
    getPublications: [Publication]
    getPublication(slug: String, id: Int): Publication
  }

  type Mutation {
    addProject(
      title: String!,
      category: String!,
      description: String!,
      stacks: [String!]!,
      githubUrl: String,
      externalUrl: String,
      docsUrl: String,
      secretKey: String!
    ): Project!

    editProject(
      id: Int!,
      secretKey: String!,
      title: String,
      category: String,
      description: String,
      stacks: [String!],
      githubUrl: String,
      externalUrl: String,
      docsUrl: String,
    ): Project!
    
    removeProject(
      id: Int!,
      secretKey: String!
    ): String!

    addArticle(
      title: String!,
      author: String!,
      category: String!,
      link: String!,
      summary: String!,
      imageUrl: String,
      secretKey: String!
    ): Article!

    editArticle(
      id: Int!,
      title: String,
      category: String,
      author: String,
      link: String,
      summary: String,
      imageUrl: String,
      secretKey: String!
    ): Article!

    removeArticle(
      id: Int!,
      secretKey: String!
    ): String!

    addPublication(
      title: String!,
      category: String!,
      author: String!,
      description: String!,
      body: String!,
      imageUrl: String,
      secretKey: String!,
    ): Publication!

    editPublication(
      id: Int!,
      title: String,
      category: String,
      author: String,
      description: String,
      body: String,
      imageUrl: String,
      secretKey: String!,
    ): Publication!

    removePublication(
      id: Int!,
      secretKey: String!
    ): String!
  }
`;

module.exports = typeDefs;
