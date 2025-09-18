"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import img1 from "../../../public/img/s-1.svg";
import img2 from "../../../public/img/s-2.svg";
import img3 from "../../../public/img/s-3.svg";
import img4 from "../../../public/img/s-4.svg";
import img5 from "../../../public/img/s-5.svg";

const images = [img1, img2, img3, img4, img5, img1];
export default function ServiceSection() {
  const t = useTranslations("ServiceSection");

  const services = t.raw("services"); // gets array from JSON

  return (
    <section className="service py">
      <div className="container">
        <div className="service-wrapper">
          <div className="com-title">
            <span>{t("title")}</span>
            <h2>{t("subtitle")}</h2>
          </div>

          <div className="service-boxs">
            {services.map((service, index) => (
              <div className="service-box" key={index}>
                {/* Image */}
                <div className="service-img">
                  <Image
                    src={images[index]}
                    alt="service image"
                    width={100}
                    height={100}
                  />
                </div>

                {/* Text */}
                <div className="service-text">
                  {Array.isArray(service.text) ? (
                    <>
                      <p>{service.text[0]}</p>
                      <ul className="Service_ul">
                        {service.text.slice(1).map((item, i) => (
                          <li key={i}>
                            <span>-</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p>{service.text}</p>
                  )}
                </div>

                {/* Hover Content */}
                <div className="service-hover">
                  <p>{service.hoverText}</p>
                  <Link href="/kontakt" aria-label="">
                    {t("button")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}