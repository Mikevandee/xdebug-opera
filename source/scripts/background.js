(function (XDebug) {
    var xDebug = new XDebug();

    chrome.browserAction.onClicked.addListener(function () {
        xDebug.toggleSession();
    });

    chrome.commands.onCommand.addListener(function (command) {
        if (command == 'toggle_debug_action') {
            xDebug.toggleSession();
        }
    });
})(XDebug);
