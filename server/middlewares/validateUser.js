import models from '../../models';
import {
  isDuplicate,
  isEmail,
  isEmpty,
  checkLength,
  containLowercase,
  containUppercase,
  containNumber
} from '../helpers';


const { User } = models;
let users = [];

export default class ValidateUser {
  static checkIsEmpty(req, res, next) {
    const {
      userName,
      email,
      passwor,
      confirmPassword
    } = req.body;
    const userDetails = {
      userName,
      email,
      passwor,
      confirmPassword
    };
    const errors = [];

    for (const userDetail in userDetails) {
      if (userDetails[userDetail] == undefined) {
        errors.push(`${userDetail} is required`);
      } else if (isEmpty(userDetails[userDetail])) {
        errors.push(`${userDetail} cannot be empty`);
      }
    }

    if (errors.length) {
      const error = new Error(...errors);
      error.status = 400;
      return next(error);
    }
    return next();
  }

  static checkPasswordLength(req, res, next) {
    const { passwor } = req.body;
    if (!checkLength(passwor, 6)) {
      const error = new Error('Password must greater be greater than 5 character');
      error.status = 400;
      return next(error);
    }
    return next();
  }

  static checkLowerCase(req, res, next) {
    const { passwor } = req.body;
    if (!containLowercase(passwor)) {
      const error = new Error('Passord must contain atleast one lower case character');
      error.status = 400;
      return next(error);
    }

    return next();
  }

  static checkUpperCase(req, res, next) {
    const { passwor } = req.body;
    if (!containUppercase(passwor)) {
      const error = new Error('Passord must contain atleast one upper case character');
      error.status = 400;
      return next(error);
    }

    return next();
  }

  static checkNumber(req, res, next) {
    const { passwor } = req.body;
    if (!containNumber(passwor)) {
      const error = new Error('Passord must contain atleast an integer');
      error.status = 400;
      return next(error);
    }

    return next();
  }

  static checkMail(req, res, next) {
    const { email } = req.body;
    if (!isEmail(email)) {
      const error = new Error(`${email} is not a vallid email format`);
      error.status = 400;
      return next(error);
    }
    return next();
  }

  static checkPassword(req, res, next) {
    const { passwor, confirmPassword } = req.body;
    if (passwor !== confirmPassword) {
      const error = new Error('Passwords do not match');
      error.status = 400;
      return next(error);
    }
    return next();
  }

  static async checkDuplicatMail(req, res, next) {
    const { email } = req.body;
    users = await User.findAll();
    const emails = users.map(user => user.email);

    if (isDuplicate(emails, email)) {
      const error = new Error('Email already in use');
      error.status = 400;
      return next(error);
    }
    return next();
  }

  static async checkDuplicateUserName(req, res, next) {
    const { userName } = req.body;
    const userNames = users.map(user => user.userName);

    if (isDuplicate(userNames, userName)) {
      const error = new Error('Username has been taken');
      error.status = 400;
      return next(error);
    }
    return next();
  }
}
