import { useState, useEffect } from 'react';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';
import { CgMenuLeft, CgClose } from 'react-icons/cg';
import Link from 'next/link';
import { useAuth } from '../../../hooks/useAuth';

export const Sidebar = () => {
  const auth = useAuth();
  const { user } = auth;
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (auth.user) {
      setUsername(user.username);
    }
  }, [auth, user]);

  useEffect(() => {
    const navIcon = document.querySelector('#mobile-nav');
    const mobileOption = document.querySelector('#mobile-opt');
    const mobileClose = document.querySelector('#mobile-close');
    if (navIcon) {
      navIcon.addEventListener('click', () => {
        mobileOption.style.display = 'block';
      });
    }

    if (mobileClose) {
      mobileClose.addEventListener('click', () => {
        mobileOption.style.display = 'none';
      });
    }
  }, []);

  return (
    <div>
      <div className="social">
        Connect with Us
        <i>
          <Link href="https://chat.whatsapp.com/HiRe3SYyrGKDkn2Acrf0lI">
            <a target="_blank">
              <RiWhatsappFill />
            </a>
          </Link>
        </i>
        <i>
          <Link href="https://t.me/joinchat/FMDNwUmXcFNoQG6muHk5-A">
            <a target="_blank">
              <FaTelegramPlane />
            </a>
          </Link>
        </i>
      </div>
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
              <Link href="/direct">
                <a>Direct referrals</a>
              </Link>
            </li>
            <li>
              <Link href="/referrallink">
                <a>Referral Link</a>
              </Link>
            </li>
            <li>
              <Link href="/team">
                <a>Team members</a>
              </Link>
            </li>
            {username === 'olympus' ? (
              <div>
                <li>
                  <Link href="/allteam">
                    <a>All Team members</a>
                  </Link>
                </li>
                <li>
                  <Link href="/messages">
                    <a>Messages</a>
                  </Link>
                </li>
              </div>
            ) : (
              ''
            )}
            {/* <li>
              <Link href="/password">
                <a>Change Password</a>
              </Link>
            </li> */}
            <li>
              <Link href="/login">
                <a onClick={() => auth.signOut()}>Logout</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-mobile-nav">
        <div className="mobile-nav" id="mobile-nav">
          <i>
            <CgMenuLeft />
          </i>{' '}
          MENU
        </div>
        <div className="mobile-opt" id="mobile-opt">
          <div className="mobile-close" id="mobile-close">
            <CgClose />
          </div>
          <ul className="mobile-menu">
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
              <Link href="/direct">
                <a>Direct referrals</a>
              </Link>
            </li>
            <li>
              <Link href="/referrallink">
                <a>Referral Link</a>
              </Link>
            </li>
            <li>
              <Link href="/team">
                <a>Team members</a>
              </Link>
            </li>
            {username === 'olympus' ? (
              <div>
                <li>
                  <Link href="/allteam">
                    <a>All members</a>
                  </Link>
                </li>
                <li>
                  <Link href="/messages">
                    <a>Messages</a>
                  </Link>
                </li>
              </div>
            ) : (
              ''
            )}
            {/* <li>
              <Link href="/password">
                <a>Change Password</a>
              </Link>
            </li> */}
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
