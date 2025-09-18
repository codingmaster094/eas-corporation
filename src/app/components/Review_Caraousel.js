"use client";
import Image from "next/image";
import review1 from "../../public/img/review1.png";
import review2 from "../../public/img/review2.jpeg";
import review3 from "../../public/img/review3.jpeg";
import vector from "../../public/img/vector.svg";
import { useEffect, useRef } from "react";
const Review_Caraousel = () => {
  const carouselRef = useRef();

  useEffect(() => {
    // Only run this on the client side (after the component mounts)
    if (typeof window !== "undefined") {
      // Dynamically import jQuery and OwlCarousel after rendering
      const loadOwlCarousel = async () => {
        // Load jQuery first
        const jQueryScript = document.createElement("script");
        jQueryScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        jQueryScript.onload = () => {
          // Load OwlCarousel CSS and JS after jQuery is loaded
          const owlCarouselCSS = document.createElement("link");
          owlCarouselCSS.rel = "stylesheet";
          owlCarouselCSS.href =
            "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
          document.head.appendChild(owlCarouselCSS);

          const owlCarouselJS = document.createElement("script");
          owlCarouselJS.src =
            "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
          owlCarouselJS.onload = () => {
            // Initialize the OwlCarousel after the script is loaded
            window.$ = window.jQuery;
            jQuery(".review-slide").owlCarousel({
              stagePadding: 200,
              margin: 20,
              loop: true,
              items: 1,
              lazyLoad: true,
              autoplay: true,
              autoplaySpeed: 2000,
              autoplayTimeout: 5000,
              autoplayHoverPause: true,
              nav: true,
              dots: false,
              responsive: {
                0: {
                  stagePadding: 10,
                },
                700: {
                  stagePadding: 50,
                },
                991: {
                  stagePadding: 100,
                },
                1100: {
                  stagePadding: 150,
                },
                1280  : {
                  stagePadding: 200,
                },
              },
            });
          };
          document.body.appendChild(owlCarouselJS);
        };
        document.body.appendChild(jQueryScript);
      };

      loadOwlCarousel();
    }
  }, []);
  return (
      <div class="owl-carousel review-slide" ref={carouselRef}>
        <div class="item">
          <div class="review-box">
            <div class="review-img">
            <Image src={review1} alt="review oner" />
            </div>
            <div class="review-text">
            <Image src={vector} alt="vector" />
              <div class="re-content">
                <p>
                  Vielen Dank für die Vorauswahl einiger wirklich toller
                  Praktiken! Ich weiß Ihre Hilfe wirklich zu schätzen - sie
                  scheinen alle sehr innovativ zu sein und den Auftrag gut zu
                  erfüllen, aber auch alle so unterschiedlich!
                </p>
              </div>
              <div class="re-title">
                <h3>Harriet Mitchell</h3>
                <p>MARKETING DIRECTOR</p>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="review-box">
            <div class="review-img">
            <Image src={review2} alt="review oner" />
            </div>
            <div class="review-text">
            <Image src={vector} alt="vector" />
              <div class="re-content">
                <p>
                  Vielen Dank für die Vorauswahl einiger wirklich toller
                  Praktiken! Ich weiß Ihre Hilfe wirklich zu schätzen - sie
                  scheinen alle sehr innovativ zu sein und den Auftrag gut zu
                  erfüllen, aber auch alle so unterschiedlich!
                </p>
              </div>
              <div class="re-title">
                <h3>Harriet Mitchell</h3>
                <p>MARKETING DIRECTOR</p>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="review-box">
            <div class="review-img">
            <Image src={review3} alt="review oner" />
            </div>
            <div class="review-text">
            <Image src={vector} alt="vector" />
              <div class="re-content">
                <p>
                  Vielen Dank für die Vorauswahl einiger wirklich toller
                  Praktiken! Ich weiß Ihre Hilfe wirklich zu schätzen - sie
                  scheinen alle sehr innovativ zu sein und den Auftrag gut zu
                  erfüllen, aber auch alle so unterschiedlich!
                </p>
              </div>
              <div class="re-title">
                <h3>Harriet Mitchell</h3>
                <p>MARKETING DIRECTOR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Review_Caraousel;
