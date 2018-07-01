document.onkeydown = function(event) {
    if (!event)
        event = window.event;
    var k = event.keyCode;
    switch(k) {
        case 38: // Up
            document.getElementById('pv_like').click()
            break;
        case 40: // Down
            document.getElementById('pv_save_to_me').click()
            break;
    }
};
