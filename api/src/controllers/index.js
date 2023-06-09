const { v4: uuidv4 } = require("uuid");

class ModelCrud {
  constructor(model) {
    this.model = model;
  }
  getAll = (req, res, next) => {
    return this.model
      .findAll()
      .then((results) => res.json(results))
      .catch((error) => next(error));
  };

  getById = (req, res, next) => {
    const id = req.params.id;
    return this.model
      .findByPk(id)
      .then((result) => res.send(result))
      .catch((error) => next(error));
  };

  create = (req, res, next) => {
    const body = req.body;
    return this.model
      .create({
        ...body,
        id: uuidv4(),
      })
      .then((createdElement) => res.send(createdElement))
      .catch((error) => next(error));
  };

  update = (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    return this.model
      .update(body, {
        where: {
          id,
        },
      })
      .then((updatedElement) => {
        res.send(updatedElement);
      })
      .catch((error) => next(error));
  };

  delete = (req, res, next) => {
    const id = req.params.id;
    return this.model
      .destroy({
        where: {
          id,
        },
      })
      .then((message) => {
        res.send("Successfully deleted");
      })
      .catch((error) => next(error));
  };
}

module.exports = ModelCrud;
