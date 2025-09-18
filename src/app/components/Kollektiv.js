"use client";
import React from "react";
import { useTranslations } from "next-intl";

const Kollektiv = () => {
  const t = useTranslations("Kollektiv");

  return (
    <section className="container">
      {/* Block 1 */}
      <div className="kollektiv-container">
        <div className="kollektiv-video">
          <video autoPlay loop muted playsInline>
            <source src="/video/1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="kollektiv-content">
          <p>{t("block1.paragraph1")}</p>
          <p>{t("block1.paragraph2")}</p>
          <p>{t("block1.paragraph3")}</p>
        </div>
      </div>

      {/* Block 2 */}
      <div className="kollektiv-container">
        <div className="kollektiv-video">
          <video autoPlay loop muted playsInline>
            <source src="/video/2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="kollektiv-content">
          <p>{t("block2.paragraph1")}</p>
          <p>{t("block2.paragraph2")}</p>
        </div>
      </div>

      {/* Block 3 */}
      <div className="kollektiv-container">
        <div className="kollektiv-video">
          <video autoPlay loop muted playsInline>
            <source src="/video/3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="kollektiv-content">
          <p>{t("block3.paragraph1")}</p>
          <p>
            <strong>{t("block3.paragraph2")}</strong>
          </p>
          <p>{t("block3.paragraph3")}</p>
        </div>
      </div>
    </section>
  );
};

export default Kollektiv;
