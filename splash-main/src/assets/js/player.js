let playing = false;

function toggleRadio() {
    if (playing) {
        $("#radioButton").addClass("fa-play").removeClass("fa-pause");
        $("#stream").attr("src", "");
        $("#statsBar").addClass('scale-0');
        playing = false;
    } else {
        $("#radioButton").removeClass("fa-play").addClass("fa-pause");
        $("#stream").attr("src", "http://stream.zeno.fm/6kuhxbe5muhvv");
        $("#stream")[0].play();
        $("#statsBar").removeClass('scale-0');
        playing = true;
    }
}

function radioReconnect() {
    if (!playing) return;
    if ($("#stream").prop("ended")) {
        toggleRadio();
        createNotification('danger', 'There was an issue connecting you to the radio server. Please while we try to reconnect you to the radio server.')
        setTimeout(toggleRadio ,5000)
    }
    if ($("#stream").prop("paused")) {
        toggleRadio();
    }
}

function loadVolume() {
    window.addEventListener('DOMContentLoaded', (event) => {
        if (localStorage.getItem("volume") === null) {
            localStorage.setItem("volume", 0.2);
        }
        $("#volume").val(localStorage.getItem("volume"));
        $("#stream").prop("volume", localStorage.getItem("volume"));
    });
}

function updateVolume() {
    localStorage.setItem("volume", $("#volume").val());
    $("#stream").prop("volume", localStorage.getItem("volume"));
}

loadVolume()
setInterval(radioReconnect, 1000)
