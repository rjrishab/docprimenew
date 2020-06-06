(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/react-image-lightbox/dist/index.es.js":
/*!************************************************************!*\
  !*** ./node_modules/react-image-lightbox/dist/index.es.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/**
 * Placeholder for future translate functionality
 */
function translate(str) {
  var replaceStrings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!str) {
    return '';
  }

  var translated = str;

  if (replaceStrings) {
    Object.keys(replaceStrings).forEach(function (placeholder) {
      translated = translated.replace(placeholder, replaceStrings[placeholder]);
    });
  }

  return translated;
}
function getWindowWidth() {
  return typeof global.window !== 'undefined' ? global.window.innerWidth : 0;
}
function getWindowHeight() {
  return typeof global.window !== 'undefined' ? global.window.innerHeight : 0;
} // Get the highest window context that isn't cross-origin
// (When in an iframe)

function getHighestSafeWindowContext() {
  var self = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : global.window.self;
  var referrer = self.document.referrer; // If we reached the top level, return self

  if (self === global.window.top || !referrer) {
    return self;
  }

  var getOrigin = function getOrigin(href) {
    return href.match(/(.*\/\/.*?)(\/|$)/)[1];
  }; // If parent is the same origin, we can move up one context
  // Reference: https://stackoverflow.com/a/21965342/1601953


  if (getOrigin(self.location.href) === getOrigin(referrer)) {
    return getHighestSafeWindowContext(self.parent);
  } // If a different origin, we consider the current level
  // as the top reachable one


  return self;
}

// Min image zoom level
var MIN_ZOOM_LEVEL = 0; // Max image zoom level

var MAX_ZOOM_LEVEL = 300; // Size ratio between previous and next zoom levels

var ZOOM_RATIO = 1.007; // How much to increase/decrease the zoom level when the zoom buttons are clicked

var ZOOM_BUTTON_INCREMENT_SIZE = 100; // Used to judge the amount of horizontal scroll needed to initiate a image move

var WHEEL_MOVE_X_THRESHOLD = 200; // Used to judge the amount of vertical scroll needed to initiate a zoom action

var WHEEL_MOVE_Y_THRESHOLD = 1;
var KEYS = {
  ESC: 27,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
}; // Actions

var ACTION_NONE = 0;
var ACTION_MOVE = 1;
var ACTION_SWIPE = 2;
var ACTION_PINCH = 3;

var SOURCE_ANY = 0;
var SOURCE_MOUSE = 1;
var SOURCE_TOUCH = 2;
var SOURCE_POINTER = 3; // Minimal swipe distance

var MIN_SWIPE_DISTANCE = 200;

var ReactImageLightbox =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactImageLightbox, _Component);

  _createClass(ReactImageLightbox, null, [{
    key: "isTargetMatchImage",
    value: function isTargetMatchImage(target) {
      return target && /ril-image-current/.test(target.className);
    }
  }, {
    key: "parseMouseEvent",
    value: function parseMouseEvent(mouseEvent) {
      return {
        id: 'mouse',
        source: SOURCE_MOUSE,
        x: parseInt(mouseEvent.clientX, 10),
        y: parseInt(mouseEvent.clientY, 10)
      };
    }
  }, {
    key: "parseTouchPointer",
    value: function parseTouchPointer(touchPointer) {
      return {
        id: touchPointer.identifier,
        source: SOURCE_TOUCH,
        x: parseInt(touchPointer.clientX, 10),
        y: parseInt(touchPointer.clientY, 10)
      };
    }
  }, {
    key: "parsePointerEvent",
    value: function parsePointerEvent(pointerEvent) {
      return {
        id: pointerEvent.pointerId,
        source: SOURCE_POINTER,
        x: parseInt(pointerEvent.clientX, 10),
        y: parseInt(pointerEvent.clientY, 10)
      };
    } // Request to transition to the previous image

  }, {
    key: "getTransform",
    value: function getTransform(_ref) {
      var _ref$x = _ref.x,
          x = _ref$x === void 0 ? 0 : _ref$x,
          _ref$y = _ref.y,
          y = _ref$y === void 0 ? 0 : _ref$y,
          _ref$zoom = _ref.zoom,
          zoom = _ref$zoom === void 0 ? 1 : _ref$zoom,
          width = _ref.width,
          targetWidth = _ref.targetWidth;
      var nextX = x;
      var windowWidth = getWindowWidth();

      if (width > windowWidth) {
        nextX += (windowWidth - width) / 2;
      }

      var scaleFactor = zoom * (targetWidth / width);
      return {
        transform: "translate3d(".concat(nextX, "px,").concat(y, "px,0) scale3d(").concat(scaleFactor, ",").concat(scaleFactor, ",1)")
      };
    }
  }]);

  function ReactImageLightbox(props) {
    var _this;

    _classCallCheck(this, ReactImageLightbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactImageLightbox).call(this, props));
    _this.state = {
      //-----------------------------
      // Animation
      //-----------------------------
      // Lightbox is closing
      // When Lightbox is mounted, if animation is enabled it will open with the reverse of the closing animation
      isClosing: !props.animationDisabled,
      // Component parts should animate (e.g., when images are moving, or image is being zoomed)
      shouldAnimate: false,
      //-----------------------------
      // Zoom settings
      //-----------------------------
      // Zoom level of image
      zoomLevel: MIN_ZOOM_LEVEL,
      //-----------------------------
      // Image position settings
      //-----------------------------
      // Horizontal offset from center
      offsetX: 0,
      // Vertical offset from center
      offsetY: 0,
      // image load error for srcType
      loadErrorStatus: {}
    }; // Refs

    _this.outerEl = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.zoomInBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.zoomOutBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.caption = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.closeIfClickInner = _this.closeIfClickInner.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleImageDoubleClick = _this.handleImageDoubleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleImageMouseWheel = _this.handleImageMouseWheel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleKeyInput = _this.handleKeyInput.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMouseUp = _this.handleMouseUp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleOuterMousewheel = _this.handleOuterMousewheel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handlePointerEvent = _this.handlePointerEvent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleCaptionMousewheel = _this.handleCaptionMousewheel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleWindowResize = _this.handleWindowResize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleZoomInButtonClick = _this.handleZoomInButtonClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleZoomOutButtonClick = _this.handleZoomOutButtonClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.requestClose = _this.requestClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.requestMoveNext = _this.requestMoveNext.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.requestMovePrev = _this.requestMovePrev.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ReactImageLightbox, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // Timeouts - always clear it before umount
      this.timeouts = []; // Current action

      this.currentAction = ACTION_NONE; // Events source

      this.eventsSource = SOURCE_ANY; // Empty pointers list

      this.pointerList = []; // Prevent inner close

      this.preventInnerClose = false;
      this.preventInnerCloseTimeout = null; // Used to disable animation when changing props.mainSrc|nextSrc|prevSrc

      this.keyPressed = false; // Used to store load state / dimensions of images

      this.imageCache = {}; // Time the last keydown event was called (used in keyboard action rate limiting)

      this.lastKeyDownTime = 0; // Used for debouncing window resize event

      this.resizeTimeout = null; // Used to determine when actions are triggered by the scroll wheel

      this.wheelActionTimeout = null;
      this.resetScrollTimeout = null;
      this.scrollX = 0;
      this.scrollY = 0; // Used in panning zoomed images

      this.moveStartX = 0;
      this.moveStartY = 0;
      this.moveStartOffsetX = 0;
      this.moveStartOffsetY = 0; // Used to swipe

      this.swipeStartX = 0;
      this.swipeStartY = 0;
      this.swipeEndX = 0;
      this.swipeEndY = 0; // Used to pinch

      this.pinchTouchList = null;
      this.pinchDistance = 0; // Used to differentiate between images with identical src

      this.keyCounter = 0; // Used to detect a move when all src's remain unchanged (four or more of the same image in a row)

      this.moveRequested = false;

      if (!this.props.animationDisabled) {
        // Make opening animation play
        this.setState({
          isClosing: false
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Prevents cross-origin errors when using a cross-origin iframe
      this.windowContext = getHighestSafeWindowContext();
      this.listeners = {
        resize: this.handleWindowResize,
        mouseup: this.handleMouseUp,
        touchend: this.handleTouchEnd,
        touchcancel: this.handleTouchEnd,
        pointerdown: this.handlePointerEvent,
        pointermove: this.handlePointerEvent,
        pointerup: this.handlePointerEvent,
        pointercancel: this.handlePointerEvent
      };
      Object.keys(this.listeners).forEach(function (type) {
        _this2.windowContext.addEventListener(type, _this2.listeners[type]);
      });
      this.loadAllImages();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      // Iterate through the source types for prevProps and nextProps to
      //  determine if any of the sources changed
      var sourcesChanged = false;
      var prevSrcDict = {};
      var nextSrcDict = {};
      this.getSrcTypes().forEach(function (srcType) {
        if (_this3.props[srcType.name] !== nextProps[srcType.name]) {
          sourcesChanged = true;
          prevSrcDict[_this3.props[srcType.name]] = true;
          nextSrcDict[nextProps[srcType.name]] = true;
        }
      });

      if (sourcesChanged || this.moveRequested) {
        // Reset the loaded state for images not rendered next
        Object.keys(prevSrcDict).forEach(function (prevSrc) {
          if (!(prevSrc in nextSrcDict) && prevSrc in _this3.imageCache) {
            _this3.imageCache[prevSrc].loaded = false;
          }
        });
        this.moveRequested = false; // Load any new images

        this.loadAllImages(nextProps);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      // Wait for move...
      return !this.moveRequested;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this4 = this;

      this.didUnmount = true;
      Object.keys(this.listeners).forEach(function (type) {
        _this4.windowContext.removeEventListener(type, _this4.listeners[type]);
      });
      this.timeouts.forEach(function (tid) {
        return clearTimeout(tid);
      });
    }
  }, {
    key: "setTimeout",
    value: function (_setTimeout) {
      function setTimeout(_x, _x2) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function (func, time) {
      var _this5 = this;

      var id = setTimeout(function () {
        _this5.timeouts = _this5.timeouts.filter(function (tid) {
          return tid !== id;
        });
        func();
      }, time);
      this.timeouts.push(id);
      return id;
    })
  }, {
    key: "setPreventInnerClose",
    value: function setPreventInnerClose() {
      var _this6 = this;

      if (this.preventInnerCloseTimeout) {
        this.clearTimeout(this.preventInnerCloseTimeout);
      }

      this.preventInnerClose = true;
      this.preventInnerCloseTimeout = this.setTimeout(function () {
        _this6.preventInnerClose = false;
        _this6.preventInnerCloseTimeout = null;
      }, 100);
    } // Get info for the best suited image to display with the given srcType

  }, {
    key: "getBestImageForType",
    value: function getBestImageForType(srcType) {
      var imageSrc = this.props[srcType];
      var fitSizes = {};

      if (this.isImageLoaded(imageSrc)) {
        // Use full-size image if available
        fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height);
      } else if (this.isImageLoaded(this.props["".concat(srcType, "Thumbnail")])) {
        // Fall back to using thumbnail if the image has not been loaded
        imageSrc = this.props["".concat(srcType, "Thumbnail")];
        fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height, true);
      } else {
        return null;
      }

      return {
        src: imageSrc,
        height: this.imageCache[imageSrc].height,
        width: this.imageCache[imageSrc].width,
        targetHeight: fitSizes.height,
        targetWidth: fitSizes.width
      };
    } // Get sizing for when an image is larger than the window

  }, {
    key: "getFitSizes",
    value: function getFitSizes(width, height, stretch) {
      var boxSize = this.getLightboxRect();
      var maxHeight = boxSize.height - this.props.imagePadding * 2;
      var maxWidth = boxSize.width - this.props.imagePadding * 2;

      if (!stretch) {
        maxHeight = Math.min(maxHeight, height);
        maxWidth = Math.min(maxWidth, width);
      }

      var maxRatio = maxWidth / maxHeight;
      var srcRatio = width / height;

      if (maxRatio > srcRatio) {
        // height is the constraining dimension of the photo
        return {
          width: width * maxHeight / height,
          height: maxHeight
        };
      }

      return {
        width: maxWidth,
        height: height * maxWidth / width
      };
    }
  }, {
    key: "getMaxOffsets",
    value: function getMaxOffsets() {
      var zoomLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.zoomLevel;
      var currentImageInfo = this.getBestImageForType('mainSrc');

      if (currentImageInfo === null) {
        return {
          maxX: 0,
          minX: 0,
          maxY: 0,
          minY: 0
        };
      }

      var boxSize = this.getLightboxRect();
      var zoomMultiplier = this.getZoomMultiplier(zoomLevel);
      var maxX = 0;

      if (zoomMultiplier * currentImageInfo.width - boxSize.width < 0) {
        // if there is still blank space in the X dimension, don't limit except to the opposite edge
        maxX = (boxSize.width - zoomMultiplier * currentImageInfo.width) / 2;
      } else {
        maxX = (zoomMultiplier * currentImageInfo.width - boxSize.width) / 2;
      }

      var maxY = 0;

      if (zoomMultiplier * currentImageInfo.height - boxSize.height < 0) {
        // if there is still blank space in the Y dimension, don't limit except to the opposite edge
        maxY = (boxSize.height - zoomMultiplier * currentImageInfo.height) / 2;
      } else {
        maxY = (zoomMultiplier * currentImageInfo.height - boxSize.height) / 2;
      }

      return {
        maxX: maxX,
        maxY: maxY,
        minX: -1 * maxX,
        minY: -1 * maxY
      };
    } // Get image src types

  }, {
    key: "getSrcTypes",
    value: function getSrcTypes() {
      return [{
        name: 'mainSrc',
        keyEnding: "i".concat(this.keyCounter)
      }, {
        name: 'mainSrcThumbnail',
        keyEnding: "t".concat(this.keyCounter)
      }, {
        name: 'nextSrc',
        keyEnding: "i".concat(this.keyCounter + 1)
      }, {
        name: 'nextSrcThumbnail',
        keyEnding: "t".concat(this.keyCounter + 1)
      }, {
        name: 'prevSrc',
        keyEnding: "i".concat(this.keyCounter - 1)
      }, {
        name: 'prevSrcThumbnail',
        keyEnding: "t".concat(this.keyCounter - 1)
      }];
    }
    /**
     * Get sizing when the image is scaled
     */

  }, {
    key: "getZoomMultiplier",
    value: function getZoomMultiplier() {
      var zoomLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.zoomLevel;
      return Math.pow(ZOOM_RATIO, zoomLevel);
    }
    /**
     * Get the size of the lightbox in pixels
     */

  }, {
    key: "getLightboxRect",
    value: function getLightboxRect() {
      if (this.outerEl.current) {
        return this.outerEl.current.getBoundingClientRect();
      }

      return {
        width: getWindowWidth(),
        height: getWindowHeight(),
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    }
  }, {
    key: "clearTimeout",
    value: function (_clearTimeout) {
      function clearTimeout(_x3) {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function (id) {
      this.timeouts = this.timeouts.filter(function (tid) {
        return tid !== id;
      });
      clearTimeout(id);
    }) // Change zoom level

  }, {
    key: "changeZoom",
    value: function changeZoom(zoomLevel, clientX, clientY) {
      // Ignore if zoom disabled
      if (!this.props.enableZoom) {
        return;
      } // Constrain zoom level to the set bounds


      var nextZoomLevel = Math.max(MIN_ZOOM_LEVEL, Math.min(MAX_ZOOM_LEVEL, zoomLevel)); // Ignore requests that don't change the zoom level

      if (nextZoomLevel === this.state.zoomLevel) {
        return;
      }

      if (nextZoomLevel === MIN_ZOOM_LEVEL) {
        // Snap back to center if zoomed all the way out
        this.setState({
          zoomLevel: nextZoomLevel,
          offsetX: 0,
          offsetY: 0
        });
        return;
      }

      var imageBaseSize = this.getBestImageForType('mainSrc');

      if (imageBaseSize === null) {
        return;
      }

      var currentZoomMultiplier = this.getZoomMultiplier();
      var nextZoomMultiplier = this.getZoomMultiplier(nextZoomLevel); // Default to the center of the image to zoom when no mouse position specified

      var boxRect = this.getLightboxRect();
      var pointerX = typeof clientX !== 'undefined' ? clientX - boxRect.left : boxRect.width / 2;
      var pointerY = typeof clientY !== 'undefined' ? clientY - boxRect.top : boxRect.height / 2;
      var currentImageOffsetX = (boxRect.width - imageBaseSize.width * currentZoomMultiplier) / 2;
      var currentImageOffsetY = (boxRect.height - imageBaseSize.height * currentZoomMultiplier) / 2;
      var currentImageRealOffsetX = currentImageOffsetX - this.state.offsetX;
      var currentImageRealOffsetY = currentImageOffsetY - this.state.offsetY;
      var currentPointerXRelativeToImage = (pointerX - currentImageRealOffsetX) / currentZoomMultiplier;
      var currentPointerYRelativeToImage = (pointerY - currentImageRealOffsetY) / currentZoomMultiplier;
      var nextImageRealOffsetX = pointerX - currentPointerXRelativeToImage * nextZoomMultiplier;
      var nextImageRealOffsetY = pointerY - currentPointerYRelativeToImage * nextZoomMultiplier;
      var nextImageOffsetX = (boxRect.width - imageBaseSize.width * nextZoomMultiplier) / 2;
      var nextImageOffsetY = (boxRect.height - imageBaseSize.height * nextZoomMultiplier) / 2;
      var nextOffsetX = nextImageOffsetX - nextImageRealOffsetX;
      var nextOffsetY = nextImageOffsetY - nextImageRealOffsetY; // When zooming out, limit the offset so things don't get left askew

      if (this.currentAction !== ACTION_PINCH) {
        var maxOffsets = this.getMaxOffsets();

        if (this.state.zoomLevel > nextZoomLevel) {
          nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, nextOffsetX));
          nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, nextOffsetY));
        }
      }

      this.setState({
        zoomLevel: nextZoomLevel,
        offsetX: nextOffsetX,
        offsetY: nextOffsetY
      });
    }
  }, {
    key: "closeIfClickInner",
    value: function closeIfClickInner(event) {
      if (!this.preventInnerClose && event.target.className.search(/\bril-inner\b/) > -1) {
        this.requestClose(event);
      }
    }
    /**
     * Handle user keyboard actions
     */

  }, {
    key: "handleKeyInput",
    value: function handleKeyInput(event) {
      event.stopPropagation(); // Ignore key input during animations

      if (this.isAnimating()) {
        return;
      } // Allow slightly faster navigation through the images when user presses keys repeatedly


      if (event.type === 'keyup') {
        this.lastKeyDownTime -= this.props.keyRepeatKeyupBonus;
        return;
      }

      var keyCode = event.which || event.keyCode; // Ignore key presses that happen too close to each other (when rapid fire key pressing or holding down the key)
      // But allow it if it's a lightbox closing action

      var currentTime = new Date();

      if (currentTime.getTime() - this.lastKeyDownTime < this.props.keyRepeatLimit && keyCode !== KEYS.ESC) {
        return;
      }

      this.lastKeyDownTime = currentTime.getTime();

      switch (keyCode) {
        // ESC key closes the lightbox
        case KEYS.ESC:
          event.preventDefault();
          this.requestClose(event);
          break;
        // Left arrow key moves to previous image

        case KEYS.LEFT_ARROW:
          if (!this.props.prevSrc) {
            return;
          }

          event.preventDefault();
          this.keyPressed = true;
          this.requestMovePrev(event);
          break;
        // Right arrow key moves to next image

        case KEYS.RIGHT_ARROW:
          if (!this.props.nextSrc) {
            return;
          }

          event.preventDefault();
          this.keyPressed = true;
          this.requestMoveNext(event);
          break;
      }
    }
    /**
     * Handle a mouse wheel event over the lightbox container
     */

  }, {
    key: "handleOuterMousewheel",
    value: function handleOuterMousewheel(event) {
      var _this7 = this;

      // Prevent scrolling of the background
      event.stopPropagation();
      var xThreshold = WHEEL_MOVE_X_THRESHOLD;
      var actionDelay = 0;
      var imageMoveDelay = 500;
      this.clearTimeout(this.resetScrollTimeout);
      this.resetScrollTimeout = this.setTimeout(function () {
        _this7.scrollX = 0;
        _this7.scrollY = 0;
      }, 300); // Prevent rapid-fire zoom behavior

      if (this.wheelActionTimeout !== null || this.isAnimating()) {
        return;
      }

      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
        // handle horizontal scrolls with image moves
        this.scrollY = 0;
        this.scrollX += event.deltaX;
        var bigLeapX = xThreshold / 2; // If the scroll amount has accumulated sufficiently, or a large leap was taken

        if (this.scrollX >= xThreshold || event.deltaX >= bigLeapX) {
          // Scroll right moves to next
          this.requestMoveNext(event);
          actionDelay = imageMoveDelay;
          this.scrollX = 0;
        } else if (this.scrollX <= -1 * xThreshold || event.deltaX <= -1 * bigLeapX) {
          // Scroll left moves to previous
          this.requestMovePrev(event);
          actionDelay = imageMoveDelay;
          this.scrollX = 0;
        }
      } // Allow successive actions after the set delay


      if (actionDelay !== 0) {
        this.wheelActionTimeout = this.setTimeout(function () {
          _this7.wheelActionTimeout = null;
        }, actionDelay);
      }
    }
  }, {
    key: "handleImageMouseWheel",
    value: function handleImageMouseWheel(event) {
      var yThreshold = WHEEL_MOVE_Y_THRESHOLD;

      if (Math.abs(event.deltaY) >= Math.abs(event.deltaX)) {
        event.stopPropagation(); // If the vertical scroll amount was large enough, perform a zoom

        if (Math.abs(event.deltaY) < yThreshold) {
          return;
        }

        this.scrollX = 0;
        this.scrollY += event.deltaY;
        this.changeZoom(this.state.zoomLevel - event.deltaY, event.clientX, event.clientY);
      }
    }
    /**
     * Handle a double click on the current image
     */

  }, {
    key: "handleImageDoubleClick",
    value: function handleImageDoubleClick(event) {
      if (this.state.zoomLevel > MIN_ZOOM_LEVEL) {
        // A double click when zoomed in zooms all the way out
        this.changeZoom(MIN_ZOOM_LEVEL, event.clientX, event.clientY);
      } else {
        // A double click when zoomed all the way out zooms in
        this.changeZoom(this.state.zoomLevel + ZOOM_BUTTON_INCREMENT_SIZE, event.clientX, event.clientY);
      }
    }
  }, {
    key: "shouldHandleEvent",
    value: function shouldHandleEvent(source) {
      if (this.eventsSource === source) {
        return true;
      }

      if (this.eventsSource === SOURCE_ANY) {
        this.eventsSource = source;
        return true;
      }

      switch (source) {
        case SOURCE_MOUSE:
          return false;

        case SOURCE_TOUCH:
          this.eventsSource = SOURCE_TOUCH;
          this.filterPointersBySource();
          return true;

        case SOURCE_POINTER:
          if (this.eventsSource === SOURCE_MOUSE) {
            this.eventsSource = SOURCE_POINTER;
            this.filterPointersBySource();
            return true;
          }

          return false;

        default:
          return false;
      }
    }
  }, {
    key: "addPointer",
    value: function addPointer(pointer) {
      this.pointerList.push(pointer);
    }
  }, {
    key: "removePointer",
    value: function removePointer(pointer) {
      this.pointerList = this.pointerList.filter(function (_ref2) {
        var id = _ref2.id;
        return id !== pointer.id;
      });
    }
  }, {
    key: "filterPointersBySource",
    value: function filterPointersBySource() {
      var _this8 = this;

      this.pointerList = this.pointerList.filter(function (_ref3) {
        var source = _ref3.source;
        return source === _this8.eventsSource;
      });
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      if (this.shouldHandleEvent(SOURCE_MOUSE) && ReactImageLightbox.isTargetMatchImage(event.target)) {
        this.addPointer(ReactImageLightbox.parseMouseEvent(event));
        this.multiPointerStart(event);
      }
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      if (this.shouldHandleEvent(SOURCE_MOUSE)) {
        this.multiPointerMove(event, [ReactImageLightbox.parseMouseEvent(event)]);
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      if (this.shouldHandleEvent(SOURCE_MOUSE)) {
        this.removePointer(ReactImageLightbox.parseMouseEvent(event));
        this.multiPointerEnd(event);
      }
    }
  }, {
    key: "handlePointerEvent",
    value: function handlePointerEvent(event) {
      if (this.shouldHandleEvent(SOURCE_POINTER)) {
        switch (event.type) {
          case 'pointerdown':
            if (ReactImageLightbox.isTargetMatchImage(event.target)) {
              this.addPointer(ReactImageLightbox.parsePointerEvent(event));
              this.multiPointerStart(event);
            }

            break;

          case 'pointermove':
            this.multiPointerMove(event, [ReactImageLightbox.parsePointerEvent(event)]);
            break;

          case 'pointerup':
          case 'pointercancel':
            this.removePointer(ReactImageLightbox.parsePointerEvent(event));
            this.multiPointerEnd(event);
            break;
        }
      }
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(event) {
      var _this9 = this;

      if (this.shouldHandleEvent(SOURCE_TOUCH) && ReactImageLightbox.isTargetMatchImage(event.target)) {
        [].forEach.call(event.changedTouches, function (eventTouch) {
          return _this9.addPointer(ReactImageLightbox.parseTouchPointer(eventTouch));
        });
        this.multiPointerStart(event);
      }
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(event) {
      if (this.shouldHandleEvent(SOURCE_TOUCH)) {
        this.multiPointerMove(event, [].map.call(event.changedTouches, function (eventTouch) {
          return ReactImageLightbox.parseTouchPointer(eventTouch);
        }));
      }
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(event) {
      var _this10 = this;

      if (this.shouldHandleEvent(SOURCE_TOUCH)) {
        [].map.call(event.changedTouches, function (touch) {
          return _this10.removePointer(ReactImageLightbox.parseTouchPointer(touch));
        });
        this.multiPointerEnd(event);
      }
    }
  }, {
    key: "decideMoveOrSwipe",
    value: function decideMoveOrSwipe(pointer) {
      if (this.state.zoomLevel <= MIN_ZOOM_LEVEL) {
        this.handleSwipeStart(pointer);
      } else {
        this.handleMoveStart(pointer);
      }
    }
  }, {
    key: "multiPointerStart",
    value: function multiPointerStart(event) {
      this.handleEnd(null);

      switch (this.pointerList.length) {
        case 1:
          {
            event.preventDefault();
            this.decideMoveOrSwipe(this.pointerList[0]);
            break;
          }

        case 2:
          {
            event.preventDefault();
            this.handlePinchStart(this.pointerList);
            break;
          }
      }
    }
  }, {
    key: "multiPointerMove",
    value: function multiPointerMove(event, pointerList) {
      switch (this.currentAction) {
        case ACTION_MOVE:
          {
            event.preventDefault();
            this.handleMove(pointerList[0]);
            break;
          }

        case ACTION_SWIPE:
          {
            event.preventDefault();
            this.handleSwipe(pointerList[0]);
            break;
          }

        case ACTION_PINCH:
          {
            event.preventDefault();
            this.handlePinch(pointerList);
            break;
          }
      }
    }
  }, {
    key: "multiPointerEnd",
    value: function multiPointerEnd(event) {
      if (this.currentAction !== ACTION_NONE) {
        this.setPreventInnerClose();
        this.handleEnd(event);
      }

      switch (this.pointerList.length) {
        case 0:
          {
            this.eventsSource = SOURCE_ANY;
            break;
          }

        case 1:
          {
            event.preventDefault();
            this.decideMoveOrSwipe(this.pointerList[0]);
            break;
          }

        case 2:
          {
            event.preventDefault();
            this.handlePinchStart(this.pointerList);
            break;
          }
      }
    }
  }, {
    key: "handleEnd",
    value: function handleEnd(event) {
      switch (this.currentAction) {
        case ACTION_MOVE:
          this.handleMoveEnd(event);
          break;

        case ACTION_SWIPE:
          this.handleSwipeEnd(event);
          break;

        case ACTION_PINCH:
          this.handlePinchEnd(event);
          break;
      }
    } // Handle move start over the lightbox container
    // This happens:
    // - On a mouseDown event
    // - On a touchstart event

  }, {
    key: "handleMoveStart",
    value: function handleMoveStart(_ref4) {
      var clientX = _ref4.x,
          clientY = _ref4.y;

      if (!this.props.enableZoom) {
        return;
      }

      this.currentAction = ACTION_MOVE;
      this.moveStartX = clientX;
      this.moveStartY = clientY;
      this.moveStartOffsetX = this.state.offsetX;
      this.moveStartOffsetY = this.state.offsetY;
    } // Handle dragging over the lightbox container
    // This happens:
    // - After a mouseDown and before a mouseUp event
    // - After a touchstart and before a touchend event

  }, {
    key: "handleMove",
    value: function handleMove(_ref5) {
      var clientX = _ref5.x,
          clientY = _ref5.y;
      var newOffsetX = this.moveStartX - clientX + this.moveStartOffsetX;
      var newOffsetY = this.moveStartY - clientY + this.moveStartOffsetY;

      if (this.state.offsetX !== newOffsetX || this.state.offsetY !== newOffsetY) {
        this.setState({
          offsetX: newOffsetX,
          offsetY: newOffsetY
        });
      }
    }
  }, {
    key: "handleMoveEnd",
    value: function handleMoveEnd() {
      var _this11 = this;

      this.currentAction = ACTION_NONE;
      this.moveStartX = 0;
      this.moveStartY = 0;
      this.moveStartOffsetX = 0;
      this.moveStartOffsetY = 0; // Snap image back into frame if outside max offset range

      var maxOffsets = this.getMaxOffsets();
      var nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, this.state.offsetX));
      var nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, this.state.offsetY));

      if (nextOffsetX !== this.state.offsetX || nextOffsetY !== this.state.offsetY) {
        this.setState({
          offsetX: nextOffsetX,
          offsetY: nextOffsetY,
          shouldAnimate: true
        });
        this.setTimeout(function () {
          _this11.setState({
            shouldAnimate: false
          });
        }, this.props.animationDuration);
      }
    }
  }, {
    key: "handleSwipeStart",
    value: function handleSwipeStart(_ref6) {
      var clientX = _ref6.x,
          clientY = _ref6.y;
      this.currentAction = ACTION_SWIPE;
      this.swipeStartX = clientX;
      this.swipeStartY = clientY;
      this.swipeEndX = clientX;
      this.swipeEndY = clientY;
    }
  }, {
    key: "handleSwipe",
    value: function handleSwipe(_ref7) {
      var clientX = _ref7.x,
          clientY = _ref7.y;
      this.swipeEndX = clientX;
      this.swipeEndY = clientY;
    }
  }, {
    key: "handleSwipeEnd",
    value: function handleSwipeEnd(event) {
      var xDiff = this.swipeEndX - this.swipeStartX;
      var xDiffAbs = Math.abs(xDiff);
      var yDiffAbs = Math.abs(this.swipeEndY - this.swipeStartY);
      this.currentAction = ACTION_NONE;
      this.swipeStartX = 0;
      this.swipeStartY = 0;
      this.swipeEndX = 0;
      this.swipeEndY = 0;

      if (!event || this.isAnimating() || xDiffAbs < yDiffAbs * 1.5) {
        return;
      }

      if (xDiffAbs < MIN_SWIPE_DISTANCE) {
        var boxRect = this.getLightboxRect();

        if (xDiffAbs < boxRect.width / 4) {
          return;
        }
      }

      if (xDiff > 0 && this.props.prevSrc) {
        event.preventDefault();
        this.requestMovePrev();
      } else if (xDiff < 0 && this.props.nextSrc) {
        event.preventDefault();
        this.requestMoveNext();
      }
    }
  }, {
    key: "calculatePinchDistance",
    value: function calculatePinchDistance() {
      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pinchTouchList,
          _ref9 = _slicedToArray(_ref8, 2),
          a = _ref9[0],
          b = _ref9[1];

      return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }
  }, {
    key: "calculatePinchCenter",
    value: function calculatePinchCenter() {
      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pinchTouchList,
          _ref11 = _slicedToArray(_ref10, 2),
          a = _ref11[0],
          b = _ref11[1];

      return {
        x: a.x - (a.x - b.x) / 2,
        y: a.y - (a.y - b.y) / 2
      };
    }
  }, {
    key: "handlePinchStart",
    value: function handlePinchStart(pointerList) {
      if (!this.props.enableZoom) {
        return;
      }

      this.currentAction = ACTION_PINCH;
      this.pinchTouchList = pointerList.map(function (_ref12) {
        var id = _ref12.id,
            x = _ref12.x,
            y = _ref12.y;
        return {
          id: id,
          x: x,
          y: y
        };
      });
      this.pinchDistance = this.calculatePinchDistance();
    }
  }, {
    key: "handlePinch",
    value: function handlePinch(pointerList) {
      this.pinchTouchList = this.pinchTouchList.map(function (oldPointer) {
        for (var i = 0; i < pointerList.length; i += 1) {
          if (pointerList[i].id === oldPointer.id) {
            return pointerList[i];
          }
        }

        return oldPointer;
      });
      var newDistance = this.calculatePinchDistance();
      var zoomLevel = this.state.zoomLevel + newDistance - this.pinchDistance;
      this.pinchDistance = newDistance;

      var _this$calculatePinchC = this.calculatePinchCenter(this.pinchTouchList),
          clientX = _this$calculatePinchC.x,
          clientY = _this$calculatePinchC.y;

      this.changeZoom(zoomLevel, clientX, clientY);
    }
  }, {
    key: "handlePinchEnd",
    value: function handlePinchEnd() {
      this.currentAction = ACTION_NONE;
      this.pinchTouchList = null;
      this.pinchDistance = 0;
    } // Handle the window resize event

  }, {
    key: "handleWindowResize",
    value: function handleWindowResize() {
      this.clearTimeout(this.resizeTimeout);
      this.resizeTimeout = this.setTimeout(this.forceUpdate.bind(this), 100);
    }
  }, {
    key: "handleZoomInButtonClick",
    value: function handleZoomInButtonClick() {
      var nextZoomLevel = this.state.zoomLevel + ZOOM_BUTTON_INCREMENT_SIZE;
      this.changeZoom(nextZoomLevel);

      if (nextZoomLevel === MAX_ZOOM_LEVEL) {
        this.zoomOutBtn.current.focus();
      }
    }
  }, {
    key: "handleZoomOutButtonClick",
    value: function handleZoomOutButtonClick() {
      var nextZoomLevel = this.state.zoomLevel - ZOOM_BUTTON_INCREMENT_SIZE;
      this.changeZoom(nextZoomLevel);

      if (nextZoomLevel === MIN_ZOOM_LEVEL) {
        this.zoomInBtn.current.focus();
      }
    }
  }, {
    key: "handleCaptionMousewheel",
    value: function handleCaptionMousewheel(event) {
      event.stopPropagation();

      if (!this.caption.current) {
        return;
      }

      var _this$caption$current = this.caption.current.getBoundingClientRect(),
          height = _this$caption$current.height;

      var _this$caption$current2 = this.caption.current,
          scrollHeight = _this$caption$current2.scrollHeight,
          scrollTop = _this$caption$current2.scrollTop;

      if (event.deltaY > 0 && height + scrollTop >= scrollHeight || event.deltaY < 0 && scrollTop <= 0) {
        event.preventDefault();
      }
    } // Detach key and mouse input events

  }, {
    key: "isAnimating",
    value: function isAnimating() {
      return this.state.shouldAnimate || this.state.isClosing;
    } // Check if image is loaded

  }, {
    key: "isImageLoaded",
    value: function isImageLoaded(imageSrc) {
      return imageSrc && imageSrc in this.imageCache && this.imageCache[imageSrc].loaded;
    } // Load image from src and call callback with image width and height on load

  }, {
    key: "loadImage",
    value: function loadImage(srcType, imageSrc, done) {
      var _this12 = this;

      // Return the image info if it is already cached
      if (this.isImageLoaded(imageSrc)) {
        this.setTimeout(function () {
          done();
        }, 1);
        return;
      }

      var inMemoryImage = new global.Image();

      if (this.props.imageCrossOrigin) {
        inMemoryImage.crossOrigin = this.props.imageCrossOrigin;
      }

      inMemoryImage.onerror = function (errorEvent) {
        _this12.props.onImageLoadError(imageSrc, srcType, errorEvent); // failed to load so set the state loadErrorStatus


        _this12.setState(function (prevState) {
          return {
            loadErrorStatus: _objectSpread({}, prevState.loadErrorStatus, _defineProperty({}, srcType, true))
          };
        });

        done(errorEvent);
      };

      inMemoryImage.onload = function () {
        _this12.props.onImageLoad(imageSrc, srcType, inMemoryImage);

        _this12.imageCache[imageSrc] = {
          loaded: true,
          width: inMemoryImage.width,
          height: inMemoryImage.height
        };
        done();
      };

      inMemoryImage.src = imageSrc;
    } // Load all images and their thumbnails

  }, {
    key: "loadAllImages",
    value: function loadAllImages() {
      var _this13 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      var generateLoadDoneCallback = function generateLoadDoneCallback(srcType, imageSrc) {
        return function (err) {
          // Give up showing image on error
          if (err) {
            return;
          } // Don't rerender if the src is not the same as when the load started
          // or if the component has unmounted


          if (_this13.props[srcType] !== imageSrc || _this13.didUnmount) {
            return;
          } // Force rerender with the new image


          _this13.forceUpdate();
        };
      }; // Load the images


      this.getSrcTypes().forEach(function (srcType) {
        var type = srcType.name; // there is no error when we try to load it initially

        if (props[type] && _this13.state.loadErrorStatus[type]) {
          _this13.setState(function (prevState) {
            return {
              loadErrorStatus: _objectSpread({}, prevState.loadErrorStatus, _defineProperty({}, type, false))
            };
          });
        } // Load unloaded images


        if (props[type] && !_this13.isImageLoaded(props[type])) {
          _this13.loadImage(type, props[type], generateLoadDoneCallback(type, props[type]));
        }
      });
    } // Request that the lightbox be closed

  }, {
    key: "requestClose",
    value: function requestClose(event) {
      var _this14 = this;

      // Call the parent close request
      var closeLightbox = function closeLightbox() {
        return _this14.props.onCloseRequest(event);
      };

      if (this.props.animationDisabled || event.type === 'keydown' && !this.props.animationOnKeyInput) {
        // No animation
        closeLightbox();
        return;
      } // With animation
      // Start closing animation


      this.setState({
        isClosing: true
      }); // Perform the actual closing at the end of the animation

      this.setTimeout(closeLightbox, this.props.animationDuration);
    }
  }, {
    key: "requestMove",
    value: function requestMove(direction, event) {
      var _this15 = this;

      // Reset the zoom level on image move
      var nextState = {
        zoomLevel: MIN_ZOOM_LEVEL,
        offsetX: 0,
        offsetY: 0
      }; // Enable animated states

      if (!this.props.animationDisabled && (!this.keyPressed || this.props.animationOnKeyInput)) {
        nextState.shouldAnimate = true;
        this.setTimeout(function () {
          return _this15.setState({
            shouldAnimate: false
          });
        }, this.props.animationDuration);
      }

      this.keyPressed = false;
      this.moveRequested = true;

      if (direction === 'prev') {
        this.keyCounter -= 1;
        this.setState(nextState);
        this.props.onMovePrevRequest(event);
      } else {
        this.keyCounter += 1;
        this.setState(nextState);
        this.props.onMoveNextRequest(event);
      }
    } // Request to transition to the next image

  }, {
    key: "requestMoveNext",
    value: function requestMoveNext(event) {
      this.requestMove('next', event);
    } // Request to transition to the previous image

  }, {
    key: "requestMovePrev",
    value: function requestMovePrev(event) {
      this.requestMove('prev', event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this16 = this;

      var _this$props = this.props,
          animationDisabled = _this$props.animationDisabled,
          animationDuration = _this$props.animationDuration,
          clickOutsideToClose = _this$props.clickOutsideToClose,
          discourageDownloads = _this$props.discourageDownloads,
          enableZoom = _this$props.enableZoom,
          imageTitle = _this$props.imageTitle,
          nextSrc = _this$props.nextSrc,
          prevSrc = _this$props.prevSrc,
          toolbarButtons = _this$props.toolbarButtons,
          reactModalStyle = _this$props.reactModalStyle,
          _onAfterOpen = _this$props.onAfterOpen,
          imageCrossOrigin = _this$props.imageCrossOrigin,
          reactModalProps = _this$props.reactModalProps;
      var _this$state = this.state,
          zoomLevel = _this$state.zoomLevel,
          offsetX = _this$state.offsetX,
          offsetY = _this$state.offsetY,
          isClosing = _this$state.isClosing,
          loadErrorStatus = _this$state.loadErrorStatus;
      var boxSize = this.getLightboxRect();
      var transitionStyle = {}; // Transition settings for sliding animations

      if (!animationDisabled && this.isAnimating()) {
        transitionStyle = _objectSpread({}, transitionStyle, {
          transition: "transform ".concat(animationDuration, "ms")
        });
      } // Key endings to differentiate between images with the same src


      var keyEndings = {};
      this.getSrcTypes().forEach(function (_ref13) {
        var name = _ref13.name,
            keyEnding = _ref13.keyEnding;
        keyEndings[name] = keyEnding;
      }); // Images to be displayed

      var images = [];

      var addImage = function addImage(srcType, imageClass, transforms) {
        // Ignore types that have no source defined for their full size image
        if (!_this16.props[srcType]) {
          return;
        }

        var bestImageInfo = _this16.getBestImageForType(srcType);

        var imageStyle = _objectSpread({}, transitionStyle, ReactImageLightbox.getTransform(_objectSpread({}, transforms, bestImageInfo)));

        if (zoomLevel > MIN_ZOOM_LEVEL) {
          imageStyle.cursor = 'move';
        } // support IE 9 and 11


        var hasTrueValue = function hasTrueValue(object) {
          return Object.keys(object).some(function (key) {
            return object[key];
          });
        }; // when error on one of the loads then push custom error stuff


        if (bestImageInfo === null && hasTrueValue(loadErrorStatus)) {
          images.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "".concat(imageClass, " ril__image ril-errored"),
            style: imageStyle,
            key: _this16.props[srcType] + keyEndings[srcType]
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ril__errorContainer"
          }, _this16.props.imageLoadErrorMessage)));
          return;
        }

        if (bestImageInfo === null) {
          var loadingIcon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ril-loading-circle ril__loadingCircle ril__loadingContainer__icon"
          }, _toConsumableArray(new Array(12)).map(function (_, index) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              // eslint-disable-next-line react/no-array-index-key
              key: index,
              className: "ril-loading-circle-point ril__loadingCirclePoint"
            });
          })); // Fall back to loading icon if the thumbnail has not been loaded

          images.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "".concat(imageClass, " ril__image ril-not-loaded"),
            style: imageStyle,
            key: _this16.props[srcType] + keyEndings[srcType]
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ril__loadingContainer"
          }, loadingIcon)));
          return;
        }

        var imageSrc = bestImageInfo.src;

        if (discourageDownloads) {
          imageStyle.backgroundImage = "url('".concat(imageSrc, "')");
          images.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "".concat(imageClass, " ril__image ril__imageDiscourager"),
            onDoubleClick: _this16.handleImageDoubleClick,
            onWheel: _this16.handleImageMouseWheel,
            style: imageStyle,
            key: imageSrc + keyEndings[srcType]
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ril-download-blocker ril__downloadBlocker"
          })));
        } else {
          images.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", _extends({}, imageCrossOrigin ? {
            crossOrigin: imageCrossOrigin
          } : {}, {
            className: "".concat(imageClass, " ril__image"),
            onDoubleClick: _this16.handleImageDoubleClick,
            onWheel: _this16.handleImageMouseWheel,
            onDragStart: function onDragStart(e) {
              return e.preventDefault();
            },
            style: imageStyle,
            src: imageSrc,
            key: imageSrc + keyEndings[srcType],
            alt: typeof imageTitle === 'string' ? imageTitle : translate('Image'),
            draggable: false
          })));
        }
      };

      var zoomMultiplier = this.getZoomMultiplier(); // Next Image (displayed on the right)

      addImage('nextSrc', 'ril-image-next ril__imageNext', {
        x: boxSize.width
      }); // Main Image

      addImage('mainSrc', 'ril-image-current', {
        x: -1 * offsetX,
        y: -1 * offsetY,
        zoom: zoomMultiplier
      }); // Previous Image (displayed on the left)

      addImage('prevSrc', 'ril-image-prev ril__imagePrev', {
        x: -1 * boxSize.width
      });
      var modalStyle = {
        overlay: _objectSpread({
          zIndex: 1000,
          backgroundColor: 'transparent'
        }, reactModalStyle.overlay),
        content: _objectSpread({
          backgroundColor: 'transparent',
          overflow: 'hidden',
          // Needed, otherwise keyboard shortcuts scroll the page
          border: 'none',
          borderRadius: 0,
          padding: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }, reactModalStyle.content)
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
        isOpen: true,
        onRequestClose: clickOutsideToClose ? this.requestClose : undefined,
        onAfterOpen: function onAfterOpen() {
          // Focus on the div with key handlers
          if (_this16.outerEl.current) {
            _this16.outerEl.current.focus();
          }

          _onAfterOpen();
        },
        style: modalStyle,
        contentLabel: translate('Lightbox'),
        appElement: typeof global.window !== 'undefined' ? global.window.document.body : undefined
      }, reactModalProps), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        // eslint-disable-line jsx-a11y/no-static-element-interactions
        // Floating modal with closing animations
        className: "ril-outer ril__outer ril__outerAnimating ".concat(this.props.wrapperClassName, " ").concat(isClosing ? 'ril-closing ril__outerClosing' : ''),
        style: {
          transition: "opacity ".concat(animationDuration, "ms"),
          animationDuration: "".concat(animationDuration, "ms"),
          animationDirection: isClosing ? 'normal' : 'reverse'
        },
        ref: this.outerEl,
        onWheel: this.handleOuterMousewheel,
        onMouseMove: this.handleMouseMove,
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        tabIndex: "-1" // Enables key handlers on div
        ,
        onKeyDown: this.handleKeyInput,
        onKeyUp: this.handleKeyInput
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        // eslint-disable-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        // Image holder
        className: "ril-inner ril__inner",
        onClick: clickOutsideToClose ? this.closeIfClickInner : undefined
      }, images), prevSrc && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        // Move to previous image button
        type: "button",
        className: "ril-prev-button ril__navButtons ril__navButtonPrev",
        key: "prev",
        "aria-label": this.props.prevLabel,
        onClick: !this.isAnimating() ? this.requestMovePrev : undefined // Ignore clicks during animation

      }), nextSrc && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        // Move to next image button
        type: "button",
        className: "ril-next-button ril__navButtons ril__navButtonNext",
        key: "next",
        "aria-label": this.props.nextLabel,
        onClick: !this.isAnimating() ? this.requestMoveNext : undefined // Ignore clicks during animation

      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        // Lightbox toolbar
        className: "ril-toolbar ril__toolbar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "ril-toolbar-left ril__toolbarSide ril__toolbarLeftSide"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ril-toolbar__item__child ril__toolbarItemChild"
      }, imageTitle))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "ril-toolbar-right ril__toolbarSide ril__toolbarRightSide"
      }, toolbarButtons && toolbarButtons.map(function (button, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: "button_".concat(i + 1),
          className: "ril-toolbar__item ril__toolbarItem"
        }, button);
      }), enableZoom && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        // Lightbox zoom in button
        type: "button",
        key: "zoom-in",
        "aria-label": this.props.zoomInLabel,
        className: ['ril-zoom-in', 'ril__toolbarItemChild', 'ril__builtinButton', 'ril__zoomInButton'].concat(_toConsumableArray(zoomLevel === MAX_ZOOM_LEVEL ? ['ril__builtinButtonDisabled'] : [])).join(' '),
        ref: this.zoomInBtn,
        disabled: this.isAnimating() || zoomLevel === MAX_ZOOM_LEVEL,
        onClick: !this.isAnimating() && zoomLevel !== MAX_ZOOM_LEVEL ? this.handleZoomInButtonClick : undefined
      })), enableZoom && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        // Lightbox zoom out button
        type: "button",
        key: "zoom-out",
        "aria-label": this.props.zoomOutLabel,
        className: ['ril-zoom-out', 'ril__toolbarItemChild', 'ril__builtinButton', 'ril__zoomOutButton'].concat(_toConsumableArray(zoomLevel === MIN_ZOOM_LEVEL ? ['ril__builtinButtonDisabled'] : [])).join(' '),
        ref: this.zoomOutBtn,
        disabled: this.isAnimating() || zoomLevel === MIN_ZOOM_LEVEL,
        onClick: !this.isAnimating() && zoomLevel !== MIN_ZOOM_LEVEL ? this.handleZoomOutButtonClick : undefined
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        // Lightbox close button
        type: "button",
        key: "close",
        "aria-label": this.props.closeLabel,
        className: "ril-close ril-toolbar__item__child ril__toolbarItemChild ril__builtinButton ril__closeButton",
        onClick: !this.isAnimating() ? this.requestClose : undefined // Ignore clicks during animation

      })))), this.props.imageCaption && // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        // Image caption
        onWheel: this.handleCaptionMousewheel,
        onMouseDown: function onMouseDown(event) {
          return event.stopPropagation();
        },
        className: "ril-caption ril__caption",
        ref: this.caption
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ril-caption-content ril__captionContent"
      }, this.props.imageCaption))));
    }
  }]);

  return ReactImageLightbox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ReactImageLightbox.propTypes = {
  //-----------------------------
  // Image sources
  //-----------------------------
  // Main display image url
  mainSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  // eslint-disable-line react/no-unused-prop-types
  // Previous display image url (displayed to the left)
  // If left undefined, movePrev actions will not be performed, and the button not displayed
  prevSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // Next display image url (displayed to the right)
  // If left undefined, moveNext actions will not be performed, and the button not displayed
  nextSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  //-----------------------------
  // Image thumbnail sources
  //-----------------------------
  // Thumbnail image url corresponding to props.mainSrc
  mainSrcThumbnail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // eslint-disable-line react/no-unused-prop-types
  // Thumbnail image url corresponding to props.prevSrc
  prevSrcThumbnail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // eslint-disable-line react/no-unused-prop-types
  // Thumbnail image url corresponding to props.nextSrc
  nextSrcThumbnail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // eslint-disable-line react/no-unused-prop-types
  //-----------------------------
  // Event Handlers
  //-----------------------------
  // Close window event
  // Should change the parent state such that the lightbox is not rendered
  onCloseRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  // Move to previous image event
  // Should change the parent state such that props.prevSrc becomes props.mainSrc,
  //  props.mainSrc becomes props.nextSrc, etc.
  onMovePrevRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // Move to next image event
  // Should change the parent state such that props.nextSrc becomes props.mainSrc,
  //  props.mainSrc becomes props.prevSrc, etc.
  onMoveNextRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // Called when an image fails to load
  // (imageSrc: string, srcType: string, errorEvent: object): void
  onImageLoadError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // Called when image successfully loads
  onImageLoad: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // Open window event
  onAfterOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  //-----------------------------
  // Download discouragement settings
  //-----------------------------
  // Enable download discouragement (prevents [right-click -> Save Image As...])
  discourageDownloads: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  //-----------------------------
  // Animation settings
  //-----------------------------
  // Disable all animation
  animationDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // Disable animation on actions performed with keyboard shortcuts
  animationOnKeyInput: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // Animation duration (ms)
  animationDuration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  //-----------------------------
  // Keyboard shortcut settings
  //-----------------------------
  // Required interval of time (ms) between key actions
  // (prevents excessively fast navigation of images)
  keyRepeatLimit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  // Amount of time (ms) restored after each keyup
  // (makes rapid key presses slightly faster than holding down the key to navigate images)
  keyRepeatKeyupBonus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  //-----------------------------
  // Image info
  //-----------------------------
  // Image title
  imageTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  // Image caption
  imageCaption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  // Optional crossOrigin attribute
  imageCrossOrigin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  //-----------------------------
  // Lightbox style
  //-----------------------------
  // Set z-index style, etc., for the parent react-modal (format: https://github.com/reactjs/react-modal#styles )
  reactModalStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}),
  // Padding (px) between the edge of the window and the lightbox
  imagePadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  //-----------------------------
  // Other
  //-----------------------------
  // Array of custom toolbar buttons
  toolbarButtons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node),
  // When true, clicks outside of the image close the lightbox
  clickOutsideToClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // Set to false to disable zoom functionality and hide zoom buttons
  enableZoom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // Override props set on react-modal (https://github.com/reactjs/react-modal)
  reactModalProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}),
  // Aria-labels
  nextLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  prevLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  zoomInLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  zoomOutLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  closeLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  imageLoadErrorMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
