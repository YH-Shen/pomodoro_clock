const handlePlayPause = () => {
    // console.log(timeCount, "isPlaying: ", isPlaying);
    // updateIsPlaying(!isPlaying);

    if (isPlaying) {
        updateIsPlaying(false);
        // updateIsPlaying((isPlaying) => false);
        clearInterval(loop);

        console.log(timeCount, "isPlaying: ", isPlaying);
    } else {
        loop = setInterval(() => {
            // updateTimeCount(timeCount - 1);
            updateTimeCount((timeCount) => timeCount - 1);

            console.log(timeCount, "isPlaying: ", isPlaying);
        }, 1000);
        updateIsPlaying(true);
        // updateIsPlaying((isPlaying) => true);
    }
};
