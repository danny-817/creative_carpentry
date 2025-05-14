import bannerPic from "../pictures/banner_pic.jpg";
import styles from "../styles/banner.module.css";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className={styles.banner_container}>
      <Link to="/" className={styles.banner_frame}>
        <img
          src={bannerPic}
          alt="company banner picture"
          className={styles.banner}
        />
      </Link>
    </div>
  );
}
