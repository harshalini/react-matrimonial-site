import AppCard from "./Card"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/pagination';
// import { SwiperNavButtons } from "./SwiperNavButton";
// import { A11y, Navigation, Pagination } from 'swiper';
import { CardSlider } from "./slider"

// Install modules;
import CardImg1 from "../../images/home-images/CardImages/CardImg1.jpg"
import CardImg2 from "../../images/home-images/CardImages/CardImg2.jpg"
import CardImg3 from "../../images/home-images/CardImages/CardImg3.jpg"
import App from "../../App"
export const SpotlightSection = () => {
    const cardInfo = [
        {
            card_img: CardImg1,
            card_id: 1,
            card_edu: "B.com, MBA, CA final",
            card_height: "5ft 3in -160cm"
        },
        {
            card_img: CardImg2,
            card_id: 2,
            card_edu: "B.com, MBA, CA final",
            card_height: "5ft 3in -160cm"
        },
        {
            card_img: CardImg3,
            card_id: 3,
            card_edu: "B.com, MBA, CA final",
            card_height: "5ft 3in -160cm"
        },
        {
            card_img: CardImg1,
            card_id: 4,
            card_edu: "B.com, MBA, CA final",
            card_height: "5ft 3in -160cm"
        },
    ]
    return (
        <div className="spotlight-div flex align">
            <div className="spotlight-header-div flex">
                <p className="dark-yellow">Spotlight on Connentions:</p>
                <p className="red">Explore Our Featured Profiles</p>
                <button className="register-btn">Explore</button>
            </div>
            <div className="spotlight-card-slider">
                <CardSlider cardInfo={cardInfo} cardComponent={AppCard} itemNum={3}/>
            </div>
        </div>
    )
}