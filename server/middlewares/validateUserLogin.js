import models from '../../models';
import { comparePassword } from '../helpers';

const { User } = models;
let user = [];

export default class validateUserLogin {
  static async checkUserExist(req, res, next) {
    try {
      const { email } = req.body;
      user = await User.findAll({ where: { email } });

      if (!user[0]) {
        const errorMessage = `User ${email} does not exist`;
        return res.status(404).send(errorMessage);
      }

      return next();
    } catch (error) {
      console.log(error);
    }
  }

  static async comparePassword(req, res, next) {
    try {
      const { passwor } = req.body;
      const { passwor: hashedPassword } = user[0].dataValues;

      if (!comparePassword(passwor, hashedPassword)) {
        return res.status(400).send('Invalid password');
      }
    } catch (error) {
      console.log(error);
    }

    return next();
  }
}