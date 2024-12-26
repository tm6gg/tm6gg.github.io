function createNotification(style, message) {
    if (style == 'success') $('#notification').addClass('bg-green-400 text-black');
    if (style == 'error') $('#notification').addClass('bg-yellow-400 text-black');
    if (style == 'danger') $('#notification').addClass('bg-red-400 text-black');
    $('#notificationText').text(message)
    $('#notification').removeClass('scale-0')
    setTimeout(clearNotification, 5000)
}

function clearNotification() {
    $('#notification').addClass('scale-0')
    setTimeout(function() {
        $('#notificationText').text('')
        $('#notification').removeClass('bg-green-400 bg-yellow-400 bg-red-400 text-black')
    }, 300)
}