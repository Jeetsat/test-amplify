import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
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
    <section className={styles.container} id="experience">
      <h2 className={styles.title} data-aos="fade-up">
        Experience
      </h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div
              key={id}
              className={styles.skill}
              data-aos="fade-up" // Animation for each skill
              data-aos-delay={id * 100} // Staggered animation delay
            >
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li
              key={id}
              className={styles.historyItem}
              data-aos="fade-left" // Animation for each history item
              data-aos-delay={id * 150} // Staggered animation delay
            >
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`} // Fixed string interpolation
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3> {/* Fixed string interpolation */}
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p> {/* Fixed string interpolation */}
                <ul>
                  {historyItem.experiences.map((experience, expId) => (
                    <li key={expId}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
