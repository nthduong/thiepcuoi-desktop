$(document).ready(function () {
    let music = $("#bgMusic")[0];
    let isPlaying = false;

    music.volume = 1;

    function playMusic() {
        music.play();
        $("#musicIcon").attr("src", "./images/audio-on.svg");
        isPlaying = true;
    }

    function pauseMusic() {
        music.pause();
        $("#musicIcon").attr("src", "./images/audio-off.svg");
        isPlaying = false;
    }

    $(document).one("click scroll touchstart", function () {
        playMusic();
    });

    $("#musicToggle").click(function (e) {
        e.stopPropagation();
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });
});
