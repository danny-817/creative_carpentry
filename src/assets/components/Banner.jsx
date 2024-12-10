import bannerPic from '../../assets/banner_pic.jpg';

export default function Banner(){
    return(
        <div className="banner-container">
            <img src={bannerPic} alt="company banner picture" className="banner"/>
        </div>
    )
}



