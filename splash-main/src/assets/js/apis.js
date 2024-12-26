function updateStats() {
    $.getJSON('https://cors.xonos.gg/https://api.vize.pw/stats', function(data) {
        $('#song').text(`${data.song.title} by ${data.song.artist}`);
        $('#presenter').text(`${data.presenter.name}`);
        $('#cover').attr('src', data.song.covers.medium);
        $('#presenterAvatar').attr('src', data.presenter.avatar);
    });
}

function sendApplication() {
    const staffName = encodeURIComponent($('#staffName').val());
    const discord = encodeURIComponent($('#discord').val());
    const region = encodeURIComponent($('#region').val());
    const reasonForJoining = encodeURIComponent($('#reasonForJoining').val());
    if (staffName === "" || discord === "" || reasonForJoining === "") {
        createNotification('error', 'You are missing required fields!')
        return
    }
    $.getJSON(`https://cors.xonos.gg/https://api.vize.pw/apply?staffName=${staffName}&discord=${discord}&region=${region}&reasonForJoining=${reasonForJoining}`, function(data) {
        if (!data.error) {
            closeModel()
            createNotification('success', 'Your application has been sent! A Manager will contact you within 24 hours.')
        } else {
            createNotification('error', 'Something went wrong. Please try again later!')
        }
    })
}

function sendRequest() {
    const name = encodeURIComponent($('#name').val());
    const type = encodeURIComponent($('#type').val());
    const message = encodeURIComponent($('#message').val());
    if (name === "" || message === "") {
        createNotification('error', 'You are missing required fields!')
        return
    }
    $.getJSON(`https://cors.xonos.gg/https://api.vize.pw/request?name=${name}&type=${type}&message=${message}`, function(data) {
        if (!data.error) {
            closeModel()
            createNotification('success', 'Your request has been sent!')
        } else {
            createNotification('error', 'Something went wrong. Please try again later!')
        }
    })
}

updateStats()
setInterval(updateStats, 5000)