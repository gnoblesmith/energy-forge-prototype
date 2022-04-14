import Image from './Image';
import Text from './Text';
import { useState } from 'react';

function Card() {
    const [sideways, setSideways] = useState(false);

    let style = {
        height: "120px",
        width: "100px",
        
        display: "flex",
        flexDirection: "column",
        
        background: "white",
        borderStyle: "solid",
        borderColor: "black",
    }

    const imageContainerStyle = {
        margin: "auto",
        marginTop: "4px",
        flexGrow: 1,
    };
    const textContainerStyle = {
        fontSize: "1.2vh",
        margin: "4px",
        flexGrow: 2,
    };

    const onClick = () => {
        setSideways(!sideways);
    }

    if (sideways) style.transform = "rotate(90deg)";

    return (
        <div style={style} onClick={onClick}>
            <div style={imageContainerStyle}>
                <Image />
            </div>
            <div style={textContainerStyle}>
                <Text />
            </div>
        </div>
    );
}
 
export default Card;