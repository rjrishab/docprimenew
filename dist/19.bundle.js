(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/add-dom-event-listener/lib/EventBaseObject.js":
/*!********************************************************************!*\
  !*** ./node_modules/add-dom-event-listener/lib/EventBaseObject.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },

  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },

  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },

  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/add-dom-event-listener/lib/EventObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/add-dom-event-listener/lib/EventObject.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */



Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _EventBaseObject = __webpack_require__(/*! ./EventBaseObject */ "./node_modules/add-dom-event-listener/lib/EventBaseObject.js");

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = undefined;
    var deltaY = undefined;
    var delta = undefined;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = undefined;
    var doc = undefined;
    var body = undefined;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2['default'].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = undefined;
  var l = undefined;
  var prop = undefined;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },

  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports['default'] = DomEventObject;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/add-dom-event-listener/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/add-dom-event-listener/lib/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = addEventListener;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _EventObject = __webpack_require__(/*! ./EventObject */ "./node_modules/add-dom-event-listener/lib/EventObject.js");

var _EventObject2 = _interopRequireDefault(_EventObject);

function addEventListener(target, eventType, callback, option) {
  function wrapCallback(e) {
    var ne = new _EventObject2['default'](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    var _ret = (function () {
      var useCapture = false;
      if (typeof option === 'object') {
        useCapture = option.capture || false;
      } else if (typeof option === 'boolean') {
        useCapture = option;
      }

      target.addEventListener(eventType, wrapCallback, option || false);

      return {
        v: {
          remove: function remove() {
            target.removeEventListener(eventType, wrapCallback, useCapture);
          }
        }
      };
    })();

    if (typeof _ret === 'object') return _ret.v;
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/get.js":
/*!***************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/get.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/rc-slider/lib/Handle.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-slider/lib/Handle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _addEventListener = __webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "./node_modules/rc-util/lib/Dom/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Handle = function (_React$Component) {
  (0, _inherits3['default'])(Handle, _React$Component);

  function Handle() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3['default'])(this, Handle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = Handle.__proto__ || Object.getPrototypeOf(Handle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      clickFocused: false
    }, _this.setHandleRef = function (node) {
      _this.handle = node;
    }, _this.handleMouseUp = function () {
      if (document.activeElement === _this.handle) {
        _this.setClickFocus(true);
      }
    }, _this.handleMouseDown = function () {
      // fix https://github.com/ant-design/ant-design/issues/15324
      _this.focus();
    }, _this.handleBlur = function () {
      _this.setClickFocus(false);
    }, _this.handleKeyDown = function () {
      _this.setClickFocus(false);
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  (0, _createClass3['default'])(Handle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // mouseup won't trigger if mouse moved out of handle,
      // so we listen on document here.
      this.onMouseUpListener = (0, _addEventListener2['default'])(document, 'mouseup', this.handleMouseUp);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.onMouseUpListener) {
        this.onMouseUpListener.remove();
      }
    }
  }, {
    key: 'setClickFocus',
    value: function setClickFocus(focused) {
      this.setState({ clickFocused: focused });
    }
  }, {
    key: 'clickFocus',
    value: function clickFocus() {
      this.setClickFocus(true);
      this.focus();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.handle.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.handle.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref2, _ref3;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          vertical = _props.vertical,
          reverse = _props.reverse,
          offset = _props.offset,
          style = _props.style,
          disabled = _props.disabled,
          min = _props.min,
          max = _props.max,
          value = _props.value,
          tabIndex = _props.tabIndex,
          restProps = (0, _objectWithoutProperties3['default'])(_props, ['prefixCls', 'vertical', 'reverse', 'offset', 'style', 'disabled', 'min', 'max', 'value', 'tabIndex']);


      var className = (0, _classnames2['default'])(this.props.className, (0, _defineProperty3['default'])({}, prefixCls + '-handle-click-focused', this.state.clickFocused));
      var positionStyle = vertical ? (_ref2 = {}, (0, _defineProperty3['default'])(_ref2, reverse ? 'top' : 'bottom', offset + '%'), (0, _defineProperty3['default'])(_ref2, reverse ? 'bottom' : 'top', 'auto'), (0, _defineProperty3['default'])(_ref2, 'transform', 'translateY(+50%)'), _ref2) : (_ref3 = {}, (0, _defineProperty3['default'])(_ref3, reverse ? 'right' : 'left', offset + '%'), (0, _defineProperty3['default'])(_ref3, reverse ? 'left' : 'right', 'auto'), (0, _defineProperty3['default'])(_ref3, 'transform', 'translateX(' + (reverse ? '+' : '-') + '50%)'), _ref3);
      var elStyle = (0, _extends3['default'])({}, style, positionStyle);

      var _tabIndex = tabIndex || 0;
      if (disabled || tabIndex === null) {
        _tabIndex = null;
      }

      return _react2['default'].createElement('div', (0, _extends3['default'])({
        ref: this.setHandleRef,
        tabIndex: _tabIndex
      }, restProps, {
        className: className,
        style: elStyle,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown

        // aria attribute
        , role: 'slider',
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-disabled': !!disabled
      }));
    }
  }]);
  return Handle;
}(_react2['default'].Component);

exports['default'] = Handle;


Handle.propTypes = {
  prefixCls: _propTypes2['default'].string,
  className: _propTypes2['default'].string,
  vertical: _propTypes2['default'].bool,
  offset: _propTypes2['default'].number,
  style: _propTypes2['default'].object,
  disabled: _propTypes2['default'].bool,
  min: _propTypes2['default'].number,
  max: _propTypes2['default'].number,
  value: _propTypes2['default'].number,
  tabIndex: _propTypes2['default'].number,
  reverse: _propTypes2['default'].bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-slider/lib/Range.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-slider/lib/Range.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _shallowequal = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _Track = __webpack_require__(/*! ./common/Track */ "./node_modules/rc-slider/lib/common/Track.js");

var _Track2 = _interopRequireDefault(_Track);

var _createSlider = __webpack_require__(/*! ./common/createSlider */ "./node_modules/rc-slider/lib/common/createSlider.js");

var _createSlider2 = _interopRequireDefault(_createSlider);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/rc-slider/lib/utils.js");

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint-disable react/prop-types */
var _trimAlignValue = function _trimAlignValue(_ref) {
  var value = _ref.value,
      handle = _ref.handle,
      bounds = _ref.bounds,
      props = _ref.props;
  var allowCross = props.allowCross,
      pushable = props.pushable;

  var thershold = Number(pushable);
  var valInRange = utils.ensureValueInRange(value, props);
  var valNotConflict = valInRange;
  if (!allowCross && handle != null && bounds !== undefined) {
    if (handle > 0 && valInRange <= bounds[handle - 1] + thershold) {
      valNotConflict = bounds[handle - 1] + thershold;
    }
    if (handle < bounds.length - 1 && valInRange >= bounds[handle + 1] - thershold) {
      valNotConflict = bounds[handle + 1] - thershold;
    }
  }
  return utils.ensureValuePrecision(valNotConflict, props);
};

var Range = function (_React$Component) {
  (0, _inherits3['default'])(Range, _React$Component);

  function Range(props) {
    (0, _classCallCheck3['default'])(this, Range);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this, props));

    _this.onEnd = function (force) {
      var handle = _this.state.handle;

      _this.removeDocumentEvents();

      if (handle !== null || force) {
        _this.props.onAfterChange(_this.getValue());
      }

      _this.setState({
        handle: null
      });
    };

    var count = props.count,
        min = props.min,
        max = props.max;

    var initialValue = Array.apply(undefined, (0, _toConsumableArray3['default'])(Array(count + 1))).map(function () {
      return min;
    });
    var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
    var value = props.value !== undefined ? props.value : defaultValue;
    var bounds = value.map(function (v, i) {
      return _trimAlignValue({
        value: v,
        handle: i,
        props: props
      });
    });
    var recent = bounds[0] === max ? 0 : bounds.length - 1;

    _this.state = {
      handle: null,
      recent: recent,
      bounds: bounds
    };
    return _this;
  }

  (0, _createClass3['default'])(Range, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (!('value' in this.props || 'min' in this.props || 'max' in this.props)) {
        return;
      }
      if (this.props.min === prevProps.min && this.props.max === prevProps.max && (0, _shallowequal2['default'])(this.props.value, prevProps.value)) {
        return;
      }
      var _props = this.props,
          onChange = _props.onChange,
          value = _props.value;

      var currentValue = value || prevState.bounds;
      if (currentValue.some(function (v) {
        return utils.isValueOutOfRange(v, _this2.props);
      })) {
        var newValues = currentValue.map(function (v) {
          return utils.ensureValueInRange(v, _this2.props);
        });
        onChange(newValues);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      if (isNotControlled) {
        this.setState(state);
      } else {
        var controlledState = {};

        ['handle', 'recent'].forEach(function (item) {
          if (state[item] !== undefined) {
            controlledState[item] = state[item];
          }
        });

        if (Object.keys(controlledState).length) {
          this.setState(controlledState);
        }
      }

      var data = (0, _extends3['default'])({}, this.state, state);
      var changedValue = data.bounds;
      props.onChange(changedValue);
    }
  }, {
    key: 'onStart',
    value: function onStart(position) {
      var props = this.props;
      var state = this.state;
      var bounds = this.getValue();
      props.onBeforeChange(bounds);

      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;

      var closestBound = this.getClosestBound(value);
      this.prevMovedHandleIndex = this.getBoundNeedMoving(value, closestBound);

      this.setState({
        handle: this.prevMovedHandleIndex,
        recent: this.prevMovedHandleIndex
      });

      var prevValue = bounds[this.prevMovedHandleIndex];
      if (value === prevValue) return;

      var nextBounds = [].concat((0, _toConsumableArray3['default'])(state.bounds));
      nextBounds[this.prevMovedHandleIndex] = value;
      this.onChange({ bounds: nextBounds });
    }
  }, {
    key: 'onMove',
    value: function onMove(e, position) {
      utils.pauseEvent(e);
      var state = this.state;

      var value = this.calcValueByPos(position);
      var oldValue = state.bounds[state.handle];
      if (value === oldValue) return;

      this.moveTo(value);
    }
  }, {
    key: 'onKeyboard',
    value: function onKeyboard(e) {
      var _props2 = this.props,
          reverse = _props2.reverse,
          vertical = _props2.vertical;

      var valueMutator = utils.getKeyboardValueMutator(e, vertical, reverse);

      if (valueMutator) {
        utils.pauseEvent(e);
        var state = this.state,
            props = this.props;
        var bounds = state.bounds,
            handle = state.handle;

        var oldValue = bounds[handle === null ? state.recent : handle];
        var mutatedValue = valueMutator(oldValue, props);
        var value = _trimAlignValue({
          value: mutatedValue,
          handle: handle,
          bounds: state.bounds,
          props: props
        });
        if (value === oldValue) return;
        var isFromKeyboardEvent = true;
        this.moveTo(value, isFromKeyboardEvent);
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.bounds;
    }
  }, {
    key: 'getClosestBound',
    value: function getClosestBound(value) {
      var bounds = this.state.bounds;

      var closestBound = 0;
      for (var i = 1; i < bounds.length - 1; ++i) {
        if (value >= bounds[i]) {
          closestBound = i;
        }
      }
      if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
        closestBound += 1;
      }
      return closestBound;
    }
  }, {
    key: 'getBoundNeedMoving',
    value: function getBoundNeedMoving(value, closestBound) {
      var _state = this.state,
          bounds = _state.bounds,
          recent = _state.recent;

      var boundNeedMoving = closestBound;
      var isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];

      if (isAtTheSamePoint && bounds[recent] === bounds[closestBound]) {
        boundNeedMoving = recent;
      }

      if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
        boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
      }
      return boundNeedMoving;
    }
  }, {
    key: 'getLowerBound',
    value: function getLowerBound() {
      return this.state.bounds[0];
    }
  }, {
    key: 'getUpperBound',
    value: function getUpperBound() {
      var bounds = this.state.bounds;

      return bounds[bounds.length - 1];
    }

    /**
     * Returns an array of possible slider points, taking into account both
     * `marks` and `step`. The result is cached.
     */

  }, {
    key: 'getPoints',
    value: function getPoints() {
      var _props3 = this.props,
          marks = _props3.marks,
          step = _props3.step,
          min = _props3.min,
          max = _props3.max;

      var cache = this._getPointsCache;
      if (!cache || cache.marks !== marks || cache.step !== step) {
        var pointsObject = (0, _extends3['default'])({}, marks);
        if (step !== null) {
          for (var point = min; point <= max; point += step) {
            pointsObject[point] = point;
          }
        }
        var points = Object.keys(pointsObject).map(parseFloat);
        points.sort(function (a, b) {
          return a - b;
        });
        this._getPointsCache = { marks: marks, step: step, points: points };
      }
      return this._getPointsCache.points;
    }
  }, {
    key: 'moveTo',
    value: function moveTo(value, isFromKeyboardEvent) {
      var _this3 = this;

      var state = this.state,
          props = this.props;

      var nextBounds = [].concat((0, _toConsumableArray3['default'])(state.bounds));
      var handle = state.handle === null ? state.recent : state.handle;
      nextBounds[handle] = value;
      var nextHandle = handle;
      if (props.pushable !== false) {
        this.pushSurroundingHandles(nextBounds, nextHandle);
      } else if (props.allowCross) {
        nextBounds.sort(function (a, b) {
          return a - b;
        });
        nextHandle = nextBounds.indexOf(value);
      }
      this.onChange({
        recent: nextHandle,
        handle: nextHandle,
        bounds: nextBounds
      });
      if (isFromKeyboardEvent) {
        // known problem: because setState is async,
        // so trigger focus will invoke handler's onEnd and another handler's onStart too early,
        // cause onBeforeChange and onAfterChange receive wrong value.
        // here use setState callback to hack，but not elegant
        this.props.onAfterChange(nextBounds);
        this.setState({}, function () {
          _this3.handlesRefs[nextHandle].focus();
        });
        this.onEnd();
      }
    }
  }, {
    key: 'pushSurroundingHandles',
    value: function pushSurroundingHandles(bounds, handle) {
      var value = bounds[handle];
      var threshold = this.props.pushable;

      threshold = Number(threshold);

      var direction = 0;
      if (bounds[handle + 1] - value < threshold) {
        direction = +1; // push to right
      }
      if (value - bounds[handle - 1] < threshold) {
        direction = -1; // push to left
      }

      if (direction === 0) {
        return;
      }

      var nextHandle = handle + direction;
      var diffToNext = direction * (bounds[nextHandle] - value);
      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // revert to original value if pushing is impossible
        bounds[handle] = bounds[nextHandle] - direction * threshold;
      }
    }
  }, {
    key: 'pushHandle',
    value: function pushHandle(bounds, handle, direction, amount) {
      var originalValue = bounds[handle];
      var currentValue = bounds[handle];
      while (direction * (currentValue - originalValue) < amount) {
        if (!this.pushHandleOnePoint(bounds, handle, direction)) {
          // can't push handle enough to create the needed `amount` gap, so we
          // revert its position to the original value
          bounds[handle] = originalValue;
          return false;
        }
        currentValue = bounds[handle];
      }
      // the handle was pushed enough to create the needed `amount` gap
      return true;
    }
  }, {
    key: 'pushHandleOnePoint',
    value: function pushHandleOnePoint(bounds, handle, direction) {
      var points = this.getPoints();
      var pointIndex = points.indexOf(bounds[handle]);
      var nextPointIndex = pointIndex + direction;
      if (nextPointIndex >= points.length || nextPointIndex < 0) {
        // reached the minimum or maximum available point, can't push anymore
        return false;
      }
      var nextHandle = handle + direction;
      var nextValue = points[nextPointIndex];
      var threshold = this.props.pushable;

      var diffToNext = direction * (bounds[nextHandle] - nextValue);
      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // couldn't push next handle, so we won't push this one either
        return false;
      }
      // push the handle
      bounds[handle] = nextValue;
      return true;
    }
  }, {
    key: 'trimAlignValue',
    value: function trimAlignValue(value) {
      var _state2 = this.state,
          handle = _state2.handle,
          bounds = _state2.bounds;

      return _trimAlignValue({
        value: value,
        handle: handle,
        bounds: bounds,
        props: this.props
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state3 = this.state,
          handle = _state3.handle,
          bounds = _state3.bounds;
      var _props4 = this.props,
          prefixCls = _props4.prefixCls,
          vertical = _props4.vertical,
          included = _props4.included,
          disabled = _props4.disabled,
          min = _props4.min,
          max = _props4.max,
          reverse = _props4.reverse,
          handleGenerator = _props4.handle,
          trackStyle = _props4.trackStyle,
          handleStyle = _props4.handleStyle,
          tabIndex = _props4.tabIndex;


      var offsets = bounds.map(function (v) {
        return _this4.calcOffset(v);
      });

      var handleClassName = prefixCls + '-handle';
      var handles = bounds.map(function (v, i) {
        var _classNames;

        var _tabIndex = tabIndex[i] || 0;
        if (disabled || tabIndex[i] === null) {
          _tabIndex = null;
        }
        return handleGenerator({
          className: (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, handleClassName, true), (0, _defineProperty3['default'])(_classNames, handleClassName + '-' + (i + 1), true), _classNames)),
          prefixCls: prefixCls,
          vertical: vertical,
          offset: offsets[i],
          value: v,
          dragging: handle === i,
          index: i,
          tabIndex: _tabIndex,
          min: min,
          max: max,
          reverse: reverse,
          disabled: disabled,
          style: handleStyle[i],
          ref: function ref(h) {
            return _this4.saveHandle(i, h);
          }
        });
      });

      var tracks = bounds.slice(0, -1).map(function (_, index) {
        var _classNames2;

        var i = index + 1;
        var trackClassName = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-track', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-track-' + i, true), _classNames2));
        return _react2['default'].createElement(_Track2['default'], {
          className: trackClassName,
          vertical: vertical,
          reverse: reverse,
          included: included,
          offset: offsets[i - 1],
          length: offsets[i] - offsets[i - 1],
          style: trackStyle[index],
          key: i
        });
      });

      return { tracks: tracks, handles: handles };
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      if ('value' in props || 'min' in props || 'max' in props) {
        var value = props.value || state.bounds;
        var nextBounds = value.map(function (v, i) {
          return _trimAlignValue({
            value: v,
            handle: i,
            bounds: state.bounds,
            props: props
          });
        });
        if (nextBounds.length === state.bounds.length && nextBounds.every(function (v, i) {
          return v === state.bounds[i];
        })) {
          return null;
        }
        return (0, _extends3['default'])({}, state, {
          bounds: nextBounds
        });
      }
      return null;
    }
  }]);
  return Range;
}(_react2['default'].Component);

Range.displayName = 'Range';
Range.propTypes = {
  autoFocus: _propTypes2['default'].bool,
  defaultValue: _propTypes2['default'].arrayOf(_propTypes2['default'].number),
  value: _propTypes2['default'].arrayOf(_propTypes2['default'].number),
  count: _propTypes2['default'].number,
  pushable: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].number]),
  allowCross: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  reverse: _propTypes2['default'].bool,
  tabIndex: _propTypes2['default'].arrayOf(_propTypes2['default'].number),
  min: _propTypes2['default'].number,
  max: _propTypes2['default'].number
};
Range.defaultProps = {
  count: 1,
  allowCross: true,
  pushable: false,
  tabIndex: []
};


(0, _reactLifecyclesCompat.polyfill)(Range);

exports['default'] = (0, _createSlider2['default'])(Range);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-slider/lib/common/Marks.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-slider/lib/common/Marks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min,
      onClickLabel = _ref.onClickLabel;

  var marksKeys = Object.keys(marks);

  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = typeof markPoint === 'object' && !_react2['default'].isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;
    if (!markLabel && markLabel !== 0) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, className + '-text', true), (0, _defineProperty3['default'])(_classNames, className + '-text-active', isActive), _classNames));

    var bottomStyle = (0, _defineProperty3['default'])({
      marginBottom: '-50%'
    }, reverse ? 'top' : 'bottom', (point - min) / range * 100 + '%');

    var leftStyle = (0, _defineProperty3['default'])({
      transform: 'translateX(-50%)',
      msTransform: 'translateX(-50%)'
    }, reverse ? 'right' : 'left', reverse ? (point - min / 4) / range * 100 + '%' : (point - min) / range * 100 + '%');

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? (0, _extends3['default'])({}, style, markPoint.style) : style;
    return _react2['default'].createElement(
      'span',
      {
        className: markClassName,
        style: markStyle,
        key: point,
        onMouseDown: function onMouseDown(e) {
          return onClickLabel(e, point);
        },
        onTouchStart: function onTouchStart(e) {
          return onClickLabel(e, point);
        }
      },
      markLabel
    );
  });

  return _react2['default'].createElement(
    'div',
    { className: className },
    elements
  );
};

Marks.propTypes = {
  className: _propTypes2['default'].string,
  vertical: _propTypes2['default'].bool,
  reverse: _propTypes2['default'].bool,
  marks: _propTypes2['default'].object,
  included: _propTypes2['default'].bool,
  upperBound: _propTypes2['default'].number,
  lowerBound: _propTypes2['default'].number,
  max: _propTypes2['default'].number,
  min: _propTypes2['default'].number,
  onClickLabel: _propTypes2['default'].func
};

