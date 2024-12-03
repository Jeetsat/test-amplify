import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (in milliseconds)
      offset: 200,    // Offset from the trigger point
      easing: "ease-in-out", // Easing function
      once: true,     // Whether the animation should occur only once
    });
  }, []);

  return (
    <section className={styles.container}>
      <div
        className={styles.content}
        data-aos="fade-right" // Animation for the content section
      >
        <h1 className={styles.title} data-aos="fade-up">
          Hi, I'm DK
        </h1>
        <p className={styles.description} data-aos="fade-up" data-aos-delay="200">
          I'm a professor at MIT ADT University Pune!
        </p>
        <a
          href="mailto:myemail@email.com"
          className={styles.contactBtn}
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Contact Me
        </a>
      </div>

      <img
        src={getImageUrl("hero/heroImage.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
        data-aos="fade-left" // Animation for the image
        data-aos-delay="400"
      />

      <div
        className={styles.topBlur}
        data-aos="fade-in"
        data-aos-delay="500"
      />
      <div
        className={styles.bottomBlur}
        data-aos="fade-in"
        data-aos-delay="600"
      />
    </section>
  );
};
