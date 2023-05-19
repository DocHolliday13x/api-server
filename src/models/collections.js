`use strict`;

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(object) {
    try {
      const data = await this.model.create(object);
      return data;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async read(id) {
    try {
      let data;
      if (id) {
        data = await this.model.findOne({ where: { id: id } });
      } else {
        data = await this.model.findAll();
      }
      return data;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async update(id, object) {
    try {
      const data = await this.model.findOne({ where: { id: id } });
      const updatedData = await data.update(object);
      return updatedData;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async delete(id) {
    try {
      const deletedData = await this.model.destroy({ where: { id: id } });
      return deletedData;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

module.exports = Collection;

















