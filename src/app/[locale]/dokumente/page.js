"use client";
import Link from "next/link";
import Image from "next/image";
import dokumentBg from "../../../../public/img/dokument-bg.png";
import Download_svg from "../../../../public/img/downloand.svg";
import Newsletter from "../../components/Newsletter";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Documents");
  const docs = t.raw("list"); // 👈 raw so we get the array back

  return (
    <>
      {/* Hero Section */}
      <section className="hero-banner docu-banner">
        <div className="hero-wrapper">
          <div className="hero-img">
            <Image src={dokumentBg} alt="hero" />
          </div>
          <div className="hero-content">
            <h1>{t("heroTitle")}</h1>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="dokument py py-b">
        <div className="container">
          <div className="dokument-wrapper py">
            {docs.map((doc, index) => (
              <div className="doc-box" key={index}>
                <div className="docs-bg">
                  <div className="doc-title">
                    <h2>{doc.title}</h2>
                  </div>
                  <div className="doc-dec">
                    <p>{doc.desc}</p>
                  </div>
                </div>
                <Link href={doc.link} aria-label={doc.title}>
                  {t("download")}{" "}
                  <Image src={Download_svg} alt="download icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default Page;
