document.onkeydown = function(event) {
    if (!event)
        event = window.event;
    var k = event.keyCode;
    // I don't have the slightest idea what the next two lines do.
    if (event.charCode && k == 0)
        k = event.charCode;
    switch(k) {
        case 38: // Up
            document.getElementById('pv_like').click()
            break;
        case 40: // Down
            document.getElementById('pv_save_to_me').click()
            break;
    }
};
