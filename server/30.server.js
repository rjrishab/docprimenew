exports.ids = [30];
exports.modules = {

/***/ "./dev/js/components/commons/Home/staticDisclaimer.js":
/*!************************************************************!*\
  !*** ./dev/js/components/commons/Home/staticDisclaimer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ isVip }) => {
    return _react2.default.createElement(
        'div',
        { className: `dsclmer-ftr ${isVip ? 'margin-bottom-55' : ''}` },
        _react2.default.createElement(
            'p',
            { className: 'fw-500 mrt-20', style: { color: '#8a8a8a', fontSize: 10 } },
            'The Website is not intended to be used in case of a medical emergency and/ or critical care and the user should directly contact his/ her medical service provider for Physical Examination. Docprime is solely a technology partner.'
        ),
        _react2.default.createElement(
            'div',
            { className: 'col-12 footer-new-copyrght', style: { paddingBottom: 5 } },
            _react2.default.createElement(
                'p',
                null,
                'Docprime.com Copyright \xA9 2020.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'All rights reserved.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'DOCPRIME TECHNOLOGIES PRIVATE LIMITED'
            ),
            _react2.default.createElement(
                'p',
                null,
                'CIN : U74999HR2016PTC064312'
            )
        )
    );
};

/***/ }),

/***/ "./dev/js/components/commons/Loader/Loader.js":
/*!****************************************************!*\
  !*** ./dev/js/components/commons/Loader/Loader.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Loader extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return _react2.default.createElement(
            "div",
            { className: this.props.classType || "loaderCircular" },
            _react2.default.createElement("div", { className: "dp-loader" }),
            this.props.iFramePopup ? _react2.default.createElement(
                "p",
                { className: "fw-500 mrt-10" },
                "Redirecting you to Pharmeasy website..."
            ) : ''
        );
    }
}

exports.default = Loader;

/***/ }),

/***/ "./dev/js/components/commons/Loader/index.js":
/*!***************************************************!*\
  !*** ./dev/js/components/commons/Loader/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loader = __webpack_require__(/*! ./Loader */ "./dev/js/components/commons/Loader/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Loader2.default;

/***/ }),

/***/ "./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class WhatsAppOptinView extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.state = {
            whatsapp_optin_View: true
        };
    }

    shouldRender() {
        if (this.props.profiles) {
            if (this.props.profiles.whatsapp_optin != null) {
                if (this.props.isAppointment && !this.props.profiles.whatsapp_optin && !this.props.profiles.whatsapp_is_declined) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        } else if (this.props.isUserProfile) {
            return true;
        } else {
            return false;
        }
    }

    toggleWhatsap(status, e) {
        if (this.props.isAppointment) {
            let profileData = _extends({}, this.props.profiles);
            if (status) {
                profileData.whatsapp_optin = true;
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "You whatsApp notifications has been enabled." });
            } else {
                profileData.whatsapp_is_declined = true;
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "your whatsApp notifications has been disabled." });
            }
            this.props.editUserProfile(profileData, profileData.id, () => {
                document.getElementsByClassName('whatsappCardContainer')[0].classList.add('d-none');
            });
        } else {
            this.setState({ whatsapp_optin_View: status }, () => {
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'Whatsaptoggled', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'Whatsap-toggled'
                };
                _gtm2.default.sendEvent({ data: data });
                this.props.toggleWhatsap(status);
            });
        }
    }

    render() {

        if (!this.shouldRender()) return _react2.default.createElement('div', null);

        return _react2.default.createElement(
            'div',
            null,
            this.props.isAppointment ? _react2.default.createElement(
                'div',
                { className: 'whatsappCardContainer' },
                _react2.default.createElement(
                    'div',
                    { className: 'wa-logo-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'wa-container' },
                        _react2.default.createElement('img', { src: "/assets" + "/img/wa-logo.svg" })
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Docprime would like to send you updates through whatsapp'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'allowDeclineContainer' },
                    _react2.default.createElement(
                        'p',
                        { className: 'allowBtns', onClick: this.toggleWhatsap.bind(this, true) },
                        'Allow'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'declineBtns', style: { color: '#757575' }, onClick: this.toggleWhatsap.bind(this, false) },
                        'Decline'
                    )
                )
            ) : _react2.default.createElement(
                'div',
                { className: 'widget mrb-15' },
                _react2.default.createElement(
                    'div',
                    { className: 'widget-content' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { className: 'ck-bx', style: { fontWeight: '600', fontSize: '14px' } },
                            'Enable ',
                            _react2.default.createElement(
                                'span',
                                { className: 'sm-wtsp-img' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/wa-logo-sm.png" }),
                                'WhatsApp'
                            ),
                            ' notification',
                            _react2.default.createElement('input', { type: 'checkbox', onChange: this.toggleWhatsap.bind(this, !this.state.whatsapp_optin_View), checked: this.state.whatsapp_optin_View }),
                            _react2.default.createElement('span', { className: 'checkmark' })
                        )
                    )
                )
            )
        );
    }
}

