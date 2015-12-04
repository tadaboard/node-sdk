var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash')) : typeof define === 'function' && define.amd ? define(['lodash'], factory) : global.TB = factory(global._);
})(this, function (_) {
  'use strict';

  var Query = (function () {
    function Query() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, Query);

      this['default'] = options['default'] || {};
      this.request = options.request || {};
      this.query = _.merge({}, this['default'], this.request.extractQuery());
    }

    _createClass(Query, [{
      key: 'getQuery',
      value: function getQuery() {
        return this.query;
      }
    }]);

    return Query;
  })();

  var Request = (function () {
    function Request(body) {
      _classCallCheck(this, Request);

      this.body = body;
    }

    _createClass(Request, [{
      key: 'extractQuery',
      value: function extractQuery() {
        return this._extractQuery(this.body);
      }
    }, {
      key: '_extractQuery',
      value: function _extractQuery(body) {
        var input = this._convertInput(body);
        if (input.query === undefined || typeof input.query != 'object') {
          return {};
        }

        return input.query;
      }
    }, {
      key: '_convertInput',
      value: function _convertInput(body) {
        if (typeof body == 'String') {
          if (body.length == 0) {
            return {};
          }
          try {
            this.requestObject = JSON.parse(body);
          } catch (e) {
            if (e instanceof SyntaxError) {
              throw new TypeError('Request input must be a valid JSON when it\'s a string');
            } else {
              throw e;
            }
          }
        } else if (typeof body == 'object') {
          return body;
        } else {
          return {};
        }
      }
    }]);

    return Request;
  })();

  var response__widgetsToArray = function response__widgetsToArray(widgets) {
    var result = [];
    Object.keys(widgets).forEach(function (key) {
      result.push({
        id: key,
        data: widgets[key]
      });
    });

    return result;
  };

  var Response = (function () {
    function Response() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, Response);

      this.widgets = {};
      this.request = new Request(options.requestBody);
      this.query = new Query({ 'default': options.queryDefault, request: this.request });
    }

    _createClass(Response, [{
      key: 'getQuery',
      value: function getQuery() {
        return this.query.getQuery();
      }
    }, {
      key: 'widget',
      value: function widget(id, data) {
        this.widgets[id] = data;
      }
    }, {
      key: 'toJSON',
      value: function toJSON() {
        return {
          timestamp: Date.now(),
          query: this.query.getQuery(),
          item: response__widgetsToArray(this.widgets)
        };
      }
    }, {
      key: 'toString',
      value: function toString() {
        return JSON.stringify(this.toJSON());
      }
    }]);

    return Response;
  })();

  var TB = {
    response: Response
  };

  var tadaboard = TB;

  return tadaboard;
});
//# sourceMappingURL=tadaboard.js.map
