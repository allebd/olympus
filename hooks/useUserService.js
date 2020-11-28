import { db } from '../config/fire-config';

const userDb = db.collection('users');

const userService = () => {
  const getAllUsers = () => userDb;

  const createUser = (user) => userDb.push(user);

  const updateUser = (key, value) => userDb.doc(key).set(value);

  const deleteUser = (key) => userDb.doc(key).delete();

  const deleteAll = () => userDb.delete();

  return {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    deleteAll,
  };
};

export default userService;
