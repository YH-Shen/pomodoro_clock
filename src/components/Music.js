import React from "react";

const Music = (props) => {
    // let beep = new Audio("../static/Evillaugh.ogg");

    const start = () => {
        let beep = document.getElementById("audio");
        console.log(beep);
        beep.play();
    };
    return (
        <div>
            <audio id="audio" src="../static/bell.wav"></audio>
            <button onClick={start}>Play</button>
        </div>
    );
};

export default Music;
