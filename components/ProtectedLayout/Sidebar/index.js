import Link from 'next/link';
import { useAuth } from '../../../hooks/useAuth';

export const Sidebar = () => {
  const auth = useAuth();
  return (
    <div>
      <div className="sidebar-container-extra">
        <div className="sidebar-container">
          <ul>
            <li>
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a>News &amp; Updates</a>
              </Link>
            </li>
            <li>
              <Link href="/referrals">
                <a>Referrals</a>
              </Link>
            </li>
            <li>
              <Link href="/meetings">
                <a>Meetings</a>
              </Link>
            </li>
            <li>
              <Link href="/messages">
                <a>Messages</a>
              </Link>
            </li>
            <li>
              <Link href="/password">
                <a>Change Password</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a onClick={() => auth.signOut()}>Logout</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
