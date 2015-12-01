(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.TB = factory();
})(this, function () {
  'use strict';

  var TB = {
    greet: function greet() {
      return 'hello';
    }
  };

  var tadaboard_node_sdk = TB;

  return tadaboard_node_sdk;
});
//# sourceMappingURL=tadaboard-node-sdk.js.map
