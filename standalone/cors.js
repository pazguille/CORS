(function (window) {
    'use strict';

    /**
     * Module dependencies.
     */
    var win = window,
        CORSxhr = (function () {
            var xhr;

            if (win.XMLHttpRequest && ('withCredentials' in new win.XMLHttpRequest())) {
                xhr = win.XMLHttpRequest;

            } else if (win.XDomainRequest) {
                xhr = win.XDomainRequest;
            }

            return xhr;
        }()),
        methods = ['head', 'get', 'post', 'put', 'delete'],
        i = 0,
        methodsLength = methods.length,
        cors = {};

    function toQueryString(params) {
        var key,
            queryString = [];

        for (key in params) {
            if (params.hasOwnProperty(key)) {
                queryString.push((encodeURIComponent(key) + '=' + encodeURIComponent(params[key])));
            }
        }

        return queryString.join('&');
    }

    function Request(options) {
        this.init(options);
    }

    Request.prototype.init = function (options) {
        var that = this;

        that.xhr = new CORSxhr();
        that.method = options.method;
        that.url = options.url;
        that.success = options.success;
        that.error = options.error;
        that.params = toQueryString(options.params);
        that.headers = options.headers;

        if (options.credentials === true) {
            that.xhr.withCredentials = true;
        }

        that.send();

        return that;
    };

    Request.prototype.send = function () {
        var that = this;

        // Success callback
        if (that.success !== undefined) {
            that.xhr.onload = function () {
                that.success.call(this, this.responseText);
            };
        }

        // Error callback
        if (that.error !== undefined) {
            that.xhr.error = function () {
                that.error.call(this, this.responseText);
            };
        }

        that.xhr.open(that.method, that.url, true);

        if (that.headers !== undefined) {
            that.setHeaders();
        }

        // Send
        that.xhr.send(that.params);

        return that;
    };

    Request.prototype.setHeaders = function () {
        var that = this,
            headers = that.headers,
            key;

        for (key in headers) {
            if (headers.hasOwnProperty(key)) {
                that.xhr.setRequestHeader(key, headers[key]);
            }
        }

        return that;
    };

    /**
     * Public Methods
     */
    for (i; i < methodsLength; i += 1) {
        (function () {
            var method = methods[i];
            cors[method] = function (url, success) {
                var options = {};

                if (url === undefined) {
                    throw new Error('CORS: url must be defined');
                }

                if (typeof url === 'object') {
                    options = url;

                } else {
                    if (typeof success === 'function') {
                        options.success = success;
                    }

                    options.url = url;
                }

                options.method = method.toUpperCase();

                return new Request(options).xhr;
            };
        }());
    }

    /**
     * Expose cors
     */
    // AMD suppport
    if (typeof window.define === 'function' && window.define.amd !== undefined) {
        window.define('cors', [], function () {
            return cors;
        });

    // CommonJS suppport
    } else if (typeof module !== 'undefined' && module.exports !== undefined) {
        module.exports = cors;

    // Default
    } else {
        window.cors = cors;
    }
}(this));