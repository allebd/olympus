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
      const filterUsers = userList.filter(
        (filterUser) => filterUser.referralCode === user.username
      );
      setUserFilterList(filterUsers);
    });
  }, [getAllUsers]);

  useEffect(() => {
    if (userFilterList) {
      const filteredUsers = [];
      userList.map((selectUser) => {
        const filterUsers = userFilterList.filter(
          (filterUser) => filterUser.username === selectUser.referralCode
        );
        return filteredUsers.push(filterUsers);
      });
      return setUserFilterList1(filteredUsers);
    }
  }, [userFilterList]);

  useEffect(() => {
    if (userFilterList1) {
      const filteredUsers = [];
      userList.map((selectUser) => {
        const filterUsers = userFilterList1.filter(
          (filterUser) => filterUser.username === selectUser.referralCode
        );
        return filteredUsers.push(filterUsers);
      });
      return setUserFilterList2(filteredUsers);
    }
  }, [userFilterList1]);

  useEffect(() => {
    if (userFilterList2) {
      const filteredUsers = [];
      userList.map((selectUser) => {
        const filterUsers = userFilterList2.filter(
          (filterUser) => filterUser.username === selectUser.referralCode
        );
        return filteredUsers.push(filterUsers);
      });
      return setUserFilterList3(filteredUsers);
    }
  }, [userFilterList2]);

  useEffect(() => {
    if (userFilterList3) {
      const filteredUsers = [];
      userList.map((selectUser) => {
        const filterUsers = userFilterList3.filter(
          (filterUser) => filterUser.username === selectUser.referralCode
        );
        return filteredUsers.push(filterUsers);
      });
      return setUserFilterList4(filteredUsers);
    }
  }, [userFilterList3]);

  useEffect(() => {
    if (userFilterList4) {
      const filteredUsers = [];
      userList.map((selectUser) => {
        const filterUsers = userFilterList4.filter(
          (filterUser) => filterUser.username === selectUser.referralCode
        );
        return filteredUsers.push(filterUsers);
      });
      return setUserFilterList5(filteredUsers);
    }
  }, [userFilterList4]);

  useEffect(() => {
    if (userFilterList5) {
      const filteredUsers = [];
      userList.map((selectUser) => {
        const filterUsers = userFilterList5.filter(
          (filterUser) => filterUser.username === selectUser.referralCode
        );
        return filteredUsers.push(filterUsers);
      });
      return setUserFilterList6(filteredUsers);
    }
  }, [userFilterList5]);

  useEffect(() => {
    if (userFilterList6) {
      const filteredUsers = [];
      userList.map((selectUser) => {
        const filterUsers = userFilterList6.filter(
          (filterUser) => filterUser.username === selectUser.referralCode
        );
        return filteredUsers.push(filterUsers);
      });
      return setUserFilterList7(filteredUsers);
    }
  }, [userFilterList6]);

  useEffect(() => {
    if (userFilterList7) {
      const filteredUsers = [];
      userList.map((selectUser) => {
        const filterUsers = userFilterList7.filter(
          (filterUser) => filterUser.username === selectUser.referralCode
        );
        return filteredUsers.push(filterUsers);
      });
      return setUserFilterList8(filteredUsers);
    }
  }, [userFilterList7]);

  useEffect(() => {
    if (userFilterList8) {
      const filteredUsers = [];
      userList.map((selectUser) => {
        const filterUsers = userFilterList8.filter(
          (filterUser) => filterUser.username === selectUser.referralCode
        );
        return filteredUsers.push(filterUsers);
      });
      return setUserFilterList9(filteredUsers);
    }
  }, [userFilterList8]);

  useEffect(() => {
    if (userFilterList9) {
      const filteredUsers = [];
      userList.map((selectUser) => {
        const filterUsers = userFilterList9.filter(
          (filterUser) => filterUser.username === selectUser.referralCode
        );
        return filteredUsers.push(filterUsers);
      });
      return setUserFilterList10(filteredUsers);
    }
  }, [userFilterList9]);

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
    const finallyArray = userFilterListFinal.filter(
      (filterUser) => filterUser.length > 0
    );
    setUserFilterListFinally(finallyArray);
  }, [
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
                {userFilterListFinally.length ? (
                  <table>
                    <thead>
                      <tr>
                        <th>Username</th>
                        <th>MTI Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userFilterListFinally.map((user) => (
                        <tr>
                          <td>{user.username}</td>
                          <td>{user.mtiLink}</td>
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