exports['default'] = Marks;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-slider/lib/common/Steps.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-slider/lib/common/Steps.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends5 = _interopRequireDefault(_extends4);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  (0, _warning2['default'])(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat).sort(function (a, b) {
    return a - b;
  });
  if (dots && step) {
    for (var i = min; i <= max; i += step) {
      if (points.indexOf(i) === -1) {
        points.push(i);
      }
    }
  }
  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;

  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = Math.abs(point - min) / range * 100 + '%';

    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? (0, _extends5['default'])({}, dotStyle, (0, _defineProperty3['default'])({}, reverse ? 'top' : 'bottom', offset)) : (0, _extends5['default'])({}, dotStyle, (0, _defineProperty3['default'])({}, reverse ? 'right' : 'left', offset));
    if (isActived) {
      style = (0, _extends5['default'])({}, style, activeDotStyle);
    }

    var pointClassName = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-dot', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-dot-active', isActived), (0, _defineProperty3['default'])(_classNames, prefixCls + '-dot-reverse', reverse), _classNames));

    return _react2['default'].createElement('span', { className: pointClassName, style: style, key: point });
  });

  return _react2['default'].createElement(
    'div',
    { className: prefixCls + '-step' },
    elements
  );
};

Steps.propTypes = {
  prefixCls: _propTypes2['default'].string,
  activeDotStyle: _propTypes2['default'].object,
  dotStyle: _propTypes2['default'].object,
  min: _propTypes2['default'].number,
  max: _propTypes2['default'].number,
  upperBound: _propTypes2['default'].number,
  lowerBound: _propTypes2['default'].number,
  included: _propTypes2['default'].bool,
  dots: _propTypes2['default'].bool,
  step: _propTypes2['default'].number,
  marks: _propTypes2['default'].object,
  vertical: _propTypes2['default'].bool,
  reverse: _propTypes2['default'].bool
};

exports['default'] = Steps;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-slider/lib/common/Track.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-slider/lib/common/Track.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Track = function Track(props) {
  var _ref, _ref2;

  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      offset = props.offset,
      length = props.length,
      style = props.style,
      reverse = props.reverse;

  var positonStyle = vertical ? (_ref = {}, (0, _defineProperty3['default'])(_ref, reverse ? 'top' : 'bottom', offset + '%'), (0, _defineProperty3['default'])(_ref, reverse ? 'bottom' : 'top', 'auto'), (0, _defineProperty3['default'])(_ref, 'height', length + '%'), _ref) : (_ref2 = {}, (0, _defineProperty3['default'])(_ref2, reverse ? 'right' : 'left', offset + '%'), (0, _defineProperty3['default'])(_ref2, reverse ? 'left' : 'right', 'auto'), (0, _defineProperty3['default'])(_ref2, 'width', length + '%'), _ref2);

  var elStyle = (0, _extends3['default'])({}, style, positonStyle);
  return included ? _react2['default'].createElement('div', { className: className, style: elStyle }) : null;
}; /* eslint-disable react/prop-types */
exports['default'] = Track;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-slider/lib/common/createSlider.js":
/*!***********************************************************!*\
  !*** ./node_modules/rc-slider/lib/common/createSlider.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ "./node_modules/babel-runtime/helpers/get.js");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports['default'] = createSlider;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = __webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "./node_modules/rc-util/lib/Dom/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _Steps = __webpack_require__(/*! ./Steps */ "./node_modules/rc-slider/lib/common/Steps.js");

var _Steps2 = _interopRequireDefault(_Steps);

var _Marks = __webpack_require__(/*! ./Marks */ "./node_modules/rc-slider/lib/common/Marks.js");

var _Marks2 = _interopRequireDefault(_Marks);

var _Handle = __webpack_require__(/*! ../Handle */ "./node_modules/rc-slider/lib/Handle.js");

var _Handle2 = _interopRequireDefault(_Handle);

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/rc-slider/lib/utils.js");

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

function createSlider(Component) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    (0, _inherits3['default'])(ComponentEnhancer, _Component);

    function ComponentEnhancer(props) {
      (0, _classCallCheck3['default'])(this, ComponentEnhancer);

      var _this = (0, _possibleConstructorReturn3['default'])(this, (ComponentEnhancer.__proto__ || Object.getPrototypeOf(ComponentEnhancer)).call(this, props));

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        var isVertical = _this.props.vertical;
        var position = utils.getMousePosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.removeDocumentEvents();
        _this.onStart(position);
        _this.addDocumentMouseEvents();
      };

      _this.onTouchStart = function (e) {
        if (utils.isNotTouchEvent(e)) return;

        var isVertical = _this.props.vertical;
        var position = utils.getTouchPosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentTouchEvents();
        utils.pauseEvent(e);
      };

      _this.onFocus = function (e) {
        var _this$props = _this.props,
            onFocus = _this$props.onFocus,
            vertical = _this$props.vertical;

        if (utils.isEventFromHandle(e, _this.handlesRefs)) {
          var handlePosition = utils.getHandleCenterPosition(vertical, e.target);
          _this.dragOffset = 0;
          _this.onStart(handlePosition);
          utils.pauseEvent(e);
          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        _this.onEnd();
        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseUp = function () {
        if (_this.handlesRefs[_this.prevMovedHandleIndex]) {
          _this.handlesRefs[_this.prevMovedHandleIndex].clickFocus();
        }
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();
          return;
        }
        var position = utils.getMousePosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onTouchMove = function (e) {
        if (utils.isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();
          return;
        }

        var position = utils.getTouchPosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.onClickMarkLabel = function (e, value) {
        e.stopPropagation();
        _this.onChange({ value: value });
        _this.setState({ value: value }, function () {
          return _this.onEnd(true);
        });
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      var step = props.step,
          max = props.max,
          min = props.min;

      var isPointDiffEven = isFinite(max - min) ? (max - min) % step === 0 : true; // eslint-disable-line
      (0, _warning2['default'])(step && Math.floor(step) === step ? isPointDiffEven : true, 'Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)', max - min, step);
      _this.handlesRefs = {};
      return _this;
    }

    (0, _createClass3['default'])(ComponentEnhancer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        // Snapshot testing cannot handle refs, so be sure to null-check this.
        this.document = this.sliderRef && this.sliderRef.ownerDocument;

        var _props = this.props,
            autoFocus = _props.autoFocus,
            disabled = _props.disabled;

        if (autoFocus && !disabled) {
          this.focus();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if ((0, _get3['default'])(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'componentWillUnmount', this)) (0, _get3['default'])(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'componentWillUnmount', this).call(this);
        this.removeDocumentEvents();
      }
    }, {
      key: 'getSliderStart',
      value: function getSliderStart() {
        var slider = this.sliderRef;
        var _props2 = this.props,
            vertical = _props2.vertical,
            reverse = _props2.reverse;

        var rect = slider.getBoundingClientRect();
        if (vertical) {
          return reverse ? rect.bottom : rect.top;
        }
        return window.pageXOffset + (reverse ? rect.right : rect.left);
      }
    }, {
      key: 'getSliderLength',
      value: function getSliderLength() {
        var slider = this.sliderRef;
        if (!slider) {
          return 0;
        }

        var coords = slider.getBoundingClientRect();
        return this.props.vertical ? coords.height : coords.width;
      }
    }, {
      key: 'addDocumentTouchEvents',
      value: function addDocumentTouchEvents() {
        // just work for Chrome iOS Safari and Android Browser
        this.onTouchMoveListener = (0, _addEventListener2['default'])(this.document, 'touchmove', this.onTouchMove);
        this.onTouchUpListener = (0, _addEventListener2['default'])(this.document, 'touchend', this.onEnd);
      }
    }, {
      key: 'addDocumentMouseEvents',
      value: function addDocumentMouseEvents() {
        this.onMouseMoveListener = (0, _addEventListener2['default'])(this.document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = (0, _addEventListener2['default'])(this.document, 'mouseup', this.onEnd);
      }
    }, {
      key: 'removeDocumentEvents',
      value: function removeDocumentEvents() {
        /* eslint-disable no-unused-expressions */
        this.onTouchMoveListener && this.onTouchMoveListener.remove();
        this.onTouchUpListener && this.onTouchUpListener.remove();

        this.onMouseMoveListener && this.onMouseMoveListener.remove();
        this.onMouseUpListener && this.onMouseUpListener.remove();
        /* eslint-enable no-unused-expressions */
      }
    }, {
      key: 'focus',
      value: function focus() {
        if (!this.props.disabled) {
          this.handlesRefs[0].focus();
        }
      }
    }, {
      key: 'blur',
      value: function blur() {
        var _this2 = this;

        if (!this.props.disabled) {
          Object.keys(this.handlesRefs).forEach(function (key) {
            if (_this2.handlesRefs[key] && _this2.handlesRefs[key].blur) {
              _this2.handlesRefs[key].blur();
            }
          });
        }
      }
    }, {
      key: 'calcValue',
      value: function calcValue(offset) {
        var _props3 = this.props,
            vertical = _props3.vertical,
            min = _props3.min,
            max = _props3.max;

        var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
      }
    }, {
      key: 'calcValueByPos',
      value: function calcValueByPos(position) {
        var sign = this.props.reverse ? -1 : +1;
        var pixelOffset = sign * (position - this.getSliderStart());
        var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
        return nextValue;
      }
    }, {
      key: 'calcOffset',
      value: function calcOffset(value) {
        var _props4 = this.props,
            min = _props4.min,
            max = _props4.max;

        var ratio = (value - min) / (max - min);
        return ratio * 100;
      }
    }, {
      key: 'saveHandle',
      value: function saveHandle(index, handle) {
        this.handlesRefs[index] = handle;
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames;

        var _props5 = this.props,
            prefixCls = _props5.prefixCls,
            className = _props5.className,
            marks = _props5.marks,
            dots = _props5.dots,
            step = _props5.step,
            included = _props5.included,
            disabled = _props5.disabled,
            vertical = _props5.vertical,
            reverse = _props5.reverse,
            min = _props5.min,
            max = _props5.max,
            children = _props5.children,
            maximumTrackStyle = _props5.maximumTrackStyle,
            style = _props5.style,
            railStyle = _props5.railStyle,
            dotStyle = _props5.dotStyle,
            activeDotStyle = _props5.activeDotStyle;

        var _get$call = (0, _get3['default'])(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'render', this).call(this),
            tracks = _get$call.tracks,
            handles = _get$call.handles;

        var sliderClassName = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-with-marks', Object.keys(marks).length), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_classNames, prefixCls + '-vertical', vertical), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
        return _react2['default'].createElement(
          'div',
          {
            ref: this.saveSlider,
            className: sliderClassName,
            onTouchStart: disabled ? noop : this.onTouchStart,
            onMouseDown: disabled ? noop : this.onMouseDown,
            onMouseUp: disabled ? noop : this.onMouseUp,
            onKeyDown: disabled ? noop : this.onKeyDown,
            onFocus: disabled ? noop : this.onFocus,
            onBlur: disabled ? noop : this.onBlur,
            style: style
          },
          _react2['default'].createElement('div', {
            className: prefixCls + '-rail',
            style: (0, _extends3['default'])({}, maximumTrackStyle, railStyle)
          }),
          tracks,
          _react2['default'].createElement(_Steps2['default'], {
            prefixCls: prefixCls,
            vertical: vertical,
            reverse: reverse,
            marks: marks,
            dots: dots,
            step: step,
            included: included,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: max,
            min: min,
            dotStyle: dotStyle,
            activeDotStyle: activeDotStyle
          }),
          handles,
          _react2['default'].createElement(_Marks2['default'], {
            className: prefixCls + '-mark',
            onClickLabel: disabled ? noop : this.onClickMarkLabel,
            vertical: vertical,
            marks: marks,
            included: included,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: max,
            min: min,
            reverse: reverse
          }),
          children
        );
      }
    }]);
    return ComponentEnhancer;
  }(Component), _class.displayName = 'ComponentEnhancer(' + Component.displayName + ')', _class.propTypes = (0, _extends3['default'])({}, Component.propTypes, {
    min: _propTypes2['default'].number,
    max: _propTypes2['default'].number,
    step: _propTypes2['default'].number,
    marks: _propTypes2['default'].object,
    included: _propTypes2['default'].bool,
    className: _propTypes2['default'].string,
    prefixCls: _propTypes2['default'].string,
    disabled: _propTypes2['default'].bool,
    children: _propTypes2['default'].any,
    onBeforeChange: _propTypes2['default'].func,
    onChange: _propTypes2['default'].func,
    onAfterChange: _propTypes2['default'].func,
    handle: _propTypes2['default'].func,
    dots: _propTypes2['default'].bool,
    vertical: _propTypes2['default'].bool,
    style: _propTypes2['default'].object,
    reverse: _propTypes2['default'].bool,
    minimumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    maximumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    handleStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    trackStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    railStyle: _propTypes2['default'].object,
    dotStyle: _propTypes2['default'].object,
    activeDotStyle: _propTypes2['default'].object,
    autoFocus: _propTypes2['default'].bool,
    onFocus: _propTypes2['default'].func,
    onBlur: _propTypes2['default'].func
  }), _class.defaultProps = (0, _extends3['default'])({}, Component.defaultProps, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(_ref) {
      var index = _ref.index,
          restProps = (0, _objectWithoutProperties3['default'])(_ref, ['index']);

      delete restProps.dragging;
      if (restProps.value === null) {
        return null;
      }

      return _react2['default'].createElement(_Handle2['default'], (0, _extends3['default'])({}, restProps, { key: index }));
    },

    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    reverse: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _temp;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-slider/lib/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-slider/lib/utils.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.isEventFromHandle = isEventFromHandle;
exports.isValueOutOfRange = isValueOutOfRange;
exports.isNotTouchEvent = isNotTouchEvent;
exports.getClosestPoint = getClosestPoint;
exports.getPrecision = getPrecision;
exports.getMousePosition = getMousePosition;
exports.getTouchPosition = getTouchPosition;
exports.getHandleCenterPosition = getHandleCenterPosition;
exports.ensureValueInRange = ensureValueInRange;
exports.ensureValuePrecision = ensureValuePrecision;
exports.pauseEvent = pauseEvent;
exports.calculateNextValue = calculateNextValue;
exports.getKeyboardValueMutator = getKeyboardValueMutator;

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _KeyCode = __webpack_require__(/*! rc-util/lib/KeyCode */ "./node_modules/rc-util/lib/KeyCode.js");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isEventFromHandle(e, handles) {
  try {
    return Object.keys(handles).some(function (key) {
      return e.target === (0, _reactDom.findDOMNode)(handles[key]);
    });
  } catch (error) {
    return false;
  }
}

function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;

  return value < min || value > max;
}

function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}

function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min,
      max = _ref2.max;

  var points = Object.keys(marks).map(parseFloat);
  if (step !== null) {
    var maxSteps = Math.floor((max - min) / step);
    var steps = Math.min((val - min) / step, maxSteps);
    var closestStep = Math.round(steps) * step + min;
    points.push(closestStep);
  }
  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, (0, _toConsumableArray3['default'])(diffs)))];
}

function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;
  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }
  return precision;
}

function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : window.pageXOffset + coords.left + coords.width * 0.5;
}

function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }
  if (val >= max) {
    return max;
  }
  return val;
}

function ensureValuePrecision(val, props) {
  var step = props.step;

  var closestPoint = isFinite(getClosestPoint(val, props)) ? getClosestPoint(val, props) : 0; // eslint-disable-line
  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}

function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}

function calculateNextValue(func, value, props) {
  var operations = {
    increase: function increase(a, b) {
      return a + b;
    },
    decrease: function decrease(a, b) {
      return a - b;
    }
  };

  var indexToGet = operations[func](Object.keys(props.marks).indexOf(JSON.stringify(value)), 1);
  var keyToGet = Object.keys(props.marks)[indexToGet];

  if (props.step) {
    return operations[func](value, props.step);
  } else if (!!Object.keys(props.marks).length && !!props.marks[keyToGet]) {
    return props.marks[keyToGet];
  }
  return value;
}

function getKeyboardValueMutator(e, vertical, reverse) {
  var increase = 'increase';
  var decrease = 'decrease';
  var method = increase;
  switch (e.keyCode) {
    case _KeyCode2['default'].UP:
      method = vertical && reverse ? decrease : increase;break;
    case _KeyCode2['default'].RIGHT:
      method = !vertical && reverse ? decrease : increase;break;
    case _KeyCode2['default'].DOWN:
      method = vertical && reverse ? increase : decrease;break;
    case _KeyCode2['default'].LEFT:
      method = !vertical && reverse ? increase : decrease;break;

    case _KeyCode2['default'].END:
      return function (value, props) {
        return props.max;
      };
    case _KeyCode2['default'].HOME:
      return function (value, props) {
        return props.min;
      };
    case _KeyCode2['default'].PAGE_UP:
      return function (value, props) {
        return value + props.step * 2;
      };
    case _KeyCode2['default'].PAGE_DOWN:
      return function (value, props) {
        return value - props.step * 2;
      };

    default:
      return undefined;
  }
  return function (value, props) {
    return calculateNextValue(method, value, props);
  };
}

/***/ }),

/***/ "./node_modules/rc-util/lib/Dom/addEventListener.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/lib/Dom/addEventListener.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addEventListenerWrap;

var _addDomEventListener = _interopRequireDefault(__webpack_require__(/*! add-dom-event-listener */ "./node_modules/add-dom-event-listener/lib/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = _reactDom.default.unstable_batchedUpdates ? function run(e) {
    _reactDom.default.unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener.default)(target, eventType, callback, option);
}

/***/ }),

