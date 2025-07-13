import styles from "../assets/styles/projects.module.css";
import projects from "../assets/projects_list.json";

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
            <h2>{project.project_name}</h2>
            <div>
              <p>{project.project_description}</p>
              <img src={project.picture_url} alt={project.picture_alt} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
