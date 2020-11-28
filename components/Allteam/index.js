import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProtectedLayout } from '../ProtectedLayout';
import { useRequireAuth } from '../../hooks/useRequireAuth';
import userService from '../../hooks/useUserService';

export const Allteam = () => {
  const auth = useRequireAuth();
  const { user } = auth;
  const [username, setUsername] = useState('');
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
            <h3>All Team Members</h3>
            <div className="dashboard-summary">
              <div className="dashboard-box">
                <div className="dashboard-box-title">
                  <p>Total Team members</p>
                </div>
                <div className="dashboard-box-value">
                  <p>{userFilterList.length}</p>
                </div>
                <div className="dashboard-box-button">
                  <Link href="/team">
                    <a>View details</a>
                  </Link>
                </div>
              </div>
              <div className="dashboard-box">
                <div className="dashboard-box-title">
                  <p>Direct Referrals</p>
                </div>
                <div className="dashboard-box-value">
                  <p>{userFilterList.length}</p>
                </div>
                <div className="dashboard-box-button">
                  <Link href="/direct">
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
                {userList.length ? (
                  <table>
                    <thead>
                      <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>MTI Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userList.map((user) => (
                        <tr>
                          <td>{user.username}</td>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.email}</td>
                          <td>{user.phoneNumber}</td>
                          <td>{user.mtiLink}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No direct referral</p>
                )}
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
