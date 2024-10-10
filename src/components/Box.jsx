const Box = ({background = 'transparent', color, text, subText}) => {

    return (
        <div id="box" style={{backgroundColor: background, color: color}}>
            <p>{text}</p>
            <p>{subText}</p>
        </div>
    );
};

export default Box;