ReactImageLightbox.defaultProps = {
  imageTitle: null,
  imageCaption: null,
  toolbarButtons: null,
  reactModalProps: {},
  animationDisabled: false,
  animationDuration: 300,
  animationOnKeyInput: false,
  clickOutsideToClose: true,
  closeLabel: 'Close lightbox',
  discourageDownloads: false,
  enableZoom: true,
  imagePadding: 10,
  imageCrossOrigin: null,
  keyRepeatKeyupBonus: 40,
  keyRepeatLimit: 180,
  mainSrcThumbnail: null,
  nextLabel: 'Next image',
  nextSrc: null,
  nextSrcThumbnail: null,
  onAfterOpen: function onAfterOpen() {},
  onImageLoadError: function onImageLoadError() {},
  onImageLoad: function onImageLoad() {},
  onMoveNextRequest: function onMoveNextRequest() {},
  onMovePrevRequest: function onMovePrevRequest() {},
  prevLabel: 'Previous image',
  prevSrc: null,
  prevSrcThumbnail: null,
  reactModalStyle: {},
  wrapperClassName: '',
  zoomInLabel: 'Zoom in',
  zoomOutLabel: 'Zoom out',
  imageLoadErrorMessage: 'This image failed to load'
};

/* harmony default export */ __webpack_exports__["default"] = (ReactImageLightbox);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/components/Modal.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-image-lightbox/node_modules/react-modal/lib/components/Modal.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(/*! ./ModalPortal */ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/components/ModalPortal.js");

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _reactDom2.default.createPortal !== undefined;

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      parent.removeChild(_this.node);
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  parentSelector: function parentSelector() {
    return document.body;
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, _reactLifecyclesCompat.polyfill)(Modal);

exports.default = Modal;

/***/ }),

/***/ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/components/ModalPortal.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-image-lightbox/node_modules/react-modal/lib/components/ModalPortal.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(/*! ../helpers/focusManager */ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/focusManager.js");

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(/*! ../helpers/scopeTab */ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/scopeTab.js");

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = __webpack_require__(/*! ../helpers/classList */ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/classList.js");

var classList = _interopRequireWildcard(_classList);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName;

      // Remove classes.

      bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus();
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.setState({ afterOpen: true });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen({
              overlayEl: _this.overlay,
              contentEl: _this.content
            });
          }
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus();
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (true) {
        if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
        if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
      }

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        this.afterClose();
      }
      clearTimeout(this.closeTimer);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName;

      // Add classes.

      bodyOpenClassName && classList.add(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      return this.shouldBeClosed() ? null : _react2.default.createElement(
        "div",
        {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", overlayClassName),
          style: _extends({}, overlayStyles, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        },
        _react2.default.createElement(
          "div",
          _extends({
            id: id,
            ref: this.setContentRef,
            style: _extends({}, contentStyles, this.props.style.content),
            className: this.buildClassName("content", className),
            tabIndex: "-1",
            onKeyDown: this.handleKeyDown,
            onMouseDown: this.handleContentOnMouseDown,
            onMouseUp: this.handleContentOnMouseUp,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            "aria-label": this.props.contentLabel
          }, this.attributesFromObject("aria", this.props.aria || {}), this.attributesFromObject("data", this.props.data || {}), {
            "data-testid": this.props.testId
          }),
          this.props.children
        )
      );
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onAfterClose: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  testId: _propTypes2.default.string
};
exports.default = ModalPortal;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/ariaAppHider.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/ariaAppHider.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _safeHTMLElement = __webpack_require__(/*! ./safeHTMLElement */ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/safeHTMLElement.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = "length" in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  if (!appElement && !globalElement) {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return false;
  }

  return true;
}

function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute("aria-hidden", "true");
  }
}

function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute("aria-hidden");
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = null;
}

/***/ }),

/***/ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/classList.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/classList.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dumpClassLists = dumpClassLists;
var htmlClassList = {};
var docBodyClassList = {};

function dumpClassLists() {
  if (true) {
    var classes = document.getElementsByTagName("html")[0].className;
    var buffer = "Show tracked classes:\n\n";

    buffer += "<html /> (" + classes + "):\n";
    for (var x in htmlClassList) {
      buffer += "  " + x + " " + htmlClassList[x] + "\n";
    }

    classes = document.body.className;

    // eslint-disable-next-line max-len
    buffer += "\n\ndoc.body (" + classes + "):\n";
    for (var _x in docBodyClassList) {
      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n";
    }

    buffer += "\n";

    // eslint-disable-next-line no-console
    console.log(buffer);
  }
}

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/***/ }),

/***/ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/focusManager.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/focusManager.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(/*! ../helpers/tabbable */ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus();
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),

/***/ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/safeHTMLElement.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/safeHTMLElement.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = undefined;

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports.default = SafeHTMLElement;

/***/ }),

/***/ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/scopeTab.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/scopeTab.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;

