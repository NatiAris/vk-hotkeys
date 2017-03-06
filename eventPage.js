/*
chrome.commands.onComand.addListener(function(command) {
    if (command == 'saveit') {
        // Get URL
        // Send save request
    }
    if (command == 'likeit') {
        // Get URL
        // Check if already liked
        // Change like/dislike state
    }
});
*/

// Need to add listener that'll keep track of Up & Down keys.

chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.query({}, function(tabsArray) {
        for (t in tabsArray) {
            //alert(tabsArray[t]);
            chrome.pageAction.show(tabsArray[t].id);
        }
    });
    chrome.pageAction.onClicked.addListener(function(t) {
        // Here goes adding listeners if they are off
        /*document.getElementById("layer_wrap").addEventListener("keypress", function() {
            alert('Yep')
            
        })*/
        // And removing if they are on
        
        
        alert('Nop' + t);
    })
});

//chrome.alarms.onAlarm.addListener(<onAlarm>);
//chrome.runtime.onStartup.addListener(<callback>);

// id = pv_box
// or layer_wrap (+)