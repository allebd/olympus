import Link from 'next/link';

export const Sidebar = () => (
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
            <Link href="#">
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
            <Link href="/settings">
              <a>Change Password</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Logout</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
