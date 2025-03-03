import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";

export default function HomeContactButton() {
	return (
		<div className={styles.contact_button_container}>
			<Link to="/contact" className={styles.contact_button}>
				Contact Us
			</Link>
		</div>
	);
}
