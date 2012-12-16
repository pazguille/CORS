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
		queryString.push((encodeURIComponent(key) + '=' + encodeURIComponent(params[key])));
	}

	return queryString.join('&');
}

function Request(options) {
	this.init(options);
}

Request.prototype.init = function (options) {
	var	that = this;

	that.xhr = new CORSxhr();
	that.method = options.method;
	that.url = options.url;
	that.success = options.success;
	that.error = options.error;
	that.params = toQueryString(options.params);

	if (options.credentials === true) {
		that.xhr.withCredentials = true;
	}

	that.send();

	return that;
}

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

	// Send
	that.xhr.send(that.params);

	return that;
}

/**
 * Methods
 */
for (i; i < methodsLength; i += 1) {
	(function () {
		var method = methods[i];
		cors[method] = function (url, params, success, error) {
			var options = {};

			if (url === undefined) {
				throw new Error('CORS: url must be defined');
			}

			if (typeof url === 'object') {
				options = url;

			} else {
				if (typeof params === 'function') {
					error = success;
					success = params;
					params = undefined;
				}

				options.url = url;
				options.params = params;
				options.success = success;
				options.error = error;
			}

			options.method = method.toUpperCase();

			return new Request(options);
		};
	}());
};

/**
 * Expose cors
 */
exports = module.exports = cors;