import styles from "../assets/styles/home.module.css";

export default function Home() {
	return (
		<>
			<section className={styles.banner_container}>
				<h2 className={styles.banner_words}>
					Customer centric, bespoke carpentry service in Saddleworth
					and the surrounding areas
				</h2>
				<h2 className={styles.banner_words}>
					At Creative Carpentry, we pride ourselves on our
					craftsmenship and making high quality, built to last,
					customised designs
				</h2>
			</section>
		</>
	);
}
