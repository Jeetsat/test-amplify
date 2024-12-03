import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 150,    // Offset from the trigger point
      easing: "ease-in-out", // Easing function
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title} data-aos="fade-up">
        About
      </h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpeg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          data-aos="fade-right" // Animation for the image
          data-aos-delay="200"
        />
        <ul className={styles.aboutItems}>
          <li
            className={styles.aboutItem}
            data-aos="fade-up" // Animation for the first item
            data-aos-delay="300"
          >
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li
            className={styles.aboutItem}
            data-aos="fade-up" // Animation for the second item
            data-aos-delay="400"
          >
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized back-end systems
                and APIs.
              </p>
            </div>
          </li>
          <li
            className={styles.aboutItem}
            data-aos="fade-up" // Animation for the third item
            data-aos-delay="500"
          >
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and created design
                systems as well.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
