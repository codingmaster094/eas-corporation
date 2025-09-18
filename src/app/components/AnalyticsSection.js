"use client";

import { useTranslations } from "next-intl";

export default function AnalyticsSection() {
  const t = useTranslations("AnalyticsSection");

  return (
    <section className="analytics py py-b">
      <div className="container">
        <div className="analytics-wrapper py py-b">
          <div className="com-title">
            <span>{t("subtitle")}</span>
            <h2>{t("title")}</h2>
          </div>

          <div className="analytics-text">
            <p>{t("paragraph1")}</p>
          </div>

          <div className="analytics-text">
            <p>{t("paragraph2")}</p>
          </div>

          <div className="analytics-text">
            <p>{t("paragraph3")}</p>
          </div>

          <div className="analytics-text">
            <p>{t("paragraph4")}</p>
          </div>

          <div className="analytics-text">
            <p>{t("paragraph5")}</p>
          </div>

          <div className="analytics-text">
            <p>{t("paragraph6")}</p>
          </div>

          <div className="analytics-text">
            <p>{t("paragraph7")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
