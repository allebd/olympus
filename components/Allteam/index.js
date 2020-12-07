import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CgTrash } from 'react-icons/cg';
import { ProtectedLayout } from '../ProtectedLayout';
import { useRequireAuth } from '../../hooks/useRequireAuth';
import userService from '../../hooks/useUserService';

export const Allteam = () => {
  const auth = useRequireAuth();
  const router = useRouter();
  const { user } = auth;
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  });
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
    getAllUsers.where('username', '!=', 'olympus').onSnapshot((snap) => {
      const users = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserList(users);
      const filterUsers = users.filter(
        (filterUser) => filterUser.referralCode === username
      );
      setUserFilterList(filterUsers);
    });
  });

  const handleDelete = (id) => {
    userServer.deleteUser(id);

    alert('User deleted');
  };

  return (
    <div>
      <ProtectedLayout
        content={
          <div className="dashboard-content">
            <h3>All Team Members</h3>
            <div className="dashboard-summary">
              <div className="dashboard-box">
                <div className="dashboard-box-title">
                  <p>Total members</p>
                </div>
                <div className="dashboard-box-value">
                  <p>{userList.length}</p>
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
                  <p>{`https://olympus.ng/register?referral=${username}`}</p>
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
                        <th>Sponsor</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>&nbsp;</th>
                        <th>MTI Link</th>
                        <th>&nbsp;</th>
                        <th>Olympus Link</th>
                        <th>&nbsp;</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userList.map((userL) => {
                        if (userL.username !== username) {
                          return (
                            <tr>
                              <td>{userL.username}</td>
                              <td>{userL.referralCode}</td>
                              <td>{userL.firstName}</td>
                              <td>{userL.lastName}</td>
                              <td>{userL.email}</td>
                              <td>{userL.phoneNumber}</td>
                              <td className="copy-box">
                                <CopyToClipboard
                                  text={userL.phoneNumber}
                                  onCopy={() => alert('Phone Number copied')}
                                >
                                  <p>Copy</p>
                                </CopyToClipboard>
                              </td>
                              <td>{userL.mtiLink}</td>
                              <td className="copy-box">
                                <CopyToClipboard
                                  text={userL.mtiLink}
                                  onCopy={() => alert('MTI Link copied')}
                                >
                                  <p>Copy</p>
                                </CopyToClipboard>
                              </td>
                              <td>{`https://olympus.ng/register?referral=${userL.username}`}</td>
                              <td className="copy-box">
                                <CopyToClipboard
                                  text={`https://olympus.ng/register?referral=${userL.username}`}
                                  onCopy={() => alert('Olympus Link copied')}
                                >
                                  <p>Copy</p>
                                </CopyToClipboard>
                              </td>
                              <td>
                                <i>
                                  <button
                                    type="button"
                                    onClick={() => handleDelete(userL.id)}
                                  >
                                    <CgTrash />
                                  </button>
                                </i>
                              </td>
                            </tr>
                          );
                        }
                        return true;
                      })}
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
