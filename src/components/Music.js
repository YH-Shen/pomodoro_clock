import React from "react";

const Music = (status) => {
    // let beep = new Audio(
    //     "https://raw.githubusercontent.com/Yuhui-Shen/pomodoro_clock/master/src/static/bell.wav"
    // );

    // const start = () => {

    //     // let beep = document.getElementById("audio");
    //     // console.log(beep);
    //     // beep.play();
    // };

    // const reset = () => {
    //     console.log("pause");
    //     beep.pause();
    //     beep.currentTime = 0;
    //     console.log("pause");
    // };
    return (
        <audio
            id="audio"
            src="https://raw.githubusercontent.com/Yuhui-Shen/pomodoro_clock/master/src/static/bell.wav"
        ></audio>
    );
};

export default Music;
