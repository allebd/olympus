import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { useAuth } from '../../../hooks/useAuth';

export const Header = () => {
  const auth = useAuth();
  if (!auth.user) return null;

  return (
    <div>
      <div className="navigation">
        <div className="logo">
          <Link href="/dashboard">
            <a>
              <img
                src="/assets/images/Logo.svg"
                alt="Logo"
                width={123}
                height={45}
              />
            </a>
          </Link>
        </div>
        <div className="profile-header">
          <div className="profile-image">
            <CgProfile />
          </div>
          <div className="profile-name">Welcome {auth.user.firstName}</div>
        </div>
      </div>
    </div>
  );
};
