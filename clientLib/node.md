## NodeJS Library

[![github](../images/github_logo.png)](https://github.com/bandwidthcom/node-bandwidth)

The current version is v2, released 5 August, 2016. Version 1.3.3 is available  [here](https://github.com/bandwidthcom/node-bandwidth/tree/v1.3.3).

### [Full API Reference](http://dev.bandwidth.com/node-bandwidth/index.html)
The Full API Reference is available either as an interactive site or as a single Markdown file:

* [Site](http://dev.bandwidth.com/node-bandwidth/index.html).
* [Single MD file](https://github.com/bandwidthcom/node-bandwidth/blob/master/docs/api.md)


### Installing the SDK

`node-bandwidth` is available on NPM:

	npm install --save node-bandwidth

### Supported Versions
`node-bandwidth` should work on all versions of node newer than `0.10.*`. However, due to the rapid development in the Node and npm environment, we can only provide _support_ on [LTS versions of Node](https://github.com/nodejs/LTS)

| Version                        | Support Level                                                                                                                                        |
|:-------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| <0.10.*                        | Unsupported                                                                                                                                          |
| 0.10.*                         | End-of-Life (2016-10-31)                                                                                                                             |
| 0.12.*                         | End-of-Life (2016-10-31)                                                                                                                             |
| >=4.0 <4.2                     | Unsupported                                                                                                                                          |
| >=4.2 <5.* (Node v4 argon LTS) | Supported                                                                                                                                            |
| 5.*                            | Unsupported                                                                                                                                          |
| _6.9.4 (Node v6 Boron LTS)_    | **Recommended**                                                                                                                                      |
| 7.*                            | Unsupported                                                                                                                                          |
| 8.*                            | Unsupported [(until October 2018)](https://medium.com/@nodejs/node-js-8-big-improvements-for-the-debugging-and-native-module-ecosystem-58454861f2fc) |


### Client initialization

All interaction with the API is done through a `client` Object. The client constructor takes an Object containing configuration options. The following options are supported:

| Field name  | Description           | Default value                       | Required |
|:------------|:----------------------|:------------------------------------|:---------|
| `userId`    | Your user ID          | `undefined`                         | Yes      |
| `apiToken`  | Your API token        | `undefined`                         | Yes      |
| `apiSecret` | Your API secret       | `undefined`                         | Yes      |
| `baseUrl`   | The Bandwidth API URL | `https://api.catapult.inetwork.com` | No       |

To initialize the client object, provide your API credentials which can be found on your account page in [the portal](https://catapult.inetwork.com/pages/catapult.jsf).

```javascript
var Bandwidth = require("node-bandwidth");

var client = new Bandwidth({
	userId    : "YOUR_USER_ID", // <-- note, this is not the same as the username you used to login to the portal
	apiToken  : "YOUR_API_TOKEN",
	apiSecret : "YOUR_API_SECRET"
});
```

Your `client` object is now ready to use the API.

### Callbacks or Promises
All functions of the client object take an optional Node.js style `(err, result)` callback, and also return a Promise. That way if you want to use Promises in your application, you don't have to wrap the SDK with a Promise library. You can simply do things like this:

#### Promise style
```javascript
client.Message.send({
	from : "+12345678901", // This must be a Catapult number on your account
	to   : "+12345678902",
	text : "Hello world."
})
.then(function(message) {
	console.log("Message sent with ID " + message.id);
})
.catch(function(err) {
	console.log(err.message);
});
```
If you're not into that kind of thing you can also do things the "old fashioned" callback way:

#### Callback style
```javascript
client.Message.send({
	from : "+12345678901", // This must be a Catapult number on your account
	to   : "+12345678902",
	text : "Hello world."
}, function(err, message) {
	if (err) {
		console.log(err);
		return;
	}
	console.log("Message sent with ID " + message.id);
});
```
### Providing feedback

For current discussions on 2.0 please see the [2.0 issues section on GitHub](https://github.com/bandwidthcom/node-bandwidth/labels/2.0). To start a new topic on 2.0, please open an issue and use the `2.0` tag. Your feedback is greatly appreciated!
