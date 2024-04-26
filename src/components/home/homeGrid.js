import "../../styles/home.css"
import coupleImages from "../../images/home-images/couple-images.png"
import leafImage from "../../images/home-images/leaf.png"
import lotusImage from "../../images/home-images/lotus.png"
import elephantImg from "../../images/home-images/elephant.png"
import { Features } from "./Features"
export const HomeGrid = () => {
    return (
        <div className="grid-container flex">
            <div className="home-grid grid-text">
                <div>
                    <p className="grid-heading">Discover Lasting Connections at Tawde Vivah,
                        <span>Wtve</span>
                    </p>
                </div>
                <div>
                    <button className="register-btn">Register Now</button>
                </div>
                <div className="grid-footer mt-2">
                    <Features align="flex-start"/>
                    <div className="bottom-grid grid-price">
                        Membership fee onlyy 1800 rs| Unlimited access to profiles
                    </div>
                </div>
            </div>
            <div className="home-grid grid-images-div flex">
                <div className="grid-images flex">
                    <img src={leafImage} className="grid-leaf-image"/>
                    <img src={coupleImages} className="grid-couple-image"/>
                    <img src={lotusImage} className="grid-lotus-image"/>
                </div>
                <div>
                    <img src={elephantImg} className="grid-elephant-image"/>
                </div>
            </div>
        </div>

    )
}