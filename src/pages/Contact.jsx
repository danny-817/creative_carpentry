import styles from "../assets/styles/contact.module.css";
import { useSearchParams } from "react-router-dom";

export default function Contact() {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <>
      <div className={styles.container}>
        <form
          className={styles.contact_form}
          action="https://formsubmit.co/0920e461e4d94a11bcfc0e1c2003b6f2"
          // target="_self"
          method="post"
        >
          <input
            type="hidden"
            name="_subject"
            value="Creative Carpentry website enquiry"
          />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thankyou for your enquiry, this is a copy of your enquiry to us. We will reply as soon as possible to discuss your enquiry and provide any information that you may require."
          />
          {/*<input type="hidden" name="_next" value="localhost:5173/contact"/>*/}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name..."
              required
            ></input>
          </div>

          {/*<label htmlFor="lastName">Last name:</label>*/}
          {/*<input type="text" id="lastName" name="lastname" placeholder="Last name"></input>*/}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address..."
              required
            ></input>
          </div>
          <label htmlFor="message">Enter you enquiry:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your enquiry..."
            rows="15"
            required
          ></textarea>
          <br />

          <button type="submit">Submit</button>
          <br />
        </form>
      </div>
    </>
  );
}
