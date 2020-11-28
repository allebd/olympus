import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CgTrash } from 'react-icons/cg';
import { RiAddFill } from 'react-icons/ri';
import { ProtectedLayout } from '../ProtectedLayout';
import { useRequireAuth } from '../../hooks/useRequireAuth';
import messageService from '../../hooks/useMessageService';

export const Messages = () => {
  const auth = useRequireAuth();
  const { user } = auth;
  const [username, setUsername] = useState('');
  const [messageList, setMessageList] = useState([]);
  const messageServer = messageService();
  const getAllMessages = messageServer.getAllMessages();

  useEffect(() => {
    if (auth.user) {
      setUsername(user.username);
    }
  }, [auth, user]);

  useEffect(() => {
    getAllMessages.onSnapshot((snap) => {
      const messages = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessageList(messages);
    });
  }, [getAllMessages]);

  const handleDelete = (id) => {
    messageServer.deleteMessage(id);

    alert('Message deleted');
  };

  return (
    <div>
      <ProtectedLayout
        content={
          <div className="dashboard-content">
            <h3>Messages</h3>
            <div className="dashboard-summary">
              <div className="dashboard-box">
                <div className="dashboard-box-title msg-box">
                  <p>Add News</p>
                </div>
                <div className="dashboard-box-value msg-box">
                  <p>
                    <i>
                      <Link href="/addmessage">
                        <a>
                          <RiAddFill />
                        </a>
                      </Link>
                    </i>
                  </p>
                </div>
              </div>
              <div className="dashboard-box">
                <div className="dashboard-box-title">
                  <p>Total Messages</p>
                </div>
                <div className="dashboard-box-value">
                  <p>{messageList.length}</p>
                </div>
                <div className="dashboard-box-button">
                  <Link href="#">
                    <a>View details</a>
                  </Link>
                </div>
              </div>
              <div className="dashboard-box dashboard-box-3">
                <div className="dashboard-box-title">
                  <p>Olympus Link</p>
                </div>
                <div className="dashboard-box-value">
                  <p>{`http://olympus.ng/register?referral=${username}`}</p>
                </div>
                <div className="dashboard-box-button">
                  <Link href="/profile">
                    <a>View details</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="dashboard-section">
              <div className="dashboard-referral">
                {messageList.length ? (
                  <table>
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {messageList.map((message) => (
                        <tr>
                          <td>{message.description}</td>
                          <td>
                            <i>
                              <button
                                type="button"
                                onClick={() => handleDelete(message.id)}
                              >
                                <CgTrash />
                              </button>
                            </i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No messages</p>
                )}
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
