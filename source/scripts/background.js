(function (XDebug) {
    var xDebug = new XDebug();

    chrome.browserAction.onClicked.addListener(function() {
        xDebug.toggleSession();
    });
})(XDebug);
