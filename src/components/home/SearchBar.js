import IconSearch from "../../images/icons/icon-s.png"
import "../../styles/home.css"
export const SearchBar = () => {
    const ageOptions = [];

    for (let i = 18; i <= 40; i++) {
        ageOptions.push(<option key={i} value={i}>{i}</option>);
    }

    const maritalSelection = ['Any', 'Single', 'Married', 'Divorced', 'Widowed']
    const maritalOptions = []
    maritalSelection.map((ms) => maritalOptions.push(<option key={ms} value={ms}>{ms}</option>))

    const educationLevels = [
        'Any',
        'No formal education',
        'Primary education',
        'Lower secondary education',
        'Upper secondary education',
        'Vocational qualification',
        'Bachelor’s degree',
        'Master’s degree',
        'Professional degree',
        'Doctorate (Ph.D.)',
        'Post-doctoral research',
        'Other'
    ];
    const educationOptions = []
    educationLevels.map((el) => educationOptions.push(<option key={el} value={el}>{el}</option>))

    return (
        <div className="search-div">
            <h1 className="center">Search Your Perfect Match Here</h1>
            <div className="search-group-div flex align">
                <div className="search-cat gender-radio-div">
                    <label>
                        <input type="radio" value="bride" name="gender" />
                        bride
                    </label>
                    <label>
                        <input type="radio" value="groom" name="gender" />
                        groom
                    </label>
                </div>
                <div className="search-cat age-select-div">
                    <label>
                        Age
                        <select name="age" className="select" id="age">
                            <option key={"any"} name="any">Any</option>
                            {ageOptions}
                        </select>
                    </label>
                </div>
                <div className="search-cat height-select-div">
                    <label>
                        Height
                        <select name="age" className="select" id="age">
                            <option key={"any"} name="any">Any</option>
                            {ageOptions}
                        </select>
                    </label>
                </div>
                <div className="search-cat marital-select-div">
                    <label>
                        Marital Status
                        <select name='marital status' className="select" id="martial-status">
                        <option key={"any"} name="any">Any</option>
                            {maritalOptions}
                        </select>
                    </label>
                </div>
                <div className="search-cat education-select-div">
                    <label>
                        Education
                        <select name='education' className="select" id="education">
                        <option key={"any"} name="any">Any</option>
                            {educationOptions}
                        </select>
                    </label>
                </div>
                <div>
                    <button id="search-btn"><img src={IconSearch} alt="search-btn"/></button>
                </div>
            </div>
        </div>
    )
}