var _tabbable = __webpack_require__(/*! ./tabbable */ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === document.activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  var target;
  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(document.activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  // If the tabbable element does not exist,
  // focus head/tail based on shiftKey
  if (typeof tabbable[x] === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();

  tabbable[x].focus();
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/tabbable.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-image-lightbox/node_modules/react-modal/lib/helpers/tabbable.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  // Otherwise we need to check some styles
  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue("overflow") !== "visible" ||
  // if 'overflow: visible' set, check if there is actually any overflow
  element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
}

function visible(element) {
  var parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-image-lightbox/node_modules/react-modal/lib/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(/*! ./components/Modal */ "./node_modules/react-image-lightbox/node_modules/react-modal/lib/components/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
module.exports = exports["default"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWltYWdlLWxpZ2h0Ym94L2Rpc3QvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWltYWdlLWxpZ2h0Ym94L25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvY29tcG9uZW50cy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW1hZ2UtbGlnaHRib3gvbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9jb21wb25lbnRzL01vZGFsUG9ydGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbWFnZS1saWdodGJveC9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvYXJpYUFwcEhpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbWFnZS1saWdodGJveC9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvY2xhc3NMaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbWFnZS1saWdodGJveC9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvZm9jdXNNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbWFnZS1saWdodGJveC9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvc2FmZUhUTUxFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbWFnZS1saWdodGJveC9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvc2NvcGVUYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWltYWdlLWxpZ2h0Ym94L25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy90YWJiYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW1hZ2UtbGlnaHRib3gvbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEtBQUssSUFBNEU7QUFDakYsRUFBRSxtQ0FBTztBQUNUO0FBQ0EsR0FBRztBQUFBLG9HQUFDO0FBQ0osRUFBRSxNQUFNLEVBSU47O0FBRUYsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3RDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUNOO0FBQ0g7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUwsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0U7OztBQUd0RTtBQUNBO0FBQ0EsNkNBQTZDLCtDQUErQztBQUM1RjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7OztBQUdBO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywrQ0FBK0M7QUFDOUY7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUwsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjs7QUFFL0I7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlDQUF5QyxtRUFBbUU7O0FBRTVHO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTs7O0FBR1Y7QUFDQSxzQkFBc0IsNENBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFLDRDQUFLO0FBQ2xCO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsNENBQUs7QUFDakM7QUFDQSxXQUFXO0FBQ1gsbUJBQW1CLDRDQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXLEdBQUc7O0FBRWQsc0JBQXNCLDRDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRSw0Q0FBSztBQUNsQjtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsNENBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRSw0Q0FBSztBQUNsQjtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Qsc0JBQXNCLDRDQUFLLGlDQUFpQztBQUM1RDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQSxPQUFPLEVBQUU7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEVBQUU7O0FBRVQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsYUFBYSw0Q0FBSyxlQUFlLGtEQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0JBQW9CLDRDQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUFFLDRDQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHNCQUFzQiw0Q0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxjQUFjLDRDQUFLO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLEdBQUcsNENBQUs7QUFDZjtBQUNBO0FBQ0EsT0FBTyxFQUFFLDRDQUFLO0FBQ2Q7QUFDQSxPQUFPLEVBQUUsNENBQUs7QUFDZDtBQUNBLE9BQU8sRUFBRSw0Q0FBSztBQUNkO0FBQ0EsT0FBTyxpQkFBaUIsNENBQUs7QUFDN0I7QUFDQSxPQUFPO0FBQ1AsZUFBZSw0Q0FBSztBQUNwQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU8saUJBQWlCLDRDQUFLO0FBQzdCO0FBQ0EsT0FBTyxFQUFFLDRDQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0JBQWtCLDRDQUFLO0FBQzlCO0FBQ0EsT0FBTyxFQUFFLDRDQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBSSw0Q0FBSztBQUNoQjtBQUNBLE9BQU8sRUFBRSw0Q0FBSztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1AsTUFBTSw0Q0FBSztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPLEVBQUUsNENBQUs7QUFDZDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDLENBQUMsK0NBQVM7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaURBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpREFBUztBQUNwQjtBQUNBO0FBQ0EsV0FBVyxpREFBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBUztBQUM3QjtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFTO0FBQzdCO0FBQ0E7QUFDQSxvQkFBb0IsaURBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQVM7QUFDOUI7QUFDQTtBQUNBLG9CQUFvQixpREFBUztBQUM3QjtBQUNBLGVBQWUsaURBQVM7QUFDeEI7QUFDQSxlQUFlLGlEQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFTO0FBQzlCO0FBQ0EsdUJBQXVCLGlEQUFTO0FBQ2hDO0FBQ0EscUJBQXFCLGlEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaURBQVM7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QixpREFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaURBQVM7QUFDdkI7QUFDQSxnQkFBZ0IsaURBQVM7QUFDekI7QUFDQSxvQkFBb0IsaURBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaURBQVMsU0FBUztBQUNyQztBQUNBLGdCQUFnQixpREFBUztBQUN6QixvQkFBb0IsaURBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaURBQVMsU0FBUyxpREFBUztBQUM3QztBQUNBLHVCQUF1QixpREFBUztBQUNoQztBQUNBLGNBQWMsaURBQVM7QUFDdkI7QUFDQSxtQkFBbUIsaURBQVMsU0FBUztBQUNyQztBQUNBLGFBQWEsaURBQVM7QUFDdEIsYUFBYSxpREFBUztBQUN0QixlQUFlLGlEQUFTO0FBQ3hCLGdCQUFnQixpREFBUztBQUN6QixjQUFjLGlEQUFTO0FBQ3ZCLHlCQUF5QixpREFBUztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxrREFBa0Q7QUFDbEQsd0NBQXdDO0FBQ3hDLG9EQUFvRDtBQUNwRCxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsaUZBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDdjlEckI7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsYUFBYSxtQkFBTyxDQUFDLDRDQUFPOztBQUU1Qjs7QUFFQSxnQkFBZ0IsbUJBQU8sQ0FBQyxvREFBVzs7QUFFbkM7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsc0RBQVk7O0FBRXJDOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLGlIQUFlOztBQUUxQzs7QUFFQSxvQkFBb0IsbUJBQU8sQ0FBQyx5SEFBeUI7O0FBRXJEOztBQUVBLHVCQUF1QixtQkFBTyxDQUFDLCtIQUE0Qjs7QUFFM0Q7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMscUdBQXlCOztBQUU5RCx1Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1Esc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0dBQXNHLHFDQUFxQztBQUMzSTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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InNvdXJjZXNDb250ZW50IjpbIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgQmFzZWQgb24gY29kZSB0aGF0IGlzIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGNhblVzZURPTSA9ICEhKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93LmRvY3VtZW50ICYmXG5cdFx0d2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcblx0KTtcblxuXHR2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cblx0XHRjYW5Vc2VET006IGNhblVzZURPTSxcblxuXHRcdGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG5cdFx0Y2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG5cdFx0XHRjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuXHRcdGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuXG5cblx0fTtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5FeGVjdXRpb25FbnZpcm9ubWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9XG5cbn0oKSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG4vKipcbiAqIFBsYWNlaG9sZGVyIGZvciBmdXR1cmUgdHJhbnNsYXRlIGZ1bmN0aW9uYWxpdHlcbiAqL1xuZnVuY3Rpb24gdHJhbnNsYXRlKHN0cikge1xuICB2YXIgcmVwbGFjZVN0cmluZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG5cbiAgaWYgKCFzdHIpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgdHJhbnNsYXRlZCA9IHN0cjtcblxuICBpZiAocmVwbGFjZVN0cmluZ3MpIHtcbiAgICBPYmplY3Qua2V5cyhyZXBsYWNlU3RyaW5ncykuZm9yRWFjaChmdW5jdGlvbiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIHRyYW5zbGF0ZWQgPSB0cmFuc2xhdGVkLnJlcGxhY2UocGxhY2Vob2xkZXIsIHJlcGxhY2VTdHJpbmdzW3BsYWNlaG9sZGVyXSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdHJhbnNsYXRlZDtcbn1cbmZ1bmN0aW9uIGdldFdpbmRvd1dpZHRoKCkge1xuICByZXR1cm4gdHlwZW9mIGdsb2JhbC53aW5kb3cgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsLndpbmRvdy5pbm5lcldpZHRoIDogMDtcbn1cbmZ1bmN0aW9uIGdldFdpbmRvd0hlaWdodCgpIHtcbiAgcmV0dXJuIHR5cGVvZiBnbG9iYWwud2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbC53aW5kb3cuaW5uZXJIZWlnaHQgOiAwO1xufSAvLyBHZXQgdGhlIGhpZ2hlc3Qgd2luZG93IGNvbnRleHQgdGhhdCBpc24ndCBjcm9zcy1vcmlnaW5cbi8vIChXaGVuIGluIGFuIGlmcmFtZSlcblxuZnVuY3Rpb24gZ2V0SGlnaGVzdFNhZmVXaW5kb3dDb250ZXh0KCkge1xuICB2YXIgc2VsZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZ2xvYmFsLndpbmRvdy5zZWxmO1xuICB2YXIgcmVmZXJyZXIgPSBzZWxmLmRvY3VtZW50LnJlZmVycmVyOyAvLyBJZiB3ZSByZWFjaGVkIHRoZSB0b3AgbGV2ZWwsIHJldHVybiBzZWxmXG5cbiAgaWYgKHNlbGYgPT09IGdsb2JhbC53aW5kb3cudG9wIHx8ICFyZWZlcnJlcikge1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgdmFyIGdldE9yaWdpbiA9IGZ1bmN0aW9uIGdldE9yaWdpbihocmVmKSB7XG4gICAgcmV0dXJuIGhyZWYubWF0Y2goLyguKlxcL1xcLy4qPykoXFwvfCQpLylbMV07XG4gIH07IC8vIElmIHBhcmVudCBpcyB0aGUgc2FtZSBvcmlnaW4sIHdlIGNhbiBtb3ZlIHVwIG9uZSBjb250ZXh0XG4gIC8vIFJlZmVyZW5jZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxOTY1MzQyLzE2MDE5NTNcblxuXG4gIGlmIChnZXRPcmlnaW4oc2VsZi5sb2NhdGlvbi5ocmVmKSA9PT0gZ2V0T3JpZ2luKHJlZmVycmVyKSkge1xuICAgIHJldHVybiBnZXRIaWdoZXN0U2FmZVdpbmRvd0NvbnRleHQoc2VsZi5wYXJlbnQpO1xuICB9IC8vIElmIGEgZGlmZmVyZW50IG9yaWdpbiwgd2UgY29uc2lkZXIgdGhlIGN1cnJlbnQgbGV2ZWxcbiAgLy8gYXMgdGhlIHRvcCByZWFjaGFibGUgb25lXG5cblxuICByZXR1cm4gc2VsZjtcbn1cblxuLy8gTWluIGltYWdlIHpvb20gbGV2ZWxcbnZhciBNSU5fWk9PTV9MRVZFTCA9IDA7IC8vIE1heCBpbWFnZSB6b29tIGxldmVsXG5cbnZhciBNQVhfWk9PTV9MRVZFTCA9IDMwMDsgLy8gU2l6ZSByYXRpbyBiZXR3ZWVuIHByZXZpb3VzIGFuZCBuZXh0IHpvb20gbGV2ZWxzXG5cbnZhciBaT09NX1JBVElPID0gMS4wMDc7IC8vIEhvdyBtdWNoIHRvIGluY3JlYXNlL2RlY3JlYXNlIHRoZSB6b29tIGxldmVsIHdoZW4gdGhlIHpvb20gYnV0dG9ucyBhcmUgY2xpY2tlZFxuXG52YXIgWk9PTV9CVVRUT05fSU5DUkVNRU5UX1NJWkUgPSAxMDA7IC8vIFVzZWQgdG8ganVkZ2UgdGhlIGFtb3VudCBvZiBob3Jpem9udGFsIHNjcm9sbCBuZWVkZWQgdG8gaW5pdGlhdGUgYSBpbWFnZSBtb3ZlXG5cbnZhciBXSEVFTF9NT1ZFX1hfVEhSRVNIT0xEID0gMjAwOyAvLyBVc2VkIHRvIGp1ZGdlIHRoZSBhbW91bnQgb2YgdmVydGljYWwgc2Nyb2xsIG5lZWRlZCB0byBpbml0aWF0ZSBhIHpvb20gYWN0aW9uXG5cbnZhciBXSEVFTF9NT1ZFX1lfVEhSRVNIT0xEID0gMTtcbnZhciBLRVlTID0ge1xuICBFU0M6IDI3LFxuICBMRUZUX0FSUk9XOiAzNyxcbiAgUklHSFRfQVJST1c6IDM5XG59OyAvLyBBY3Rpb25zXG5cbnZhciBBQ1RJT05fTk9ORSA9IDA7XG52YXIgQUNUSU9OX01PVkUgPSAxO1xudmFyIEFDVElPTl9TV0lQRSA9IDI7XG52YXIgQUNUSU9OX1BJTkNIID0gMztcblxudmFyIFNPVVJDRV9BTlkgPSAwO1xudmFyIFNPVVJDRV9NT1VTRSA9IDE7XG52YXIgU09VUkNFX1RPVUNIID0gMjtcbnZhciBTT1VSQ0VfUE9JTlRFUiA9IDM7IC8vIE1pbmltYWwgc3dpcGUgZGlzdGFuY2VcblxudmFyIE1JTl9TV0lQRV9ESVNUQU5DRSA9IDIwMDtcblxudmFyIFJlYWN0SW1hZ2VMaWdodGJveCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmVhY3RJbWFnZUxpZ2h0Ym94LCBfQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoUmVhY3RJbWFnZUxpZ2h0Ym94LCBudWxsLCBbe1xuICAgIGtleTogXCJpc1RhcmdldE1hdGNoSW1hZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNUYXJnZXRNYXRjaEltYWdlKHRhcmdldCkge1xuICAgICAgcmV0dXJuIHRhcmdldCAmJiAvcmlsLWltYWdlLWN1cnJlbnQvLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBhcnNlTW91c2VFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZU1vdXNlRXZlbnQobW91c2VFdmVudCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6ICdtb3VzZScsXG4gICAgICAgIHNvdXJjZTogU09VUkNFX01PVVNFLFxuICAgICAgICB4OiBwYXJzZUludChtb3VzZUV2ZW50LmNsaWVudFgsIDEwKSxcbiAgICAgICAgeTogcGFyc2VJbnQobW91c2VFdmVudC5jbGllbnRZLCAxMClcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBhcnNlVG91Y2hQb2ludGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlVG91Y2hQb2ludGVyKHRvdWNoUG9pbnRlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHRvdWNoUG9pbnRlci5pZGVudGlmaWVyLFxuICAgICAgICBzb3VyY2U6IFNPVVJDRV9UT1VDSCxcbiAgICAgICAgeDogcGFyc2VJbnQodG91Y2hQb2ludGVyLmNsaWVudFgsIDEwKSxcbiAgICAgICAgeTogcGFyc2VJbnQodG91Y2hQb2ludGVyLmNsaWVudFksIDEwKVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicGFyc2VQb2ludGVyRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2VQb2ludGVyRXZlbnQocG9pbnRlckV2ZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogcG9pbnRlckV2ZW50LnBvaW50ZXJJZCxcbiAgICAgICAgc291cmNlOiBTT1VSQ0VfUE9JTlRFUixcbiAgICAgICAgeDogcGFyc2VJbnQocG9pbnRlckV2ZW50LmNsaWVudFgsIDEwKSxcbiAgICAgICAgeTogcGFyc2VJbnQocG9pbnRlckV2ZW50LmNsaWVudFksIDEwKVxuICAgICAgfTtcbiAgICB9IC8vIFJlcXVlc3QgdG8gdHJhbnNpdGlvbiB0byB0aGUgcHJldmlvdXMgaW1hZ2VcblxuICB9LCB7XG4gICAga2V5OiBcImdldFRyYW5zZm9ybVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUcmFuc2Zvcm0oX3JlZikge1xuICAgICAgdmFyIF9yZWYkeCA9IF9yZWYueCxcbiAgICAgICAgICB4ID0gX3JlZiR4ID09PSB2b2lkIDAgPyAwIDogX3JlZiR4LFxuICAgICAgICAgIF9yZWYkeSA9IF9yZWYueSxcbiAgICAgICAgICB5ID0gX3JlZiR5ID09PSB2b2lkIDAgPyAwIDogX3JlZiR5LFxuICAgICAgICAgIF9yZWYkem9vbSA9IF9yZWYuem9vbSxcbiAgICAgICAgICB6b29tID0gX3JlZiR6b29tID09PSB2b2lkIDAgPyAxIDogX3JlZiR6b29tLFxuICAgICAgICAgIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgICAgICB0YXJnZXRXaWR0aCA9IF9yZWYudGFyZ2V0V2lkdGg7XG4gICAgICB2YXIgbmV4dFggPSB4O1xuICAgICAgdmFyIHdpbmRvd1dpZHRoID0gZ2V0V2luZG93V2lkdGgoKTtcblxuICAgICAgaWYgKHdpZHRoID4gd2luZG93V2lkdGgpIHtcbiAgICAgICAgbmV4dFggKz0gKHdpbmRvd1dpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNjYWxlRmFjdG9yID0gem9vbSAqICh0YXJnZXRXaWR0aCAvIHdpZHRoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZChcIi5jb25jYXQobmV4dFgsIFwicHgsXCIpLmNvbmNhdCh5LCBcInB4LDApIHNjYWxlM2QoXCIpLmNvbmNhdChzY2FsZUZhY3RvciwgXCIsXCIpLmNvbmNhdChzY2FsZUZhY3RvciwgXCIsMSlcIilcbiAgICAgIH07XG4gICAgfVxuICB9XSk7XG5cbiAgZnVuY3Rpb24gUmVhY3RJbWFnZUxpZ2h0Ym94KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlYWN0SW1hZ2VMaWdodGJveCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihSZWFjdEltYWdlTGlnaHRib3gpLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIEFuaW1hdGlvblxuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gTGlnaHRib3ggaXMgY2xvc2luZ1xuICAgICAgLy8gV2hlbiBMaWdodGJveCBpcyBtb3VudGVkLCBpZiBhbmltYXRpb24gaXMgZW5hYmxlZCBpdCB3aWxsIG9wZW4gd2l0aCB0aGUgcmV2ZXJzZSBvZiB0aGUgY2xvc2luZyBhbmltYXRpb25cbiAgICAgIGlzQ2xvc2luZzogIXByb3BzLmFuaW1hdGlvbkRpc2FibGVkLFxuICAgICAgLy8gQ29tcG9uZW50IHBhcnRzIHNob3VsZCBhbmltYXRlIChlLmcuLCB3aGVuIGltYWdlcyBhcmUgbW92aW5nLCBvciBpbWFnZSBpcyBiZWluZyB6b29tZWQpXG4gICAgICBzaG91bGRBbmltYXRlOiBmYWxzZSxcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIFpvb20gc2V0dGluZ3NcbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIFpvb20gbGV2ZWwgb2YgaW1hZ2VcbiAgICAgIHpvb21MZXZlbDogTUlOX1pPT01fTEVWRUwsXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBJbWFnZSBwb3NpdGlvbiBzZXR0aW5nc1xuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gSG9yaXpvbnRhbCBvZmZzZXQgZnJvbSBjZW50ZXJcbiAgICAgIG9mZnNldFg6IDAsXG4gICAgICAvLyBWZXJ0aWNhbCBvZmZzZXQgZnJvbSBjZW50ZXJcbiAgICAgIG9mZnNldFk6IDAsXG4gICAgICAvLyBpbWFnZSBsb2FkIGVycm9yIGZvciBzcmNUeXBlXG4gICAgICBsb2FkRXJyb3JTdGF0dXM6IHt9XG4gICAgfTsgLy8gUmVmc1xuXG4gICAgX3RoaXMub3V0ZXJFbCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIF90aGlzLnpvb21JbkJ0biA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIF90aGlzLnpvb21PdXRCdG4gPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBfdGhpcy5jYXB0aW9uID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgX3RoaXMuY2xvc2VJZkNsaWNrSW5uZXIgPSBfdGhpcy5jbG9zZUlmQ2xpY2tJbm5lci5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBfdGhpcy5oYW5kbGVJbWFnZURvdWJsZUNsaWNrID0gX3RoaXMuaGFuZGxlSW1hZ2VEb3VibGVDbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBfdGhpcy5oYW5kbGVJbWFnZU1vdXNlV2hlZWwgPSBfdGhpcy5oYW5kbGVJbWFnZU1vdXNlV2hlZWwuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgX3RoaXMuaGFuZGxlS2V5SW5wdXQgPSBfdGhpcy5oYW5kbGVLZXlJbnB1dC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBfdGhpcy5oYW5kbGVNb3VzZVVwID0gX3RoaXMuaGFuZGxlTW91c2VVcC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBfdGhpcy5oYW5kbGVNb3VzZURvd24gPSBfdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgX3RoaXMuaGFuZGxlTW91c2VNb3ZlID0gX3RoaXMuaGFuZGxlTW91c2VNb3ZlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgIF90aGlzLmhhbmRsZU91dGVyTW91c2V3aGVlbCA9IF90aGlzLmhhbmRsZU91dGVyTW91c2V3aGVlbC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gX3RoaXMuaGFuZGxlVG91Y2hTdGFydC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBfdGhpcy5oYW5kbGVUb3VjaE1vdmUgPSBfdGhpcy5oYW5kbGVUb3VjaE1vdmUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgX3RoaXMuaGFuZGxlVG91Y2hFbmQgPSBfdGhpcy5oYW5kbGVUb3VjaEVuZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBfdGhpcy5oYW5kbGVQb2ludGVyRXZlbnQgPSBfdGhpcy5oYW5kbGVQb2ludGVyRXZlbnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgX3RoaXMuaGFuZGxlQ2FwdGlvbk1vdXNld2hlZWwgPSBfdGhpcy5oYW5kbGVDYXB0aW9uTW91c2V3aGVlbC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBfdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUgPSBfdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgX3RoaXMuaGFuZGxlWm9vbUluQnV0dG9uQ2xpY2sgPSBfdGhpcy5oYW5kbGVab29tSW5CdXR0b25DbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBfdGhpcy5oYW5kbGVab29tT3V0QnV0dG9uQ2xpY2sgPSBfdGhpcy5oYW5kbGVab29tT3V0QnV0dG9uQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgX3RoaXMucmVxdWVzdENsb3NlID0gX3RoaXMucmVxdWVzdENsb3NlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgIF90aGlzLnJlcXVlc3RNb3ZlTmV4dCA9IF90aGlzLnJlcXVlc3RNb3ZlTmV4dC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBfdGhpcy5yZXF1ZXN0TW92ZVByZXYgPSBfdGhpcy5yZXF1ZXN0TW92ZVByZXYuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlYWN0SW1hZ2VMaWdodGJveCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIC8vIFRpbWVvdXRzIC0gYWx3YXlzIGNsZWFyIGl0IGJlZm9yZSB1bW91bnRcbiAgICAgIHRoaXMudGltZW91dHMgPSBbXTsgLy8gQ3VycmVudCBhY3Rpb25cblxuICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gQUNUSU9OX05PTkU7IC8vIEV2ZW50cyBzb3VyY2VcblxuICAgICAgdGhpcy5ldmVudHNTb3VyY2UgPSBTT1VSQ0VfQU5ZOyAvLyBFbXB0eSBwb2ludGVycyBsaXN0XG5cbiAgICAgIHRoaXMucG9pbnRlckxpc3QgPSBbXTsgLy8gUHJldmVudCBpbm5lciBjbG9zZVxuXG4gICAgICB0aGlzLnByZXZlbnRJbm5lckNsb3NlID0gZmFsc2U7XG4gICAgICB0aGlzLnByZXZlbnRJbm5lckNsb3NlVGltZW91dCA9IG51bGw7IC8vIFVzZWQgdG8gZGlzYWJsZSBhbmltYXRpb24gd2hlbiBjaGFuZ2luZyBwcm9wcy5tYWluU3JjfG5leHRTcmN8cHJldlNyY1xuXG4gICAgICB0aGlzLmtleVByZXNzZWQgPSBmYWxzZTsgLy8gVXNlZCB0byBzdG9yZSBsb2FkIHN0YXRlIC8gZGltZW5zaW9ucyBvZiBpbWFnZXNcblxuICAgICAgdGhpcy5pbWFnZUNhY2hlID0ge307IC8vIFRpbWUgdGhlIGxhc3Qga2V5ZG93biBldmVudCB3YXMgY2FsbGVkICh1c2VkIGluIGtleWJvYXJkIGFjdGlvbiByYXRlIGxpbWl0aW5nKVxuXG4gICAgICB0aGlzLmxhc3RLZXlEb3duVGltZSA9IDA7IC8vIFVzZWQgZm9yIGRlYm91bmNpbmcgd2luZG93IHJlc2l6ZSBldmVudFxuXG4gICAgICB0aGlzLnJlc2l6ZVRpbWVvdXQgPSBudWxsOyAvLyBVc2VkIHRvIGRldGVybWluZSB3aGVuIGFjdGlvbnMgYXJlIHRyaWdnZXJlZCBieSB0aGUgc2Nyb2xsIHdoZWVsXG5cbiAgICAgIHRoaXMud2hlZWxBY3Rpb25UaW1lb3V0ID0gbnVsbDtcbiAgICAgIHRoaXMucmVzZXRTY3JvbGxUaW1lb3V0ID0gbnVsbDtcbiAgICAgIHRoaXMuc2Nyb2xsWCA9IDA7XG4gICAgICB0aGlzLnNjcm9sbFkgPSAwOyAvLyBVc2VkIGluIHBhbm5pbmcgem9vbWVkIGltYWdlc1xuXG4gICAgICB0aGlzLm1vdmVTdGFydFggPSAwO1xuICAgICAgdGhpcy5tb3ZlU3RhcnRZID0gMDtcbiAgICAgIHRoaXMubW92ZVN0YXJ0T2Zmc2V0WCA9IDA7XG4gICAgICB0aGlzLm1vdmVTdGFydE9mZnNldFkgPSAwOyAvLyBVc2VkIHRvIHN3aXBlXG5cbiAgICAgIHRoaXMuc3dpcGVTdGFydFggPSAwO1xuICAgICAgdGhpcy5zd2lwZVN0YXJ0WSA9IDA7XG4gICAgICB0aGlzLnN3aXBlRW5kWCA9IDA7XG4gICAgICB0aGlzLnN3aXBlRW5kWSA9IDA7IC8vIFVzZWQgdG8gcGluY2hcblxuICAgICAgdGhpcy5waW5jaFRvdWNoTGlzdCA9IG51bGw7XG4gICAgICB0aGlzLnBpbmNoRGlzdGFuY2UgPSAwOyAvLyBVc2VkIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBpbWFnZXMgd2l0aCBpZGVudGljYWwgc3JjXG5cbiAgICAgIHRoaXMua2V5Q291bnRlciA9IDA7IC8vIFVzZWQgdG8gZGV0ZWN0IGEgbW92ZSB3aGVuIGFsbCBzcmMncyByZW1haW4gdW5jaGFuZ2VkIChmb3VyIG9yIG1vcmUgb2YgdGhlIHNhbWUgaW1hZ2UgaW4gYSByb3cpXG5cbiAgICAgIHRoaXMubW92ZVJlcXVlc3RlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuYW5pbWF0aW9uRGlzYWJsZWQpIHtcbiAgICAgICAgLy8gTWFrZSBvcGVuaW5nIGFuaW1hdGlvbiBwbGF5XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzQ2xvc2luZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIC8vIFByZXZlbnRzIGNyb3NzLW9yaWdpbiBlcnJvcnMgd2hlbiB1c2luZyBhIGNyb3NzLW9yaWdpbiBpZnJhbWVcbiAgICAgIHRoaXMud2luZG93Q29udGV4dCA9IGdldEhpZ2hlc3RTYWZlV2luZG93Q29udGV4dCgpO1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSB7XG4gICAgICAgIHJlc2l6ZTogdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUsXG4gICAgICAgIG1vdXNldXA6IHRoaXMuaGFuZGxlTW91c2VVcCxcbiAgICAgICAgdG91Y2hlbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmQsXG4gICAgICAgIHRvdWNoY2FuY2VsOiB0aGlzLmhhbmRsZVRvdWNoRW5kLFxuICAgICAgICBwb2ludGVyZG93bjogdGhpcy5oYW5kbGVQb2ludGVyRXZlbnQsXG4gICAgICAgIHBvaW50ZXJtb3ZlOiB0aGlzLmhhbmRsZVBvaW50ZXJFdmVudCxcbiAgICAgICAgcG9pbnRlcnVwOiB0aGlzLmhhbmRsZVBvaW50ZXJFdmVudCxcbiAgICAgICAgcG9pbnRlcmNhbmNlbDogdGhpcy5oYW5kbGVQb2ludGVyRXZlbnRcbiAgICAgIH07XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmxpc3RlbmVycykuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBfdGhpczIud2luZG93Q29udGV4dC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIF90aGlzMi5saXN0ZW5lcnNbdHlwZV0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxvYWRBbGxJbWFnZXMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgc291cmNlIHR5cGVzIGZvciBwcmV2UHJvcHMgYW5kIG5leHRQcm9wcyB0b1xuICAgICAgLy8gIGRldGVybWluZSBpZiBhbnkgb2YgdGhlIHNvdXJjZXMgY2hhbmdlZFxuICAgICAgdmFyIHNvdXJjZXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICB2YXIgcHJldlNyY0RpY3QgPSB7fTtcbiAgICAgIHZhciBuZXh0U3JjRGljdCA9IHt9O1xuICAgICAgdGhpcy5nZXRTcmNUeXBlcygpLmZvckVhY2goZnVuY3Rpb24gKHNyY1R5cGUpIHtcbiAgICAgICAgaWYgKF90aGlzMy5wcm9wc1tzcmNUeXBlLm5hbWVdICE9PSBuZXh0UHJvcHNbc3JjVHlwZS5uYW1lXSkge1xuICAgICAgICAgIHNvdXJjZXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICBwcmV2U3JjRGljdFtfdGhpczMucHJvcHNbc3JjVHlwZS5uYW1lXV0gPSB0cnVlO1xuICAgICAgICAgIG5leHRTcmNEaWN0W25leHRQcm9wc1tzcmNUeXBlLm5hbWVdXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc291cmNlc0NoYW5nZWQgfHwgdGhpcy5tb3ZlUmVxdWVzdGVkKSB7XG4gICAgICAgIC8vIFJlc2V0IHRoZSBsb2FkZWQgc3RhdGUgZm9yIGltYWdlcyBub3QgcmVuZGVyZWQgbmV4dFxuICAgICAgICBPYmplY3Qua2V5cyhwcmV2U3JjRGljdCkuZm9yRWFjaChmdW5jdGlvbiAocHJldlNyYykge1xuICAgICAgICAgIGlmICghKHByZXZTcmMgaW4gbmV4dFNyY0RpY3QpICYmIHByZXZTcmMgaW4gX3RoaXMzLmltYWdlQ2FjaGUpIHtcbiAgICAgICAgICAgIF90aGlzMy5pbWFnZUNhY2hlW3ByZXZTcmNdLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubW92ZVJlcXVlc3RlZCA9IGZhbHNlOyAvLyBMb2FkIGFueSBuZXcgaW1hZ2VzXG5cbiAgICAgICAgdGhpcy5sb2FkQWxsSW1hZ2VzKG5leHRQcm9wcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNob3VsZENvbXBvbmVudFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG4gICAgICAvLyBXYWl0IGZvciBtb3ZlLi4uXG4gICAgICByZXR1cm4gIXRoaXMubW92ZVJlcXVlc3RlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdGhpcy5kaWRVbm1vdW50ID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMubGlzdGVuZXJzKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIF90aGlzNC53aW5kb3dDb250ZXh0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgX3RoaXM0Lmxpc3RlbmVyc1t0eXBlXSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudGltZW91dHMuZm9yRWFjaChmdW5jdGlvbiAodGlkKSB7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQodGlkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRUaW1lb3V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIChfc2V0VGltZW91dCkge1xuICAgICAgZnVuY3Rpb24gc2V0VGltZW91dChfeCwgX3gyKSB7XG4gICAgICAgIHJldHVybiBfc2V0VGltZW91dC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3NldFRpbWVvdXQudG9TdHJpbmcoKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBzZXRUaW1lb3V0O1xuICAgIH0oZnVuY3Rpb24gKGZ1bmMsIHRpbWUpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB2YXIgaWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXM1LnRpbWVvdXRzID0gX3RoaXM1LnRpbWVvdXRzLmZpbHRlcihmdW5jdGlvbiAodGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHRpZCAhPT0gaWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBmdW5jKCk7XG4gICAgICB9LCB0aW1lKTtcbiAgICAgIHRoaXMudGltZW91dHMucHVzaChpZCk7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfSlcbiAgfSwge1xuICAgIGtleTogXCJzZXRQcmV2ZW50SW5uZXJDbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQcmV2ZW50SW5uZXJDbG9zZSgpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5wcmV2ZW50SW5uZXJDbG9zZVRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5jbGVhclRpbWVvdXQodGhpcy5wcmV2ZW50SW5uZXJDbG9zZVRpbWVvdXQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByZXZlbnRJbm5lckNsb3NlID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJldmVudElubmVyQ2xvc2VUaW1lb3V0ID0gdGhpcy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXM2LnByZXZlbnRJbm5lckNsb3NlID0gZmFsc2U7XG4gICAgICAgIF90aGlzNi5wcmV2ZW50SW5uZXJDbG9zZVRpbWVvdXQgPSBudWxsO1xuICAgICAgfSwgMTAwKTtcbiAgICB9IC8vIEdldCBpbmZvIGZvciB0aGUgYmVzdCBzdWl0ZWQgaW1hZ2UgdG8gZGlzcGxheSB3aXRoIHRoZSBnaXZlbiBzcmNUeXBlXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRCZXN0SW1hZ2VGb3JUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJlc3RJbWFnZUZvclR5cGUoc3JjVHlwZSkge1xuICAgICAgdmFyIGltYWdlU3JjID0gdGhpcy5wcm9wc1tzcmNUeXBlXTtcbiAgICAgIHZhciBmaXRTaXplcyA9IHt9O1xuXG4gICAgICBpZiAodGhpcy5pc0ltYWdlTG9hZGVkKGltYWdlU3JjKSkge1xuICAgICAgICAvLyBVc2UgZnVsbC1zaXplIGltYWdlIGlmIGF2YWlsYWJsZVxuICAgICAgICBmaXRTaXplcyA9IHRoaXMuZ2V0Rml0U2l6ZXModGhpcy5pbWFnZUNhY2hlW2ltYWdlU3JjXS53aWR0aCwgdGhpcy5pbWFnZUNhY2hlW2ltYWdlU3JjXS5oZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSW1hZ2VMb2FkZWQodGhpcy5wcm9wc1tcIlwiLmNvbmNhdChzcmNUeXBlLCBcIlRodW1ibmFpbFwiKV0pKSB7XG4gICAgICAgIC8vIEZhbGwgYmFjayB0byB1c2luZyB0aHVtYm5haWwgaWYgdGhlIGltYWdlIGhhcyBub3QgYmVlbiBsb2FkZWRcbiAgICAgICAgaW1hZ2VTcmMgPSB0aGlzLnByb3BzW1wiXCIuY29uY2F0KHNyY1R5cGUsIFwiVGh1bWJuYWlsXCIpXTtcbiAgICAgICAgZml0U2l6ZXMgPSB0aGlzLmdldEZpdFNpemVzKHRoaXMuaW1hZ2VDYWNoZVtpbWFnZVNyY10ud2lkdGgsIHRoaXMuaW1hZ2VDYWNoZVtpbWFnZVNyY10uaGVpZ2h0LCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzcmM6IGltYWdlU3JjLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuaW1hZ2VDYWNoZVtpbWFnZVNyY10uaGVpZ2h0LFxuICAgICAgICB3aWR0aDogdGhpcy5pbWFnZUNhY2hlW2ltYWdlU3JjXS53aWR0aCxcbiAgICAgICAgdGFyZ2V0SGVpZ2h0OiBmaXRTaXplcy5oZWlnaHQsXG4gICAgICAgIHRhcmdldFdpZHRoOiBmaXRTaXplcy53aWR0aFxuICAgICAgfTtcbiAgICB9IC8vIEdldCBzaXppbmcgZm9yIHdoZW4gYW4gaW1hZ2UgaXMgbGFyZ2VyIHRoYW4gdGhlIHdpbmRvd1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Rml0U2l6ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Rml0U2l6ZXMod2lkdGgsIGhlaWdodCwgc3RyZXRjaCkge1xuICAgICAgdmFyIGJveFNpemUgPSB0aGlzLmdldExpZ2h0Ym94UmVjdCgpO1xuICAgICAgdmFyIG1heEhlaWdodCA9IGJveFNpemUuaGVpZ2h0IC0gdGhpcy5wcm9wcy5pbWFnZVBhZGRpbmcgKiAyO1xuICAgICAgdmFyIG1heFdpZHRoID0gYm94U2l6ZS53aWR0aCAtIHRoaXMucHJvcHMuaW1hZ2VQYWRkaW5nICogMjtcblxuICAgICAgaWYgKCFzdHJldGNoKSB7XG4gICAgICAgIG1heEhlaWdodCA9IE1hdGgubWluKG1heEhlaWdodCwgaGVpZ2h0KTtcbiAgICAgICAgbWF4V2lkdGggPSBNYXRoLm1pbihtYXhXaWR0aCwgd2lkdGgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbWF4UmF0aW8gPSBtYXhXaWR0aCAvIG1heEhlaWdodDtcbiAgICAgIHZhciBzcmNSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xuXG4gICAgICBpZiAobWF4UmF0aW8gPiBzcmNSYXRpbykge1xuICAgICAgICAvLyBoZWlnaHQgaXMgdGhlIGNvbnN0cmFpbmluZyBkaW1lbnNpb24gb2YgdGhlIHBob3RvXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2lkdGg6IHdpZHRoICogbWF4SGVpZ2h0IC8gaGVpZ2h0LFxuICAgICAgICAgIGhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBtYXhXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKiBtYXhXaWR0aCAvIHdpZHRoXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRNYXhPZmZzZXRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1heE9mZnNldHMoKSB7XG4gICAgICB2YXIgem9vbUxldmVsID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0aGlzLnN0YXRlLnpvb21MZXZlbDtcbiAgICAgIHZhciBjdXJyZW50SW1hZ2VJbmZvID0gdGhpcy5nZXRCZXN0SW1hZ2VGb3JUeXBlKCdtYWluU3JjJyk7XG5cbiAgICAgIGlmIChjdXJyZW50SW1hZ2VJbmZvID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWF4WDogMCxcbiAgICAgICAgICBtaW5YOiAwLFxuICAgICAgICAgIG1heFk6IDAsXG4gICAgICAgICAgbWluWTogMFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgYm94U2l6ZSA9IHRoaXMuZ2V0TGlnaHRib3hSZWN0KCk7XG4gICAgICB2YXIgem9vbU11bHRpcGxpZXIgPSB0aGlzLmdldFpvb21NdWx0aXBsaWVyKHpvb21MZXZlbCk7XG4gICAgICB2YXIgbWF4WCA9IDA7XG5cbiAgICAgIGlmICh6b29tTXVsdGlwbGllciAqIGN1cnJlbnRJbWFnZUluZm8ud2lkdGggLSBib3hTaXplLndpZHRoIDwgMCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBzdGlsbCBibGFuayBzcGFjZSBpbiB0aGUgWCBkaW1lbnNpb24sIGRvbid0IGxpbWl0IGV4Y2VwdCB0byB0aGUgb3Bwb3NpdGUgZWRnZVxuICAgICAgICBtYXhYID0gKGJveFNpemUud2lkdGggLSB6b29tTXVsdGlwbGllciAqIGN1cnJlbnRJbWFnZUluZm8ud2lkdGgpIC8gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1heFggPSAoem9vbU11bHRpcGxpZXIgKiBjdXJyZW50SW1hZ2VJbmZvLndpZHRoIC0gYm94U2l6ZS53aWR0aCkgLyAyO1xuICAgICAgfVxuXG4gICAgICB2YXIgbWF4WSA9IDA7XG5cbiAgICAgIGlmICh6b29tTXVsdGlwbGllciAqIGN1cnJlbnRJbWFnZUluZm8uaGVpZ2h0IC0gYm94U2l6ZS5oZWlnaHQgPCAwKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIHN0aWxsIGJsYW5rIHNwYWNlIGluIHRoZSBZIGRpbWVuc2lvbiwgZG9uJ3QgbGltaXQgZXhjZXB0IHRvIHRoZSBvcHBvc2l0ZSBlZGdlXG4gICAgICAgIG1heFkgPSAoYm94U2l6ZS5oZWlnaHQgLSB6b29tTXVsdGlwbGllciAqIGN1cnJlbnRJbWFnZUluZm8uaGVpZ2h0KSAvIDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXhZID0gKHpvb21NdWx0aXBsaWVyICogY3VycmVudEltYWdlSW5mby5oZWlnaHQgLSBib3hTaXplLmhlaWdodCkgLyAyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXhYOiBtYXhYLFxuICAgICAgICBtYXhZOiBtYXhZLFxuICAgICAgICBtaW5YOiAtMSAqIG1heFgsXG4gICAgICAgIG1pblk6IC0xICogbWF4WVxuICAgICAgfTtcbiAgICB9IC8vIEdldCBpbWFnZSBzcmMgdHlwZXNcblxuICB9LCB7XG4gICAga2V5OiBcImdldFNyY1R5cGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNyY1R5cGVzKCkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIG5hbWU6ICdtYWluU3JjJyxcbiAgICAgICAga2V5RW5kaW5nOiBcImlcIi5jb25jYXQodGhpcy5rZXlDb3VudGVyKVxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnbWFpblNyY1RodW1ibmFpbCcsXG4gICAgICAgIGtleUVuZGluZzogXCJ0XCIuY29uY2F0KHRoaXMua2V5Q291bnRlcilcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ25leHRTcmMnLFxuICAgICAgICBrZXlFbmRpbmc6IFwiaVwiLmNvbmNhdCh0aGlzLmtleUNvdW50ZXIgKyAxKVxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnbmV4dFNyY1RodW1ibmFpbCcsXG4gICAgICAgIGtleUVuZGluZzogXCJ0XCIuY29uY2F0KHRoaXMua2V5Q291bnRlciArIDEpXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdwcmV2U3JjJyxcbiAgICAgICAga2V5RW5kaW5nOiBcImlcIi5jb25jYXQodGhpcy5rZXlDb3VudGVyIC0gMSlcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ3ByZXZTcmNUaHVtYm5haWwnLFxuICAgICAgICBrZXlFbmRpbmc6IFwidFwiLmNvbmNhdCh0aGlzLmtleUNvdW50ZXIgLSAxKVxuICAgICAgfV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBzaXppbmcgd2hlbiB0aGUgaW1hZ2UgaXMgc2NhbGVkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRab29tTXVsdGlwbGllclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRab29tTXVsdGlwbGllcigpIHtcbiAgICAgIHZhciB6b29tTGV2ZWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMuc3RhdGUuem9vbUxldmVsO1xuICAgICAgcmV0dXJuIE1hdGgucG93KFpPT01fUkFUSU8sIHpvb21MZXZlbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc2l6ZSBvZiB0aGUgbGlnaHRib3ggaW4gcGl4ZWxzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRMaWdodGJveFJlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TGlnaHRib3hSZWN0KCkge1xuICAgICAgaWYgKHRoaXMub3V0ZXJFbC5jdXJyZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm91dGVyRWwuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGdldFdpbmRvd1dpZHRoKCksXG4gICAgICAgIGhlaWdodDogZ2V0V2luZG93SGVpZ2h0KCksXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYXJUaW1lb3V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIChfY2xlYXJUaW1lb3V0KSB7XG4gICAgICBmdW5jdGlvbiBjbGVhclRpbWVvdXQoX3gzKSB7XG4gICAgICAgIHJldHVybiBfY2xlYXJUaW1lb3V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9jbGVhclRpbWVvdXQudG9TdHJpbmcoKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBjbGVhclRpbWVvdXQ7XG4gICAgfShmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHRoaXMudGltZW91dHMgPSB0aGlzLnRpbWVvdXRzLmZpbHRlcihmdW5jdGlvbiAodGlkKSB7XG4gICAgICAgIHJldHVybiB0aWQgIT09IGlkO1xuICAgICAgfSk7XG4gICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH0pIC8vIENoYW5nZSB6b29tIGxldmVsXG5cbiAgfSwge1xuICAgIGtleTogXCJjaGFuZ2Vab29tXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5nZVpvb20oem9vbUxldmVsLCBjbGllbnRYLCBjbGllbnRZKSB7XG4gICAgICAvLyBJZ25vcmUgaWYgem9vbSBkaXNhYmxlZFxuICAgICAgaWYgKCF0aGlzLnByb3BzLmVuYWJsZVpvb20pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBDb25zdHJhaW4gem9vbSBsZXZlbCB0byB0aGUgc2V0IGJvdW5kc1xuXG5cbiAgICAgIHZhciBuZXh0Wm9vbUxldmVsID0gTWF0aC5tYXgoTUlOX1pPT01fTEVWRUwsIE1hdGgubWluKE1BWF9aT09NX0xFVkVMLCB6b29tTGV2ZWwpKTsgLy8gSWdub3JlIHJlcXVlc3RzIHRoYXQgZG9uJ3QgY2hhbmdlIHRoZSB6b29tIGxldmVsXG5cbiAgICAgIGlmIChuZXh0Wm9vbUxldmVsID09PSB0aGlzLnN0YXRlLnpvb21MZXZlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0Wm9vbUxldmVsID09PSBNSU5fWk9PTV9MRVZFTCkge1xuICAgICAgICAvLyBTbmFwIGJhY2sgdG8gY2VudGVyIGlmIHpvb21lZCBhbGwgdGhlIHdheSBvdXRcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgem9vbUxldmVsOiBuZXh0Wm9vbUxldmVsLFxuICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgb2Zmc2V0WTogMFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW1hZ2VCYXNlU2l6ZSA9IHRoaXMuZ2V0QmVzdEltYWdlRm9yVHlwZSgnbWFpblNyYycpO1xuXG4gICAgICBpZiAoaW1hZ2VCYXNlU2l6ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjdXJyZW50Wm9vbU11bHRpcGxpZXIgPSB0aGlzLmdldFpvb21NdWx0aXBsaWVyKCk7XG4gICAgICB2YXIgbmV4dFpvb21NdWx0aXBsaWVyID0gdGhpcy5nZXRab29tTXVsdGlwbGllcihuZXh0Wm9vbUxldmVsKTsgLy8gRGVmYXVsdCB0byB0aGUgY2VudGVyIG9mIHRoZSBpbWFnZSB0byB6b29tIHdoZW4gbm8gbW91c2UgcG9zaXRpb24gc3BlY2lmaWVkXG5cbiAgICAgIHZhciBib3hSZWN0ID0gdGhpcy5nZXRMaWdodGJveFJlY3QoKTtcbiAgICAgIHZhciBwb2ludGVyWCA9IHR5cGVvZiBjbGllbnRYICE9PSAndW5kZWZpbmVkJyA/IGNsaWVudFggLSBib3hSZWN0LmxlZnQgOiBib3hSZWN0LndpZHRoIC8gMjtcbiAgICAgIHZhciBwb2ludGVyWSA9IHR5cGVvZiBjbGllbnRZICE9PSAndW5kZWZpbmVkJyA/IGNsaWVudFkgLSBib3hSZWN0LnRvcCA6IGJveFJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgIHZhciBjdXJyZW50SW1hZ2VPZmZzZXRYID0gKGJveFJlY3Qud2lkdGggLSBpbWFnZUJhc2VTaXplLndpZHRoICogY3VycmVudFpvb21NdWx0aXBsaWVyKSAvIDI7XG4gICAgICB2YXIgY3VycmVudEltYWdlT2Zmc2V0WSA9IChib3hSZWN0LmhlaWdodCAtIGltYWdlQmFzZVNpemUuaGVpZ2h0ICogY3VycmVudFpvb21NdWx0aXBsaWVyKSAvIDI7XG4gICAgICB2YXIgY3VycmVudEltYWdlUmVhbE9mZnNldFggPSBjdXJyZW50SW1hZ2VPZmZzZXRYIC0gdGhpcy5zdGF0ZS5vZmZzZXRYO1xuICAgICAgdmFyIGN1cnJlbnRJbWFnZVJlYWxPZmZzZXRZID0gY3VycmVudEltYWdlT2Zmc2V0WSAtIHRoaXMuc3RhdGUub2Zmc2V0WTtcbiAgICAgIHZhciBjdXJyZW50UG9pbnRlclhSZWxhdGl2ZVRvSW1hZ2UgPSAocG9pbnRlclggLSBjdXJyZW50SW1hZ2VSZWFsT2Zmc2V0WCkgLyBjdXJyZW50Wm9vbU11bHRpcGxpZXI7XG4gICAgICB2YXIgY3VycmVudFBvaW50ZXJZUmVsYXRpdmVUb0ltYWdlID0gKHBvaW50ZXJZIC0gY3VycmVudEltYWdlUmVhbE9mZnNldFkpIC8gY3VycmVudFpvb21NdWx0aXBsaWVyO1xuICAgICAgdmFyIG5leHRJbWFnZVJlYWxPZmZzZXRYID0gcG9pbnRlclggLSBjdXJyZW50UG9pbnRlclhSZWxhdGl2ZVRvSW1hZ2UgKiBuZXh0Wm9vbU11bHRpcGxpZXI7XG4gICAgICB2YXIgbmV4dEltYWdlUmVhbE9mZnNldFkgPSBwb2ludGVyWSAtIGN1cnJlbnRQb2ludGVyWVJlbGF0aXZlVG9JbWFnZSAqIG5leHRab29tTXVsdGlwbGllcjtcbiAgICAgIHZhciBuZXh0SW1hZ2VPZmZzZXRYID0gKGJveFJlY3Qud2lkdGggLSBpbWFnZUJhc2VTaXplLndpZHRoICogbmV4dFpvb21NdWx0aXBsaWVyKSAvIDI7XG4gICAgICB2YXIgbmV4dEltYWdlT2Zmc2V0WSA9IChib3hSZWN0LmhlaWdodCAtIGltYWdlQmFzZVNpemUuaGVpZ2h0ICogbmV4dFpvb21NdWx0aXBsaWVyKSAvIDI7XG4gICAgICB2YXIgbmV4dE9mZnNldFggPSBuZXh0SW1hZ2VPZmZzZXRYIC0gbmV4dEltYWdlUmVhbE9mZnNldFg7XG4gICAgICB2YXIgbmV4dE9mZnNldFkgPSBuZXh0SW1hZ2VPZmZzZXRZIC0gbmV4dEltYWdlUmVhbE9mZnNldFk7IC8vIFdoZW4gem9vbWluZyBvdXQsIGxpbWl0IHRoZSBvZmZzZXQgc28gdGhpbmdzIGRvbid0IGdldCBsZWZ0IGFza2V3XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24gIT09IEFDVElPTl9QSU5DSCkge1xuICAgICAgICB2YXIgbWF4T2Zmc2V0cyA9IHRoaXMuZ2V0TWF4T2Zmc2V0cygpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnpvb21MZXZlbCA+IG5leHRab29tTGV2ZWwpIHtcbiAgICAgICAgICBuZXh0T2Zmc2V0WCA9IE1hdGgubWF4KG1heE9mZnNldHMubWluWCwgTWF0aC5taW4obWF4T2Zmc2V0cy5tYXhYLCBuZXh0T2Zmc2V0WCkpO1xuICAgICAgICAgIG5leHRPZmZzZXRZID0gTWF0aC5tYXgobWF4T2Zmc2V0cy5taW5ZLCBNYXRoLm1pbihtYXhPZmZzZXRzLm1heFksIG5leHRPZmZzZXRZKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHpvb21MZXZlbDogbmV4dFpvb21MZXZlbCxcbiAgICAgICAgb2Zmc2V0WDogbmV4dE9mZnNldFgsXG4gICAgICAgIG9mZnNldFk6IG5leHRPZmZzZXRZXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xvc2VJZkNsaWNrSW5uZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VJZkNsaWNrSW5uZXIoZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5wcmV2ZW50SW5uZXJDbG9zZSAmJiBldmVudC50YXJnZXQuY2xhc3NOYW1lLnNlYXJjaCgvXFxicmlsLWlubmVyXFxiLykgPiAtMSkge1xuICAgICAgICB0aGlzLnJlcXVlc3RDbG9zZShldmVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB1c2VyIGtleWJvYXJkIGFjdGlvbnNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZUtleUlucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUtleUlucHV0KGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gSWdub3JlIGtleSBpbnB1dCBkdXJpbmcgYW5pbWF0aW9uc1xuXG4gICAgICBpZiAodGhpcy5pc0FuaW1hdGluZygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gQWxsb3cgc2xpZ2h0bHkgZmFzdGVyIG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgaW1hZ2VzIHdoZW4gdXNlciBwcmVzc2VzIGtleXMgcmVwZWF0ZWRseVxuXG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAna2V5dXAnKSB7XG4gICAgICAgIHRoaXMubGFzdEtleURvd25UaW1lIC09IHRoaXMucHJvcHMua2V5UmVwZWF0S2V5dXBCb251cztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIga2V5Q29kZSA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGU7IC8vIElnbm9yZSBrZXkgcHJlc3NlcyB0aGF0IGhhcHBlbiB0b28gY2xvc2UgdG8gZWFjaCBvdGhlciAod2hlbiByYXBpZCBmaXJlIGtleSBwcmVzc2luZyBvciBob2xkaW5nIGRvd24gdGhlIGtleSlcbiAgICAgIC8vIEJ1dCBhbGxvdyBpdCBpZiBpdCdzIGEgbGlnaHRib3ggY2xvc2luZyBhY3Rpb25cblxuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcblxuICAgICAgaWYgKGN1cnJlbnRUaW1lLmdldFRpbWUoKSAtIHRoaXMubGFzdEtleURvd25UaW1lIDwgdGhpcy5wcm9wcy5rZXlSZXBlYXRMaW1pdCAmJiBrZXlDb2RlICE9PSBLRVlTLkVTQykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGFzdEtleURvd25UaW1lID0gY3VycmVudFRpbWUuZ2V0VGltZSgpO1xuXG4gICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgLy8gRVNDIGtleSBjbG9zZXMgdGhlIGxpZ2h0Ym94XG4gICAgICAgIGNhc2UgS0VZUy5FU0M6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RDbG9zZShldmVudCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIExlZnQgYXJyb3cga2V5IG1vdmVzIHRvIHByZXZpb3VzIGltYWdlXG5cbiAgICAgICAgY2FzZSBLRVlTLkxFRlRfQVJST1c6XG4gICAgICAgICAgaWYgKCF0aGlzLnByb3BzLnByZXZTcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMua2V5UHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0TW92ZVByZXYoZXZlbnQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBSaWdodCBhcnJvdyBrZXkgbW92ZXMgdG8gbmV4dCBpbWFnZVxuXG4gICAgICAgIGNhc2UgS0VZUy5SSUdIVF9BUlJPVzpcbiAgICAgICAgICBpZiAoIXRoaXMucHJvcHMubmV4dFNyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5rZXlQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RNb3ZlTmV4dChldmVudCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhIG1vdXNlIHdoZWVsIGV2ZW50IG92ZXIgdGhlIGxpZ2h0Ym94IGNvbnRhaW5lclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlT3V0ZXJNb3VzZXdoZWVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU91dGVyTW91c2V3aGVlbChldmVudCkge1xuICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgIC8vIFByZXZlbnQgc2Nyb2xsaW5nIG9mIHRoZSBiYWNrZ3JvdW5kXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHZhciB4VGhyZXNob2xkID0gV0hFRUxfTU9WRV9YX1RIUkVTSE9MRDtcbiAgICAgIHZhciBhY3Rpb25EZWxheSA9IDA7XG4gICAgICB2YXIgaW1hZ2VNb3ZlRGVsYXkgPSA1MDA7XG4gICAgICB0aGlzLmNsZWFyVGltZW91dCh0aGlzLnJlc2V0U2Nyb2xsVGltZW91dCk7XG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsVGltZW91dCA9IHRoaXMuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzNy5zY3JvbGxYID0gMDtcbiAgICAgICAgX3RoaXM3LnNjcm9sbFkgPSAwO1xuICAgICAgfSwgMzAwKTsgLy8gUHJldmVudCByYXBpZC1maXJlIHpvb20gYmVoYXZpb3JcblxuICAgICAgaWYgKHRoaXMud2hlZWxBY3Rpb25UaW1lb3V0ICE9PSBudWxsIHx8IHRoaXMuaXNBbmltYXRpbmcoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChNYXRoLmFicyhldmVudC5kZWx0YVkpIDwgTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSkge1xuICAgICAgICAvLyBoYW5kbGUgaG9yaXpvbnRhbCBzY3JvbGxzIHdpdGggaW1hZ2UgbW92ZXNcbiAgICAgICAgdGhpcy5zY3JvbGxZID0gMDtcbiAgICAgICAgdGhpcy5zY3JvbGxYICs9IGV2ZW50LmRlbHRhWDtcbiAgICAgICAgdmFyIGJpZ0xlYXBYID0geFRocmVzaG9sZCAvIDI7IC8vIElmIHRoZSBzY3JvbGwgYW1vdW50IGhhcyBhY2N1bXVsYXRlZCBzdWZmaWNpZW50bHksIG9yIGEgbGFyZ2UgbGVhcCB3YXMgdGFrZW5cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGxYID49IHhUaHJlc2hvbGQgfHwgZXZlbnQuZGVsdGFYID49IGJpZ0xlYXBYKSB7XG4gICAgICAgICAgLy8gU2Nyb2xsIHJpZ2h0IG1vdmVzIHRvIG5leHRcbiAgICAgICAgICB0aGlzLnJlcXVlc3RNb3ZlTmV4dChldmVudCk7XG4gICAgICAgICAgYWN0aW9uRGVsYXkgPSBpbWFnZU1vdmVEZWxheTtcbiAgICAgICAgICB0aGlzLnNjcm9sbFggPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsWCA8PSAtMSAqIHhUaHJlc2hvbGQgfHwgZXZlbnQuZGVsdGFYIDw9IC0xICogYmlnTGVhcFgpIHtcbiAgICAgICAgICAvLyBTY3JvbGwgbGVmdCBtb3ZlcyB0byBwcmV2aW91c1xuICAgICAgICAgIHRoaXMucmVxdWVzdE1vdmVQcmV2KGV2ZW50KTtcbiAgICAgICAgICBhY3Rpb25EZWxheSA9IGltYWdlTW92ZURlbGF5O1xuICAgICAgICAgIHRoaXMuc2Nyb2xsWCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gQWxsb3cgc3VjY2Vzc2l2ZSBhY3Rpb25zIGFmdGVyIHRoZSBzZXQgZGVsYXlcblxuXG4gICAgICBpZiAoYWN0aW9uRGVsYXkgIT09IDApIHtcbiAgICAgICAgdGhpcy53aGVlbEFjdGlvblRpbWVvdXQgPSB0aGlzLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzNy53aGVlbEFjdGlvblRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9LCBhY3Rpb25EZWxheSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZUltYWdlTW91c2VXaGVlbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVJbWFnZU1vdXNlV2hlZWwoZXZlbnQpIHtcbiAgICAgIHZhciB5VGhyZXNob2xkID0gV0hFRUxfTU9WRV9ZX1RIUkVTSE9MRDtcblxuICAgICAgaWYgKE1hdGguYWJzKGV2ZW50LmRlbHRhWSkgPj0gTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gSWYgdGhlIHZlcnRpY2FsIHNjcm9sbCBhbW91bnQgd2FzIGxhcmdlIGVub3VnaCwgcGVyZm9ybSBhIHpvb21cblxuICAgICAgICBpZiAoTWF0aC5hYnMoZXZlbnQuZGVsdGFZKSA8IHlUaHJlc2hvbGQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbFggPSAwO1xuICAgICAgICB0aGlzLnNjcm9sbFkgKz0gZXZlbnQuZGVsdGFZO1xuICAgICAgICB0aGlzLmNoYW5nZVpvb20odGhpcy5zdGF0ZS56b29tTGV2ZWwgLSBldmVudC5kZWx0YVksIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYSBkb3VibGUgY2xpY2sgb24gdGhlIGN1cnJlbnQgaW1hZ2VcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZUltYWdlRG91YmxlQ2xpY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlSW1hZ2VEb3VibGVDbGljayhldmVudCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuem9vbUxldmVsID4gTUlOX1pPT01fTEVWRUwpIHtcbiAgICAgICAgLy8gQSBkb3VibGUgY2xpY2sgd2hlbiB6b29tZWQgaW4gem9vbXMgYWxsIHRoZSB3YXkgb3V0XG4gICAgICAgIHRoaXMuY2hhbmdlWm9vbShNSU5fWk9PTV9MRVZFTCwgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBIGRvdWJsZSBjbGljayB3aGVuIHpvb21lZCBhbGwgdGhlIHdheSBvdXQgem9vbXMgaW5cbiAgICAgICAgdGhpcy5jaGFuZ2Vab29tKHRoaXMuc3RhdGUuem9vbUxldmVsICsgWk9PTV9CVVRUT05fSU5DUkVNRU5UX1NJWkUsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaG91bGRIYW5kbGVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRIYW5kbGVFdmVudChzb3VyY2UpIHtcbiAgICAgIGlmICh0aGlzLmV2ZW50c1NvdXJjZSA9PT0gc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5ldmVudHNTb3VyY2UgPT09IFNPVVJDRV9BTlkpIHtcbiAgICAgICAgdGhpcy5ldmVudHNTb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHNvdXJjZSkge1xuICAgICAgICBjYXNlIFNPVVJDRV9NT1VTRTpcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgY2FzZSBTT1VSQ0VfVE9VQ0g6XG4gICAgICAgICAgdGhpcy5ldmVudHNTb3VyY2UgPSBTT1VSQ0VfVE9VQ0g7XG4gICAgICAgICAgdGhpcy5maWx0ZXJQb2ludGVyc0J5U291cmNlKCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgY2FzZSBTT1VSQ0VfUE9JTlRFUjpcbiAgICAgICAgICBpZiAodGhpcy5ldmVudHNTb3VyY2UgPT09IFNPVVJDRV9NT1VTRSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNTb3VyY2UgPSBTT1VSQ0VfUE9JTlRFUjtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyUG9pbnRlcnNCeVNvdXJjZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRQb2ludGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFBvaW50ZXIocG9pbnRlcikge1xuICAgICAgdGhpcy5wb2ludGVyTGlzdC5wdXNoKHBvaW50ZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVQb2ludGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVBvaW50ZXIocG9pbnRlcikge1xuICAgICAgdGhpcy5wb2ludGVyTGlzdCA9IHRoaXMucG9pbnRlckxpc3QuZmlsdGVyKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIgaWQgPSBfcmVmMi5pZDtcbiAgICAgICAgcmV0dXJuIGlkICE9PSBwb2ludGVyLmlkO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpbHRlclBvaW50ZXJzQnlTb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyUG9pbnRlcnNCeVNvdXJjZSgpIHtcbiAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICB0aGlzLnBvaW50ZXJMaXN0ID0gdGhpcy5wb2ludGVyTGlzdC5maWx0ZXIoZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBfcmVmMy5zb3VyY2U7XG4gICAgICAgIHJldHVybiBzb3VyY2UgPT09IF90aGlzOC5ldmVudHNTb3VyY2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkSGFuZGxlRXZlbnQoU09VUkNFX01PVVNFKSAmJiBSZWFjdEltYWdlTGlnaHRib3guaXNUYXJnZXRNYXRjaEltYWdlKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgdGhpcy5hZGRQb2ludGVyKFJlYWN0SW1hZ2VMaWdodGJveC5wYXJzZU1vdXNlRXZlbnQoZXZlbnQpKTtcbiAgICAgICAgdGhpcy5tdWx0aVBvaW50ZXJTdGFydChldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZU1vdXNlTW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZEhhbmRsZUV2ZW50KFNPVVJDRV9NT1VTRSkpIHtcbiAgICAgICAgdGhpcy5tdWx0aVBvaW50ZXJNb3ZlKGV2ZW50LCBbUmVhY3RJbWFnZUxpZ2h0Ym94LnBhcnNlTW91c2VFdmVudChldmVudCldKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VVcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRIYW5kbGVFdmVudChTT1VSQ0VfTU9VU0UpKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUG9pbnRlcihSZWFjdEltYWdlTGlnaHRib3gucGFyc2VNb3VzZUV2ZW50KGV2ZW50KSk7XG4gICAgICAgIHRoaXMubXVsdGlQb2ludGVyRW5kKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlUG9pbnRlckV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVBvaW50ZXJFdmVudChldmVudCkge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkSGFuZGxlRXZlbnQoU09VUkNFX1BPSU5URVIpKSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ3BvaW50ZXJkb3duJzpcbiAgICAgICAgICAgIGlmIChSZWFjdEltYWdlTGlnaHRib3guaXNUYXJnZXRNYXRjaEltYWdlKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5hZGRQb2ludGVyKFJlYWN0SW1hZ2VMaWdodGJveC5wYXJzZVBvaW50ZXJFdmVudChldmVudCkpO1xuICAgICAgICAgICAgICB0aGlzLm11bHRpUG9pbnRlclN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdwb2ludGVybW92ZSc6XG4gICAgICAgICAgICB0aGlzLm11bHRpUG9pbnRlck1vdmUoZXZlbnQsIFtSZWFjdEltYWdlTGlnaHRib3gucGFyc2VQb2ludGVyRXZlbnQoZXZlbnQpXSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3BvaW50ZXJ1cCc6XG4gICAgICAgICAgY2FzZSAncG9pbnRlcmNhbmNlbCc6XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVBvaW50ZXIoUmVhY3RJbWFnZUxpZ2h0Ym94LnBhcnNlUG9pbnRlckV2ZW50KGV2ZW50KSk7XG4gICAgICAgICAgICB0aGlzLm11bHRpUG9pbnRlckVuZChldmVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVUb3VjaFN0YXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5zaG91bGRIYW5kbGVFdmVudChTT1VSQ0VfVE9VQ0gpICYmIFJlYWN0SW1hZ2VMaWdodGJveC5pc1RhcmdldE1hdGNoSW1hZ2UoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZXZlbnQuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uIChldmVudFRvdWNoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzOS5hZGRQb2ludGVyKFJlYWN0SW1hZ2VMaWdodGJveC5wYXJzZVRvdWNoUG9pbnRlcihldmVudFRvdWNoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm11bHRpUG9pbnRlclN0YXJ0KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlVG91Y2hNb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShldmVudCkge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkSGFuZGxlRXZlbnQoU09VUkNFX1RPVUNIKSkge1xuICAgICAgICB0aGlzLm11bHRpUG9pbnRlck1vdmUoZXZlbnQsIFtdLm1hcC5jYWxsKGV2ZW50LmNoYW5nZWRUb3VjaGVzLCBmdW5jdGlvbiAoZXZlbnRUb3VjaCkge1xuICAgICAgICAgIHJldHVybiBSZWFjdEltYWdlTGlnaHRib3gucGFyc2VUb3VjaFBvaW50ZXIoZXZlbnRUb3VjaCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlVG91Y2hFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpczEwID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuc2hvdWxkSGFuZGxlRXZlbnQoU09VUkNFX1RPVUNIKSkge1xuICAgICAgICBbXS5tYXAuY2FsbChldmVudC5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMTAucmVtb3ZlUG9pbnRlcihSZWFjdEltYWdlTGlnaHRib3gucGFyc2VUb3VjaFBvaW50ZXIodG91Y2gpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubXVsdGlQb2ludGVyRW5kKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVjaWRlTW92ZU9yU3dpcGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVjaWRlTW92ZU9yU3dpcGUocG9pbnRlcikge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuem9vbUxldmVsIDw9IE1JTl9aT09NX0xFVkVMKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3dpcGVTdGFydChwb2ludGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTW92ZVN0YXJ0KHBvaW50ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtdWx0aVBvaW50ZXJTdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtdWx0aVBvaW50ZXJTdGFydChldmVudCkge1xuICAgICAgdGhpcy5oYW5kbGVFbmQobnVsbCk7XG5cbiAgICAgIHN3aXRjaCAodGhpcy5wb2ludGVyTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRlY2lkZU1vdmVPclN3aXBlKHRoaXMucG9pbnRlckxpc3RbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQaW5jaFN0YXJ0KHRoaXMucG9pbnRlckxpc3QpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtdWx0aVBvaW50ZXJNb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG11bHRpUG9pbnRlck1vdmUoZXZlbnQsIHBvaW50ZXJMaXN0KSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuY3VycmVudEFjdGlvbikge1xuICAgICAgICBjYXNlIEFDVElPTl9NT1ZFOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZU1vdmUocG9pbnRlckxpc3RbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQUNUSU9OX1NXSVBFOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVN3aXBlKHBvaW50ZXJMaXN0WzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIEFDVElPTl9QSU5DSDpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQaW5jaChwb2ludGVyTGlzdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm11bHRpUG9pbnRlckVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtdWx0aVBvaW50ZXJFbmQoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24gIT09IEFDVElPTl9OT05FKSB7XG4gICAgICAgIHRoaXMuc2V0UHJldmVudElubmVyQ2xvc2UoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVFbmQoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHRoaXMucG9pbnRlckxpc3QubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1NvdXJjZSA9IFNPVVJDRV9BTlk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRlY2lkZU1vdmVPclN3aXBlKHRoaXMucG9pbnRlckxpc3RbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQaW5jaFN0YXJ0KHRoaXMucG9pbnRlckxpc3QpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlRW5kKGV2ZW50KSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuY3VycmVudEFjdGlvbikge1xuICAgICAgICBjYXNlIEFDVElPTl9NT1ZFOlxuICAgICAgICAgIHRoaXMuaGFuZGxlTW92ZUVuZChldmVudCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBBQ1RJT05fU1dJUEU6XG4gICAgICAgICAgdGhpcy5oYW5kbGVTd2lwZUVuZChldmVudCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBBQ1RJT05fUElOQ0g6XG4gICAgICAgICAgdGhpcy5oYW5kbGVQaW5jaEVuZChldmVudCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSAvLyBIYW5kbGUgbW92ZSBzdGFydCBvdmVyIHRoZSBsaWdodGJveCBjb250YWluZXJcbiAgICAvLyBUaGlzIGhhcHBlbnM6XG4gICAgLy8gLSBPbiBhIG1vdXNlRG93biBldmVudFxuICAgIC8vIC0gT24gYSB0b3VjaHN0YXJ0IGV2ZW50XG5cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVNb3ZlU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW92ZVN0YXJ0KF9yZWY0KSB7XG4gICAgICB2YXIgY2xpZW50WCA9IF9yZWY0LngsXG4gICAgICAgICAgY2xpZW50WSA9IF9yZWY0Lnk7XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5lbmFibGVab29tKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gQUNUSU9OX01PVkU7XG4gICAgICB0aGlzLm1vdmVTdGFydFggPSBjbGllbnRYO1xuICAgICAgdGhpcy5tb3ZlU3RhcnRZID0gY2xpZW50WTtcbiAgICAgIHRoaXMubW92ZVN0YXJ0T2Zmc2V0WCA9IHRoaXMuc3RhdGUub2Zmc2V0WDtcbiAgICAgIHRoaXMubW92ZVN0YXJ0T2Zmc2V0WSA9IHRoaXMuc3RhdGUub2Zmc2V0WTtcbiAgICB9IC8vIEhhbmRsZSBkcmFnZ2luZyBvdmVyIHRoZSBsaWdodGJveCBjb250YWluZXJcbiAgICAvLyBUaGlzIGhhcHBlbnM6XG4gICAgLy8gLSBBZnRlciBhIG1vdXNlRG93biBhbmQgYmVmb3JlIGEgbW91c2VVcCBldmVudFxuICAgIC8vIC0gQWZ0ZXIgYSB0b3VjaHN0YXJ0IGFuZCBiZWZvcmUgYSB0b3VjaGVuZCBldmVudFxuXG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3ZlKF9yZWY1KSB7XG4gICAgICB2YXIgY2xpZW50WCA9IF9yZWY1LngsXG4gICAgICAgICAgY2xpZW50WSA9IF9yZWY1Lnk7XG4gICAgICB2YXIgbmV3T2Zmc2V0WCA9IHRoaXMubW92ZVN0YXJ0WCAtIGNsaWVudFggKyB0aGlzLm1vdmVTdGFydE9mZnNldFg7XG4gICAgICB2YXIgbmV3T2Zmc2V0WSA9IHRoaXMubW92ZVN0YXJ0WSAtIGNsaWVudFkgKyB0aGlzLm1vdmVTdGFydE9mZnNldFk7XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLm9mZnNldFggIT09IG5ld09mZnNldFggfHwgdGhpcy5zdGF0ZS5vZmZzZXRZICE9PSBuZXdPZmZzZXRZKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9mZnNldFg6IG5ld09mZnNldFgsXG4gICAgICAgICAgb2Zmc2V0WTogbmV3T2Zmc2V0WVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW92ZUVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3ZlRW5kKCkge1xuICAgICAgdmFyIF90aGlzMTEgPSB0aGlzO1xuXG4gICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBBQ1RJT05fTk9ORTtcbiAgICAgIHRoaXMubW92ZVN0YXJ0WCA9IDA7XG4gICAgICB0aGlzLm1vdmVTdGFydFkgPSAwO1xuICAgICAgdGhpcy5tb3ZlU3RhcnRPZmZzZXRYID0gMDtcbiAgICAgIHRoaXMubW92ZVN0YXJ0T2Zmc2V0WSA9IDA7IC8vIFNuYXAgaW1hZ2UgYmFjayBpbnRvIGZyYW1lIGlmIG91dHNpZGUgbWF4IG9mZnNldCByYW5nZVxuXG4gICAgICB2YXIgbWF4T2Zmc2V0cyA9IHRoaXMuZ2V0TWF4T2Zmc2V0cygpO1xuICAgICAgdmFyIG5leHRPZmZzZXRYID0gTWF0aC5tYXgobWF4T2Zmc2V0cy5taW5YLCBNYXRoLm1pbihtYXhPZmZzZXRzLm1heFgsIHRoaXMuc3RhdGUub2Zmc2V0WCkpO1xuICAgICAgdmFyIG5leHRPZmZzZXRZID0gTWF0aC5tYXgobWF4T2Zmc2V0cy5taW5ZLCBNYXRoLm1pbihtYXhPZmZzZXRzLm1heFksIHRoaXMuc3RhdGUub2Zmc2V0WSkpO1xuXG4gICAgICBpZiAobmV4dE9mZnNldFggIT09IHRoaXMuc3RhdGUub2Zmc2V0WCB8fCBuZXh0T2Zmc2V0WSAhPT0gdGhpcy5zdGF0ZS5vZmZzZXRZKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9mZnNldFg6IG5leHRPZmZzZXRYLFxuICAgICAgICAgIG9mZnNldFk6IG5leHRPZmZzZXRZLFxuICAgICAgICAgIHNob3VsZEFuaW1hdGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMxMS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG91bGRBbmltYXRlOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCB0aGlzLnByb3BzLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlU3dpcGVTdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTd2lwZVN0YXJ0KF9yZWY2KSB7XG4gICAgICB2YXIgY2xpZW50WCA9IF9yZWY2LngsXG4gICAgICAgICAgY2xpZW50WSA9IF9yZWY2Lnk7XG4gICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBBQ1RJT05fU1dJUEU7XG4gICAgICB0aGlzLnN3aXBlU3RhcnRYID0gY2xpZW50WDtcbiAgICAgIHRoaXMuc3dpcGVTdGFydFkgPSBjbGllbnRZO1xuICAgICAgdGhpcy5zd2lwZUVuZFggPSBjbGllbnRYO1xuICAgICAgdGhpcy5zd2lwZUVuZFkgPSBjbGllbnRZO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVTd2lwZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTd2lwZShfcmVmNykge1xuICAgICAgdmFyIGNsaWVudFggPSBfcmVmNy54LFxuICAgICAgICAgIGNsaWVudFkgPSBfcmVmNy55O1xuICAgICAgdGhpcy5zd2lwZUVuZFggPSBjbGllbnRYO1xuICAgICAgdGhpcy5zd2lwZUVuZFkgPSBjbGllbnRZO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVTd2lwZUVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTd2lwZUVuZChldmVudCkge1xuICAgICAgdmFyIHhEaWZmID0gdGhpcy5zd2lwZUVuZFggLSB0aGlzLnN3aXBlU3RhcnRYO1xuICAgICAgdmFyIHhEaWZmQWJzID0gTWF0aC5hYnMoeERpZmYpO1xuICAgICAgdmFyIHlEaWZmQWJzID0gTWF0aC5hYnModGhpcy5zd2lwZUVuZFkgLSB0aGlzLnN3aXBlU3RhcnRZKTtcbiAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IEFDVElPTl9OT05FO1xuICAgICAgdGhpcy5zd2lwZVN0YXJ0WCA9IDA7XG4gICAgICB0aGlzLnN3aXBlU3RhcnRZID0gMDtcbiAgICAgIHRoaXMuc3dpcGVFbmRYID0gMDtcbiAgICAgIHRoaXMuc3dpcGVFbmRZID0gMDtcblxuICAgICAgaWYgKCFldmVudCB8fCB0aGlzLmlzQW5pbWF0aW5nKCkgfHwgeERpZmZBYnMgPCB5RGlmZkFicyAqIDEuNSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh4RGlmZkFicyA8IE1JTl9TV0lQRV9ESVNUQU5DRSkge1xuICAgICAgICB2YXIgYm94UmVjdCA9IHRoaXMuZ2V0TGlnaHRib3hSZWN0KCk7XG5cbiAgICAgICAgaWYgKHhEaWZmQWJzIDwgYm94UmVjdC53aWR0aCAvIDQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHhEaWZmID4gMCAmJiB0aGlzLnByb3BzLnByZXZTcmMpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0TW92ZVByZXYoKTtcbiAgICAgIH0gZWxzZSBpZiAoeERpZmYgPCAwICYmIHRoaXMucHJvcHMubmV4dFNyYykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnJlcXVlc3RNb3ZlTmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYWxjdWxhdGVQaW5jaERpc3RhbmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGN1bGF0ZVBpbmNoRGlzdGFuY2UoKSB7XG4gICAgICB2YXIgX3JlZjggPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMucGluY2hUb3VjaExpc3QsXG4gICAgICAgICAgX3JlZjkgPSBfc2xpY2VkVG9BcnJheShfcmVmOCwgMiksXG4gICAgICAgICAgYSA9IF9yZWY5WzBdLFxuICAgICAgICAgIGIgPSBfcmVmOVsxXTtcblxuICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhhLnggLSBiLngsIDIpICsgTWF0aC5wb3coYS55IC0gYi55LCAyKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhbGN1bGF0ZVBpbmNoQ2VudGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGN1bGF0ZVBpbmNoQ2VudGVyKCkge1xuICAgICAgdmFyIF9yZWYxMCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdGhpcy5waW5jaFRvdWNoTGlzdCxcbiAgICAgICAgICBfcmVmMTEgPSBfc2xpY2VkVG9BcnJheShfcmVmMTAsIDIpLFxuICAgICAgICAgIGEgPSBfcmVmMTFbMF0sXG4gICAgICAgICAgYiA9IF9yZWYxMVsxXTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogYS54IC0gKGEueCAtIGIueCkgLyAyLFxuICAgICAgICB5OiBhLnkgLSAoYS55IC0gYi55KSAvIDJcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVBpbmNoU3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlUGluY2hTdGFydChwb2ludGVyTGlzdCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmVuYWJsZVpvb20pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBBQ1RJT05fUElOQ0g7XG4gICAgICB0aGlzLnBpbmNoVG91Y2hMaXN0ID0gcG9pbnRlckxpc3QubWFwKGZ1bmN0aW9uIChfcmVmMTIpIHtcbiAgICAgICAgdmFyIGlkID0gX3JlZjEyLmlkLFxuICAgICAgICAgICAgeCA9IF9yZWYxMi54LFxuICAgICAgICAgICAgeSA9IF9yZWYxMi55O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICB4OiB4LFxuICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5waW5jaERpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVQaW5jaERpc3RhbmNlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVBpbmNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVBpbmNoKHBvaW50ZXJMaXN0KSB7XG4gICAgICB0aGlzLnBpbmNoVG91Y2hMaXN0ID0gdGhpcy5waW5jaFRvdWNoTGlzdC5tYXAoZnVuY3Rpb24gKG9sZFBvaW50ZXIpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludGVyTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChwb2ludGVyTGlzdFtpXS5pZCA9PT0gb2xkUG9pbnRlci5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHBvaW50ZXJMaXN0W2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvbGRQb2ludGVyO1xuICAgICAgfSk7XG4gICAgICB2YXIgbmV3RGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZVBpbmNoRGlzdGFuY2UoKTtcbiAgICAgIHZhciB6b29tTGV2ZWwgPSB0aGlzLnN0YXRlLnpvb21MZXZlbCArIG5ld0Rpc3RhbmNlIC0gdGhpcy5waW5jaERpc3RhbmNlO1xuICAgICAgdGhpcy5waW5jaERpc3RhbmNlID0gbmV3RGlzdGFuY2U7XG5cbiAgICAgIHZhciBfdGhpcyRjYWxjdWxhdGVQaW5jaEMgPSB0aGlzLmNhbGN1bGF0ZVBpbmNoQ2VudGVyKHRoaXMucGluY2hUb3VjaExpc3QpLFxuICAgICAgICAgIGNsaWVudFggPSBfdGhpcyRjYWxjdWxhdGVQaW5jaEMueCxcbiAgICAgICAgICBjbGllbnRZID0gX3RoaXMkY2FsY3VsYXRlUGluY2hDLnk7XG5cbiAgICAgIHRoaXMuY2hhbmdlWm9vbSh6b29tTGV2ZWwsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVQaW5jaEVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVQaW5jaEVuZCgpIHtcbiAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IEFDVElPTl9OT05FO1xuICAgICAgdGhpcy5waW5jaFRvdWNoTGlzdCA9IG51bGw7XG4gICAgICB0aGlzLnBpbmNoRGlzdGFuY2UgPSAwO1xuICAgIH0gLy8gSGFuZGxlIHRoZSB3aW5kb3cgcmVzaXplIGV2ZW50XG5cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVXaW5kb3dSZXNpemVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlV2luZG93UmVzaXplKCkge1xuICAgICAgdGhpcy5jbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcbiAgICAgIHRoaXMucmVzaXplVGltZW91dCA9IHRoaXMuc2V0VGltZW91dCh0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcyksIDEwMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVpvb21JbkJ1dHRvbkNsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVpvb21JbkJ1dHRvbkNsaWNrKCkge1xuICAgICAgdmFyIG5leHRab29tTGV2ZWwgPSB0aGlzLnN0YXRlLnpvb21MZXZlbCArIFpPT01fQlVUVE9OX0lOQ1JFTUVOVF9TSVpFO1xuICAgICAgdGhpcy5jaGFuZ2Vab29tKG5leHRab29tTGV2ZWwpO1xuXG4gICAgICBpZiAobmV4dFpvb21MZXZlbCA9PT0gTUFYX1pPT01fTEVWRUwpIHtcbiAgICAgICAgdGhpcy56b29tT3V0QnRuLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlWm9vbU91dEJ1dHRvbkNsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVpvb21PdXRCdXR0b25DbGljaygpIHtcbiAgICAgIHZhciBuZXh0Wm9vbUxldmVsID0gdGhpcy5zdGF0ZS56b29tTGV2ZWwgLSBaT09NX0JVVFRPTl9JTkNSRU1FTlRfU0laRTtcbiAgICAgIHRoaXMuY2hhbmdlWm9vbShuZXh0Wm9vbUxldmVsKTtcblxuICAgICAgaWYgKG5leHRab29tTGV2ZWwgPT09IE1JTl9aT09NX0xFVkVMKSB7XG4gICAgICAgIHRoaXMuem9vbUluQnRuLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlQ2FwdGlvbk1vdXNld2hlZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2FwdGlvbk1vdXNld2hlZWwoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAoIXRoaXMuY2FwdGlvbi5jdXJyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIF90aGlzJGNhcHRpb24kY3VycmVudCA9IHRoaXMuY2FwdGlvbi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGhlaWdodCA9IF90aGlzJGNhcHRpb24kY3VycmVudC5oZWlnaHQ7XG5cbiAgICAgIHZhciBfdGhpcyRjYXB0aW9uJGN1cnJlbnQyID0gdGhpcy5jYXB0aW9uLmN1cnJlbnQsXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gX3RoaXMkY2FwdGlvbiRjdXJyZW50Mi5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX3RoaXMkY2FwdGlvbiRjdXJyZW50Mi5zY3JvbGxUb3A7XG5cbiAgICAgIGlmIChldmVudC5kZWx0YVkgPiAwICYmIGhlaWdodCArIHNjcm9sbFRvcCA+PSBzY3JvbGxIZWlnaHQgfHwgZXZlbnQuZGVsdGFZIDwgMCAmJiBzY3JvbGxUb3AgPD0gMCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0gLy8gRGV0YWNoIGtleSBhbmQgbW91c2UgaW5wdXQgZXZlbnRzXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0FuaW1hdGluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0FuaW1hdGluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNob3VsZEFuaW1hdGUgfHwgdGhpcy5zdGF0ZS5pc0Nsb3Npbmc7XG4gICAgfSAvLyBDaGVjayBpZiBpbWFnZSBpcyBsb2FkZWRcblxuICB9LCB7XG4gICAga2V5OiBcImlzSW1hZ2VMb2FkZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNJbWFnZUxvYWRlZChpbWFnZVNyYykge1xuICAgICAgcmV0dXJuIGltYWdlU3JjICYmIGltYWdlU3JjIGluIHRoaXMuaW1hZ2VDYWNoZSAmJiB0aGlzLmltYWdlQ2FjaGVbaW1hZ2VTcmNdLmxvYWRlZDtcbiAgICB9IC8vIExvYWQgaW1hZ2UgZnJvbSBzcmMgYW5kIGNhbGwgY2FsbGJhY2sgd2l0aCBpbWFnZSB3aWR0aCBhbmQgaGVpZ2h0IG9uIGxvYWRcblxuICB9LCB7XG4gICAga2V5OiBcImxvYWRJbWFnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkSW1hZ2Uoc3JjVHlwZSwgaW1hZ2VTcmMsIGRvbmUpIHtcbiAgICAgIHZhciBfdGhpczEyID0gdGhpcztcblxuICAgICAgLy8gUmV0dXJuIHRoZSBpbWFnZSBpbmZvIGlmIGl0IGlzIGFscmVhZHkgY2FjaGVkXG4gICAgICBpZiAodGhpcy5pc0ltYWdlTG9hZGVkKGltYWdlU3JjKSkge1xuICAgICAgICB0aGlzLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGluTWVtb3J5SW1hZ2UgPSBuZXcgZ2xvYmFsLkltYWdlKCk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmltYWdlQ3Jvc3NPcmlnaW4pIHtcbiAgICAgICAgaW5NZW1vcnlJbWFnZS5jcm9zc09yaWdpbiA9IHRoaXMucHJvcHMuaW1hZ2VDcm9zc09yaWdpbjtcbiAgICAgIH1cblxuICAgICAgaW5NZW1vcnlJbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yRXZlbnQpIHtcbiAgICAgICAgX3RoaXMxMi5wcm9wcy5vbkltYWdlTG9hZEVycm9yKGltYWdlU3JjLCBzcmNUeXBlLCBlcnJvckV2ZW50KTsgLy8gZmFpbGVkIHRvIGxvYWQgc28gc2V0IHRoZSBzdGF0ZSBsb2FkRXJyb3JTdGF0dXNcblxuXG4gICAgICAgIF90aGlzMTIuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2FkRXJyb3JTdGF0dXM6IF9vYmplY3RTcHJlYWQoe30sIHByZXZTdGF0ZS5sb2FkRXJyb3JTdGF0dXMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgc3JjVHlwZSwgdHJ1ZSkpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9uZShlcnJvckV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIGluTWVtb3J5SW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczEyLnByb3BzLm9uSW1hZ2VMb2FkKGltYWdlU3JjLCBzcmNUeXBlLCBpbk1lbW9yeUltYWdlKTtcblxuICAgICAgICBfdGhpczEyLmltYWdlQ2FjaGVbaW1hZ2VTcmNdID0ge1xuICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICB3aWR0aDogaW5NZW1vcnlJbWFnZS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGluTWVtb3J5SW1hZ2UuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH07XG5cbiAgICAgIGluTWVtb3J5SW1hZ2Uuc3JjID0gaW1hZ2VTcmM7XG4gICAgfSAvLyBMb2FkIGFsbCBpbWFnZXMgYW5kIHRoZWlyIHRodW1ibmFpbHNcblxuICB9LCB7XG4gICAga2V5OiBcImxvYWRBbGxJbWFnZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZEFsbEltYWdlcygpIHtcbiAgICAgIHZhciBfdGhpczEzID0gdGhpcztcblxuICAgICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0aGlzLnByb3BzO1xuXG4gICAgICB2YXIgZ2VuZXJhdGVMb2FkRG9uZUNhbGxiYWNrID0gZnVuY3Rpb24gZ2VuZXJhdGVMb2FkRG9uZUNhbGxiYWNrKHNyY1R5cGUsIGltYWdlU3JjKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgLy8gR2l2ZSB1cCBzaG93aW5nIGltYWdlIG9uIGVycm9yXG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gRG9uJ3QgcmVyZW5kZXIgaWYgdGhlIHNyYyBpcyBub3QgdGhlIHNhbWUgYXMgd2hlbiB0aGUgbG9hZCBzdGFydGVkXG4gICAgICAgICAgLy8gb3IgaWYgdGhlIGNvbXBvbmVudCBoYXMgdW5tb3VudGVkXG5cblxuICAgICAgICAgIGlmIChfdGhpczEzLnByb3BzW3NyY1R5cGVdICE9PSBpbWFnZVNyYyB8fCBfdGhpczEzLmRpZFVubW91bnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IC8vIEZvcmNlIHJlcmVuZGVyIHdpdGggdGhlIG5ldyBpbWFnZVxuXG5cbiAgICAgICAgICBfdGhpczEzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH07XG4gICAgICB9OyAvLyBMb2FkIHRoZSBpbWFnZXNcblxuXG4gICAgICB0aGlzLmdldFNyY1R5cGVzKCkuZm9yRWFjaChmdW5jdGlvbiAoc3JjVHlwZSkge1xuICAgICAgICB2YXIgdHlwZSA9IHNyY1R5cGUubmFtZTsgLy8gdGhlcmUgaXMgbm8gZXJyb3Igd2hlbiB3ZSB0cnkgdG8gbG9hZCBpdCBpbml0aWFsbHlcblxuICAgICAgICBpZiAocHJvcHNbdHlwZV0gJiYgX3RoaXMxMy5zdGF0ZS5sb2FkRXJyb3JTdGF0dXNbdHlwZV0pIHtcbiAgICAgICAgICBfdGhpczEzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGxvYWRFcnJvclN0YXR1czogX29iamVjdFNwcmVhZCh7fSwgcHJldlN0YXRlLmxvYWRFcnJvclN0YXR1cywgX2RlZmluZVByb3BlcnR5KHt9LCB0eXBlLCBmYWxzZSkpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IC8vIExvYWQgdW5sb2FkZWQgaW1hZ2VzXG5cblxuICAgICAgICBpZiAocHJvcHNbdHlwZV0gJiYgIV90aGlzMTMuaXNJbWFnZUxvYWRlZChwcm9wc1t0eXBlXSkpIHtcbiAgICAgICAgICBfdGhpczEzLmxvYWRJbWFnZSh0eXBlLCBwcm9wc1t0eXBlXSwgZ2VuZXJhdGVMb2FkRG9uZUNhbGxiYWNrKHR5cGUsIHByb3BzW3R5cGVdKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gUmVxdWVzdCB0aGF0IHRoZSBsaWdodGJveCBiZSBjbG9zZWRcblxuICB9LCB7XG4gICAga2V5OiBcInJlcXVlc3RDbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0Q2xvc2UoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpczE0ID0gdGhpcztcblxuICAgICAgLy8gQ2FsbCB0aGUgcGFyZW50IGNsb3NlIHJlcXVlc3RcbiAgICAgIHZhciBjbG9zZUxpZ2h0Ym94ID0gZnVuY3Rpb24gY2xvc2VMaWdodGJveCgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMTQucHJvcHMub25DbG9zZVJlcXVlc3QoZXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuYW5pbWF0aW9uRGlzYWJsZWQgfHwgZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nICYmICF0aGlzLnByb3BzLmFuaW1hdGlvbk9uS2V5SW5wdXQpIHtcbiAgICAgICAgLy8gTm8gYW5pbWF0aW9uXG4gICAgICAgIGNsb3NlTGlnaHRib3goKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBXaXRoIGFuaW1hdGlvblxuICAgICAgLy8gU3RhcnQgY2xvc2luZyBhbmltYXRpb25cblxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNDbG9zaW5nOiB0cnVlXG4gICAgICB9KTsgLy8gUGVyZm9ybSB0aGUgYWN0dWFsIGNsb3NpbmcgYXQgdGhlIGVuZCBvZiB0aGUgYW5pbWF0aW9uXG5cbiAgICAgIHRoaXMuc2V0VGltZW91dChjbG9zZUxpZ2h0Ym94LCB0aGlzLnByb3BzLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWVzdE1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdE1vdmUoZGlyZWN0aW9uLCBldmVudCkge1xuICAgICAgdmFyIF90aGlzMTUgPSB0aGlzO1xuXG4gICAgICAvLyBSZXNldCB0aGUgem9vbSBsZXZlbCBvbiBpbWFnZSBtb3ZlXG4gICAgICB2YXIgbmV4dFN0YXRlID0ge1xuICAgICAgICB6b29tTGV2ZWw6IE1JTl9aT09NX0xFVkVMLFxuICAgICAgICBvZmZzZXRYOiAwLFxuICAgICAgICBvZmZzZXRZOiAwXG4gICAgICB9OyAvLyBFbmFibGUgYW5pbWF0ZWQgc3RhdGVzXG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5hbmltYXRpb25EaXNhYmxlZCAmJiAoIXRoaXMua2V5UHJlc3NlZCB8fCB0aGlzLnByb3BzLmFuaW1hdGlvbk9uS2V5SW5wdXQpKSB7XG4gICAgICAgIG5leHRTdGF0ZS5zaG91bGRBbmltYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMxNS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG91bGRBbmltYXRlOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCB0aGlzLnByb3BzLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5rZXlQcmVzc2VkID0gZmFsc2U7XG4gICAgICB0aGlzLm1vdmVSZXF1ZXN0ZWQgPSB0cnVlO1xuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgdGhpcy5rZXlDb3VudGVyIC09IDE7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmVQcmV2UmVxdWVzdChldmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmtleUNvdW50ZXIgKz0gMTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgICAgICB0aGlzLnByb3BzLm9uTW92ZU5leHRSZXF1ZXN0KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9IC8vIFJlcXVlc3QgdG8gdHJhbnNpdGlvbiB0byB0aGUgbmV4dCBpbWFnZVxuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWVzdE1vdmVOZXh0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RNb3ZlTmV4dChldmVudCkge1xuICAgICAgdGhpcy5yZXF1ZXN0TW92ZSgnbmV4dCcsIGV2ZW50KTtcbiAgICB9IC8vIFJlcXVlc3QgdG8gdHJhbnNpdGlvbiB0byB0aGUgcHJldmlvdXMgaW1hZ2VcblxuICB9LCB7XG4gICAga2V5OiBcInJlcXVlc3RNb3ZlUHJldlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0TW92ZVByZXYoZXZlbnQpIHtcbiAgICAgIHRoaXMucmVxdWVzdE1vdmUoJ3ByZXYnLCBldmVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMxNiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYW5pbWF0aW9uRGlzYWJsZWQgPSBfdGhpcyRwcm9wcy5hbmltYXRpb25EaXNhYmxlZCxcbiAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbiA9IF90aGlzJHByb3BzLmFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2UgPSBfdGhpcyRwcm9wcy5jbGlja091dHNpZGVUb0Nsb3NlLFxuICAgICAgICAgIGRpc2NvdXJhZ2VEb3dubG9hZHMgPSBfdGhpcyRwcm9wcy5kaXNjb3VyYWdlRG93bmxvYWRzLFxuICAgICAgICAgIGVuYWJsZVpvb20gPSBfdGhpcyRwcm9wcy5lbmFibGVab29tLFxuICAgICAgICAgIGltYWdlVGl0bGUgPSBfdGhpcyRwcm9wcy5pbWFnZVRpdGxlLFxuICAgICAgICAgIG5leHRTcmMgPSBfdGhpcyRwcm9wcy5uZXh0U3JjLFxuICAgICAgICAgIHByZXZTcmMgPSBfdGhpcyRwcm9wcy5wcmV2U3JjLFxuICAgICAgICAgIHRvb2xiYXJCdXR0b25zID0gX3RoaXMkcHJvcHMudG9vbGJhckJ1dHRvbnMsXG4gICAgICAgICAgcmVhY3RNb2RhbFN0eWxlID0gX3RoaXMkcHJvcHMucmVhY3RNb2RhbFN0eWxlLFxuICAgICAgICAgIF9vbkFmdGVyT3BlbiA9IF90aGlzJHByb3BzLm9uQWZ0ZXJPcGVuLFxuICAgICAgICAgIGltYWdlQ3Jvc3NPcmlnaW4gPSBfdGhpcyRwcm9wcy5pbWFnZUNyb3NzT3JpZ2luLFxuICAgICAgICAgIHJlYWN0TW9kYWxQcm9wcyA9IF90aGlzJHByb3BzLnJlYWN0TW9kYWxQcm9wcztcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgem9vbUxldmVsID0gX3RoaXMkc3RhdGUuem9vbUxldmVsLFxuICAgICAgICAgIG9mZnNldFggPSBfdGhpcyRzdGF0ZS5vZmZzZXRYLFxuICAgICAgICAgIG9mZnNldFkgPSBfdGhpcyRzdGF0ZS5vZmZzZXRZLFxuICAgICAgICAgIGlzQ2xvc2luZyA9IF90aGlzJHN0YXRlLmlzQ2xvc2luZyxcbiAgICAgICAgICBsb2FkRXJyb3JTdGF0dXMgPSBfdGhpcyRzdGF0ZS5sb2FkRXJyb3JTdGF0dXM7XG4gICAgICB2YXIgYm94U2l6ZSA9IHRoaXMuZ2V0TGlnaHRib3hSZWN0KCk7XG4gICAgICB2YXIgdHJhbnNpdGlvblN0eWxlID0ge307IC8vIFRyYW5zaXRpb24gc2V0dGluZ3MgZm9yIHNsaWRpbmcgYW5pbWF0aW9uc1xuXG4gICAgICBpZiAoIWFuaW1hdGlvbkRpc2FibGVkICYmIHRoaXMuaXNBbmltYXRpbmcoKSkge1xuICAgICAgICB0cmFuc2l0aW9uU3R5bGUgPSBfb2JqZWN0U3ByZWFkKHt9LCB0cmFuc2l0aW9uU3R5bGUsIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSBcIi5jb25jYXQoYW5pbWF0aW9uRHVyYXRpb24sIFwibXNcIilcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIEtleSBlbmRpbmdzIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBpbWFnZXMgd2l0aCB0aGUgc2FtZSBzcmNcblxuXG4gICAgICB2YXIga2V5RW5kaW5ncyA9IHt9O1xuICAgICAgdGhpcy5nZXRTcmNUeXBlcygpLmZvckVhY2goZnVuY3Rpb24gKF9yZWYxMykge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYxMy5uYW1lLFxuICAgICAgICAgICAga2V5RW5kaW5nID0gX3JlZjEzLmtleUVuZGluZztcbiAgICAgICAga2V5RW5kaW5nc1tuYW1lXSA9IGtleUVuZGluZztcbiAgICAgIH0pOyAvLyBJbWFnZXMgdG8gYmUgZGlzcGxheWVkXG5cbiAgICAgIHZhciBpbWFnZXMgPSBbXTtcblxuICAgICAgdmFyIGFkZEltYWdlID0gZnVuY3Rpb24gYWRkSW1hZ2Uoc3JjVHlwZSwgaW1hZ2VDbGFzcywgdHJhbnNmb3Jtcykge1xuICAgICAgICAvLyBJZ25vcmUgdHlwZXMgdGhhdCBoYXZlIG5vIHNvdXJjZSBkZWZpbmVkIGZvciB0aGVpciBmdWxsIHNpemUgaW1hZ2VcbiAgICAgICAgaWYgKCFfdGhpczE2LnByb3BzW3NyY1R5cGVdKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJlc3RJbWFnZUluZm8gPSBfdGhpczE2LmdldEJlc3RJbWFnZUZvclR5cGUoc3JjVHlwZSk7XG5cbiAgICAgICAgdmFyIGltYWdlU3R5bGUgPSBfb2JqZWN0U3ByZWFkKHt9LCB0cmFuc2l0aW9uU3R5bGUsIFJlYWN0SW1hZ2VMaWdodGJveC5nZXRUcmFuc2Zvcm0oX29iamVjdFNwcmVhZCh7fSwgdHJhbnNmb3JtcywgYmVzdEltYWdlSW5mbykpKTtcblxuICAgICAgICBpZiAoem9vbUxldmVsID4gTUlOX1pPT01fTEVWRUwpIHtcbiAgICAgICAgICBpbWFnZVN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgICAgICAgfSAvLyBzdXBwb3J0IElFIDkgYW5kIDExXG5cblxuICAgICAgICB2YXIgaGFzVHJ1ZVZhbHVlID0gZnVuY3Rpb24gaGFzVHJ1ZVZhbHVlKG9iamVjdCkge1xuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdFtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9OyAvLyB3aGVuIGVycm9yIG9uIG9uZSBvZiB0aGUgbG9hZHMgdGhlbiBwdXNoIGN1c3RvbSBlcnJvciBzdHVmZlxuXG5cbiAgICAgICAgaWYgKGJlc3RJbWFnZUluZm8gPT09IG51bGwgJiYgaGFzVHJ1ZVZhbHVlKGxvYWRFcnJvclN0YXR1cykpIHtcbiAgICAgICAgICBpbWFnZXMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoaW1hZ2VDbGFzcywgXCIgcmlsX19pbWFnZSByaWwtZXJyb3JlZFwiKSxcbiAgICAgICAgICAgIHN0eWxlOiBpbWFnZVN0eWxlLFxuICAgICAgICAgICAga2V5OiBfdGhpczE2LnByb3BzW3NyY1R5cGVdICsga2V5RW5kaW5nc1tzcmNUeXBlXVxuICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcInJpbF9fZXJyb3JDb250YWluZXJcIlxuICAgICAgICAgIH0sIF90aGlzMTYucHJvcHMuaW1hZ2VMb2FkRXJyb3JNZXNzYWdlKSkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZXN0SW1hZ2VJbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgdmFyIGxvYWRpbmdJY29uID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwicmlsLWxvYWRpbmctY2lyY2xlIHJpbF9fbG9hZGluZ0NpcmNsZSByaWxfX2xvYWRpbmdDb250YWluZXJfX2ljb25cIlxuICAgICAgICAgIH0sIF90b0NvbnN1bWFibGVBcnJheShuZXcgQXJyYXkoMTIpKS5tYXAoZnVuY3Rpb24gKF8sIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInJpbC1sb2FkaW5nLWNpcmNsZS1wb2ludCByaWxfX2xvYWRpbmdDaXJjbGVQb2ludFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSk7IC8vIEZhbGwgYmFjayB0byBsb2FkaW5nIGljb24gaWYgdGhlIHRodW1ibmFpbCBoYXMgbm90IGJlZW4gbG9hZGVkXG5cbiAgICAgICAgICBpbWFnZXMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoaW1hZ2VDbGFzcywgXCIgcmlsX19pbWFnZSByaWwtbm90LWxvYWRlZFwiKSxcbiAgICAgICAgICAgIHN0eWxlOiBpbWFnZVN0eWxlLFxuICAgICAgICAgICAga2V5OiBfdGhpczE2LnByb3BzW3NyY1R5cGVdICsga2V5RW5kaW5nc1tzcmNUeXBlXVxuICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcInJpbF9fbG9hZGluZ0NvbnRhaW5lclwiXG4gICAgICAgICAgfSwgbG9hZGluZ0ljb24pKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGltYWdlU3JjID0gYmVzdEltYWdlSW5mby5zcmM7XG5cbiAgICAgICAgaWYgKGRpc2NvdXJhZ2VEb3dubG9hZHMpIHtcbiAgICAgICAgICBpbWFnZVN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdcIi5jb25jYXQoaW1hZ2VTcmMsIFwiJylcIik7XG4gICAgICAgICAgaW1hZ2VzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGltYWdlQ2xhc3MsIFwiIHJpbF9faW1hZ2UgcmlsX19pbWFnZURpc2NvdXJhZ2VyXCIpLFxuICAgICAgICAgICAgb25Eb3VibGVDbGljazogX3RoaXMxNi5oYW5kbGVJbWFnZURvdWJsZUNsaWNrLFxuICAgICAgICAgICAgb25XaGVlbDogX3RoaXMxNi5oYW5kbGVJbWFnZU1vdXNlV2hlZWwsXG4gICAgICAgICAgICBzdHlsZTogaW1hZ2VTdHlsZSxcbiAgICAgICAgICAgIGtleTogaW1hZ2VTcmMgKyBrZXlFbmRpbmdzW3NyY1R5cGVdXG4gICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwicmlsLWRvd25sb2FkLWJsb2NrZXIgcmlsX19kb3dubG9hZEJsb2NrZXJcIlxuICAgICAgICAgIH0pKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW1hZ2VzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCBfZXh0ZW5kcyh7fSwgaW1hZ2VDcm9zc09yaWdpbiA/IHtcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luOiBpbWFnZUNyb3NzT3JpZ2luXG4gICAgICAgICAgfSA6IHt9LCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGltYWdlQ2xhc3MsIFwiIHJpbF9faW1hZ2VcIiksXG4gICAgICAgICAgICBvbkRvdWJsZUNsaWNrOiBfdGhpczE2LmhhbmRsZUltYWdlRG91YmxlQ2xpY2ssXG4gICAgICAgICAgICBvbldoZWVsOiBfdGhpczE2LmhhbmRsZUltYWdlTW91c2VXaGVlbCxcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0OiBmdW5jdGlvbiBvbkRyYWdTdGFydChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3R5bGU6IGltYWdlU3R5bGUsXG4gICAgICAgICAgICBzcmM6IGltYWdlU3JjLFxuICAgICAgICAgICAga2V5OiBpbWFnZVNyYyArIGtleUVuZGluZ3Nbc3JjVHlwZV0sXG4gICAgICAgICAgICBhbHQ6IHR5cGVvZiBpbWFnZVRpdGxlID09PSAnc3RyaW5nJyA/IGltYWdlVGl0bGUgOiB0cmFuc2xhdGUoJ0ltYWdlJyksXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlXG4gICAgICAgICAgfSkpKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIHpvb21NdWx0aXBsaWVyID0gdGhpcy5nZXRab29tTXVsdGlwbGllcigpOyAvLyBOZXh0IEltYWdlIChkaXNwbGF5ZWQgb24gdGhlIHJpZ2h0KVxuXG4gICAgICBhZGRJbWFnZSgnbmV4dFNyYycsICdyaWwtaW1hZ2UtbmV4dCByaWxfX2ltYWdlTmV4dCcsIHtcbiAgICAgICAgeDogYm94U2l6ZS53aWR0aFxuICAgICAgfSk7IC8vIE1haW4gSW1hZ2VcblxuICAgICAgYWRkSW1hZ2UoJ21haW5TcmMnLCAncmlsLWltYWdlLWN1cnJlbnQnLCB7XG4gICAgICAgIHg6IC0xICogb2Zmc2V0WCxcbiAgICAgICAgeTogLTEgKiBvZmZzZXRZLFxuICAgICAgICB6b29tOiB6b29tTXVsdGlwbGllclxuICAgICAgfSk7IC8vIFByZXZpb3VzIEltYWdlIChkaXNwbGF5ZWQgb24gdGhlIGxlZnQpXG5cbiAgICAgIGFkZEltYWdlKCdwcmV2U3JjJywgJ3JpbC1pbWFnZS1wcmV2IHJpbF9faW1hZ2VQcmV2Jywge1xuICAgICAgICB4OiAtMSAqIGJveFNpemUud2lkdGhcbiAgICAgIH0pO1xuICAgICAgdmFyIG1vZGFsU3R5bGUgPSB7XG4gICAgICAgIG92ZXJsYXk6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgIHpJbmRleDogMTAwMCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfSwgcmVhY3RNb2RhbFN0eWxlLm92ZXJsYXkpLFxuICAgICAgICBjb250ZW50OiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIC8vIE5lZWRlZCwgb3RoZXJ3aXNlIGtleWJvYXJkIHNob3J0Y3V0cyBzY3JvbGwgdGhlIHBhZ2VcbiAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICBib3R0b206IDBcbiAgICAgICAgfSwgcmVhY3RNb2RhbFN0eWxlLmNvbnRlbnQpXG4gICAgICB9O1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwsIF9leHRlbmRzKHtcbiAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICBvblJlcXVlc3RDbG9zZTogY2xpY2tPdXRzaWRlVG9DbG9zZSA/IHRoaXMucmVxdWVzdENsb3NlIDogdW5kZWZpbmVkLFxuICAgICAgICBvbkFmdGVyT3BlbjogZnVuY3Rpb24gb25BZnRlck9wZW4oKSB7XG4gICAgICAgICAgLy8gRm9jdXMgb24gdGhlIGRpdiB3aXRoIGtleSBoYW5kbGVyc1xuICAgICAgICAgIGlmIChfdGhpczE2Lm91dGVyRWwuY3VycmVudCkge1xuICAgICAgICAgICAgX3RoaXMxNi5vdXRlckVsLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfb25BZnRlck9wZW4oKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IG1vZGFsU3R5bGUsXG4gICAgICAgIGNvbnRlbnRMYWJlbDogdHJhbnNsYXRlKCdMaWdodGJveCcpLFxuICAgICAgICBhcHBFbGVtZW50OiB0eXBlb2YgZ2xvYmFsLndpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwud2luZG93LmRvY3VtZW50LmJvZHkgOiB1bmRlZmluZWRcbiAgICAgIH0sIHJlYWN0TW9kYWxQcm9wcyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9uc1xuICAgICAgICAvLyBGbG9hdGluZyBtb2RhbCB3aXRoIGNsb3NpbmcgYW5pbWF0aW9uc1xuICAgICAgICBjbGFzc05hbWU6IFwicmlsLW91dGVyIHJpbF9fb3V0ZXIgcmlsX19vdXRlckFuaW1hdGluZyBcIi5jb25jYXQodGhpcy5wcm9wcy53cmFwcGVyQ2xhc3NOYW1lLCBcIiBcIikuY29uY2F0KGlzQ2xvc2luZyA/ICdyaWwtY2xvc2luZyByaWxfX291dGVyQ2xvc2luZycgOiAnJyksXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IFwiLmNvbmNhdChhbmltYXRpb25EdXJhdGlvbiwgXCJtc1wiKSxcbiAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogXCJcIi5jb25jYXQoYW5pbWF0aW9uRHVyYXRpb24sIFwibXNcIiksXG4gICAgICAgICAgYW5pbWF0aW9uRGlyZWN0aW9uOiBpc0Nsb3NpbmcgPyAnbm9ybWFsJyA6ICdyZXZlcnNlJ1xuICAgICAgICB9LFxuICAgICAgICByZWY6IHRoaXMub3V0ZXJFbCxcbiAgICAgICAgb25XaGVlbDogdGhpcy5oYW5kbGVPdXRlck1vdXNld2hlZWwsXG4gICAgICAgIG9uTW91c2VNb3ZlOiB0aGlzLmhhbmRsZU1vdXNlTW92ZSxcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLFxuICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgb25Ub3VjaE1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlLFxuICAgICAgICB0YWJJbmRleDogXCItMVwiIC8vIEVuYWJsZXMga2V5IGhhbmRsZXJzIG9uIGRpdlxuICAgICAgICAsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlJbnB1dCxcbiAgICAgICAgb25LZXlVcDogdGhpcy5oYW5kbGVLZXlJbnB1dFxuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zLCBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzXG4gICAgICAgIC8vIEltYWdlIGhvbGRlclxuICAgICAgICBjbGFzc05hbWU6IFwicmlsLWlubmVyIHJpbF9faW5uZXJcIixcbiAgICAgICAgb25DbGljazogY2xpY2tPdXRzaWRlVG9DbG9zZSA/IHRoaXMuY2xvc2VJZkNsaWNrSW5uZXIgOiB1bmRlZmluZWRcbiAgICAgIH0sIGltYWdlcyksIHByZXZTcmMgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgIC8vIE1vdmUgdG8gcHJldmlvdXMgaW1hZ2UgYnV0dG9uXG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJyaWwtcHJldi1idXR0b24gcmlsX19uYXZCdXR0b25zIHJpbF9fbmF2QnV0dG9uUHJldlwiLFxuICAgICAgICBrZXk6IFwicHJldlwiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogdGhpcy5wcm9wcy5wcmV2TGFiZWwsXG4gICAgICAgIG9uQ2xpY2s6ICF0aGlzLmlzQW5pbWF0aW5nKCkgPyB0aGlzLnJlcXVlc3RNb3ZlUHJldiA6IHVuZGVmaW5lZCAvLyBJZ25vcmUgY2xpY2tzIGR1cmluZyBhbmltYXRpb25cblxuICAgICAgfSksIG5leHRTcmMgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgIC8vIE1vdmUgdG8gbmV4dCBpbWFnZSBidXR0b25cbiAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcInJpbC1uZXh0LWJ1dHRvbiByaWxfX25hdkJ1dHRvbnMgcmlsX19uYXZCdXR0b25OZXh0XCIsXG4gICAgICAgIGtleTogXCJuZXh0XCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnByb3BzLm5leHRMYWJlbCxcbiAgICAgICAgb25DbGljazogIXRoaXMuaXNBbmltYXRpbmcoKSA/IHRoaXMucmVxdWVzdE1vdmVOZXh0IDogdW5kZWZpbmVkIC8vIElnbm9yZSBjbGlja3MgZHVyaW5nIGFuaW1hdGlvblxuXG4gICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIC8vIExpZ2h0Ym94IHRvb2xiYXJcbiAgICAgICAgY2xhc3NOYW1lOiBcInJpbC10b29sYmFyIHJpbF9fdG9vbGJhclwiXG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwicmlsLXRvb2xiYXItbGVmdCByaWxfX3Rvb2xiYXJTaWRlIHJpbF9fdG9vbGJhckxlZnRTaWRlXCJcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJyaWwtdG9vbGJhcl9faXRlbSByaWxfX3Rvb2xiYXJJdGVtXCJcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInJpbC10b29sYmFyX19pdGVtX19jaGlsZCByaWxfX3Rvb2xiYXJJdGVtQ2hpbGRcIlxuICAgICAgfSwgaW1hZ2VUaXRsZSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInJpbC10b29sYmFyLXJpZ2h0IHJpbF9fdG9vbGJhclNpZGUgcmlsX190b29sYmFyUmlnaHRTaWRlXCJcbiAgICAgIH0sIHRvb2xiYXJCdXR0b25zICYmIHRvb2xiYXJCdXR0b25zLm1hcChmdW5jdGlvbiAoYnV0dG9uLCBpKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAgICAgIGtleTogXCJidXR0b25fXCIuY29uY2F0KGkgKyAxKSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwicmlsLXRvb2xiYXJfX2l0ZW0gcmlsX190b29sYmFySXRlbVwiXG4gICAgICAgIH0sIGJ1dHRvbik7XG4gICAgICB9KSwgZW5hYmxlWm9vbSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwicmlsLXRvb2xiYXJfX2l0ZW0gcmlsX190b29sYmFySXRlbVwiXG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgLy8gTGlnaHRib3ggem9vbSBpbiBidXR0b25cbiAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAga2V5OiBcInpvb20taW5cIixcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHRoaXMucHJvcHMuem9vbUluTGFiZWwsXG4gICAgICAgIGNsYXNzTmFtZTogWydyaWwtem9vbS1pbicsICdyaWxfX3Rvb2xiYXJJdGVtQ2hpbGQnLCAncmlsX19idWlsdGluQnV0dG9uJywgJ3JpbF9fem9vbUluQnV0dG9uJ10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh6b29tTGV2ZWwgPT09IE1BWF9aT09NX0xFVkVMID8gWydyaWxfX2J1aWx0aW5CdXR0b25EaXNhYmxlZCddIDogW10pKS5qb2luKCcgJyksXG4gICAgICAgIHJlZjogdGhpcy56b29tSW5CdG4sXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLmlzQW5pbWF0aW5nKCkgfHwgem9vbUxldmVsID09PSBNQVhfWk9PTV9MRVZFTCxcbiAgICAgICAgb25DbGljazogIXRoaXMuaXNBbmltYXRpbmcoKSAmJiB6b29tTGV2ZWwgIT09IE1BWF9aT09NX0xFVkVMID8gdGhpcy5oYW5kbGVab29tSW5CdXR0b25DbGljayA6IHVuZGVmaW5lZFxuICAgICAgfSkpLCBlbmFibGVab29tICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJyaWwtdG9vbGJhcl9faXRlbSByaWxfX3Rvb2xiYXJJdGVtXCJcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICAvLyBMaWdodGJveCB6b29tIG91dCBidXR0b25cbiAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAga2V5OiBcInpvb20tb3V0XCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnByb3BzLnpvb21PdXRMYWJlbCxcbiAgICAgICAgY2xhc3NOYW1lOiBbJ3JpbC16b29tLW91dCcsICdyaWxfX3Rvb2xiYXJJdGVtQ2hpbGQnLCAncmlsX19idWlsdGluQnV0dG9uJywgJ3JpbF9fem9vbU91dEJ1dHRvbiddLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoem9vbUxldmVsID09PSBNSU5fWk9PTV9MRVZFTCA/IFsncmlsX19idWlsdGluQnV0dG9uRGlzYWJsZWQnXSA6IFtdKSkuam9pbignICcpLFxuICAgICAgICByZWY6IHRoaXMuem9vbU91dEJ0bixcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNBbmltYXRpbmcoKSB8fCB6b29tTGV2ZWwgPT09IE1JTl9aT09NX0xFVkVMLFxuICAgICAgICBvbkNsaWNrOiAhdGhpcy5pc0FuaW1hdGluZygpICYmIHpvb21MZXZlbCAhPT0gTUlOX1pPT01fTEVWRUwgPyB0aGlzLmhhbmRsZVpvb21PdXRCdXR0b25DbGljayA6IHVuZGVmaW5lZFxuICAgICAgfSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwicmlsLXRvb2xiYXJfX2l0ZW0gcmlsX190b29sYmFySXRlbVwiXG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgLy8gTGlnaHRib3ggY2xvc2UgYnV0dG9uXG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGtleTogXCJjbG9zZVwiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogdGhpcy5wcm9wcy5jbG9zZUxhYmVsLFxuICAgICAgICBjbGFzc05hbWU6IFwicmlsLWNsb3NlIHJpbC10b29sYmFyX19pdGVtX19jaGlsZCByaWxfX3Rvb2xiYXJJdGVtQ2hpbGQgcmlsX19idWlsdGluQnV0dG9uIHJpbF9fY2xvc2VCdXR0b25cIixcbiAgICAgICAgb25DbGljazogIXRoaXMuaXNBbmltYXRpbmcoKSA/IHRoaXMucmVxdWVzdENsb3NlIDogdW5kZWZpbmVkIC8vIElnbm9yZSBjbGlja3MgZHVyaW5nIGFuaW1hdGlvblxuXG4gICAgICB9KSkpKSwgdGhpcy5wcm9wcy5pbWFnZUNhcHRpb24gJiYgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9uc1xuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIC8vIEltYWdlIGNhcHRpb25cbiAgICAgICAgb25XaGVlbDogdGhpcy5oYW5kbGVDYXB0aW9uTW91c2V3aGVlbCxcbiAgICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWU6IFwicmlsLWNhcHRpb24gcmlsX19jYXB0aW9uXCIsXG4gICAgICAgIHJlZjogdGhpcy5jYXB0aW9uXG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInJpbC1jYXB0aW9uLWNvbnRlbnQgcmlsX19jYXB0aW9uQ29udGVudFwiXG4gICAgICB9LCB0aGlzLnByb3BzLmltYWdlQ2FwdGlvbikpKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlYWN0SW1hZ2VMaWdodGJveDtcbn0oQ29tcG9uZW50KTtcblxuUmVhY3RJbWFnZUxpZ2h0Ym94LnByb3BUeXBlcyA9IHtcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBJbWFnZSBzb3VyY2VzXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTWFpbiBkaXNwbGF5IGltYWdlIHVybFxuICBtYWluU3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXNcbiAgLy8gUHJldmlvdXMgZGlzcGxheSBpbWFnZSB1cmwgKGRpc3BsYXllZCB0byB0aGUgbGVmdClcbiAgLy8gSWYgbGVmdCB1bmRlZmluZWQsIG1vdmVQcmV2IGFjdGlvbnMgd2lsbCBub3QgYmUgcGVyZm9ybWVkLCBhbmQgdGhlIGJ1dHRvbiBub3QgZGlzcGxheWVkXG4gIHByZXZTcmM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8vIE5leHQgZGlzcGxheSBpbWFnZSB1cmwgKGRpc3BsYXllZCB0byB0aGUgcmlnaHQpXG4gIC8vIElmIGxlZnQgdW5kZWZpbmVkLCBtb3ZlTmV4dCBhY3Rpb25zIHdpbGwgbm90IGJlIHBlcmZvcm1lZCwgYW5kIHRoZSBidXR0b24gbm90IGRpc3BsYXllZFxuICBuZXh0U3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEltYWdlIHRodW1ibmFpbCBzb3VyY2VzXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gVGh1bWJuYWlsIGltYWdlIHVybCBjb3JyZXNwb25kaW5nIHRvIHByb3BzLm1haW5TcmNcbiAgbWFpblNyY1RodW1ibmFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlc1xuICAvLyBUaHVtYm5haWwgaW1hZ2UgdXJsIGNvcnJlc3BvbmRpbmcgdG8gcHJvcHMucHJldlNyY1xuICBwcmV2U3JjVGh1bWJuYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzXG4gIC8vIFRodW1ibmFpbCBpbWFnZSB1cmwgY29ycmVzcG9uZGluZyB0byBwcm9wcy5uZXh0U3JjXG4gIG5leHRTcmNUaHVtYm5haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXNcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBFdmVudCBIYW5kbGVyc1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIENsb3NlIHdpbmRvdyBldmVudFxuICAvLyBTaG91bGQgY2hhbmdlIHRoZSBwYXJlbnQgc3RhdGUgc3VjaCB0aGF0IHRoZSBsaWdodGJveCBpcyBub3QgcmVuZGVyZWRcbiAgb25DbG9zZVJlcXVlc3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8vIE1vdmUgdG8gcHJldmlvdXMgaW1hZ2UgZXZlbnRcbiAgLy8gU2hvdWxkIGNoYW5nZSB0aGUgcGFyZW50IHN0YXRlIHN1Y2ggdGhhdCBwcm9wcy5wcmV2U3JjIGJlY29tZXMgcHJvcHMubWFpblNyYyxcbiAgLy8gIHByb3BzLm1haW5TcmMgYmVjb21lcyBwcm9wcy5uZXh0U3JjLCBldGMuXG4gIG9uTW92ZVByZXZSZXF1ZXN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgLy8gTW92ZSB0byBuZXh0IGltYWdlIGV2ZW50XG4gIC8vIFNob3VsZCBjaGFuZ2UgdGhlIHBhcmVudCBzdGF0ZSBzdWNoIHRoYXQgcHJvcHMubmV4dFNyYyBiZWNvbWVzIHByb3BzLm1haW5TcmMsXG4gIC8vICBwcm9wcy5tYWluU3JjIGJlY29tZXMgcHJvcHMucHJldlNyYywgZXRjLlxuICBvbk1vdmVOZXh0UmVxdWVzdDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8vIENhbGxlZCB3aGVuIGFuIGltYWdlIGZhaWxzIHRvIGxvYWRcbiAgLy8gKGltYWdlU3JjOiBzdHJpbmcsIHNyY1R5cGU6IHN0cmluZywgZXJyb3JFdmVudDogb2JqZWN0KTogdm9pZFxuICBvbkltYWdlTG9hZEVycm9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgLy8gQ2FsbGVkIHdoZW4gaW1hZ2Ugc3VjY2Vzc2Z1bGx5IGxvYWRzXG4gIG9uSW1hZ2VMb2FkOiBQcm9wVHlwZXMuZnVuYyxcbiAgLy8gT3BlbiB3aW5kb3cgZXZlbnRcbiAgb25BZnRlck9wZW46IFByb3BUeXBlcy5mdW5jLFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIERvd25sb2FkIGRpc2NvdXJhZ2VtZW50IHNldHRpbmdzXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRW5hYmxlIGRvd25sb2FkIGRpc2NvdXJhZ2VtZW50IChwcmV2ZW50cyBbcmlnaHQtY2xpY2sgLT4gU2F2ZSBJbWFnZSBBcy4uLl0pXG4gIGRpc2NvdXJhZ2VEb3dubG9hZHM6IFByb3BUeXBlcy5ib29sLFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEFuaW1hdGlvbiBzZXR0aW5nc1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIERpc2FibGUgYWxsIGFuaW1hdGlvblxuICBhbmltYXRpb25EaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8vIERpc2FibGUgYW5pbWF0aW9uIG9uIGFjdGlvbnMgcGVyZm9ybWVkIHdpdGgga2V5Ym9hcmQgc2hvcnRjdXRzXG4gIGFuaW1hdGlvbk9uS2V5SW5wdXQ6IFByb3BUeXBlcy5ib29sLFxuICAvLyBBbmltYXRpb24gZHVyYXRpb24gKG1zKVxuICBhbmltYXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBLZXlib2FyZCBzaG9ydGN1dCBzZXR0aW5nc1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFJlcXVpcmVkIGludGVydmFsIG9mIHRpbWUgKG1zKSBiZXR3ZWVuIGtleSBhY3Rpb25zXG4gIC8vIChwcmV2ZW50cyBleGNlc3NpdmVseSBmYXN0IG5hdmlnYXRpb24gb2YgaW1hZ2VzKVxuICBrZXlSZXBlYXRMaW1pdDogUHJvcFR5cGVzLm51bWJlcixcbiAgLy8gQW1vdW50IG9mIHRpbWUgKG1zKSByZXN0b3JlZCBhZnRlciBlYWNoIGtleXVwXG4gIC8vIChtYWtlcyByYXBpZCBrZXkgcHJlc3NlcyBzbGlnaHRseSBmYXN0ZXIgdGhhbiBob2xkaW5nIGRvd24gdGhlIGtleSB0byBuYXZpZ2F0ZSBpbWFnZXMpXG4gIGtleVJlcGVhdEtleXVwQm9udXM6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gSW1hZ2UgaW5mb1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEltYWdlIHRpdGxlXG4gIGltYWdlVGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuICAvLyBJbWFnZSBjYXB0aW9uXG4gIGltYWdlQ2FwdGlvbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8vIE9wdGlvbmFsIGNyb3NzT3JpZ2luIGF0dHJpYnV0ZVxuICBpbWFnZUNyb3NzT3JpZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIExpZ2h0Ym94IHN0eWxlXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU2V0IHotaW5kZXggc3R5bGUsIGV0Yy4sIGZvciB0aGUgcGFyZW50IHJlYWN0LW1vZGFsIChmb3JtYXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LW1vZGFsI3N0eWxlcyApXG4gIHJlYWN0TW9kYWxTdHlsZTogUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgLy8gUGFkZGluZyAocHgpIGJldHdlZW4gdGhlIGVkZ2Ugb2YgdGhlIHdpbmRvdyBhbmQgdGhlIGxpZ2h0Ym94XG4gIGltYWdlUGFkZGluZzogUHJvcFR5cGVzLm51bWJlcixcbiAgd3JhcHBlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBPdGhlclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEFycmF5IG9mIGN1c3RvbSB0b29sYmFyIGJ1dHRvbnNcbiAgdG9vbGJhckJ1dHRvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcbiAgLy8gV2hlbiB0cnVlLCBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgaW1hZ2UgY2xvc2UgdGhlIGxpZ2h0Ym94XG4gIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuICAvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB6b29tIGZ1bmN0aW9uYWxpdHkgYW5kIGhpZGUgem9vbSBidXR0b25zXG4gIGVuYWJsZVpvb206IFByb3BUeXBlcy5ib29sLFxuICAvLyBPdmVycmlkZSBwcm9wcyBzZXQgb24gcmVhY3QtbW9kYWwgKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LW1vZGFsKVxuICByZWFjdE1vZGFsUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG4gIC8vIEFyaWEtbGFiZWxzXG4gIG5leHRMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJldkxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB6b29tSW5MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgem9vbU91dExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbG9zZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbWFnZUxvYWRFcnJvck1lc3NhZ2U6IFByb3BUeXBlcy5ub2RlXG59O1xuUmVhY3RJbWFnZUxpZ2h0Ym94LmRlZmF1bHRQcm9wcyA9IHtcbiAgaW1hZ2VUaXRsZTogbnVsbCxcbiAgaW1hZ2VDYXB0aW9uOiBudWxsLFxuICB0b29sYmFyQnV0dG9uczogbnVsbCxcbiAgcmVhY3RNb2RhbFByb3BzOiB7fSxcbiAgYW5pbWF0aW9uRGlzYWJsZWQ6IGZhbHNlLFxuICBhbmltYXRpb25EdXJhdGlvbjogMzAwLFxuICBhbmltYXRpb25PbktleUlucHV0OiBmYWxzZSxcbiAgY2xpY2tPdXRzaWRlVG9DbG9zZTogdHJ1ZSxcbiAgY2xvc2VMYWJlbDogJ0Nsb3NlIGxpZ2h0Ym94JyxcbiAgZGlzY291cmFnZURvd25sb2FkczogZmFsc2UsXG4gIGVuYWJsZVpvb206IHRydWUsXG4gIGltYWdlUGFkZGluZzogMTAsXG4gIGltYWdlQ3Jvc3NPcmlnaW46IG51bGwsXG4gIGtleVJlcGVhdEtleXVwQm9udXM6IDQwLFxuICBrZXlSZXBlYXRMaW1pdDogMTgwLFxuICBtYWluU3JjVGh1bWJuYWlsOiBudWxsLFxuICBuZXh0TGFiZWw6ICdOZXh0IGltYWdlJyxcbiAgbmV4dFNyYzogbnVsbCxcbiAgbmV4dFNyY1RodW1ibmFpbDogbnVsbCxcbiAgb25BZnRlck9wZW46IGZ1bmN0aW9uIG9uQWZ0ZXJPcGVuKCkge30sXG4gIG9uSW1hZ2VMb2FkRXJyb3I6IGZ1bmN0aW9uIG9uSW1hZ2VMb2FkRXJyb3IoKSB7fSxcbiAgb25JbWFnZUxvYWQ6IGZ1bmN0aW9uIG9uSW1hZ2VMb2FkKCkge30sXG4gIG9uTW92ZU5leHRSZXF1ZXN0OiBmdW5jdGlvbiBvbk1vdmVOZXh0UmVxdWVzdCgpIHt9LFxuICBvbk1vdmVQcmV2UmVxdWVzdDogZnVuY3Rpb24gb25Nb3ZlUHJldlJlcXVlc3QoKSB7fSxcbiAgcHJldkxhYmVsOiAnUHJldmlvdXMgaW1hZ2UnLFxuICBwcmV2U3JjOiBudWxsLFxuICBwcmV2U3JjVGh1bWJuYWlsOiBudWxsLFxuICByZWFjdE1vZGFsU3R5bGU6IHt9LFxuICB3cmFwcGVyQ2xhc3NOYW1lOiAnJyxcbiAgem9vbUluTGFiZWw6ICdab29tIGluJyxcbiAgem9vbU91dExhYmVsOiAnWm9vbSBvdXQnLFxuICBpbWFnZUxvYWRFcnJvck1lc3NhZ2U6ICdUaGlzIGltYWdlIGZhaWxlZCB0byBsb2FkJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RJbWFnZUxpZ2h0Ym94O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmJvZHlPcGVuQ2xhc3NOYW1lID0gZXhwb3J0cy5wb3J0YWxDbGFzc05hbWUgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfTW9kYWxQb3J0YWwgPSByZXF1aXJlKFwiLi9Nb2RhbFBvcnRhbFwiKTtcblxudmFyIF9Nb2RhbFBvcnRhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbFBvcnRhbCk7XG5cbnZhciBfYXJpYUFwcEhpZGVyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvYXJpYUFwcEhpZGVyXCIpO1xuXG52YXIgYXJpYUFwcEhpZGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2FyaWFBcHBIaWRlcik7XG5cbnZhciBfc2FmZUhUTUxFbGVtZW50ID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc2FmZUhUTUxFbGVtZW50XCIpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zYWZlSFRNTEVsZW1lbnQpO1xuXG52YXIgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdCA9IHJlcXVpcmUoXCJyZWFjdC1saWZlY3ljbGVzLWNvbXBhdFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgcG9ydGFsQ2xhc3NOYW1lID0gZXhwb3J0cy5wb3J0YWxDbGFzc05hbWUgPSBcIlJlYWN0TW9kYWxQb3J0YWxcIjtcbnZhciBib2R5T3BlbkNsYXNzTmFtZSA9IGV4cG9ydHMuYm9keU9wZW5DbGFzc05hbWUgPSBcIlJlYWN0TW9kYWxfX0JvZHktLW9wZW5cIjtcblxudmFyIGlzUmVhY3QxNiA9IF9yZWFjdERvbTIuZGVmYXVsdC5jcmVhdGVQb3J0YWwgIT09IHVuZGVmaW5lZDtcblxudmFyIGdldENyZWF0ZVBvcnRhbCA9IGZ1bmN0aW9uIGdldENyZWF0ZVBvcnRhbCgpIHtcbiAgcmV0dXJuIGlzUmVhY3QxNiA/IF9yZWFjdERvbTIuZGVmYXVsdC5jcmVhdGVQb3J0YWwgOiBfcmVhY3REb20yLmRlZmF1bHQudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI7XG59O1xuXG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KHBhcmVudFNlbGVjdG9yKSB7XG4gIHJldHVybiBwYXJlbnRTZWxlY3RvcigpO1xufVxuXG52YXIgTW9kYWwgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTW9kYWwsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1vZGFsKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gTW9kYWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNb2RhbCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnJlbW92ZVBvcnRhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICFpc1JlYWN0MTYgJiYgX3JlYWN0RG9tMi5kZWZhdWx0LnVubW91bnRDb21wb25lbnRBdE5vZGUoX3RoaXMubm9kZSk7XG4gICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudChfdGhpcy5wcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoX3RoaXMubm9kZSk7XG4gICAgfSwgX3RoaXMucG9ydGFsUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMucG9ydGFsID0gcmVmO1xuICAgIH0sIF90aGlzLnJlbmRlclBvcnRhbCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgdmFyIGNyZWF0ZVBvcnRhbCA9IGdldENyZWF0ZVBvcnRhbCgpO1xuICAgICAgdmFyIHBvcnRhbCA9IGNyZWF0ZVBvcnRhbChfdGhpcywgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX01vZGFsUG9ydGFsMi5kZWZhdWx0LCBfZXh0ZW5kcyh7IGRlZmF1bHRTdHlsZXM6IE1vZGFsLmRlZmF1bHRTdHlsZXMgfSwgcHJvcHMpKSwgX3RoaXMubm9kZSk7XG4gICAgICBfdGhpcy5wb3J0YWxSZWYocG9ydGFsKTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNb2RhbCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAoIV9zYWZlSFRNTEVsZW1lbnQuY2FuVXNlRE9NKSByZXR1cm47XG5cbiAgICAgIGlmICghaXNSZWFjdDE2KSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB9XG4gICAgICB0aGlzLm5vZGUuY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5wb3J0YWxDbGFzc05hbWU7XG5cbiAgICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KHRoaXMucHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG5cbiAgICAgICFpc1JlYWN0MTYgJiYgdGhpcy5yZW5kZXJQb3J0YWwodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNuYXBzaG90QmVmb3JlVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgdmFyIHByZXZQYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KHByZXZQcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG4gICAgICB2YXIgbmV4dFBhcmVudCA9IGdldFBhcmVudEVsZW1lbnQodGhpcy5wcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG4gICAgICByZXR1cm4geyBwcmV2UGFyZW50OiBwcmV2UGFyZW50LCBuZXh0UGFyZW50OiBuZXh0UGFyZW50IH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBfLCBzbmFwc2hvdCkge1xuICAgICAgaWYgKCFfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSkgcmV0dXJuO1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNPcGVuID0gX3Byb3BzLmlzT3BlbixcbiAgICAgICAgICBwb3J0YWxDbGFzc05hbWUgPSBfcHJvcHMucG9ydGFsQ2xhc3NOYW1lO1xuXG5cbiAgICAgIGlmIChwcmV2UHJvcHMucG9ydGFsQ2xhc3NOYW1lICE9PSBwb3J0YWxDbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTmFtZSA9IHBvcnRhbENsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZQYXJlbnQgPSBzbmFwc2hvdC5wcmV2UGFyZW50LFxuICAgICAgICAgIG5leHRQYXJlbnQgPSBzbmFwc2hvdC5uZXh0UGFyZW50O1xuXG4gICAgICBpZiAobmV4dFBhcmVudCAhPT0gcHJldlBhcmVudCkge1xuICAgICAgICBwcmV2UGFyZW50LnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gICAgICAgIG5leHRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gU3RvcCB1bm5lY2Vzc2FyeSByZW5kZXJzIGlmIG1vZGFsIGlzIHJlbWFpbmluZyBjbG9zZWRcbiAgICAgIGlmICghcHJldlByb3BzLmlzT3BlbiAmJiAhaXNPcGVuKSByZXR1cm47XG5cbiAgICAgICFpc1JlYWN0MTYgJiYgdGhpcy5yZW5kZXJQb3J0YWwodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKCFfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSB8fCAhdGhpcy5ub2RlIHx8ICF0aGlzLnBvcnRhbCkgcmV0dXJuO1xuXG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLnBvcnRhbC5zdGF0ZTtcbiAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgdmFyIGNsb3Nlc0F0ID0gc3RhdGUuaXNPcGVuICYmIHRoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVMgJiYgKHN0YXRlLmNsb3Nlc0F0IHx8IG5vdyArIHRoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVMpO1xuXG4gICAgICBpZiAoY2xvc2VzQXQpIHtcbiAgICAgICAgaWYgKCFzdGF0ZS5iZWZvcmVDbG9zZSkge1xuICAgICAgICAgIHRoaXMucG9ydGFsLmNsb3NlV2l0aFRpbWVvdXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5yZW1vdmVQb3J0YWwsIGNsb3Nlc0F0IC0gbm93KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUG9ydGFsKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAoIV9zYWZlSFRNTEVsZW1lbnQuY2FuVXNlRE9NIHx8ICFpc1JlYWN0MTYpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5ub2RlICYmIGlzUmVhY3QxNikge1xuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3JlYXRlUG9ydGFsID0gZ2V0Q3JlYXRlUG9ydGFsKCk7XG4gICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Nb2RhbFBvcnRhbDIuZGVmYXVsdCwgX2V4dGVuZHMoe1xuICAgICAgICByZWY6IHRoaXMucG9ydGFsUmVmLFxuICAgICAgICBkZWZhdWx0U3R5bGVzOiBNb2RhbC5kZWZhdWx0U3R5bGVzXG4gICAgICB9LCB0aGlzLnByb3BzKSksIHRoaXMubm9kZSk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwic2V0QXBwRWxlbWVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRBcHBFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGFyaWFBcHBIaWRlci5zZXRFbGVtZW50KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5cbiAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5cbiAgfV0pO1xuXG4gIHJldHVybiBNb2RhbDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgaXNPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgIG92ZXJsYXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG4gIH0pLFxuICBwb3J0YWxDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBib2R5T3BlbkNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGh0bWxPcGVuQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGJhc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWZ0ZXJPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGJlZm9yZUNsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pXSksXG4gIG92ZXJsYXlDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgYmFzZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhZnRlck9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYmVmb3JlQ2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSldKSxcbiAgYXBwRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5pbnN0YW5jZU9mKF9zYWZlSFRNTEVsZW1lbnQyLmRlZmF1bHQpLFxuICBvbkFmdGVyT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblJlcXVlc3RDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjbG9zZVRpbWVvdXRNUzogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGFyaWFIaWRlQXBwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNob3VsZEZvY3VzQWZ0ZXJSZW5kZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgcGFyZW50U2VsZWN0b3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgYXJpYTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGRhdGE6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICByb2xlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY29udGVudExhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgc2hvdWxkQ2xvc2VPbkVzYzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBvdmVybGF5UmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNvbnRlbnRSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbiAgcG9ydGFsQ2xhc3NOYW1lOiBwb3J0YWxDbGFzc05hbWUsXG4gIGJvZHlPcGVuQ2xhc3NOYW1lOiBib2R5T3BlbkNsYXNzTmFtZSxcbiAgcm9sZTogXCJkaWFsb2dcIixcbiAgYXJpYUhpZGVBcHA6IHRydWUsXG4gIGNsb3NlVGltZW91dE1TOiAwLFxuICBzaG91bGRGb2N1c0FmdGVyUmVuZGVyOiB0cnVlLFxuICBzaG91bGRDbG9zZU9uRXNjOiB0cnVlLFxuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiB0cnVlLFxuICBzaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IHRydWUsXG4gIHBhcmVudFNlbGVjdG9yOiBmdW5jdGlvbiBwYXJlbnRTZWxlY3RvcigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgfVxufTtcbk1vZGFsLmRlZmF1bHRTdHlsZXMgPSB7XG4gIG92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KVwiXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCI0MHB4XCIsXG4gICAgbGVmdDogXCI0MHB4XCIsXG4gICAgcmlnaHQ6IFwiNDBweFwiLFxuICAgIGJvdHRvbTogXCI0MHB4XCIsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjY2NjXCIsXG4gICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXG4gICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiBcInRvdWNoXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgIHBhZGRpbmc6IFwiMjBweFwiXG4gIH1cbn07XG5cblxuKDAsIF9yZWFjdExpZmVjeWNsZXNDb21wYXQucG9seWZpbGwpKE1vZGFsKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTW9kYWw7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfZm9jdXNNYW5hZ2VyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvZm9jdXNNYW5hZ2VyXCIpO1xuXG52YXIgZm9jdXNNYW5hZ2VyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2ZvY3VzTWFuYWdlcik7XG5cbnZhciBfc2NvcGVUYWIgPSByZXF1aXJlKFwiLi4vaGVscGVycy9zY29wZVRhYlwiKTtcblxudmFyIF9zY29wZVRhYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY29wZVRhYik7XG5cbnZhciBfYXJpYUFwcEhpZGVyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvYXJpYUFwcEhpZGVyXCIpO1xuXG52YXIgYXJpYUFwcEhpZGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2FyaWFBcHBIaWRlcik7XG5cbnZhciBfY2xhc3NMaXN0ID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvY2xhc3NMaXN0XCIpO1xuXG52YXIgY2xhc3NMaXN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NsYXNzTGlzdCk7XG5cbnZhciBfc2FmZUhUTUxFbGVtZW50ID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc2FmZUhUTUxFbGVtZW50XCIpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zYWZlSFRNTEVsZW1lbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIHNvIHRoYXQgb3VyIENTUyBpcyBzdGF0aWNhbGx5IGFuYWx5emFibGVcbnZhciBDTEFTU19OQU1FUyA9IHtcbiAgb3ZlcmxheTogXCJSZWFjdE1vZGFsX19PdmVybGF5XCIsXG4gIGNvbnRlbnQ6IFwiUmVhY3RNb2RhbF9fQ29udGVudFwiXG59O1xuXG52YXIgVEFCX0tFWSA9IDk7XG52YXIgRVNDX0tFWSA9IDI3O1xuXG52YXIgYXJpYUhpZGRlbkluc3RhbmNlcyA9IDA7XG5cbnZhciBNb2RhbFBvcnRhbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNb2RhbFBvcnRhbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTW9kYWxQb3J0YWwocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWxQb3J0YWwpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE1vZGFsUG9ydGFsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTW9kYWxQb3J0YWwpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zZXRPdmVybGF5UmVmID0gZnVuY3Rpb24gKG92ZXJsYXkpIHtcbiAgICAgIF90aGlzLm92ZXJsYXkgPSBvdmVybGF5O1xuICAgICAgX3RoaXMucHJvcHMub3ZlcmxheVJlZiAmJiBfdGhpcy5wcm9wcy5vdmVybGF5UmVmKG92ZXJsYXkpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXRDb250ZW50UmVmID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgIF90aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgX3RoaXMucHJvcHMuY29udGVudFJlZiAmJiBfdGhpcy5wcm9wcy5jb250ZW50UmVmKGNvbnRlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5hZnRlckNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYXBwRWxlbWVudCA9IF90aGlzJHByb3BzLmFwcEVsZW1lbnQsXG4gICAgICAgICAgYXJpYUhpZGVBcHAgPSBfdGhpcyRwcm9wcy5hcmlhSGlkZUFwcCxcbiAgICAgICAgICBodG1sT3BlbkNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmh0bWxPcGVuQ2xhc3NOYW1lLFxuICAgICAgICAgIGJvZHlPcGVuQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuYm9keU9wZW5DbGFzc05hbWU7XG5cbiAgICAgIC8vIFJlbW92ZSBjbGFzc2VzLlxuXG4gICAgICBib2R5T3BlbkNsYXNzTmFtZSAmJiBjbGFzc0xpc3QucmVtb3ZlKGRvY3VtZW50LmJvZHksIGJvZHlPcGVuQ2xhc3NOYW1lKTtcblxuICAgICAgaHRtbE9wZW5DbGFzc05hbWUgJiYgY2xhc3NMaXN0LnJlbW92ZShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0sIGh0bWxPcGVuQ2xhc3NOYW1lKTtcblxuICAgICAgLy8gUmVzZXQgYXJpYS1oaWRkZW4gYXR0cmlidXRlIGlmIGFsbCBtb2RhbHMgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICAgIGlmIChhcmlhSGlkZUFwcCAmJiBhcmlhSGlkZGVuSW5zdGFuY2VzID4gMCkge1xuICAgICAgICBhcmlhSGlkZGVuSW5zdGFuY2VzIC09IDE7XG5cbiAgICAgICAgaWYgKGFyaWFIaWRkZW5JbnN0YW5jZXMgPT09IDApIHtcbiAgICAgICAgICBhcmlhQXBwSGlkZXIuc2hvdyhhcHBFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuc2hvdWxkRm9jdXNBZnRlclJlbmRlcikge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMuc2hvdWxkUmV0dXJuRm9jdXNBZnRlckNsb3NlKSB7XG4gICAgICAgICAgZm9jdXNNYW5hZ2VyLnJldHVybkZvY3VzKCk7XG4gICAgICAgICAgZm9jdXNNYW5hZ2VyLnRlYXJkb3duU2NvcGVkRm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb2N1c01hbmFnZXIucG9wV2l0aG91dEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQWZ0ZXJDbG9zZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkFmdGVyQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmJlZm9yZU9wZW4oKTtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5hZnRlck9wZW4gJiYgX3RoaXMuc3RhdGUuYmVmb3JlQ2xvc2UpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmNsb3NlVGltZXIpO1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGJlZm9yZUNsb3NlOiBmYWxzZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5zaG91bGRGb2N1c0FmdGVyUmVuZGVyKSB7XG4gICAgICAgICAgZm9jdXNNYW5hZ2VyLnNldHVwU2NvcGVkRm9jdXMoX3RoaXMubm9kZSk7XG4gICAgICAgICAgZm9jdXNNYW5hZ2VyLm1hcmtGb3JGb2N1c0xhdGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBhZnRlck9wZW46IHRydWUgfSk7XG5cbiAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuaXNPcGVuICYmIF90aGlzLnByb3BzLm9uQWZ0ZXJPcGVuKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkFmdGVyT3Blbih7XG4gICAgICAgICAgICAgIG92ZXJsYXlFbDogX3RoaXMub3ZlcmxheSxcbiAgICAgICAgICAgICAgY29udGVudEVsOiBfdGhpcy5jb250ZW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5jbG9zZVRpbWVvdXRNUyA+IDApIHtcbiAgICAgICAgX3RoaXMuY2xvc2VXaXRoVGltZW91dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuY2xvc2VXaXRob3V0VGltZW91dCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5mb2N1c0NvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuY29udGVudCAmJiAhX3RoaXMuY29udGVudEhhc0ZvY3VzKCkgJiYgX3RoaXMuY29udGVudC5mb2N1cygpO1xuICAgIH07XG5cbiAgICBfdGhpcy5jbG9zZVdpdGhUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNsb3Nlc0F0ID0gRGF0ZS5ub3coKSArIF90aGlzLnByb3BzLmNsb3NlVGltZW91dE1TO1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBiZWZvcmVDbG9zZTogdHJ1ZSwgY2xvc2VzQXQ6IGNsb3Nlc0F0IH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuY2xvc2VUaW1lciA9IHNldFRpbWVvdXQoX3RoaXMuY2xvc2VXaXRob3V0VGltZW91dCwgX3RoaXMuc3RhdGUuY2xvc2VzQXQgLSBEYXRlLm5vdygpKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5jbG9zZVdpdGhvdXRUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBiZWZvcmVDbG9zZTogZmFsc2UsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgIGFmdGVyT3BlbjogZmFsc2UsXG4gICAgICAgIGNsb3Nlc0F0OiBudWxsXG4gICAgICB9LCBfdGhpcy5hZnRlckNsb3NlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IFRBQl9LRVkpIHtcbiAgICAgICAgKDAsIF9zY29wZVRhYjIuZGVmYXVsdCkoX3RoaXMuY29udGVudCwgZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbkVzYyAmJiBldmVudC5rZXlDb2RlID09PSBFU0NfS0VZKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBfdGhpcy5yZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVPdmVybGF5T25DbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnNob3VsZENsb3NlID09PSBudWxsKSB7XG4gICAgICAgIF90aGlzLnNob3VsZENsb3NlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnNob3VsZENsb3NlICYmIF90aGlzLnByb3BzLnNob3VsZENsb3NlT25PdmVybGF5Q2xpY2spIHtcbiAgICAgICAgaWYgKF90aGlzLm93bmVySGFuZGxlc0Nsb3NlKCkpIHtcbiAgICAgICAgICBfdGhpcy5yZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmZvY3VzQ29udGVudCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfdGhpcy5zaG91bGRDbG9zZSA9IG51bGw7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNvbnRlbnRPbk1vdXNlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zaG91bGRDbG9zZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVPdmVybGF5T25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayAmJiBldmVudC50YXJnZXQgPT0gX3RoaXMub3ZlcmxheSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVDb250ZW50T25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNob3VsZENsb3NlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNvbnRlbnRPbk1vdXNlRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNob3VsZENsb3NlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLnJlcXVlc3RDbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLm93bmVySGFuZGxlc0Nsb3NlKCkgJiYgX3RoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vd25lckhhbmRsZXNDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkQmVDbG9zZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gIV90aGlzLnN0YXRlLmlzT3BlbiAmJiAhX3RoaXMuc3RhdGUuYmVmb3JlQ2xvc2U7XG4gICAgfTtcblxuICAgIF90aGlzLmNvbnRlbnRIYXNGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBfdGhpcy5jb250ZW50IHx8IF90aGlzLmNvbnRlbnQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLmJ1aWxkQ2xhc3NOYW1lID0gZnVuY3Rpb24gKHdoaWNoLCBhZGRpdGlvbmFsKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lcyA9ICh0eXBlb2YgYWRkaXRpb25hbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGFkZGl0aW9uYWwpKSA9PT0gXCJvYmplY3RcIiA/IGFkZGl0aW9uYWwgOiB7XG4gICAgICAgIGJhc2U6IENMQVNTX05BTUVTW3doaWNoXSxcbiAgICAgICAgYWZ0ZXJPcGVuOiBDTEFTU19OQU1FU1t3aGljaF0gKyBcIi0tYWZ0ZXItb3BlblwiLFxuICAgICAgICBiZWZvcmVDbG9zZTogQ0xBU1NfTkFNRVNbd2hpY2hdICsgXCItLWJlZm9yZS1jbG9zZVwiXG4gICAgICB9O1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMuYmFzZTtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5hZnRlck9wZW4pIHtcbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWVzLmFmdGVyT3BlbjtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5iZWZvcmVDbG9zZSkge1xuICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyBcIiBcIiArIGNsYXNzTmFtZXMuYmVmb3JlQ2xvc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZW9mIGFkZGl0aW9uYWwgPT09IFwic3RyaW5nXCIgJiYgYWRkaXRpb25hbCA/IGNsYXNzTmFtZSArIFwiIFwiICsgYWRkaXRpb25hbCA6IGNsYXNzTmFtZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYXR0cmlidXRlc0Zyb21PYmplY3QgPSBmdW5jdGlvbiAocHJlZml4LCBpdGVtcykge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGl0ZW1zKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbmFtZSkge1xuICAgICAgICBhY2NbcHJlZml4ICsgXCItXCIgKyBuYW1lXSA9IGl0ZW1zW25hbWVdO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFmdGVyT3BlbjogZmFsc2UsXG4gICAgICBiZWZvcmVDbG9zZTogZmFsc2VcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkQ2xvc2UgPSBudWxsO1xuICAgIF90aGlzLm1vdmVGcm9tQ29udGVudFRvT3ZlcmxheSA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsUG9ydGFsLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpZiAocHJldlByb3BzLmJvZHlPcGVuQ2xhc3NOYW1lICE9PSB0aGlzLnByb3BzLmJvZHlPcGVuQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1JlYWN0LU1vZGFsOiBcImJvZHlPcGVuQ2xhc3NOYW1lXCIgcHJvcCBoYXMgYmVlbiBtb2RpZmllZC4gJyArIFwiVGhpcyBtYXkgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvciB3aGVuIG11bHRpcGxlIG1vZGFscyBhcmUgb3Blbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXZQcm9wcy5odG1sT3BlbkNsYXNzTmFtZSAhPT0gdGhpcy5wcm9wcy5odG1sT3BlbkNsYXNzTmFtZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdSZWFjdC1Nb2RhbDogXCJodG1sT3BlbkNsYXNzTmFtZVwiIHByb3AgaGFzIGJlZW4gbW9kaWZpZWQuICcgKyBcIlRoaXMgbWF5IGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3Igd2hlbiBtdWx0aXBsZSBtb2RhbHMgYXJlIG9wZW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiAhcHJldlByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuaXNPcGVuICYmIHByZXZQcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBGb2N1cyBvbmx5IG5lZWRzIHRvIGJlIHNldCBvbmNlIHdoZW4gdGhlIG1vZGFsIGlzIGJlaW5nIG9wZW5lZFxuICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdWxkRm9jdXNBZnRlclJlbmRlciAmJiB0aGlzLnN0YXRlLmlzT3BlbiAmJiAhcHJldlN0YXRlLmlzT3Blbikge1xuICAgICAgICB0aGlzLmZvY3VzQ29udGVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzT3Blbikge1xuICAgICAgICB0aGlzLmFmdGVyQ2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlVGltZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJiZWZvcmVPcGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJlZm9yZU9wZW4oKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhcHBFbGVtZW50ID0gX3Byb3BzLmFwcEVsZW1lbnQsXG4gICAgICAgICAgYXJpYUhpZGVBcHAgPSBfcHJvcHMuYXJpYUhpZGVBcHAsXG4gICAgICAgICAgaHRtbE9wZW5DbGFzc05hbWUgPSBfcHJvcHMuaHRtbE9wZW5DbGFzc05hbWUsXG4gICAgICAgICAgYm9keU9wZW5DbGFzc05hbWUgPSBfcHJvcHMuYm9keU9wZW5DbGFzc05hbWU7XG5cbiAgICAgIC8vIEFkZCBjbGFzc2VzLlxuXG4gICAgICBib2R5T3BlbkNsYXNzTmFtZSAmJiBjbGFzc0xpc3QuYWRkKGRvY3VtZW50LmJvZHksIGJvZHlPcGVuQ2xhc3NOYW1lKTtcblxuICAgICAgaHRtbE9wZW5DbGFzc05hbWUgJiYgY2xhc3NMaXN0LmFkZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0sIGh0bWxPcGVuQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKGFyaWFIaWRlQXBwKSB7XG4gICAgICAgIGFyaWFIaWRkZW5JbnN0YW5jZXMgKz0gMTtcbiAgICAgICAgYXJpYUFwcEhpZGVyLmhpZGUoYXBwRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRG9uJ3Qgc3RlYWwgZm9jdXMgZnJvbSBpbm5lciBlbGVtZW50c1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpZCA9IF9wcm9wczIuaWQsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzMi5jbGFzc05hbWUsXG4gICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZSA9IF9wcm9wczIub3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgICAgICBkZWZhdWx0U3R5bGVzID0gX3Byb3BzMi5kZWZhdWx0U3R5bGVzO1xuXG4gICAgICB2YXIgY29udGVudFN0eWxlcyA9IGNsYXNzTmFtZSA/IHt9IDogZGVmYXVsdFN0eWxlcy5jb250ZW50O1xuICAgICAgdmFyIG92ZXJsYXlTdHlsZXMgPSBvdmVybGF5Q2xhc3NOYW1lID8ge30gOiBkZWZhdWx0U3R5bGVzLm92ZXJsYXk7XG5cbiAgICAgIHJldHVybiB0aGlzLnNob3VsZEJlQ2xvc2VkKCkgPyBudWxsIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IHRoaXMuc2V0T3ZlcmxheVJlZixcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuYnVpbGRDbGFzc05hbWUoXCJvdmVybGF5XCIsIG92ZXJsYXlDbGFzc05hbWUpLFxuICAgICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgb3ZlcmxheVN0eWxlcywgdGhpcy5wcm9wcy5zdHlsZS5vdmVybGF5KSxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZU92ZXJsYXlPbkNsaWNrLFxuICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU92ZXJsYXlPbk1vdXNlRG93blxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHJlZjogdGhpcy5zZXRDb250ZW50UmVmLFxuICAgICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjb250ZW50U3R5bGVzLCB0aGlzLnByb3BzLnN0eWxlLmNvbnRlbnQpLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmJ1aWxkQ2xhc3NOYW1lKFwiY29udGVudFwiLCBjbGFzc05hbWUpLFxuICAgICAgICAgICAgdGFiSW5kZXg6IFwiLTFcIixcbiAgICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlQ29udGVudE9uTW91c2VEb3duLFxuICAgICAgICAgICAgb25Nb3VzZVVwOiB0aGlzLmhhbmRsZUNvbnRlbnRPbk1vdXNlVXAsXG4gICAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNvbnRlbnRPbkNsaWNrLFxuICAgICAgICAgICAgcm9sZTogdGhpcy5wcm9wcy5yb2xlLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHRoaXMucHJvcHMuY29udGVudExhYmVsXG4gICAgICAgICAgfSwgdGhpcy5hdHRyaWJ1dGVzRnJvbU9iamVjdChcImFyaWFcIiwgdGhpcy5wcm9wcy5hcmlhIHx8IHt9KSwgdGhpcy5hdHRyaWJ1dGVzRnJvbU9iamVjdChcImRhdGFcIiwgdGhpcy5wcm9wcy5kYXRhIHx8IHt9KSwge1xuICAgICAgICAgICAgXCJkYXRhLXRlc3RpZFwiOiB0aGlzLnByb3BzLnRlc3RJZFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9kYWxQb3J0YWw7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Nb2RhbFBvcnRhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7XG4gICAgb3ZlcmxheToge30sXG4gICAgY29udGVudDoge31cbiAgfSxcbiAgZGVmYXVsdFN0eWxlczoge31cbn07XG5Nb2RhbFBvcnRhbC5wcm9wVHlwZXMgPSB7XG4gIGlzT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIGRlZmF1bHRTdHlsZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgIG92ZXJsYXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG4gIH0pLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgY29udGVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgb3ZlcmxheTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RcbiAgfSksXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdF0pLFxuICBvdmVybGF5Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XSksXG4gIGJvZHlPcGVuQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgaHRtbE9wZW5DbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBhcmlhSGlkZUFwcDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBhcHBFbGVtZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lmluc3RhbmNlT2YoX3NhZmVIVE1MRWxlbWVudDIuZGVmYXVsdCksXG4gIG9uQWZ0ZXJPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQWZ0ZXJDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblJlcXVlc3RDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjbG9zZVRpbWVvdXRNUzogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHNob3VsZEZvY3VzQWZ0ZXJSZW5kZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgcm9sZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNvbnRlbnRMYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFyaWE6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBkYXRhOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgc2hvdWxkQ2xvc2VPbkVzYzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBvdmVybGF5UmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNvbnRlbnRSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgaWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0ZXN0SWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTW9kYWxQb3J0YWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5hc3NlcnROb2RlTGlzdCA9IGFzc2VydE5vZGVMaXN0O1xuZXhwb3J0cy5zZXRFbGVtZW50ID0gc2V0RWxlbWVudDtcbmV4cG9ydHMudmFsaWRhdGVFbGVtZW50ID0gdmFsaWRhdGVFbGVtZW50O1xuZXhwb3J0cy5oaWRlID0gaGlkZTtcbmV4cG9ydHMuc2hvdyA9IHNob3c7XG5leHBvcnRzLmRvY3VtZW50Tm90UmVhZHlPclNTUlRlc3RpbmcgPSBkb2N1bWVudE5vdFJlYWR5T3JTU1JUZXN0aW5nO1xuZXhwb3J0cy5yZXNldEZvclRlc3RpbmcgPSByZXNldEZvclRlc3Rpbmc7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoXCJ3YXJuaW5nXCIpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfc2FmZUhUTUxFbGVtZW50ID0gcmVxdWlyZShcIi4vc2FmZUhUTUxFbGVtZW50XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ2xvYmFsRWxlbWVudCA9IG51bGw7XG5cbmZ1bmN0aW9uIGFzc2VydE5vZGVMaXN0KG5vZGVMaXN0LCBzZWxlY3Rvcikge1xuICBpZiAoIW5vZGVMaXN0IHx8ICFub2RlTGlzdC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZWFjdC1tb2RhbDogTm8gZWxlbWVudHMgd2VyZSBmb3VuZCBmb3Igc2VsZWN0b3IgXCIgKyBzZWxlY3RvciArIFwiLlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRFbGVtZW50KGVsZW1lbnQpIHtcbiAgdmFyIHVzZUVsZW1lbnQgPSBlbGVtZW50O1xuICBpZiAodHlwZW9mIHVzZUVsZW1lbnQgPT09IFwic3RyaW5nXCIgJiYgX3NhZmVIVE1MRWxlbWVudC5jYW5Vc2VET00pIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHVzZUVsZW1lbnQpO1xuICAgIGFzc2VydE5vZGVMaXN0KGVsLCB1c2VFbGVtZW50KTtcbiAgICB1c2VFbGVtZW50ID0gXCJsZW5ndGhcIiBpbiBlbCA/IGVsWzBdIDogZWw7XG4gIH1cbiAgZ2xvYmFsRWxlbWVudCA9IHVzZUVsZW1lbnQgfHwgZ2xvYmFsRWxlbWVudDtcbiAgcmV0dXJuIGdsb2JhbEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRWxlbWVudChhcHBFbGVtZW50KSB7XG4gIGlmICghYXBwRWxlbWVudCAmJiAhZ2xvYmFsRWxlbWVudCkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsIFtcInJlYWN0LW1vZGFsOiBBcHAgZWxlbWVudCBpcyBub3QgZGVmaW5lZC5cIiwgXCJQbGVhc2UgdXNlIGBNb2RhbC5zZXRBcHBFbGVtZW50KGVsKWAgb3Igc2V0IGBhcHBFbGVtZW50PXtlbH1gLlwiLCBcIlRoaXMgaXMgbmVlZGVkIHNvIHNjcmVlbiByZWFkZXJzIGRvbid0IHNlZSBtYWluIGNvbnRlbnRcIiwgXCJ3aGVuIG1vZGFsIGlzIG9wZW5lZC4gSXQgaXMgbm90IHJlY29tbWVuZGVkLCBidXQgeW91IGNhbiBvcHQtb3V0XCIsIFwiYnkgc2V0dGluZyBgYXJpYUhpZGVBcHA9e2ZhbHNlfWAuXCJdLmpvaW4oXCIgXCIpKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBoaWRlKGFwcEVsZW1lbnQpIHtcbiAgaWYgKHZhbGlkYXRlRWxlbWVudChhcHBFbGVtZW50KSkge1xuICAgIChhcHBFbGVtZW50IHx8IGdsb2JhbEVsZW1lbnQpLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93KGFwcEVsZW1lbnQpIHtcbiAgaWYgKHZhbGlkYXRlRWxlbWVudChhcHBFbGVtZW50KSkge1xuICAgIChhcHBFbGVtZW50IHx8IGdsb2JhbEVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRvY3VtZW50Tm90UmVhZHlPclNTUlRlc3RpbmcoKSB7XG4gIGdsb2JhbEVsZW1lbnQgPSBudWxsO1xufVxuXG5mdW5jdGlvbiByZXNldEZvclRlc3RpbmcoKSB7XG4gIGdsb2JhbEVsZW1lbnQgPSBudWxsO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kdW1wQ2xhc3NMaXN0cyA9IGR1bXBDbGFzc0xpc3RzO1xudmFyIGh0bWxDbGFzc0xpc3QgPSB7fTtcbnZhciBkb2NCb2R5Q2xhc3NMaXN0ID0ge307XG5cbmZ1bmN0aW9uIGR1bXBDbGFzc0xpc3RzKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0uY2xhc3NOYW1lO1xuICAgIHZhciBidWZmZXIgPSBcIlNob3cgdHJhY2tlZCBjbGFzc2VzOlxcblxcblwiO1xuXG4gICAgYnVmZmVyICs9IFwiPGh0bWwgLz4gKFwiICsgY2xhc3NlcyArIFwiKTpcXG5cIjtcbiAgICBmb3IgKHZhciB4IGluIGh0bWxDbGFzc0xpc3QpIHtcbiAgICAgIGJ1ZmZlciArPSBcIiAgXCIgKyB4ICsgXCIgXCIgKyBodG1sQ2xhc3NMaXN0W3hdICsgXCJcXG5cIjtcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWU7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgIGJ1ZmZlciArPSBcIlxcblxcbmRvYy5ib2R5IChcIiArIGNsYXNzZXMgKyBcIik6XFxuXCI7XG4gICAgZm9yICh2YXIgX3ggaW4gZG9jQm9keUNsYXNzTGlzdCkge1xuICAgICAgYnVmZmVyICs9IFwiICBcIiArIF94ICsgXCIgXCIgKyBkb2NCb2R5Q2xhc3NMaXN0W194XSArIFwiXFxuXCI7XG4gICAgfVxuXG4gICAgYnVmZmVyICs9IFwiXFxuXCI7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKGJ1ZmZlcik7XG4gIH1cbn1cblxuLyoqXG4gKiBUcmFjayB0aGUgbnVtYmVyIG9mIHJlZmVyZW5jZSBvZiBhIGNsYXNzLlxuICogQHBhcmFtIHtvYmplY3R9IHBvbGwgVGhlIHBvbGwgdG8gcmVjZWl2ZSB0aGUgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3MgbmFtZS5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIGluY3JlbWVudFJlZmVyZW5jZSA9IGZ1bmN0aW9uIGluY3JlbWVudFJlZmVyZW5jZShwb2xsLCBjbGFzc05hbWUpIHtcbiAgaWYgKCFwb2xsW2NsYXNzTmFtZV0pIHtcbiAgICBwb2xsW2NsYXNzTmFtZV0gPSAwO1xuICB9XG4gIHBvbGxbY2xhc3NOYW1lXSArPSAxO1xuICByZXR1cm4gY2xhc3NOYW1lO1xufTtcblxuLyoqXG4gKiBEcm9wIHRoZSByZWZlcmVuY2Ugb2YgYSBjbGFzcy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwb2xsIFRoZSBwb2xsIHRvIHJlY2VpdmUgdGhlIHJlZmVyZW5jZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzIG5hbWUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBkZWNyZW1lbnRSZWZlcmVuY2UgPSBmdW5jdGlvbiBkZWNyZW1lbnRSZWZlcmVuY2UocG9sbCwgY2xhc3NOYW1lKSB7XG4gIGlmIChwb2xsW2NsYXNzTmFtZV0pIHtcbiAgICBwb2xsW2NsYXNzTmFtZV0gLT0gMTtcbiAgfVxuICByZXR1cm4gY2xhc3NOYW1lO1xufTtcblxuLyoqXG4gKiBUcmFjayBhIGNsYXNzIGFuZCBhZGQgdG8gdGhlIGdpdmVuIGNsYXNzIGxpc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gY2xhc3NMaXN0UmVmIEEgY2xhc3MgbGlzdCBvZiBhbiBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IHBvbGwgICAgICAgICBUaGUgcG9sbCB0byBiZSB1c2VkLlxuICogQHBhcmFtIHtBcnJheX0gIGNsYXNzZXMgICAgICBUaGUgbGlzdCBvZiBjbGFzc2VzIHRvIGJlIHRyYWNrZWQuXG4gKi9cbnZhciB0cmFja0NsYXNzID0gZnVuY3Rpb24gdHJhY2tDbGFzcyhjbGFzc0xpc3RSZWYsIHBvbGwsIGNsYXNzZXMpIHtcbiAgY2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpbmNyZW1lbnRSZWZlcmVuY2UocG9sbCwgY2xhc3NOYW1lKTtcbiAgICBjbGFzc0xpc3RSZWYuYWRkKGNsYXNzTmFtZSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBVbnRyYWNrIGEgY2xhc3MgYW5kIHJlbW92ZSBmcm9tIHRoZSBnaXZlbiBjbGFzcyBsaXN0IGlmIHRoZSByZWZlcmVuY2VcbiAqIHJlYWNoZXMgMC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjbGFzc0xpc3RSZWYgQSBjbGFzcyBsaXN0IG9mIGFuIGVsZW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gcG9sbCAgICAgICAgIFRoZSBwb2xsIHRvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge0FycmF5fSAgY2xhc3NlcyAgICAgIFRoZSBsaXN0IG9mIGNsYXNzZXMgdG8gYmUgdW50cmFja2VkLlxuICovXG52YXIgdW50cmFja0NsYXNzID0gZnVuY3Rpb24gdW50cmFja0NsYXNzKGNsYXNzTGlzdFJlZiwgcG9sbCwgY2xhc3Nlcykge1xuICBjbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGRlY3JlbWVudFJlZmVyZW5jZShwb2xsLCBjbGFzc05hbWUpO1xuICAgIHBvbGxbY2xhc3NOYW1lXSA9PT0gMCAmJiBjbGFzc0xpc3RSZWYucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBQdWJsaWMgaW5mZXJmYWNlIHRvIGFkZCBjbGFzc2VzIHRvIHRoZSBkb2N1bWVudC5ib2R5LlxuICogQHBhcmFtIHtzdHJpbmd9IGJvZHlDbGFzcyBUaGUgY2xhc3Mgc3RyaW5nIHRvIGJlIGFkZGVkLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBtYXkgY29udGFpbiBtb3JlIHRoZW4gb25lIGNsYXNzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggJyAnIGFzIHNlcGFyYXRvci5cbiAqL1xudmFyIGFkZCA9IGV4cG9ydHMuYWRkID0gZnVuY3Rpb24gYWRkKGVsZW1lbnQsIGNsYXNzU3RyaW5nKSB7XG4gIHJldHVybiB0cmFja0NsYXNzKGVsZW1lbnQuY2xhc3NMaXN0LCBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gXCJodG1sXCIgPyBodG1sQ2xhc3NMaXN0IDogZG9jQm9keUNsYXNzTGlzdCwgY2xhc3NTdHJpbmcuc3BsaXQoXCIgXCIpKTtcbn07XG5cbi8qKlxuICogUHVibGljIGluZmVyZmFjZSB0byByZW1vdmUgY2xhc3NlcyBmcm9tIHRoZSBkb2N1bWVudC5ib2R5LlxuICogQHBhcmFtIHtzdHJpbmd9IGJvZHlDbGFzcyBUaGUgY2xhc3Mgc3RyaW5nIHRvIGJlIGFkZGVkLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBtYXkgY29udGFpbiBtb3JlIHRoZW4gb25lIGNsYXNzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggJyAnIGFzIHNlcGFyYXRvci5cbiAqL1xudmFyIHJlbW92ZSA9IGV4cG9ydHMucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGVsZW1lbnQsIGNsYXNzU3RyaW5nKSB7XG4gIHJldHVybiB1bnRyYWNrQ2xhc3MoZWxlbWVudC5jbGFzc0xpc3QsIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSBcImh0bWxcIiA/IGh0bWxDbGFzc0xpc3QgOiBkb2NCb2R5Q2xhc3NMaXN0LCBjbGFzc1N0cmluZy5zcGxpdChcIiBcIikpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaGFuZGxlQmx1ciA9IGhhbmRsZUJsdXI7XG5leHBvcnRzLmhhbmRsZUZvY3VzID0gaGFuZGxlRm9jdXM7XG5leHBvcnRzLm1hcmtGb3JGb2N1c0xhdGVyID0gbWFya0ZvckZvY3VzTGF0ZXI7XG5leHBvcnRzLnJldHVybkZvY3VzID0gcmV0dXJuRm9jdXM7XG5leHBvcnRzLnBvcFdpdGhvdXRGb2N1cyA9IHBvcFdpdGhvdXRGb2N1cztcbmV4cG9ydHMuc2V0dXBTY29wZWRGb2N1cyA9IHNldHVwU2NvcGVkRm9jdXM7XG5leHBvcnRzLnRlYXJkb3duU2NvcGVkRm9jdXMgPSB0ZWFyZG93blNjb3BlZEZvY3VzO1xuXG52YXIgX3RhYmJhYmxlID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdGFiYmFibGVcIik7XG5cbnZhciBfdGFiYmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGFiYmFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZm9jdXNMYXRlckVsZW1lbnRzID0gW107XG52YXIgbW9kYWxFbGVtZW50ID0gbnVsbDtcbnZhciBuZWVkVG9Gb2N1cyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xuICBuZWVkVG9Gb2N1cyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xuICBpZiAobmVlZFRvRm9jdXMpIHtcbiAgICBuZWVkVG9Gb2N1cyA9IGZhbHNlO1xuICAgIGlmICghbW9kYWxFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIG5lZWQgdG8gc2VlIGhvdyBqUXVlcnkgc2hpbXMgZG9jdW1lbnQub24oJ2ZvY3VzaW4nKSBzbyB3ZSBkb24ndCBuZWVkIHRoZVxuICAgIC8vIHNldFRpbWVvdXQsIGZpcmVmb3ggZG9lc24ndCBzdXBwb3J0IGZvY3VzaW4sIGlmIGl0IGRpZCwgd2UgY291bGQgZm9jdXNcbiAgICAvLyB0aGUgZWxlbWVudCBvdXRzaWRlIG9mIGEgc2V0VGltZW91dC4gU2lkZS1lZmZlY3Qgb2YgdGhpcyBpbXBsZW1lbnRhdGlvblxuICAgIC8vIGlzIHRoYXQgdGhlIGRvY3VtZW50LmJvZHkgZ2V0cyBmb2N1cywgYW5kIHRoZW4gd2UgZm9jdXMgb3VyIGVsZW1lbnQgcmlnaHRcbiAgICAvLyBhZnRlciwgc2VlbXMgZmluZS5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtb2RhbEVsZW1lbnQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGVsID0gKDAsIF90YWJiYWJsZTIuZGVmYXVsdCkobW9kYWxFbGVtZW50KVswXSB8fCBtb2RhbEVsZW1lbnQ7XG4gICAgICBlbC5mb2N1cygpO1xuICAgIH0sIDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtGb3JGb2N1c0xhdGVyKCkge1xuICBmb2N1c0xhdGVyRWxlbWVudHMucHVzaChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuZnVuY3Rpb24gcmV0dXJuRm9jdXMoKSB7XG4gIHZhciB0b0ZvY3VzID0gbnVsbDtcbiAgdHJ5IHtcbiAgICBpZiAoZm9jdXNMYXRlckVsZW1lbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdG9Gb2N1cyA9IGZvY3VzTGF0ZXJFbGVtZW50cy5wb3AoKTtcbiAgICAgIHRvRm9jdXMuZm9jdXMoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKFtcIllvdSB0cmllZCB0byByZXR1cm4gZm9jdXMgdG9cIiwgdG9Gb2N1cywgXCJidXQgaXQgaXMgbm90IGluIHRoZSBET00gYW55bW9yZVwiXS5qb2luKFwiIFwiKSk7XG4gIH1cbn1cbi8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5mdW5jdGlvbiBwb3BXaXRob3V0Rm9jdXMoKSB7XG4gIGZvY3VzTGF0ZXJFbGVtZW50cy5sZW5ndGggPiAwICYmIGZvY3VzTGF0ZXJFbGVtZW50cy5wb3AoKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBTY29wZWRGb2N1cyhlbGVtZW50KSB7XG4gIG1vZGFsRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGhhbmRsZUJsdXIsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgaGFuZGxlRm9jdXMsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5hdHRhY2hFdmVudChcIm9uQmx1clwiLCBoYW5kbGVCbHVyKTtcbiAgICBkb2N1bWVudC5hdHRhY2hFdmVudChcIm9uRm9jdXNcIiwgaGFuZGxlRm9jdXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRlYXJkb3duU2NvcGVkRm9jdXMoKSB7XG4gIG1vZGFsRWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBoYW5kbGVGb2N1cyk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmRldGFjaEV2ZW50KFwib25CbHVyXCIsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LmRldGFjaEV2ZW50KFwib25Gb2N1c1wiLCBoYW5kbGVGb2N1cyk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FuVXNlRE9NID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4ZW52ID0gcmVxdWlyZShcImV4ZW52XCIpO1xuXG52YXIgX2V4ZW52MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4ZW52KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEVFID0gX2V4ZW52Mi5kZWZhdWx0O1xuXG52YXIgU2FmZUhUTUxFbGVtZW50ID0gRUUuY2FuVXNlRE9NID8gd2luZG93LkhUTUxFbGVtZW50IDoge307XG5cbnZhciBjYW5Vc2VET00gPSBleHBvcnRzLmNhblVzZURPTSA9IEVFLmNhblVzZURPTTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU2FmZUhUTUxFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2NvcGVUYWI7XG5cbnZhciBfdGFiYmFibGUgPSByZXF1aXJlKFwiLi90YWJiYWJsZVwiKTtcblxudmFyIF90YWJiYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90YWJiYWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHNjb3BlVGFiKG5vZGUsIGV2ZW50KSB7XG4gIHZhciB0YWJiYWJsZSA9ICgwLCBfdGFiYmFibGUyLmRlZmF1bHQpKG5vZGUpO1xuXG4gIGlmICghdGFiYmFibGUubGVuZ3RoKSB7XG4gICAgLy8gRG8gbm90aGluZywgc2luY2UgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIHRoYXQgY2FuIHJlY2VpdmUgZm9jdXMuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcbiAgdmFyIGhlYWQgPSB0YWJiYWJsZVswXTtcbiAgdmFyIHRhaWwgPSB0YWJiYWJsZVt0YWJiYWJsZS5sZW5ndGggLSAxXTtcblxuICAvLyBwcm9jZWVkIHdpdGggZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9uIHRhYi5cbiAgLy8gRm9jdXMgb24gbGFzdCBlbGVtZW50IG9uIHNoaWZ0ICsgdGFiLlxuICBpZiAobm9kZSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgIGlmICghc2hpZnRLZXkpIHJldHVybjtcbiAgICB0YXJnZXQgPSB0YWlsO1xuICB9XG5cbiAgdmFyIHRhcmdldDtcbiAgaWYgKHRhaWwgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgIXNoaWZ0S2V5KSB7XG4gICAgdGFyZ2V0ID0gaGVhZDtcbiAgfVxuXG4gIGlmIChoZWFkID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIHNoaWZ0S2V5KSB7XG4gICAgdGFyZ2V0ID0gdGFpbDtcbiAgfVxuXG4gIGlmICh0YXJnZXQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRhcmdldC5mb2N1cygpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFNhZmFyaSByYWRpbyBpc3N1ZS5cbiAgLy9cbiAgLy8gU2FmYXJpIGRvZXMgbm90IG1vdmUgdGhlIGZvY3VzIHRvIHRoZSByYWRpbyBidXR0b24sXG4gIC8vIHNvIHdlIG5lZWQgdG8gZm9yY2UgaXQgdG8gcmVhbGx5IHdhbGsgdGhyb3VnaCBhbGwgZWxlbWVudHMuXG4gIC8vXG4gIC8vIFRoaXMgaXMgdmVyeSBlcnJvciBwcm9uZSwgc2luY2Ugd2UgYXJlIHRyeWluZyB0byBndWVzc1xuICAvLyBpZiBpdCBpcyBhIHNhZmFyaSBicm93c2VyIGZyb20gdGhlIGZpcnN0IG9jY3VyZW5jZSBiZXR3ZWVuXG4gIC8vIGNocm9tZSBvciBzYWZhcmkuXG4gIC8vXG4gIC8vIFRoZSBjaHJvbWUgdXNlciBhZ2VudCBjb250YWlucyB0aGUgZmlyc3Qgb2N1cnJlbmNlXG4gIC8vIGFzIHRoZSAnY2hyb21lL3ZlcnNpb24nIGFuZCBsYXRlciB0aGUgJ3NhZmFyaS92ZXJzaW9uJy5cbiAgdmFyIGNoZWNrU2FmYXJpID0gLyhcXGJDaHJvbWVcXGJ8XFxiU2FmYXJpXFxiKVxcLy8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgdmFyIGlzU2FmYXJpRGVza3RvcCA9IGNoZWNrU2FmYXJpICE9IG51bGwgJiYgY2hlY2tTYWZhcmlbMV0gIT0gXCJDaHJvbWVcIiAmJiAvXFxiaVBvZFxcYnxcXGJpUGFkXFxiL2cuZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KSA9PSBudWxsO1xuXG4gIC8vIElmIHdlIGFyZSBub3QgaW4gc2FmYXJpIGRlc2t0b3AsIGxldCB0aGUgYnJvd3NlciBjb250cm9sXG4gIC8vIHRoZSBmb2N1c1xuICBpZiAoIWlzU2FmYXJpRGVza3RvcCkgcmV0dXJuO1xuXG4gIHZhciB4ID0gdGFiYmFibGUuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICBpZiAoeCA+IC0xKSB7XG4gICAgeCArPSBzaGlmdEtleSA/IC0xIDogMTtcbiAgfVxuXG4gIC8vIElmIHRoZSB0YWJiYWJsZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0LFxuICAvLyBmb2N1cyBoZWFkL3RhaWwgYmFzZWQgb24gc2hpZnRLZXlcbiAgaWYgKHR5cGVvZiB0YWJiYWJsZVt4XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFyZ2V0ID0gc2hpZnRLZXkgPyB0YWlsIDogaGVhZDtcbiAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHRhYmJhYmxlW3hdLmZvY3VzKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmluZFRhYmJhYmxlRGVzY2VuZGFudHM7XG4vKiFcbiAqIEFkYXB0ZWQgZnJvbSBqUXVlcnkgVUkgY29yZVxuICpcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vY2F0ZWdvcnkvdWktY29yZS9cbiAqL1xuXG52YXIgdGFiYmFibGVOb2RlID0gL2lucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b258b2JqZWN0LztcblxuZnVuY3Rpb24gaGlkZXNDb250ZW50cyhlbGVtZW50KSB7XG4gIHZhciB6ZXJvU2l6ZSA9IGVsZW1lbnQub2Zmc2V0V2lkdGggPD0gMCAmJiBlbGVtZW50Lm9mZnNldEhlaWdodCA8PSAwO1xuXG4gIC8vIElmIHRoZSBub2RlIGlzIGVtcHR5LCB0aGlzIGlzIGdvb2QgZW5vdWdoXG4gIGlmICh6ZXJvU2l6ZSAmJiAhZWxlbWVudC5pbm5lckhUTUwpIHJldHVybiB0cnVlO1xuXG4gIC8vIE90aGVyd2lzZSB3ZSBuZWVkIHRvIGNoZWNrIHNvbWUgc3R5bGVzXG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICByZXR1cm4gemVyb1NpemUgPyBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwib3ZlcmZsb3dcIikgIT09IFwidmlzaWJsZVwiIHx8XG4gIC8vIGlmICdvdmVyZmxvdzogdmlzaWJsZScgc2V0LCBjaGVjayBpZiB0aGVyZSBpcyBhY3R1YWxseSBhbnkgb3ZlcmZsb3dcbiAgZWxlbWVudC5zY3JvbGxXaWR0aCA8PSAwICYmIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IDw9IDAgOiBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gdmlzaWJsZShlbGVtZW50KSB7XG4gIHZhciBwYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgd2hpbGUgKHBhcmVudEVsZW1lbnQpIHtcbiAgICBpZiAocGFyZW50RWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSkgYnJlYWs7XG4gICAgaWYgKGhpZGVzQ29udGVudHMocGFyZW50RWxlbWVudCkpIHJldHVybiBmYWxzZTtcbiAgICBwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBmb2N1c2FibGUoZWxlbWVudCwgaXNUYWJJbmRleE5vdE5hTikge1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHZhciByZXMgPSB0YWJiYWJsZU5vZGUudGVzdChub2RlTmFtZSkgJiYgIWVsZW1lbnQuZGlzYWJsZWQgfHwgKG5vZGVOYW1lID09PSBcImFcIiA/IGVsZW1lbnQuaHJlZiB8fCBpc1RhYkluZGV4Tm90TmFOIDogaXNUYWJJbmRleE5vdE5hTik7XG4gIHJldHVybiByZXMgJiYgdmlzaWJsZShlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gdGFiYmFibGUoZWxlbWVudCkge1xuICB2YXIgdGFiSW5kZXggPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuICBpZiAodGFiSW5kZXggPT09IG51bGwpIHRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICB2YXIgaXNUYWJJbmRleE5hTiA9IGlzTmFOKHRhYkluZGV4KTtcbiAgcmV0dXJuIChpc1RhYkluZGV4TmFOIHx8IHRhYkluZGV4ID49IDApICYmIGZvY3VzYWJsZShlbGVtZW50LCAhaXNUYWJJbmRleE5hTik7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYWJiYWJsZURlc2NlbmRhbnRzKGVsZW1lbnQpIHtcbiAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKSwgMCkuZmlsdGVyKHRhYmJhYmxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTW9kYWwgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL01vZGFsXCIpO1xuXG52YXIgX01vZGFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX01vZGFsMi5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6IiJ9