import { db } from '../config/fire-config';

const messageDb = db.collection("messages");

const messageService = () => {
  const getAllMessages = () => {
    return messageDb;
  }

  const createMessage = (Message) => {
    return messageDb.push(Message);
  }

  const updateMessage = (key, value) => {
    return messageDb.doc(key).set(value);
  }

  const deleteMessage = (key) => {
    return messageDb.doc(key).delete();
  }

  const deleteAll = () => {
    return messageDb.delete();
  }

  return {
    getAllMessages,
    createMessage,
    updateMessage,
    deleteMessage,
    deleteAll
  }
}

export default messageService;
