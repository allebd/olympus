import { db } from '../config/fire-config';

const userDb = db.collection('users');

const userService = () => {
  const getAllUsers = () => userDb;

  const checkForUsername = (value) => userDb.where('username', '==', value);

  const createUser = (user) => userDb.push(user);

  const updateUser = (key, value) => userDb.doc(key).set(value);

  const deleteUser = (key) => userDb.doc(key).delete();

  const deleteAll = () => userDb.delete();

  return {
    getAllUsers,
    checkForUsername,
    createUser,
    updateUser,
    deleteUser,
    deleteAll,
  };
};

export default userService;