/***/ "./node_modules/rc-util/lib/KeyCode.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-util/lib/KeyCode.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};
var _default = KeyCode;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvRXZlbnRCYXNlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hZGQtZG9tLWV2ZW50LWxpc3RlbmVyL2xpYi9FdmVudE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9saWIvSGFuZGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvbGliL1JhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvbGliL2NvbW1vbi9NYXJrcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2xpYi9jb21tb24vU3RlcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9saWIvY29tbW9uL1RyYWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvbGliL2NvbW1vbi9jcmVhdGVTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvbGliL0RvbS9hZGRFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2xpYi9LZXlDb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFD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QUNBLHdCQUF3QixlQUFlO0FBQ3ZDLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbkJhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQiIsImZpbGUiOiIxOS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBpZ25vcmVcbiAqIGJhc2UgZXZlbnQgb2JqZWN0IGZvciBjdXN0b20gYW5kIGRvbSBldmVudC5cbiAqIEBhdXRob3IgeWltaW5naGVAZ21haWwuY29tXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5mdW5jdGlvbiByZXR1cm5GYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZXR1cm5UcnVlKCkge1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRCYXNlT2JqZWN0KCkge1xuICB0aGlzLnRpbWVTdGFtcCA9IERhdGUubm93KCk7XG4gIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICB0aGlzLmN1cnJlbnRUYXJnZXQgPSB1bmRlZmluZWQ7XG59XG5cbkV2ZW50QmFzZU9iamVjdC5wcm90b3R5cGUgPSB7XG4gIGlzRXZlbnRPYmplY3Q6IDEsXG5cbiAgY29uc3RydWN0b3I6IEV2ZW50QmFzZU9iamVjdCxcblxuICBpc0RlZmF1bHRQcmV2ZW50ZWQ6IHJldHVybkZhbHNlLFxuXG4gIGlzUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblxuICBpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG5cbiAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KCkge1xuICAgIHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gcmV0dXJuVHJ1ZTtcbiAgfSxcblxuICBzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICB0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcbiAgfSxcblxuICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246IGZ1bmN0aW9uIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIHtcbiAgICB0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcbiAgICAvLyBmaXhlZCAxLjJcbiAgICAvLyBjYWxsIHN0b3BQcm9wYWdhdGlvbiBpbXBsaWNpdGx5XG4gICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSxcblxuICBoYWx0OiBmdW5jdGlvbiBoYWx0KGltbWVkaWF0ZSkge1xuICAgIGlmIChpbW1lZGlhdGUpIHtcbiAgICAgIHRoaXMuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMucHJldmVudERlZmF1bHQoKTtcbiAgfVxufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBFdmVudEJhc2VPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIi8qKlxuICogQGlnbm9yZVxuICogZXZlbnQgb2JqZWN0IGZvciBkb21cbiAqIEBhdXRob3IgeWltaW5naGVAZ21haWwuY29tXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX0V2ZW50QmFzZU9iamVjdCA9IHJlcXVpcmUoJy4vRXZlbnRCYXNlT2JqZWN0Jyk7XG5cbnZhciBfRXZlbnRCYXNlT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0V2ZW50QmFzZU9iamVjdCk7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG52YXIgVFJVRSA9IHRydWU7XG52YXIgRkFMU0UgPSBmYWxzZTtcbnZhciBjb21tb25Qcm9wcyA9IFsnYWx0S2V5JywgJ2J1YmJsZXMnLCAnY2FuY2VsYWJsZScsICdjdHJsS2V5JywgJ2N1cnJlbnRUYXJnZXQnLCAnZXZlbnRQaGFzZScsICdtZXRhS2V5JywgJ3NoaWZ0S2V5JywgJ3RhcmdldCcsICd0aW1lU3RhbXAnLCAndmlldycsICd0eXBlJ107XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKHcpIHtcbiAgcmV0dXJuIHcgPT09IG51bGwgfHwgdyA9PT0gdW5kZWZpbmVkO1xufVxuXG52YXIgZXZlbnROb3JtYWxpemVycyA9IFt7XG4gIHJlZzogL15rZXkvLFxuICBwcm9wczogWydjaGFyJywgJ2NoYXJDb2RlJywgJ2tleScsICdrZXlDb2RlJywgJ3doaWNoJ10sXG4gIGZpeDogZnVuY3Rpb24gZml4KGV2ZW50LCBuYXRpdmVFdmVudCkge1xuICAgIGlmIChpc051bGxPclVuZGVmaW5lZChldmVudC53aGljaCkpIHtcbiAgICAgIGV2ZW50LndoaWNoID0gIWlzTnVsbE9yVW5kZWZpbmVkKG5hdGl2ZUV2ZW50LmNoYXJDb2RlKSA/IG5hdGl2ZUV2ZW50LmNoYXJDb2RlIDogbmF0aXZlRXZlbnQua2V5Q29kZTtcbiAgICB9XG5cbiAgICAvLyBhZGQgbWV0YUtleSB0byBub24tTWFjIGJyb3dzZXJzICh1c2UgY3RybCBmb3IgUEMgJ3MgYW5kIE1ldGEgZm9yIE1hY3MpXG4gICAgaWYgKGV2ZW50Lm1ldGFLZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnQubWV0YUtleSA9IGV2ZW50LmN0cmxLZXk7XG4gICAgfVxuICB9XG59LCB7XG4gIHJlZzogL150b3VjaC8sXG4gIHByb3BzOiBbJ3RvdWNoZXMnLCAnY2hhbmdlZFRvdWNoZXMnLCAndGFyZ2V0VG91Y2hlcyddXG59LCB7XG4gIHJlZzogL15oYXNoY2hhbmdlJC8sXG4gIHByb3BzOiBbJ25ld1VSTCcsICdvbGRVUkwnXVxufSwge1xuICByZWc6IC9eZ2VzdHVyZWNoYW5nZSQvaSxcbiAgcHJvcHM6IFsncm90YXRpb24nLCAnc2NhbGUnXVxufSwge1xuICByZWc6IC9eKG1vdXNld2hlZWx8RE9NTW91c2VTY3JvbGwpJC8sXG4gIHByb3BzOiBbXSxcbiAgZml4OiBmdW5jdGlvbiBmaXgoZXZlbnQsIG5hdGl2ZUV2ZW50KSB7XG4gICAgdmFyIGRlbHRhWCA9IHVuZGVmaW5lZDtcbiAgICB2YXIgZGVsdGFZID0gdW5kZWZpbmVkO1xuICAgIHZhciBkZWx0YSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgd2hlZWxEZWx0YSA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGE7XG4gICAgdmFyIGF4aXMgPSBuYXRpdmVFdmVudC5heGlzO1xuICAgIHZhciB3aGVlbERlbHRhWSA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGFZO1xuICAgIHZhciB3aGVlbERlbHRhWCA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGFYO1xuICAgIHZhciBkZXRhaWwgPSBuYXRpdmVFdmVudC5kZXRhaWw7XG5cbiAgICAvLyBpZS93ZWJraXRcbiAgICBpZiAod2hlZWxEZWx0YSkge1xuICAgICAgZGVsdGEgPSB3aGVlbERlbHRhIC8gMTIwO1xuICAgIH1cblxuICAgIC8vIGdlY2tvXG4gICAgaWYgKGRldGFpbCkge1xuICAgICAgLy8gcHJlc3MgY29udHJvbCBlLmRldGFpbCA9PSAxIGVsc2UgZS5kZXRhaWwgPT0gM1xuICAgICAgZGVsdGEgPSAwIC0gKGRldGFpbCAlIDMgPT09IDAgPyBkZXRhaWwgLyAzIDogZGV0YWlsKTtcbiAgICB9XG5cbiAgICAvLyBHZWNrb1xuICAgIGlmIChheGlzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChheGlzID09PSBldmVudC5IT1JJWk9OVEFMX0FYSVMpIHtcbiAgICAgICAgZGVsdGFZID0gMDtcbiAgICAgICAgZGVsdGFYID0gMCAtIGRlbHRhO1xuICAgICAgfSBlbHNlIGlmIChheGlzID09PSBldmVudC5WRVJUSUNBTF9BWElTKSB7XG4gICAgICAgIGRlbHRhWCA9IDA7XG4gICAgICAgIGRlbHRhWSA9IGRlbHRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdlYmtpdFxuICAgIGlmICh3aGVlbERlbHRhWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWx0YVkgPSB3aGVlbERlbHRhWSAvIDEyMDtcbiAgICB9XG4gICAgaWYgKHdoZWVsRGVsdGFYICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbHRhWCA9IC0xICogd2hlZWxEZWx0YVggLyAxMjA7XG4gICAgfVxuXG4gICAgLy8g6buY6K6kIGRlbHRhWSAoaWUpXG4gICAgaWYgKCFkZWx0YVggJiYgIWRlbHRhWSkge1xuICAgICAgZGVsdGFZID0gZGVsdGE7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIGRlbHRhWCBvZiBtb3VzZXdoZWVsIGV2ZW50XG4gICAgICAgKiBAcHJvcGVydHkgZGVsdGFYXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YVggPSBkZWx0YVg7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIGRlbHRhWSBvZiBtb3VzZXdoZWVsIGV2ZW50XG4gICAgICAgKiBAcHJvcGVydHkgZGVsdGFZXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YVkgPSBkZWx0YVk7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qKlxuICAgICAgICogZGVsdGEgb2YgbW91c2V3aGVlbCBldmVudFxuICAgICAgICogQHByb3BlcnR5IGRlbHRhXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YSA9IGRlbHRhO1xuICAgIH1cbiAgfVxufSwge1xuICByZWc6IC9ebW91c2V8Y29udGV4dG1lbnV8Y2xpY2t8bXNwb2ludGVyfCheRE9NTW91c2VTY3JvbGwkKS9pLFxuICBwcm9wczogWydidXR0b25zJywgJ2NsaWVudFgnLCAnY2xpZW50WScsICdidXR0b24nLCAnb2Zmc2V0WCcsICdyZWxhdGVkVGFyZ2V0JywgJ3doaWNoJywgJ2Zyb21FbGVtZW50JywgJ3RvRWxlbWVudCcsICdvZmZzZXRZJywgJ3BhZ2VYJywgJ3BhZ2VZJywgJ3NjcmVlblgnLCAnc2NyZWVuWSddLFxuICBmaXg6IGZ1bmN0aW9uIGZpeChldmVudCwgbmF0aXZlRXZlbnQpIHtcbiAgICB2YXIgZXZlbnREb2MgPSB1bmRlZmluZWQ7XG4gICAgdmFyIGRvYyA9IHVuZGVmaW5lZDtcbiAgICB2YXIgYm9keSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciBidXR0b24gPSBuYXRpdmVFdmVudC5idXR0b247XG5cbiAgICAvLyBDYWxjdWxhdGUgcGFnZVgvWSBpZiBtaXNzaW5nIGFuZCBjbGllbnRYL1kgYXZhaWxhYmxlXG4gICAgaWYgKHRhcmdldCAmJiBpc051bGxPclVuZGVmaW5lZChldmVudC5wYWdlWCkgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKG5hdGl2ZUV2ZW50LmNsaWVudFgpKSB7XG4gICAgICBldmVudERvYyA9IHRhcmdldC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuICAgICAgZG9jID0gZXZlbnREb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgYm9keSA9IGV2ZW50RG9jLmJvZHk7XG4gICAgICBldmVudC5wYWdlWCA9IG5hdGl2ZUV2ZW50LmNsaWVudFggKyAoZG9jICYmIGRvYy5zY3JvbGxMZWZ0IHx8IGJvZHkgJiYgYm9keS5zY3JvbGxMZWZ0IHx8IDApIC0gKGRvYyAmJiBkb2MuY2xpZW50TGVmdCB8fCBib2R5ICYmIGJvZHkuY2xpZW50TGVmdCB8fCAwKTtcbiAgICAgIGV2ZW50LnBhZ2VZID0gbmF0aXZlRXZlbnQuY2xpZW50WSArIChkb2MgJiYgZG9jLnNjcm9sbFRvcCB8fCBib2R5ICYmIGJvZHkuc2Nyb2xsVG9wIHx8IDApIC0gKGRvYyAmJiBkb2MuY2xpZW50VG9wIHx8IGJvZHkgJiYgYm9keS5jbGllbnRUb3AgfHwgMCk7XG4gICAgfVxuXG4gICAgLy8gd2hpY2ggZm9yIGNsaWNrOiAxID09PSBsZWZ0OyAyID09PSBtaWRkbGU7IDMgPT09IHJpZ2h0XG4gICAgLy8gZG8gbm90IHVzZSBidXR0b25cbiAgICBpZiAoIWV2ZW50LndoaWNoICYmIGJ1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoYnV0dG9uICYgMSkge1xuICAgICAgICBldmVudC53aGljaCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbiAmIDIpIHtcbiAgICAgICAgZXZlbnQud2hpY2ggPSAzO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24gJiA0KSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgcmVsYXRlZFRhcmdldCwgaWYgbmVjZXNzYXJ5XG4gICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0ICYmIGV2ZW50LmZyb21FbGVtZW50KSB7XG4gICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ID0gZXZlbnQuZnJvbUVsZW1lbnQgPT09IHRhcmdldCA/IGV2ZW50LnRvRWxlbWVudCA6IGV2ZW50LmZyb21FbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBldmVudDtcbiAgfVxufV07XG5cbmZ1bmN0aW9uIHJldFRydWUoKSB7XG4gIHJldHVybiBUUlVFO1xufVxuXG5mdW5jdGlvbiByZXRGYWxzZSgpIHtcbiAgcmV0dXJuIEZBTFNFO1xufVxuXG5mdW5jdGlvbiBEb21FdmVudE9iamVjdChuYXRpdmVFdmVudCkge1xuICB2YXIgdHlwZSA9IG5hdGl2ZUV2ZW50LnR5cGU7XG5cbiAgdmFyIGlzTmF0aXZlID0gdHlwZW9mIG5hdGl2ZUV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgbmF0aXZlRXZlbnQuY2FuY2VsQnViYmxlID09PSAnYm9vbGVhbic7XG5cbiAgX0V2ZW50QmFzZU9iamVjdDJbJ2RlZmF1bHQnXS5jYWxsKHRoaXMpO1xuXG4gIHRoaXMubmF0aXZlRXZlbnQgPSBuYXRpdmVFdmVudDtcblxuICAvLyBpbiBjYXNlIGRvbSBldmVudCBoYXMgYmVlbiBtYXJrIGFzIGRlZmF1bHQgcHJldmVudGVkIGJ5IGxvd2VyIGRvbSBub2RlXG4gIHZhciBpc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXRGYWxzZTtcbiAgaWYgKCdkZWZhdWx0UHJldmVudGVkJyBpbiBuYXRpdmVFdmVudCkge1xuICAgIGlzRGVmYXVsdFByZXZlbnRlZCA9IG5hdGl2ZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPyByZXRUcnVlIDogcmV0RmFsc2U7XG4gIH0gZWxzZSBpZiAoJ2dldFByZXZlbnREZWZhdWx0JyBpbiBuYXRpdmVFdmVudCkge1xuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5MTE1MVxuICAgIGlzRGVmYXVsdFByZXZlbnRlZCA9IG5hdGl2ZUV2ZW50LmdldFByZXZlbnREZWZhdWx0KCkgPyByZXRUcnVlIDogcmV0RmFsc2U7XG4gIH0gZWxzZSBpZiAoJ3JldHVyblZhbHVlJyBpbiBuYXRpdmVFdmVudCkge1xuICAgIGlzRGVmYXVsdFByZXZlbnRlZCA9IG5hdGl2ZUV2ZW50LnJldHVyblZhbHVlID09PSBGQUxTRSA/IHJldFRydWUgOiByZXRGYWxzZTtcbiAgfVxuXG4gIHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gaXNEZWZhdWx0UHJldmVudGVkO1xuXG4gIHZhciBmaXhGbnMgPSBbXTtcbiAgdmFyIGZpeEZuID0gdW5kZWZpbmVkO1xuICB2YXIgbCA9IHVuZGVmaW5lZDtcbiAgdmFyIHByb3AgPSB1bmRlZmluZWQ7XG4gIHZhciBwcm9wcyA9IGNvbW1vblByb3BzLmNvbmNhdCgpO1xuXG4gIGV2ZW50Tm9ybWFsaXplcnMuZm9yRWFjaChmdW5jdGlvbiAobm9ybWFsaXplcikge1xuICAgIGlmICh0eXBlLm1hdGNoKG5vcm1hbGl6ZXIucmVnKSkge1xuICAgICAgcHJvcHMgPSBwcm9wcy5jb25jYXQobm9ybWFsaXplci5wcm9wcyk7XG4gICAgICBpZiAobm9ybWFsaXplci5maXgpIHtcbiAgICAgICAgZml4Rm5zLnB1c2gobm9ybWFsaXplci5maXgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbCA9IHByb3BzLmxlbmd0aDtcblxuICAvLyBjbG9uZSBwcm9wZXJ0aWVzIG9mIHRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcbiAgd2hpbGUgKGwpIHtcbiAgICBwcm9wID0gcHJvcHNbLS1sXTtcbiAgICB0aGlzW3Byb3BdID0gbmF0aXZlRXZlbnRbcHJvcF07XG4gIH1cblxuICAvLyBmaXggdGFyZ2V0IHByb3BlcnR5LCBpZiBuZWNlc3NhcnlcbiAgaWYgKCF0aGlzLnRhcmdldCAmJiBpc05hdGl2ZSkge1xuICAgIHRoaXMudGFyZ2V0ID0gbmF0aXZlRXZlbnQuc3JjRWxlbWVudCB8fCBkb2N1bWVudDsgLy8gc3JjRWxlbWVudCBtaWdodCBub3QgYmUgZGVmaW5lZCBlaXRoZXJcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIHRhcmdldCBpcyBhIHRleHQgbm9kZSAoc2FmYXJpKVxuICBpZiAodGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQubm9kZVR5cGUgPT09IDMpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMudGFyZ2V0LnBhcmVudE5vZGU7XG4gIH1cblxuICBsID0gZml4Rm5zLmxlbmd0aDtcblxuICB3aGlsZSAobCkge1xuICAgIGZpeEZuID0gZml4Rm5zWy0tbF07XG4gICAgZml4Rm4odGhpcywgbmF0aXZlRXZlbnQpO1xuICB9XG5cbiAgdGhpcy50aW1lU3RhbXAgPSBuYXRpdmVFdmVudC50aW1lU3RhbXAgfHwgRGF0ZS5ub3coKTtcbn1cblxudmFyIEV2ZW50QmFzZU9iamVjdFByb3RvID0gX0V2ZW50QmFzZU9iamVjdDJbJ2RlZmF1bHQnXS5wcm90b3R5cGU7XG5cbigwLCBfb2JqZWN0QXNzaWduMlsnZGVmYXVsdCddKShEb21FdmVudE9iamVjdC5wcm90b3R5cGUsIEV2ZW50QmFzZU9iamVjdFByb3RvLCB7XG4gIGNvbnN0cnVjdG9yOiBEb21FdmVudE9iamVjdCxcblxuICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLm5hdGl2ZUV2ZW50O1xuXG4gICAgLy8gaWYgcHJldmVudERlZmF1bHQgZXhpc3RzIHJ1biBpdCBvbiB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGhlcndpc2Ugc2V0IHRoZSByZXR1cm5WYWx1ZSBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgZXZlbnQgdG8gRkFMU0UgKElFKVxuICAgICAgZS5yZXR1cm5WYWx1ZSA9IEZBTFNFO1xuICAgIH1cblxuICAgIEV2ZW50QmFzZU9iamVjdFByb3RvLnByZXZlbnREZWZhdWx0LmNhbGwodGhpcyk7XG4gIH0sXG5cbiAgc3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgdmFyIGUgPSB0aGlzLm5hdGl2ZUV2ZW50O1xuXG4gICAgLy8gaWYgc3RvcFByb3BhZ2F0aW9uIGV4aXN0cyBydW4gaXQgb24gdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGhlcndpc2Ugc2V0IHRoZSBjYW5jZWxCdWJibGUgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsIGV2ZW50IHRvIFRSVUUgKElFKVxuICAgICAgZS5jYW5jZWxCdWJibGUgPSBUUlVFO1xuICAgIH1cblxuICAgIEV2ZW50QmFzZU9iamVjdFByb3RvLnN0b3BQcm9wYWdhdGlvbi5jYWxsKHRoaXMpO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRG9tRXZlbnRPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gYWRkRXZlbnRMaXN0ZW5lcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX0V2ZW50T2JqZWN0ID0gcmVxdWlyZSgnLi9FdmVudE9iamVjdCcpO1xuXG52YXIgX0V2ZW50T2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0V2ZW50T2JqZWN0KTtcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsIGV2ZW50VHlwZSwgY2FsbGJhY2ssIG9wdGlvbikge1xuICBmdW5jdGlvbiB3cmFwQ2FsbGJhY2soZSkge1xuICAgIHZhciBuZSA9IG5ldyBfRXZlbnRPYmplY3QyWydkZWZhdWx0J10oZSk7XG4gICAgY2FsbGJhY2suY2FsbCh0YXJnZXQsIG5lKTtcbiAgfVxuXG4gIGlmICh0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHZhciBfcmV0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB1c2VDYXB0dXJlID0gZmFsc2U7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdXNlQ2FwdHVyZSA9IG9wdGlvbi5jYXB0dXJlIHx8IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgdXNlQ2FwdHVyZSA9IG9wdGlvbjtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2ssIG9wdGlvbiB8fCBmYWxzZSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHY6IHtcbiAgICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgd3JhcENhbGxiYWNrLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGlmICh0eXBlb2YgX3JldCA9PT0gJ29iamVjdCcpIHJldHVybiBfcmV0LnY7XG4gIH0gZWxzZSBpZiAodGFyZ2V0LmF0dGFjaEV2ZW50KSB7XG4gICAgdGFyZ2V0LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudFR5cGUsIHdyYXBDYWxsYmFjayk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICB0YXJnZXQuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50VHlwZSwgd3JhcENhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE93blByb3BlcnR5RGVzY3JpcHRvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gKDAsIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyLmRlZmF1bHQpKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG4iLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX2FkZEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCdyYy11dGlsL2xpYi9Eb20vYWRkRXZlbnRMaXN0ZW5lcicpO1xuXG52YXIgX2FkZEV2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkRXZlbnRMaXN0ZW5lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIEhhbmRsZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzWydkZWZhdWx0J10pKEhhbmRsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSGFuZGxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szWydkZWZhdWx0J10pKHRoaXMsIEhhbmRsZSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjNbJ2RlZmF1bHQnXSkodGhpcywgKF9yZWYgPSBIYW5kbGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihIYW5kbGUpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNsaWNrRm9jdXNlZDogZmFsc2VcbiAgICB9LCBfdGhpcy5zZXRIYW5kbGVSZWYgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMuaGFuZGxlID0gbm9kZTtcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZVVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IF90aGlzLmhhbmRsZSkge1xuICAgICAgICBfdGhpcy5zZXRDbGlja0ZvY3VzKHRydWUpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGZpeCBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNTMyNFxuICAgICAgX3RoaXMuZm9jdXMoKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0Q2xpY2tGb2N1cyhmYWxzZSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldENsaWNrRm9jdXMoZmFsc2UpO1xuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuM1snZGVmYXVsdCddKShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzM1snZGVmYXVsdCddKShIYW5kbGUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIC8vIG1vdXNldXAgd29uJ3QgdHJpZ2dlciBpZiBtb3VzZSBtb3ZlZCBvdXQgb2YgaGFuZGxlLFxuICAgICAgLy8gc28gd2UgbGlzdGVuIG9uIGRvY3VtZW50IGhlcmUuXG4gICAgICB0aGlzLm9uTW91c2VVcExpc3RlbmVyID0gKDAsIF9hZGRFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddKShkb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5vbk1vdXNlVXBMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLm9uTW91c2VVcExpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldENsaWNrRm9jdXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDbGlja0ZvY3VzKGZvY3VzZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbGlja0ZvY3VzZWQ6IGZvY3VzZWQgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xpY2tGb2N1cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsaWNrRm9jdXMoKSB7XG4gICAgICB0aGlzLnNldENsaWNrRm9jdXModHJ1ZSk7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9jdXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIHRoaXMuaGFuZGxlLmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYmx1cicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICB0aGlzLmhhbmRsZS5ibHVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9yZWYyLCBfcmVmMztcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgICB2ZXJ0aWNhbCA9IF9wcm9wcy52ZXJ0aWNhbCxcbiAgICAgICAgICByZXZlcnNlID0gX3Byb3BzLnJldmVyc2UsXG4gICAgICAgICAgb2Zmc2V0ID0gX3Byb3BzLm9mZnNldCxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBtaW4gPSBfcHJvcHMubWluLFxuICAgICAgICAgIG1heCA9IF9wcm9wcy5tYXgsXG4gICAgICAgICAgdmFsdWUgPSBfcHJvcHMudmFsdWUsXG4gICAgICAgICAgdGFiSW5kZXggPSBfcHJvcHMudGFiSW5kZXgsXG4gICAgICAgICAgcmVzdFByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczNbJ2RlZmF1bHQnXSkoX3Byb3BzLCBbJ3ByZWZpeENscycsICd2ZXJ0aWNhbCcsICdyZXZlcnNlJywgJ29mZnNldCcsICdzdHlsZScsICdkaXNhYmxlZCcsICdtaW4nLCAnbWF4JywgJ3ZhbHVlJywgJ3RhYkluZGV4J10pO1xuXG5cbiAgICAgIHZhciBjbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKSh7fSwgcHJlZml4Q2xzICsgJy1oYW5kbGUtY2xpY2stZm9jdXNlZCcsIHRoaXMuc3RhdGUuY2xpY2tGb2N1c2VkKSk7XG4gICAgICB2YXIgcG9zaXRpb25TdHlsZSA9IHZlcnRpY2FsID8gKF9yZWYyID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9yZWYyLCByZXZlcnNlID8gJ3RvcCcgOiAnYm90dG9tJywgb2Zmc2V0ICsgJyUnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX3JlZjIsIHJldmVyc2UgPyAnYm90dG9tJyA6ICd0b3AnLCAnYXV0bycpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfcmVmMiwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKCs1MCUpJyksIF9yZWYyKSA6IChfcmVmMyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfcmVmMywgcmV2ZXJzZSA/ICdyaWdodCcgOiAnbGVmdCcsIG9mZnNldCArICclJyksICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9yZWYzLCByZXZlcnNlID8gJ2xlZnQnIDogJ3JpZ2h0JywgJ2F1dG8nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX3JlZjMsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgKHJldmVyc2UgPyAnKycgOiAnLScpICsgJzUwJSknKSwgX3JlZjMpO1xuICAgICAgdmFyIGVsU3R5bGUgPSAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCBzdHlsZSwgcG9zaXRpb25TdHlsZSk7XG5cbiAgICAgIHZhciBfdGFiSW5kZXggPSB0YWJJbmRleCB8fCAwO1xuICAgICAgaWYgKGRpc2FibGVkIHx8IHRhYkluZGV4ID09PSBudWxsKSB7XG4gICAgICAgIF90YWJJbmRleCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnZGl2JywgKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7XG4gICAgICAgIHJlZjogdGhpcy5zZXRIYW5kbGVSZWYsXG4gICAgICAgIHRhYkluZGV4OiBfdGFiSW5kZXhcbiAgICAgIH0sIHJlc3RQcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IGVsU3R5bGUsXG4gICAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVCbHVyLFxuICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duXG5cbiAgICAgICAgLy8gYXJpYSBhdHRyaWJ1dGVcbiAgICAgICAgLCByb2xlOiAnc2xpZGVyJyxcbiAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiBtaW4sXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogbWF4LFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHZhbHVlLFxuICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICEhZGlzYWJsZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEhhbmRsZTtcbn0oX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEhhbmRsZTtcblxuXG5IYW5kbGUucHJvcFR5cGVzID0ge1xuICBwcmVmaXhDbHM6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nLFxuICB2ZXJ0aWNhbDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ib29sLFxuICBvZmZzZXQ6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLFxuICBzdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QsXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmJvb2wsXG4gIG1pbjogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5udW1iZXIsXG4gIG1heDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5udW1iZXIsXG4gIHZhbHVlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcixcbiAgdGFiSW5kZXg6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLFxuICByZXZlcnNlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmJvb2xcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkyKTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5Jyk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9Db25zdW1hYmxlQXJyYXkyKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdCA9IHJlcXVpcmUoJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0Jyk7XG5cbnZhciBfc2hhbGxvd2VxdWFsID0gcmVxdWlyZSgnc2hhbGxvd2VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd2VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dlcXVhbCk7XG5cbnZhciBfVHJhY2sgPSByZXF1aXJlKCcuL2NvbW1vbi9UcmFjaycpO1xuXG52YXIgX1RyYWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYWNrKTtcblxudmFyIF9jcmVhdGVTbGlkZXIgPSByZXF1aXJlKCcuL2NvbW1vbi9jcmVhdGVTbGlkZXInKTtcblxudmFyIF9jcmVhdGVTbGlkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlU2xpZGVyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIHV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialsnZGVmYXVsdCddID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG52YXIgX3RyaW1BbGlnblZhbHVlID0gZnVuY3Rpb24gX3RyaW1BbGlnblZhbHVlKF9yZWYpIHtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIGhhbmRsZSA9IF9yZWYuaGFuZGxlLFxuICAgICAgYm91bmRzID0gX3JlZi5ib3VuZHMsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG4gIHZhciBhbGxvd0Nyb3NzID0gcHJvcHMuYWxsb3dDcm9zcyxcbiAgICAgIHB1c2hhYmxlID0gcHJvcHMucHVzaGFibGU7XG5cbiAgdmFyIHRoZXJzaG9sZCA9IE51bWJlcihwdXNoYWJsZSk7XG4gIHZhciB2YWxJblJhbmdlID0gdXRpbHMuZW5zdXJlVmFsdWVJblJhbmdlKHZhbHVlLCBwcm9wcyk7XG4gIHZhciB2YWxOb3RDb25mbGljdCA9IHZhbEluUmFuZ2U7XG4gIGlmICghYWxsb3dDcm9zcyAmJiBoYW5kbGUgIT0gbnVsbCAmJiBib3VuZHMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChoYW5kbGUgPiAwICYmIHZhbEluUmFuZ2UgPD0gYm91bmRzW2hhbmRsZSAtIDFdICsgdGhlcnNob2xkKSB7XG4gICAgICB2YWxOb3RDb25mbGljdCA9IGJvdW5kc1toYW5kbGUgLSAxXSArIHRoZXJzaG9sZDtcbiAgICB9XG4gICAgaWYgKGhhbmRsZSA8IGJvdW5kcy5sZW5ndGggLSAxICYmIHZhbEluUmFuZ2UgPj0gYm91bmRzW2hhbmRsZSArIDFdIC0gdGhlcnNob2xkKSB7XG4gICAgICB2YWxOb3RDb25mbGljdCA9IGJvdW5kc1toYW5kbGUgKyAxXSAtIHRoZXJzaG9sZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHV0aWxzLmVuc3VyZVZhbHVlUHJlY2lzaW9uKHZhbE5vdENvbmZsaWN0LCBwcm9wcyk7XG59O1xuXG52YXIgUmFuZ2UgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzM1snZGVmYXVsdCddKShSYW5nZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmFuZ2UocHJvcHMpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrM1snZGVmYXVsdCddKSh0aGlzLCBSYW5nZSk7XG5cbiAgICB2YXIgX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zWydkZWZhdWx0J10pKHRoaXMsIChSYW5nZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJhbmdlKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMub25FbmQgPSBmdW5jdGlvbiAoZm9yY2UpIHtcbiAgICAgIHZhciBoYW5kbGUgPSBfdGhpcy5zdGF0ZS5oYW5kbGU7XG5cbiAgICAgIF90aGlzLnJlbW92ZURvY3VtZW50RXZlbnRzKCk7XG5cbiAgICAgIGlmIChoYW5kbGUgIT09IG51bGwgfHwgZm9yY2UpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25BZnRlckNoYW5nZShfdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoYW5kbGU6IG51bGxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgY291bnQgPSBwcm9wcy5jb3VudCxcbiAgICAgICAgbWluID0gcHJvcHMubWluLFxuICAgICAgICBtYXggPSBwcm9wcy5tYXg7XG5cbiAgICB2YXIgaW5pdGlhbFZhbHVlID0gQXJyYXkuYXBwbHkodW5kZWZpbmVkLCAoMCwgX3RvQ29uc3VtYWJsZUFycmF5M1snZGVmYXVsdCddKShBcnJheShjb3VudCArIDEpKSkubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtaW47XG4gICAgfSk7XG4gICAgdmFyIGRlZmF1bHRWYWx1ZSA9ICdkZWZhdWx0VmFsdWUnIGluIHByb3BzID8gcHJvcHMuZGVmYXVsdFZhbHVlIDogaW5pdGlhbFZhbHVlO1xuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgPyBwcm9wcy52YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbiAgICB2YXIgYm91bmRzID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICByZXR1cm4gX3RyaW1BbGlnblZhbHVlKHtcbiAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgIGhhbmRsZTogaSxcbiAgICAgICAgcHJvcHM6IHByb3BzXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgcmVjZW50ID0gYm91bmRzWzBdID09PSBtYXggPyAwIDogYm91bmRzLmxlbmd0aCAtIDE7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhhbmRsZTogbnVsbCxcbiAgICAgIHJlY2VudDogcmVjZW50LFxuICAgICAgYm91bmRzOiBib3VuZHNcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzWydkZWZhdWx0J10pKFJhbmdlLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICghKCd2YWx1ZScgaW4gdGhpcy5wcm9wcyB8fCAnbWluJyBpbiB0aGlzLnByb3BzIHx8ICdtYXgnIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm1pbiA9PT0gcHJldlByb3BzLm1pbiAmJiB0aGlzLnByb3BzLm1heCA9PT0gcHJldlByb3BzLm1heCAmJiAoMCwgX3NoYWxsb3dlcXVhbDJbJ2RlZmF1bHQnXSkodGhpcy5wcm9wcy52YWx1ZSwgcHJldlByb3BzLnZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkNoYW5nZSA9IF9wcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgICB2YWx1ZSA9IF9wcm9wcy52YWx1ZTtcblxuICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IHZhbHVlIHx8IHByZXZTdGF0ZS5ib3VuZHM7XG4gICAgICBpZiAoY3VycmVudFZhbHVlLnNvbWUoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmlzVmFsdWVPdXRPZlJhbmdlKHYsIF90aGlzMi5wcm9wcyk7XG4gICAgICB9KSkge1xuICAgICAgICB2YXIgbmV3VmFsdWVzID0gY3VycmVudFZhbHVlLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB1dGlscy5lbnN1cmVWYWx1ZUluUmFuZ2UodiwgX3RoaXMyLnByb3BzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25DaGFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNoYW5nZShzdGF0ZSkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBpc05vdENvbnRyb2xsZWQgPSAhKCd2YWx1ZScgaW4gcHJvcHMpO1xuICAgICAgaWYgKGlzTm90Q29udHJvbGxlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjb250cm9sbGVkU3RhdGUgPSB7fTtcblxuICAgICAgICBbJ2hhbmRsZScsICdyZWNlbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgaWYgKHN0YXRlW2l0ZW1dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZWRTdGF0ZVtpdGVtXSA9IHN0YXRlW2l0ZW1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNvbnRyb2xsZWRTdGF0ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShjb250cm9sbGVkU3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBkYXRhID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgdGhpcy5zdGF0ZSwgc3RhdGUpO1xuICAgICAgdmFyIGNoYW5nZWRWYWx1ZSA9IGRhdGEuYm91bmRzO1xuICAgICAgcHJvcHMub25DaGFuZ2UoY2hhbmdlZFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvblN0YXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25TdGFydChwb3NpdGlvbikge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICB2YXIgYm91bmRzID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgcHJvcHMub25CZWZvcmVDaGFuZ2UoYm91bmRzKTtcblxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5jYWxjVmFsdWVCeVBvcyhwb3NpdGlvbik7XG4gICAgICB0aGlzLnN0YXJ0VmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuXG4gICAgICB2YXIgY2xvc2VzdEJvdW5kID0gdGhpcy5nZXRDbG9zZXN0Qm91bmQodmFsdWUpO1xuICAgICAgdGhpcy5wcmV2TW92ZWRIYW5kbGVJbmRleCA9IHRoaXMuZ2V0Qm91bmROZWVkTW92aW5nKHZhbHVlLCBjbG9zZXN0Qm91bmQpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaGFuZGxlOiB0aGlzLnByZXZNb3ZlZEhhbmRsZUluZGV4LFxuICAgICAgICByZWNlbnQ6IHRoaXMucHJldk1vdmVkSGFuZGxlSW5kZXhcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgcHJldlZhbHVlID0gYm91bmRzW3RoaXMucHJldk1vdmVkSGFuZGxlSW5kZXhdO1xuICAgICAgaWYgKHZhbHVlID09PSBwcmV2VmFsdWUpIHJldHVybjtcblxuICAgICAgdmFyIG5leHRCb3VuZHMgPSBbXS5jb25jYXQoKDAsIF90b0NvbnN1bWFibGVBcnJheTNbJ2RlZmF1bHQnXSkoc3RhdGUuYm91bmRzKSk7XG4gICAgICBuZXh0Qm91bmRzW3RoaXMucHJldk1vdmVkSGFuZGxlSW5kZXhdID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHsgYm91bmRzOiBuZXh0Qm91bmRzIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uTW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW92ZShlLCBwb3NpdGlvbikge1xuICAgICAgdXRpbHMucGF1c2VFdmVudChlKTtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuY2FsY1ZhbHVlQnlQb3MocG9zaXRpb24pO1xuICAgICAgdmFyIG9sZFZhbHVlID0gc3RhdGUuYm91bmRzW3N0YXRlLmhhbmRsZV07XG4gICAgICBpZiAodmFsdWUgPT09IG9sZFZhbHVlKSByZXR1cm47XG5cbiAgICAgIHRoaXMubW92ZVRvKHZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbktleWJvYXJkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlib2FyZChlKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcmV2ZXJzZSA9IF9wcm9wczIucmV2ZXJzZSxcbiAgICAgICAgICB2ZXJ0aWNhbCA9IF9wcm9wczIudmVydGljYWw7XG5cbiAgICAgIHZhciB2YWx1ZU11dGF0b3IgPSB1dGlscy5nZXRLZXlib2FyZFZhbHVlTXV0YXRvcihlLCB2ZXJ0aWNhbCwgcmV2ZXJzZSk7XG5cbiAgICAgIGlmICh2YWx1ZU11dGF0b3IpIHtcbiAgICAgICAgdXRpbHMucGF1c2VFdmVudChlKTtcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIGJvdW5kcyA9IHN0YXRlLmJvdW5kcyxcbiAgICAgICAgICAgIGhhbmRsZSA9IHN0YXRlLmhhbmRsZTtcblxuICAgICAgICB2YXIgb2xkVmFsdWUgPSBib3VuZHNbaGFuZGxlID09PSBudWxsID8gc3RhdGUucmVjZW50IDogaGFuZGxlXTtcbiAgICAgICAgdmFyIG11dGF0ZWRWYWx1ZSA9IHZhbHVlTXV0YXRvcihvbGRWYWx1ZSwgcHJvcHMpO1xuICAgICAgICB2YXIgdmFsdWUgPSBfdHJpbUFsaWduVmFsdWUoe1xuICAgICAgICAgIHZhbHVlOiBtdXRhdGVkVmFsdWUsXG4gICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgYm91bmRzOiBzdGF0ZS5ib3VuZHMsXG4gICAgICAgICAgcHJvcHM6IHByb3BzXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodmFsdWUgPT09IG9sZFZhbHVlKSByZXR1cm47XG4gICAgICAgIHZhciBpc0Zyb21LZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tb3ZlVG8odmFsdWUsIGlzRnJvbUtleWJvYXJkRXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ib3VuZHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2xvc2VzdEJvdW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2xvc2VzdEJvdW5kKHZhbHVlKSB7XG4gICAgICB2YXIgYm91bmRzID0gdGhpcy5zdGF0ZS5ib3VuZHM7XG5cbiAgICAgIHZhciBjbG9zZXN0Qm91bmQgPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBib3VuZHMubGVuZ3RoIC0gMTsgKytpKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+PSBib3VuZHNbaV0pIHtcbiAgICAgICAgICBjbG9zZXN0Qm91bmQgPSBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoTWF0aC5hYnMoYm91bmRzW2Nsb3Nlc3RCb3VuZCArIDFdIC0gdmFsdWUpIDwgTWF0aC5hYnMoYm91bmRzW2Nsb3Nlc3RCb3VuZF0gLSB2YWx1ZSkpIHtcbiAgICAgICAgY2xvc2VzdEJvdW5kICs9IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xvc2VzdEJvdW5kO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEJvdW5kTmVlZE1vdmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJvdW5kTmVlZE1vdmluZyh2YWx1ZSwgY2xvc2VzdEJvdW5kKSB7XG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBib3VuZHMgPSBfc3RhdGUuYm91bmRzLFxuICAgICAgICAgIHJlY2VudCA9IF9zdGF0ZS5yZWNlbnQ7XG5cbiAgICAgIHZhciBib3VuZE5lZWRNb3ZpbmcgPSBjbG9zZXN0Qm91bmQ7XG4gICAgICB2YXIgaXNBdFRoZVNhbWVQb2ludCA9IGJvdW5kc1tjbG9zZXN0Qm91bmQgKyAxXSA9PT0gYm91bmRzW2Nsb3Nlc3RCb3VuZF07XG5cbiAgICAgIGlmIChpc0F0VGhlU2FtZVBvaW50ICYmIGJvdW5kc1tyZWNlbnRdID09PSBib3VuZHNbY2xvc2VzdEJvdW5kXSkge1xuICAgICAgICBib3VuZE5lZWRNb3ZpbmcgPSByZWNlbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0F0VGhlU2FtZVBvaW50ICYmIHZhbHVlICE9PSBib3VuZHNbY2xvc2VzdEJvdW5kICsgMV0pIHtcbiAgICAgICAgYm91bmROZWVkTW92aW5nID0gdmFsdWUgPCBib3VuZHNbY2xvc2VzdEJvdW5kICsgMV0gPyBjbG9zZXN0Qm91bmQgOiBjbG9zZXN0Qm91bmQgKyAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJvdW5kTmVlZE1vdmluZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRMb3dlckJvdW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG93ZXJCb3VuZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmJvdW5kc1swXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRVcHBlckJvdW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VXBwZXJCb3VuZCgpIHtcbiAgICAgIHZhciBib3VuZHMgPSB0aGlzLnN0YXRlLmJvdW5kcztcblxuICAgICAgcmV0dXJuIGJvdW5kc1tib3VuZHMubGVuZ3RoIC0gMV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBwb3NzaWJsZSBzbGlkZXIgcG9pbnRzLCB0YWtpbmcgaW50byBhY2NvdW50IGJvdGhcbiAgICAgKiBgbWFya3NgIGFuZCBgc3RlcGAuIFRoZSByZXN1bHQgaXMgY2FjaGVkLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRQb2ludHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb2ludHMoKSB7XG4gICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWFya3MgPSBfcHJvcHMzLm1hcmtzLFxuICAgICAgICAgIHN0ZXAgPSBfcHJvcHMzLnN0ZXAsXG4gICAgICAgICAgbWluID0gX3Byb3BzMy5taW4sXG4gICAgICAgICAgbWF4ID0gX3Byb3BzMy5tYXg7XG5cbiAgICAgIHZhciBjYWNoZSA9IHRoaXMuX2dldFBvaW50c0NhY2hlO1xuICAgICAgaWYgKCFjYWNoZSB8fCBjYWNoZS5tYXJrcyAhPT0gbWFya3MgfHwgY2FjaGUuc3RlcCAhPT0gc3RlcCkge1xuICAgICAgICB2YXIgcG9pbnRzT2JqZWN0ID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgbWFya3MpO1xuICAgICAgICBpZiAoc3RlcCAhPT0gbnVsbCkge1xuICAgICAgICAgIGZvciAodmFyIHBvaW50ID0gbWluOyBwb2ludCA8PSBtYXg7IHBvaW50ICs9IHN0ZXApIHtcbiAgICAgICAgICAgIHBvaW50c09iamVjdFtwb2ludF0gPSBwb2ludDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvaW50cyA9IE9iamVjdC5rZXlzKHBvaW50c09iamVjdCkubWFwKHBhcnNlRmxvYXQpO1xuICAgICAgICBwb2ludHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2dldFBvaW50c0NhY2hlID0geyBtYXJrczogbWFya3MsIHN0ZXA6IHN0ZXAsIHBvaW50czogcG9pbnRzIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0UG9pbnRzQ2FjaGUucG9pbnRzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ21vdmVUbycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vdmVUbyh2YWx1ZSwgaXNGcm9tS2V5Ym9hcmRFdmVudCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgICB2YXIgbmV4dEJvdW5kcyA9IFtdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5M1snZGVmYXVsdCddKShzdGF0ZS5ib3VuZHMpKTtcbiAgICAgIHZhciBoYW5kbGUgPSBzdGF0ZS5oYW5kbGUgPT09IG51bGwgPyBzdGF0ZS5yZWNlbnQgOiBzdGF0ZS5oYW5kbGU7XG4gICAgICBuZXh0Qm91bmRzW2hhbmRsZV0gPSB2YWx1ZTtcbiAgICAgIHZhciBuZXh0SGFuZGxlID0gaGFuZGxlO1xuICAgICAgaWYgKHByb3BzLnB1c2hhYmxlICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnB1c2hTdXJyb3VuZGluZ0hhbmRsZXMobmV4dEJvdW5kcywgbmV4dEhhbmRsZSk7XG4gICAgICB9IGVsc2UgaWYgKHByb3BzLmFsbG93Q3Jvc3MpIHtcbiAgICAgICAgbmV4dEJvdW5kcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICB9KTtcbiAgICAgICAgbmV4dEhhbmRsZSA9IG5leHRCb3VuZHMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgcmVjZW50OiBuZXh0SGFuZGxlLFxuICAgICAgICBoYW5kbGU6IG5leHRIYW5kbGUsXG4gICAgICAgIGJvdW5kczogbmV4dEJvdW5kc1xuICAgICAgfSk7XG4gICAgICBpZiAoaXNGcm9tS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAvLyBrbm93biBwcm9ibGVtOiBiZWNhdXNlIHNldFN0YXRlIGlzIGFzeW5jLFxuICAgICAgICAvLyBzbyB0cmlnZ2VyIGZvY3VzIHdpbGwgaW52b2tlIGhhbmRsZXIncyBvbkVuZCBhbmQgYW5vdGhlciBoYW5kbGVyJ3Mgb25TdGFydCB0b28gZWFybHksXG4gICAgICAgIC8vIGNhdXNlIG9uQmVmb3JlQ2hhbmdlIGFuZCBvbkFmdGVyQ2hhbmdlIHJlY2VpdmUgd3JvbmcgdmFsdWUuXG4gICAgICAgIC8vIGhlcmUgdXNlIHNldFN0YXRlIGNhbGxiYWNrIHRvIGhhY2vvvIxidXQgbm90IGVsZWdhbnRcbiAgICAgICAgdGhpcy5wcm9wcy5vbkFmdGVyQ2hhbmdlKG5leHRCb3VuZHMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLmhhbmRsZXNSZWZzW25leHRIYW5kbGVdLmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uRW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHVzaFN1cnJvdW5kaW5nSGFuZGxlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hTdXJyb3VuZGluZ0hhbmRsZXMoYm91bmRzLCBoYW5kbGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGJvdW5kc1toYW5kbGVdO1xuICAgICAgdmFyIHRocmVzaG9sZCA9IHRoaXMucHJvcHMucHVzaGFibGU7XG5cbiAgICAgIHRocmVzaG9sZCA9IE51bWJlcih0aHJlc2hvbGQpO1xuXG4gICAgICB2YXIgZGlyZWN0aW9uID0gMDtcbiAgICAgIGlmIChib3VuZHNbaGFuZGxlICsgMV0gLSB2YWx1ZSA8IHRocmVzaG9sZCkge1xuICAgICAgICBkaXJlY3Rpb24gPSArMTsgLy8gcHVzaCB0byByaWdodFxuICAgICAgfVxuICAgICAgaWYgKHZhbHVlIC0gYm91bmRzW2hhbmRsZSAtIDFdIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9IC0xOyAvLyBwdXNoIHRvIGxlZnRcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXh0SGFuZGxlID0gaGFuZGxlICsgZGlyZWN0aW9uO1xuICAgICAgdmFyIGRpZmZUb05leHQgPSBkaXJlY3Rpb24gKiAoYm91bmRzW25leHRIYW5kbGVdIC0gdmFsdWUpO1xuICAgICAgaWYgKCF0aGlzLnB1c2hIYW5kbGUoYm91bmRzLCBuZXh0SGFuZGxlLCBkaXJlY3Rpb24sIHRocmVzaG9sZCAtIGRpZmZUb05leHQpKSB7XG4gICAgICAgIC8vIHJldmVydCB0byBvcmlnaW5hbCB2YWx1ZSBpZiBwdXNoaW5nIGlzIGltcG9zc2libGVcbiAgICAgICAgYm91bmRzW2hhbmRsZV0gPSBib3VuZHNbbmV4dEhhbmRsZV0gLSBkaXJlY3Rpb24gKiB0aHJlc2hvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHVzaEhhbmRsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hIYW5kbGUoYm91bmRzLCBoYW5kbGUsIGRpcmVjdGlvbiwgYW1vdW50KSB7XG4gICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGJvdW5kc1toYW5kbGVdO1xuICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGJvdW5kc1toYW5kbGVdO1xuICAgICAgd2hpbGUgKGRpcmVjdGlvbiAqIChjdXJyZW50VmFsdWUgLSBvcmlnaW5hbFZhbHVlKSA8IGFtb3VudCkge1xuICAgICAgICBpZiAoIXRoaXMucHVzaEhhbmRsZU9uZVBvaW50KGJvdW5kcywgaGFuZGxlLCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgLy8gY2FuJ3QgcHVzaCBoYW5kbGUgZW5vdWdoIHRvIGNyZWF0ZSB0aGUgbmVlZGVkIGBhbW91bnRgIGdhcCwgc28gd2VcbiAgICAgICAgICAvLyByZXZlcnQgaXRzIHBvc2l0aW9uIHRvIHRoZSBvcmlnaW5hbCB2YWx1ZVxuICAgICAgICAgIGJvdW5kc1toYW5kbGVdID0gb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFZhbHVlID0gYm91bmRzW2hhbmRsZV07XG4gICAgICB9XG4gICAgICAvLyB0aGUgaGFuZGxlIHdhcyBwdXNoZWQgZW5vdWdoIHRvIGNyZWF0ZSB0aGUgbmVlZGVkIGBhbW91bnRgIGdhcFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHVzaEhhbmRsZU9uZVBvaW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaEhhbmRsZU9uZVBvaW50KGJvdW5kcywgaGFuZGxlLCBkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBwb2ludHMgPSB0aGlzLmdldFBvaW50cygpO1xuICAgICAgdmFyIHBvaW50SW5kZXggPSBwb2ludHMuaW5kZXhPZihib3VuZHNbaGFuZGxlXSk7XG4gICAgICB2YXIgbmV4dFBvaW50SW5kZXggPSBwb2ludEluZGV4ICsgZGlyZWN0aW9uO1xuICAgICAgaWYgKG5leHRQb2ludEluZGV4ID49IHBvaW50cy5sZW5ndGggfHwgbmV4dFBvaW50SW5kZXggPCAwKSB7XG4gICAgICAgIC8vIHJlYWNoZWQgdGhlIG1pbmltdW0gb3IgbWF4aW11bSBhdmFpbGFibGUgcG9pbnQsIGNhbid0IHB1c2ggYW55bW9yZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgbmV4dEhhbmRsZSA9IGhhbmRsZSArIGRpcmVjdGlvbjtcbiAgICAgIHZhciBuZXh0VmFsdWUgPSBwb2ludHNbbmV4dFBvaW50SW5kZXhdO1xuICAgICAgdmFyIHRocmVzaG9sZCA9IHRoaXMucHJvcHMucHVzaGFibGU7XG5cbiAgICAgIHZhciBkaWZmVG9OZXh0ID0gZGlyZWN0aW9uICogKGJvdW5kc1tuZXh0SGFuZGxlXSAtIG5leHRWYWx1ZSk7XG4gICAgICBpZiAoIXRoaXMucHVzaEhhbmRsZShib3VuZHMsIG5leHRIYW5kbGUsIGRpcmVjdGlvbiwgdGhyZXNob2xkIC0gZGlmZlRvTmV4dCkpIHtcbiAgICAgICAgLy8gY291bGRuJ3QgcHVzaCBuZXh0IGhhbmRsZSwgc28gd2Ugd29uJ3QgcHVzaCB0aGlzIG9uZSBlaXRoZXJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gcHVzaCB0aGUgaGFuZGxlXG4gICAgICBib3VuZHNbaGFuZGxlXSA9IG5leHRWYWx1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RyaW1BbGlnblZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJpbUFsaWduVmFsdWUodmFsdWUpIHtcbiAgICAgIHZhciBfc3RhdGUyID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBoYW5kbGUgPSBfc3RhdGUyLmhhbmRsZSxcbiAgICAgICAgICBib3VuZHMgPSBfc3RhdGUyLmJvdW5kcztcblxuICAgICAgcmV0dXJuIF90cmltQWxpZ25WYWx1ZSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgIGJvdW5kczogYm91bmRzLFxuICAgICAgICBwcm9wczogdGhpcy5wcm9wc1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBfc3RhdGUzID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBoYW5kbGUgPSBfc3RhdGUzLmhhbmRsZSxcbiAgICAgICAgICBib3VuZHMgPSBfc3RhdGUzLmJvdW5kcztcbiAgICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHM0LnByZWZpeENscyxcbiAgICAgICAgICB2ZXJ0aWNhbCA9IF9wcm9wczQudmVydGljYWwsXG4gICAgICAgICAgaW5jbHVkZWQgPSBfcHJvcHM0LmluY2x1ZGVkLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzNC5kaXNhYmxlZCxcbiAgICAgICAgICBtaW4gPSBfcHJvcHM0Lm1pbixcbiAgICAgICAgICBtYXggPSBfcHJvcHM0Lm1heCxcbiAgICAgICAgICByZXZlcnNlID0gX3Byb3BzNC5yZXZlcnNlLFxuICAgICAgICAgIGhhbmRsZUdlbmVyYXRvciA9IF9wcm9wczQuaGFuZGxlLFxuICAgICAgICAgIHRyYWNrU3R5bGUgPSBfcHJvcHM0LnRyYWNrU3R5bGUsXG4gICAgICAgICAgaGFuZGxlU3R5bGUgPSBfcHJvcHM0LmhhbmRsZVN0eWxlLFxuICAgICAgICAgIHRhYkluZGV4ID0gX3Byb3BzNC50YWJJbmRleDtcblxuXG4gICAgICB2YXIgb2Zmc2V0cyA9IGJvdW5kcy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5jYWxjT2Zmc2V0KHYpO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBoYW5kbGVDbGFzc05hbWUgPSBwcmVmaXhDbHMgKyAnLWhhbmRsZSc7XG4gICAgICB2YXIgaGFuZGxlcyA9IGJvdW5kcy5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgIHZhciBfdGFiSW5kZXggPSB0YWJJbmRleFtpXSB8fCAwO1xuICAgICAgICBpZiAoZGlzYWJsZWQgfHwgdGFiSW5kZXhbaV0gPT09IG51bGwpIHtcbiAgICAgICAgICBfdGFiSW5kZXggPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVHZW5lcmF0b3Ioe1xuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSgoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzTmFtZXMsIGhhbmRsZUNsYXNzTmFtZSwgdHJ1ZSksICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc05hbWVzLCBoYW5kbGVDbGFzc05hbWUgKyAnLScgKyAoaSArIDEpLCB0cnVlKSwgX2NsYXNzTmFtZXMpKSxcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICB2ZXJ0aWNhbDogdmVydGljYWwsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXRzW2ldLFxuICAgICAgICAgIHZhbHVlOiB2LFxuICAgICAgICAgIGRyYWdnaW5nOiBoYW5kbGUgPT09IGksXG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgdGFiSW5kZXg6IF90YWJJbmRleCxcbiAgICAgICAgICBtaW46IG1pbixcbiAgICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgICByZXZlcnNlOiByZXZlcnNlLFxuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBzdHlsZTogaGFuZGxlU3R5bGVbaV0sXG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoaCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5zYXZlSGFuZGxlKGksIGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHRyYWNrcyA9IGJvdW5kcy5zbGljZSgwLCAtMSkubWFwKGZ1bmN0aW9uIChfLCBpbmRleCkge1xuICAgICAgICB2YXIgX2NsYXNzTmFtZXMyO1xuXG4gICAgICAgIHZhciBpID0gaW5kZXggKyAxO1xuICAgICAgICB2YXIgdHJhY2tDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKChfY2xhc3NOYW1lczIgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzTmFtZXMyLCBwcmVmaXhDbHMgKyAnLXRyYWNrJywgdHJ1ZSksICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc05hbWVzMiwgcHJlZml4Q2xzICsgJy10cmFjay0nICsgaSwgdHJ1ZSksIF9jbGFzc05hbWVzMikpO1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX1RyYWNrMlsnZGVmYXVsdCddLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0cmFja0NsYXNzTmFtZSxcbiAgICAgICAgICB2ZXJ0aWNhbDogdmVydGljYWwsXG4gICAgICAgICAgcmV2ZXJzZTogcmV2ZXJzZSxcbiAgICAgICAgICBpbmNsdWRlZDogaW5jbHVkZWQsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXRzW2kgLSAxXSxcbiAgICAgICAgICBsZW5ndGg6IG9mZnNldHNbaV0gLSBvZmZzZXRzW2kgLSAxXSxcbiAgICAgICAgICBzdHlsZTogdHJhY2tTdHlsZVtpbmRleF0sXG4gICAgICAgICAga2V5OiBpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7IHRyYWNrczogdHJhY2tzLCBoYW5kbGVzOiBoYW5kbGVzIH07XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgICBpZiAoJ3ZhbHVlJyBpbiBwcm9wcyB8fCAnbWluJyBpbiBwcm9wcyB8fCAnbWF4JyBpbiBwcm9wcykge1xuICAgICAgICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZSB8fCBzdGF0ZS5ib3VuZHM7XG4gICAgICAgIHZhciBuZXh0Qm91bmRzID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgICAgcmV0dXJuIF90cmltQWxpZ25WYWx1ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdixcbiAgICAgICAgICAgIGhhbmRsZTogaSxcbiAgICAgICAgICAgIGJvdW5kczogc3RhdGUuYm91bmRzLFxuICAgICAgICAgICAgcHJvcHM6IHByb3BzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobmV4dEJvdW5kcy5sZW5ndGggPT09IHN0YXRlLmJvdW5kcy5sZW5ndGggJiYgbmV4dEJvdW5kcy5ldmVyeShmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICAgIHJldHVybiB2ID09PSBzdGF0ZS5ib3VuZHNbaV07XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIHN0YXRlLCB7XG4gICAgICAgICAgYm91bmRzOiBuZXh0Qm91bmRzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBSYW5nZTtcbn0oX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cblJhbmdlLmRpc3BsYXlOYW1lID0gJ1JhbmdlJztcblJhbmdlLnByb3BUeXBlcyA9IHtcbiAgYXV0b0ZvY3VzOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmJvb2wsXG4gIGRlZmF1bHRWYWx1ZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5hcnJheU9mKF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyKSxcbiAgdmFsdWU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYXJyYXlPZihfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlciksXG4gIGNvdW50OiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcixcbiAgcHVzaGFibGU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub25lT2ZUeXBlKFtfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmJvb2wsIF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyXSksXG4gIGFsbG93Q3Jvc3M6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYm9vbCxcbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYm9vbCxcbiAgcmV2ZXJzZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ib29sLFxuICB0YWJJbmRleDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5hcnJheU9mKF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyKSxcbiAgbWluOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcixcbiAgbWF4OiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlclxufTtcblJhbmdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY291bnQ6IDEsXG4gIGFsbG93Q3Jvc3M6IHRydWUsXG4gIHB1c2hhYmxlOiBmYWxzZSxcbiAgdGFiSW5kZXg6IFtdXG59O1xuXG5cbigwLCBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0LnBvbHlmaWxsKShSYW5nZSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9ICgwLCBfY3JlYXRlU2xpZGVyMlsnZGVmYXVsdCddKShSYW5nZSk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBNYXJrcyA9IGZ1bmN0aW9uIE1hcmtzKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgdmVydGljYWwgPSBfcmVmLnZlcnRpY2FsLFxuICAgICAgcmV2ZXJzZSA9IF9yZWYucmV2ZXJzZSxcbiAgICAgIG1hcmtzID0gX3JlZi5tYXJrcyxcbiAgICAgIGluY2x1ZGVkID0gX3JlZi5pbmNsdWRlZCxcbiAgICAgIHVwcGVyQm91bmQgPSBfcmVmLnVwcGVyQm91bmQsXG4gICAgICBsb3dlckJvdW5kID0gX3JlZi5sb3dlckJvdW5kLFxuICAgICAgbWF4ID0gX3JlZi5tYXgsXG4gICAgICBtaW4gPSBfcmVmLm1pbixcbiAgICAgIG9uQ2xpY2tMYWJlbCA9IF9yZWYub25DbGlja0xhYmVsO1xuXG4gIHZhciBtYXJrc0tleXMgPSBPYmplY3Qua2V5cyhtYXJrcyk7XG5cbiAgdmFyIHJhbmdlID0gbWF4IC0gbWluO1xuICB2YXIgZWxlbWVudHMgPSBtYXJrc0tleXMubWFwKHBhcnNlRmxvYXQpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICB2YXIgbWFya1BvaW50ID0gbWFya3NbcG9pbnRdO1xuICAgIHZhciBtYXJrUG9pbnRJc09iamVjdCA9IHR5cGVvZiBtYXJrUG9pbnQgPT09ICdvYmplY3QnICYmICFfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQobWFya1BvaW50KTtcbiAgICB2YXIgbWFya0xhYmVsID0gbWFya1BvaW50SXNPYmplY3QgPyBtYXJrUG9pbnQubGFiZWwgOiBtYXJrUG9pbnQ7XG4gICAgaWYgKCFtYXJrTGFiZWwgJiYgbWFya0xhYmVsICE9PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgaXNBY3RpdmUgPSAhaW5jbHVkZWQgJiYgcG9pbnQgPT09IHVwcGVyQm91bmQgfHwgaW5jbHVkZWQgJiYgcG9pbnQgPD0gdXBwZXJCb3VuZCAmJiBwb2ludCA+PSBsb3dlckJvdW5kO1xuICAgIHZhciBtYXJrQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSgoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzTmFtZXMsIGNsYXNzTmFtZSArICctdGV4dCcsIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NOYW1lcywgY2xhc3NOYW1lICsgJy10ZXh0LWFjdGl2ZScsIGlzQWN0aXZlKSwgX2NsYXNzTmFtZXMpKTtcblxuICAgIHZhciBib3R0b21TdHlsZSA9ICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKHtcbiAgICAgIG1hcmdpbkJvdHRvbTogJy01MCUnXG4gICAgfSwgcmV2ZXJzZSA/ICd0b3AnIDogJ2JvdHRvbScsIChwb2ludCAtIG1pbikgLyByYW5nZSAqIDEwMCArICclJyk7XG5cbiAgICB2YXIgbGVmdFN0eWxlID0gKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXG4gICAgICBtc1RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknXG4gICAgfSwgcmV2ZXJzZSA/ICdyaWdodCcgOiAnbGVmdCcsIHJldmVyc2UgPyAocG9pbnQgLSBtaW4gLyA0KSAvIHJhbmdlICogMTAwICsgJyUnIDogKHBvaW50IC0gbWluKSAvIHJhbmdlICogMTAwICsgJyUnKTtcblxuICAgIHZhciBzdHlsZSA9IHZlcnRpY2FsID8gYm90dG9tU3R5bGUgOiBsZWZ0U3R5bGU7XG4gICAgdmFyIG1hcmtTdHlsZSA9IG1hcmtQb2ludElzT2JqZWN0ID8gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgc3R5bGUsIG1hcmtQb2ludC5zdHlsZSkgOiBzdHlsZTtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogbWFya0NsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IG1hcmtTdHlsZSxcbiAgICAgICAga2V5OiBwb2ludCxcbiAgICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgICByZXR1cm4gb25DbGlja0xhYmVsKGUsIHBvaW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaFN0YXJ0OiBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgICAgIHJldHVybiBvbkNsaWNrTGFiZWwoZSwgcG9pbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWFya0xhYmVsXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcbiAgICBlbGVtZW50c1xuICApO1xufTtcblxuTWFya3MucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nLFxuICB2ZXJ0aWNhbDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ib29sLFxuICByZXZlcnNlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmJvb2wsXG4gIG1hcmtzOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdCxcbiAgaW5jbHVkZWQ6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYm9vbCxcbiAgdXBwZXJCb3VuZDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5udW1iZXIsXG4gIGxvd2VyQm91bmQ6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLFxuICBtYXg6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLFxuICBtaW46IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLFxuICBvbkNsaWNrTGFiZWw6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuY1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTWFya3M7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkyKTtcblxudmFyIF9leHRlbmRzNCA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzNCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgY2FsY1BvaW50cyA9IGZ1bmN0aW9uIGNhbGNQb2ludHModmVydGljYWwsIG1hcmtzLCBkb3RzLCBzdGVwLCBtaW4sIG1heCkge1xuICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKGRvdHMgPyBzdGVwID4gMCA6IHRydWUsICdgU2xpZGVyW3N0ZXBdYCBzaG91bGQgYmUgYSBwb3NpdGl2ZSBudW1iZXIgaW4gb3JkZXIgdG8gbWFrZSBTbGlkZXJbZG90c10gd29yay4nKTtcbiAgdmFyIHBvaW50cyA9IE9iamVjdC5rZXlzKG1hcmtzKS5tYXAocGFyc2VGbG9hdCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG4gIGlmIChkb3RzICYmIHN0ZXApIHtcbiAgICBmb3IgKHZhciBpID0gbWluOyBpIDw9IG1heDsgaSArPSBzdGVwKSB7XG4gICAgICBpZiAocG9pbnRzLmluZGV4T2YoaSkgPT09IC0xKSB7XG4gICAgICAgIHBvaW50cy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcG9pbnRzO1xufTtcblxudmFyIFN0ZXBzID0gZnVuY3Rpb24gU3RlcHMoX3JlZikge1xuICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICB2ZXJ0aWNhbCA9IF9yZWYudmVydGljYWwsXG4gICAgICByZXZlcnNlID0gX3JlZi5yZXZlcnNlLFxuICAgICAgbWFya3MgPSBfcmVmLm1hcmtzLFxuICAgICAgZG90cyA9IF9yZWYuZG90cyxcbiAgICAgIHN0ZXAgPSBfcmVmLnN0ZXAsXG4gICAgICBpbmNsdWRlZCA9IF9yZWYuaW5jbHVkZWQsXG4gICAgICBsb3dlckJvdW5kID0gX3JlZi5sb3dlckJvdW5kLFxuICAgICAgdXBwZXJCb3VuZCA9IF9yZWYudXBwZXJCb3VuZCxcbiAgICAgIG1heCA9IF9yZWYubWF4LFxuICAgICAgbWluID0gX3JlZi5taW4sXG4gICAgICBkb3RTdHlsZSA9IF9yZWYuZG90U3R5bGUsXG4gICAgICBhY3RpdmVEb3RTdHlsZSA9IF9yZWYuYWN0aXZlRG90U3R5bGU7XG5cbiAgdmFyIHJhbmdlID0gbWF4IC0gbWluO1xuICB2YXIgZWxlbWVudHMgPSBjYWxjUG9pbnRzKHZlcnRpY2FsLCBtYXJrcywgZG90cywgc3RlcCwgbWluLCBtYXgpLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICB2YXIgb2Zmc2V0ID0gTWF0aC5hYnMocG9pbnQgLSBtaW4pIC8gcmFuZ2UgKiAxMDAgKyAnJSc7XG5cbiAgICB2YXIgaXNBY3RpdmVkID0gIWluY2x1ZGVkICYmIHBvaW50ID09PSB1cHBlckJvdW5kIHx8IGluY2x1ZGVkICYmIHBvaW50IDw9IHVwcGVyQm91bmQgJiYgcG9pbnQgPj0gbG93ZXJCb3VuZDtcbiAgICB2YXIgc3R5bGUgPSB2ZXJ0aWNhbCA/ICgwLCBfZXh0ZW5kczVbJ2RlZmF1bHQnXSkoe30sIGRvdFN0eWxlLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKSh7fSwgcmV2ZXJzZSA/ICd0b3AnIDogJ2JvdHRvbScsIG9mZnNldCkpIDogKDAsIF9leHRlbmRzNVsnZGVmYXVsdCddKSh7fSwgZG90U3R5bGUsICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKHt9LCByZXZlcnNlID8gJ3JpZ2h0JyA6ICdsZWZ0Jywgb2Zmc2V0KSk7XG4gICAgaWYgKGlzQWN0aXZlZCkge1xuICAgICAgc3R5bGUgPSAoMCwgX2V4dGVuZHM1WydkZWZhdWx0J10pKHt9LCBzdHlsZSwgYWN0aXZlRG90U3R5bGUpO1xuICAgIH1cblxuICAgIHZhciBwb2ludENsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWRvdCcsIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1kb3QtYWN0aXZlJywgaXNBY3RpdmVkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctZG90LXJldmVyc2UnLCByZXZlcnNlKSwgX2NsYXNzTmFtZXMpKTtcblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBwb2ludENsYXNzTmFtZSwgc3R5bGU6IHN0eWxlLCBrZXk6IHBvaW50IH0pO1xuICB9KTtcblxuICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctc3RlcCcgfSxcbiAgICBlbGVtZW50c1xuICApO1xufTtcblxuU3RlcHMucHJvcFR5cGVzID0ge1xuICBwcmVmaXhDbHM6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nLFxuICBhY3RpdmVEb3RTdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QsXG4gIGRvdFN0eWxlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdCxcbiAgbWluOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcixcbiAgbWF4OiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcixcbiAgdXBwZXJCb3VuZDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5udW1iZXIsXG4gIGxvd2VyQm91bmQ6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLFxuICBpbmNsdWRlZDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ib29sLFxuICBkb3RzOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmJvb2wsXG4gIHN0ZXA6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLFxuICBtYXJrczogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QsXG4gIHZlcnRpY2FsOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmJvb2wsXG4gIHJldmVyc2U6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYm9vbFxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU3RlcHM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgVHJhY2sgPSBmdW5jdGlvbiBUcmFjayhwcm9wcykge1xuICB2YXIgX3JlZiwgX3JlZjI7XG5cbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGluY2x1ZGVkID0gcHJvcHMuaW5jbHVkZWQsXG4gICAgICB2ZXJ0aWNhbCA9IHByb3BzLnZlcnRpY2FsLFxuICAgICAgb2Zmc2V0ID0gcHJvcHMub2Zmc2V0LFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIHJldmVyc2UgPSBwcm9wcy5yZXZlcnNlO1xuXG4gIHZhciBwb3NpdG9uU3R5bGUgPSB2ZXJ0aWNhbCA/IChfcmVmID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9yZWYsIHJldmVyc2UgPyAndG9wJyA6ICdib3R0b20nLCBvZmZzZXQgKyAnJScpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfcmVmLCByZXZlcnNlID8gJ2JvdHRvbScgOiAndG9wJywgJ2F1dG8nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX3JlZiwgJ2hlaWdodCcsIGxlbmd0aCArICclJyksIF9yZWYpIDogKF9yZWYyID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9yZWYyLCByZXZlcnNlID8gJ3JpZ2h0JyA6ICdsZWZ0Jywgb2Zmc2V0ICsgJyUnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX3JlZjIsIHJldmVyc2UgPyAnbGVmdCcgOiAncmlnaHQnLCAnYXV0bycpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfcmVmMiwgJ3dpZHRoJywgbGVuZ3RoICsgJyUnKSwgX3JlZjIpO1xuXG4gIHZhciBlbFN0eWxlID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgc3R5bGUsIHBvc2l0b25TdHlsZSk7XG4gIHJldHVybiBpbmNsdWRlZCA/IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogZWxTdHlsZSB9KSA6IG51bGw7XG59OyAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5leHBvcnRzWydkZWZhdWx0J10gPSBUcmFjaztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eTIpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfZ2V0MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQnKTtcblxudmFyIF9nZXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Mik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlU2xpZGVyO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2FkZEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCdyYy11dGlsL2xpYi9Eb20vYWRkRXZlbnRMaXN0ZW5lcicpO1xuXG52YXIgX2FkZEV2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkRXZlbnRMaXN0ZW5lcik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9TdGVwcyA9IHJlcXVpcmUoJy4vU3RlcHMnKTtcblxudmFyIF9TdGVwczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdGVwcyk7XG5cbnZhciBfTWFya3MgPSByZXF1aXJlKCcuL01hcmtzJyk7XG5cbnZhciBfTWFya3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWFya3MpO1xuXG52YXIgX0hhbmRsZSA9IHJlcXVpcmUoJy4uL0hhbmRsZScpO1xuXG52YXIgX0hhbmRsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9IYW5kbGUpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIHV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialsnZGVmYXVsdCddID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gY3JlYXRlU2xpZGVyKENvbXBvbmVudCkge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICgwLCBfaW5oZXJpdHMzWydkZWZhdWx0J10pKENvbXBvbmVudEVuaGFuY2VyLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENvbXBvbmVudEVuaGFuY2VyKHByb3BzKSB7XG4gICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrM1snZGVmYXVsdCddKSh0aGlzLCBDb21wb25lbnRFbmhhbmNlcik7XG5cbiAgICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjNbJ2RlZmF1bHQnXSkodGhpcywgKENvbXBvbmVudEVuaGFuY2VyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29tcG9uZW50RW5oYW5jZXIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgIF90aGlzLm9uTW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlzVmVydGljYWwgPSBfdGhpcy5wcm9wcy52ZXJ0aWNhbDtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdXRpbHMuZ2V0TW91c2VQb3NpdGlvbihpc1ZlcnRpY2FsLCBlKTtcbiAgICAgICAgaWYgKCF1dGlscy5pc0V2ZW50RnJvbUhhbmRsZShlLCBfdGhpcy5oYW5kbGVzUmVmcykpIHtcbiAgICAgICAgICBfdGhpcy5kcmFnT2Zmc2V0ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaGFuZGxlUG9zaXRpb24gPSB1dGlscy5nZXRIYW5kbGVDZW50ZXJQb3NpdGlvbihpc1ZlcnRpY2FsLCBlLnRhcmdldCk7XG4gICAgICAgICAgX3RoaXMuZHJhZ09mZnNldCA9IHBvc2l0aW9uIC0gaGFuZGxlUG9zaXRpb247XG4gICAgICAgICAgcG9zaXRpb24gPSBoYW5kbGVQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5yZW1vdmVEb2N1bWVudEV2ZW50cygpO1xuICAgICAgICBfdGhpcy5vblN0YXJ0KHBvc2l0aW9uKTtcbiAgICAgICAgX3RoaXMuYWRkRG9jdW1lbnRNb3VzZUV2ZW50cygpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzTm90VG91Y2hFdmVudChlKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBpc1ZlcnRpY2FsID0gX3RoaXMucHJvcHMudmVydGljYWw7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHV0aWxzLmdldFRvdWNoUG9zaXRpb24oaXNWZXJ0aWNhbCwgZSk7XG4gICAgICAgIGlmICghdXRpbHMuaXNFdmVudEZyb21IYW5kbGUoZSwgX3RoaXMuaGFuZGxlc1JlZnMpKSB7XG4gICAgICAgICAgX3RoaXMuZHJhZ09mZnNldCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGhhbmRsZVBvc2l0aW9uID0gdXRpbHMuZ2V0SGFuZGxlQ2VudGVyUG9zaXRpb24oaXNWZXJ0aWNhbCwgZS50YXJnZXQpO1xuICAgICAgICAgIF90aGlzLmRyYWdPZmZzZXQgPSBwb3NpdGlvbiAtIGhhbmRsZVBvc2l0aW9uO1xuICAgICAgICAgIHBvc2l0aW9uID0gaGFuZGxlUG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMub25TdGFydChwb3NpdGlvbik7XG4gICAgICAgIF90aGlzLmFkZERvY3VtZW50VG91Y2hFdmVudHMoKTtcbiAgICAgICAgdXRpbHMucGF1c2VFdmVudChlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG9uRm9jdXMgPSBfdGhpcyRwcm9wcy5vbkZvY3VzLFxuICAgICAgICAgICAgdmVydGljYWwgPSBfdGhpcyRwcm9wcy52ZXJ0aWNhbDtcblxuICAgICAgICBpZiAodXRpbHMuaXNFdmVudEZyb21IYW5kbGUoZSwgX3RoaXMuaGFuZGxlc1JlZnMpKSB7XG4gICAgICAgICAgdmFyIGhhbmRsZVBvc2l0aW9uID0gdXRpbHMuZ2V0SGFuZGxlQ2VudGVyUG9zaXRpb24odmVydGljYWwsIGUudGFyZ2V0KTtcbiAgICAgICAgICBfdGhpcy5kcmFnT2Zmc2V0ID0gMDtcbiAgICAgICAgICBfdGhpcy5vblN0YXJ0KGhhbmRsZVBvc2l0aW9uKTtcbiAgICAgICAgICB1dGlscy5wYXVzZUV2ZW50KGUpO1xuICAgICAgICAgIGlmIChvbkZvY3VzKSB7XG4gICAgICAgICAgICBvbkZvY3VzKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25CbHVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIG9uQmx1ciA9IF90aGlzLnByb3BzLm9uQmx1cjtcblxuICAgICAgICBfdGhpcy5vbkVuZCgpO1xuICAgICAgICBpZiAob25CbHVyKSB7XG4gICAgICAgICAgb25CbHVyKGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5oYW5kbGVzUmVmc1tfdGhpcy5wcmV2TW92ZWRIYW5kbGVJbmRleF0pIHtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVzUmVmc1tfdGhpcy5wcmV2TW92ZWRIYW5kbGVJbmRleF0uY2xpY2tGb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghX3RoaXMuc2xpZGVyUmVmKSB7XG4gICAgICAgICAgX3RoaXMub25FbmQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdXRpbHMuZ2V0TW91c2VQb3NpdGlvbihfdGhpcy5wcm9wcy52ZXJ0aWNhbCwgZSk7XG4gICAgICAgIF90aGlzLm9uTW92ZShlLCBwb3NpdGlvbiAtIF90aGlzLmRyYWdPZmZzZXQpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodXRpbHMuaXNOb3RUb3VjaEV2ZW50KGUpIHx8ICFfdGhpcy5zbGlkZXJSZWYpIHtcbiAgICAgICAgICBfdGhpcy5vbkVuZCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHV0aWxzLmdldFRvdWNoUG9zaXRpb24oX3RoaXMucHJvcHMudmVydGljYWwsIGUpO1xuICAgICAgICBfdGhpcy5vbk1vdmUoZSwgcG9zaXRpb24gLSBfdGhpcy5kcmFnT2Zmc2V0KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChfdGhpcy5zbGlkZXJSZWYgJiYgdXRpbHMuaXNFdmVudEZyb21IYW5kbGUoZSwgX3RoaXMuaGFuZGxlc1JlZnMpKSB7XG4gICAgICAgICAgX3RoaXMub25LZXlib2FyZChlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25DbGlja01hcmtMYWJlbCA9IGZ1bmN0aW9uIChlLCB2YWx1ZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBfdGhpcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFsdWUgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5vbkVuZCh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zYXZlU2xpZGVyID0gZnVuY3Rpb24gKHNsaWRlcikge1xuICAgICAgICBfdGhpcy5zbGlkZXJSZWYgPSBzbGlkZXI7XG4gICAgICB9O1xuXG4gICAgICB2YXIgc3RlcCA9IHByb3BzLnN0ZXAsXG4gICAgICAgICAgbWF4ID0gcHJvcHMubWF4LFxuICAgICAgICAgIG1pbiA9IHByb3BzLm1pbjtcblxuICAgICAgdmFyIGlzUG9pbnREaWZmRXZlbiA9IGlzRmluaXRlKG1heCAtIG1pbikgPyAobWF4IC0gbWluKSAlIHN0ZXAgPT09IDAgOiB0cnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKHN0ZXAgJiYgTWF0aC5mbG9vcihzdGVwKSA9PT0gc3RlcCA/IGlzUG9pbnREaWZmRXZlbiA6IHRydWUsICdTbGlkZXJbbWF4XSAtIFNsaWRlclttaW5dICglcykgc2hvdWxkIGJlIGEgbXVsdGlwbGUgb2YgU2xpZGVyW3N0ZXBdICglcyknLCBtYXggLSBtaW4sIHN0ZXApO1xuICAgICAgX3RoaXMuaGFuZGxlc1JlZnMgPSB7fTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAoMCwgX2NyZWF0ZUNsYXNzM1snZGVmYXVsdCddKShDb21wb25lbnRFbmhhbmNlciwgW3tcbiAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gU25hcHNob3QgdGVzdGluZyBjYW5ub3QgaGFuZGxlIHJlZnMsIHNvIGJlIHN1cmUgdG8gbnVsbC1jaGVjayB0aGlzLlxuICAgICAgICB0aGlzLmRvY3VtZW50ID0gdGhpcy5zbGlkZXJSZWYgJiYgdGhpcy5zbGlkZXJSZWYub3duZXJEb2N1bWVudDtcblxuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGF1dG9Gb2N1cyA9IF9wcm9wcy5hdXRvRm9jdXMsXG4gICAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZDtcblxuICAgICAgICBpZiAoYXV0b0ZvY3VzICYmICFkaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKCgwLCBfZ2V0M1snZGVmYXVsdCddKShDb21wb25lbnRFbmhhbmNlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb21wb25lbnRFbmhhbmNlci5wcm90b3R5cGUpLCAnY29tcG9uZW50V2lsbFVubW91bnQnLCB0aGlzKSkgKDAsIF9nZXQzWydkZWZhdWx0J10pKENvbXBvbmVudEVuaGFuY2VyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbXBvbmVudEVuaGFuY2VyLnByb3RvdHlwZSksICdjb21wb25lbnRXaWxsVW5tb3VudCcsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRFdmVudHMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRTbGlkZXJTdGFydCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2xpZGVyU3RhcnQoKSB7XG4gICAgICAgIHZhciBzbGlkZXIgPSB0aGlzLnNsaWRlclJlZjtcbiAgICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgdmVydGljYWwgPSBfcHJvcHMyLnZlcnRpY2FsLFxuICAgICAgICAgICAgcmV2ZXJzZSA9IF9wcm9wczIucmV2ZXJzZTtcblxuICAgICAgICB2YXIgcmVjdCA9IHNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgcmV0dXJuIHJldmVyc2UgPyByZWN0LmJvdHRvbSA6IHJlY3QudG9wO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aW5kb3cucGFnZVhPZmZzZXQgKyAocmV2ZXJzZSA/IHJlY3QucmlnaHQgOiByZWN0LmxlZnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldFNsaWRlckxlbmd0aCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2xpZGVyTGVuZ3RoKCkge1xuICAgICAgICB2YXIgc2xpZGVyID0gdGhpcy5zbGlkZXJSZWY7XG4gICAgICAgIGlmICghc2xpZGVyKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29vcmRzID0gc2xpZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52ZXJ0aWNhbCA/IGNvb3Jkcy5oZWlnaHQgOiBjb29yZHMud2lkdGg7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnYWRkRG9jdW1lbnRUb3VjaEV2ZW50cycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRG9jdW1lbnRUb3VjaEV2ZW50cygpIHtcbiAgICAgICAgLy8ganVzdCB3b3JrIGZvciBDaHJvbWUgaU9TIFNhZmFyaSBhbmQgQW5kcm9pZCBCcm93c2VyXG4gICAgICAgIHRoaXMub25Ub3VjaE1vdmVMaXN0ZW5lciA9ICgwLCBfYWRkRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXSkodGhpcy5kb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUpO1xuICAgICAgICB0aGlzLm9uVG91Y2hVcExpc3RlbmVyID0gKDAsIF9hZGRFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddKSh0aGlzLmRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLm9uRW5kKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdhZGREb2N1bWVudE1vdXNlRXZlbnRzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREb2N1bWVudE1vdXNlRXZlbnRzKCkge1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlTGlzdGVuZXIgPSAoMCwgX2FkZEV2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10pKHRoaXMuZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXBMaXN0ZW5lciA9ICgwLCBfYWRkRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXSkodGhpcy5kb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLm9uRW5kKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW1vdmVEb2N1bWVudEV2ZW50cycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuICAgICAgICB0aGlzLm9uVG91Y2hNb3ZlTGlzdGVuZXIgJiYgdGhpcy5vblRvdWNoTW92ZUxpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLm9uVG91Y2hVcExpc3RlbmVyICYmIHRoaXMub25Ub3VjaFVwTGlzdGVuZXIucmVtb3ZlKCk7XG5cbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZUxpc3RlbmVyICYmIHRoaXMub25Nb3VzZU1vdmVMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXBMaXN0ZW5lciAmJiB0aGlzLm9uTW91c2VVcExpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2ZvY3VzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVzUmVmc1swXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnYmx1cicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXModGhpcy5oYW5kbGVzUmVmcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMyLmhhbmRsZXNSZWZzW2tleV0gJiYgX3RoaXMyLmhhbmRsZXNSZWZzW2tleV0uYmx1cikge1xuICAgICAgICAgICAgICBfdGhpczIuaGFuZGxlc1JlZnNba2V5XS5ibHVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjYWxjVmFsdWUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGNWYWx1ZShvZmZzZXQpIHtcbiAgICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgdmVydGljYWwgPSBfcHJvcHMzLnZlcnRpY2FsLFxuICAgICAgICAgICAgbWluID0gX3Byb3BzMy5taW4sXG4gICAgICAgICAgICBtYXggPSBfcHJvcHMzLm1heDtcblxuICAgICAgICB2YXIgcmF0aW8gPSBNYXRoLmFicyhNYXRoLm1heChvZmZzZXQsIDApIC8gdGhpcy5nZXRTbGlkZXJMZW5ndGgoKSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHZlcnRpY2FsID8gKDEgLSByYXRpbykgKiAobWF4IC0gbWluKSArIG1pbiA6IHJhdGlvICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjYWxjVmFsdWVCeVBvcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY1ZhbHVlQnlQb3MocG9zaXRpb24pIHtcbiAgICAgICAgdmFyIHNpZ24gPSB0aGlzLnByb3BzLnJldmVyc2UgPyAtMSA6ICsxO1xuICAgICAgICB2YXIgcGl4ZWxPZmZzZXQgPSBzaWduICogKHBvc2l0aW9uIC0gdGhpcy5nZXRTbGlkZXJTdGFydCgpKTtcbiAgICAgICAgdmFyIG5leHRWYWx1ZSA9IHRoaXMudHJpbUFsaWduVmFsdWUodGhpcy5jYWxjVmFsdWUocGl4ZWxPZmZzZXQpKTtcbiAgICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjYWxjT2Zmc2V0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjT2Zmc2V0KHZhbHVlKSB7XG4gICAgICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG1pbiA9IF9wcm9wczQubWluLFxuICAgICAgICAgICAgbWF4ID0gX3Byb3BzNC5tYXg7XG5cbiAgICAgICAgdmFyIHJhdGlvID0gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pO1xuICAgICAgICByZXR1cm4gcmF0aW8gKiAxMDA7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2F2ZUhhbmRsZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2F2ZUhhbmRsZShpbmRleCwgaGFuZGxlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlc1JlZnNbaW5kZXhdID0gaGFuZGxlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgdmFyIF9wcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzNS5wcmVmaXhDbHMsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHM1LmNsYXNzTmFtZSxcbiAgICAgICAgICAgIG1hcmtzID0gX3Byb3BzNS5tYXJrcyxcbiAgICAgICAgICAgIGRvdHMgPSBfcHJvcHM1LmRvdHMsXG4gICAgICAgICAgICBzdGVwID0gX3Byb3BzNS5zdGVwLFxuICAgICAgICAgICAgaW5jbHVkZWQgPSBfcHJvcHM1LmluY2x1ZGVkLFxuICAgICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHM1LmRpc2FibGVkLFxuICAgICAgICAgICAgdmVydGljYWwgPSBfcHJvcHM1LnZlcnRpY2FsLFxuICAgICAgICAgICAgcmV2ZXJzZSA9IF9wcm9wczUucmV2ZXJzZSxcbiAgICAgICAgICAgIG1pbiA9IF9wcm9wczUubWluLFxuICAgICAgICAgICAgbWF4ID0gX3Byb3BzNS5tYXgsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczUuY2hpbGRyZW4sXG4gICAgICAgICAgICBtYXhpbXVtVHJhY2tTdHlsZSA9IF9wcm9wczUubWF4aW11bVRyYWNrU3R5bGUsXG4gICAgICAgICAgICBzdHlsZSA9IF9wcm9wczUuc3R5bGUsXG4gICAgICAgICAgICByYWlsU3R5bGUgPSBfcHJvcHM1LnJhaWxTdHlsZSxcbiAgICAgICAgICAgIGRvdFN0eWxlID0gX3Byb3BzNS5kb3RTdHlsZSxcbiAgICAgICAgICAgIGFjdGl2ZURvdFN0eWxlID0gX3Byb3BzNS5hY3RpdmVEb3RTdHlsZTtcblxuICAgICAgICB2YXIgX2dldCRjYWxsID0gKDAsIF9nZXQzWydkZWZhdWx0J10pKENvbXBvbmVudEVuaGFuY2VyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbXBvbmVudEVuaGFuY2VyLnByb3RvdHlwZSksICdyZW5kZXInLCB0aGlzKS5jYWxsKHRoaXMpLFxuICAgICAgICAgICAgdHJhY2tzID0gX2dldCRjYWxsLnRyYWNrcyxcbiAgICAgICAgICAgIGhhbmRsZXMgPSBfZ2V0JGNhbGwuaGFuZGxlcztcblxuICAgICAgICB2YXIgc2xpZGVyQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy13aXRoLW1hcmtzJywgT2JqZWN0LmtleXMobWFya3MpLmxlbmd0aCksICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWRpc2FibGVkJywgZGlzYWJsZWQpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy12ZXJ0aWNhbCcsIHZlcnRpY2FsKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzTmFtZXMsIGNsYXNzTmFtZSwgY2xhc3NOYW1lKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogdGhpcy5zYXZlU2xpZGVyLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBzbGlkZXJDbGFzc05hbWUsXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IGRpc2FibGVkID8gbm9vcCA6IHRoaXMub25Ub3VjaFN0YXJ0LFxuICAgICAgICAgICAgb25Nb3VzZURvd246IGRpc2FibGVkID8gbm9vcCA6IHRoaXMub25Nb3VzZURvd24sXG4gICAgICAgICAgICBvbk1vdXNlVXA6IGRpc2FibGVkID8gbm9vcCA6IHRoaXMub25Nb3VzZVVwLFxuICAgICAgICAgICAgb25LZXlEb3duOiBkaXNhYmxlZCA/IG5vb3AgOiB0aGlzLm9uS2V5RG93bixcbiAgICAgICAgICAgIG9uRm9jdXM6IGRpc2FibGVkID8gbm9vcCA6IHRoaXMub25Gb2N1cyxcbiAgICAgICAgICAgIG9uQmx1cjogZGlzYWJsZWQgPyBub29wIDogdGhpcy5vbkJsdXIsXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctcmFpbCcsXG4gICAgICAgICAgICBzdHlsZTogKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgbWF4aW11bVRyYWNrU3R5bGUsIHJhaWxTdHlsZSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0cmFja3MsXG4gICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX1N0ZXBzMlsnZGVmYXVsdCddLCB7XG4gICAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICAgIHZlcnRpY2FsOiB2ZXJ0aWNhbCxcbiAgICAgICAgICAgIHJldmVyc2U6IHJldmVyc2UsXG4gICAgICAgICAgICBtYXJrczogbWFya3MsXG4gICAgICAgICAgICBkb3RzOiBkb3RzLFxuICAgICAgICAgICAgc3RlcDogc3RlcCxcbiAgICAgICAgICAgIGluY2x1ZGVkOiBpbmNsdWRlZCxcbiAgICAgICAgICAgIGxvd2VyQm91bmQ6IHRoaXMuZ2V0TG93ZXJCb3VuZCgpLFxuICAgICAgICAgICAgdXBwZXJCb3VuZDogdGhpcy5nZXRVcHBlckJvdW5kKCksXG4gICAgICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgICAgZG90U3R5bGU6IGRvdFN0eWxlLFxuICAgICAgICAgICAgYWN0aXZlRG90U3R5bGU6IGFjdGl2ZURvdFN0eWxlXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaGFuZGxlcyxcbiAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfTWFya3MyWydkZWZhdWx0J10sIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1tYXJrJyxcbiAgICAgICAgICAgIG9uQ2xpY2tMYWJlbDogZGlzYWJsZWQgPyBub29wIDogdGhpcy5vbkNsaWNrTWFya0xhYmVsLFxuICAgICAgICAgICAgdmVydGljYWw6IHZlcnRpY2FsLFxuICAgICAgICAgICAgbWFya3M6IG1hcmtzLFxuICAgICAgICAgICAgaW5jbHVkZWQ6IGluY2x1ZGVkLFxuICAgICAgICAgICAgbG93ZXJCb3VuZDogdGhpcy5nZXRMb3dlckJvdW5kKCksXG4gICAgICAgICAgICB1cHBlckJvdW5kOiB0aGlzLmdldFVwcGVyQm91bmQoKSxcbiAgICAgICAgICAgIG1heDogbWF4LFxuICAgICAgICAgICAgbWluOiBtaW4sXG4gICAgICAgICAgICByZXZlcnNlOiByZXZlcnNlXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIENvbXBvbmVudEVuaGFuY2VyO1xuICB9KENvbXBvbmVudCksIF9jbGFzcy5kaXNwbGF5TmFtZSA9ICdDb21wb25lbnRFbmhhbmNlcignICsgQ29tcG9uZW50LmRpc3BsYXlOYW1lICsgJyknLCBfY2xhc3MucHJvcFR5cGVzID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgQ29tcG9uZW50LnByb3BUeXBlcywge1xuICAgIG1pbjogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5udW1iZXIsXG4gICAgbWF4OiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcixcbiAgICBzdGVwOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcixcbiAgICBtYXJrczogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QsXG4gICAgaW5jbHVkZWQ6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYm9vbCxcbiAgICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nLFxuICAgIHByZWZpeENsczogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYm9vbCxcbiAgICBjaGlsZHJlbjogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5hbnksXG4gICAgb25CZWZvcmVDaGFuZ2U6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuYyxcbiAgICBvbkNoYW5nZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5mdW5jLFxuICAgIG9uQWZ0ZXJDaGFuZ2U6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuYyxcbiAgICBoYW5kbGU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuYyxcbiAgICBkb3RzOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmJvb2wsXG4gICAgdmVydGljYWw6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYm9vbCxcbiAgICBzdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QsXG4gICAgcmV2ZXJzZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ib29sLFxuICAgIG1pbmltdW1UcmFja1N0eWxlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdCwgLy8ganVzdCBmb3IgY29tcGF0aWJpbGl0eSwgd2lsbCBiZSBkZXBlcmVjYXRlXG4gICAgbWF4aW11bVRyYWNrU3R5bGU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0LCAvLyBqdXN0IGZvciBjb21wYXRpYmlsaXR5LCB3aWxsIGJlIGRlcGVyZWNhdGVcbiAgICBoYW5kbGVTdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vbmVPZlR5cGUoW19wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0LCBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmFycmF5T2YoX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QpXSksXG4gICAgdHJhY2tTdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vbmVPZlR5cGUoW19wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0LCBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmFycmF5T2YoX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QpXSksXG4gICAgcmFpbFN0eWxlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdCxcbiAgICBkb3RTdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QsXG4gICAgYWN0aXZlRG90U3R5bGU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0LFxuICAgIGF1dG9Gb2N1czogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ib29sLFxuICAgIG9uRm9jdXM6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuYyxcbiAgICBvbkJsdXI6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuY1xuICB9KSwgX2NsYXNzLmRlZmF1bHRQcm9wcyA9ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIENvbXBvbmVudC5kZWZhdWx0UHJvcHMsIHtcbiAgICBwcmVmaXhDbHM6ICdyYy1zbGlkZXInLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHN0ZXA6IDEsXG4gICAgbWFya3M6IHt9LFxuICAgIGhhbmRsZTogZnVuY3Rpb24gaGFuZGxlKF9yZWYpIHtcbiAgICAgIHZhciBpbmRleCA9IF9yZWYuaW5kZXgsXG4gICAgICAgICAgcmVzdFByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczNbJ2RlZmF1bHQnXSkoX3JlZiwgWydpbmRleCddKTtcblxuICAgICAgZGVsZXRlIHJlc3RQcm9wcy5kcmFnZ2luZztcbiAgICAgIGlmIChyZXN0UHJvcHMudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfSGFuZGxlMlsnZGVmYXVsdCddLCAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCByZXN0UHJvcHMsIHsga2V5OiBpbmRleCB9KSk7XG4gICAgfSxcblxuICAgIG9uQmVmb3JlQ2hhbmdlOiBub29wLFxuICAgIG9uQ2hhbmdlOiBub29wLFxuICAgIG9uQWZ0ZXJDaGFuZ2U6IG5vb3AsXG4gICAgaW5jbHVkZWQ6IHRydWUsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICByZXZlcnNlOiBmYWxzZSxcbiAgICB0cmFja1N0eWxlOiBbe31dLFxuICAgIGhhbmRsZVN0eWxlOiBbe31dLFxuICAgIHJhaWxTdHlsZToge30sXG4gICAgZG90U3R5bGU6IHt9LFxuICAgIGFjdGl2ZURvdFN0eWxlOiB7fVxuICB9KSwgX3RlbXA7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5Jyk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9Db25zdW1hYmxlQXJyYXkyKTtcblxuZXhwb3J0cy5pc0V2ZW50RnJvbUhhbmRsZSA9IGlzRXZlbnRGcm9tSGFuZGxlO1xuZXhwb3J0cy5pc1ZhbHVlT3V0T2ZSYW5nZSA9IGlzVmFsdWVPdXRPZlJhbmdlO1xuZXhwb3J0cy5pc05vdFRvdWNoRXZlbnQgPSBpc05vdFRvdWNoRXZlbnQ7XG5leHBvcnRzLmdldENsb3Nlc3RQb2ludCA9IGdldENsb3Nlc3RQb2ludDtcbmV4cG9ydHMuZ2V0UHJlY2lzaW9uID0gZ2V0UHJlY2lzaW9uO1xuZXhwb3J0cy5nZXRNb3VzZVBvc2l0aW9uID0gZ2V0TW91c2VQb3NpdGlvbjtcbmV4cG9ydHMuZ2V0VG91Y2hQb3NpdGlvbiA9IGdldFRvdWNoUG9zaXRpb247XG5leHBvcnRzLmdldEhhbmRsZUNlbnRlclBvc2l0aW9uID0gZ2V0SGFuZGxlQ2VudGVyUG9zaXRpb247XG5leHBvcnRzLmVuc3VyZVZhbHVlSW5SYW5nZSA9IGVuc3VyZVZhbHVlSW5SYW5nZTtcbmV4cG9ydHMuZW5zdXJlVmFsdWVQcmVjaXNpb24gPSBlbnN1cmVWYWx1ZVByZWNpc2lvbjtcbmV4cG9ydHMucGF1c2VFdmVudCA9IHBhdXNlRXZlbnQ7XG5leHBvcnRzLmNhbGN1bGF0ZU5leHRWYWx1ZSA9IGNhbGN1bGF0ZU5leHRWYWx1ZTtcbmV4cG9ydHMuZ2V0S2V5Ym9hcmRWYWx1ZU11dGF0b3IgPSBnZXRLZXlib2FyZFZhbHVlTXV0YXRvcjtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX0tleUNvZGUgPSByZXF1aXJlKCdyYy11dGlsL2xpYi9LZXlDb2RlJyk7XG5cbnZhciBfS2V5Q29kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9LZXlDb2RlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0V2ZW50RnJvbUhhbmRsZShlLCBoYW5kbGVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGhhbmRsZXMpLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGUudGFyZ2V0ID09PSAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKShoYW5kbGVzW2tleV0pO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbHVlT3V0T2ZSYW5nZSh2YWx1ZSwgX3JlZikge1xuICB2YXIgbWluID0gX3JlZi5taW4sXG4gICAgICBtYXggPSBfcmVmLm1heDtcblxuICByZXR1cm4gdmFsdWUgPCBtaW4gfHwgdmFsdWUgPiBtYXg7XG59XG5cbmZ1bmN0aW9uIGlzTm90VG91Y2hFdmVudChlKSB7XG4gIHJldHVybiBlLnRvdWNoZXMubGVuZ3RoID4gMSB8fCBlLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3RvdWNoZW5kJyAmJiBlLnRvdWNoZXMubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xvc2VzdFBvaW50KHZhbCwgX3JlZjIpIHtcbiAgdmFyIG1hcmtzID0gX3JlZjIubWFya3MsXG4gICAgICBzdGVwID0gX3JlZjIuc3RlcCxcbiAgICAgIG1pbiA9IF9yZWYyLm1pbixcbiAgICAgIG1heCA9IF9yZWYyLm1heDtcblxuICB2YXIgcG9pbnRzID0gT2JqZWN0LmtleXMobWFya3MpLm1hcChwYXJzZUZsb2F0KTtcbiAgaWYgKHN0ZXAgIT09IG51bGwpIHtcbiAgICB2YXIgbWF4U3RlcHMgPSBNYXRoLmZsb29yKChtYXggLSBtaW4pIC8gc3RlcCk7XG4gICAgdmFyIHN0ZXBzID0gTWF0aC5taW4oKHZhbCAtIG1pbikgLyBzdGVwLCBtYXhTdGVwcyk7XG4gICAgdmFyIGNsb3Nlc3RTdGVwID0gTWF0aC5yb3VuZChzdGVwcykgKiBzdGVwICsgbWluO1xuICAgIHBvaW50cy5wdXNoKGNsb3Nlc3RTdGVwKTtcbiAgfVxuICB2YXIgZGlmZnMgPSBwb2ludHMubWFwKGZ1bmN0aW9uIChwb2ludCkge1xuICAgIHJldHVybiBNYXRoLmFicyh2YWwgLSBwb2ludCk7XG4gIH0pO1xuICByZXR1cm4gcG9pbnRzW2RpZmZzLmluZGV4T2YoTWF0aC5taW4uYXBwbHkoTWF0aCwgKDAsIF90b0NvbnN1bWFibGVBcnJheTNbJ2RlZmF1bHQnXSkoZGlmZnMpKSldO1xufVxuXG5mdW5jdGlvbiBnZXRQcmVjaXNpb24oc3RlcCkge1xuICB2YXIgc3RlcFN0cmluZyA9IHN0ZXAudG9TdHJpbmcoKTtcbiAgdmFyIHByZWNpc2lvbiA9IDA7XG4gIGlmIChzdGVwU3RyaW5nLmluZGV4T2YoJy4nKSA+PSAwKSB7XG4gICAgcHJlY2lzaW9uID0gc3RlcFN0cmluZy5sZW5ndGggLSBzdGVwU3RyaW5nLmluZGV4T2YoJy4nKSAtIDE7XG4gIH1cbiAgcmV0dXJuIHByZWNpc2lvbjtcbn1cblxuZnVuY3Rpb24gZ2V0TW91c2VQb3NpdGlvbih2ZXJ0aWNhbCwgZSkge1xuICByZXR1cm4gdmVydGljYWwgPyBlLmNsaWVudFkgOiBlLnBhZ2VYO1xufVxuXG5mdW5jdGlvbiBnZXRUb3VjaFBvc2l0aW9uKHZlcnRpY2FsLCBlKSB7XG4gIHJldHVybiB2ZXJ0aWNhbCA/IGUudG91Y2hlc1swXS5jbGllbnRZIDogZS50b3VjaGVzWzBdLnBhZ2VYO1xufVxuXG5mdW5jdGlvbiBnZXRIYW5kbGVDZW50ZXJQb3NpdGlvbih2ZXJ0aWNhbCwgaGFuZGxlKSB7XG4gIHZhciBjb29yZHMgPSBoYW5kbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB2ZXJ0aWNhbCA/IGNvb3Jkcy50b3AgKyBjb29yZHMuaGVpZ2h0ICogMC41IDogd2luZG93LnBhZ2VYT2Zmc2V0ICsgY29vcmRzLmxlZnQgKyBjb29yZHMud2lkdGggKiAwLjU7XG59XG5cbmZ1bmN0aW9uIGVuc3VyZVZhbHVlSW5SYW5nZSh2YWwsIF9yZWYzKSB7XG4gIHZhciBtYXggPSBfcmVmMy5tYXgsXG4gICAgICBtaW4gPSBfcmVmMy5taW47XG5cbiAgaWYgKHZhbCA8PSBtaW4pIHtcbiAgICByZXR1cm4gbWluO1xuICB9XG4gIGlmICh2YWwgPj0gbWF4KSB7XG4gICAgcmV0dXJuIG1heDtcbiAgfVxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBlbnN1cmVWYWx1ZVByZWNpc2lvbih2YWwsIHByb3BzKSB7XG4gIHZhciBzdGVwID0gcHJvcHMuc3RlcDtcblxuICB2YXIgY2xvc2VzdFBvaW50ID0gaXNGaW5pdGUoZ2V0Q2xvc2VzdFBvaW50KHZhbCwgcHJvcHMpKSA/IGdldENsb3Nlc3RQb2ludCh2YWwsIHByb3BzKSA6IDA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgcmV0dXJuIHN0ZXAgPT09IG51bGwgPyBjbG9zZXN0UG9pbnQgOiBwYXJzZUZsb2F0KGNsb3Nlc3RQb2ludC50b0ZpeGVkKGdldFByZWNpc2lvbihzdGVwKSkpO1xufVxuXG5mdW5jdGlvbiBwYXVzZUV2ZW50KGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOZXh0VmFsdWUoZnVuYywgdmFsdWUsIHByb3BzKSB7XG4gIHZhciBvcGVyYXRpb25zID0ge1xuICAgIGluY3JlYXNlOiBmdW5jdGlvbiBpbmNyZWFzZShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfSxcbiAgICBkZWNyZWFzZTogZnVuY3Rpb24gZGVjcmVhc2UoYSwgYikge1xuICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaW5kZXhUb0dldCA9IG9wZXJhdGlvbnNbZnVuY10oT2JqZWN0LmtleXMocHJvcHMubWFya3MpLmluZGV4T2YoSlNPTi5zdHJpbmdpZnkodmFsdWUpKSwgMSk7XG4gIHZhciBrZXlUb0dldCA9IE9iamVjdC5rZXlzKHByb3BzLm1hcmtzKVtpbmRleFRvR2V0XTtcblxuICBpZiAocHJvcHMuc3RlcCkge1xuICAgIHJldHVybiBvcGVyYXRpb25zW2Z1bmNdKHZhbHVlLCBwcm9wcy5zdGVwKTtcbiAgfSBlbHNlIGlmICghIU9iamVjdC5rZXlzKHByb3BzLm1hcmtzKS5sZW5ndGggJiYgISFwcm9wcy5tYXJrc1trZXlUb0dldF0pIHtcbiAgICByZXR1cm4gcHJvcHMubWFya3Nba2V5VG9HZXRdO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5Ym9hcmRWYWx1ZU11dGF0b3IoZSwgdmVydGljYWwsIHJldmVyc2UpIHtcbiAgdmFyIGluY3JlYXNlID0gJ2luY3JlYXNlJztcbiAgdmFyIGRlY3JlYXNlID0gJ2RlY3JlYXNlJztcbiAgdmFyIG1ldGhvZCA9IGluY3JlYXNlO1xuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIGNhc2UgX0tleUNvZGUyWydkZWZhdWx0J10uVVA6XG4gICAgICBtZXRob2QgPSB2ZXJ0aWNhbCAmJiByZXZlcnNlID8gZGVjcmVhc2UgOiBpbmNyZWFzZTticmVhaztcbiAgICBjYXNlIF9LZXlDb2RlMlsnZGVmYXVsdCddLlJJR0hUOlxuICAgICAgbWV0aG9kID0gIXZlcnRpY2FsICYmIHJldmVyc2UgPyBkZWNyZWFzZSA6IGluY3JlYXNlO2JyZWFrO1xuICAgIGNhc2UgX0tleUNvZGUyWydkZWZhdWx0J10uRE9XTjpcbiAgICAgIG1ldGhvZCA9IHZlcnRpY2FsICYmIHJldmVyc2UgPyBpbmNyZWFzZSA6IGRlY3JlYXNlO2JyZWFrO1xuICAgIGNhc2UgX0tleUNvZGUyWydkZWZhdWx0J10uTEVGVDpcbiAgICAgIG1ldGhvZCA9ICF2ZXJ0aWNhbCAmJiByZXZlcnNlID8gaW5jcmVhc2UgOiBkZWNyZWFzZTticmVhaztcblxuICAgIGNhc2UgX0tleUNvZGUyWydkZWZhdWx0J10uRU5EOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLm1heDtcbiAgICAgIH07XG4gICAgY2FzZSBfS2V5Q29kZTJbJ2RlZmF1bHQnXS5IT01FOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLm1pbjtcbiAgICAgIH07XG4gICAgY2FzZSBfS2V5Q29kZTJbJ2RlZmF1bHQnXS5QQUdFX1VQOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICsgcHJvcHMuc3RlcCAqIDI7XG4gICAgICB9O1xuICAgIGNhc2UgX0tleUNvZGUyWydkZWZhdWx0J10uUEFHRV9ET1dOOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIC0gcHJvcHMuc3RlcCAqIDI7XG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcHMpIHtcbiAgICByZXR1cm4gY2FsY3VsYXRlTmV4dFZhbHVlKG1ldGhvZCwgdmFsdWUsIHByb3BzKTtcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFkZEV2ZW50TGlzdGVuZXJXcmFwO1xuXG52YXIgX2FkZERvbUV2ZW50TGlzdGVuZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJhZGQtZG9tLWV2ZW50LWxpc3RlbmVyXCIpKTtcblxudmFyIF9yZWFjdERvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXcmFwKHRhcmdldCwgZXZlbnRUeXBlLCBjYiwgb3B0aW9uKSB7XG4gIC8qIGVzbGludCBjYW1lbGNhc2U6IDIgKi9cbiAgdmFyIGNhbGxiYWNrID0gX3JlYWN0RG9tLmRlZmF1bHQudW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgPyBmdW5jdGlvbiBydW4oZSkge1xuICAgIF9yZWFjdERvbS5kZWZhdWx0LnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKGNiLCBlKTtcbiAgfSA6IGNiO1xuICByZXR1cm4gKDAsIF9hZGREb21FdmVudExpc3RlbmVyLmRlZmF1bHQpKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjaywgb3B0aW9uKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLyoqXG4gKiBAaWdub3JlXG4gKiBzb21lIGtleS1jb2RlcyBkZWZpbml0aW9uIGFuZCB1dGlscyBmcm9tIGNsb3N1cmUtbGlicmFyeVxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xudmFyIEtleUNvZGUgPSB7XG4gIC8qKlxuICAgKiBNQUNfRU5URVJcbiAgICovXG4gIE1BQ19FTlRFUjogMyxcblxuICAvKipcbiAgICogQkFDS1NQQUNFXG4gICAqL1xuICBCQUNLU1BBQ0U6IDgsXG5cbiAgLyoqXG4gICAqIFRBQlxuICAgKi9cbiAgVEFCOiA5LFxuXG4gIC8qKlxuICAgKiBOVU1MT0NLIG9uIEZGL1NhZmFyaSBNYWNcbiAgICovXG4gIE5VTV9DRU5URVI6IDEyLFxuXG4gIC8qKlxuICAgKiBFTlRFUlxuICAgKi9cbiAgRU5URVI6IDEzLFxuXG4gIC8qKlxuICAgKiBTSElGVFxuICAgKi9cbiAgU0hJRlQ6IDE2LFxuXG4gIC8qKlxuICAgKiBDVFJMXG4gICAqL1xuICBDVFJMOiAxNyxcblxuICAvKipcbiAgICogQUxUXG4gICAqL1xuICBBTFQ6IDE4LFxuXG4gIC8qKlxuICAgKiBQQVVTRVxuICAgKi9cbiAgUEFVU0U6IDE5LFxuXG4gIC8qKlxuICAgKiBDQVBTX0xPQ0tcbiAgICovXG4gIENBUFNfTE9DSzogMjAsXG5cbiAgLyoqXG4gICAqIEVTQ1xuICAgKi9cbiAgRVNDOiAyNyxcblxuICAvKipcbiAgICogU1BBQ0VcbiAgICovXG4gIFNQQUNFOiAzMixcblxuICAvKipcbiAgICogUEFHRV9VUFxuICAgKi9cbiAgUEFHRV9VUDogMzMsXG5cbiAgLyoqXG4gICAqIFBBR0VfRE9XTlxuICAgKi9cbiAgUEFHRV9ET1dOOiAzNCxcblxuICAvKipcbiAgICogRU5EXG4gICAqL1xuICBFTkQ6IDM1LFxuXG4gIC8qKlxuICAgKiBIT01FXG4gICAqL1xuICBIT01FOiAzNixcblxuICAvKipcbiAgICogTEVGVFxuICAgKi9cbiAgTEVGVDogMzcsXG5cbiAgLyoqXG4gICAqIFVQXG4gICAqL1xuICBVUDogMzgsXG5cbiAgLyoqXG4gICAqIFJJR0hUXG4gICAqL1xuICBSSUdIVDogMzksXG5cbiAgLyoqXG4gICAqIERPV05cbiAgICovXG4gIERPV046IDQwLFxuXG4gIC8qKlxuICAgKiBQUklOVF9TQ1JFRU5cbiAgICovXG4gIFBSSU5UX1NDUkVFTjogNDQsXG5cbiAgLyoqXG4gICAqIElOU0VSVFxuICAgKi9cbiAgSU5TRVJUOiA0NSxcblxuICAvKipcbiAgICogREVMRVRFXG4gICAqL1xuICBERUxFVEU6IDQ2LFxuXG4gIC8qKlxuICAgKiBaRVJPXG4gICAqL1xuICBaRVJPOiA0OCxcblxuICAvKipcbiAgICogT05FXG4gICAqL1xuICBPTkU6IDQ5LFxuXG4gIC8qKlxuICAgKiBUV09cbiAgICovXG4gIFRXTzogNTAsXG5cbiAgLyoqXG4gICAqIFRIUkVFXG4gICAqL1xuICBUSFJFRTogNTEsXG5cbiAgLyoqXG4gICAqIEZPVVJcbiAgICovXG4gIEZPVVI6IDUyLFxuXG4gIC8qKlxuICAgKiBGSVZFXG4gICAqL1xuICBGSVZFOiA1MyxcblxuICAvKipcbiAgICogU0lYXG4gICAqL1xuICBTSVg6IDU0LFxuXG4gIC8qKlxuICAgKiBTRVZFTlxuICAgKi9cbiAgU0VWRU46IDU1LFxuXG4gIC8qKlxuICAgKiBFSUdIVFxuICAgKi9cbiAgRUlHSFQ6IDU2LFxuXG4gIC8qKlxuICAgKiBOSU5FXG4gICAqL1xuICBOSU5FOiA1NyxcblxuICAvKipcbiAgICogUVVFU1RJT05fTUFSS1xuICAgKi9cbiAgUVVFU1RJT05fTUFSSzogNjMsXG5cbiAgLyoqXG4gICAqIEFcbiAgICovXG4gIEE6IDY1LFxuXG4gIC8qKlxuICAgKiBCXG4gICAqL1xuICBCOiA2NixcblxuICAvKipcbiAgICogQ1xuICAgKi9cbiAgQzogNjcsXG5cbiAgLyoqXG4gICAqIERcbiAgICovXG4gIEQ6IDY4LFxuXG4gIC8qKlxuICAgKiBFXG4gICAqL1xuICBFOiA2OSxcblxuICAvKipcbiAgICogRlxuICAgKi9cbiAgRjogNzAsXG5cbiAgLyoqXG4gICAqIEdcbiAgICovXG4gIEc6IDcxLFxuXG4gIC8qKlxuICAgKiBIXG4gICAqL1xuICBIOiA3MixcblxuICAvKipcbiAgICogSVxuICAgKi9cbiAgSTogNzMsXG5cbiAgLyoqXG4gICAqIEpcbiAgICovXG4gIEo6IDc0LFxuXG4gIC8qKlxuICAgKiBLXG4gICAqL1xuICBLOiA3NSxcblxuICAvKipcbiAgICogTFxuICAgKi9cbiAgTDogNzYsXG5cbiAgLyoqXG4gICAqIE1cbiAgICovXG4gIE06IDc3LFxuXG4gIC8qKlxuICAgKiBOXG4gICAqL1xuICBOOiA3OCxcblxuICAvKipcbiAgICogT1xuICAgKi9cbiAgTzogNzksXG5cbiAgLyoqXG4gICAqIFBcbiAgICovXG4gIFA6IDgwLFxuXG4gIC8qKlxuICAgKiBRXG4gICAqL1xuICBROiA4MSxcblxuICAvKipcbiAgICogUlxuICAgKi9cbiAgUjogODIsXG5cbiAgLyoqXG4gICAqIFNcbiAgICovXG4gIFM6IDgzLFxuXG4gIC8qKlxuICAgKiBUXG4gICAqL1xuICBUOiA4NCxcblxuICAvKipcbiAgICogVVxuICAgKi9cbiAgVTogODUsXG5cbiAgLyoqXG4gICAqIFZcbiAgICovXG4gIFY6IDg2LFxuXG4gIC8qKlxuICAgKiBXXG4gICAqL1xuICBXOiA4NyxcblxuICAvKipcbiAgICogWFxuICAgKi9cbiAgWDogODgsXG5cbiAgLyoqXG4gICAqIFlcbiAgICovXG4gIFk6IDg5LFxuXG4gIC8qKlxuICAgKiBaXG4gICAqL1xuICBaOiA5MCxcblxuICAvKipcbiAgICogTUVUQVxuICAgKi9cbiAgTUVUQTogOTEsXG5cbiAgLyoqXG4gICAqIFdJTl9LRVlfUklHSFRcbiAgICovXG4gIFdJTl9LRVlfUklHSFQ6IDkyLFxuXG4gIC8qKlxuICAgKiBDT05URVhUX01FTlVcbiAgICovXG4gIENPTlRFWFRfTUVOVTogOTMsXG5cbiAgLyoqXG4gICAqIE5VTV9aRVJPXG4gICAqL1xuICBOVU1fWkVSTzogOTYsXG5cbiAgLyoqXG4gICAqIE5VTV9PTkVcbiAgICovXG4gIE5VTV9PTkU6IDk3LFxuXG4gIC8qKlxuICAgKiBOVU1fVFdPXG4gICAqL1xuICBOVU1fVFdPOiA5OCxcblxuICAvKipcbiAgICogTlVNX1RIUkVFXG4gICAqL1xuICBOVU1fVEhSRUU6IDk5LFxuXG4gIC8qKlxuICAgKiBOVU1fRk9VUlxuICAgKi9cbiAgTlVNX0ZPVVI6IDEwMCxcblxuICAvKipcbiAgICogTlVNX0ZJVkVcbiAgICovXG4gIE5VTV9GSVZFOiAxMDEsXG5cbiAgLyoqXG4gICAqIE5VTV9TSVhcbiAgICovXG4gIE5VTV9TSVg6IDEwMixcblxuICAvKipcbiAgICogTlVNX1NFVkVOXG4gICAqL1xuICBOVU1fU0VWRU46IDEwMyxcblxuICAvKipcbiAgICogTlVNX0VJR0hUXG4gICAqL1xuICBOVU1fRUlHSFQ6IDEwNCxcblxuICAvKipcbiAgICogTlVNX05JTkVcbiAgICovXG4gIE5VTV9OSU5FOiAxMDUsXG5cbiAgLyoqXG4gICAqIE5VTV9NVUxUSVBMWVxuICAgKi9cbiAgTlVNX01VTFRJUExZOiAxMDYsXG5cbiAgLyoqXG4gICAqIE5VTV9QTFVTXG4gICAqL1xuICBOVU1fUExVUzogMTA3LFxuXG4gIC8qKlxuICAgKiBOVU1fTUlOVVNcbiAgICovXG4gIE5VTV9NSU5VUzogMTA5LFxuXG4gIC8qKlxuICAgKiBOVU1fUEVSSU9EXG4gICAqL1xuICBOVU1fUEVSSU9EOiAxMTAsXG5cbiAgLyoqXG4gICAqIE5VTV9ESVZJU0lPTlxuICAgKi9cbiAgTlVNX0RJVklTSU9OOiAxMTEsXG5cbiAgLyoqXG4gICAqIEYxXG4gICAqL1xuICBGMTogMTEyLFxuXG4gIC8qKlxuICAgKiBGMlxuICAgKi9cbiAgRjI6IDExMyxcblxuICAvKipcbiAgICogRjNcbiAgICovXG4gIEYzOiAxMTQsXG5cbiAgLyoqXG4gICAqIEY0XG4gICAqL1xuICBGNDogMTE1LFxuXG4gIC8qKlxuICAgKiBGNVxuICAgKi9cbiAgRjU6IDExNixcblxuICAvKipcbiAgICogRjZcbiAgICovXG4gIEY2OiAxMTcsXG5cbiAgLyoqXG4gICAqIEY3XG4gICAqL1xuICBGNzogMTE4LFxuXG4gIC8qKlxuICAgKiBGOFxuICAgKi9cbiAgRjg6IDExOSxcblxuICAvKipcbiAgICogRjlcbiAgICovXG4gIEY5OiAxMjAsXG5cbiAgLyoqXG4gICAqIEYxMFxuICAgKi9cbiAgRjEwOiAxMjEsXG5cbiAgLyoqXG4gICAqIEYxMVxuICAgKi9cbiAgRjExOiAxMjIsXG5cbiAgLyoqXG4gICAqIEYxMlxuICAgKi9cbiAgRjEyOiAxMjMsXG5cbiAgLyoqXG4gICAqIE5VTUxPQ0tcbiAgICovXG4gIE5VTUxPQ0s6IDE0NCxcblxuICAvKipcbiAgICogU0VNSUNPTE9OXG4gICAqL1xuICBTRU1JQ09MT046IDE4NixcblxuICAvKipcbiAgICogREFTSFxuICAgKi9cbiAgREFTSDogMTg5LFxuXG4gIC8qKlxuICAgKiBFUVVBTFNcbiAgICovXG4gIEVRVUFMUzogMTg3LFxuXG4gIC8qKlxuICAgKiBDT01NQVxuICAgKi9cbiAgQ09NTUE6IDE4OCxcblxuICAvKipcbiAgICogUEVSSU9EXG4gICAqL1xuICBQRVJJT0Q6IDE5MCxcblxuICAvKipcbiAgICogU0xBU0hcbiAgICovXG4gIFNMQVNIOiAxOTEsXG5cbiAgLyoqXG4gICAqIEFQT1NUUk9QSEVcbiAgICovXG4gIEFQT1NUUk9QSEU6IDE5MixcblxuICAvKipcbiAgICogU0lOR0xFX1FVT1RFXG4gICAqL1xuICBTSU5HTEVfUVVPVEU6IDIyMixcblxuICAvKipcbiAgICogT1BFTl9TUVVBUkVfQlJBQ0tFVFxuICAgKi9cbiAgT1BFTl9TUVVBUkVfQlJBQ0tFVDogMjE5LFxuXG4gIC8qKlxuICAgKiBCQUNLU0xBU0hcbiAgICovXG4gIEJBQ0tTTEFTSDogMjIwLFxuXG4gIC8qKlxuICAgKiBDTE9TRV9TUVVBUkVfQlJBQ0tFVFxuICAgKi9cbiAgQ0xPU0VfU1FVQVJFX0JSQUNLRVQ6IDIyMSxcblxuICAvKipcbiAgICogV0lOX0tFWVxuICAgKi9cbiAgV0lOX0tFWTogMjI0LFxuXG4gIC8qKlxuICAgKiBNQUNfRkZfTUVUQVxuICAgKi9cbiAgTUFDX0ZGX01FVEE6IDIyNCxcblxuICAvKipcbiAgICogV0lOX0lNRVxuICAgKi9cbiAgV0lOX0lNRTogMjI5LFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gRnVuY3Rpb24gPT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLyoqXG4gICAqIHdoZXRoZXIgdGV4dCBhbmQgbW9kaWZpZWQga2V5IGlzIGVudGVyZWQgYXQgdGhlIHNhbWUgdGltZS5cbiAgICovXG4gIGlzVGV4dE1vZGlmeWluZ0tleUV2ZW50OiBmdW5jdGlvbiBpc1RleHRNb2RpZnlpbmdLZXlFdmVudChlKSB7XG4gICAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGU7XG5cbiAgICBpZiAoZS5hbHRLZXkgJiYgIWUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHwgLy8gRnVuY3Rpb24ga2V5cyBkb24ndCBnZW5lcmF0ZSB0ZXh0XG4gICAga2V5Q29kZSA+PSBLZXlDb2RlLkYxICYmIGtleUNvZGUgPD0gS2V5Q29kZS5GMTIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIFRoZSBmb2xsb3dpbmcga2V5cyBhcmUgcXVpdGUgaGFybWxlc3MsIGV2ZW4gaW4gY29tYmluYXRpb24gd2l0aFxuICAgIC8vIENUUkwsIEFMVCBvciBTSElGVC5cblxuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEtleUNvZGUuQUxUOlxuICAgICAgY2FzZSBLZXlDb2RlLkNBUFNfTE9DSzpcbiAgICAgIGNhc2UgS2V5Q29kZS5DT05URVhUX01FTlU6XG4gICAgICBjYXNlIEtleUNvZGUuQ1RSTDpcbiAgICAgIGNhc2UgS2V5Q29kZS5ET1dOOlxuICAgICAgY2FzZSBLZXlDb2RlLkVORDpcbiAgICAgIGNhc2UgS2V5Q29kZS5FU0M6XG4gICAgICBjYXNlIEtleUNvZGUuSE9NRTpcbiAgICAgIGNhc2UgS2V5Q29kZS5JTlNFUlQ6XG4gICAgICBjYXNlIEtleUNvZGUuTEVGVDpcbiAgICAgIGNhc2UgS2V5Q29kZS5NQUNfRkZfTUVUQTpcbiAgICAgIGNhc2UgS2V5Q29kZS5NRVRBOlxuICAgICAgY2FzZSBLZXlDb2RlLk5VTUxPQ0s6XG4gICAgICBjYXNlIEtleUNvZGUuTlVNX0NFTlRFUjpcbiAgICAgIGNhc2UgS2V5Q29kZS5QQUdFX0RPV046XG4gICAgICBjYXNlIEtleUNvZGUuUEFHRV9VUDpcbiAgICAgIGNhc2UgS2V5Q29kZS5QQVVTRTpcbiAgICAgIGNhc2UgS2V5Q29kZS5QUklOVF9TQ1JFRU46XG4gICAgICBjYXNlIEtleUNvZGUuUklHSFQ6XG4gICAgICBjYXNlIEtleUNvZGUuU0hJRlQ6XG4gICAgICBjYXNlIEtleUNvZGUuVVA6XG4gICAgICBjYXNlIEtleUNvZGUuV0lOX0tFWTpcbiAgICAgIGNhc2UgS2V5Q29kZS5XSU5fS0VZX1JJR0hUOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogd2hldGhlciBjaGFyYWN0ZXIgaXMgZW50ZXJlZC5cbiAgICovXG4gIGlzQ2hhcmFjdGVyS2V5OiBmdW5jdGlvbiBpc0NoYXJhY3RlcktleShrZXlDb2RlKSB7XG4gICAgaWYgKGtleUNvZGUgPj0gS2V5Q29kZS5aRVJPICYmIGtleUNvZGUgPD0gS2V5Q29kZS5OSU5FKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoa2V5Q29kZSA+PSBLZXlDb2RlLk5VTV9aRVJPICYmIGtleUNvZGUgPD0gS2V5Q29kZS5OVU1fTVVMVElQTFkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChrZXlDb2RlID49IEtleUNvZGUuQSAmJiBrZXlDb2RlIDw9IEtleUNvZGUuWikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBTYWZhcmkgc2VuZHMgemVybyBrZXkgY29kZSBmb3Igbm9uLWxhdGluIGNoYXJhY3RlcnMuXG5cblxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdXZWJLaXQnKSAhPT0gLTEgJiYga2V5Q29kZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEtleUNvZGUuU1BBQ0U6XG4gICAgICBjYXNlIEtleUNvZGUuUVVFU1RJT05fTUFSSzpcbiAgICAgIGNhc2UgS2V5Q29kZS5OVU1fUExVUzpcbiAgICAgIGNhc2UgS2V5Q29kZS5OVU1fTUlOVVM6XG4gICAgICBjYXNlIEtleUNvZGUuTlVNX1BFUklPRDpcbiAgICAgIGNhc2UgS2V5Q29kZS5OVU1fRElWSVNJT046XG4gICAgICBjYXNlIEtleUNvZGUuU0VNSUNPTE9OOlxuICAgICAgY2FzZSBLZXlDb2RlLkRBU0g6XG4gICAgICBjYXNlIEtleUNvZGUuRVFVQUxTOlxuICAgICAgY2FzZSBLZXlDb2RlLkNPTU1BOlxuICAgICAgY2FzZSBLZXlDb2RlLlBFUklPRDpcbiAgICAgIGNhc2UgS2V5Q29kZS5TTEFTSDpcbiAgICAgIGNhc2UgS2V5Q29kZS5BUE9TVFJPUEhFOlxuICAgICAgY2FzZSBLZXlDb2RlLlNJTkdMRV9RVU9URTpcbiAgICAgIGNhc2UgS2V5Q29kZS5PUEVOX1NRVUFSRV9CUkFDS0VUOlxuICAgICAgY2FzZSBLZXlDb2RlLkJBQ0tTTEFTSDpcbiAgICAgIGNhc2UgS2V5Q29kZS5DTE9TRV9TUVVBUkVfQlJBQ0tFVDpcbiAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSBLZXlDb2RlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==