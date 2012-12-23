# CORS Component

The CORS is a componente that allows cross-domain communication from the browser. The modern browsers like Chrome, Firefox, Opera, Safari and Internet Explorer 10 use the XmlHttpRequest2 object. IE8+ uses the similar XDomainRequest object, which works in the same way as its XmlHttpRequest.

It's cross-broswer compatible:
- Chrome 3+
- Firefox 3.5+
- Opera 12+
- Safari 4+
- Internet Explorer 8+

See the complete list of supported browsers at http://caniuse.com/cors

## Installation

	$ component install pazguille/CORS

See: [https://github.com/component/component](https://github.com/component/component)

## How-to
```js
cors.get({
	'url': 'http://api.site.com/search?query=ps3',
	'credentials': true,
	'success': function (data) {
		// Code here!
	},
	'error': function () {
		// Code here!
	}
});
```

## API
### cors#get(options)
### cors#post(options)
### cors#head(options)
### cors#put(options)
### cors#delete(options)
(All the methods return the `XMLHttpRequest` or `XDomainRequest` object.)

### Options
- url: A string containing the URL to which the request is sent.
- params: A map of key-value pairs to set data which will be send.
- success: A function to be called if the request succeeds.
- error: A function to be called if the request fails.
- credentials: Standard CORS requests don't send or set cookies by default. In order to include cookies as part of the request, you need to set the `withCredentials` property to `true`.
- headers: A map of key-value pairs which contains headers that are included in the request.

### Using the shorthand alternative
```js
cors.get('http://api.site.com/search?query=ps3', function (data) {
	// Code here!
});
```
### cors#get(url, success)
### cors#post(url, success)
### cors#head(url, success)
### cors#put(url, success)
### cors#delete(url, success)

## About CORS
- [http://www.w3.org/TR/cors/](http://www.w3.org/TR/cors/)
- [https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS?redirectlocale=en-US&redirectslug=HTTP_access_control](https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS?redirectlocale=en-US&redirectslug=HTTP_access_control)
- [http://www.html5rocks.com/en/tutorials/cors/](http://www.html5rocks.com/en/tutorials/cors/)

### XDomainRequest - Restrictions and Limitations
- [http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx](http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx)

## Contact
- Guille Paz (Frontend developer - JavaScript developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
### The MIT License
Copyright (c) 2012 [@pazguille](http://twitter.com/pazguille)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
