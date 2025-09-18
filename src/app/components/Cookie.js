"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";

const Cookie = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("Cookie");

  useEffect(() => {
    const cookieConsent = Cookies.get("EAS-cookie");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    Cookies.set("EAS-cookie", "accepted_all", { expires: 365 });
    setIsVisible(false);
  };

  const handleAcceptEssentials = () => {
    Cookies.set("EAS-cookie", "accepted_essentials", { expires: 365 });
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="cookie-main" role="dialog" aria-live="polite">
          <div className="cookie">
            <div className="cookie-wrapper">
              <div className="cookie-text">
                {/* ✅ render HTML from translation */}
                <p
                  dangerouslySetInnerHTML={{
                    __html: t.raw("message"), // use .raw() instead of t()
                  }}
                />
              </div>
              <div className="cookie-btn">
                <button
                  onClick={handleAcceptAll}
                  className="btn cookie-allow"
                  aria-label={t("acceptAll")}
                >
                  {t("acceptAll")}
                </button>
                <button
                  onClick={handleAcceptEssentials}
                  className="btn cookie-close"
                  aria-label={t("acceptEssentials")}
                >
                  {t("acceptEssentials")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookie;
