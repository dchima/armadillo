module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Publications', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    slug:
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    views: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: true
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Publications')
};
