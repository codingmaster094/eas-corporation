"use client";
import Image from "next/image";
import unterBG from "../../../../public/img/unter-bg.jpeg";
import unter1 from "../../../../public/img/unter-1.png";
import unter2 from "../../../../public/img/unter-2.png";
import unter3 from "../../../../public/img/unter-3.png";
import unter4 from "../../../../public/img/unter-4.png";
import unter5 from "../../../../public/img/unter-5.png";
import unter6 from "../../../../public/img/unter-6.png";
import Newsletter from "../../components/Newsletter";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Unternehmen");
  console.log('t.raw("section1.boxes")', t.raw("section1.boxes"));
  return (
    <>
      {/* HERO */}
      <section className="hero-banner">
        <div className="hero-wrapper">
          <div className="hero-img">
            <Image src={unterBG} alt="hero" />
          </div>
          <div className="hero-content">
            <h1>{t("heroTitle")}</h1>
          </div>
        </div>
      </section>
      {/* SECTION 1 */}
      <div className="unter-analytes py py-b">
        <section className="unter-analy py py-b">
          <div className="container">
            <div className="analytics-wrapper">
              <div className="com-title">
                <span>{t("section1.subtitle")}</span>
                <h2>{t("section1.title")}</h2>
              </div>
              <div className="unter-analy-box">
                <ul>
                  {t.raw("section1.boxes").map((point, idx) => (
                    <li key={idx}>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
                <Image src={unter1} alt="unter image" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="unter-analy py py-b">
          <div className="container">
            <div className="analytics-wrapper">
              <div className="com-title">
                <span>{t("section2.subtitle")}</span>
                <h2>{t("section2.title")}</h2>
              </div>
              <div className="unter-analy-box">
                {t.raw("section2.boxes").map((point, idx) => (
                  <div className="analytics-text" key={idx}>
                    <p>{point}</p>
                  </div>
                ))}
                <div className="unter-img">
                  <Image src={unter2} alt="unter image" />
                  <Image src={unter3} alt="unter image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="unter-analy py py-b">
          <div className="container">
            <div className="analytics-wrapper">
              <div className="com-title">
                <span>{t("section3.subtitle")}</span>
                <h2>{t("section3.title")}</h2>
              </div>
              <div className="unter-analy-box">
                {t.raw("section3.boxes").map((point, idx) => (
                  <div className="analytics-text" key={idx}>
                    <p>{point}</p>
                  </div>
                ))}
                <Image src={unter4} alt="unter image" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="unter-about py">
        <div className="container">
          <div className="unter-about-wrapper">
            <div className="unter-about-title com-title">
              <span>{t("section4.subtitle")}</span>
            </div>
            <div className="unter-about-boxs">
              {t.raw("section4.boxes").map((point, idx) => {
                return (
                  <div className="unter-about-box" key={idx}>
                    <div className="unter-about-no">{idx + 1}</div>
                    <div className="unter-about-text">
                      <p>{point}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="unter-content">
              <p>{t("section4.content")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="unter-analy py py-b">
        <div className="container">
          <div className="analytics-wrapper">
            <div className="unter-analy-box">
              <div className="com-title">
                {/* <span> WISSEN ÜBER UNSER UNTERNEHMEN </span> */}
                <h2 className="unter">{t("section5.title")} </h2>
              </div>
              <div className="unter-img">
                <Image src={unter5} alt="unter image" />
                <div className="unter-text">
                  <ul>
                    {t.raw("section5.boxes").map((point, idx) => {
                      return <li key={idx}>{point}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="unter-analy unter-analy-ti py py-b">
        <div className="container">
          <div className="analytics-wrapper">
            <div className="com-title com-title">
              <span>{t("section6.subtitle")}</span>
              <h2>{t("section6.title")}</h2>
            </div>
            <p>
              <strong>{t("intro")}</strong>
            </p>

            <ul>
              {t.raw("section6.boxes").map((point, idx) => {
                return <li key={idx}>{point}</li>;
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="unter-analy py">
        <div className="container">
          <div className="analytics-wrapper">
            <div className="unter-analy-box">
              <div className="unter-img">
                <div className="unter-img-text">
                  <div className="com-title">
                    {/* <span> WER WIR ALS UNTERNEHMEN SIND </span> */}
                    <h2 className="unter">{t("section7.title")} </h2>
                  </div>
                  <ul>
                    {t.raw("section7.boxes").map((point, idx) => {
                      return <li key={idx}>{point}</li>;
                    })}
                  </ul>
                </div>

                <div className="unter-postion-img">
                  <Image src={unter6} alt="unter image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default Page;
