"use client";
import React, { useState } from "react";
import Image from "next/image";
import kotacktBG from "../../../../public/img/kotackt-bg.png";
import call from "../../../../public/img/call.svg";
import mail from "../../../../public/img/mail.svg";
import location from "../../../../public/img/location.svg";
import map from "../../../../public/img/map.png";
import Link from "next/link";
import Newsletter from "../../components/Newsletter";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState({
    subject: "New Contact",
    name: "",
    email: "",
    phone: "",
    message: "",
    betreff: "",
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
      process.env.NEXT_PUBLIC_SENDER_MAIL ||
      "https://formspree.io/f/mdkonqvw";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess(true);
        setFormData({
          subject: "New Contact",
          name: "",
          email: "",
          phone: "",
          message: "",
          betreff: "",
        });
      } else {
        setErrorMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setErrorMessage(t("error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-banner docu-banner">
        <div className="hero-wrapper">
          <div className="hero-img">
            <Image src={kotacktBG} alt="hero" />
          </div>
          <div className="hero-content">
            <h1>{t("heroTitle")}</h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact py py-b">
        <div className="container">
          <div className="contact-wrapper py py-b">
            <div className="contact-text">
              <div className="com-title">
                <span>{t("subtitle")}</span>
                <h2>{t("heading")}</h2>
              </div>
              <div className="contact-detail">
                {/* Call */}
                <div className="cd-box">
                  <div className="cd-img">
                    <Image src={call} alt="call" />
                  </div>
                  <div className="cd-title">
                    <p>{t("callTitle")}</p>
                    <Link href="tel:+8551044444">{t("phone")}</Link>
                    <Link href="/">{t("fax")}</Link>
                  </div>
                </div>

                {/* Email */}
                <div className="cd-box">
                  <div className="cd-img">
                    <Image src={mail} alt="email" />
                  </div>
                  <div className="cd-title">
                    <p>{t("emailTitle")}</p>
                    <Link href="mailto:contact@eas-corporation.com">
                      contact@eas-corporation.com
                    </Link>
                  </div>
                </div>

                {/* Address */}
                <div className="cd-box">
                  <div className="cd-img">
                    <Image src={location} alt="location" />
                  </div>
                  <div className="cd-title">
                    <p>{t("addressTitle")}</p>
                    <p
                      dangerouslySetInnerHTML={{ __html: t.raw("address") }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form">
              <h3>{t("formTitle")}</h3>
              <form onSubmit={handleSubmit} method="POST">
                <div className="in-filds">
                  <div className="in-fild">
                    <input
                      type="text"
                      name="name"
                      placeholder={t("form.name")}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="in-fild">
                    <input
                      type="email"
                      name="email"
                      placeholder={t("form.email")}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="in-fild">
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("form.phone")}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="in-fild">
                  <input
                    type="text"
                    name="subject"
                    placeholder={t("form.subject")}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="in-fild">
                  <textarea
                    name="message"
                    placeholder={t("form.message")}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="in-fild privacy-container">
                  <p>
                    {t("form.privacy")}{" "}
                    <a
                      href="/datenschutzerklaerung"
                      className="cookie_a"
                      target="_blank"
                    >
                      {t("form.privacyLink")}
                    </a>
                  </p>
                </div>

                <div className="in-button">
                  <input
                    type="submit"
                    value={loading ? t("form.sending") : t("form.submit")}
                    disabled={loading}
                  />
                </div>
              </form>

              {success && (
                <div className="success-message">
                  <p>{t("success")}</p>
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
      </section>

      {/* Map Section */}
      <section className="map py">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-img">
              <Image src={map} alt="google map" />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Page;
