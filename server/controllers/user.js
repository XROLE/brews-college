import models from '../../models';
import {
    createToken,
    hashPassword,
  } from '../helpers';
  
  const { User } = models;


class Users {
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