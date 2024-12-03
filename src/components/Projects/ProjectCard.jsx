import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
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
    <div className={styles.container} data-aos="fade-up">
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
        data-aos="zoom-in"
        data-aos-delay="100"
      />
      <h3 className={styles.title} data-aos="fade-up" data-aos-delay="200">
        {title}
      </h3>
      <p className={styles.description} data-aos="fade-up" data-aos-delay="300">
        {description}
      </p>
      <ul className={styles.skills} data-aos="fade-up" data-aos-delay="400">
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links} data-aos="fade-up" data-aos-delay="500">
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
