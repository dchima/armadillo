module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Articles', {
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
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isURL: {
          msg: 'link must be a URL with https protocol.',
          protocols: ['https'],
          require_protocol: true
        }
      }
    },
    summary: {
      type: Sequelize.STRING,
      allowNull: true
    },
    imageUrl: {
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
  down: (queryInterface) => queryInterface.dropTable('Articles')
};
