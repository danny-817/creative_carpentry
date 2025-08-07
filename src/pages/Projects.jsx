import styles from "../assets/styles/projects.module.css";
import projects from "../assets/projects_list.json";

export default function Projects() {
  return (
    <div className={styles.projectsPage_container}>
      <div className={styles.projects_intro_container}>
        <p className={styles.projects_intro}>
          Below you can see some examples of our completed projects. To see our
          latest work, you can visit our{" "}
          <span>
            <a href="https://www.facebook.com/?locale=en_GB" target="_blank">
              FaceBook
            </a>
          </span>{" "}
          page
        </p>
      </div>
      <section className={styles.projects_container}>
        {/*<div className={styles.project}>*/}
        {/*  <h2>project - media wall</h2>*/}
        {/*</div>*/}
        {/*<div className={styles.project}>*/}
        {/*  <h2>project2 - window seat</h2>*/}
        {/*</div>*/}
        {/*<div className={styles.project}>*/}
        {/*  <h2>project3 - kitchen garden</h2>*/}
        {/*</div>*/}

        {projects.projects.map((project, i) => (
          // console.log(project),

          <div key={i} className={styles.project}>
            <div className={styles.description_container}>
              <p className={styles.project_description}>
                {project.project_description}
              </p>
            </div>
            <div className={styles.image_container}>
              <img
                src={project.picture_url}
                alt={project.picture_alt}
                className={styles.project_image}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
