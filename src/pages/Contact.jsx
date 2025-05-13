import styles from "../assets/styles/contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contact_phone_container}>
          <p className={styles.contact_phone}>
            To get more info, you can call us or send us a message on WhatsApp
            along with any pictures that you think might help
          </p>
          <div className={styles.contact_buttons_container}>
            <a
              href="tel:+1234567890"
              className={`${styles.contact_call_button} ${styles.phone}`}
            >
              <svg
                viewBox="0 0 24 24"
                className={styles.phone_icon}
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55 1.13 1 1 0 011 .99v3.61a1 1 0 01-.91 1 18 18 0 01-16.1-16.1 1 1 0 011-.91h3.61a1 1 0 01.99 1 11.36 11.36 0 001.13 3.55 1 1 0 01-.21 1.11z"
                />
              </svg>
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/1234567890"
              className={`${styles.contact_call_button} ${styles.whatsapp}`}
            >
              <svg
                viewBox="0 0 24 24"
                className={styles.phone_icon}
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55 1.13 1 1 0 011 .99v3.61a1 1 0 01-.91 1 18 18 0 01-16.1-16.1 1 1 0 011-.91h3.61a1 1 0 01.99 1 11.36 11.36 0 001.13 3.55 1 1 0 01-.21 1.11z"
                />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
        <div className={styles.contact_email_container}>
          <p className={styles.contact_email}>
            If you`d prefer to email us your enquiry, simply fill in the form
            below and it will be sent straight to us and we`ll be back in touch
            as soon as possible.
          </p>
        </div>
        <form
          className={styles.contact_form}
          action="https://formsubmit.co/0920e461e4d94a11bcfc0e1c2003b6f2"
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
            value="Thankyou for your enquiry, this is a copy for your records. We will reply as soon as possible to discuss your enquiry and provide any information that you may require."
          />
          {/*<input type="hidden" name="_next" value="localhost:5173/contact"/>*/}
          <div className={styles.field_container}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name..."
              required
            ></input>
          </div>
          <div className={styles.field_container}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address..."
              required
            ></input>
          </div>
          <div className={styles.field_container}>
            <label htmlFor="message">Enter you enquiry:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your enquiry..."
              rows="9"
              required
            ></textarea>
          </div>
          <br />

          <button type="submit">Submit</button>
          <br />
        </form>
      </div>
    </>
  );
}
