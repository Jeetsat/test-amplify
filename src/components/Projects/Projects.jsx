import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
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
    <section className={styles.container} id="projects">
      <h2 className={styles.title} data-aos="fade-up">
        Projects
      </h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <div
            key={id}
            data-aos="fade-up" // Animation for each project card
            data-aos-delay={id * 100} // Staggered animation delay for each card
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};
