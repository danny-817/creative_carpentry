import styles from "../assets/styles/home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<section className={styles.banner_box}>
				<h2 className={styles.banner_words}>
					At Creative Carpentry, we offer a reliable, custom-design
					carpentry service in Saddleworth and the surrounding areas
				</h2>
				<h2 className={styles.banner_words}>
					We pride ourselves on our craftsmenship, making high
					quality, bespoke furniture that's built to last and is
					designed to your needs.
				</h2>
			</section>
			<h2 className={styles.banner_words}>
				If you would like a no-obligation quote, send us an email,
				WhatsApp message or call us to discuss how we can help you.
				<br />
				All the details can be found on our{" "}
				<Link to="/contact">Contact</Link> page
			</h2>
		</>
	);
}
