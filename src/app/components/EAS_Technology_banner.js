"use client";

import React from "react";
import { useTranslations } from "next-intl";

const EAS_Technology_banner = () => {
  const t = useTranslations("EAS_Technology_banner");

  return (
    <section className="eas-banner">
      <div className="container">
        <h1>{t("heading")}</h1>
        <h2>{t("subheading")}</h2>
      </div>
    </section>
  );
};

export default EAS_Technology_banner;
