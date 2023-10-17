class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("Error in repository(crud) layer", error);
    }
  }

  async destroy(id) {
    try {
      const result = await this.model.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log("Error in repository(crud) layer", error);
    }
  }

  async get(id) {
    try {
      const result = await this.model.findById(id);
      return result;
    } catch (error) {
      console.log("Error in repository(crud) layer", error);
    }
  }

  async getAll(id) {
    try {
      const result = await this.model.find();
      return result;
    } catch (error) {
      console.log("Error in repository(crud) layer", error);
    }
  }

  async update(id, data) {
    try {
      const result = await this.model.findByIdAndUpdate(id, data, {new: true});
      return result;
    } catch (error) {
      console.log("Error in repository(crud) layer", error);
    }
  }
}

export default CrudRepository;