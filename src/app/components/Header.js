"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

import logo from "../../../public/img/logo.png";
import menu_icon from "../../../public/img/menu-icon.svg";
import close_icon from "../../../public/img/close-icon.svg";

// Import flags
import flagEn from "../../../public/img/en.webp";
import flagDe from "../../../public/img/de.webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const t = useTranslations("Header.menu");
  const locale = useLocale();

  const locales = ["en", "de"];
  const currentLocale = locale;

  // Add flag paths to country data
  const countryData = {
    en: { name: "English", code: "EN", flag: flagEn },
    de: { name: "German", code: "DE", flag: flagDe },
  };

  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const handleLangToggle = (e) => {
    e.stopPropagation();
    setLangOpen(!langOpen);
  };

  const handleLangSelect = () => {
    setLangOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          {/* Menu Icon */}
          <div className="menu-icon" onClick={handleMenuToggle}>
            <Image src={menu_icon} alt="menu_icon" />
          </div>

          {/* Side Menu */}
          <div className={`side-menu ${menuOpen ? "open" : ""}`}>
            <ul>
              <li><Link href={`/${locale}`} locale={locale}>{t("home")}</Link></li>
              <li><Link href={`/${locale}/unternehmen`} locale={locale}>{t("unternehmen")}</Link></li>
              <li><Link href={`/${locale}/team`} locale={locale}>{t("team")}</Link></li>
              <li><Link href={`/${locale}/produkt-und-leistungs-portfolio`} locale={locale}>{t("portfolio")}</Link></li>
              <li><Link href={`/${locale}/kontakt`} locale={locale}>{t("kontakt")}</Link></li>
              <li><Link href={`/${locale}/dokumente`} locale={locale}>{t("dokumente")}</Link></li>
              <li><Link href={`/${locale}/eas_technology_mapp`} locale={locale}>{t("technology")}</Link></li>
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

          {/* Language Dropdown */}
          <div className="country-dropdown-container" ref={dropdownRef}>
            <button className="selected-country" onClick={handleLangToggle}>
              <span className="country-code">
              <Image
                src={countryData[currentLocale]?.flag}
                alt={countryData[currentLocale]?.name}
                width={20}
                height={20}
                style={{ marginRight: "8px", borderRadius: "50%" }}
              />
                {countryData[currentLocale]?.code || currentLocale.toUpperCase()}
              </span>
              <span className={`dropdown-arrow ${langOpen ? "open" : ""}`}></span>
            </button>

            <ul className={`country-list ${langOpen ? "open" : ""}`}>
              {locales.map((loc) => (
                <li className="country-item" key={loc}>
                  <Link href={`/${loc}`} locale={loc} onClick={handleLangSelect}>
                    <Image
                      src={countryData[loc].flag}
                      alt={countryData[loc].name}
                      width={20}
                      height={20}
                      style={{ marginRight: "8px", borderRadius: "50%" }}
                    />
                    <span className="country-code">{countryData[loc].code}</span>
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
