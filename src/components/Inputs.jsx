const Inputs = ({handleChangeBackground, handleChangeColor}) => {
    return (
        <div>
            <input
                type="text"
                placeholder="exemple: royalblue"
                onChange={(e) => {handleChangeBackground(e.target.value)}}
                aria-label="Change the background color"
            />
            <button type="button" onClick={handleChangeColor}>
                Toggle Text Color
            </button>
        </div>
    );
};

export default Inputs;