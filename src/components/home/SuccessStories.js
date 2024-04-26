import { CardSlider } from "./slider"
import { HorizontalCard } from "./HorizontalCard"
import Success1 from "../../images/home-images/HorizontalCardImages/Success1.jpg"
import Success2 from "../../images/home-images/HorizontalCardImages/Success2.jpg"
export const SuccessStories = () => {
    const horizontalCardInfo = [
        {
            id: 1,
            img: Success1,
            text: "“Rohan and Alisha’s connection on Tawde Vivah blossomed into love despite living miles apart. Their families embraced their bond, and today, they stand together, grateful for the platform that united their hearts.”",
            author: "Siddharth & Anjali"
        },
        {
            id: 2,
            img: Success2,
            text: "“Rohan and Alisha’s connection on Tawde Vivah blossomed into love despite living miles apart. Their families embraced their bond, and today, they stand together, grateful for the platform that united their hearts.”",
            author: "Siddharth & Anjali"
        }
    ]
    return (
        <div className="success-stories-div" style={{backgroundColor: "#FFF2EC", marginTop: "-3rem"}}>
            <div>
                <p className="center dark-yellow">Our Success Stories Defines, Why Tawde Vivah?</p>
                <p className="center red">We Foster Bonds, Unite Hearts</p>
            </div>
            <CardSlider 
            className="horizontal-carousel"
            cardInfo={horizontalCardInfo} cardComponent={HorizontalCard} itemNum={2}
            />
        </div>
    )
}