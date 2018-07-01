document.onkeydown = function(event) {
    if (!event)
        event = window.event;
    var k = event.keyCode;
    switch(k) {
        case 38: // Up Arrow
            document.getElementsByClassName('like_btn like _like  ')[0].click()
            break;
        case 40: // Down Arrow
            save_button = document.getElementById('pv_save_to_me')
            remove_button = document.getElementById('pv_delete')
            button = save_button || remove_button
            button.click()
            break;
    }
};
