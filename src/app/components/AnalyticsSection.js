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
        </div>
      </div>
    </section>
  );
}
