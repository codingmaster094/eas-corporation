"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Newsletter() {
  const t = useTranslations("Newsletter");

  return (
    <section className="news-latter">
      <div className="container">
        <div className="ns-latter">
          <div className="ns-content">
            <div className="ns-title">
              <h2>{t("title")}</h2>
              <p>{t("paragraphs")}</p>
              {/* ✅ dynamically map multiple paragraphs */}
            </div>
            <Link href="/kontakt" aria-label="">
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
