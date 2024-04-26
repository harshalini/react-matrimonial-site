import IconSmily from "../../images/icons/icon-smily.png"
import IconChat from "../../images/icons/icon-chat.png"
import IconPeople from "../../images/icons/icon-people.png"

export const Features = ({align}) => {
    return (
        <div className="bottom-grid grid-features flex" style={{justifyContent: align}}>
            <div className="grid-single-feature flex">
                <img src={IconSmily} className="grid-icons" />
                <span>1000+ Members</span>
            </div>
            <div className="grid-single-feature flex">
                <img src={IconChat} className="grid-icons" />
                <span>Chat directly</span>
            </div>
            <div className="grid-single-feature flex">
                <img src={IconPeople} className="grid-icons" />
                <span>Perfect match</span>
            </div>
        </div>
    )
}