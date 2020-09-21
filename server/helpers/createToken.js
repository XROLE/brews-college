import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secrete = process.env.JWT_SECRETE;

const createToken = (payload) => {
  const token = jwt.sign(payload, secrete, { expiresIn: '24h' });
  return token;
};

export default createToken;