import styles from "../assets/styles/home.module.css";

import HomeContactButton from "../assets/components/homeContactButton";

export default function Home() {
	return (
		<>
			<section className={styles.banner_box}>
				<div className={styles.banner_words_container}>
					<h1 className={styles.banner_words}>
						A reliable, custom-design carpentry service in
						Saddleworth and the surrounding areas
					</h1>
					<p className={styles.banner_words}>
						"We pride ourselves on our craftsmenship, making high
						quality, bespoke furniture that's built with integrity and is
						designed to meet your exact needs"
					</p>
				</div>
				{/*<img*/}
				{/*	className={styles.banner_pic}*/}
				{/*	src="https://picsum.photos/300/300"*/}
				{/*	alt="Placeholder"*/}
				{/*	// src="src/assets/pictures/creative_carpentry_logo.jpg"*/}
				{/*	// alt="place holder picture"*/}
				{/*/>*/}
			</section>
			<h2 className={styles.banner_words}>
				If you've got an idea for a project you're thinking of, or need
				a bit of help to make the best use of an unloved area in your
				home and you would like a no-obligation quote, send us an email,
				WhatsApp message or call us to discuss how we can help you.
			</h2>
			<HomeContactButton />
		</>
	);
}
