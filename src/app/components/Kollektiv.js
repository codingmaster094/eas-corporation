"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Kollektiv = () => {
  const t = useTranslations("Kollektiv");

  return (
    <section className="container">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="kollektiv-swiper"
      >
        {/* Block 1 */}
        <SwiperSlide>
          <div className="kollektiv-container">
            <div className="kollektiv-video">
              <video autoPlay loop muted playsInline>
                <source src="/video/1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="kollektiv-content">
              <p>{t("block1.paragraph1")}</p>
              <p>{t("block1.paragraph2")}</p>
              <p>{t("block1.paragraph3")}</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Block 2 */}
        <SwiperSlide>
          <div className="kollektiv-container">
            <div className="kollektiv-video">
              <video autoPlay loop muted playsInline>
                <source src="/video/2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="kollektiv-content">
              <p>{t("block2.paragraph1")}</p>
              <p>{t("block2.paragraph2")}</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Block 3 */}
        <SwiperSlide>
          <div className="kollektiv-container">
            <div className="kollektiv-video">
              <video autoPlay loop muted playsInline>
                <source src="/video/3.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="kollektiv-content">
              <p>{t("block3.paragraph1")}</p>
              <p>
                <strong>{t("block3.paragraph2")}</strong>
              </p>
              <p>{t("block3.paragraph3")}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Kollektiv;
