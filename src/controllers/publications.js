import env from '../config/env';

const { SECRET_KEY } = env;

const Publications = {

  async getPublications(root, args, { models }) {
    return models.Publication.findAll();
  },

  async getPublication(root, { slug, id }, { models }) {
    if (!slug && !id) throw new Error('publication slug or id needed');
    let value;
    if (slug) value = models.Publication.findOne({ where: { slug } });
    if (id) value = models.Publication.findOne({ where: { id } });
    return value;
  },

  async addPublication(parent,
    {
      title,
      category,
      description,
      author,
      body,
      imageUrl,
      secretKey,
    }, { models }) {
    if (secretKey !== SECRET_KEY) throw new Error('secret key does not match');
    const slug = title.replace(/ /g, '-').toLowerCase();
    return models.Publication.create({
      title,
      slug,
      category,
      description,
      author,
      body,
      imageUrl,
    });
  },

  async editPublication(parent, {
    id,
    title,
    category,
    description,
    author,
    slug,
    body,
    imageUrl,
    secretKey,
  }, { models }) {
    if (secretKey !== SECRET_KEY) throw new Error('secret key does not match');
    if (title) slug = title.replace(/ /g, '-').toLowerCase();
    const updateData = {
      title,
      slug,
      category,
      description,
      author,
      body,
      imageUrl,
      secretKey,
    };
    const [rowaffected, [entity]] = await models.Publication.update(
      updateData, { returning: true, where: { id } }
    );
    if (!rowaffected) throw new Error('Publication to be edited not found');
    return entity.dataValues;
  },

  async removePublication(parent, { id, secretKey }, { models }) {
    if (secretKey !== SECRET_KEY) throw new Error('secret key does not match');
    await models.Publication.destroy({ where: { id } });
    return `publication with id=${id} deleted successfully`;
  }
};

export default Publications;
