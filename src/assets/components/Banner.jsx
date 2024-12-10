import bannerPic from '../../assets/banner_pic.jpg';
import styles from '../styles/banner.module.css'

export default function Banner(){
    return(
        <div className={styles.banner_container}>
            <img src={bannerPic} alt="company banner picture" className={styles.banner}/>
        </div>
    )
}



