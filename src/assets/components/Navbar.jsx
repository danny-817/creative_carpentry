import { Link } from "react-router";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
	return (
		<nav>
			<ul className={styles.navbar_container}>
				<li className={styles.nav_button}>
					<Link to="/projects">Projects</Link>
				</li>
				<li className={styles.nav_button}>
					<Link to="/about">About</Link>
				</li>
				<li className={styles.nav_button}>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
