import { db } from '../config/fire-config';

const userDb = db.collection("users");

const userService = () => {
  const getAllUsers = () => {
    return userDb;
  }

  const createUser = (user) => {
    return userDb.push(user);
  }

  const updateUser = (key, value) => {
    return userDb.doc(key).set(value);
  }

  const deleteUser = (key) => {
    return userDb.doc(key).delete();
  }

  const deleteAll = () => {
    return userDb.delete();
  }

  return {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    deleteAll
  }
}

export default userService;
