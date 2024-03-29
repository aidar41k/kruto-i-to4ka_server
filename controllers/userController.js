const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ApiError = require("../apiError/ApiError");
const { User, Basket } = require("../db/models");
const generateGWT = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Неправильный email или пароль"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest("Такой пользователь уже существует"));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    const token = generateGWT(user.id, user.email, user.role);
    return res.json({ token });
  }

  async login (req, res, next) {
   const {email, password} = req.body
   const user = await User.findOne({where: {email}})
   if (!user) {
      return next( ApiError.internal('Пользователь не найден'))
   }
   let comparePassword = bcrypt.compareSync(password, user.password)
   if (!comparePassword) {
      return next(ApiError.internal('Неверный пароль'))
   }
   const token = generateGWT(user.id, user.email, user.role)
   return res.json({token})
  }
  async check (req, res, next) {
   const {id, email, role} = req.user
   const token = generateGWT(id, email, role)
   return res.json({token})
  }
}
module.exports = new UserController();
