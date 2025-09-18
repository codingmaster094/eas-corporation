'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

import logo from '../../../public/img/logo.png'; 
import menu_icon from '../../../public/img/menu-icon.svg'; 
import close_icon from '../../../public/img/close-icon.svg'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false); // dropdown state
  const t = useTranslations("Header.menu");
  const locale = useLocale(); // current locale

  const locales = ["en", "de"]; // add more if needed

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    if (menuOpen) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [menuOpen]);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const handleLangToggle = (e) => {
    e.stopPropagation();
    setLangOpen(!langOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          {/* Menu Icon */}
          <div className="menu-icon" onClick={handleMenuToggle}>
            <Image src={menu_icon} alt="menu_icon"/>
          </div>

          {/* Side Menu */}
          <div className={`side-menu ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link href={`/${locale}`} locale={locale}>{t("home")}</Link>
              </li>
              <li>
                <Link href={`/${locale}/unternehmen`} locale={locale}>{t("unternehmen")}</Link>
              </li>
              <li>
                <Link href={`/${locale}/team`} locale={locale}>{t("team")}</Link>
              </li>
              <li>
                <Link href={`/${locale}/produkt-und-leistungs-portfolio`} locale={locale}>{t("portfolio")}</Link>
              </li>
              <li>
                <Link href={`/${locale}/kontakt`} locale={locale}>{t("kontakt")}</Link>
              </li>
              <li>
                <Link href={`/${locale}/dokumente`} locale={locale}>{t("dokumente")}</Link>
              </li>
              <li>
                <Link href={`/${locale}/eas_technology_mapp`} locale={locale}>{t("technology")}</Link>
              </li>
            </ul>
            <div className="close-icon" onClick={handleMenuToggle}>
              <Image src={close_icon} alt="close-icon" />
            </div>
          </div>

          {/* Logo */}
          <div className="logo">
            <Link href={`/${locale}`} locale={locale}>
              <Image src={logo} alt="logo" />
            </Link>
          </div>

          {/* Right side: Language dropdown */}
          <div className="lang-dropdown" onClick={handleLangToggle}>
            <span>{locale.toUpperCase()}</span>
            <ul className={`lang-menu ${langOpen ? "open" : ""}`}>
              {locales.map((loc) => (
                <li key={loc}>
                  <Link href={`/${loc}`} locale={loc}>
                    {loc.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
