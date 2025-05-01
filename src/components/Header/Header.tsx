import React, { useEffect, useState } from "react";
import CloseMenu from "../../assets/icons/x.svg?react";
import MenuIcon from "../../assets/icons/menu.svg?react";
import Logo from "../../assets/icons/main-logo.svg?react";

import "./header.css";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user scrolled more than slider's height
      const sliderHeight = 500; // Adjust this to match your slider's real height
      setIsScrolled(window.scrollY > sliderHeight);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [click, setClick] = useState<boolean>(false);

  const handleClick = (): void => setClick(!click);
  const closeMobileMenu = (): void => setClick(false);

  const navLinks = [
    // { label: "ANA SAYFA", href: "#" },
    { label: "HAKKIMIZDA", href: "#" },
    { label: "BLOG", href: "#" },
    { label: "İLETİŞİM", href: "#" },
    { label: "GİRİŞ YAP", href: "#", mobileOnly: true },
    { label: "ÜYE OL", href: "#", mobileOnly: true, className: "sign-up" },
  ];

  return (
    <div className={isScrolled ? "header navbar scrolled" : "header navbar"}>
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <Logo className="logo" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          {navLinks.map(({ label, href, mobileOnly, className }, index) => (
            <li
              key={index}
              className={`option${mobileOnly ? " mobile-option" : ""}`}
              onClick={closeMobileMenu}
            >
              <a href={href} className={className || ""}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <a href="#">GİRİŞ YAP</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="#" className="signup-btn">
            ÜYE OL
          </a>
        </li>
      </ul>
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
