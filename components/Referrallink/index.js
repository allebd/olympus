import { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ProtectedLayout } from '../ProtectedLayout';
import { useRequireAuth } from '../../hooks/useRequireAuth';
import userService from '../../hooks/useUserService';

export const Referrallink = () => {
  const auth = useRequireAuth();
  const { user } = auth;
  const [username, setUsername] = useState('');
  const [copy, setCopy] = useState(false);
  const [userList, setUserList] = useState([]);
  const [userFilterList, setUserFilterList] = useState([]);
  const userServer = userService();
  const getAllUsers = userServer.getAllUsers();

  useEffect(() => {
    if (auth.user) {
      setUsername(user.username);
    }
  }, [auth, user]);

  useEffect(() => {
    getAllUsers.onSnapshot((snap) => {
      const users = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserList(users);
      const filterUsers = userList.filter(
        (filterUser) => filterUser.referralCode === user.username
      );
      setUserFilterList(filterUsers);
    });
  }, [getAllUsers]);

  return (
    <div>
      <ProtectedLayout
        content={
          <div className="dashboard-content">
            <h3>Referral Link</h3>
            {copy && (
              <div className="success-message">
                <p>Olympus Link Copied</p>
              </div>
            )}
            <div className="dashboard-summary">
              <div className="dashboard-box dashboard-box-3">
                <div className="dashboard-box-title">
                  <p>Olympus Link</p>
                </div>
                <div className="dashboard-box-value">
                  <p>{`http://olympus.ng/register?referral=${username}`}</p>
                </div>
                <div className="dashboard-box-button">
                  <CopyToClipboard
                    text={`http://olympus.ng/register?referral=${username}`}
                    onCopy={() => setCopy(true)}
                  >
                    <button>Copy Olympus Link</button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
