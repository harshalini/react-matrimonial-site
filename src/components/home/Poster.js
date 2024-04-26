import { Features } from "./Features"
import PosterMan from "../../images/home-images/PosterImages/PosterMan.jpg"
import PosterMan2 from "../../images/home-images/PosterImages/PosterMan2.jpg"
import PosterBorder from "../../images/home-images/PosterImages/PosterBorder.jpg"
export const Poster = () => {
    return (
        <div className="poster-div">
            <div>
                <p className="center dark-yellow">Finding your perfect partner</p>
                <p className="center red">Just Became More easier</p>
            </div>
            <div className="poster-features flex align">
                <div><img src={PosterMan}/></div>
                <Features align="center"/>
                <div><img src={PosterMan2}/></div>
            </div>
            <img src={PosterBorder}/>
        </div>
    )
}