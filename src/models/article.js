module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    'Article',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: true,
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
        type: DataTypes.STRING,
        allowNull: true
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {}
  );
  Article.associate = () => {
  };
  return Article;
};
