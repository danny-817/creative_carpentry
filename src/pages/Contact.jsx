import styles from "../assets/styles/contact.module.css";
import {useSearchParams} from "react-router-dom";


export default function Contact() {

const [searchParams]=useSearchParams();
console.log(searchParams)
	return (
		<>
			<div className={styles.container}>
				{!searchParams.get("submitted")?
					<form
						className={styles.contact_form}
						action="https://formsubmit.co/0920e461e4d94a11bcfc0e1c2003b6f2"
						// target="_self"
						method="post"
					>
						<input type="hidden" name="_subject" value="Creative Carpentry website enquiry"/>

						<label htmlFor="name">Name:</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Enter your name"
							required
						></input>
						{/*<label htmlFor="lastName">Last name:</label>*/}
						{/*<input type="text" id="lastName" name="lastname" placeholder="Last name"></input>*/}
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email address"
							required
						></input>
						<label htmlFor="message">Enter you enquiry:</label>
						<textarea
							id="message"
							name="message"
							placeholder="Enter your enquiry"
							rows="15"
							required
						></textarea>
						<br/>

						<button type="submit">Submit</button>
						<br/>
					</form> :
					<h2>Thanks for submitted an enquiry</h2>}
			</div>
		</>
	);
}
