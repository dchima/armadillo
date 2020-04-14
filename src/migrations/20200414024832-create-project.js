module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Projects', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    stacks: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
    },
    githubUrl: {
      type: Sequelize.STRING,
      allowNull: true
    },
    externalUrl: {
      type: Sequelize.STRING,
      allowNull: true
    },
    docsUrl: {
      type: Sequelize.STRING,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('Projects')
};
