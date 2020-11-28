import { db } from '../config/fire-config';

const messageDb = db.collection('messages');

const messageService = () => {
  const getAllMessages = () => messageDb;

  const createMessage = (message) => messageDb.add(message);

  const updateMessage = (key, value) => messageDb.doc(key).set(value);

  const deleteMessage = (key) => messageDb.doc(key).delete();

  const deleteAll = () => messageDb.delete();

  return {
    getAllMessages,
    createMessage,
    updateMessage,
    deleteMessage,
    deleteAll,
  };
};

export default messageService;
