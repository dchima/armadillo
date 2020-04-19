module.exports = (sequelize, DataTypes) => {
  const Publication = sequelize.define(
    'Publication',
    {
      slug:
      {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      views: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {}
  );
  Publication.associate = () => {
  };
  return Publication;
};
