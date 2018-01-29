var CookieHelper = (function () {

    /**
     *
     * @constructor
     */
    var CookieHelper = function () {
        this.tabHelper = new TabHelper();
    };

    /**
     * Create new cookie
     *
     * @param name
     * @param value
     */
    CookieHelper.prototype.setCookie = function (name, value) {
        this.tabHelper.getCurrentTab(function (tabs) {
            var url = tabs[0].url;
            var hostname = this.tabHelper.getHostFromUrl(url);
            var protocol = this.tabHelper.getProtocolFromUrl(url);
            chrome.cookies.set({
                url: protocol + '://' + hostname,
                name: name,
                value: value
            });
        }.bind(this));
    };

    /**
     * Get cookie by name
     *
     * @param name
     * @param callback
     */
    CookieHelper.prototype.getCookie = function (name, callback) {
        this.tabHelper.getCurrentTab(function (tabs) {
            var url = tabs[0].url;
            var hostname = this.tabHelper.getHostFromUrl(url);
            var protocol = this.tabHelper.getProtocolFromUrl(url);
            chrome.cookies.get({
                url: protocol + '://' + hostname,
                name: name
            }, callback);
        }.bind(this));
    };

    /**
     * Delete cookie by name
     *
     * @param name
     */
    CookieHelper.prototype.deleteCookie = function (name) {
        this.tabHelper.getCurrentTab(function (tabs) {
            var url = tabs[0].url;
            var hostname = this.tabHelper.getHostFromUrl(url);
            var protocol = this.tabHelper.getProtocolFromUrl(url);
            chrome.cookies.remove({
                url: protocol + '://' + hostname,
                name: name
            });

        }.bind(this));
    };

    return CookieHelper;
})();