import { useState, useEffect } from "react";
import { ProtectedLayout } from '../ProtectedLayout';
import { useRequireAuth } from '../../hooks/useRequireAuth';
import messageService  from '../../hooks/useMessageService';

export const News = () => {
  useRequireAuth();
  const [messageList, setMessageList] = useState([]);
  const messageServer = messageService();
  const getAllMessages = messageServer.getAllMessages();
  
  useEffect(() => {
    getAllMessages
      .onSnapshot(snap => {
        const messages = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMessageList(messages);
      });
  }, []);

  return (
    <div>
      <ProtectedLayout
        content={
          <div className="news-content">
            <h3>News &amp; Updates</h3>
            <div className="dashboard-news">
              { messageList.length ? (
                <ul>
                {messageList.map(message =>
                <li key={message.id}>
                  {message.description}
                </li>
                )}
              </ul>
              ) : (<p>No messages</p>)
              }
            </div>
          </div>
        }
      />
    </div>
  );
}
