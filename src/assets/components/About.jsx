import styles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.about_container}>
      <section className={styles.about_text_box}>
        <p className={styles.about_text}>
          Welcome to Creative Carpentry, a small woodworking business based in
          Saddleworth and providing out services to the surrounding areas.
        </p>
        <p className={styles.about_text}>
          Creative Carpentry began at the start of the lockdown for Covid-19 and
          what started as a way to make things for my children has turned into a
          full-time business.
        </p>
      </section>
      <section className={styles.about_text_box}>
        <p className={styles.about_text}>
          The first items were simple designs for my children in the garden. Via
          family, friends and neighbours, I started getting requests from people
          to make them versions of the same thing. Jump forward to today and I
          have completed many projects for clients, some standard designs
          however most of my work is customised to your exact requirments.
        </p>
        {/*image of the first mud kitchen*/}
        {/*<image src="" alt="" />*/}
      </section>
      <section className={styles.about_text_box}>
        <p className={styles.about_text}>
          Making anything from wood is something I enjoy, and after seeing the
          feedback I received on some of the pieces created during the COVID
          lockdown, I created Creative Carpentry of Saddleworth so I can share
          my skills and passion, with you.
        </p>
        <ul className={styles.about_services}>
          <li>Bespoke carpentry service to meet your needs</li>
          <li>Decking installation</li>
          <li>Flatpack furniture assembly</li>
        </ul>
      </section>
    </div>
  );
}
