"use client";
import Image from "next/image";
import ps1 from "../../../public/img/ps-1.png";
import ps2 from "../../../public/img/ps-2.png";
import ps3 from "../../../public/img/ps-3.png";
import { useEffect, useRef } from "react";
const Portfolio_Caraousel = () => {
    const carouselRef = useRef();

    useEffect(() => {
        // Only run this on the client side (after the component mounts)
        if (typeof window !== "undefined") {
          // Dynamically import jQuery and OwlCarousel after rendering
          const loadOwlCarousel = async () => {
            // Load jQuery first
            const jQueryScript = document.createElement("script");
            jQueryScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
            jQueryScript.onload = () => {
              // Load OwlCarousel CSS and JS after jQuery is loaded
              const owlCarouselCSS = document.createElement("link");
              owlCarouselCSS.rel = "stylesheet";
              owlCarouselCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
              document.head.appendChild(owlCarouselCSS);
    
              const owlCarouselJS = document.createElement("script");
              owlCarouselJS.src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
              owlCarouselJS.onload = () => {
                // Initialize the OwlCarousel after the script is loaded
                window.$ = window.jQuery;
                jQuery(".product-sliders").owlCarousel({
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
                    640: {
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
    <>
      <div className="product-slider">
        <div className="owl-carousel product-sliders" ref={carouselRef}>
          <div className="item">
            <Image src={ps1} alt="product slider" />
          </div>
          <div className="item">
            <Image src={ps2} alt="product slider" />
          </div>
          <div className="item">
            <Image src={ps3} alt="product slider" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio_Caraousel;
