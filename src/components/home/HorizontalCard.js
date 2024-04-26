import Img from "../../images/home-images/CardImages/CardImg1.jpg"
export const HorizontalCard = ({card}) => {
    return (
        <div className="horizontal-card">
            <img src={card.img} />
            <div className="horizontal-card-text">
                {card.text}
                <p>{card.author}</p>
            </div>
        </div>
    )
}