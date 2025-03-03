import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/navbar.module.css";
import clsx from "clsx";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav>
			<button
				className={styles.menu_btn}
				onClick={() => setIsOpen(!isOpen)}
			>
				☰
			</button>
			<ul
				className={`${styles.navbar_container} ${
					isOpen ? styles.active : ""
				}`}
			>
				<li className={clsx(styles.nav_button, styles.home_button)}>
					<Link
						to="/"
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					>
						Home
					</Link>
				</li>
				<li className={styles.nav_button}>
					<Link
						to="/projects"
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					>
						Projects
					</Link>
				</li>
				<li className={styles.nav_button}>
					<Link
						to="/about"
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					>
						About
					</Link>
				</li>
				<li className={styles.nav_button}>
					<Link
						to="/contact"
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}
