import express from 'express';
import Users from '../controllers/user';

import ValidateUsers from '../middleWares/validateUser';

const router = express.Router();

router.route('/').post(
  ValidateUsers.checkIsEmpty,
  ValidateUsers.checkPasswordLength,
  ValidateUsers.checkLowerCase,
  ValidateUsers.checkUpperCase,
  ValidateUsers.checkNumber,
  ValidateUsers.checkMail,
  ValidateUsers.checkPassword,
  ValidateUsers.checkDuplicatMail,
  ValidateUsers.checkDuplicateUserName,
  Users.createUser
);

export default router;