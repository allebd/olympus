import { useState, useEffect } from "react";
import { ProtectedLayout } from '../ProtectedLayout';
import { useRequireAuth } from '../../hooks/useRequireAuth';
import messageService  from '../../hooks/useMessageService';
import Link from 'next/link';

export const Dashboard = () => {
  const auth = useRequireAuth();
  const { user } = auth;
  const [messageList, setMessageList] = useState([]);
  const [mtiLink, setMtiLink] = useState('');
  const messageServer = messageService();
  const getAllMessages = messageServer.getAllMessages();

  useEffect(() => {
    if (auth.user){
      setMtiLink(user.mtiLink);
    }
  });

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
          <div className="dashboard-content">
            <h3>Dashboard</h3>
            <div className="dashboard-summary">
              <div className="dashboard-box">
                <div className="dashboard-box-title">
                  <p>
                    Total Team members
                  </p>
                </div>
                <div className="dashboard-box-value">
                  <p>163</p>
                </div>
                <div className="dashboard-box-button">
                  <Link href="/team">
                    <a>View details</a>
                  </Link>
                </div>
              </div>
              <div className="dashboard-box">
                <div className="dashboard-box-title">
                  <p>
                    Direct Referrals
                  </p>
                </div>
                <div className="dashboard-box-value">
                  <p>2</p>
                </div>
                <div className="dashboard-box-button">
                  <Link href="/direct">
                    <a>View details</a>
                  </Link>
                </div>
              </div>
              <div className="dashboard-box dashboard-box-3">
                <div className="dashboard-box-title">
                  <p>
                    My MTI Link
                  </p>
                </div>
                <div className="dashboard-box-value">
                  <p>{mtiLink? mtiLink : <p>&nbsp;</p>}</p>
                </div>
                <div className="dashboard-box-button">
                  <Link href="/profile">
                    <a>Update details</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="dashboard-section">
              <div className="dashboard-news">
                <h3>News &amp; Updates</h3>
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
              <div className="dashboard-meetings">
                <h3>Meetings</h3>
                <ul>
                  <li>
                    <div className="meeting-section">
                      <div className="meeting-message">9am CAT +1 <strong>(Opportunity Overview)</strong></div>
                      <div className="meeting-button">
                        <Link href="https://zoom.us/j/96544248413">
                          <a target="_blank">
                            <button type="button" className="button-link">
                              Join
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="meeting-section">
                      <div className="meeting-message">2pm CAT +1 <strong>(Opportunity Overview)</strong></div>
                      <div className="meeting-button">
                        <Link href="https://zoom.us/j/96544248413">
                          <a target="_blank">
                            <button type="button" className="button-link">
                              Join
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="meeting-section">
                      <div className="meeting-message">6pm CAT +1 <strong>(Opportunity Overview)</strong></div>
                      <div className="meeting-button">
                        <Link href="https://zoom.us/j/96544248413">
                          <a target="_blank">
                            <button type="button" className="button-link">
                              Join
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="meeting-section">
                      <div className="meeting-message">9pm CAT +1 <strong>(Team Olympus Group Call)</strong></div>
                      <div className="meeting-button">
                        <Link href="https://us02web.zoom.us/j/4966422805?pwd=NGhaS2F0c2tibVJtRmZGZTFXTTFkQT09">
                          <a target="_blank">
                            <button type="button" className="button-link">
                              Join
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
