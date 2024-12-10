import styles from "../styles/navbar.module.css"


export default function Navbar() {
  return (
    <nav>
      <ul className={styles.navbar_container}>
        <li className={styles.nav_button}>
          <a to="/projects">Projects</a>
        </li>
        <li className={styles.nav_button}>
          <a to="/about">About</a>
        </li>
        <li className={styles.nav_button}>
          <a to="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}


