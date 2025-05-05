import React, { useEffect, useState } from "react";
import CloseMenu from "../../assets/icons/x.svg?react";
import MenuIcon from "../../assets/icons/menu.svg?react";
import Logo from "../../assets/icons/main-logo.svg?react";

import "./header.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sliderHeight = 500;
      setIsScrolled(window.scrollY > sliderHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [click, setClick] = useState<boolean>(false);

  const handleClick = (): void => setClick(!click);
  const closeMobileMenu = (): void => setClick(false);

  const navLinks = [
    { label: "HAKKIMIZDA", href: "/about" },
    { label: "BLOG", href: "/blog" },
    { label: "İLETİŞİM", href: "/contact" },
    { label: "GİRİŞ YAP", href: "/signin", mobileOnly: true },
    {
      label: "ÜYE OL",
      href: "/signup",
      mobileOnly: true,
      className: "sign-up",
    },
  ];

  return (
    <div className={isScrolled ? "header navbar scrolled" : "header navbar"}>
      <div className="nav-content">
        <div className="logo-nav">
          <div className="logo-container">
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            {navLinks.map(({ label, href, mobileOnly, className }, index) => (
              <li
                key={index}
                className={`option${mobileOnly ? " mobile-option" : ""}`}
                onClick={closeMobileMenu}
              >
                <Link to={href} className={className || ""}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="signin-up">
          <li className="sign-in" onClick={closeMobileMenu}>
            <a href="#">GİRİŞ YAP</a>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to="/signup" className="signup-btn">
              ÜYE OL
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
