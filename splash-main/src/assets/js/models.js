function openModel(model) {
    $('#content').addClass('blur opacity-50');
    $('#topButtons').addClass('scale-0');
    $('#bottomButtons').addClass('scale-0');
    if (model === 'apply') modelApply();
    else if (model == 'requests') modelRequests();
    else {
        closeModel();
        createNotification('danger', 'The model requested could not be found. If you belive that this is a mistake, please contact a developer!')
    }
}

function closeModel() {
    $('#content').removeClass('blur opacity-50');
    $('#topButtons').removeClass('scale-0');
    $('#bottomButtons').removeClass('scale-0');
    $('body').attr('onclick', '');
    $('#applyModel').attr('onclick', '');
    $('#applyModel').addClass('scale-0');
    $('#requestModel').attr('onclick', '');
    $('#requestModel').addClass('scale-0');
}

function modelApply() {
    $('#applyModel').removeClass('scale-0');
    setTimeout(function() {
        $('body').attr('onclick', 'closeModel()');
        $('#applyModel').attr('onclick', 'event.stopPropagation()');
    }, 500)
}
function modelRequests() {
    $('#requestModel').removeClass('scale-0');
    setTimeout(function() {
        $('body').attr('onclick', 'closeModel()');
        $('#requestModel').attr('onclick', 'event.stopPropagation()');
    }, 500)
}