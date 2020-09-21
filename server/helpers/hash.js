import bcrypt from 'bcrypt';

export const hashPassword = (passwordToHash) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(passwordToHash, salt);
};


export const comparePassword = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword);