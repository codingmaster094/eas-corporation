
"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import heroBanner from "../../../public/img/heroBanner.jpg"
const HeroBanner = () => {
  const t = useTranslations("HeroBanner");
  return (
     <section className="hero-banner">
      <div className="hero-wrapper">
        <div className="hero-img">
        {/* <video autoPlay loop muted playsInline>
        <source src="/video/hero_banner.mp4" type="video/mp4" />
        </video> */}
        <Image src={heroBanner} />
        </div>
        <div className="hero-content">
          <h1>{t('title')}</h1>
          <p>{t('description')}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
