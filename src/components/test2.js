const handlePlayPause = () => {
    console.log("play pause");
    console.log("isPlaying", isPlaying);
    // updateIsPlaying(!isPlaying);
    if (isPlaying) {
        // clearInterval
        clearInterval(loop);
    } else {
        // setInterval
        // update timeCount
        console.log("setinterval", timeCount);

        loop = setInterval(() => {
            updateTimeCount(timeCount - 1);
            console.log("interval", timeCount);
        }, 1000);
        loop;
    }
};
