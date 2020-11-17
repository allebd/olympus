import Link from 'next/link';
import { useEffect } from 'react';
import { CgClose, CgMenuRight } from 'react-icons/cg';

export const Navigation = () => {
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
      <div className="navigation">
        <div className="logo">
          <Link href="/">
            <a>
              <img
                src="/assets/images/Logo.svg"
                alt="Logo"
                width={165}
                height={60}
              />
            </a>
          </Link>
        </div>
        <div className="menu">
          <ul className="not-mobile">
            <li>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>ABOUT US</a>
              </Link>
            </li>
            <li>
              <Link href="/faqs">
                <a>FAQs</a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a>REGISTER</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a>LOGIN</a>
              </Link>
            </li>
          </ul>
          <div className="mobile-nav" id="mobile-nav">
            <CgMenuRight />
          </div>
          <div className="mobile-opt" id="mobile-opt">
            <div className="mobile-close" id="mobile-close">
              <CgClose />
            </div>
            <ul className="mobile-menu">
              <li>
                <Link href="/">
                  <a>HOME</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>ABOUT US</a>
                </Link>
              </li>
              <li>
                <Link href="/faqs">
                  <a>FAQs</a>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <a>REGISTER</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>LOGIN</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
