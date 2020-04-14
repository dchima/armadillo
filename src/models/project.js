module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    'Project',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      stacks: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      githubUrl: {
        type: DataTypes.STRING,
        allowNull: true
      },
      externalUrl: {
        type: DataTypes.STRING,
        allowNull: true
      },
      docsUrl: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {}
  );
  Project.associate = () => {
  };
  return Project;
};
