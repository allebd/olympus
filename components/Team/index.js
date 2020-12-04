import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProtectedLayout } from '../ProtectedLayout';
import { useRequireAuth } from '../../hooks/useRequireAuth';
import userService from '../../hooks/useUserService';

export const Team = () => {
  const auth = useRequireAuth();
  const { user } = auth;
  const [username, setUsername] = useState('');
  const [userList, setUserList] = useState([]);
  const [userFilterList, setUserFilterList] = useState([]);
  const [userFilterListFinal, setUserFilterListFinal] = useState([]);
  const [userFilterListFinally, setUserFilterListFinally] = useState([]);
  const [userFilterList1, setUserFilterList1] = useState([]);
  const [userFilterList2, setUserFilterList2] = useState([]);
  const [userFilterList3, setUserFilterList3] = useState([]);
  const [userFilterList4, setUserFilterList4] = useState([]);
  const [userFilterList5, setUserFilterList5] = useState([]);
  const [userFilterList6, setUserFilterList6] = useState([]);
  const [userFilterList7, setUserFilterList7] = useState([]);
  const [userFilterList8, setUserFilterList8] = useState([]);
  const [userFilterList9, setUserFilterList9] = useState([]);
  const [userFilterList10, setUserFilterList10] = useState([]);
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
      const filterUsers = users.filter(
        (filterUser) => filterUser.referralCode === user.username
      );
      setUserFilterList(filterUsers);
    });
  });

  useEffect(() => {
    if (userFilterList) {
      const filteredUsers = [];
      const filteredUsername = [];
      userFilterList.map((filterUser) => {
        userList.map((selectUser) => {
          if (filterUser.username === selectUser.referralCode) {
            if (!filteredUsername.includes(selectUser.username)) {
              filteredUsername.push(selectUser.username);
              filteredUsers.push(selectUser);
            }
          }
          return true;
        });
        return true;
      });
      return setUserFilterList1(filteredUsers);
    }
  }, [userList, userFilterList]);

  useEffect(() => {
    if (userFilterList1) {
      const filteredUsers = [];
      const filteredUsername = [];
      userFilterList1.map((filterUser) => {
        userList.map((selectUser) => {
          if (filterUser.username === selectUser.referralCode) {
            if (!filteredUsername.includes(selectUser.username)) {
              filteredUsername.push(selectUser.username);
              filteredUsers.push(selectUser);
            }
          }
          return true;
        });
        return true;
      });
      return setUserFilterList2(filteredUsers);
    }
  }, [userList, userFilterList1]);

  useEffect(() => {
    if (userFilterList2) {
      const filteredUsers = [];
      const filteredUsername = [];
      userFilterList2.map((filterUser) => {
        userList.map((selectUser) => {
          if (filterUser.username === selectUser.referralCode) {
            if (!filteredUsername.includes(selectUser.username)) {
              filteredUsername.push(selectUser.username);
              filteredUsers.push(selectUser);
            }
          }
          return true;
        });
        return true;
      });
      return setUserFilterList3(filteredUsers);
    }
  }, [userList, userFilterList2]);

  useEffect(() => {
    if (userFilterList3) {
      const filteredUsers = [];
      const filteredUsername = [];
      userFilterList3.map((filterUser) => {
        userList.map((selectUser) => {
          if (filterUser.username === selectUser.referralCode) {
            if (!filteredUsername.includes(selectUser.username)) {
              filteredUsername.push(selectUser.username);
              filteredUsers.push(selectUser);
            }
          }
          return true;
        });
        return true;
      });
      return setUserFilterList4(filteredUsers);
    }
  }, [userList, userFilterList3]);

  useEffect(() => {
    if (userFilterList4) {
      const filteredUsers = [];
      const filteredUsername = [];
      userFilterList4.map((filterUser) => {
        userList.map((selectUser) => {
          if (filterUser.username === selectUser.referralCode) {
            if (!filteredUsername.includes(selectUser.username)) {
              filteredUsername.push(selectUser.username);
              filteredUsers.push(selectUser);
            }
          }
          return true;
        });
        return true;
      });
      return setUserFilterList5(filteredUsers);
    }
  }, [userList, userFilterList4]);

  useEffect(() => {
    if (userFilterList5) {
      const filteredUsers = [];
      const filteredUsername = [];
      userFilterList5.map((filterUser) => {
        userList.map((selectUser) => {
          if (filterUser.username === selectUser.referralCode) {
            if (!filteredUsername.includes(selectUser.username)) {
              filteredUsername.push(selectUser.username);
              filteredUsers.push(selectUser);
            }
          }
          return true;
        });
        return true;
      });
      return setUserFilterList6(filteredUsers);
    }
  }, [userList, userFilterList5]);

  useEffect(() => {
    if (userFilterList6) {
      const filteredUsers = [];
      const filteredUsername = [];
      userFilterList6.map((filterUser) => {
        userList.map((selectUser) => {
          if (filterUser.username === selectUser.referralCode) {
            if (!filteredUsername.includes(selectUser.username)) {
              filteredUsername.push(selectUser.username);
              filteredUsers.push(selectUser);
            }
          }
          return true;
        });
        return true;
      });
      return setUserFilterList7(filteredUsers);
    }
  }, [userList, userFilterList6]);

  useEffect(() => {
    if (userFilterList7) {
      const filteredUsers = [];
      const filteredUsername = [];
      userFilterList7.map((filterUser) => {
        userList.map((selectUser) => {
          if (filterUser.username === selectUser.referralCode) {
            if (!filteredUsername.includes(selectUser.username)) {
              filteredUsername.push(selectUser.username);
              filteredUsers.push(selectUser);
            }
          }
          return true;
        });
        return true;
      });
      return setUserFilterList8(filteredUsers);
    }
  }, [userList, userFilterList7]);

  useEffect(() => {
    if (userFilterList8) {
      const filteredUsers = [];
      const filteredUsername = [];
      userFilterList8.map((filterUser) => {
        userList.map((selectUser) => {
          if (filterUser.username === selectUser.referralCode) {
            if (!filteredUsername.includes(selectUser.username)) {
              filteredUsername.push(selectUser.username);
              filteredUsers.push(selectUser);
            }
          }
          return true;
        });
        return true;
      });
      return setUserFilterList9(filteredUsers);
    }
  }, [userList, userFilterList8]);

  useEffect(() => {
    if (userFilterList9) {
      const filteredUsers = [];
      const filteredUsername = [];
      userFilterList9.map((filterUser) => {
        userList.map((selectUser) => {
          if (filterUser.username === selectUser.referralCode) {
            if (!filteredUsername.includes(selectUser.username)) {
              filteredUsername.push(selectUser.username);
              filteredUsers.push(selectUser);
            }
          }
          return true;
        });
        return true;
      });
      return setUserFilterList10(filteredUsers);
    }
  }, [userList, userFilterList9]);

  useEffect(() => {
    const finalArray = [
      ...userFilterList,
      ...userFilterList1,
      ...userFilterList2,
      ...userFilterList3,
      ...userFilterList4,
      ...userFilterList5,
      ...userFilterList6,
      ...userFilterList7,
      ...userFilterList8,
      ...userFilterList9,
      ...userFilterList10,
    ];
    setUserFilterListFinal(finalArray);
  }, [
    userFilterList,
    userFilterList1,
    userFilterList2,
    userFilterList3,
    userFilterList4,
    userFilterList5,
    userFilterList6,
    userFilterList7,
    userFilterList8,
    userFilterList9,
    userFilterList10,
  ]);

  useEffect(() => {
    const keys = ['username'];
    const filtered = userFilterListFinal.filter(
      ((s) => (o) =>
        ((k) => !s.has(k) && s.add(k))(keys.map((k) => o[k]).join('|')))(
        new Set()
      )
    );
    setUserFilterListFinally(filtered);
  }, [userFilterListFinal]);

  return (
    <div>
      <ProtectedLayout
        content={
          <div className="dashboard-content">
            <h3>Team Members</h3>
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
                {userFilterList.length ? (
                  <table>
                    <thead>
                      <tr>
                        <th>Username</th>
                        <th>Sponsor</th>
                        <th>MTI Link</th>
                        <th>Olympus Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userFilterList.map((userL) => (
                        <tr>
                          <td>{userL.username}</td>
                          <td>{userL.referralCode}</td>
                          <td>{userL.mtiLink}</td>
                          <td>{`https://olympus.ng/register?referral=${userL.username}`}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No team member</p>
                )}
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
