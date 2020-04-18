import env from '../config/env';

const { SECRET_KEY } = env;

const Articles = {
  async getArticles(root, { secretKey }, { models }) {
    if (secretKey !== SECRET_KEY) throw new Error('secret key does not match');
    return models.Article.findAll();
  },

  async addArticle(parent,
    {
      title,
      author,
      category,
      link,
      summary,
      imageUrl,
      secretKey,
    }, { models }) {
    if (secretKey !== SECRET_KEY) throw new Error('secret key does not match');
    return models.Article.create({
      title,
      author,
      category,
      link,
      summary,
      imageUrl,
    });
  },

  async editArticle(parent, {
    id,
    title,
    author,
    category,
    link,
    summary,
    imageUrl,
    secretKey,
  }, { models }) {
    if (secretKey !== SECRET_KEY) throw new Error('secret key does not match');
    const updateData = {
      title,
      author,
      category,
      link,
      summary,
      imageUrl,
    };
    const [rowaffected, [entity]] = await models.Article.update(
      updateData, { returning: true, where: { id } }
    );
    if (!rowaffected) throw new Error('Article to be edited not found');
    return entity.dataValues;
  },

  async removeArticle(parent, { id, secretKey }, { models }) {
    if (secretKey !== SECRET_KEY) throw new Error('secret key does not match');
    await models.Article.destroy({ where: { id } });
    return `article with id=${id} deleted successfully`;
  }

};

export default Articles;
