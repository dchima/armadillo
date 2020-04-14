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

  type Query {
    getProjects: Project!
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
  }
`;

module.exports = typeDefs;
