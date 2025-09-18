'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import F_logo from "../../../public/img/logo.png";
import F_mail from "../../../public/img/f-mail.svg";
import copy_right from "../../../public/img/copy-right.svg";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale(); 

  const [formData, setFormData] = useState({
    email: "",
    subject: "Neuer Abonnent",
  });
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setErrorMessage("");
    setLoading(true);

    const endpoint =
      process.env.NEXT_PUBLIC_SENDER_MAIL || "https://formspree.io/f/mdkonqvw";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess(true);
        setFormData({ email: "", subject: "Neuer Abonnent" });
      } else {
        setErrorMessage(`${t("newsletter.error")}: ${result.message}`);
      }
    } catch (error) {
      setErrorMessage(t("newsletter.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="f-wrapper py">
          <div className="f-main">
            {/* Logo */}
            <div className="f-logo">
              <Link href="/" aria-label="Footer Logo">
                <Image src={F_logo} alt="footer logo" />
              </Link>
            </div>

            {/* Menu */}
            <div className="f-menu">
              <ul>
                <li>
                  <Link href="/" locale={locale} aria-label={t("menu.home")}>
                    {t("menu.home")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/unternehmen`} aria-label={t("menu.unternehmen")}>
                    {t("menu.unternehmen")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/team`} aria-label={t("menu.team")}>
                    {t("menu.team")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/produkt-und-leistungs-portfolio`} aria-label={t("menu.portfolio")}>
                    {t("menu.portfolio")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/kontakt`} aria-label={t("menu.kontakt")}>
                    {t("menu.kontakt")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/dokumente`} aria-label={t("menu.dokumente")}>
                    {t("menu.dokumente")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/eas_technology_mapp`} aria-label={t("menu.technology")}>
                    {t("menu.technology")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="f-content">
            <div className="f-mail">
              <div className="mail">
                <Image src={F_mail} alt="F_mail" />
              </div>
              <div className="mail-text">
                <div className="f-title">
                  <p>{t("newsletter.title")}</p>
                </div>
                <p>{t("newsletter.description")}</p>
              </div>
            </div>

            <div className="f-ns-mail">
              <form onSubmit={handleSubmit} method="POST">
                <input
                  type="email"
                  name="email"
                  placeholder={t("newsletter.placeholder")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="in-button">
                  <input
                    type="submit"
                    value={loading ? t("newsletter.buttonLoading") : t("newsletter.button")}
                    disabled={loading}
                  />
                </div>
              </form>

              {success && (
                <div className="success-message">
                  <p>{t("newsletter.success")}</p>
                </div>
              )}

              {errorMessage && (
                <div className="error-message">
                  <p>{errorMessage}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copy-right">
        <div className="container">
          <div className="copy-wrapper">
            <div className="copy-text">
              <Image src={copy_right} alt="copy_right" />
              <p>{t("copy.text")}</p>
            </div>
            <div className="copy-link">
              <Link href="/impressum">{t("copy.impressum")}</Link>
              <Link href="/datenschutzerklaerung">{t("copy.privacy")}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
