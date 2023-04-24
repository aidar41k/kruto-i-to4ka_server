const { Type } = require("../db/models");
const ApiError = require("../apiError/ApiError");

class TypeController {
  async create(req, res, next) {
    const { name } = req.body;
    const ckeck = await Type.findOne({ where: { name } });
    if (ckeck) {
      return next(ApiError.forbidden('Такой тип уже существует'))
    }
    const type = await Type.create({ name });
    return res.json(type);
  }
  async getAll(req, res) {
    const types = await Type.fimdAll();
    return res.json(types);
  }
}
module.exports = new TypeController()