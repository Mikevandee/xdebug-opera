var TabHelper = (function () {

    /**
     *
     * @constructor
     */
    var TabHelper = function () {

    };

    TabHelper.prototype.getCurrentTab = function (callback) {
        chrome.tabs.query({
            currentWindow: true,
            active: true
        }, callback);
    };

    TabHelper.prototype.getHostFromUrl = function (url) {
        var hostname;
        var startIndex = url.indexOf('://') + 3;
        hostname = url.substring(startIndex);
        var endIndex = hostname.indexOf('/');
        hostname = hostname.substring(0, endIndex);

        return hostname;
    };

    TabHelper.prototype.getProtocolFromUrl = function (url) {
        var protocol;
        var startIndex = url.indexOf('://');
        protocol = url.substring(0, startIndex);

        return protocol;
    };

    return TabHelper;
})();