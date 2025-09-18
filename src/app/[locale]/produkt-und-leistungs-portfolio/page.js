"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

import productBG from "../../../../public/img/portfolio-bg.jpeg";
import product1 from "../../../../public/img/portfolio-bg2.jpeg";
import pr1 from "../../../../public/img/pr-1.jpg";
import pr12 from "../../../../public/img/12.jpg";
import product2 from "../../../../public/img/portfolio-bg3.jpg";
// import pr2 from "../../../../public/img/portfolio-bg4.jpg"; // unused in your code

import Portfolio_Caraousel from "../../components/Portfolio_Caraousel";
import Newsletter from "../../components/Newsletter";

const Page = () => {
  const t = useTranslations("Product");

  return (
    <>
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-wrapper">
          <div className="hero-img">
            <Image src={productBG} alt="hero" />
          </div>
          <div className="hero-content">
            <h1>{t("heroTitle")}</h1>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="section product-dec py py-b">
        <div className="container">
          <div className="product-dec-wrapper py">
            <div className="com-title">
              <span>{t("section1.heading")}</span>
              <h2>{t("section1.title")}</h2>
            </div>

            {/* Intro A */}
            <div className="product-title">
              <p>
                <strong>{t("section1.intro1")}</strong>
              </p>
              <ul>
                {t.raw("section1.lists1").map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="product-img">
              <Image src={product1} alt="product image" />
            </div>

            {/* Intro B */}
            <div className="product-title">
              <p>
                <strong>{t("section1.intro2")}</strong>
              </p>
              <ul>
                {t.raw("section1.lists2").map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="dami-text">
                <p>{t("section1.description")}</p>
              </div>
            </div>

            {/* Neural Network Explanation */}
            <div className="product-blog">
              <p>{t("section1.subdesc")}</p>
              <Portfolio_Caraousel />
            </div>

            {/* Intro C */}
            <div className="product-title">
              <p>
                <strong>{t("section1.intro3")}</strong>
              </p>
              <ul>
                {t.raw("section1.lists3").map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="dami-text">
                <p>{t("section1.description1")}</p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="unter-analy-box product-analy-box">
              <div className="com-title">
                <span>{t("section2.heading")}</span>
                <h2>{t("section2.title")}</h2>
              </div>
              <div className="product-texts">
                <div className="pr-text">
                  <p>{t("section2.description1")}</p>
                  <ul>
                    <li>{t("section2.listTitle1")}</li>
                  </ul>
                  <p>{t("section2.listDes1")}</p>
                </div>
                <div className="pr-text">
                  <ul>
                    <li>{t("section2.listTitle2")}</li>
                  </ul>
                  <p>{t("section2.listDes2")}</p>
                </div>
              </div>
              <Image
                src={pr1}
                className="interface_image"
                alt="product analy"
              />
            </div>

            {/* Section 3 */}
            <div className="product-line">
              <div className="com-title">
                <span>{t("section3.heading")}</span>
                <h2>{t("section3.title")}</h2>
              </div>
              
              <div className="analytics-text">
             <div
  dangerouslySetInnerHTML={{ __html: t.raw("section3.description") }}
/>
                <Image src={product2} alt="product blog" />
                <p>
                  <strong>{t("section3.strong")}</strong>
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="product-line">
              <div className="com-title">
                <span>{t("section4.heading")}</span>
                <h2>{t("section4.title")}</h2>
              </div>
              <div className="pr-blog-boxs">
                {t.raw("section4.boxes").map((box, i) => (
                  <div className="pr-blog-box" key={i}>
                    <div className="pr-title">
                      <p>{box.title}</p>
                    </div>
                    <div className="pr-dec">
                      <p>{box.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5 */}
            <div className="product-line">
              <div className="com-title">
                <span>{t("section5.heading")}</span>
                <h2>{t("section5.title")}</h2>
                <Image src={pr12} alt="product blog" />
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