exports.default = WhatsAppOptinView;

/***/ }),

/***/ "./dev/js/helpers/criteo.js":
/*!**********************************!*\
  !*** ./dev/js/helpers/criteo.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

const CRITEO = {

	sendData(data) {
		try {

			if (window) {

				window.criteo_q = window.criteo_q || [];
				var deviceType = navigator ? /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d" : '';

				window.criteo_q.push({ 'event': "setAccount", account: 57439 }, // You should never update this line
				{ 'event': "setEmail", 'email': '' }, { 'event': "setSiteType", type: deviceType }, data);
			}
		} catch (e) {}
	}
};

exports.default = CRITEO;

/***/ }),

/***/ "./dev/js/helpers/fcm.js":
/*!*******************************!*\
  !*** ./dev/js/helpers/fcm.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _api = __webpack_require__(/*! ../api/api */ "./dev/js/api/api.js");

var _config = __webpack_require__(/*! ../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messaging = null;

const FCM = (() => {

    let _initialized = false;
    let _permitted = false;

    const init = () => {
        try {

            if (!_permitted) {
                return;
            }

            if (typeof firebase == "undefined") {
                return;
            }

            if (window.firebase && messaging == null) {
                firebase.initializeApp(_config2.default.FCM_CONFIG);
                if (firebase && firebase.messaging) {
                    messaging = firebase.messaging();
                    messaging.usePublicVapidKey(_config2.default.FCM_PUBLIC_VAPID_KEYL);
                }
            }

            if (!_initialized && messaging) {

                console.log(' ======== INITIALIZING FCM FOR PUSH NOTIFICATIONS ==========');

                messaging.getToken().then(function (currentToken) {
                    console.log("FCM TOKEN - ", currentToken);

                    if (!_initialized) {
                        (0, _api.API_POST)('/api/v1/user/notification/endpoint/save', {
                            token: currentToken,
                            platform: 'web',
                            app_name: "doc_prime"
                        });
                    }

                    // set init to true , to stop fetching token again
                    _initialized = true;
                }).catch(function (err) {
                    console.log(err);
                    _initialized = false;
                });

                messaging.onTokenRefresh(function () {
                    messaging.getToken().then(function (refreshedToken) {
                        console.log("FCM TOKEN refreshed- ", refreshedToken);

                        (0, _api.API_POST)('/api/v1/user/notification/endpoint/save', {
                            token: refreshedToken,
                            platform: 'web',
                            app_name: "doc_prime"
                        });

                        // set init to true , to stop fetching token again
                        _initialized = true;
                    }).catch(function (err) {
                        _initialized = false;
                    });
                });
            }
        } catch (e) {
            console.log(e);
        }
    };

    const getPermission = () => {
        try {

            if (_permitted) {
                return;
            }

            if (typeof firebase == "undefined") {
                return;
            }

            if (window.firebase && messaging == null) {
                firebase.initializeApp(_config2.default.FCM_CONFIG);
                if (firebase && firebase.messaging) {
                    messaging = firebase.messaging();
                    messaging.usePublicVapidKey(_config2.default.FCM_PUBLIC_VAPID_KEYL);
                }
            }

            if (!_permitted && messaging) {
                return new Promise((res, rej) => {
                    messaging.requestPermission().then(() => {
                        _permitted = true;
                        res();
                    }).catch(e => {
                        _permitted = false;
                        rej();
                    });
                });
            }
        } catch (e) {
            console.log(e);
        }
    };

    const checkInit = () => {
        return _initialized;
    };

    return { init, checkInit: checkInit.bind(undefined), getPermission };
})();

exports.default = FCM;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9XaGF0c0FwcE9wdGluL1doYXRzQXBwT3B0aW5WaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9oZWxwZXJzL2NyaXRlby5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvaGVscGVycy9mY20uanMiXSwibmFtZXMiOlsiaXNWaXAiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZ0JvdHRvbSIsIkxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiV2hhdHNBcHBPcHRpblZpZXciLCJzdGF0ZSIsIndoYXRzYXBwX29wdGluX1ZpZXciLCJzaG91bGRSZW5kZXIiLCJwcm9maWxlcyIsIndoYXRzYXBwX29wdGluIiwiaXNBcHBvaW50bWVudCIsIndoYXRzYXBwX2lzX2RlY2xpbmVkIiwiaXNVc2VyUHJvZmlsZSIsInRvZ2dsZVdoYXRzYXAiLCJzdGF0dXMiLCJlIiwicHJvZmlsZURhdGEiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiZWRpdFVzZXJQcm9maWxlIiwiaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRTdGF0ZSIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJBU1NFVFNfQkFTRV9VUkwiLCJiaW5kIiwiZm9udFdlaWdodCIsIkNSSVRFTyIsInNlbmREYXRhIiwid2luZG93IiwiY3JpdGVvX3EiLCJkZXZpY2VUeXBlIiwibmF2aWdhdG9yIiwidGVzdCIsInVzZXJBZ2VudCIsInB1c2giLCJhY2NvdW50IiwidHlwZSIsIm1lc3NhZ2luZyIsIkZDTSIsIl9pbml0aWFsaXplZCIsIl9wZXJtaXR0ZWQiLCJpbml0IiwiZmlyZWJhc2UiLCJpbml0aWFsaXplQXBwIiwiQ09ORklHIiwiRkNNX0NPTkZJRyIsInVzZVB1YmxpY1ZhcGlkS2V5IiwiRkNNX1BVQkxJQ19WQVBJRF9LRVlMIiwiY29uc29sZSIsImxvZyIsImdldFRva2VuIiwidGhlbiIsImN1cnJlbnRUb2tlbiIsInRva2VuIiwicGxhdGZvcm0iLCJhcHBfbmFtZSIsImNhdGNoIiwiZXJyIiwib25Ub2tlblJlZnJlc2giLCJyZWZyZXNoZWRUb2tlbiIsImdldFBlcm1pc3Npb24iLCJQcm9taXNlIiwicmVzIiwicmVqIiwicmVxdWVzdFBlcm1pc3Npb24iLCJjaGVja0luaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFDZSxDQUFDLEVBQUVBLEtBQUYsRUFBRCxLQUFlO0FBQzdCLFdBQVE7QUFBQTtBQUFBLFVBQUssV0FBWSxlQUFjQSxRQUFNLGtCQUFOLEdBQXlCLEVBQUcsRUFBM0Q7QUFDTztBQUFBO0FBQUEsY0FBRyxXQUFVLGVBQWIsRUFBNkIsT0FBTyxFQUFFQyxPQUFPLFNBQVQsRUFBb0JDLFVBQVUsRUFBOUIsRUFBcEM7QUFBQTtBQUFBLFNBRFA7QUFFTztBQUFBO0FBQUEsY0FBSyxXQUFVLDRCQUFmLEVBQTRDLE9BQU8sRUFBRUMsZUFBZSxDQUFqQixFQUFuRDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUZQLEtBQVI7QUFTQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRDs7Ozs7O0FBRUEs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QUFPMUIsWUFBUDtBQUNILEtBRkQ7O0FBSUEsV0FBTyxFQUFFRSxJQUFGLEVBQVF3QixXQUFXQSxVQUFVekMsSUFBVixXQUFuQixFQUF5Q29DLGFBQXpDLEVBQVA7QUFFSCxDQWpIVyxHQUFaOztrQkFtSGV0QixHIiwiZmlsZSI6IjMwLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7IGlzVmlwIH0pID0+IHtcblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YGRzY2xtZXItZnRyICR7aXNWaXA/J21hcmdpbi1ib3R0b20tNTUnOicnfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTAgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9vdGVyLW5ldy1jb3B5cmdodFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRPQ1BSSU1FIFRFQ0hOT0xPR0lFUyBQUklWQVRFIExJTUlURUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgV2hhdHNBcHBPcHRpblZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB3aGF0c2FwcF9vcHRpbl9WaWV3OnRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZFJlbmRlcigpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnByb2ZpbGVzKXtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzLndoYXRzYXBwX29wdGluICE9bnVsbCl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5pc0FwcG9pbnRtZW50ICYmICF0aGlzLnByb3BzLnByb2ZpbGVzLndoYXRzYXBwX29wdGluICYmICF0aGlzLnByb3BzLnByb2ZpbGVzLndoYXRzYXBwX2lzX2RlY2xpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5pc1VzZXJQcm9maWxlKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gICAgXG4gICAgfVxuXG4gICAgdG9nZ2xlV2hhdHNhcChzdGF0dXMsZSkgeyAgICAgICBcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pc0FwcG9pbnRtZW50KXsgICAgICBcbiAgICAgICAgICAgIGxldCBwcm9maWxlRGF0YSA9IHsuLi50aGlzLnByb3BzLnByb2ZpbGVzfVxuICAgICAgICAgICAgaWYoc3RhdHVzKXtcbiAgICAgICAgICAgICAgICBwcm9maWxlRGF0YS53aGF0c2FwcF9vcHRpbiA9IHRydWVcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiWW91IHdoYXRzQXBwIG5vdGlmaWNhdGlvbnMgaGFzIGJlZW4gZW5hYmxlZC5cIn0pICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBwcm9maWxlRGF0YS53aGF0c2FwcF9pc19kZWNsaW5lZCA9IHRydWVcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwieW91ciB3aGF0c0FwcCBub3RpZmljYXRpb25zIGhhcyBiZWVuIGRpc2FibGVkLlwifSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuZWRpdFVzZXJQcm9maWxlKHByb2ZpbGVEYXRhLCBwcm9maWxlRGF0YS5pZCAsKCk9PntcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3aGF0c2FwcENhcmRDb250YWluZXInKVswXS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2hhdHNhcHBfb3B0aW5fVmlldzogc3RhdHVzIH0sKCkgPT57XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdXaGF0c2FwdG9nZ2xlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ1doYXRzYXAtdG9nZ2xlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZVdoYXRzYXAoc3RhdHVzKSAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSAgICBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZFJlbmRlcigpKVxuICAgICAgICAgICAgcmV0dXJuICg8ZGl2PjwvZGl2PilcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmlzQXBwb2ludG1lbnQ/XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGF0c2FwcENhcmRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YS1sb2dvLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2EtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93YS1sb2dvLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZSB3b3VsZCBsaWtlIHRvIHNlbmQgeW91IHVwZGF0ZXMgdGhyb3VnaCB3aGF0c2FwcDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsb3dEZWNsaW5lQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbGxvd0J0bnNcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdoYXRzYXAuYmluZCh0aGlzLHRydWUpfT5BbGxvdzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlY2xpbmVCdG5zXCIgc3R5bGU9e3tjb2xvcjonIzc1NzU3NSd9fW9uQ2xpY2s9e3RoaXMudG9nZ2xlV2hhdHNhcC5iaW5kKHRoaXMsZmFsc2UpfT5EZWNsaW5lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcsIGZvbnRTaXplOiAnMTRweCcgfX0+RW5hYmxlIDxzcGFuIGNsYXNzTmFtZT1cInNtLXd0c3AtaW1nXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93YS1sb2dvLXNtLnBuZ1wifSAvPldoYXRzQXBwPC9zcGFuPiBub3RpZmljYXRpb248aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMudG9nZ2xlV2hhdHNhcC5iaW5kKHRoaXMsIXRoaXMuc3RhdGUud2hhdHNhcHBfb3B0aW5fVmlldyl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUud2hhdHNhcHBfb3B0aW5fVmlld30gLz48c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFdoYXRzQXBwT3B0aW5WaWV3XG4iLCJcbmNvbnN0IENSSVRFTyA9IHtcblxuXHRzZW5kRGF0YShkYXRhICl7XG5cdFx0dHJ5e1xuXG5cdFx0XHRpZih3aW5kb3cpe1xuXHRcdFx0XG5cdFx0XHRcdHdpbmRvdy5jcml0ZW9fcSA9IHdpbmRvdy5jcml0ZW9fcSB8fCBbXVxuXHRcdFx0XHR2YXIgZGV2aWNlVHlwZSA9IG5hdmlnYXRvcj8vaVBhZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/IFwidFwiIDogL01vYmlsZXxpUChob25lfG9kKXxBbmRyb2lkfEJsYWNrQmVycnl8SUVNb2JpbGV8U2lsay8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/IFwibVwiIDogXCJkXCI6Jyc7XG5cblx0XHRcdFx0d2luZG93LmNyaXRlb19xLnB1c2goeyAnZXZlbnQnOiBcInNldEFjY291bnRcIiwgYWNjb3VudDogNTc0Mzl9LCAvLyBZb3Ugc2hvdWxkIG5ldmVyIHVwZGF0ZSB0aGlzIGxpbmVcblx0XHRcdFx0eydldmVudCc6IFwic2V0RW1haWxcIiwgJ2VtYWlsJzogJyd9LFxuXHRcdFx0XHR7ICdldmVudCc6IFwic2V0U2l0ZVR5cGVcIiwgdHlwZTogZGV2aWNlVHlwZX0sXG5cdFx0XHRcdGRhdGFcblx0XHRcdFx0KVxuXHRcdFx0fVxuXG5cdFx0fWNhdGNoKGUpe1xuXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENSSVRFTyIsImltcG9ydCB7IEFQSV9QT1NUIH0gZnJvbSAnLi4vYXBpL2FwaSdcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vY29uZmlnJ1xuXG52YXIgbWVzc2FnaW5nID0gbnVsbFxuXG5jb25zdCBGQ00gPSAoKCkgPT4ge1xuXG4gICAgbGV0IF9pbml0aWFsaXplZCA9IGZhbHNlXG4gICAgbGV0IF9wZXJtaXR0ZWQgPSBmYWxzZVxuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgaWYgKCFfcGVybWl0dGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmlyZWJhc2UgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmZpcmViYXNlICYmIG1lc3NhZ2luZyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChDT05GSUcuRkNNX0NPTkZJRylcbiAgICAgICAgICAgICAgICBpZiAoZmlyZWJhc2UgJiYgZmlyZWJhc2UubWVzc2FnaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2luZyA9IGZpcmViYXNlLm1lc3NhZ2luZygpXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2luZy51c2VQdWJsaWNWYXBpZEtleShDT05GSUcuRkNNX1BVQkxJQ19WQVBJRF9LRVlMKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghX2luaXRpYWxpemVkICYmIG1lc3NhZ2luZykge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyA9PT09PT09PSBJTklUSUFMSVpJTkcgRkNNIEZPUiBQVVNIIE5PVElGSUNBVElPTlMgPT09PT09PT09PScpXG5cbiAgICAgICAgICAgICAgICBtZXNzYWdpbmcuZ2V0VG9rZW4oKS50aGVuKGZ1bmN0aW9uIChjdXJyZW50VG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGQ00gVE9LRU4gLSBcIiwgY3VycmVudFRva2VuKVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBUElfUE9TVCgnL2FwaS92MS91c2VyL25vdGlmaWNhdGlvbi9lbmRwb2ludC9zYXZlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiBjdXJyZW50VG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm06ICd3ZWInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcF9uYW1lOiBcImRvY19wcmltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGluaXQgdG8gdHJ1ZSAsIHRvIHN0b3AgZmV0Y2hpbmcgdG9rZW4gYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgX2luaXRpYWxpemVkID0gdHJ1ZVxuXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgICAgIF9pbml0aWFsaXplZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBtZXNzYWdpbmcub25Ub2tlblJlZnJlc2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdpbmcuZ2V0VG9rZW4oKS50aGVuKGZ1bmN0aW9uIChyZWZyZXNoZWRUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGQ00gVE9LRU4gcmVmcmVzaGVkLSBcIiwgcmVmcmVzaGVkVG9rZW4pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFQSV9QT1NUKCcvYXBpL3YxL3VzZXIvbm90aWZpY2F0aW9uL2VuZHBvaW50L3NhdmUnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHJlZnJlc2hlZFRva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtOiAnd2ViJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBfbmFtZTogXCJkb2NfcHJpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGluaXQgdG8gdHJ1ZSAsIHRvIHN0b3AgZmV0Y2hpbmcgdG9rZW4gYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9pbml0aWFsaXplZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2luaXRpYWxpemVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGVybWlzc2lvbiA9ICgpID0+IHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgaWYgKF9wZXJtaXR0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmaXJlYmFzZSA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cuZmlyZWJhc2UgJiYgbWVzc2FnaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKENPTkZJRy5GQ01fQ09ORklHKVxuICAgICAgICAgICAgICAgIGlmIChmaXJlYmFzZSAmJiBmaXJlYmFzZS5tZXNzYWdpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnaW5nID0gZmlyZWJhc2UubWVzc2FnaW5nKClcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnaW5nLnVzZVB1YmxpY1ZhcGlkS2V5KENPTkZJRy5GQ01fUFVCTElDX1ZBUElEX0tFWUwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFfcGVybWl0dGVkICYmIG1lc3NhZ2luZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnaW5nLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfcGVybWl0dGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzKClcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wZXJtaXR0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0luaXQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfaW5pdGlhbGl6ZWRcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbml0LCBjaGVja0luaXQ6IGNoZWNrSW5pdC5iaW5kKHRoaXMpLCBnZXRQZXJtaXNzaW9uIH1cblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBGQ00iXSwic291cmNlUm9vdCI6IiJ9