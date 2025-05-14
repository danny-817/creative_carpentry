import styles from "../styles/footer.module.css";
import {Link} from "react-router-dom";

// export default function Footer() {
// 	return (
// 		<footer className={styles.footer_container}>
// 			<p>Footer</p>
// 		</footer>
// 	);
// }
import React from 'react';
// import './Footer.css';

export default function Footer(){
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_container}>
				<div className={styles.footer_section}>
					<h4>About Us</h4>
					<p>A reliable, custom-design carpentry service in
						Saddleworth and the surrounding areas</p>
				</div>

				<div className={styles.footer_section}>
					<h4>Quick Links</h4>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="#">Services</Link></li>
						<li><Link to="/contact">Contact</Link></li>

					</ul>
				</div>

				<div className={styles.footer_section}>
					<h4>Follow Us</h4>
					<ul>
						<li><Link to="#">Facebook</Link></li>
						<li><Link to="#">Twitter</Link></li>
						<li><Link to="#">Instagram</Link></li>
					</ul>
				</div>
			</div>

			<div className={styles.footer_bottom}>
				<p>&copy; 2025 Daniel Halsall. All rights reserved.</p>
			</div>
		</footer>
	);
};



