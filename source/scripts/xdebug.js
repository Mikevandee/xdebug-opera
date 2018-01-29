var XDebug = (function () {

    /**
     *
     * @constructor
     */
    var XDebug = function () {
        this.cookieHelper = new CookieHelper();
    };

    XDebug.xdebugCookieNames = {
        session: "XDEBUG_SESSION"
    };

    XDebug.prototype.enableSession = function () {
        this.cookieHelper.setCookie(XDebug.xdebugCookieNames.session, 'phpstorm');
    };

    XDebug.prototype.disableSession = function () {
        this.cookieHelper.deleteCookie(XDebug.xdebugCookieNames.session);
    };

    XDebug.prototype.toggleSession = function () {
        this.cookieHelper.getCookie(XDebug.xdebugCookieNames.session, function (cookie) {
            if(cookie) {
                this.disableSession();
            } else {
                this.enableSession();
            }
        }.bind(this));
    };

    return XDebug;
})();

