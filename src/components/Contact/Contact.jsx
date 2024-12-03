import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100,    // Offset from the trigger point
      easing: "ease-in-out", // Easing function
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text} data-aos="fade-up">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li
          className={styles.link}
          data-aos="fade-up" // Animation for email link
          data-aos-delay="200"
        >
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li
          className={styles.link}
          data-aos="fade-up" // Animation for LinkedIn link
          data-aos-delay="300"
        >
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
        </li>
        <li
          className={styles.link}
          data-aos="fade-up" // Animation for GitHub link
          data-aos-delay="400"
        >
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};
