import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';

export const Header = () => (
  <div>
    <div className="navigation">
      <div className="logo">
        <Link href="/">
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
        <div className="profile-name">Welcome Christen</div>
      </div>
    </div>
  </div>
);
