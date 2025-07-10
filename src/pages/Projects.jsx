import styles from "../assets/styles/projects.module.css";

export default function Projects() {
  return (
    <>
      <div>
        <p className={styles.projects_intro}>
          Below you can see some examples of our completed projects. To see our
          latest work, you can visit our <span>FaceBook</span> page
        </p>
      </div>
      <section className={styles.project_container}>
        <div className={styles.project}>
          <h2>project</h2>
        </div>
        <div className={styles.project}>
          <h2>project2</h2>
        </div>
        <div className={styles.project}>
          <h2>project3</h2>
        </div>
      </section>
    </>
  );
}
