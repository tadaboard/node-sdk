# Tadaboard Node.js SDK

Tadaboard Node.js SDK for faster response creation

[![Travis build status](http://img.shields.io/travis/tadaboard/node-sdk.svg?style=flat)](https://travis-ci.org/tadaboard/node-sdk)
[![Code Climate](https://codeclimate.com/github/tadaboard/node-sdk/badges/gpa.svg)](https://codeclimate.com/github/tadaboard/node-sdk)
[![Test Coverage](https://codeclimate.com/github/tadaboard/node-sdk/badges/coverage.svg)](https://codeclimate.com/github/tadaboard/node-sdk)
[![Dependency Status](https://david-dm.org/tadaboard/node-sdk.svg)](https://david-dm.org/tadaboard/node-sdk)
[![devDependency Status](https://david-dm.org/tadaboard/node-sdk/dev-status.svg)](https://david-dm.org/tadaboard/node-sdk#info=devDependencies)

> Note that this is a DEVELOPMENT version, API and everything else can change introducing backward incompatibilities

## Install

Save the sdk into your project dependencies

```
npm install --save-dev tadaboard-node-sdk
```

## Usage

```javascript
var TB = require('tadaboard-node-sdk');

// In your own request handling function
function handleRequest(req, res) {
  // Read your request body
  var tb = new TB.Response({ requestBody: body, queryDefault: {} })
  tb.widget('widgetId', yourData)
  // Send the final response
  res.setHeader('Content-Type', 'application/json');
  res.send(tb.toString());;
  res.end();
}
```

## API reference

#### Constructor

```javascript
new TB.Response(options)
```

where options has these properties:

 - __requestBody__: (String|Object) the request sent from the Tadaboard dashboard, to fetch the current query object

 - __queryDefault__: (Object) a default objec that will be merged with the request query object for later usage in your code

#### Response instance

```javascript
tb.widget(widgetId, data)
```

 - __widgetId__: (String) the widget referenced in the dashboard

 - __data__: (Object|Array) the data values, the structure depends on the widget type, you can read each widget data structure on the [docs](https://tadaboard.readme.io/docs/widgets-documentation)

```javascript
tb.toString()
```

 Returns the response JSON encoded string

```javascript
tb.toJSON()
```

Returns the response JSON object
