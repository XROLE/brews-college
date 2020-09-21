import models from '../../models';
import {
    createToken,
    hashPassword,
  } from '../helpers';
  
  const { User } = models;


class Users {
  static async login(req, res) {
    const { email } = req.body;
    const user = await User.findAll({ where: { email } });

    const token = createToken(user[0].dataValues);
    return res.status(200).send({ token });
  }


  static async createUser(req, res) {
    const { 
      userName, 
      email, 
      passwor,
    } = req.body;
    const passwordToSave = hashPassword(passwor);
    const data = { 
      userName, 
      email, 
      passwor: passwordToSave, 
    };
    console.log('I am a chosen one creating user ==========================================================================>');
    await User.create(data);
    const token = createToken(data);

    return res.status(201).json({
      Message: 'Your account has been succesfully created',
      Token: token
    });
  }
};

export default Users;