/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/js/actions/commons/adsBooking.js":
/*!**********************************************!*\
  !*** ./dev/js/actions/commons/adsBooking.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.userCreate = undefined;

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

var _api = __webpack_require__(/*! ../../api/api.js */ "./dev/js/api/api.js");

const userCreate = exports.userCreate = (criteria, callback) => dispatch => {
    return (0, _api.API_POST)('/api/v1/user/userlead/create', criteria).then(function (response) {
        dispatch({
            type: _types.ADS_BOOKING,
            payload: response
        });
        if (callback) callback(response);
    }).catch(function (error) {
        dispatch({
            type: _types.ADS_BOOKING,
            payload: error
        });
        if (callback) callback(error);
        throw error;
    });
};

/***/ }),

/***/ "./dev/js/actions/commons/auth.js":
/*!****************************************!*\
  !*** ./dev/js/actions/commons/auth.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saveLeadPhnNumber = exports.clearStoreOnLogin = exports.submitMedicineLead = exports.sendOtpOnEmail = exports.submitEmailOTP = exports.clearInsurance = exports.closeAppointmentPopUp = exports.closeAppointmentRating = exports.updateAppointmentRating = exports.createAppointmentRating = exports.getRatingCompliments = exports.getUnratedAppointment = exports.OTTExchangeLogin = exports.OTTLogin = exports.agentLogin = exports.loginViaChat = exports.resetAuth = exports.logout = exports.registerUser = exports.submitOTP = exports.sendOTP = undefined;
exports.setGTMSession = setGTMSession;
exports.chat_utm = chat_utm;

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

var _api = __webpack_require__(/*! ../../api/api.js */ "./dev/js/api/api.js");

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _navigate = __webpack_require__(/*! ../../helpers/navigate */ "./dev/js/helpers/navigate/index.js");

var _navigate2 = _interopRequireDefault(_navigate);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(/*! ../../config/config.js */ "./dev/js/config/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sendOTP = exports.sendOTP = (number, viaSms, viaWhatsapp, message_type, cb) => dispatch => {
    dispatch({
        type: _types.SEND_OTP_REQUEST,
        payload: {
            phoneNumber: number,
            via_sms: viaSms,
            via_whatsapp: viaWhatsapp,
            message_type: message_type
        }
    });

    (0, _api.API_POST)('/api/v1/user/otp/generate', {
        "phone_number": number,
        "request_source": "DocprimeWeb",
        "via_sms": viaSms,
        "via_whatsapp": viaWhatsapp,
        "message_type": message_type
    }).then(function (response) {
        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "OTP Sent Successfuly." });
        dispatch({
            type: _types.SEND_OTP_SUCCESS,
            payload: {}
        });
        if (cb) cb();
    }).catch(function (error) {
        let message = "Cannot generate OTP.";
        dispatch({
            type: _types.SEND_OTP_FAIL,
            payload: {
                error_message: message
            }
        });
        if (cb) cb(message);
    });
};

const submitOTP = exports.submitOTP = (number, otp, extraParams, cb) => dispatch => {
    dispatch({
        type: _types.SUBMIT_OTP_REQUEST,
        payload: {}
    });

    dispatch({
        type: _types.SAVE_LOGIN_PHONE_NUMBER,
        payload: number
    });

    (0, _api.API_POST)('/api/v1/user/login', {
        "phone_number": number,
        "otp": otp
    }).then(function (response) {
        // set cookie token explicitly, csrf token is set by default
        _storage2.default.setAuthToken(response.token);
        _storage2.default.setUserId(response.user_id);

        clearStoreOnLogin()(dispatch);
        dispatch({
            type: _types.SUBMIT_OTP_SUCCESS,
            payload: { token: response.token }
        });

        dispatch({
            type: _types.SELECT_USER_ADDRESS,
            payload: null
        });

        dispatch({
            type: _types.RESET_VIP_CLUB,
            summaryPage: extraParams && extraParams.summaryPage ? extraParams.summaryPage : null
        });

        if (cb) cb(response);
    }).catch(function (error) {
        dispatch({
            type: _types.SUBMIT_OTP_FAIL,
            payload: {
                error_message: "Invalid OTP"
            }
        });
        if (cb) cb(error);
    });
};

const registerUser = exports.registerUser = (postData, cb) => dispatch => {
    dispatch({
        type: _types.SUBMIT_OTP_REQUEST,
        payload: {}
    });

    (0, _api.API_POST)('/api/v1/user/register', postData).then(function (response) {
        // set cookie token explicitly, csrf token is set by default
        _storage2.default.setAuthToken(response.token);
        dispatch({
            type: _types.SUBMIT_OTP_SUCCESS,
            payload: { token: response.token }
        });
        if (cb) cb(null, response);
    }).catch(function (error) {
        dispatch({
            type: _types.SUBMIT_OTP_FAIL,
            payload: {
                error_message: "Invalid OTP"
            }
        });
        if (cb) cb(error, null);
    });
};

const logout = exports.logout = roomId => dispatch => {
    // delete chat of current opened room
    // Axios.get(`${CONFIG.CHAT_API_URL}/livechat/healthservices/closeChat/${roomId}`).catch((e)=>{

    // })
    if (_storage2.default.checkAuth()) {
        _storage2.default.getAuthToken().then(token => {
            if (token) {
                (0, _api.API_POST)('/api/v1/user/logout', {
                    token: token
                }).then(data => {});
            }
        });
    }
    _storage2.default.deleteAuth().then(() => {
        dispatch({
            type: _types.RESET_AUTH,
            payload: {}
        });
        dispatch({
            type: _types.CLEAR_SAVED_PATIENT_DETAILS
        });
        setTimeout(() => {
            // send to login page
            _navigate2.default.navigateTo('/');
        }, 300);
        // clear entire store (initially peristed)
    });
    _storage2.default.deleteUserId();
};

const resetAuth = exports.resetAuth = (postData, cb) => dispatch => {
    dispatch({
        type: _types.RESET_AUTH,
        payload: {}
    });
};

const loginViaChat = exports.loginViaChat = token => dispatch => {
    _storage2.default.setAuthToken(token);
    return (0, _api.API_GET)('/api/v1/user/userprofile').then(function (response) {
        dispatch({
            type: _types.APPEND_USER_PROFILES,
            payload: response
        });
    }).catch(function (error) {});
};

const agentLogin = exports.agentLogin = (token, cb) => dispatch => {

    _storage2.default.deleteAuth().then(() => {
        dispatch({
            type: _types.RESET_AUTH,
            payload: {}
        });
        _storage2.default.setAuthToken(token);
        clearInsurance()(dispatch);
        dispatch({
            type: _types.RESET_VIP_CLUB
        });
        cb();
    });
};

const OTTLogin = exports.OTTLogin = (ott, user_id) => dispatch => {
    return new Promise((resolve, reject) => {
        // API_GET(`/api/v1/user/token/exchange?token=${ott}`).then((data) => {
        _storage2.default.deleteAuth().then(() => {
            dispatch({
                type: _types.RESET_AUTH,
                payload: {}
            });
            try {
                if (ott && user_id) {
                    _storage2.default.refreshTokenCall({ token: ott, user_id: user_id, fromWhere: 'FromDirectBooking', isForceUpdate: true }, resp => {
                        console.log(resp);
                        // STORAGE.setAuthToken(ott)
                        (0, _api.API_GET)('/api/v1/user/userprofile').then(function (response) {
                            (0, _api.API_GET)('/api/v1/user/userid').then(data => {
                                _storage2.default.setUserId(data.user_id);
                                dispatch({
                                    type: _types.APPEND_USER_PROFILES,
                                    payload: response
                                });
                                dispatch({
                                    type: _types.RESET_VIP_CLUB
                                });
                                resolve();
                            });
                        }).catch(function (error) {
                            reject(err);
                        });
                    });
                }
            } catch (e) {}
        });
    });
};

const OTTExchangeLogin = exports.OTTExchangeLogin = ott => dispatch => {
    return new Promise((resolve, reject) => {
        (0, _api.API_GET)(`/api/v1/user/token/exchange?token=${ott}`).then(d => {
            _storage2.default.deleteAuth().then(() => {
                dispatch({
                    type: _types.RESET_AUTH,
                    payload: {}
                });
                _storage2.default.setAuthToken(d.token);
                (0, _api.API_GET)('/api/v1/user/userprofile').then(function (response) {
                    (0, _api.API_GET)('/api/v1/user/userid').then(data => {
                        _storage2.default.setUserId(data.user_id);
                        dispatch({
                            type: _types.APPEND_USER_PROFILES,
                            payload: response
                        });
                        resolve();
                    });
                }).catch(function (error) {
                    reject(err);
                });
            });
        });
    });
};

function setGTMSession(data) {
    (0, _api.API_POST)('api/v1/tracking/event/save', data).then(data => {}).catch(function (e) {});
}

const getUnratedAppointment = exports.getUnratedAppointment = callback => dispatch => {
    (0, _api.API_GET)(`/api/v1/ratings/unrated`).then(function (response) {
        callback(null, response);
    }).catch(function (error) {
        callback(error, null);
    });
};

const getRatingCompliments = exports.getRatingCompliments = callback => dispatch => {
    (0, _api.API_GET)(`/api/v1/ratings/compliments`).then(function (response) {
        callback(null, response);
    }).catch(function (error) {
        callback(error, null);
    });
};

const createAppointmentRating = exports.createAppointmentRating = (appointmentData, callback) => dispatch => {
    let post_data = {
        'rating': appointmentData.rating,
        'review': appointmentData.review ? appointmentData.review : '',
        // 'appointment_id': appointmentData.appointment_id,
        'appointment_type': appointmentData.appointment_type,
        'compliment': appointmentData.compliment ? appointmentData.compliment : []
    };
    if ('appointment_id' in appointmentData) {
        post_data.appointment_id = appointmentData.appointment_id;
    } else {
        post_data.entity_id = appointmentData.entity_id;
        post_data.related_entity_id = appointmentData.related_entity_id;
    }
    (0, _api.API_POST)(`/api/v1/ratings/create`, post_data).then(function (response) {
        callback(null, response);
    }).catch(function (error) {
        callback(error, null);
    });
};

const updateAppointmentRating = exports.updateAppointmentRating = (ratingData, callback) => dispatch => {
    let post_data = {
        'id': ratingData.id,
        'rating': ratingData.rating,
        'review': ratingData.review ? ratingData.review : '',
        'compliment': ratingData.compliment ? ratingData.compliment : []
    };
    (0, _api.API_POST)(`/api/v1/ratings/update/${ratingData.id}`, post_data).then(function (response) {
        callback(null, response);
        dispatch({
            type: _types.CLOSE_POPUP,
            payload: {
                appointment_id: ratingData.appointment_id
            }
        });
    }).catch(function (error) {
        callback(error, null);
    });
};

const closeAppointmentRating = exports.closeAppointmentRating = (appointmentData, callback) => dispatch => {
    (0, _api.API_POST)(`/api/v1/ratings/prompt/close`, appointmentData).then(function (response) {
        callback(null, response);
    }).catch(function (error) {
        callback(error, null);
    });
};

const closeAppointmentPopUp = exports.closeAppointmentPopUp = (id, callback) => dispatch => {
    dispatch({
        type: _types.CLOSE_POPUP,
        payload: {
            appointment_id: id
        }
    });
};

function chat_utm(term) {
    let url = _config2.default.CHAT_API_URL + `/livechat/healthservices/intentresponse/BasicEnquiry?text=${term}`;
    return _axios2.default.get(url);
}

const clearInsurance = exports.clearInsurance = () => dispatch => {
    // to reset insurance data in store
    dispatch({
        type: _types.CLEAR_INSURANCE
    });
};

const submitEmailOTP = exports.submitEmailOTP = (data, callback) => dispatch => {

    (0, _api.API_POST)(`/api/v1/user/profile-email/update`, data).then(function (response) {
        if (callback) callback(response, null);
    }).catch(function (error) {
        if (callback) callback(null, error);
    });
};

const sendOtpOnEmail = exports.sendOtpOnEmail = (data, callback) => dispatch => {
    (0, _api.API_POST)(`/api/v1/user/profile-email/update/init`, data).then(function (response) {
        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "OTP Sent Successfuly." });
        if (callback) callback(response);
    }).catch(function (error) {
        let message = "Cannot generate OTP.";
        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: message });
        if (callback) callback(error);
    });
};

const submitMedicineLead = exports.submitMedicineLead = (data, callback) => dispatch => {
    (0, _api.API_POST)(`/api/v1/diagnostic/ipdmedicinepagelead`, data).then(function (response) {
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(error);
    });
};

const clearStoreOnLogin = exports.clearStoreOnLogin = () => dispatch => {
    dispatch({
        type: _types.CLEAR_LAB_COUPONS
    });

    dispatch({
        type: _types.CLEAR_OPD_COUPONS
    });
};

const saveLeadPhnNumber = exports.saveLeadPhnNumber = number => dispatch => {
    dispatch({
        type: _types.SAVE_LOGIN_PHONE_NUMBER,
        payload: number
    });
};

/***/ }),

/***/ "./dev/js/actions/commons/elasticSearch.js":
/*!*************************************************!*\
  !*** ./dev/js/actions/commons/elasticSearch.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getElasticCriteriaResults = undefined;

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

var _api = __webpack_require__(/*! ../../api/api.js */ "./dev/js/api/api.js");

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getElasticCriteriaResults = exports.getElasticCriteriaResults = (searchString, type, location, extraSearchParams = null) => dispatch => {

	let visitor_info = _gtm2.default.getVisitorInfo();
	let visit_id = '';
	if (visitor_info && visitor_info.visit_id) {
		visit_id = visitor_info.visit_id;
	}
	let url = `${_config2.default.API_BASE_URL_ELASTIC_SEARCH}?query=${searchString}&type=${type}&max_distance=15&lat=${location.lat}&long=${location.long}&visitId=${visit_id}`;

	if (extraSearchParams && extraSearchParams.hospital_id) {
		url += `&hospitalIds=${extraSearchParams.hospital_id}`;
	}
	return (0, _api.API_GET)(url).then(response => response.body).catch(function (error) {});
};

/***/ }),

/***/ "./dev/js/actions/commons/primeCare.js":
/*!*********************************************!*\
  !*** ./dev/js/actions/commons/primeCare.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getIsCareDetails = exports.retrieveCareDetails = exports.createCareBooking = exports.getCareDetails = undefined;

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

var _api = __webpack_require__(/*! ../../api/api.js */ "./dev/js/api/api.js");

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getCareDetails = exports.getCareDetails = callback => dispatch => {
	// get care plans

	(0, _api.API_GET)('/api/v1/subscription_plan/list').then(function (response) {
		if (callback) callback(response);
	}).catch(function (error) {
		if (callback) callback(null);
	});
};

const createCareBooking = exports.createCareBooking = (selectedPlan, callback) => dispatch => {
	//proceed to payment gate way

	return (0, _api.API_POST)(`/api/v1/subscription_plan/buy`, selectedPlan).then(function (response) {
		if (callback) callback(response);
	}).catch(function (error) {
		if (callback) callback(null);
	});
};

const retrieveCareDetails = exports.retrieveCareDetails = (selectedPlan, callback) => dispatch => {
	// get user care purchased details

	(0, _api.API_GET)('/api/v1/subscription_plan/retrieve?user_plan=' + parseInt(selectedPlan)).then(function (response) {
		if (callback) callback(response);
	}).catch(function (error) {
		if (callback) callback(null);
	});
};

const getIsCareDetails = exports.getIsCareDetails = callback => dispatch => {
	// get user subscription plan details

	return (0, _api.API_GET)('/api/v1/subscription_plan/has_plan').then(function (response) {
		dispatch({
			type: _types.IS_USER_CARED,
			payload: response
		});
		if (callback) callback(response);
	}).catch(function (error) {
		if (callback) callback(error);
	});
};

/***/ }),

/***/ "./dev/js/actions/commons/siteMap.js":
/*!*******************************************!*\
  !*** ./dev/js/actions/commons/siteMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getHospitalInventoryList = exports.getHospitalList = exports.getIPDAlphabetically = exports.setNetworkType = exports.getInsuranceNetworks = exports.getTestsAlphabetically = exports.getSpecialitiesMap = exports.getCitiesMap = undefined;

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

var _api = __webpack_require__(/*! ../../api/api.js */ "./dev/js/api/api.js");

const getCitiesMap = exports.getCitiesMap = (city = "", page = 0) => dispatch => {
	let url = '/api/v1/location/city-inventory';

	if (city) {
		url += `/${city}`;
	}

	if (page) {
		url += '?page=${page}';
	}

	return (0, _api.API_GET)(url).then(function (response) {

		if (city) {

			dispatch({
				type: _types.GET_CITIES_SPECIALITIES,
				payload: response
			});
		} else {

			dispatch({
				type: _types.GET_CITIES_MAP,
				payload: response.cities
			});
		}
	}).catch(function (error) {});
};

const getSpecialitiesMap = exports.getSpecialitiesMap = (speciality = "", page = 0, cb) => dispatch => {
	let url = '/api/v1/location/speciality-inventory';

	if (speciality) {
		url += `/${speciality}`;
	}

	if (page) {
		url += `?page_no=${page}`;
	}

	return (0, _api.API_GET)(url).then(function (response) {

		if (speciality) {

			dispatch({
				type: _types.GET_SPECIALITIES_CITIES,
				payload: response
			});
			if (cb) cb(response);
		} else {

			dispatch({
				type: _types.GET_SPECIALITIES_MAP,
				payload: response
			});
		}
	}).catch(function (error) {});
};

const getTestsAlphabetically = exports.getTestsAlphabetically = character => dispatch => {
	let url = `/api/v1/diagnostic/test/list_by_alphabet?alphabet=${character}`;
	dispatch({
		type: _types.GET_TESTS_FLAG,
		flag: true
	});
	return (0, _api.API_GET)(url).then(function (response) {
		dispatch({
			type: _types.GET_TESTS_ALPHABETICALLY,
			payload: response,
			flag: false
		});
	}).catch(function (error) {});
};

const getInsuranceNetworks = exports.getInsuranceNetworks = (lat, long, type, searchString, searchBy) => dispatch => {
	let url = `/api/v1/insurance/network/search?latitude=${lat}&longitude=${long}&type=${type}&search=${searchBy}&starts_with=${searchString}`;
	return (0, _api.API_GET)(url).then(function (response) {
		dispatch({
			type: _types.GET_INSURANCE_NETWORK,
			payload: response
		});
	}).catch(function (error) {});
};

const setNetworkType = exports.setNetworkType = type => dispatch => {
	dispatch({
		type: _types.SET_NETWORK_TYPE,
		payload: type
	});
};

const getIPDAlphabetically = exports.getIPDAlphabetically = (character, selectedLocation) => dispatch => {

	let lat = 28.644800;
	let long = 77.216721;
	let place_id = "";
	let locality = "";
	let sub_locality = "";

	if (selectedLocation && (selectedLocation.geometry || selectedLocation.place_id)) {
		lat = selectedLocation.geometry.location.lat;
		long = selectedLocation.geometry.location.lng;
		place_id = selectedLocation.place_id || "";
		if (typeof lat === 'function') lat = lat();
		if (typeof long === 'function') long = long();
		locality = selectedLocation.locality || "";
		sub_locality = selectedLocation.sub_locality || "";
	} else {
		locality = "Delhi";
	}

	let url = `/api/v1/doctor/ipd_procedure/list_by_alphabet?alphabet=${character}&city=${locality}&lat=${lat}&long=${long}`;
	dispatch({
		type: _types.START_FETCHING_IPD_LIST,
		flag: true
	});
	return (0, _api.API_GET)(url).then(function (response) {
		dispatch({
			type: _types.GET_IPD_ALPHABETICALLY,
			payload: response,
			flag: false,
			character: character
		});
	}).catch(function (error) {});
};

const getHospitalList = exports.getHospitalList = (selectedLocation = null, page = 1) => dispatch => {

	let lat = 28.644800;
	let long = 77.216721;
	let place_id = "";
	let locality = "";
	let sub_locality = "";

	if (selectedLocation && (selectedLocation.geometry || selectedLocation.place_id)) {
		lat = selectedLocation.geometry.location.lat;
		long = selectedLocation.geometry.location.lng;
		place_id = selectedLocation.place_id || "";
		if (typeof lat === 'function') lat = lat();
		if (typeof long === 'function') long = long();
		locality = selectedLocation.locality || "";
		sub_locality = selectedLocation.sub_locality || "";
	} else {
		locality = "Delhi";
	}

	let url = `/api/v1/location/city-inventory-hospitals?city=${locality}&lat=${lat}&long=${long}&page=1`;
	dispatch({
		type: _types.START_FETCHING_HOSPITAL_LIST,
		flag: true
	});
	return (0, _api.API_GET)(url).then(function (response) {
		dispatch({
			type: _types.GET_HOSPITAL_LIST_DATA,
			payload: response,
			flag: false
		});
	}).catch(function (error) {});
};

const getHospitalInventoryList = exports.getHospitalInventoryList = city => dispatch => {
	let url = `/api/v1/location/locality-inventory-hospitals?city=${city}`;
	dispatch({
		type: _types.START_FETCHING_HOSPITAL_LOCALITY_LIST,
		flag: true
	});
	return (0, _api.API_GET)(url).then(function (response) {
		dispatch({
			type: _types.GET_HOSPITAL_LOCALITY_LIST,
			payload: response,
			flag: false
		});
	}).catch(function (error) {});
};

/***/ }),

/***/ "./dev/js/actions/commons/user.js":
/*!****************************************!*\
  !*** ./dev/js/actions/commons/user.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.submitReportReview = exports.getReferAmnt = exports.saveNewRefreshedToken = exports.getBannerInfo = exports.NonIpdBookingLead = exports.SendIpdBookingEmail = exports.setPaymentStatus = exports.iFrameState = exports.citiesData = exports.sendSPOAgentBooking = exports.ipdPopupFired = exports.checkIpdChatAgentStatus = exports.ipdChatView = exports.getDownloadAppBannerList = exports.unSetCommonUtmTags = exports.setCommonUtmTags = exports.saveChatFeedbackRoomId = exports.submitChatFeedback = exports.saveChatFeedBack = exports.getUpComingAppointment = exports.toggleLeftMenuBar = exports.getUserReviews = exports.getAllRatings = exports.postComment = exports.fetchOrderSummary = exports.processCartItems = exports.removeFromCart = exports.addToCart = exports.getCartItems = exports.fetchReferralCode = exports.getOfferList = exports.set_summary_utm = exports.fetchTestList = exports.selectSearchType = exports.applyCoupons = exports.getUserPrescription = exports.getCoupons = exports.startLiveChat = exports.loc_physical_ms = exports.saveDeviceInfo = exports.getGeoIpLocation = exports.setUTMTags = exports.getArticleList = exports.getCities = exports.urlShortner = exports.signupDoctor = exports.submitContactMessage = exports.submitCareerProfile = exports.setChatRoomId = exports.sendAgentWhatsupPageURL = exports.sendAgentBookingURL = exports.fetchOrderById = exports.fetchChatHistory = exports.getChatDoctorById = exports.fetchPgData = exports.buildArticleStoreFromRedis = exports.fetchArticle = exports.fetchArticles = exports.fetchOrderHistory = exports.fetchHeatlhTip = exports.refundWallet = exports.fetchTransactions = exports.markNotificationsAsRead = exports.markNotificationsAsViewed = exports.fetchNotifications = exports.getAppointmentReports = exports.getUserProfileWithTests = exports.updateUserAddress = exports.addUserAddress = exports.getUserAddress = exports.editUserProfileImage = exports.editUserProfile = exports.selectProfile = exports.createProfile = exports.getUpcomingAppointments = exports.getProfileAppointments = exports.getUserProfile = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

var _api = __webpack_require__(/*! ../../api/api.js */ "./dev/js/api/api.js");

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getUserProfile = exports.getUserProfile = () => dispatch => {
	return (0, _api.API_GET)('/api/v1/user/userprofile').then(function (response) {
		dispatch({
			type: _types.APPEND_USER_PROFILES,
			payload: response,
			allUsers: true
		});
	}).catch(function (error) {});
};

const getProfileAppointments = exports.getProfileAppointments = profile_id => dispatch => {
	// get user appointments
	(0, _api.API_GET)(`/api/v1/user/appointment`).then(function (response) {

		dispatch({
			type: _types.APPEND_USER_APPOINTMENTS,
			payload: {
				profile_id, appointments: response
			}
		});
	}).catch(function (error) {});
};

const getUpcomingAppointments = exports.getUpcomingAppointments = () => dispatch => {
	(0, _api.API_GET)(`/api/v1/user/appointment?range=upcoming`).then(function (response) {

		dispatch({
			type: _types.APPEND_UPCOMING_APPOINTMENTS,
			payload: {
				appointments: response
			}
		});
	}).catch(function (error) {});
};

const createProfile = exports.createProfile = (postData, cb) => dispatch => {

	(0, _api.API_POST)('/api/v1/user/userprofile/add', postData).then(function (response) {
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const selectProfile = exports.selectProfile = (profile_id, cb) => dispatch => {
	dispatch({
		type: _types.SELECT_USER_PROFILE,
		payload: profile_id
	});
};

const editUserProfile = exports.editUserProfile = (profileData, profileId, cb) => dispatch => {
	// update profile
	(0, _api.API_POST)(`/api/v1/user/userprofile/${profileId}/edit`, profileData).then(function (response) {
		dispatch({
			type: _types.APPEND_USER_PROFILES,
			payload: [response]
		});
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const editUserProfileImage = exports.editUserProfileImage = (profileData, profileId, cb) => dispatch => {
	(0, _api.API_POST)(`/api/v1/user/userprofile/${profileId}/upload`, profileData).then(function (response) {
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const getUserAddress = exports.getUserAddress = () => dispatch => {
	(0, _api.API_GET)(`/api/v1/user/address`).then(function (response) {
		dispatch({
			type: _types.APPEND_ADDRESS,
			payload: response
		});
	}).catch(function (error) {});
};

const addUserAddress = exports.addUserAddress = (postData, cb) => dispatch => {
	(0, _api.API_POST)('/api/v1/user/address/create', postData).then(function (response) {
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const updateUserAddress = exports.updateUserAddress = (postData, cb) => dispatch => {
	(0, _api.API_POST)(`/api/v1/user/address/${postData.id}/update`, postData).then(function (response) {
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const getUserProfileWithTests = exports.getUserProfileWithTests = () => dispatch => {
	(0, _api.API_GET)('/user_profile_tests.json').then(function (response) {

		dispatch({
			type: _types.APPEND_USER_PROFILES,
			payload: response.profiles
		});
	}).catch(function (error) {});
};

const getAppointmentReports = exports.getAppointmentReports = (appointmentId, type, cb) => dispatch => {
	let url = `/api/v1/diagnostic/lab-report-file?labappointment=${appointmentId}`;
	if (type == 'opd') {
		url = `/api/v1/doctor/prescription-file?appointment=${appointmentId}`;
	}
	(0, _api.API_GET)(url).then(function (response) {
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const fetchNotifications = exports.fetchNotifications = cb => dispatch => {
	(0, _api.API_GET)(`/api/v1/notification/appnotifications`).then(function (response) {
		dispatch({
			type: _types.APPEND_NOTIFICATIONS,
			payload: {
				replace: true, notifications: response.data, unread_count: response.unread_count || ''
			}
		});
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const markNotificationsAsViewed = exports.markNotificationsAsViewed = cb => dispatch => {
	(0, _api.API_POST)(`/api/v1/notification/marknotificationsasviewed`, {}).then(function (response) {
		dispatch({
			type: _types.APPEND_NOTIFICATIONS,
			payload: {
				replace: true, notifications: response.data
			}
		});
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const markNotificationsAsRead = exports.markNotificationsAsRead = (notificationid = "", cb) => dispatch => {
	(0, _api.API_POST)(`/api/v1/notification/marknotificationsasread`, { notificationids: notificationid.toString() }).then(function (response) {
		dispatch({
			type: _types.APPEND_NOTIFICATIONS,
			payload: {
				replace: true, notifications: response.data
			}
		});
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const fetchTransactions = exports.fetchTransactions = cb => dispatch => {
	(0, _api.API_GET)(`/api/v1/user/transaction/detail`).then(function (response) {
		dispatch({
			type: _types.APPEND_USER_TRANSACTIONS,
			payload: response
		});
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const refundWallet = exports.refundWallet = cb => dispatch => {
	(0, _api.API_POST)(`/api/v1/user/refund`, {}).then(function (response) {
		fetchTransactions(cb)(dispatch);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const fetchHeatlhTip = exports.fetchHeatlhTip = cb => dispatch => {
	(0, _api.API_GET)(`/api/v1/doctor/healthtips`).then(function (response) {
		dispatch({
			type: _types.APPEND_HEALTH_TIP,
			payload: response
		});
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const fetchOrderHistory = exports.fetchOrderHistory = cb => dispatch => {
	(0, _api.API_GET)(`/api/v1/user/orderhistory`).then(function (response) {
		dispatch({
			type: _types.APPEND_ORDER_HISTORY,
			payload: response
		});
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const fetchArticles = exports.fetchArticles = cb => dispatch => {
	(0, _api.API_GET)(`/api/v1/article/list`).then(function (response) {
		dispatch({
			type: _types.APPEND_ARTICLES,
			payload: response
		});
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const fetchArticle = exports.fetchArticle = (id, preview = null, cb) => dispatch => {
	let url = `/api/v1/article/detail?url=${id}`;
	if (preview) {
		url += `?preview=1`;
	}
	(0, _api.API_GET)(url).then(function (response) {
		dispatch({
			type: _types.APPEND_ARTICLE_DATA,
			payload: response
		});
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const buildArticleStoreFromRedis = exports.buildArticleStoreFromRedis = (data, cb) => dispatch => {
	dispatch({
		type: _types.APPEND_ARTICLE_DATA,
		payload: data
	});
	if (cb) cb(true);
};

const fetchPgData = exports.fetchPgData = (id, cb) => dispatch => {
	(0, _api.API_GET)(`/api/v1/user/pgdata/${id}`).then(function (response) {
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const getChatDoctorById = exports.getChatDoctorById = (doctorId, roomId, cb) => dispatch => {
	return (0, _api.API_GET)(`/api/v1/chat/doctor/profile/${doctorId}`).then(function (response) {

		dispatch({
			type: _types.APPEND_CHAT_DOCTOR,
			payload: {
				data: response,
				doctorId,
				roomId
			}
		});

		if (cb) cb(response);
	}).catch(function (error) {});
};

const fetchChatHistory = exports.fetchChatHistory = cb => dispatch => {
	(0, _api.API_GET)(`api/v1/chat/user/profile`).then(function (response) {
		dispatch({
			type: _types.APPEND_CHAT_HISTORY,
			payload: response
		});
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const fetchOrderById = exports.fetchOrderById = orderId => dispatch => {
	return (0, _api.API_GET)(`/api/v1/user/order/${orderId}`);
};

const sendAgentBookingURL = exports.sendAgentBookingURL = (orderId, type, purchase_type, utm_spo_tags, extraParams = {}, cb) => dispatch => {
	//send payment link in sms to user by agaent
	(0, _api.API_POST)(`/api/v1/user/order/send`, _extends({ type, purchase_type, utm_spo_tags }, extraParams)).then(function (response) {
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const sendAgentWhatsupPageURL = exports.sendAgentWhatsupPageURL = (extraParams = {}, cb) => dispatch => {
	//send page links via whatsup to user by agaent
	return (0, _api.API_POST)(`/api/v1/notification/send/whatsapp`, extraParams).then(function (response) {
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const setChatRoomId = exports.setChatRoomId = (roomId, extraParams = {}) => dispatch => {
	dispatch({
		type: _types.SET_CHATROOM_ID,
		payload: roomId || null,
		extraParams: extraParams
	});
};

const submitCareerProfile = exports.submitCareerProfile = (postCareerData, cb) => dispatch => {
	(0, _api.API_POST)('/api/v1/user/careers/upload', postCareerData).then(function (response) {
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const submitContactMessage = exports.submitContactMessage = (postContactData, cb) => dispatch => {
	(0, _api.API_POST)('/api/v1/user/contactus', postContactData).then(function (response) {
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const signupDoctor = exports.signupDoctor = (signupDoctorData, cb) => dispatch => {
	(0, _api.API_POST)('/api/v1/user/onlinelead/create', signupDoctorData).then(function (response) {
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const urlShortner = exports.urlShortner = (url, cb) => dispatch => {
	(0, _api.API_POST)('api/v1/web/createurl', { url: url }).then(function (response) {
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const getCities = exports.getCities = filterText => dispatch => {
	(0, _api.API_GET)(`/api/v1/common/cities/list?filter=${filterText}`).then(function (response) {
		dispatch({
			type: _types.APPEND_CITIES,
			payload: response
		});
	}).catch(function (error) {});
};

const getArticleList = exports.getArticleList = (title, page = 1, replaceList, searchString = '', callback) => dispatch => {
	let url = `/api/v1/article/list?categoryUrl=${title}&page=${page}`;
	if (searchString) {
		url = url + `&contains=${searchString}`;
	}
	return (0, _api.API_GET)(url).then(function (response) {
		dispatch({
			type: _types.APPEND_ARTICLE_LIST,
			payload: response,
			page: page,
			replaceList: replaceList
		});
		if (callback) callback(response.result);
		return response.result;
	}).catch(function (error) {
		if (callback) callback(error, null);
		return null;
	});
};

const setUTMTags = exports.setUTMTags = utmTags => dispatch => {
	dispatch({
		type: _types.SAVE_UTM_TAGS,
		payload: utmTags
	});
};

const getGeoIpLocation = exports.getGeoIpLocation = () => dispatch => {
	return (0, _api.API_GET)(`/api/v1/geoip/detect?detect_ip=1`);
};

const saveDeviceInfo = exports.saveDeviceInfo = device => dispatch => {
	dispatch({
		type: _types.SAVE_DEVICE_INFO,
		payload: device
	});
};

const loc_physical_ms = exports.loc_physical_ms = loc => dispatch => {
	return (0, _api.API_GET)(`/api/v1/geoip/adword/${loc}`);
};

const startLiveChat = exports.startLiveChat = (started = true, deleteRoomId = false) => dispatch => {
	dispatch({
		type: _types.START_LIVE_CHAT,
		payload: started,
		deleteRoomId: deleteRoomId
	});
};

const getCoupons = exports.getCoupons = ({ productId = '', deal_price = 0, cb = null, lab_id = null, test_ids = null, coupon_code = null, save_in_store = true, profile_id = null, doctor_id = null, hospital_id = null, procedures_ids = null, cart_item = null, gold_plan_id = null }) => dispatch => {

	let url = `/api/v1/coupon/applicablecoupons?`;
	if (productId) {
		url += `product_id=${productId}`;
	}

	if (deal_price >= 0) {
		url += `&deal_price=${deal_price}`;
	}

	if (lab_id && test_ids) {
		url += `&lab_id=${lab_id}&test_ids=${test_ids}`;
	}

	if (coupon_code) {
		url += `&coupon_code=${coupon_code}`;
	}

	if (profile_id) {
		url += `&profile_id=${profile_id}`;
	}

	if (doctor_id) {
		url += `&doctor_id=${doctor_id}`;
	}

	if (hospital_id) {
		url += `&hospital_id=${hospital_id}`;
	}

	if (procedures_ids) {
		url += `&procedures_ids=${procedures_ids}`;
	}

	if (cart_item) {
		url += `&cart_item=${cart_item}`;
	}

	if (gold_plan_id) {
		url += `&plan_id=${gold_plan_id}`;
	}

	url += `&show_all=${true}`;

	(0, _api.API_GET)(url).then(function (response) {
		if (save_in_store) {
			dispatch({
				type: _types.GET_APPLICABLE_COUPONS,
				payload: response
			});
		}

		if (cb) {
			cb(response);
		}
	}).catch(e => {
		if (cb) {
			cb(null);
		}
	});
};

const getUserPrescription = exports.getUserPrescription = mobile => dispatch => {
	//mobile = '9582557400'
	(0, _api.API_GET)(`/api/v1/chat/chatprescription?mobile=${mobile}`).then(function (response) {

		dispatch({
			type: _types.GET_USER_PRESCRIPTION,
			payload: response
		});
	});
};

const applyCoupons = exports.applyCoupons = (productId = '', couponData, couponId, hospitalId, callback) => dispatch => {

	couponData.couponApplied = true;

	if (productId == 1) {
		dispatch({
			type: _types.ADD_OPD_COUPONS,
			payload: couponData,
			hospitalId: hospitalId
		});
	} else if (productId == 3) {
		dispatch({
			type: _types.ADD_VIP_COUPONS,
			payload: couponData
		});
	} else {
		dispatch({
			type: _types.ADD_LAB_COUPONS,
			payload: couponData,
			labId: hospitalId
		});
	}
	if (callback) {
		callback(true);
	}
};

const selectSearchType = exports.selectSearchType = type => dispatch => {

	dispatch({
		type: _types.SELECT_SEARCH_TYPE,
		payload: type
	});
};

const fetchTestList = exports.fetchTestList = (testIds, cb) => dispatch => {
	let url = `/api/v1/diagnostic/test/category`;
	if (testIds) {
		url += `?lab_tests=${testIds}`;
	}
	(0, _api.API_GET)(url).then(function (response) {
		dispatch({
			type: _types.SELECT_TESTS,
			payload: response
		});
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const set_summary_utm = exports.set_summary_utm = (toggle = false, validity = null) => dispatch => {
	dispatch({
		type: _types.SET_SUMMARY_UTM,
		payload: {
			toggle,
			validity
		}
	});
};

const getOfferList = exports.getOfferList = (lat, long) => dispatch => {
	(0, _api.API_GET)(`/api/v1/banner/list?lat=${lat}&long=${long}`).then(function (response) {
		dispatch({
			type: _types.GET_OFFER_LIST,
			payload: response
		});
	});
};

const fetchReferralCode = exports.fetchReferralCode = (code = null) => dispatch => {
	let url = `/api/v1/user/referral`;
	if (code) {
		url += `/${code}`;
	}
	return (0, _api.API_GET)(url);
};

const getCartItems = exports.getCartItems = () => dispatch => {
	return (0, _api.API_GET)('/api/v1/cart/all').then(function (response) {
		dispatch({
			type: _types.APPEND_CART,
			payload: response
		});
	}).catch(function (error) {});
};

const addToCart = exports.addToCart = (product_id, data) => dispatch => {
	return (0, _api.API_POST)('/api/v1/cart/add', {
		product_id, data
	});
};

const removeFromCart = exports.removeFromCart = id => dispatch => {
	return (0, _api.API_POST)('/api/v1/cart/remove', {
		id
	}).then(res => {
		return getCartItems()(dispatch);
	}).catch(e => {});
};

const processCartItems = exports.processCartItems = (use_wallet = true, extraParams = {}) => dispatch => {
	let postData = {};
	postData['visitor_info'] = _gtm2.default.getVisitorInfo();
	postData['utm_spo_tags'] = extraParams;
	postData['from_web'] = true;
	use_wallet = use_wallet ? 1 : 0;
	return (0, _api.API_POST)(`/api/v1/cart/process?use_wallet=${use_wallet}`, postData);
};

const fetchOrderSummary = exports.fetchOrderSummary = order_id => dispatch => {
	return (0, _api.API_GET)(`/api/v1/user/order/summary/${order_id}`);
};

const postComment = exports.postComment = (postData, cb) => dispatch => {

	(0, _api.API_POST)("/api/v1/article/comment/post", postData).then(function (response) {
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const getAllRatings = exports.getAllRatings = (content_type, object_id, page = 1, cb) => dispatch => {
	(0, _api.API_GET)(`/api/v1/ratings/list?page=${page}&content_type=` + parseInt(content_type) + '&object_id=' + parseInt(object_id)).then(function (response) {
		let hasmore = false;
		if (response && response.rating && response.rating.length) {
			hasmore = true;
		}
		if (cb) cb(null, response, hasmore);
	}).catch(function (error) {
		if (cb) cb(error, null, false);
	});
};

const getUserReviews = exports.getUserReviews = cb => dispatch => {
	(0, _api.API_GET)("/api/v1/user/myratings").then(function (response) {
		if (cb) cb(null, response);
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const toggleLeftMenuBar = exports.toggleLeftMenuBar = (toggle, defaultVal = false) => dispatch => {

	dispatch({
		type: _types.TOGGLE_LEFT_MENU,
		toggle: toggle,
		defaultVal: defaultVal
	});
};

const getUpComingAppointment = exports.getUpComingAppointment = () => dispatch => {
	return (0, _api.API_GET)('/api/v1/user/upcoming/appointments').then(function (response) {
		dispatch({
			type: _types.UPCOMING_APPOINTMENTS,
			payload: response
		});
	}).catch(function (error) {});
};

const saveChatFeedBack = exports.saveChatFeedBack = (ques, data) => dispatch => {
	dispatch({
		type: _types.SAVE_CHAT_FEEDBACK,
		data: data,
		ques: ques
	});
};

const submitChatFeedback = exports.submitChatFeedback = postData => dispatch => {

	return (0, _api.API_POST)(`${_config2.default.CHAT_API_UTILITY_API}/postfeedback`, postData).then(function (response) {

		let gtmData = {

			'Category': 'Chat', 'Action': 'ChatFeedBackSubmittedSuccess', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-feedback-submitted-success'
		};
		_gtm2.default.sendEvent({ data: gtmData });

		dispatch({
			type: _types.SUBMIT_CHAT_FEEDBACK
		});
	}).catch(function (e) {
		let gtmData = {

			'Category': 'Chat', 'Action': 'ChatFeedBackApiSumittedError', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'chat-feedback-api-failed'
		};
		_gtm2.default.sendEvent({ data: gtmData });
	});
};

const saveChatFeedbackRoomId = exports.saveChatFeedbackRoomId = roomId => dispatch => {
	dispatch({
		type: _types.SAVE_CHAT_FEEDBACK_ROOMID,
		payload: roomId
	});
};

const setCommonUtmTags = exports.setCommonUtmTags = (type = 'chat', tag) => dispatch => {
	dispatch({
		type: _types.SET_COMMON_UTM_TAGS,
		payload: tag,
		actionType: type
	});
};

const unSetCommonUtmTags = exports.unSetCommonUtmTags = (type, tags) => dispatch => {
	dispatch({
		type: _types.UNSET_COMMON_UTM_TAGS,
		payload: tags,
		actionType: type
	});
};

const getDownloadAppBannerList = exports.getDownloadAppBannerList = cb => dispatch => {

	return (0, _api.API_GET)('/api/v1/common/get_key_data?key=AppInstall').then(function (response) {
		dispatch({
			type: _types.GET_APP_DOWNLOAD_BANNER_LIST,
			payload: response
		});
		if (cb) cb(response);
	}).catch(function (e) {
		if (cb) cb(null);
	});
};

const ipdChatView = exports.ipdChatView = (data = false) => dispatch => {
	dispatch({
		type: _types.IPD_CHAT_START,
		payload: data
	});
};

const checkIpdChatAgentStatus = exports.checkIpdChatAgentStatus = cb => dispatch => {
	return (0, _api.API_GET)(`${_config2.default.CHAT_API_UTILITY_API}/getOnlineUsers?departmentId=etmum62FLjZckHpvx`).then(function (response) {

		if (cb) cb(response);
	}).catch(function (e) {
		if (cb) cb(null);
	});
};

const ipdPopupFired = exports.ipdPopupFired = () => dispatch => {
	dispatch({
		type: _types.IPD_POPUP_FIRED
	});
};

const sendSPOAgentBooking = exports.sendSPOAgentBooking = (postData, cb) => dispatch => {
	return (0, _api.API_POST)(`/api/v1/user/send_cart_url`, postData).then(data => {
		if (cb) cb(null, data);
	}).catch(e => {
		if (cb) cb(e, null);
	});
};
const citiesData = exports.citiesData = () => dispatch => {
	return (0, _api.API_GET)('/api/v1/diagnostic/allmatrixcities').then(function (response) {
		dispatch({
			type: _types.USER_CITIES,
			payload: response
		});
	});
};

const iFrameState = exports.iFrameState = (url, emptyUrls, leftMenuClick = false) => dispatch => {
	dispatch({
		type: _types.PHARMEASY_IFRAME,
		url: url,
		emptyUrls: emptyUrls,
		leftMenuClick: leftMenuClick
	});
};

const setPaymentStatus = exports.setPaymentStatus = (status = null) => dispatch => {
	dispatch({
		type: _types.SET_CHAT_PAYMENT_STATUS,
		payload: status
	});
};

const SendIpdBookingEmail = exports.SendIpdBookingEmail = (data, cb) => dispatch => {
	return (0, _api.API_POST)('/api/v1/notification/ipd/emailnotifications', data).then(data => {
		if (cb) cb(null, data);
	}).catch(e => {
		if (cb) cb(e, null);
	});
};

const NonIpdBookingLead = exports.NonIpdBookingLead = (data, cb) => dispatch => {
	return (0, _api.API_POST)('/api/v1/common/push-leads', data).then(data => {
		if (cb) cb(null, data);
	}).catch(e => {
		if (cb) cb(e, null);
	});
};

const getBannerInfo = exports.getBannerInfo = (dataParams, cb) => dispatch => {

	if (dataParams && dataParams.id) {
		let url = `/api/v1/banner/detail/${dataParams.id}`;

		return (0, _api.API_GET)(url).then(data => {
			if (cb) cb(null, data);
		}).catch(e => {
			if (cb) cb(e, null);
		});
	}
	if (cb) cb(null);
};

const saveNewRefreshedToken = exports.saveNewRefreshedToken = token => dispatch => {
	dispatch({
		type: 'GET_REFRESH_NEW_TOKEN',
		payload: token
	});
};

const getReferAmnt = exports.getReferAmnt = () => dispatch => {
	(0, _api.API_GET)(`/api/v1/user/get_referral_amt`).then(function (response) {
		dispatch({
			type: _types.GET_REFER_AMOUNT,
			payload: response
		});
	}).catch(function (error) {});
};

const submitReportReview = exports.submitReportReview = (dataParams, cb) => dispatch => {
	(0, _api.API_POST)(`/api/v1/diagnostic/feedback_to_matrix?appointment_id=${dataParams.appointment_id}`, dataParams).then(data => {
		if (cb) cb(true, null);
	}).catch(e => {
		if (cb) cb(null, true);
	});
};

/***/ }),

/***/ "./dev/js/actions/diagnosis/labSearch.js":
/*!***********************************************!*\
  !*** ./dev/js/actions/diagnosis/labSearch.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.uploadCommonPrescription = exports.select_lab_payment_type = exports.getTestCategoryList = exports.preBooking = exports.clearPrescriptions = exports.removePrescription = exports.savePrescription = exports.uploadPrescription = exports.clearLabSearchId = exports.toggleSearchPackages = exports.setPackageId = exports.getLabSearchIdResults = exports.setLabSearchId = exports.getPackages = exports.resetLabCoupons = exports.removeLabCoupons = exports.applyLabCoupons = exports.updateLabAppointment = exports.getLabBookingSummary = exports.retryPaymentLAB = exports.createLABAppointment = exports.selectPickupAddress = exports.selectLabAppointmentType = exports.selectLabTimeSLot = exports.getLabTimeSlots = exports.getLabByUrl = exports.getLabById = exports.getLabs = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

var _api = __webpack_require__(/*! ../../api/api.js */ "./dev/js/api/api.js");

var _mapHelpers = __webpack_require__(/*! ../../helpers/mapHelpers.js */ "./dev/js/helpers/mapHelpers.js");

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

const getLabs = exports.getLabs = (state = {}, page = 1, from_server = false, searchByUrl = false, cb) => dispatch => {

	if (page == 1) {
		dispatch({
			type: _types.LAB_SEARCH_START,
			payload: null
		});
	}

	// dispatch({
	// 	type: SET_SERVER_RENDER_LAB,
	// 	payload: from_server
	// })

	let { selectedLocation, currentSearchedCriterias, filterCriteria, locationType } = state;
	let testIds = currentSearchedCriterias.map(x => x.id);

	let lat = 28.644800;
	let long = 77.216721;
	let place_id = "";

	if (selectedLocation) {
		lat = selectedLocation.geometry.location.lat;
		long = selectedLocation.geometry.location.lng;
		place_id = selectedLocation.place_id || "";

		if (typeof lat === 'function') lat = lat();
		if (typeof long === 'function') long = long();
	}
	/*let min_distance = filterCriteria.distanceRange[0]
 let max_distance = filterCriteria.distanceRange[1]
 let min_price = filterCriteria.priceRange[0]
 let max_price = filterCriteria.priceRange[1]
 let sort_on = filterCriteria.sort_on || ""
 */
	let sort_on = filterCriteria.sort_on || "";
	let sort_order = filterCriteria.sort_order || "";
	let availability = filterCriteria.availability || [];
	let avg_ratings = filterCriteria.avg_ratings || [];
	let home_visit = filterCriteria.home_visit || false;
	let lab_visit = filterCriteria.lab_visit || false;

	let is_insured = filterCriteria.is_insured || false;

	// do not check specialization_ids if doctor_name || hospital_name search
	if (!!filterCriteria.lab_name) {
		testIds = "";
	}

	let url = `/api/v1/diagnostic/labnetworksearch?`;

	if (searchByUrl) {
		url = `/api/v1/diagnostic/labnetworksearchbyurl?url=${searchByUrl.split('/')[1]}&`;
	}

	url += `ids=${testIds || ""}&long=${long || ""}&lat=${lat || ""}&sort_on=${sort_on}&sort_order=${sort_order}&avg_ratings=${avg_ratings}&availability=${availability}&home_visit=${home_visit}&lab_visit=${lab_visit}&page=${page}&is_insurance=${is_insured}`;

	if (!!filterCriteria.lab_name) {
		url += `&name=${filterCriteria.lab_name || ""}`;
	}

	if (!!filterCriteria.network_id) {
		url += `&network_id=${filterCriteria.network_id || ""}`;
	}

	return (0, _api.API_GET)(url).then(function (response) {

		let tests = response.tests.map(x => {
			x.type = 'test';
			return x;
		});

		let currentSearchedCriterias = tests || [];

		let show404 = false;
		// show 404 on server when no resultd
		if (response.result && response.result.length == 0 && from_server && searchByUrl) {
			show404 = true;
		}

		dispatch({
			type: _types.MERGE_SEARCH_STATE_LAB,
			payload: {
				currentSearchedCriterias
			},
			fetchNewResults: false
		});
		let searchIdData = Object.assign({}, response);
		searchIdData.currentSearchedCriterias = currentSearchedCriterias;
		dispatch({
			type: _types.SAVE_LAB_RESULTS_WITH_SEARCHID,
			payload: searchIdData,
			page: page
		});

		dispatch({
			type: _types.SET_FETCH_RESULTS_LAB,
			payload: false
		});

		dispatch({
			type: _types.APPEND_LABS_SEARCH,
			payload: response.result
		});

		dispatch({
			type: _types.LAB_SEARCH,
			payload: _extends({
				show404, page }, response)

		});

		if (page == 1) {
			let data = {
				'Category': 'ConsumerApp', 'Action': 'LabSearchCount', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-search-count', 'LabSearchCount': response.count || 0
			};
			_gtm2.default.sendEvent({ data: data });
		}

		if (cb) {
			// if no results redirect to 404 page
			if (response.result && response.result.length == 0) {
				cb(false, true);
			}
			// TODO: DO not hardcode page length
			if (response.result && response.result.length == 20) {
				cb(true);
			}
		}
		cb(false);
	}).catch(function (error) {
		throw error;
	});
};

const getLabById = exports.getLabById = (labId, testIds = [], forceAddTestids = false, dataParams = {}) => dispatch => {
	let url = `/api/v1/diagnostic/lablist/${labId}?test_ids=${testIds.join(',')}`;
	if (dataParams && dataParams.booking_page) {
		url += `&booking_page=true`;
	}
	dispatch({
		type: _types.SHOW_RETAIL_VIP_CARD_LAB_SUMMARY,
		payload: false
	});
	return (0, _api.API_GET)(url).then(function (response) {

		dispatch({
			type: _types.APPEND_LABS,
			payload: [response]
		});
		dispatch({
			type: _types.SAVE_CURRENT_LAB_PROFILE_TESTS,
			payload: response,
			forceAdd: true
		});
		dispatch({
			type: _types.SHOW_RETAIL_VIP_CARD_LAB_SUMMARY,
			payload: true
		});
		if (forceAddTestids) {
			dispatch({
				type: _types.TOGGLE_DIAGNOSIS_CRITERIA,
				payload: {
					forceAddTestids: true,
					tests: response.tests,
					labId: labId
				}
			});
		}
	}).catch(function (error) {});
};

const getLabByUrl = exports.getLabByUrl = (lab_url, testIds = [], cb) => dispatch => {
	let url = `/api/v1/diagnostic/lablistbyurl?url=${lab_url}&test_ids=${testIds.join(',')}`;
	dispatch({
		type: _types.SHOW_RETAIL_VIP_CARD_LAB_SUMMARY,
		payload: false
	});
	return (0, _api.API_GET)(url).then(function (response) {
		dispatch({
			type: _types.APPEND_LABS,
			payload: [response]
		});
		dispatch({
			type: _types.SAVE_CURRENT_LAB_PROFILE_TESTS,
			payload: response,
			forceAdd: true
		});
		dispatch({
			type: _types.SHOW_RETAIL_VIP_CARD_LAB_SUMMARY,
			payload: true
		});
		cb(response.lab ? response.lab.id : null, null);
	}).catch(function (error) {
		cb(null, error.url);
	});
};

const getLabTimeSlots = exports.getLabTimeSlots = (labId, pickup, pincode, date, extraParams, callback) => dispatch => {
	let url = `/api/v1/diagnostic/labtiming_v3?lab=${labId}&pickup=${pickup}&pincode=${pincode}&date=${date}`;
	if (extraParams) {
		url += `&test_ids=${extraParams.test_ids || ''}&r_pickup=${extraParams.r_pickup || 0}&p_pickup=${extraParams.p_pickup || 0}`;
	}

	return (0, _api.API_GET)(url).then(function (response) {
		if (callback) callback(response);
	}).catch(function (error) {});
};

const selectLabTimeSLot = exports.selectLabTimeSLot = (slot, reschedule = false, dateParams = null) => dispatch => {
	dispatch({
		type: _types.SELECT_LAB_TIME_SLOT,
		payload: {
			reschedule,
			slot,
			dateParams
		}
	});
};

const selectLabAppointmentType = exports.selectLabAppointmentType = type => dispatch => {
	dispatch({
		type: _types.SELECR_APPOINTMENT_TYPE_LAB,
		payload: type
	});
};

const selectPickupAddress = exports.selectPickupAddress = address => dispatch => {
	dispatch({
		type: _types.SELECT_USER_ADDRESS,
		payload: address
	});
};

const createLABAppointment = exports.createLABAppointment = (postData, callback) => dispatch => {
	postData['visitor_info'] = _gtm2.default.getVisitorInfo();
	return (0, _api.API_POST)(`/api/v1/diagnostic/labappointment/create`, postData).then(function (response) {
		callback(null, response);
	}).catch(function (error) {
		callback(error, null);
	});
};

const retryPaymentLAB = exports.retryPaymentLAB = (appointmentId, callback) => dispatch => {
	return (0, _api.API_GET)(`/api/v1/diagnostic/appointment/payment/retry/${appointmentId}`).then(function (response) {
		callback(null, response);
	}).catch(function (error) {
		callback(error, null);
	});
};

const getLabBookingSummary = exports.getLabBookingSummary = (appointmentID, callback) => dispatch => {
	(0, _api.API_GET)(`/api/v1/user/appointment/${appointmentID}?type=lab`).then(function (response) {
		callback(null, response);
	}).catch(function (error) {
		callback(error, null);
	});
};

const updateLabAppointment = exports.updateLabAppointment = (appointmentData, callback) => dispatch => {
	(0, _api.API_POST)(`/api/v1/user/appointment/${appointmentData.id}/update?type=lab`, appointmentData).then(function (response) {
		callback(null, response);
	}).catch(function (error) {
		callback(error, null);
	});
};

const applyLabCoupons = exports.applyLabCoupons = (productId = '', couponCode, couponId, labId = null, dealPrice, test_ids = [], profile_id = null, cart_item = null, callback) => dispatch => {

	(0, _api.API_POST)(`/api/v1/coupon/discount`, {
		coupon_code: [couponCode],
		deal_price: dealPrice,
		product_id: productId,
		tests: test_ids,
		lab: labId,
		profile: profile_id || null,
		cart_item
	}).then(function (response) {
		let analyticData = {
			'Category': 'ConsumerApp', 'Action': 'LabCouponApplied', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'lab-coupon-applied', 'couponId': couponId
		};
		_gtm2.default.sendEvent({ data: analyticData });
		if (response && response.status == 1) {
			dispatch({
				type: _types.APPLY_LAB_COUPONS,
				payload: response
			});
			if (callback) {
				callback(null, response);
			}
		} else {
			dispatch({
				type: _types.REMOVE_LAB_COUPONS,
				labId: labId,
				couponId: couponId
			});
			if (callback) {
				callback('Not applicable', null);
			}
		}
	}).catch(function (error) {
		dispatch({
			type: _types.REMOVE_LAB_COUPONS,
			labId: labId,
			couponId: couponId
		});
		if (callback) {
			callback(error, null);
		}
	});
};

const removeLabCoupons = exports.removeLabCoupons = (labId, couponId) => dispatch => {

	dispatch({
		type: _types.REMOVE_LAB_COUPONS,
		labId: labId,
		couponId: couponId
	});
};

const resetLabCoupons = exports.resetLabCoupons = () => dispatch => {
	dispatch({
		type: _types.RESET_LAB_COUPONS
	});
};

const getPackages = exports.getPackages = (state = {}, page = 1, from_server = false, searchByUrl = false, extra_params, cb) => dispatch => {
	//get searched packages result
	let { selectedLocation, currentSearchedCriterias, filterCriteria, locationType, filterCriteriaPackages } = state;
	if (page == 1) {
		dispatch({
			type: _types.LAB_SEARCH_START,
			payload: null
		});
	}
	let lat = 28.644800;
	let long = 77.216721;
	let place_id = "";
	let url_string;
	let new_url;
	let forTaxSaver = false;
	let parsed = {};

	if (typeof window == "object") {
		url_string = window.location.href;
		new_url = new URL(url_string);
		forTaxSaver = window.location.pathname.includes("tax-saver-health-packages");
		parsed = queryString.parse(window.location.search);
	}

	if (selectedLocation) {
		lat = selectedLocation.geometry.location.lat;
		long = selectedLocation.geometry.location.lng;
		place_id = selectedLocation.place_id || "";

		if (typeof lat === 'function') lat = lat();
		if (typeof long === 'function') long = long();
	}

	/*let min_distance = filterCriteriaPackages.distanceRange[0]
 let max_distance = filterCriteriaPackages.distanceRange[1]
 let min_price = filterCriteriaPackages.priceRange[0]
 let max_price = filterCriteriaPackages.priceRange[1]
 let sort_on = filterCriteriaPackages.sort_on || ""
 */
	let sort_on = filterCriteriaPackages.sort_on || "";
	let sort_order = filterCriteriaPackages.sort_order || "";
	let avg_ratings = filterCriteriaPackages.avg_ratings || "";
	let home_visit = filterCriteriaPackages.home_visit || false;
	let lab_visit = filterCriteriaPackages.lab_visit || false;

	let catIds = filterCriteriaPackages.catIds || "";
	let max_age = filterCriteriaPackages.max_age || "";
	let min_age = filterCriteriaPackages.min_age || "";
	let gender = filterCriteriaPackages.gender || "";
	let package_type = filterCriteriaPackages.packageType || "";
	let test_ids = filterCriteriaPackages.test_ids || "";
	let package_ids = filterCriteriaPackages.package_ids || "";
	let package_category_ids = parsed.package_category_ids || "";
	// let package_category_ids = filterCriteriaPackages.package_category_ids || ""
	let url = `/api/v1/diagnostic/packagelist?`;

	if (searchByUrl) {
		url = `/api/v1/diagnostic/packagelist?url=${searchByUrl.split('/')[1]}&`;
	}

	if (forTaxSaver) {
		// package_category_id = parsed.package_category_ids
		url += `long=${long || ""}&lat=${lat || ""}&page=${page}`;
	}

	if (!forTaxSaver) {
		// package_category_id = parsed.package_category_ids
		url += `long=${long || ""}&lat=${lat || ""}&sort_on=${sort_on}&sort_order=${sort_order}&avg_ratings=${avg_ratings}&home_visit=${home_visit}&lab_visit=${lab_visit}&category_ids=${catIds || ""}&max_age=${max_age || ""}&min_age=${min_age || ""}&gender=${gender || ""}&package_type=${package_type || ""}&test_ids=${test_ids || ""}&page=${page}&package_ids=${package_ids}`;
	}

	if (!!filterCriteriaPackages.lab_name) {
		url += `&name=${filterCriteria.lab_name || ""}`;
	}

	if (parsed.package_category_ids) {
		url += `&package_category_ids=${package_category_ids}`;
	}

	if (!!filterCriteriaPackages.network_id) {
		url += `&network_id=${filterCriteria.network_id || ""}`;
	}

	if (extra_params && Object.keys(extra_params).length > 0) {
		if (extra_params.utm_term) {
			url += `&utm_term=${parsed.utm_term || ""}`;
		}

		if (extra_params.utm_medium) {
			url += `&utm_medium=${extra_params.utm_medium || ""}`;
		}

		if (extra_params.utm_campaign) {
			url += `&utm_campaign=${extra_params.utm_campaign || ""}`;
		}

		if (extra_params.utm_source) {
			url += `&utm_source=${extra_params.utm_source || ""}`;
		}
	}

	return (0, _api.API_GET)(url).then(function (response) {
		if (response) {
			let tests = '';
			let currentSearchedCriterias = tests || [];

			dispatch({
				type: _types.MERGE_SEARCH_STATE_LAB,
				payload: {
					currentSearchedCriterias
				},
				fetchNewResults: false
			});

			dispatch({
				type: _types.SEARCH_HEALTH_PACKAGES,
				page: page,
				payload: response
			});
		}

		if (page == 1) {
			let data = {
				'Category': 'ConsumerApp', 'Action': 'LabSearchCount', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-search-count', 'LabSearchCount': response.count || 0
			};
			_gtm2.default.sendEvent({ data: data });
		}

		if (cb) {
			// if no results redirect to 404 page
			if (response.result && response.result.length == 0) {
				cb(false, true);
			}
			// TODO: DO not hardcode page length
			if (response.result && response.result.length == 30) {
				cb(true);
			}
		}
		cb(false);
	}).catch(function (error) {
		throw error;
	});
};

const setLabSearchId = exports.setLabSearchId = (searchId, filters, page = 1) => dispatch => {
	dispatch({
		type: _types.SET_LAB_SEARCH_ID,
		payload: filters,
		searchId: searchId,
		page: page
	});
};

const getLabSearchIdResults = exports.getLabSearchIdResults = (searchId, response) => dispatch => {
	dispatch({
		type: _types.GET_LAB_SEARCH_ID_RESULTS,
		searchId: searchId
	});
	dispatch({
		type: _types.SET_LAB_URL_PAGE,
		payload: response.page
	});
	dispatch({
		type: _types.APPEND_LABS_SEARCH,
		payload: response.data.result
	});

	dispatch({
		type: _types.LAB_SEARCH,
		payload: _extends({
			page: response.page }, response.data)

	});
};

const setPackageId = exports.setPackageId = (package_id, isHomePage) => dispatch => {

	dispatch({
		type: _types.TOGGLE_PACKAGE_ID,
		package_id: package_id,
		isHomePage: isHomePage
	});
};

const toggleSearchPackages = exports.toggleSearchPackages = healthPackage => dispatch => {
	dispatch({
		type: _types.TOGGLE_SEARCH_PACKAGES,
		healthPackage: healthPackage
	});
};

const clearLabSearchId = exports.clearLabSearchId = () => dispatch => {
	dispatch({
		type: _types.CLEAR_LAB_SEARCH_ID
	});
};

const uploadPrescription = exports.uploadPrescription = (profileData, callback) => dispatch => {
	(0, _api.API_POST)(`/api/v1/prescription/upload_prescription`, profileData).then(function (response) {
		if (callback) callback(response, null);
	}).catch(function (error) {
		if (callback) callback(error, null);
	});
};

const savePrescription = exports.savePrescription = (imgUrl, cb) => dispatch => {
	dispatch({
		type: _types.SAVE_PRESCRIPTION,
		payload: imgUrl
	});
};

const removePrescription = exports.removePrescription = criteria => dispatch => {
	dispatch({
		type: _types.DELETE_PRESCRIPTION,
		payload: criteria
	});
};

const clearPrescriptions = exports.clearPrescriptions = () => dispatch => {
	dispatch({
		type: _types.CLEAR_PRESCRIPTION
	});
};

const preBooking = exports.preBooking = selectedTime => dispatch => {
	(0, _api.API_POST)(`/api/v1/common/pre-booking`, selectedTime).then(function (response) {
		dispatch({
			type: _types.SAVE_IS_PRESCRIPTION_NEED,
			payload: response
		});
	});
};

const getTestCategoryList = exports.getTestCategoryList = (state = {}, page = 1, from_server = false, searchByUrl = false, callback) => dispatch => {

	return (0, _api.API_GET)(`/api/v1/diagnostic/lab-test-category-landing-urls?url=${searchByUrl.split('/')[1]}&page=${page}`).then(function (response) {
		if (callback) callback(response);
	}).catch(function (error) {
		if (callback) callback(error);
		throw error;
	});
};

const select_lab_payment_type = exports.select_lab_payment_type = (type = 1) => dispatch => {
	dispatch({
		type: _types.SELECT_LAB_PAYMENT_TYPE,
		payload: type
	});
};

const uploadCommonPrescription = exports.uploadCommonPrescription = (profileData, callback) => dispatch => {
	(0, _api.API_POST)(`api/v1/diagnostic/lab_test_prescription/upload`, profileData).then(function (response) {
		if (callback) callback(response, null);
	}).catch(function (error) {
		if (callback) callback(null, error);
	});
};

/***/ }),

/***/ "./dev/js/actions/diagnosis/searchCriteria.js":
/*!****************************************************!*\
  !*** ./dev/js/actions/diagnosis/searchCriteria.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.patientDetails = exports.getCompareList = exports.resetPkgCompare = exports.togglecompareCriteria = exports.savePincode = exports.searchTestData = exports.setCorporateCoupon = exports.mergeLABState = exports.clearExtraTests = exports.clearAllTests = exports.getLabTests = exports.getDiagnosisCriteriaResults = exports.toggleDiagnosisCriteria = exports.loadLabCommonCriterias = undefined;

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

var _api = __webpack_require__(/*! ../../api/api.js */ "./dev/js/api/api.js");

const loadLabCommonCriterias = exports.loadLabCommonCriterias = () => dispatch => {

    return (0, _api.API_GET)('/api/v1/diagnostic/labsearch').then(function (response) {
        dispatch({
            type: _types.LOAD_SEARCH_CRITERIA_LAB,
            payload: response
        });
    }).catch(function (error) {
        dispatch({
            type: _types.LOAD_SEARCH_CRITERIA_LAB,
            payload: null
        });
        throw error;
    });
};

const toggleDiagnosisCriteria = exports.toggleDiagnosisCriteria = (type, criteria, forceAdd = false, extraDataParams = {}) => dispatch => {
    if (extraDataParams && extraDataParams.forceAddTestids) {
        dispatch({
            type: _types.TOGGLE_DIAGNOSIS_CRITERIA,
            payload: {
                forceAddTestids: true,
                tests: extraDataParams.tests,
                labId: extraDataParams.labId
            }
        });
        return;
    }
    dispatch({
        type: _types.TOGGLE_DIAGNOSIS_CRITERIA,
        payload: {
            type, criteria, forceAdd
        }
    });

    if (criteria && criteria.removeTest && criteria.selectedLabTests) {
        dispatch({
            type: _types.APPEND_LABS,
            payload: {
                removeTests: true,
                labTest: criteria.selectedLabTests,
                test_id: criteria.id
            }
        });
    }
};

const getDiagnosisCriteriaResults = exports.getDiagnosisCriteriaResults = (searchString, callback) => dispatch => {
    (0, _api.API_GET)(`/api/v1/diagnostic/test?name=${searchString}`).then(function (response) {
        callback(response);
    }).catch(function (error) {
        callback(null);
    });
};

const getLabTests = exports.getLabTests = (lab_id, searchString, callback, page = 1) => dispatch => {
    (0, _api.API_GET)(`/api/v1/diagnostic/labtest/${lab_id}?test_name=${searchString}&page=${page}`).then(function (response) {
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(null);
    });
};

const clearAllTests = exports.clearAllTests = () => dispatch => {
    dispatch({
        type: _types.CLEAR_ALL_TESTS,
        payload: {}
    });
};

const clearExtraTests = exports.clearExtraTests = () => dispatch => {
    dispatch({
        type: _types.CLEAR_EXTRA_TESTS,
        payload: {}
    });
};

const mergeLABState = exports.mergeLABState = (state, fetchNewResults = true) => dispatch => {

    dispatch({
        type: _types.MERGE_SEARCH_STATE_LAB,
        payload: state,
        fetchNewResults
    });
};

const setCorporateCoupon = exports.setCorporateCoupon = (coupon = "") => dispatch => {

    dispatch({
        type: _types.SET_CORPORATE_COUPON,
        payload: coupon
    });
};
const searchTestData = exports.searchTestData = (test_ids, test_url, lab_id, state, no_labs, callback) => dispatch => {
    // get selected test/package details

    let url;
    let lat = 28.644800;
    let long = 77.216721;

    let { selectedLocation } = state;

    if (selectedLocation) {
        lat = selectedLocation.geometry.location.lat;
        long = selectedLocation.geometry.location.lng;

        if (typeof lat === 'function') lat = lat();
        if (typeof long === 'function') long = long();
    }

    if (test_url) {
        url = '/api/v1/diagnostic/test/details_by_url?url=' + test_url + '&long=' + long + '&lat=' + lat;
    } else {
        url = '/api/v1/diagnostic/test/details?test_ids=' + test_ids + '&long=' + long + '&lat=' + lat;
    }

    if (lab_id) {
        url += '&lab_id=' + lab_id;
    }

    if (no_labs) {
        url += '&no_labs=true';
    }

    return (0, _api.API_GET)(url).then(function (response) {
        dispatch({
            type: _types.SEARCH_TEST_INFO,
            payload: response

        });
        if (callback) callback(response);
    }).catch(function (error) {
        dispatch({
            type: _types.SEARCH_TEST_INFO,
            payload: null
        });
        throw error;
    });
};

const savePincode = exports.savePincode = pincode => dispatch => {
    dispatch({
        type: _types.SAVE_PINCODE,
        payload: pincode
    });
};

const togglecompareCriteria = exports.togglecompareCriteria = (criteria, reset) => dispatch => {
    dispatch({
        type: _types.TOGGLE_COMPARE_PACKAGE,
        reset: reset,
        payload: {
            criteria
        }
    });
};

const resetPkgCompare = exports.resetPkgCompare = () => dispatch => {

    dispatch({
        type: _types.RESET_COMPARE_STATE,
        payload: null
    });
};

const getCompareList = exports.getCompareList = (selectedIds, selectedLocation, searchByUrl, cat_ids, callback) => dispatch => {
    // comparision results for selected packages
    let lat = 28.644800;
    let long = 77.216721;
    if (selectedLocation) {
        lat = selectedLocation.geometry.location.lat;
        long = selectedLocation.geometry.location.lng;

        if (typeof lat === 'function') lat = lat();
        if (typeof long === 'function') long = long();
    }
    let postData = {};
    postData.package_lab_ids = selectedIds;
    postData.url = searchByUrl;
    postData['lat'] = lat;
    postData['long'] = long;
    postData.category_id = cat_ids;
    let url = '/api/v1/diagnostic/compare_lab_packages';
    if (searchByUrl) {
        url = '/api/v1/diagnostic/compare_lab_packages_by_url';
    }
    (0, _api.API_POST)(url, postData).then(function (response) {
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(null);
    });
};

const patientDetails = exports.patientDetails = criteria => dispatch => {
    dispatch({
        type: _types.SAVE_PATIENT_DETAILS,
        payload: {
            criteria
        }
    });
};

/***/ }),

/***/ "./dev/js/actions/index.js":
/*!*********************************!*\
  !*** ./dev/js/actions/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _searchCriteria = __webpack_require__(/*! ./opd/searchCriteria.js */ "./dev/js/actions/opd/searchCriteria.js");

var SEARCH_CRITERIA_OPD = _interopRequireWildcard(_searchCriteria);

var _searchCriteria2 = __webpack_require__(/*! ./diagnosis/searchCriteria.js */ "./dev/js/actions/diagnosis/searchCriteria.js");

var SEARCH_CRITERIA_LABS = _interopRequireWildcard(_searchCriteria2);

var _doctorSearch = __webpack_require__(/*! ./opd/doctorSearch.js */ "./dev/js/actions/opd/doctorSearch.js");

var DOCTORS_ACTIONS = _interopRequireWildcard(_doctorSearch);

var _labSearch = __webpack_require__(/*! ./diagnosis/labSearch.js */ "./dev/js/actions/diagnosis/labSearch.js");

var LABS_ACTIONS = _interopRequireWildcard(_labSearch);

var _user = __webpack_require__(/*! ./commons/user.js */ "./dev/js/actions/commons/user.js");

var USER_ACTIONS = _interopRequireWildcard(_user);

var _auth = __webpack_require__(/*! ./commons/auth.js */ "./dev/js/actions/commons/auth.js");

var AUTH_ACTIONS = _interopRequireWildcard(_auth);

var _siteMap = __webpack_require__(/*! ./commons/siteMap.js */ "./dev/js/actions/commons/siteMap.js");

var SITE_MAP = _interopRequireWildcard(_siteMap);

var _elasticSearch = __webpack_require__(/*! ./commons/elasticSearch.js */ "./dev/js/actions/commons/elasticSearch.js");

var ELASTIC_SEARCH = _interopRequireWildcard(_elasticSearch);

var _adsBooking = __webpack_require__(/*! ./commons/adsBooking.js */ "./dev/js/actions/commons/adsBooking.js");

var ADS_BOOKING = _interopRequireWildcard(_adsBooking);

var _insuranceCriteria = __webpack_require__(/*! ./insurance/insuranceCriteria.js */ "./dev/js/actions/insurance/insuranceCriteria.js");

var INSURANCE_ACTIONS = _interopRequireWildcard(_insuranceCriteria);

var _primeCare = __webpack_require__(/*! ./commons/primeCare.js */ "./dev/js/actions/commons/primeCare.js");

var CARE_DETAILS = _interopRequireWildcard(_primeCare);

var _searchCriteria3 = __webpack_require__(/*! ./ipd/searchCriteria.js */ "./dev/js/actions/ipd/searchCriteria.js");

var SEARCH_CRITERIA_IPD = _interopRequireWildcard(_searchCriteria3);

var _vipClubCriteria = __webpack_require__(/*! ./vipClub/vipClubCriteria.js */ "./dev/js/actions/vipClub/vipClubCriteria.js");

var VIP_CLUB_CRITERIA = _interopRequireWildcard(_vipClubCriteria);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = Object.assign({}, SEARCH_CRITERIA_OPD, SEARCH_CRITERIA_LABS, DOCTORS_ACTIONS, LABS_ACTIONS, USER_ACTIONS, AUTH_ACTIONS, SITE_MAP, ELASTIC_SEARCH, ADS_BOOKING, INSURANCE_ACTIONS, CARE_DETAILS, SEARCH_CRITERIA_IPD, VIP_CLUB_CRITERIA);

/***/ }),

/***/ "./dev/js/actions/insurance/insuranceCriteria.js":
/*!*******************************************************!*\
  !*** ./dev/js/actions/insurance/insuranceCriteria.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clearBankDetails = exports.cancelReason = exports.clearAvailNowInsurance = exports.saveAvailNowInsurance = exports.uploadBankProof = exports.saveUserBankDetails = exports.removeMemberProof = exports.storeMemberProofs = exports.uploadProof = exports.createEndorsementData = exports.retrieveEndorsedData = exports.pushUserEndorsedData = exports.getEndorsedMemberList = exports.cancelledInsuranceDetails = exports.cancelInsurance = exports.resetUserInsuredData = exports.retrieveUserData = exports.pushUserData = exports.generateInsuranceLead = exports.resetSelectedPlans = exports.resetSelectedInsuranceMembers = exports.saveCurrentSelectedMembers = exports.getInsuredProfile = exports.getUserProfile = exports.selectInsuranceProfile = exports.userData = exports.selectInsurancePlan = exports.updateMemberList = exports.insurancePay = exports.getInsuranceMemberList = exports.getInsurance = undefined;

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

var _api = __webpack_require__(/*! ../../api/api.js */ "./dev/js/api/api.js");

const getInsurance = exports.getInsurance = (is_endorsement, callback) => dispatch => {
    // to get insurance plans

    return (0, _api.API_GET)('/api/v1/insurance/list?is_endorsement=' + is_endorsement).then(function (response) {
        dispatch({
            type: _types.GET_INSURANCE,
            payload: response
        });
        if (callback) callback(response);
    }).catch(function (error) {
        dispatch({
            type: _types.GET_INSURANCE,
            payload: error
        });
        if (callback) callback(error);
        throw error;
    });
};
const getInsuranceMemberList = exports.getInsuranceMemberList = member_list_id => dispatch => {
    // get insured member details and list of dieases(faq's)
    return (0, _api.API_GET)('/api/v1/insurance/members/list?id=' + member_list_id).then(function (response) {
        dispatch({
            type: _types.INSURE_MEMBER_LIST,
            payload: response
        });
    }).catch(function (error) {
        dispatch({
            type: _types.INSURE_MEMBER_LIST,
            payload: null
        });
        throw error;
    });
};
const insurancePay = exports.insurancePay = (criteria, callback) => dispatch => {
    // to request payment
    return (0, _api.API_POST)('/api/v1/insurance/create', criteria).then(function (response) {
        dispatch({
            type: _types.INSURANCE_PAY,
            payload: response
        });
        if (callback) callback(response);
    }).catch(function (error) {
        dispatch({
            type: _types.INSURANCE_PAY,
            payload: error
        });
        if (callback) callback(error);
        throw error;
    });
};
const updateMemberList = exports.updateMemberList = (postData, callback) => dispatch => {
    // update members selected list
    return (0, _api.API_POST)('/api/v1/insurance/members/update', postData).then(function (response) {
        dispatch({
            type: _types.UPDATE_MEMBER_LIST,
            payload: response
        });
        if (callback) callback(response);
    }).catch(function (error) {
        dispatch({
            type: _types.UPDATE_MEMBER_LIST,
            payload: null
        });
        throw error;
    });
};
const selectInsurancePlan = exports.selectInsurancePlan = (type, selected_plan) => dispatch => {
    // to select insurance plan
    dispatch({
        type: _types.SELECT_INSURANCE_PLAN,
        payload: {
            type, selected_plan
        }
    });
};
const userData = exports.userData = (type, self_data_values, forceAdd = false, previousProfile = '') => dispatch => {
    // to save user entered details in dummy table
    dispatch({
        type: _types.SELF_DATA,
        payload: {
            type, forceAdd
        },
        self_data_values: [self_data_values],
        previousProfile: previousProfile
    });
};
const selectInsuranceProfile = exports.selectInsuranceProfile = (newProfileid, member_id, newProfile, param_id) => dispatch => {
    // select from profile option
    dispatch({
        type: _types.SELECT_PROFILE,
        payload: {
            newProfileid, member_id, newProfile, param_id
        }
    });
};
const getUserProfile = exports.getUserProfile = () => dispatch => {
    return (0, _api.API_GET)('/api/v1/user/userprofile').then(function (response) {
        dispatch({
            type: _types.APPEND_USER_PROFILES,
            payload: response
        });
    }).catch(function (error) {});
};
const getInsuredProfile = exports.getInsuredProfile = callback => dispatch => {
    // to get insured members data and certification details
    return (0, _api.API_GET)('/api/v1/insurance/profile').then(function (response) {
        dispatch({
            type: _types.INSURED_PROFILE,
            payload: response
        });
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(error);
    });
};

const saveCurrentSelectedMembers = exports.saveCurrentSelectedMembers = membersId => dispatch => {
    // to save current selected members data in store
    dispatch({
        type: _types.SAVE_CURRENT_INSURED_MEMBERS,
        payload: membersId
    });
};

const resetSelectedInsuranceMembers = exports.resetSelectedInsuranceMembers = member_id => dispatch => {
    // filter only visible forms objexts in the store
    dispatch({
        type: _types.RESET_CURRENT_INSURED_MEMBERS,
        payload: member_id
    });
};

const resetSelectedPlans = exports.resetSelectedPlans = () => dispatch => {
    // to reset user selected plan
    dispatch({
        type: _types.RESET_INSURED_PLANS
    });
};
const generateInsuranceLead = exports.generateInsuranceLead = (selectedPlan, number, lead_data, selectedLocation, callback) => dispatch => {
    // to create insurance lead for matrix
    let lat;
    let long;
    let latitude = 28.644800;
    let longitude = 77.216721;
    if (selectedLocation) {
        lat = selectedLocation.geometry.location.lat;
        long = selectedLocation.geometry.location.lng;

        if (typeof lat === 'function') lat = lat();
        if (typeof long === 'function') long = long();
    }
    let plan = {};
    plan.plan_id = selectedPlan;
    plan.phone_number = '';
    plan.source = '';
    if (lead_data && lead_data.source) {
        plan.source = lead_data.source;
    }
    if (number == '' && lead_data && lead_data.phone_number) {
        plan.phone_number = lead_data.phone_number;
    } else {
        plan.phone_number = number;
    }
    plan.lead_data = lead_data;
    if (latitude != lat && longitude != long) {
        plan.latitude = latitude;
        plan.longitude = longitude;
    }
    return (0, _api.API_POST)(`/api/v1/insurance/lead/create`, plan).then(function (response) {
        if (callback) callback(null, response);
    }).catch(function (error) {
        if (callback) callback(error, null);
    });
};
const pushUserData = exports.pushUserData = (criteria, callback) => dispatch => {
    // to save user entered details in dummy table
    return (0, _api.API_POST)('/api/v1/insurance/push_insurance_data', criteria).then(function (response) {
        dispatch({
            type: _types.PUSH_USER_DATA,
            payload: response
        });
        if (callback) callback(response);
    }).catch(function (error) {
        dispatch({
            type: _types.PUSH_USER_DATA,
            payload: error
        });
        if (callback) callback(error);
        throw error;
    });
};

const retrieveUserData = exports.retrieveUserData = callback => dispatch => {
    // to retrieve user data in case of agent has loggedin instead of user 
    (0, _api.API_GET)('/api/v1/insurance/show_insurance_data').then(function (response) {
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(null);
    });
};

const resetUserInsuredData = exports.resetUserInsuredData = criteria => dispatch => {
    // to reset the insurance store to initial state
    dispatch({
        type: _types.RESET_INSURED_DATA,
        payload: criteria
    });
};

const cancelInsurance = exports.cancelInsurance = (data, callback) => dispatch => {
    // to submit user cancellation request
    return (0, _api.API_POST)('/api/v1/insurance/cancel', data).then(function (response) {
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(null);
    });
};

const cancelledInsuranceDetails = exports.cancelledInsuranceDetails = callback => dispatch => {
    // to get user cancelled details
    (0, _api.API_GET)('/api/v1/insurance/cancel-master').then(function (response) {
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(null);
    });
};

const getEndorsedMemberList = exports.getEndorsedMemberList = callback => dispatch => {
    // to get the list of members which are allowed for endorsement
    return (0, _api.API_GET)('/api/v1/insurance/endorsement').then(function (response) {
        dispatch({
            type: _types.ENDORSED_MEMBER_LIST,
            payload: response
        });
        if (callback) callback(response);
    }).catch(function (error) {
        dispatch({
            type: _types.ENDORSED_MEMBER_LIST,
            payload: null
        });
        if (callback) callback(null);
    });
};

const pushUserEndorsedData = exports.pushUserEndorsedData = (criteria, callback) => dispatch => {
    // to save user entered details in dummy table
    return (0, _api.API_POST)('/api/v1/insurance/push_endorsement_data', criteria).then(function (response) {
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(error);
        throw error;
    });
};

const retrieveEndorsedData = exports.retrieveEndorsedData = callback => dispatch => {
    // to retrieve user endorsement data (if user want's to update any of details in there policy details)
    (0, _api.API_GET)('/api/v1/insurance/show_endorsement_data').then(function (response) {
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(null);
    });
};

const createEndorsementData = exports.createEndorsementData = (criteria, callback) => dispatch => {
    // submit endoresment data
    return (0, _api.API_POST)('/api/v1/insurance/endorsement/create', criteria).then(function (response) {
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(error);
        throw error;
    });
};

const uploadProof = exports.uploadProof = (profileData, memberId, imgType, cb) => dispatch => {
    // store selected proof to database
    (0, _api.API_POST)(`/api/v1/insurance/member/${memberId}/upload?member=${memberId}&type=${imgType}`, profileData).then(function (response) {
        if (cb) cb(response, null);
    }).catch(function (error) {
        if (cb) cb(error, null);
    });
};

const storeMemberProofs = exports.storeMemberProofs = (imgUrl, cb) => dispatch => {
    dispatch({
        type: _types.SAVE_MEMBER_PROOFS,
        payload: imgUrl
    });
};

const removeMemberProof = exports.removeMemberProof = criteria => dispatch => {
    // to remove cancelled uploaded image
    dispatch({
        type: _types.DELETE_MEMBER_PROOF,
        payload: criteria
    });
};
const saveUserBankDetails = exports.saveUserBankDetails = criteria => dispatch => {
    // to save user entered bank details in store
    dispatch({
        type: _types.SAVE_INSURANCE_BANK_DETAILS,
        payload: criteria
    });
};
const uploadBankProof = exports.uploadBankProof = (profileData, imgType, cb) => dispatch => {
    // to upload proofs
    (0, _api.API_POST)(`/api/v1/insurance/bank/upload`, profileData).then(function (response) {
        if (cb) cb(response, null);
    }).catch(function (error) {
        if (cb) cb(error, null);
    });
};

const saveAvailNowInsurance = exports.saveAvailNowInsurance = criteria => dispatch => {
    dispatch({
        type: _types.SAVE_AVAIL_NOW_INSURANCE,
        payload: criteria
    });
};

const clearAvailNowInsurance = exports.clearAvailNowInsurance = () => dispatch => {
    // to clear avail now from store
    dispatch({
        type: _types.CLEAR_AVAIL_NOW_INSURANCE
    });
};
const cancelReason = exports.cancelReason = criteria => dispatch => {
    // ask cancellation reason
    dispatch({
        type: _types.CANCEL_REASON_INSURANCE,
        payload: criteria
    });
};
const clearBankDetails = exports.clearBankDetails = () => dispatch => {
    // to reset user enterted bank details
    dispatch({
        type: _types.CLEAR_BANK_DETAILS_INSURANCE
    });
};

/***/ }),

/***/ "./dev/js/actions/ipd/searchCriteria.js":
/*!**********************************************!*\
  !*** ./dev/js/actions/ipd/searchCriteria.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.postHospitalComments = exports.getHospitalComments = exports.saveIpdPopupData = exports.submitSecondIPDForm = exports.clearIpdSearchId = exports.getHospitaDetails = exports.getIpdSearchIdResults = exports.setIpdSearchId = exports.mergeIpdCriteria = exports.getIpdHospitals = exports.submitIPDForm = exports.toggleIPDCriteria = exports.getIpdInfo = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

var _api = __webpack_require__(/*! ../../api/api.js */ "./dev/js/api/api.js");

var _gtm = __webpack_require__(/*! ../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getIpdInfo = exports.getIpdInfo = (ipd_id, selectedLocation, url = null, cb) => dispatch => {

    let lat = 28.644800;
    let long = 77.216721;
    let place_id = "";
    let locality = "";
    let sub_locality = "";

    dispatch({
        type: _types.LOADED_IPD_INFO_START
    });

    if (selectedLocation) {
        lat = selectedLocation.geometry.location.lat;
        long = selectedLocation.geometry.location.lng;
        place_id = selectedLocation.place_id || "";
        if (typeof lat === 'function') lat = lat();
        if (typeof long === 'function') long = long();
        locality = selectedLocation.locality || "";
        sub_locality = selectedLocation.sub_locality || "";
    } else {
        locality = 'Delhi';
    }

    let api_url = '';

    if (url) {
        api_url = `api/v1/doctor/ipd_procedure_by_url/${url}?city=${locality}`;
    } else {
        api_url = `/api/v1/doctor/ipd_procedure/${ipd_id}?long=${long}&lat=${lat}&city=${locality}`;
    }

    return (0, _api.API_GET)(api_url).then(function (response) {
        dispatch({
            type: _types.LOADED_IPD_INFO,
            payload: response
        });
        if (cb) cb(response);
    }).catch(function (error) {
        if (cb) cb(null);
    });
};

const toggleIPDCriteria = exports.toggleIPDCriteria = (criteria, forceAdd = false) => dispatch => {

    dispatch({
        type: _types.TOGGLE_IPD,
        payload: criteria,
        forceAdd: forceAdd
    });
};

const submitIPDForm = exports.submitIPDForm = (formData, selectedLocation, cb) => dispatch => {

    let lat = 28.644800;
    let long = 77.216721;
    let place_id = "";
    let locality = "";
    let sub_locality = "";

    if (selectedLocation) {
        lat = selectedLocation.geometry.location.lat;
        long = selectedLocation.geometry.location.lng;
        place_id = selectedLocation.place_id || "";
        if (typeof lat === 'function') lat = lat();
        if (typeof long === 'function') long = long();
        locality = selectedLocation.locality || "";
        sub_locality = selectedLocation.sub_locality || "";
    } else {
        locality = 'Delhi';
    }

    if (formData) {
        formData.lat = lat;
        formData.long = long;
        formData.locality = locality;
        formData.sub_locality = sub_locality;
    }

    return (0, _api.API_POST)('/api/v1/doctor/ipd_procedure/create_lead', formData).then(function (response) {
        if (cb) cb(null, response);
    }).catch(function (error) {
        if (cb) cb(error, null);
    });
};

const getIpdHospitals = exports.getIpdHospitals = (state, page = 1, fromServer, searchByUrl, cb) => dispatch => {

    let lat = 28.644800;
    let long = 77.216721;
    let place_id = "";

    let { selectedLocation, filterCriteria, commonSelectedCriterias } = state;

    if (selectedLocation) {
        lat = selectedLocation.geometry.location.lat;
        long = selectedLocation.geometry.location.lng;
        place_id = selectedLocation.place_id || "";
        if (typeof lat === 'function') lat = lat();
        if (typeof long === 'function') long = long();
    }

    let min_distance = filterCriteria.distance[0];
    let max_distance = filterCriteria.distance[1];
    let provider_ids = filterCriteria.provider_ids;
    let network_id = filterCriteria.network_id || '';

    let ipd_id = commonSelectedCriterias.map(x => x.id);

    let url = '';

    if (ipd_id && ipd_id.length) {
        url = `/api/v1/doctor/ipd_procedure/${ipd_id}/hospitals?`;
    } else if (searchByUrl) {
        url = `/api/v1/doctor/hospitalsearch_by_url/${searchByUrl.split('/')[1]}?`;
    } else {
        url = `/api/v1/doctor/hospitals?`;
    }

    url += `long=${long}&lat=${lat}&min_distance=${min_distance}&max_distance=${max_distance}&provider_ids=${provider_ids}&page=${page}&network=${network_id}`;

    if (parseInt(page) == 1) {
        dispatch({
            type: _types.START_HOSPITAL_SEARCH
        });
    }

    return (0, _api.API_GET)(url).then(function (response) {
        let commonCriteria = [];

        if (response.ipd_procedure && response.ipd_procedure.id) {
            commonCriteria = [response.ipd_procedure];
        }

        dispatch({
            type: _types.MERGE_IPD_CRITERIA,
            payload: _extends({
                commonSelectedCriterias: commonCriteria
            }, filterCriteria)
        });

        dispatch({
            type: _types.SAVE_IPD_RESULTS_WITH_SEARCHID,
            payload: response,
            page: page
        });

        dispatch({
            type: _types.GET_IPD_HOSPITALS,
            payload: response,
            page: page
        });

        if (cb) {

            if (response.result && response.result.length == 0) {
                if (cb) cb(false, false);
            } else if (response.result && response.result.length == 50) {
                if (cb) cb(true, true);
            }

            if (cb) cb(false, true);
        }
    }).catch(function (error) {
        dispatch({
            type: _types.GET_IPD_HOSPITALS,
            payload: []
        });
    });
};

const mergeIpdCriteria = exports.mergeIpdCriteria = filterCriteria => dispatch => {
    dispatch({
        type: _types.MERGE_IPD_CRITERIA,
        payload: filterCriteria
    });
};

const setIpdSearchId = exports.setIpdSearchId = (search_id, filters, page = 1) => dispatch => {

    dispatch({
        type: _types.SET_IPD_SEARCH_ID,
        payload: filters,
        searchId: search_id,
        page: page
    });
};

const getIpdSearchIdResults = exports.getIpdSearchIdResults = (search_id, response) => dispatch => {

    dispatch({
        type: _types.GET_IPD_SEARCH_ID_RESULTS,
        searchId: search_id
    });

    dispatch({
        type: _types.GET_IPD_HOSPITALS,
        payload: response.data
    });
};

const getHospitaDetails = exports.getHospitaDetails = (hospitalId, selectedLocation, searchByUrl = null, specialization_id = '', cb) => dispatch => {

    dispatch({
        type: _types.GET_IPD_HOSPITAL_DETAIL_START
    });

    let lat = 28.644800;
    let long = 77.216721;
    let place_id = "";
    let locality = "";
    let sub_locality = "";

    if (selectedLocation) {
        lat = selectedLocation.geometry.location.lat;
        long = selectedLocation.geometry.location.lng;
        place_id = selectedLocation.place_id || "";
        if (typeof lat === 'function') lat = lat();
        if (typeof long === 'function') long = long();
        locality = selectedLocation.locality || "";
        sub_locality = selectedLocation.sub_locality || "";
    }

    let url = `/api/v1/doctor/hospital/${hospitalId}?long=${long}&lat=${lat}&city=${locality}&specialization_ids=${specialization_id}`;

    if (searchByUrl) {
        url = `/api/v1/doctor/hospital_by_url?url=${searchByUrl.split('/')[1]}&city=${locality}&specialization_ids=${specialization_id}`;
    }

    return (0, _api.API_GET)(url).then(function (response) {
        if (response.status) {} else {
            dispatch({
                type: _types.GET_IPD_HOSPITAL_DETAIL,
                payload: response
            });
        }
        if (cb) cb(response);
    }).catch(function (error) {
        if (error && error.status) {
            if (cb) cb(error);
        }
    });
};

const clearIpdSearchId = exports.clearIpdSearchId = () => dispatch => {
    dispatch({
        type: _types.CLEAR_IPD_SEARCH_IDS
    });
};

const submitSecondIPDForm = exports.submitSecondIPDForm = (formData, selectedLocation, cb) => dispatch => {

    let lat = 28.644800;
    let long = 77.216721;
    let place_id = "";
    let locality = "";
    let sub_locality = "";

    if (selectedLocation) {
        lat = selectedLocation.geometry.location.lat;
        long = selectedLocation.geometry.location.lng;
        place_id = selectedLocation.place_id || "";
        if (typeof lat === 'function') lat = lat();
        if (typeof long === 'function') long = long();
        locality = selectedLocation.locality || "";
        sub_locality = selectedLocation.sub_locality || "";
    } else {
        locality = 'Delhi';
    }

    if (formData) {
        formData.lat = lat;
        formData.long = long;
        formData.locality = locality;
        formData.sub_locality = sub_locality;
    }

    return (0, _api.API_POST)('/api/v1/doctor/ipd_procedure/update_lead', formData).then(function (response) {
        if (cb) cb(null, response);
    }).catch(function (error) {
        if (cb) cb(error, null);
    });
};

const saveIpdPopupData = exports.saveIpdPopupData = (type, data) => dispatch => {
    dispatch({
        type: _types.SAVE_IPD_POPUP_DATA,
        payload: data,
        dataType: type
    });
};

const getHospitalComments = exports.getHospitalComments = hospitalId => dispatch => {
    return (0, _api.API_GET)(`api/v1/common/comment/list?type=hospital&id=${hospitalId}`).then(response => {
        dispatch({
            type: _types.GET_HOSP_COMMENTS,
            payload: response
        });
    });
};

const postHospitalComments = exports.postHospitalComments = (postData, cb) => dispatch => {
    return (0, _api.API_POST)(`/api/v1/common/comment/post`, postData).then(response => {

        if (response) {
            if (cb) cb(null, response);
        }
    }).catch(e => {
        if (cb) cb(e, null);
    });
};

/***/ }),

/***/ "./dev/js/actions/opd/doctorSearch.js":
/*!********************************************!*\
  !*** ./dev/js/actions/opd/doctorSearch.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getSponsoredList = exports.codToPrepaid = exports.getDoctorHospitalSpeciality = exports.getDoctorHospitalFilters = exports.select_opd_payment_type = exports.clearOpdSearchId = exports.toggle404 = exports.setNextSearchCriteria = exports.mergeUrlState = exports.getSearchIdResults = exports.setSearchId = exports.getDoctorNo = exports.saveProfileProcedures = exports.getSpecialityFooterData = exports.toggleProfileProcedures = exports.getFooterData = exports.resetOpdCoupons = exports.removeCoupons = exports.applyOpdCoupons = exports.getDoctorNumber = exports.updateOPDAppointment = exports.getOPDBookingSummary = exports.retryPaymentOPD = exports.createOPDAppointment = exports.getTimeSlots = exports.selectOpdTimeSLot = exports.getDoctorByUrl = exports.getDoctorById = exports.getDoctors = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

var _api = __webpack_require__(/*! ../../api/api.js */ "./dev/js/api/api.js");

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _mapHelpers = __webpack_require__(/*! ../../helpers/mapHelpers.js */ "./dev/js/helpers/mapHelpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

const getDoctors = exports.getDoctors = (state = {}, page = 1, from_server = false, searchByUrl = false, cb, clinic_card = false) => dispatch => {

	if (page == 1) {
		dispatch({
			type: _types.DOCTOR_SEARCH_START,
			payload: null
		});
	}

	// dispatch({
	// 	type: SET_SERVER_RENDER_OPD,
	// 	payload: from_server
	// })

	let { selectedLocation, commonSelectedCriterias, filterCriteria, locationType } = state;
	let specializations_ids = commonSelectedCriterias.filter(x => x.type == 'speciality').map(x => x.id);
	let condition_ids = commonSelectedCriterias.filter(x => x.type == 'condition').map(x => x.id);
	let procedures_ids = commonSelectedCriterias.filter(x => x.type == 'procedures').map(x => x.id);
	let category_ids = commonSelectedCriterias.filter(x => x.type == 'procedures_category').map(x => x.id);
	let ipd_ids = commonSelectedCriterias.filter(x => x.type == 'ipd').map(x => x.id);

	let group_ids = commonSelectedCriterias.filter(x => x.type == 'group_ids').map(x => x.id);

	let sits_at = [];
	let parsed = {};
	if (typeof window == "object") {
		parsed = queryString.parse(window.location.search);
	}
	if (filterCriteria.sits_at_clinic) sits_at.push('Clinic');
	if (filterCriteria.sits_at_hospital) sits_at.push('Hospital');
	if (sits_at.length == 0) sits_at = [''];
	sits_at = sits_at.join(',');

	let lat = 28.644800;
	let long = 77.216721;
	let place_id = "";
	let locality = "";
	let sub_locality = "";

	if (selectedLocation) {
		lat = selectedLocation.geometry.location.lat;
		long = selectedLocation.geometry.location.lng;
		place_id = selectedLocation.place_id || "";
		if (typeof lat === 'function') lat = lat();
		if (typeof long === 'function') long = long();
		locality = selectedLocation.locality || "";
		sub_locality = selectedLocation.sub_locality || "";
	} else {
		locality = "Delhi";
	}

	/*let min_distance = filterCriteria.distanceRange[0]
 let max_distance = filterCriteria.distanceRange[1]
 let min_fees = filterCriteria.priceRange[0]
 let max_fees = filterCriteria.priceRange[1]
 let sort_on = filterCriteria.sort_on || ""
 let is_available = filterCriteria.is_available
 let is_female = filterCriteria.is_female
 */
	let sort_on = filterCriteria.sort_on || "";
	let sort_order = filterCriteria.sort_order || "";
	let availability = filterCriteria.availability || [];
	let avg_ratings = filterCriteria.avg_ratings || [];
	let gender = filterCriteria.gender || '';
	let is_insured = filterCriteria.is_insured || false;
	let specialization_filter_ids = filterCriteria.specialization_filter_ids || [];
	// do not check specialization_ids if doctor_name || hospital_name search
	if (!!filterCriteria.doctor_name || !!filterCriteria.hospital_name) {
		specializations_ids = "";
		condition_ids = "";
		procedures_ids = "";
		category_ids = "", ipd_ids = "", group_ids = '';
	}

	let url = `/api/v1/doctor/doctorsearch?`;

	if (searchByUrl) {
		url = `/api/v1/doctor/doctorsearch_by_url?url=${searchByUrl.split('/')[1]}&`;
	}

	if (clinic_card) {
		url = `/api/v1/doctor/doctorsearchbyhospital?`;
	}

	url += `specialization_ids=${specializations_ids || ""}&condition_ids=${condition_ids || ""}&sits_at=${sits_at}&latitude=${lat || ""}&longitude=${long || ""}&sort_on=${sort_on}&sort_order=${sort_order}&availability=${availability}&avg_ratings=${avg_ratings}&gender=${gender}&page=${page}&procedure_ids=${procedures_ids || ""}&procedure_category_ids=${category_ids || ""}&ipd_procedure_ids=${ipd_ids || ""}&city=${locality}&locality=${sub_locality}&is_insurance=${is_insured ? true : false}&group_ids=${group_ids}&specialization_filter_ids=${specialization_filter_ids}`;

	if (!!filterCriteria.doctor_name) {
		url += `&doctor_name=${filterCriteria.doctor_name || ""}`;
	}

	if (!!filterCriteria.hospital_name) {
		url += `&hospital_name=${filterCriteria.hospital_name || ""}`;
	}

	if (!!filterCriteria.hospital_id) {
		url += `&hospital_id=${filterCriteria.hospital_id || ''}`;
	}

	if (parsed && parsed.fromVip) {
		url += `&is_vip=${parsed.fromVip || ''}`;
	}

	if (parsed && parsed.fromGoldVip) {
		url += `&is_gold=${parsed.fromGoldVip || ''}`;
	}

	return (0, _api.API_GET)(url).then(function (response) {

		let specializations = response.specializations.map(x => {
			x.type = 'speciality';
			return x;
		});

		let conditions = response.conditions.map(x => {
			x.type = 'condition';
			return x;
		});

		let procedures = response.procedures.map(x => {
			x.type = 'procedures';
			return x;
		});

		let procedure_category = response.procedure_categories.map(x => {
			x.type = 'procedures_category';
			return x;
		});

		let ipd_data = response.ipd_procedures ? response.ipd_procedures.map(x => {
			x.type = 'ipd';
			return x;
		}) : [];

		let group_ids = response.specialization_groups ? response.specialization_groups.map(x => {
			x.type = 'group_ids';
			return x;
		}) : [];

		let commonSelectedCriterias = [...specializations, ...conditions, ...procedure_category, ...procedures, ...ipd_data, ...group_ids];

		let show404 = false;
		// show 404 on server when no resultd
		if (response.result && response.result.length == 0 && from_server && searchByUrl) {
			show404 = true;
		}

		dispatch({
			type: _types.MERGE_SEARCH_STATE_OPD,
			payload: {
				commonSelectedCriterias
			},
			fetchNewResults: false
		});

		dispatch({
			type: _types.SAVE_RESULTS_WITH_SEARCHID,
			payload: response,
			page: page,
			clinic_card: clinic_card,
			commonSelectedCriterias
		});
		if (clinic_card) {
			dispatch({
				type: _types.APPEND_HOSPITALS,
				payload: response.result || []
			});
		} else {
			dispatch({
				type: _types.APPEND_DOCTORS,
				payload: response.result || []
			});
		}

		if (clinic_card) {
			dispatch({
				type: _types.HOSPITAL_SEARCH,
				payload: _extends({
					show404,
					page
				}, response)

			});
		} else {
			dispatch({
				type: _types.DOCTOR_SEARCH,
				payload: _extends({
					show404,
					page
				}, response)

			});
		}

		let specialization_ids = specializations && specializations.length ? specializations.map(x => x.id).join(',') : '';
		let condition_ids = conditions && conditions.length ? conditions.map(x => x.id).join(',') : '';
		let procedure_ids = procedures && procedures.length ? procedures.map(x => x.id).join(',') : '';
		let procedure_category_ids = procedure_category && procedure_category.length ? procedure_category.map(x => x.id).join(',') : '';

		let ipd_ids = ipd_data && ipd_data.length ? ipd_data.map(x => x.id).join(',') : '';

		let group_data = group_ids && group_ids.length ? group_ids.map(x => x.id).join(',') : '';

		if (page == 1) {
			let data = {
				'Category': 'ConsumerApp', 'Action': 'DoctorSearchCount', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-search-count', 'DoctorSearchCount': response.count || 0, 'specializations': specialization_ids, 'conditions': condition_ids, 'procedures': procedure_ids, 'procedure_category': procedure_category_ids, 'doctor_name': filterCriteria.doctor_name || '', 'hospital_name': filterCriteria.hospital_name || '', 'hospital_id': filterCriteria.hospital_id || '', 'ipd_ids': ipd_ids || '', 'group_ids': group_data
			};
			_gtm2.default.sendEvent({ data: data });
		}

		if (cb) {
			// if no results redirect to 404 page
			if (response.result && response.result.length == 0) {
				cb(false, true);
			}
			// TODO: DO not hardcode page length
			if (response.result && response.result.length == 20) {
				cb(true);
			}
		}

		cb(false);
	}).catch(function (error) {
		throw error;
	});
};

const getDoctorById = exports.getDoctorById = (doctorId, hospitalId = "", procedure_ids = "", category_ids = "", extraParams = {}, cb) => dispatch => {
	procedure_ids = '';
	category_ids = '';
	let url = `/api/v1/doctor/profileuserview/${doctorId}?hospital_id=${hospitalId || ""}&procedure_ids=${procedure_ids || ""}&procedure_category_ids=${category_ids || ""}`;

	if (extraParams && extraParams.appointment_id) {
		url += `&appointment_id=${extraParams.appointment_id}&cod_to_prepaid=true`;
	}
	return (0, _api.API_GET)(url).then(function (response) {

		dispatch({
			type: _types.APPEND_DOCTORS_PROFILE,
			payload: [response]
		});

		dispatch({
			type: _types.SET_PROCEDURES,
			payload: response,
			doctorId: doctorId,
			commonProcedurers: procedure_ids
		});
		if (cb) cb(null, response);

		if (response.cod_to_prepaid && response.cod_to_prepaid.time_slot_start && extraParams && extraParams.appointment_id) {

			let selectedDate = response.cod_to_prepaid.time_slot_start;
			let { mrp, fees, deal_price, profile_id, formatted_date } = response.cod_to_prepaid;
			let time_slot = {
				text: new Date(selectedDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).split(' ')[0],
				deal_price: deal_price,
				is_available: true,
				mrp: mrp,
				fees: fees,
				price: deal_price,
				title: new Date(selectedDate).getHours() >= 12 ? 'PM' : 'AM',
				value: new Date(selectedDate).getHours() + new Date(selectedDate).getMinutes() / 60
			};
			let slot = {
				date: selectedDate,
				slot: '',
				time: time_slot,
				selectedDoctor: doctorId,
				selectedClinic: hospitalId
			};
			let extraTimeParams = null;
			if (slot.date) {
				extraTimeParams = formatted_date;
			}
			dispatch({
				type: _types.SELECT_USER_PROFILE,
				payload: profile_id
			});
			dispatch({
				type: _types.SELECT_OPD_TIME_SLOT,
				payload: {
					reschedule: false,
					slot: slot,
					appointmentId: null,
					extraTimeParams
				}
			});
		}
	}).catch(function (error) {
		if (cb) cb(error, null);
	});
};

const getDoctorByUrl = exports.getDoctorByUrl = (doctor_url, hospitalId = "", procedure_ids = "", category_ids = "", cb) => dispatch => {
	procedure_ids = '';
	category_ids = '';
	return (0, _api.API_GET)(`/api/v1/doctor/profileuserviewbyurl?url=${doctor_url}&hospital_id=${hospitalId}&procedure_ids=${procedure_ids || ""}&procedure_category_ids=${category_ids || ""}`).then(function (response) {
		dispatch({
			type: _types.APPEND_DOCTORS_PROFILE,
			payload: [response]
		});

		dispatch({
			type: _types.SET_PROCEDURES,
			payload: response,
			doctorId: response.id,
			commonProcedurers: procedure_ids
		});

		cb(response.id ? response.id : null, null);
	}).catch(function (error) {
		cb(null, error.url);
	});
};

const selectOpdTimeSLot = exports.selectOpdTimeSLot = (slot, reschedule = false, appointmentId = null, extraDateParams = null) => dispatch => {
	dispatch({
		type: _types.SELECT_OPD_TIME_SLOT,
		payload: {
			reschedule,
			slot,
			appointmentId,
			extraDateParams
		}
	});
};

const getTimeSlots = exports.getTimeSlots = (doctorId, clinicId, extraParams = {}, callback) => dispatch => {
	dispatch({
		type: _types.START_FETCHING_OPD_TIME
	});
	let url = `/api/v1/doctor/doctortiming_v2?doctor_id=${doctorId}&hospital_id=${clinicId}`;
	if (extraParams && extraParams.selectedDate) {
		url += `&date=${extraParams.selectedDate}`;
	}
	return (0, _api.API_GET)(url).then(function (response) {
		callback(response);
		dispatch({
			type: _types.END_FETCHING_OPD_TIME
		});
	}).catch(function (error) {});
};

const createOPDAppointment = exports.createOPDAppointment = (postData, callback) => dispatch => {
	postData['visitor_info'] = _gtm2.default.getVisitorInfo();
	return (0, _api.API_POST)(`/api/v1/doctor/appointment/create`, postData).then(function (response) {
		callback(null, response);
	}).catch(function (error) {
		callback(error, null);
	});
};

const retryPaymentOPD = exports.retryPaymentOPD = (appointmentId, callback) => dispatch => {
	return (0, _api.API_GET)(`/api/v1/doctor/appointment/payment/retry/${appointmentId}`).then(function (response) {
		callback(null, response);
	}).catch(function (error) {
		callback(error, null);
	});
};

const getOPDBookingSummary = exports.getOPDBookingSummary = (appointmentID, callback) => dispatch => {
	(0, _api.API_GET)(`/api/v1/user/appointment/${appointmentID}?type=doctor`).then(function (response) {
		callback(null, response);
	}).catch(function (error) {
		callback(error, null);
	});
};

const updateOPDAppointment = exports.updateOPDAppointment = (appointmentData, callback) => dispatch => {
	(0, _api.API_POST)(`/api/v1/user/appointment/${appointmentData.id}/update?type=doctor`, appointmentData).then(function (response) {
		callback(null, response);
	}).catch(function (error) {
		callback(error, null);
	});
};

const getDoctorNumber = exports.getDoctorNumber = (doctorId, hospital_id, callback) => dispatch => {
	(0, _api.API_GET)(`/api/v1/doctor/contact-number/${doctorId}?hospital_id=${hospital_id}`).then(function (response) {
		callback(null, response);
	}).catch(function (error) {
		callback(error, null);
	});
};

const applyOpdCoupons = exports.applyOpdCoupons = (productId = '', couponCode, couponId, doctor_id, dealPrice, hospitalId, profile_id = null, procedures_ids = [], cart_item = null, callback) => dispatch => {

	(0, _api.API_POST)(`/api/v1/coupon/discount`, {
		coupon_code: [couponCode],
		deal_price: dealPrice,
		product_id: productId,
		doctor: doctor_id,
		hospital: hospitalId,
		profile: profile_id,
		procedures: [], //procedures_ids || [],
		cart_item
	}).then(function (response) {
		let analyticData = {
			'Category': 'ConsumerApp', 'Action': 'OpdCouponApplied', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'opd-coupon-applied', 'couponId': couponId
		};
		_gtm2.default.sendEvent({ data: analyticData });
		if (response && response.status == 1) {
			dispatch({
				type: _types.APPLY_OPD_COUPONS,
				payload: response
			});
			if (callback) {
				callback(null, response);
			}
		} else {
			dispatch({
				type: _types.REMOVE_OPD_COUPONS,
				hospitalId: doctor_id,
				couponId: couponId
			});
			if (callback) {
				callback('Not applicable', null);
			}
		}
	}).catch(function (error) {
		dispatch({
			type: _types.REMOVE_OPD_COUPONS,
			hospitalId: doctor_id,
			couponId: couponId
		});
		if (callback) {
			callback(error, null);
		}
	});
};

const removeCoupons = exports.removeCoupons = (hospitalId, couponId) => dispatch => {

	dispatch({
		type: _types.REMOVE_OPD_COUPONS,
		hospitalId: hospitalId,
		couponId: couponId
	});
};

const resetOpdCoupons = exports.resetOpdCoupons = () => dispatch => {
	dispatch({
		type: _types.RESET_OPD_COUPONS
	});
};

const getFooterData = exports.getFooterData = (url, page = 1) => dispatch => {
	return (0, _api.API_GET)(`/api/v1/location/dynamicfooters?url=${url}&page=${page}`).then(function (response) {
		return response;
	}).catch(function (error) {});
};

const toggleProfileProcedures = exports.toggleProfileProcedures = (procedure = [], doctor_id, hospital_id) => dispatch => {

	dispatch({
		type: _types.TOGGLE_PROFILE_PROCEDURES,
		procedure: procedure,
		doctor_id: doctor_id,
		hospital_id: hospital_id
	});
};

const getSpecialityFooterData = exports.getSpecialityFooterData = cb => dispatch => {
	return (0, _api.API_GET)(`api/v1/location/static-speciality-footer`).then(function (response) {
		dispatch({
			type: _types.SET_FOOTER_DATA,
			payload: response
		});
		//return cb(response)
	}).catch(function (error) {});
};

const saveProfileProcedures = exports.saveProfileProcedures = (doctor_id = '', clinic_id = '', selectedProcedures = [], forceAdd = false) => dispatch => {
	dispatch({
		type: _types.SAVE_PROFILE_PROCEDURES,
		doctor_id: doctor_id,
		clinic_id: clinic_id,
		forceAdd: forceAdd,
		selectedProcedures: selectedProcedures
	});
};

const getDoctorNo = exports.getDoctorNo = (postData, cb) => dispatch => {
	return (0, _api.API_POST)(`/api/v1/matrix/mask-number`, postData).then(function (response) {
		cb(null, response);
	}).catch(function (error) {
		cb(error, null);
	});
};

const setSearchId = exports.setSearchId = (searchId, filters, page = 1) => dispatch => {
	dispatch({
		type: _types.SET_SEARCH_ID,
		payload: filters,
		searchId: searchId,
		page: page
	});
};

const getSearchIdResults = exports.getSearchIdResults = (searchId, response) => dispatch => {
	dispatch({
		type: _types.GET_SEARCH_ID_RESULTS,
		searchId: searchId
	});
	if (response.data.clinic_card) {
		dispatch({
			type: _types.APPEND_HOSPITALS,
			payload: response.data.result || []
		});
	} else {
		dispatch({
			type: _types.APPEND_DOCTORS,
			payload: response.data.result || []
		});
	}
	dispatch({
		type: _types.SET_URL_PAGE,
		payload: response.page || 1
	});
	if (response.data.clinic_card) {
		dispatch({
			type: _types.HOSPITAL_SEARCH,
			payload: _extends({
				page: response.page || 1
			}, response.data)

		});
	} else {
		dispatch({
			type: _types.DOCTOR_SEARCH,
			payload: _extends({
				page: response.page || 1
			}, response.data)

		});
	}
};

const mergeUrlState = exports.mergeUrlState = (flag = false) => dispatch => {
	dispatch({
		type: _types.MERGE_URL_STATE,
		payload: flag
	});
};

const setNextSearchCriteria = exports.setNextSearchCriteria = () => dispatch => {
	dispatch({
		type: _types.SET_NEXT_SEARCH_CRITERIA
	});
};

const toggle404 = exports.toggle404 = (status = false) => dispatch => {
	dispatch({
		type: _types.TOGGLE_404,
		payload: status
	});
};

const clearOpdSearchId = exports.clearOpdSearchId = () => dispatch => {
	dispatch({
		type: _types.CLEAR_OPD_SEARCH_ID
	});
};

const select_opd_payment_type = exports.select_opd_payment_type = (type = 1) => dispatch => {
	dispatch({
		type: _types.SELECT_OPD_PAYMENT_TYPE,
		payload: type
	});
};
function getDoctorFiltersParams(state, page, from_server, searchByUrl = false, clinic_card, isHospitalFilter) {
	let { selectedLocation, commonSelectedCriterias, filterCriteria, locationType } = state;
	let specializations_ids = commonSelectedCriterias.filter(x => x.type == 'speciality').map(x => x.id);
	let condition_ids = commonSelectedCriterias.filter(x => x.type == 'condition').map(x => x.id);
	let procedures_ids = commonSelectedCriterias.filter(x => x.type == 'procedures').map(x => x.id);
	let category_ids = commonSelectedCriterias.filter(x => x.type == 'procedures_category').map(x => x.id);
	let ipd_ids = commonSelectedCriterias.filter(x => x.type == 'ipd').map(x => x.id);

	let group_ids = commonSelectedCriterias.filter(x => x.type == 'group_ids').map(x => x.id);
	let parsed = {};
	if (typeof window == "object") {
		parsed = queryString.parse(window.location.search);
	}
	let sits_at = [];
	if (filterCriteria.sits_at_clinic) sits_at.push('Clinic');
	if (filterCriteria.sits_at_hospital) sits_at.push('Hospital');
	if (sits_at.length == 0) sits_at = [''];
	sits_at = sits_at.join(',');

	let lat = 28.644800;
	let long = 77.216721;
	let place_id = "";
	let locality = "";
	let sub_locality = "";

	if (selectedLocation) {
		lat = selectedLocation.geometry.location.lat;
		long = selectedLocation.geometry.location.lng;
		place_id = selectedLocation.place_id || "";
		if (typeof lat === 'function') lat = lat();
		if (typeof long === 'function') long = long();
		locality = selectedLocation.locality || "";
		sub_locality = selectedLocation.sub_locality || "";
	} else {
		locality = "Delhi";
	}

	let sort_on = filterCriteria.sort_on || "";
	let sort_order = filterCriteria.sort_order || "";
	let availability = filterCriteria.availability || [];
	let avg_ratings = filterCriteria.avg_ratings || [];
	let gender = filterCriteria.gender || '';
	let is_insured = filterCriteria.is_insured || false;

	// do not check specialization_ids if doctor_name || hospital_name search
	if (!!filterCriteria.doctor_name || !!filterCriteria.hospital_name) {
		specializations_ids = "";
		condition_ids = "";
		procedures_ids = "";
		category_ids = "", ipd_ids = "", group_ids = '';
	}

	let newUrl;
	if (isHospitalFilter) {
		newUrl = `/api/v1/doctor/hospital/filter?`;
	} else {
		newUrl = `/api/v1/doctor/speciality/filter?`;
	}

	newUrl += `specialization_ids=${specializations_ids || ""}&condition_ids=${condition_ids || ""}&sits_at=${sits_at}&latitude=${lat || ""}&longitude=${long || ""}&sort_on=${sort_on}&sort_order=${sort_order}&availability=${availability}&avg_ratings=${avg_ratings}&gender=${gender}&page=${page}&procedure_ids=${procedures_ids || ""}&procedure_category_ids=${category_ids || ""}&ipd_procedure_ids=${ipd_ids || ""}&city=${locality}&locality=${sub_locality}&is_insurance=${is_insured ? true : false}&group_ids=${group_ids}`;

	if (!!filterCriteria.doctor_name) {
		newUrl += `&doctor_name=${filterCriteria.doctor_name || ""}`;
	}

	if (!!filterCriteria.hospital_name) {
		newUrl += `&hospital_name=${filterCriteria.hospital_name || ""}`;
	}

	if (!!filterCriteria.hospital_id) {
		newUrl += `&hospital_id=${filterCriteria.hospital_id || ''}`;
	}

	if (searchByUrl) {
		newUrl += `&url=${searchByUrl}`;
	}

	if (parsed && parsed.fromVip) {
		newUrl += `&is_vip=${parsed.fromVip || ''}`;
	}

	if (parsed && parsed.fromGoldVip) {
		newUrl += `&is_gold=${parsed.fromGoldVip || ''}`;
	}
	return newUrl;
}
const getDoctorHospitalFilters = exports.getDoctorHospitalFilters = (state = {}, page = 1, from_server = false, searchByUrl = false, cb, clinic_card = false) => dispatch => {
	let url = getDoctorFiltersParams(state, page, from_server, searchByUrl, clinic_card, true);
	return (0, _api.API_GET)(url).then(function (response) {
		if (cb) cb(response);
	}).catch(function (error) {
		if (cb) cb(error);
		throw error;
	});
};

const getDoctorHospitalSpeciality = exports.getDoctorHospitalSpeciality = (state = {}, page = 1, from_server = false, searchByUrl = false, cb, clinic_card = false) => dispatch => {
	let url = getDoctorFiltersParams(state, page, from_server, searchByUrl, clinic_card, false);
	return (0, _api.API_GET)(url).then(function (response) {
		if (cb) cb(response);
	}).catch(function (error) {
		if (cb) cb(error);
		throw error;
	});
};

const codToPrepaid = exports.codToPrepaid = (postData, cb) => dispatch => {

	return (0, _api.API_POST)(`/api/v1/doctor/appointment/cod-to-prepaid/create`, postData).then(response => {
		cb(null, response);
	}).catch(e => {
		cb(e, null);
	});
};

const getSponsoredList = exports.getSponsoredList = (data, selectedLocation, cb) => dispatch => {
	let lat = 28.644800;
	let long = 77.216721;
	let place_id = "";
	let locality = "";
	let sub_locality = "";

	if (selectedLocation) {
		lat = selectedLocation.geometry.location.lat;
		long = selectedLocation.geometry.location.lng;
		place_id = selectedLocation.place_id || "";
		if (typeof lat === 'function') lat = lat();
		if (typeof long === 'function') long = long();
		locality = selectedLocation.locality || "";
		sub_locality = selectedLocation.sub_locality || "";
	} else {
		locality = "Delhi";
	}
	return (0, _api.API_GET)(`/api/v1/common/sponsorlisting?spec_id=${data.specializations_ids || ''}&lat=${lat}&long=${long}&locality=${locality}&utm_term=${data.utm_term}&url=${data.searchUrl || ''}`).then(function (response) {
		if (cb) cb(response);
	}).catch(function (error) {
		if (cb) cb(error);
		throw error;
	});
};

/***/ }),

/***/ "./dev/js/actions/opd/searchCriteria.js":
/*!**********************************************!*\
  !*** ./dev/js/actions/opd/searchCriteria.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clearOpdPage = exports.getTopHospitals = exports.getNearbyHospitals = exports.filterSelectedCriteria = exports.mergeSelectedCriterias = exports.cloneCommonSelectedCriterias = exports.resetProcedureURl = exports.saveCommonProcedures = exports.setFetchResults = exports.mergeOPDState = exports.resetFilters = exports.getOPDCriteriaResults = exports.selectLocation = exports.toggleOPDCriteria = exports.loadOPDInsurance = exports.loadOPDCommonCriteria = undefined;

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

var _api = __webpack_require__(/*! ../../api/api.js */ "./dev/js/api/api.js");

var _gtm = __webpack_require__(/*! ../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const loadOPDCommonCriteria = exports.loadOPDCommonCriteria = selectedLocation => dispatch => {

    let lat = 28.644800;
    let long = 77.216721;
    let place_id = "";
    let locality = "";
    let sub_locality = "";

    if (selectedLocation && (selectedLocation.geometry || selectedLocation.place_id)) {
        lat = selectedLocation.geometry.location.lat;
        long = selectedLocation.geometry.location.lng;
        place_id = selectedLocation.place_id || "";
        if (typeof lat === 'function') lat = lat();
        if (typeof long === 'function') long = long();
        locality = selectedLocation.locality || "";
        sub_locality = selectedLocation.sub_locality || "";
    } else {
        locality = "Delhi";
    }

    return (0, _api.API_GET)(`/api/v1/doctor/commonconditions?city=${locality}&lat=${lat}&long=${long}`).then(function (response) {
        dispatch({
            type: _types.LOAD_SEARCH_CRITERIA_OPD,
            payload: response
        });
    }).catch(function (error) {
        dispatch({
            type: _types.LOAD_SEARCH_CRITERIA_OPD,
            payload: null
        });
        throw error;
    });
};

const loadOPDInsurance = exports.loadOPDInsurance = selectedLocation => dispatch => {

    let lat = 28.644800;
    let long = 77.216721;
    let place_id = "";
    let locality = "";
    let sub_locality = "";

    if (selectedLocation && (selectedLocation.geometry || selectedLocation.place_id)) {
        lat = selectedLocation.geometry.location.lat;
        long = selectedLocation.geometry.location.lng;
        place_id = selectedLocation.place_id || "";
        if (typeof lat === 'function') lat = lat();
        if (typeof long === 'function') long = long();
        locality = selectedLocation.locality || "";
        sub_locality = selectedLocation.sub_locality || "";
    } else {
        locality = "Delhi";
    }

    return (0, _api.API_GET)(`/api/v1/common/settings?latitude=${lat}&longitude=${long}`).then(function (response) {
        dispatch({
            type: _types.LOAD_INSURANCE_CRITERIA,
            payload: response
        });
    }).catch(function (error) {
        dispatch({
            type: _types.LOAD_INSURANCE_CRITERIA,
            payload: null
        });
        throw error;
    });
};

const toggleOPDCriteria = exports.toggleOPDCriteria = (type, criteria, forceAdd = false, filters = {}) => dispatch => {
    dispatch({
        type: _types.TOGGLE_OPD_CRITERIA,
        payload: {
            type, criteria, forceAdd, filters
        }
    });
};

const selectLocation = exports.selectLocation = (location, type = 'geo', fetchNewResults = true) => dispatch => {

    let lat = "";
    let long = "";
    let place_id = "";
    let location_name = "";
    let userAgent = "";
    let city_name = "";

    if (location) {
        place_id = location.place_id || "";
        lat = location.geometry.location.lat;
        long = location.geometry.location.lng;
        if (typeof lat === 'function') lat = lat();
        if (typeof long === 'function') long = long();

        lat = parseFloat(parseFloat(lat).toFixed(6));
        long = parseFloat(parseFloat(long).toFixed(6));
        location_name = location.name || location.formatted_address;
        city_name = location.locality;
    }

    if (navigator) {
        userAgent = navigator.userAgent;
    }

    let data = {
        'Category': 'ConsumerApp', 'Action': 'ChangeLocation', 'event': 'change-location', location: {
            lat, long, place_id, location_name, type, city_name
        }, userAgent
    };

    _gtm2.default.sendEvent({ data: data });

    loadOPDCommonCriteria(location)(dispatch);
    loadOPDInsurance(location)(dispatch);

    return Promise.all([dispatch({
        type: _types.SELECT_LOCATION_OPD,
        payload: location,
        range: type,
        fetchNewResults
    }), dispatch({
        type: _types.SELECT_LOCATION_DIAGNOSIS,
        payload: location,
        range: type,
        fetchNewResults
    }), dispatch({
        type: _types.SELECT_IPD_LOCATION_STATUS,
        fetchNewResults
    })]);
};

const getOPDCriteriaResults = exports.getOPDCriteriaResults = (searchString, callback) => dispatch => {

    (0, _api.API_GET)(`/api/v1/doctor/searcheditems?name=${searchString}`).then(function (response) {
        callback(response);
    }).catch(function (error) {
        callback(null);
    });
};

const resetFilters = exports.resetFilters = () => dispatch => {

    dispatch({
        type: _types.RESET_FILTER_STATE,
        payload: null
    });
};

const mergeOPDState = exports.mergeOPDState = (state, fetchNewResults = true) => dispatch => {

    dispatch({
        type: _types.MERGE_SEARCH_STATE_OPD,
        payload: state,
        fetchNewResults
    });
};

const setFetchResults = exports.setFetchResults = (fetchNewResults = true) => dispatch => {

    dispatch({
        type: _types.SET_FETCH_RESULTS_OPD,
        payload: fetchNewResults
    });

    dispatch({
        type: _types.SET_FETCH_RESULTS_LAB,
        payload: fetchNewResults
    });
};

const saveCommonProcedures = exports.saveCommonProcedures = (procedure_ids = []) => dispatch => {
    dispatch({
        type: _types.SAVE_COMMON_PROCEDURES,
        payload: procedure_ids,
        category_ids: [],
        forceAdd: true
    });
};

const resetProcedureURl = exports.resetProcedureURl = () => dispatch => {
    dispatch({
        type: _types.RESET_PROCEDURE_URL
    });
};

const cloneCommonSelectedCriterias = exports.cloneCommonSelectedCriterias = selectedCriterias => dispatch => {
    dispatch({
        type: _types.CLONE_SELECTED_CRITERIAS,
        payload: selectedCriterias
    });
};

const mergeSelectedCriterias = exports.mergeSelectedCriterias = () => dispatch => {
    dispatch({
        type: _types.MERGE_SELECTED_CRITERIAS,
        payload: true
    });
};

const filterSelectedCriteria = exports.filterSelectedCriteria = type => dispatch => {
    dispatch({
        type: _types.FILTER_SEARCH_CRITERIA_OPD,
        payload: type
    });
};

const getNearbyHospitals = exports.getNearbyHospitals = (extraParams = {}, cb) => dispatch => {
    // to get near by hospitals covered under gold or vip or near by location

    let lat = 28.644800;
    let long = 77.216721;
    let place_id = "";
    let locality = "";
    let sub_locality = "";
    let { selectedLocation } = extraParams;

    if (selectedLocation && (selectedLocation.geometry || selectedLocation.place_id)) {
        lat = selectedLocation.geometry.location.lat;
        long = selectedLocation.geometry.location.lng;
        place_id = selectedLocation.place_id || "";
        if (typeof lat === 'function') lat = lat();
        if (typeof long === 'function') long = long();
        locality = selectedLocation.locality || "";
        sub_locality = selectedLocation.sub_locality || "";
    } else {
        locality = "Delhi";
    }
    let url = `/api/v1/doctor/hospitals_near_you?lat=${lat}&long=${long}&locality=${locality}`;
    if (extraParams && extraParams.from_vip) {
        url += `&from_vip=${extraParams.from_vip}`;
    }
    return (0, _api.API_GET)(url).then(function (response) {

        dispatch({
            type: _types.SAVE_NEARBY_HOSPITALS,
            payload: response
        });
    }).catch(function (e) {});
};

const getTopHospitals = exports.getTopHospitals = (extraParams = {}, cb) => dispatch => {
    // to get near by  top hospitals covered under gold or vip or near by location

    let lat = 28.644800;
    let long = 77.216721;
    let place_id = "";
    let locality = "";
    let sub_locality = "";
    let { selectedLocation } = extraParams;

    if (selectedLocation && (selectedLocation.geometry || selectedLocation.place_id)) {
        lat = selectedLocation.geometry.location.lat;
        long = selectedLocation.geometry.location.lng;
        place_id = selectedLocation.place_id || "";
        if (typeof lat === 'function') lat = lat();
        if (typeof long === 'function') long = long();
        locality = selectedLocation.locality || "";
        sub_locality = selectedLocation.sub_locality || "";
    } else {
        locality = "Delhi";
    }
    return (0, _api.API_GET)(`/api/v1/doctor/top/hospitals?lat=${lat}&long=${long}&locality=${locality}`).then(function (response) {

        dispatch({
            type: _types.SAVE_TOP_HOSPITALS,
            payload: response
        });
    }).catch(function (e) {});
};
const clearOpdPage = exports.clearOpdPage = () => dispatch => {
    dispatch({
        type: _types.CLEAR_OPD_PAGE_NUMBER,
        payload: ''
    });
};

/***/ }),

/***/ "./dev/js/actions/vipClub/vipClubCriteria.js":
/*!***************************************************!*\
  !*** ./dev/js/actions/vipClub/vipClubCriteria.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.retrieveDigitInsuranceData = exports.digitPay = exports.saveCurrentSelectedDigitMembers = exports.saveUserDetails = exports.selectDigitPlan = exports.retrieveDigitPlanData = exports.removeMembers = exports.removeVipCoupons = exports.applyCouponDiscount = exports.getLabVipGoldPlans = exports.getOpdVipGoldPlans = exports.clearVipMemeberData = exports.clearVipSelectedPlan = exports.vipPlusLead = exports.retrieveMembersData = exports.pushMembersData = exports.removeVipMemberProof = exports.storeVipMemberProofs = exports.uploadVipProof = exports.resetVipData = exports.getVipDashboardList = exports.generateVipClubLead = exports.addVipMembersData = exports.vipClubPay = exports.selectVipUserProfile = exports.saveCurrentSelectedVipMembers = exports.userDetails = exports.selectVipClubPlan = exports.getVipList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

var _api = __webpack_require__(/*! ../../api/api.js */ "./dev/js/api/api.js");

const getVipList = exports.getVipList = (is_endorsement, data, callback) => dispatch => {
    // to get vip plan list
    let is_vip_gold = false;
    let lat;
    let long;
    let latitude = 28.644800;
    let longitude = 77.216721;
    if (data.selectedLocation) {
        lat = data.selectedLocation.geometry.location.lat;
        long = data.selectedLocation.geometry.location.lng;

        if (typeof lat === 'function') lat = lat();
        if (typeof long === 'function') long = long();
    }
    if (latitude != lat && longitude != long) {
        latitude = latitude;
        longitude = longitude;
    }
    let url = '/api/v1/plus/list?lat=' + latitude + '&long=' + longitude;
    if (data.isSalesAgent) {
        url += '&utm_source=' + data.isSalesAgent;
    }
    if (data.isAgent) {
        url += '&is_agent=' + data.isAgent;
    }
    if (data.is_gold) {
        url += '&is_gold=' + data.is_gold;
        is_vip_gold = data.is_gold;
    }
    if (data.all) {
        url += '&all=' + data.all;
        is_vip_gold = data.all;
    }
    return (0, _api.API_GET)(url).then(function (response) {
        if (!data.fromWhere) {
            dispatch({
                type: _types.GET_VIP_LIST,
                payload: response,
                is_vip_gold: is_vip_gold
            });
        }
        if (callback) callback(response);
    }).catch(function (error) {
        if (!data.fromWhere) {
            dispatch({
                type: _types.GET_VIP_LIST,
                payload: error,
                is_vip_gold: is_vip_gold
            });
        }
        if (callback) callback(error);
        throw error;
    });
};

const selectVipClubPlan = exports.selectVipClubPlan = (type, selected_vip_plan, callback) => dispatch => {
    // toggle/select vip plan
    dispatch({
        type: _types.SELECT_VIP_CLUB_PLAN,
        payload: {
            type, selected_vip_plan
        }
    });
    if (callback) callback(selected_vip_plan);
};

const userDetails = exports.userDetails = (type, vipClubMemberDetails, forceAdd = false, previousProfile = '') => dispatch => {
    // to save user form details in store
    dispatch({
        type: _types.USER_SELF_DETAILS,
        payload: {
            type, forceAdd
        },
        vipClubMemberDetails: [vipClubMemberDetails],
        previousProfile: previousProfile
    });
};
const saveCurrentSelectedVipMembers = exports.saveCurrentSelectedVipMembers = (membersId, callback) => dispatch => {
    // save current visible form member or selected user profile id
    dispatch({
        type: _types.SAVE_CURRENT_VIP_MEMBERS,
        payload: membersId
    });
    if (callback) callback(true);
};

const selectVipUserProfile = exports.selectVipUserProfile = (newProfileid, member_id, newProfile, param_id) => dispatch => {
    // select profile from option
    dispatch({
        type: _types.SELECT_VIP_USER_PROFILE,
        payload: {
            newProfileid, member_id, newProfile, param_id
        }
    });
};

const vipClubPay = exports.vipClubPay = (criteria, callback) => dispatch => {
    // to request for payment
    return (0, _api.API_POST)('/api/v1/plus/create', criteria).then(function (response) {
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(error);
        throw error;
    });
};

const addVipMembersData = exports.addVipMembersData = (criteria, callback) => dispatch => {
    // to add member details
    return (0, _api.API_POST)('/api/v1/plus/add/members', criteria).then(function (response) {
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(error);
        throw error;
    });
};

const generateVipClubLead = exports.generateVipClubLead = (data, /*selectedPlan, number,lead_data,selectedLocation,user_name,extraParams={}*/cb) => dispatch => {
    // to create vip or gold member lead for matrix
    let lat;
    let long;
    let latitude = 28.644800;
    let longitude = 77.216721;
    if (data.selectedLocation) {
        lat = data.selectedLocation.geometry.location.lat;
        long = data.selectedLocation.geometry.location.lng;

        if (typeof lat === 'function') lat = lat();
        if (typeof long === 'function') long = long();
    }
    let plan = {};
    plan.plan_id = data.selectedPlan;
    plan.phone_number = '';
    plan.name = data.user_name;
    plan.source = '';
    if (data.lead_data && data.lead_data.source) {
        plan.source = data.lead_data.source;
    }
    if (data.number == '' && data.lead_data && data.lead_data.phone_number) {
        plan.phone_number = data.lead_data.phone_number;
    } else {
        plan.phone_number = data.number;
    }
    plan.lead_data = data.lead_data;
    plan.lead_source = data.lead_data.lead_source;
    if (latitude != lat && longitude != long) {
        plan.latitude = latitude;
        plan.longitude = longitude;
    }
    if (data.extraParams && data.extraParams.city_id) {
        plan.city_id = data.extraParams.city_id;
    }
    if (data.extraParams && Object.keys(data.extraParams).length) {
        plan.lead_data = _extends({}, data.lead_data, data.extraParams);
    }
    return (0, _api.API_POST)(`/api/v1/plus/lead/create`, plan).then(function (response) {
        if (data.cb) data.cb(response);
    }).catch(function (error) {
        if (data.cb) cb(error);
    });
};

const getVipDashboardList = exports.getVipDashboardList = (user_id, is_dashboard, callback) => dispatch => {
    // to retrive vip or gold dashboard data

    return (0, _api.API_GET)('/api/v1/plus/dashboard?id=' + user_id + '&is_dashboard=' + is_dashboard).then(function (response) {
        if (response) {
            let selected_vip_plan = response.data.plan[0];
            dispatch({
                type: _types.SELECT_VIP_CLUB_PLAN,
                payload: {
                    selected_vip_plan
                }
            });
            dispatch({
                type: _types.VIP_CLUB_DASHBOARD_DATA,
                payload: response
            });
        }
        if (callback) callback(response);
    }).catch(function (error) {
        dispatch({
            type: _types.VIP_CLUB_DASHBOARD_DATA,
            payload: null
        });
        if (callback) callback(error);
        throw error;
    });
};

const resetVipData = exports.resetVipData = () => dispatch => {
    // to set vip or gold sotre to initial state
    dispatch({
        type: _types.RESET_VIP_CLUB
    });
};

const uploadVipProof = exports.uploadVipProof = (profileData, memberId, imgType, cb) => dispatch => {
    // store selected proof to database
    (0, _api.API_POST)(`/api/v1/common/upload/document-proof?type=${imgType}`, profileData).then(function (response) {
        if (cb) cb(response, null);
    }).catch(function (error) {
        if (cb) cb(error, null);
    });
};

const storeVipMemberProofs = exports.storeVipMemberProofs = (imgUrl, cb) => dispatch => {
    // to store member proof ids to the user store
    dispatch({
        type: _types.SAVE_VIP_MEMBER_PROOFS,
        payload: imgUrl
    });
};

const removeVipMemberProof = exports.removeVipMemberProof = criteria => dispatch => {
    // to remove cancelled uploaded image
    dispatch({
        type: _types.DELETE_VIP_MEMBER_PROOF,
        payload: criteria
    });
};

const pushMembersData = exports.pushMembersData = (criteria, callback) => dispatch => {
    // to save proposer/self data to the dummy table in case of agent or proposer self
    let url = `/api/v1/plus/push_dummy_data`;

    if (criteria && criteria.is_single_flow_opd) {
        url += `?is_single_flow_opd=${true}`;
    }

    if (criteria && criteria.is_single_flow_lab) {
        url += `?is_single_flow_lab=${true}`;
    }

    if (criteria && criteria.dummy_data_type) {
        url += `?dummy_data_type=${criteria.dummy_data_type}`;
    }
    return (0, _api.API_POST)(url, criteria).then(function (response) {
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(error);
        throw error;
    });
};

const retrieveMembersData = exports.retrieveMembersData = (type, extraParams = {}, callback) => dispatch => {
    // to retrieve already pushed member data in case of agent or proposer it self
    let url = `api/v1/plus/show_dummy_data?dummy_data_type=${type}`;
    if (extraParams && extraParams.dummy_id) {
        url += `&dummy_id=${extraParams.dummy_id}`;
    }
    (0, _api.API_GET)(url).then(function (response) {
        dispatch({
            type: _types.SHOW_VIP_MEMBERS_FORM,
            payload: response,
            extraParams: extraParams
        });
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(null);
    });
};

const vipPlusLead = exports.vipPlusLead = data => dispatch => {
    (0, _api.API_POST)(`api/v1/plus/push_vip_lead`, data).then(function (response) {});
};

const clearVipSelectedPlan = exports.clearVipSelectedPlan = () => dispatch => {
    // reset vip or gold selected plan to initial state
    dispatch({
        type: _types.CLEAR_VIP_SELECTED_PLAN
    });
};
const clearVipMemeberData = exports.clearVipMemeberData = () => dispatch => {
    // reset vip or gold store to initial state
    dispatch({
        type: _types.CLEAR_VIP_MEMBER_DATA
    });
};

const getOpdVipGoldPlans = exports.getOpdVipGoldPlans = (extraParams = {}, cb) => dispatch => {
    // to get gold/vip plans specific to particular doctor/hospital

    return (0, _api.API_POST)(`/api/v1/common/predicted-price-via-plan/opd`, extraParams).then(response => {
        dispatch({
            type: _types.GET_OPD_VIP_GOLD_PLANS,
            payload: response.vip_plans
        });
        let defaultSelectedPlan = [];
        if (extraParams && extraParams.already_selected_plan) {
            defaultSelectedPlan = response.vip_plans && response.vip_plans.filter(x => x.id == extraParams.already_selected_plan);
        }
        if (defaultSelectedPlan && defaultSelectedPlan.length == 0) {
            defaultSelectedPlan = response.vip_plans && response.vip_plans.filter(x => x.default_single_booking);
        }
        dispatch({
            type: _types.SELECT_VIP_CLUB_PLAN,
            payload: {
                selected_vip_plan: defaultSelectedPlan && defaultSelectedPlan.length ? defaultSelectedPlan[0] : []
            }
        });

        if (extraParams && extraParams.payment_type == 6) {
            dispatch({
                type: _types.SELECT_OPD_PAYMENT_TYPE,
                payload: extraParams.payment_type
            });
        }
    });
};

const getLabVipGoldPlans = exports.getLabVipGoldPlans = (extraParams = {}, cb) => dispatch => {
    // to get gold/vip plans specific to particular lab

    return (0, _api.API_POST)(`/api/v1/common/predicted-price-via-plan/lab`, extraParams).then(response => {
        dispatch({
            type: _types.GET_LAB_VIP_GOLD_PLANS,
            payload: response.vip_plans
        });
        let defaultSelectedPlan = [];
        if (extraParams && extraParams.already_selected_plan) {
            defaultSelectedPlan = response.vip_plans && response.vip_plans.filter(x => x.id == extraParams.already_selected_plan);
        }
        if (defaultSelectedPlan && defaultSelectedPlan.length == 0) {
            defaultSelectedPlan = response.vip_plans && response.vip_plans.filter(x => x.default_single_booking);
        }
        dispatch({
            type: _types.SELECT_VIP_CLUB_PLAN,
            payload: {
                selected_vip_plan: defaultSelectedPlan && defaultSelectedPlan.length ? defaultSelectedPlan[0] : []
            }
        });
        if (extraParams && extraParams.payment_type == 6) {
            dispatch({
                type: _types.SELECT_LAB_PAYMENT_TYPE,
                payload: extraParams.payment_type
            });
        }
    });
};

const applyCouponDiscount = exports.applyCouponDiscount = ({ productId, couponCode, couponId, plan_id, deal_price, cb }) => dispatch => {
    // get coupon discount
    (0, _api.API_POST)(`/api/v1/coupon/discount`, {
        coupon_code: [couponCode],
        deal_price: deal_price,
        product_id: productId,
        plan: plan_id
    }).then(function (response) {
        if (cb) cb(response);
    }).catch(function (error) {
        if (cb) cb(null);
    });
};

const removeVipCoupons = exports.removeVipCoupons = () => dispatch => {
    // to reset coupons to intial state
    dispatch({
        type: _types.REMOVE_VIP_COUPONS
    });
};

const removeMembers = exports.removeMembers = data => dispatch => {
    dispatch({
        type: _types.REMOVE_ADD_MEMBER_FORM,
        payload: data
    });
};

const retrieveDigitPlanData = exports.retrieveDigitPlanData = (type, callback) => dispatch => {
    // to retrieve digit insurance plans
    let url = `/api/v1/covid_insurance/plans`;

    (0, _api.API_GET)(url).then(function (response) {
        dispatch({
            type: _types.DIGIT_PLAN_LIST,
            payload: response
        });
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(null);
    });
};

const selectDigitPlan = exports.selectDigitPlan = (selected_vip_plan, callback) => dispatch => {
    // toggle/select vip plan
    dispatch({
        type: _types.SELECT_DIGIT_PLAN,
        payload: {
            selected_vip_plan
        }
    });
    if (callback) callback(selected_vip_plan);
};
const saveUserDetails = exports.saveUserDetails = (type, digit_self_details, forceAdd = false, previousProfile = '') => dispatch => {
    // to save user form details in store
    console.log(digit_self_details);
    dispatch({
        type: _types.DIGIT_SELF_DETAILS,
        payload: {
            type, forceAdd
        },
        digit_self_details: [digit_self_details],
        previousProfile: previousProfile
    });
};

const saveCurrentSelectedDigitMembers = exports.saveCurrentSelectedDigitMembers = (membersId, callback) => dispatch => {
    // save current visible form member or selected user profile id
    dispatch({
        type: _types.SAVE_CURRENT_DIGIT_MEMBERS,
        payload: membersId
    });
    if (callback) callback(true);
};

const digitPay = exports.digitPay = (criteria, callback) => dispatch => {
    // to request for payment
    console.log(criteria);
    return (0, _api.API_POST)('/api/v1/covid_insurance/create_order', criteria).then(function (response) {
        if (callback) callback(response);
    }).catch(function (error) {
        if (callback) callback(error);
        throw error;
    });
};

const retrieveDigitInsuranceData = exports.retrieveDigitInsuranceData = (dataParams, cb) => dispatch => {
    // to retrieve digit insurance data
    let url = '';
    if (dataParams && dataParams.id) {
        url = `/api/v1/covid_insurance/retrieve/` + dataParams.id;
    }
    return (0, _api.API_GET)(url).then(data => {
        if (cb) cb(null, data);
    }).catch(e => {
        if (cb) cb(e, null);
    });
};

/***/ }),

/***/ "./dev/js/api/api.js":
/*!***************************!*\
  !*** ./dev/js/api/api.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.base_url = undefined;

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

var _storage = __webpack_require__(/*! ../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _navigate = __webpack_require__(/*! ../helpers/navigate */ "./dev/js/helpers/navigate/index.js");

var _navigate2 = _interopRequireDefault(_navigate);

var _config = __webpack_require__(/*! ../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const base_url = exports.base_url = _config2.default.API_BASE_URL;

let axiosInstance = _axios2.default.create({
    baseURL: base_url,
    header: {}
});

function rejectHandler(response, urlInfo, callback) {

    if (false) {} else if (false) {} else {
        if (response.response && response.response.data && response.response.data.request_errors) {
            response = response.response.data.request_errors;
        } else if (response.response && response.response.data) {
            response = response.response.data;
        }

        callback(response);
    }
}

const API_GET = url => {
    return _storage2.default.getAuthToken({ url: url }).then(token => {

        return new Promise((resolve, reject) => {
            let headers = {};
            if (token) headers['Authorization'] = `Token ${token}`;
            axiosInstance({
                method: 'get',
                url: url,
                headers
            }).then(res => {
                resolve(res.data);
            }, response => {
                let urlInfo = {
                    url: url,
                    type: 'API_GET',
                    token: token
                };
                rejectHandler(response, urlInfo, reject);
            });
        });
    });
};
const API_POST = (url, data) => {
    return _storage2.default.getAuthToken({ url: url }).then(token => {
        return new Promise((resolve, reject) => {
            let headers = {};

            if (token) headers['Authorization'] = `Token ${token}`;
            axiosInstance({
                method: 'post',
                url: url,
                data: data,
                headers
            }).then(res => {
                resolve(res.data);
            }, response => {
                let urlInfo = {
                    url: url,
                    type: 'API_POST',
                    data: data,
                    token: token
                };
                rejectHandler(response, urlInfo, reject);
            });
        });
    });
};

const API_PUT = (url, data) => {
    return _storage2.default.getAuthToken({ url: url }).then(token => {
        return new Promise((resolve, reject) => {
            let headers = {};
            if (token) headers['Authorization'] = `Token ${token}`;
            axiosInstance({
                method: 'put',
                url: url,
                data: data,
                headers
            }).then(res => {
                resolve(res.data);
            }, response => {
                let urlInfo = {
                    url: url,
                    type: 'API_PUT',
                    data: data,
                    token: token
                };
                rejectHandler(response, urlInfo, reject);
            });
        });
    });
};

const API_DELETE = url => {
    return _storage2.default.getAuthToken({ url: url }).then(token => {
        return new Promise((resolve, reject) => {
            let headers = {};
            if (token) headers['Authorization'] = `Token ${token}`;
            axiosInstance({
                method: 'delete',
                url: url,
                headers
            }).then(res => {
                resolve(res.data);
            }, response => {
                let urlInfo = {
                    url: url,
                    type: 'API_DELETE',
                    token: token
                };
                rejectHandler(response, urlInfo, reject);
            });
        });
    });
};
module.exports = {
    API_GET,
    API_POST,
    API_PUT,
    API_DELETE
};

/***/ }),

/***/ "./dev/js/components/commons/HelmetTags/helmetTags.js":
/*!************************************************************!*\
  !*** ./dev/js/components/commons/HelmetTags/helmetTags.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HelmetTags extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { tagsData, setDefault, noIndex } = this.props;
        let title = tagsData && tagsData.title ? tagsData.title : "";
        let description = tagsData && tagsData.description ? tagsData.description : "";
        let keywords = tagsData && tagsData.keywords ? tagsData.keywords : "";
        let canonicalUrl = tagsData && tagsData.canonicalUrl ? tagsData.canonicalUrl : "";
        let prev = tagsData && tagsData.prev ? tagsData.prev : "";
        let next = tagsData && tagsData.next ? tagsData.next : "";
        let schema = tagsData && tagsData.schema ? tagsData.schema : null;
        let ogUrl = tagsData && tagsData.ogUrl ? tagsData.ogUrl : null;
        let ogType = tagsData && tagsData.ogType ? tagsData.ogType : null;
        let ogSiteName = tagsData && tagsData.ogSiteName ? tagsData.ogSiteName : null;
        let ogTitle = tagsData && tagsData.ogTitle ? tagsData.ogTitle : null;
        let ogDescription = tagsData && tagsData.ogDescription ? tagsData.ogDescription : null;
        let ogImage = tagsData && tagsData.ogImage ? tagsData.ogImage : null;

        try {
            if (schema) {
                schema = JSON.stringify(schema);
            }
        } catch (e) {
            schema = "";
        }

        if (setDefault) {
            title = "Book Doctor Online | 50% off on Doctor Appointment & Lab Tests";
            description = "Book Doctor Appointment at docprime & get 50% off. &#10003 Find & Book Doctor online, find & &#10003 Book best Labs, and &#10003 Hospitals.";
        }

        if (canonicalUrl) {
            canonicalUrl = canonicalUrl.toLowerCase();
        }
        let theme_color = "#ec720e";
        if (document && typeof document == "object" && document.location && document.location.host && document.location.host.includes('sbi')) {
            theme_color = "#178ddd";
        }
        return _react2.default.createElement(
            _reactHelmet.Helmet,
            null,
            title ? _react2.default.createElement(
                "title",
                null,
                title
            ) : "",
            _react2.default.createElement("meta", { name: "title", content: title }),
            _react2.default.createElement("meta", { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" }),
            _react2.default.createElement("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
            _react2.default.createElement("meta", { name: "mobile-web-app-capable", content: "yes" }),
            _react2.default.createElement("meta", { name: "theme-color", content: theme_color }),
            _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, shrink-to-fit=no, initial-scale=1, user-scalable=no" }),
            _react2.default.createElement("meta", { name: "description", content: description }),
            _react2.default.createElement("meta", { name: "keywords", content: keywords }),
            canonicalUrl ? _react2.default.createElement("link", { rel: "canonical", href: canonicalUrl }) : '',
            noIndex ? _react2.default.createElement("meta", { name: "robots", content: "noindex, nofollow" }) : "",
            prev ? _react2.default.createElement("link", { rel: "prev", href: prev }) : '',
            next ? _react2.default.createElement("link", { rel: "next", href: next }) : '',
            schema ? _react2.default.createElement(
                "script",
                { type: "application/ld+json" },
                `${schema}`
            ) : "",
            ogUrl ? _react2.default.createElement("meta", { property: "og:url", content: ogUrl }) : '',
            ogType ? _react2.default.createElement("meta", { property: "og:type", content: ogType }) : '',
            ogSiteName ? _react2.default.createElement("meta", { property: "og:site_name", content: ogSiteName }) : '',
            ogTitle ? _react2.default.createElement("meta", { property: "og:title", content: ogTitle }) : '',
            ogDescription ? _react2.default.createElement("meta", { property: "og:description", content: ogDescription }) : '',
            ogImage ? _react2.default.createElement("meta", { property: "og:image", content: ogImage }) : ''
        );
    }
}

exports.default = HelmetTags;

/***/ }),

/***/ "./dev/js/components/commons/HelmetTags/index.js":
/*!*******************************************************!*\
  !*** ./dev/js/components/commons/HelmetTags/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helmetTags = __webpack_require__(/*! ./helmetTags */ "./dev/js/components/commons/HelmetTags/helmetTags.js");

var _helmetTags2 = _interopRequireDefault(_helmetTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helmetTags2.default;

/***/ }),

/***/ "./dev/js/config/config.js":
/*!*********************************!*\
  !*** ./dev/js/config/config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const BASE_CONFIG = {
    FCM_CONFIG: {
        apiKey: "AIzaSyAAwnvfm-CXnO8s_WWz-yxEzX1---QzoL0",
        authDomain: "docprime-5c123.firebaseapp.com",
        databaseURL: "https://docprime-5c123.firebaseio.com",
        projectId: "docprime-5c123",
        storageBucket: "docprime-5c123.appspot.com",
        messagingSenderId: "247429343742"
    },
    FCM_PUBLIC_VAPID_KEYL: "BORw457Re6DHFlxAKSxxTziilo7sQZZT5lL305Ccqbl1U-YLfU_HyIcaXNRRHo85hNOPGBmVF64IlCfSISuP5pU"
};

const PROD_CONFIG = {
    API_BASE_URL: "https://docprime.com",
    SOCKET_BASE_URL: "https://docprime.com",
    SOCKET_BASE_PATH: "/io",
    RAVEN_DSN_KEY: "https://bbd8f89e401548749ce274c4e9dd9741@sentry.io/1244528",
    RAVEN_SERVER_DSN_KEY: "https://b8816627d7f84535bfd7d634d94916a3@sentry.io/1290505",
    PG_URL: "https://pay.docprime.com/dp/pay/dpOrder",
    PG_MULTI_ORDER_URL: "https://pay.docprime.com/dp/dpMultiOrder",
    CHAT_URL: "https://telemed.docprime.com/livechat",
    CHAT_API_URL: "https://telemed.docprime.com/api/v1",
    env: "production",
    UAID: 'UA-124740649-1',
    Tracker: 'docobj',
    API_BASE_URL_ELASTIC_SEARCH: 'https://l74e1dhn67.execute-api.ap-south-1.amazonaws.com/default',
    SEARCH_ELASTIC_VIEW: true,
    ENABLE_INSURANCE: true,
    GOOGLE_SERVICE_URL: 'https://docprime.com/ls',
    CHAT_API_UTILITY_API: 'https://chatapi.docprime.com',
    ENABLE_VIP_CLUB: true,
    PHARMEASY_IFRAME_URL: 'https://pharmeasy.in/online-medicine-order?utm_source=aff-docprime&utm_medium=cps',
    PHARMEASY_NEW_ORDER_IFRAME_URL: 'https://pharmeasy.in/healthcare?utm_source=aff-docprime&utm_medium=cps&utm_campaign=navbarnew',
    PHARMEASY_PREV_ORDER_IFRAME_URL: 'https://pharmeasy.in/account/orders/medicine?utm_source=docprime&utm_medium=cps&utm_campaign=navbarprevious',
    SEO_FRIENDLY_HOSPITAL_IDS: [58395, 3880, 3230, 40669, 4044, 4271, 30927, 18417, 4340, 2961, 57640, 5194, 2958, 4918, 4569, 24837, 19239, 27423, 57604, 57639],
    ENABLE_VIP_GOLD: true,
    REDIS_HOST: 'weblive.ukgf7i.0001.aps1.cache.amazonaws.com'
};

const STAGING_CONFIG = {
    API_BASE_URL: "https://kubeqa1.docprime.com",
    SOCKET_BASE_URL: "https://kubeqa1.docprime.com",
    SOCKET_BASE_PATH: "/io",
    RAVEN_DSN_KEY: "https://293dcc01cda545df925ccb2f7837b6a3@sentry.io/1341625",
    RAVEN_SERVER_DSN_KEY: "https://43567a5b14bb4aee988d45a95d55cc9c@sentry.io/1290589",
    PG_URL: "https://pay.docprime.com/dp/pay/dpOrder",
    PG_MULTI_ORDER_URL: "https://pay.docprime.com/dp/dpMultiOrder",
    CHAT_URL: "https://chatqa.docprime.com/livechat",
    CHAT_API_URL: "https://chatqa.docprime.com/api/v1",
    env: "staging",
    UAID: 'UA-124740649-2',
    Tracker: 'docqa',
    API_BASE_URL_ELASTIC_SEARCH: 'https://oxbgjks1i2.execute-api.ap-south-1.amazonaws.com/default',
    SEARCH_ELASTIC_VIEW: true,
    ENABLE_INSURANCE: true,
    GOOGLE_SERVICE_URL: 'https://docprime.com/ls',
    CHAT_API_UTILITY_API: 'https://chatapi.docprime.com',
    ENABLE_VIP_CLUB: true,
    PHARMEASY_IFRAME_URL: 'https://beta.pharmeasy.in/online-medicine-order?utm_source=aff-docprime&utm_medium=cps',
    PHARMEASY_NEW_ORDER_IFRAME_URL: 'https://beta.pharmeasy.in/healthcare?utm_source=aff-docprime&utm_medium=cps&utm_campaign=leftmenu',
    PHARMEASY_PREV_ORDER_IFRAME_URL: 'https://beta.pharmeasy.in/account/orders/medicine?utm_source=docprime&utm_medium=cps&utm_campaign=docprime-account-orders',
    SEO_FRIENDLY_HOSPITAL_IDS: [52779, 3851, 45894],
    ENABLE_VIP_GOLD: true,
    REDIS_HOST: 'weblive.ukgf7i.0001.aps1.cache.amazonaws.com'
};

const DEV_CONFIG = {
    API_BASE_URL: "https://kubeqa.docprime.com",
    //API_BASE_URL: "http://10.0.88.163:8090",
    SOCKET_BASE_URL: "https://kubeqa.docprime.com",
    // SOCKET_BASE_URL: "http://10.0.88.129:3000",
    SOCKET_BASE_PATH: "/io",
    PG_URL: "https://payqa.docprime.com/dp/pay/dpOrder",
    PG_MULTI_ORDER_URL: "https://payqa.docprime.com/dp/dpMultiOrder",
    CHAT_URL: "https://chatqa.docprime.com/livechat",
    CHAT_API_URL: "https://chatqa.docprime.com/api/v1",
    env: "dev",
    UAID: 'UA-124740649-2',
    Tracker: 'docqa',
    API_BASE_URL_ELASTIC_SEARCH: 'https://oxbgjks1i2.execute-api.ap-south-1.amazonaws.com/default',
    SEARCH_ELASTIC_VIEW: true,
    ENABLE_INSURANCE: true,
    GOOGLE_SERVICE_URL: 'https://docprime.com/ls',
    CHAT_API_UTILITY_API: 'http://chatapi.docprime.com',
    ENABLE_VIP_CLUB: true,
    PHARMEASY_IFRAME_URL: 'https://beta.pharmeasy.in/online-medicine-order?utm_source=aff-docprime&utm_medium=cps',
    PHARMEASY_NEW_ORDER_IFRAME_URL: 'https://beta.pharmeasy.in/healthcare?utm_source=aff-docprime&utm_medium=cps&utm_campaign=leftmenu',
    PHARMEASY_PREV_ORDER_IFRAME_URL: 'https://beta.pharmeasy.in/account/orders/medicine?utm_source=docprime&utm_medium=cps&utm_campaign=docprime-account-orders',
    SEO_FRIENDLY_HOSPITAL_IDS: [52779, 3851, 45894],
    ENABLE_VIP_GOLD: true,
    REDIS_HOST: 'weblive.ukgf7i.0001.aps1.cache.amazonaws.com'
};

let CONFIG = _extends({}, BASE_CONFIG, DEV_CONFIG);

if (false) {}

if (false) {}

if (false) {}

if (false) {}

exports.default = CONFIG;

/***/ }),

/***/ "./dev/js/config/index.js":
/*!********************************!*\
  !*** ./dev/js/config/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(/*! ./config */ "./dev/js/config/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _config2.default;

/***/ }),

/***/ "./dev/js/constants/types.js":
/*!***********************************!*\
  !*** ./dev/js/constants/types.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

//AUTH ACTIONS
const SEND_OTP_REQUEST = exports.SEND_OTP_REQUEST = 'SEND_OTP_REQUEST';
const SEND_OTP_SUCCESS = exports.SEND_OTP_SUCCESS = 'SEND_OTP_SUCCESS';
const SEND_OTP_FAIL = exports.SEND_OTP_FAIL = 'SEND_OTP_FAIL';
const SUBMIT_OTP_REQUEST = exports.SUBMIT_OTP_REQUEST = 'SUBMIT_OTP_REQUEST';
const SUBMIT_OTP_SUCCESS = exports.SUBMIT_OTP_SUCCESS = 'SUBMIT_OTP_SUCCESS';
const SUBMIT_OTP_FAIL = exports.SUBMIT_OTP_FAIL = 'SUBMIT_OTP_FAIL';
const RESET_AUTH = exports.RESET_AUTH = 'RESET_AUTH';
const SET_SUMMARY_UTM = exports.SET_SUMMARY_UTM = 'SET_SUMMARY_UTM';

// OPD FLOW
const APPEND_DOCTORS = exports.APPEND_DOCTORS = 'APPEND_DOCTORS';
const DOCTOR_SEARCH = exports.DOCTOR_SEARCH = 'DOCTOR_SEARCH';
const DOCTOR_SEARCH_START = exports.DOCTOR_SEARCH_START = 'DOCTOR_SEARCH_START';
const SELECT_LOCATION_OPD = exports.SELECT_LOCATION_OPD = 'SELECT_LOCATION_OPD';
const MERGE_SEARCH_STATE_OPD = exports.MERGE_SEARCH_STATE_OPD = 'MERGE_SEARCH_STATE_OPD';
const TOGGLE_OPD_CRITERIA = exports.TOGGLE_OPD_CRITERIA = 'TOGGLE_OPD_CRITERIA';
const SET_OPD_FILTERS = exports.SET_OPD_FILTERS = 'SET_OPD_FILTERS';
const LOAD_SEARCH_CRITERIA_OPD = exports.LOAD_SEARCH_CRITERIA_OPD = 'LOAD_SEARCH_CRITERIA_OPD';
const SELECT_OPD_TIME_SLOT = exports.SELECT_OPD_TIME_SLOT = 'SELECT_OPD_TIME_SLOT';
const RESET_FILTER_STATE = exports.RESET_FILTER_STATE = 'RESET_FILTER_STATE';
const SET_SERVER_RENDER_OPD = exports.SET_SERVER_RENDER_OPD = 'SET_SERVER_RENDER_OPD';
const SET_FETCH_RESULTS_OPD = exports.SET_FETCH_RESULTS_OPD = 'SET_FETCH_RESULTS_OPD';
const APPEND_DOCTORS_PROFILE = exports.APPEND_DOCTORS_PROFILE = 'APPEND_DOCTORS_PROFILE';
const CLONE_SELECTED_CRITERIAS = exports.CLONE_SELECTED_CRITERIAS = 'CLONE_SELECTED_CRITERIAS';
const APPEND_HOSPITALS = exports.APPEND_HOSPITALS = 'APPEND_HOSPITALS';
const HOSPITAL_SEARCH = exports.HOSPITAL_SEARCH = 'HOSPITAL_SEARCH';
const SELECT_OPD_PAYMENT_TYPE = exports.SELECT_OPD_PAYMENT_TYPE = 'SELECT_OPD_PAYMENT_TYPE';

// DIAG FLOW
const TOGGLE_DIAGNOSIS_CRITERIA = exports.TOGGLE_DIAGNOSIS_CRITERIA = 'TOGGLE_DIAGNOSIS_CRITERIA';
const MERGE_SEARCH_STATE_LAB = exports.MERGE_SEARCH_STATE_LAB = 'MERGE_SEARCH_STATE_LAB';
const LOAD_SEARCH_CRITERIA_LAB = exports.LOAD_SEARCH_CRITERIA_LAB = 'LOAD_SEARCH_CRITERIA_LAB';
const APPEND_LABS = exports.APPEND_LABS = 'APPEND_LABS';
const LAB_SEARCH = exports.LAB_SEARCH = 'LAB_SEARCH';
const SELECT_LOCATION_DIAGNOSIS = exports.SELECT_LOCATION_DIAGNOSIS = 'SELECT_LOCATION_DIAGNOSIS';
const APPEND_FILTERS_DIAGNOSIS = exports.APPEND_FILTERS_DIAGNOSIS = 'APPEND_FILTERS_DIAGNOSIS';
const LAB_SEARCH_START = exports.LAB_SEARCH_START = 'LAB_SEARCH_START';
const SELECT_LAB_TIME_SLOT = exports.SELECT_LAB_TIME_SLOT = 'SELECT_LAB_TIME_SLOT';
const SELECR_APPOINTMENT_TYPE_LAB = exports.SELECR_APPOINTMENT_TYPE_LAB = 'SELECR_APPOINTMENT_TYPE_LAB';
const CLEAR_EXTRA_TESTS = exports.CLEAR_EXTRA_TESTS = 'CLEAR_EXTRA_TESTS';
const CLEAR_ALL_TESTS = exports.CLEAR_ALL_TESTS = 'CLEAR_ALL_TESTS';
const SET_SERVER_RENDER_LAB = exports.SET_SERVER_RENDER_LAB = 'SET_SERVER_RENDER_LAB';
const SET_FETCH_RESULTS_LAB = exports.SET_FETCH_RESULTS_LAB = 'SET_FETCH_RESULTS_LAB';
const SET_CORPORATE_COUPON = exports.SET_CORPORATE_COUPON = 'SET_CORPORATE_COUPON';
const SELECT_TESTS = exports.SELECT_TESTS = 'SELECT_TESTS';
const APPEND_LABS_SEARCH = exports.APPEND_LABS_SEARCH = 'APPEND_LABS_SEARCH';

// USER FLOW
const APPEND_USER_PROFILES = exports.APPEND_USER_PROFILES = 'APPEND_USER_PROFILES';
const APPEND_USER_APPOINTMENTS = exports.APPEND_USER_APPOINTMENTS = 'APPEND_USER_APPOINTMENTS';
const SELECT_USER_PROFILE = exports.SELECT_USER_PROFILE = 'SELECT_USER_PROFILE';
const APPEND_ADDRESS = exports.APPEND_ADDRESS = 'APPEND_ADDRESS';
const SELECT_USER_ADDRESS = exports.SELECT_USER_ADDRESS = 'SELECT_USER_ADDRESS';
const APPEND_NOTIFICATIONS = exports.APPEND_NOTIFICATIONS = 'APPEND_NOTIFICATIONS';
const APPEND_UPCOMING_APPOINTMENTS = exports.APPEND_UPCOMING_APPOINTMENTS = 'APPEND_UPCOMING_APPOINTMENTS';
const APPEND_USER_TRANSACTIONS = exports.APPEND_USER_TRANSACTIONS = 'APPEND_USER_TRANSACTIONS';
const APPEND_HEALTH_TIP = exports.APPEND_HEALTH_TIP = 'APPEND_HEALTH_TIP';
const APPEND_ORDER_HISTORY = exports.APPEND_ORDER_HISTORY = 'APPEND_ORDER_HISTORY';
const APPEND_ARTICLES = exports.APPEND_ARTICLES = 'APPEND_ARTICLES';
const APPEND_CHAT_DOCTOR = exports.APPEND_CHAT_DOCTOR = 'APPEND_CHAT_DOCTOR';
const APPEND_CHAT_HISTORY = exports.APPEND_CHAT_HISTORY = 'APPEND_CHAT_HISTORY';
const APPEND_CITIES = exports.APPEND_CITIES = 'APPEND_CITIES';
const SET_CHATROOM_ID = exports.SET_CHATROOM_ID = 'SET_CHATROOM_ID';
const APPEND_ARTICLE_LIST = exports.APPEND_ARTICLE_LIST = 'APPEND_ARTICLE_LIST';
const SELECT_SEARCH_TYPE = exports.SELECT_SEARCH_TYPE = 'SELECT_SEARCH_TYPE';
const APPEND_CART = exports.APPEND_CART = 'APPEND_CART';

//COMMON TAGS
const SAVE_UTM_TAGS = exports.SAVE_UTM_TAGS = 'SAVE_UTM_TAGS';
const SAVE_DEVICE_INFO = exports.SAVE_DEVICE_INFO = 'SAVE_DEVICE_INFO';
const START_LIVE_CHAT = exports.START_LIVE_CHAT = 'START_LIVE_CHAT';
const ADD_DEFAULT_LAB_TESTS = exports.ADD_DEFAULT_LAB_TESTS = 'ADD_DEFAULT_LAB_TESTS';
const ADD_LAB_PROFILE_TESTS = exports.ADD_LAB_PROFILE_TESTS = 'ADD_LAB_PROFILE_TESTS';
const GET_APPLICABLE_COUPONS = exports.GET_APPLICABLE_COUPONS = 'GET_APPLICABLE_COUPONS';
const GET_USER_PRESCRIPTION = exports.GET_USER_PRESCRIPTION = 'GET_USER_PRESCRIPTION';
const ADD_OPD_COUPONS = exports.ADD_OPD_COUPONS = 'ADD_OPD_COUPONS';
const REMOVE_OPD_COUPONS = exports.REMOVE_OPD_COUPONS = 'REMOVE_OPD_COUPONS';
const ADD_LAB_COUPONS = exports.ADD_LAB_COUPONS = 'ADD_LAB_COUPONS';
const REMOVE_LAB_COUPONS = exports.REMOVE_LAB_COUPONS = 'REMOVE_LAB_COUPONS';
const APPLY_OPD_COUPONS = exports.APPLY_OPD_COUPONS = 'APPLY_OPD_COUPONS';
const APPLY_LAB_COUPONS = exports.APPLY_LAB_COUPONS = 'APPLY_LAB_COUPONS';
const RESET_LAB_COUPONS = exports.RESET_LAB_COUPONS = 'RESET_LAB_COUPONS';
const RESET_OPD_COUPONS = exports.RESET_OPD_COUPONS = 'RESET_OPD_COUPONS';
const CLOSE_POPUP = exports.CLOSE_POPUP = 'CLOSE_POPUP';
const FILTER_SEARCH_CRITERIA_OPD = exports.FILTER_SEARCH_CRITERIA_OPD = 'FILTER_SEARCH_CRITERIA_OPD';

//Site Map
const GET_CITIES_MAP = exports.GET_CITIES_MAP = 'GET_CITIES_MAP';
const GET_CITIES_SPECIALITIES = exports.GET_CITIES_SPECIALITIES = 'GET_CITIES_SPECIALITIES';
const GET_SPECIALITIES_CITIES = exports.GET_SPECIALITIES_CITIES = 'GET_SPECIALITIES_CITIES';
const GET_SPECIALITIES_MAP = exports.GET_SPECIALITIES_MAP = 'GET_SPECIALITIES_MAP';
const GET_TESTS_ALPHABETICALLY = exports.GET_TESTS_ALPHABETICALLY = 'GET_TESTS_ALPHABETICALLY';
const GET_TESTS_FLAG = exports.GET_TESTS_FLAG = 'GET_TESTS_FLAG';

//Procedures
const TOOGLE_PROCEDURE_CRITERIA = exports.TOOGLE_PROCEDURE_CRITERIA = 'TOOGLE_PROCEDURE_CRITERIA';
const SET_PROCEDURES = exports.SET_PROCEDURES = 'SET_PROCEDURES';
const TOGGLE_PROFILE_PROCEDURES = exports.TOGGLE_PROFILE_PROCEDURES = 'TOGGLE_PROFILE_PROCEDURES';
const SAVE_COMMON_PROCEDURES = exports.SAVE_COMMON_PROCEDURES = 'SAVE_COMMON_PROCEDURES';
const RESET_PROCEDURE_URL = exports.RESET_PROCEDURE_URL = 'RESET_PROCEDURE_URL';
const MERGE_SELECTED_CRITERIAS = exports.MERGE_SELECTED_CRITERIAS = 'MERGE_SELECTED_CRITERIAS';
const SAVE_PROFILE_PROCEDURES = exports.SAVE_PROFILE_PROCEDURES = 'SAVE_PROFILE_PROCEDURES';

const SAVE_CURRENT_LAB_PROFILE_TESTS = exports.SAVE_CURRENT_LAB_PROFILE_TESTS = 'SAVE_CURRENT_LAB_PROFILE_TESTS';

//Elastic Search
const GET_ELASTIC_RESULTS = exports.GET_ELASTIC_RESULTS = 'GET_ELASTIC_RESULTS';
const SEARCH_TEST_INFO = exports.SEARCH_TEST_INFO = 'SEARCH_TEST_INFO';

//Ads bookings
const ADS_BOOKING = exports.ADS_BOOKING = 'ADS_BOOKING';

//Search Health packages
const SEARCH_HEALTH_PACKAGES = exports.SEARCH_HEALTH_PACKAGES = 'SEARCH_HEALTH_PACKAGES';

//Search via Search Id 
const SET_SEARCH_ID = exports.SET_SEARCH_ID = 'SET_SEARCH_ID';
const GET_SEARCH_ID_RESULTS = exports.GET_SEARCH_ID_RESULTS = 'GET_SEARCH_ID_RESULTS';
const SET_LAB_SEARCH_ID = exports.SET_LAB_SEARCH_ID = 'SET_LAB_SEARCH_ID';
const GET_LAB_SEARCH_ID_RESULTS = exports.GET_LAB_SEARCH_ID_RESULTS = 'GET_LAB_SEARCH_ID_RESULTS';
const SAVE_RESULTS_WITH_SEARCHID = exports.SAVE_RESULTS_WITH_SEARCHID = 'SAVE_RESULTS_WITH_SEARCHID';
const SAVE_LAB_RESULTS_WITH_SEARCHID = exports.SAVE_LAB_RESULTS_WITH_SEARCHID = 'SAVE_LAB_RESULTS_WITH_SEARCHID';
// Offers
const GET_OFFER_LIST = exports.GET_OFFER_LIST = 'GET_OFFER_LIST';
const MERGE_URL_STATE = exports.MERGE_URL_STATE = 'MERGE_URL_STATE';
const SET_URL_PAGE = exports.SET_URL_PAGE = 'SET_URL_PAGE';
const SET_LAB_URL_PAGE = exports.SET_LAB_URL_PAGE = 'SET_LAB_URL_PAGE';

const SET_NEXT_SEARCH_CRITERIA = exports.SET_NEXT_SEARCH_CRITERIA = 'SET_NEXT_SEARCH_CRITERIA';
const TOGGLE_404 = exports.TOGGLE_404 = 'TOGGLE_404';
const TOGGLE_LEFT_MENU = exports.TOGGLE_LEFT_MENU = 'TOGGLE_LEFT_MENU';
const SAVE_PINCODE = exports.SAVE_PINCODE = 'SAVE_PINCODE';

const TOGGLE_PACKAGE_ID = exports.TOGGLE_PACKAGE_ID = 'TOGGLE_PACKAGE_ID';
const TOGGLE_SEARCH_PACKAGES = exports.TOGGLE_SEARCH_PACKAGES = 'TOGGLE_SEARCH_PACKAGES';

//Clear Search Ids
const CLEAR_LAB_SEARCH_ID = exports.CLEAR_LAB_SEARCH_ID = 'CLEAR_LAB_SEARCH_ID';
const CLEAR_OPD_SEARCH_ID = exports.CLEAR_OPD_SEARCH_ID = 'CLEAR_OPD_SEARCH_ID';

const TEST_DETAIL_META_DATA = exports.TEST_DETAIL_META_DATA = 'TEST_DETAIL_META_DATA';

const UPCOMING_APPOINTMENTS = exports.UPCOMING_APPOINTMENTS = 'UPCOMING_APPOINTMENTS';

//Insurance
const GET_INSURANCE = exports.GET_INSURANCE = 'GET_INSURANCE';
const INSURANCE_PAY = exports.INSURANCE_PAY = 'INSURANCE_PAY';
const PUSH_USER_DATA = exports.PUSH_USER_DATA = 'PUSH_USER_DATA';
const SELECT_INSURANCE_PLAN = exports.SELECT_INSURANCE_PLAN = 'SELECT_INSURANCE_PLAN';
const SELF_DATA = exports.SELF_DATA = 'SELF_DATA';
const SELECT_PROFILE = exports.SELECT_PROFILE = 'SELECT_PROFILE';
const INSURE_MEMBER_LIST = exports.INSURE_MEMBER_LIST = 'INSURE_MEMBER_LIST';
const UPDATE_MEMBER_LIST = exports.UPDATE_MEMBER_LIST = 'UPDATE_MEMBER_LIST';
const INSURED_PROFILE = exports.INSURED_PROFILE = 'INSURED_PROFILE';
const SAVE_CURRENT_INSURED_MEMBERS = exports.SAVE_CURRENT_INSURED_MEMBERS = 'SAVE_CURRENT_INSURED_MEMBERS';
const RESET_CURRENT_INSURED_MEMBERS = exports.RESET_CURRENT_INSURED_MEMBERS = 'RESET_CURRENT_INSURED_MEMBERS';
const RESET_INSURED_PLANS = exports.RESET_INSURED_PLANS = 'RESET_INSURED_PLANS';
const CLEAR_INSURANCE = exports.CLEAR_INSURANCE = 'CLEAR_INSURANCE';
const TOOGLE_INSURANCE_CRITERIA = exports.TOOGLE_INSURANCE_CRITERIA = 'TOOGLE_INSURANCE_CRITERIA';
const TOOGLE_LAB_INSURANCE_CRITERIA = exports.TOOGLE_LAB_INSURANCE_CRITERIA = 'TOOGLE_LAB_INSURANCE_CRITERIA';
const SAVE_INSURANCE_BANK_DETAILS = exports.SAVE_INSURANCE_BANK_DETAILS = 'SAVE_INSURANCE_BANK_DETAILS';
const ENDORSED_MEMBER_LIST = exports.ENDORSED_MEMBER_LIST = 'ENDORSED_MEMBER_LIST';
const SAVE_MEMBER_PROOFS = exports.SAVE_MEMBER_PROOFS = 'SAVE_MEMBER_PROOFS';
const DELETE_MEMBER_PROOF = exports.DELETE_MEMBER_PROOF = 'DELETE_MEMBER_PROOF';
const SAVE_AVAIL_NOW_INSURANCE = exports.SAVE_AVAIL_NOW_INSURANCE = 'SAVE_AVAIL_NOW_INSURANCE';
const CLEAR_AVAIL_NOW_INSURANCE = exports.CLEAR_AVAIL_NOW_INSURANCE = 'CLEAR_AVAIL_NOW_INSURANCE';
const CANCEL_REASON_INSURANCE = exports.CANCEL_REASON_INSURANCE = 'CANCEL_REASON_INSURANCE';
const CLEAR_BANK_DETAILS_INSURANCE = exports.CLEAR_BANK_DETAILS_INSURANCE = 'CLEAR_BANK_DETAILS_INSURANCE';

const RESET_INSURED_DATA = exports.RESET_INSURED_DATA = 'RESET_INSURED_DATA';
const GET_INSURANCE_NETWORK = exports.GET_INSURANCE_NETWORK = 'GET_INSURANCE_NETWORK';
const SET_NETWORK_TYPE = exports.SET_NETWORK_TYPE = 'SET_NETWORK_TYPE';
//IPD SEARCH
const TOGGLE_IPD = exports.TOGGLE_IPD = 'TOGGLE_IPD';
const LOADED_IPD_INFO = exports.LOADED_IPD_INFO = 'LOADED_IPD_INFO';
const GET_IPD_HOSPITALS = exports.GET_IPD_HOSPITALS = 'GET_IPD_HOSPITALS';
const MERGE_IPD_CRITERIA = exports.MERGE_IPD_CRITERIA = 'MERGE_IPD_CRITERIA';
const SET_IPD_SEARCH_ID = exports.SET_IPD_SEARCH_ID = 'SET_IPD_SEARCH_ID';
const SAVE_IPD_RESULTS_WITH_SEARCHID = exports.SAVE_IPD_RESULTS_WITH_SEARCHID = 'SAVE_IPD_RESULTS_WITH_SEARCHID';
const GET_IPD_SEARCH_ID_RESULTS = exports.GET_IPD_SEARCH_ID_RESULTS = 'GET_IPD_SEARCH_ID_RESULTS';
const SELECT_IPD_LOCATION_STATUS = exports.SELECT_IPD_LOCATION_STATUS = 'SELECT_IPD_LOCATION_STATUS';
const GET_IPD_HOSPITAL_DETAIL = exports.GET_IPD_HOSPITAL_DETAIL = 'GET_IPD_HOSPITAL_DETAIL';
const CLEAR_IPD_SEARCH_IDS = exports.CLEAR_IPD_SEARCH_IDS = 'CLEAR_IPD_SEARCH_IDS';
const GET_IPD_HOSPITAL_DETAIL_START = exports.GET_IPD_HOSPITAL_DETAIL_START = 'GET_IPD_HOSPITAL_DETAIL_START';
const LOADED_IPD_INFO_START = exports.LOADED_IPD_INFO_START = 'LOADED_IPD_INFO_START';
const START_HOSPITAL_SEARCH = exports.START_HOSPITAL_SEARCH = 'START_HOSPITAL_SEARCH';

//CARE
const IS_USER_CARED = exports.IS_USER_CARED = 'IS_USER_CARED';

//CHAT FEEDBACK
const SAVE_CHAT_FEEDBACK = exports.SAVE_CHAT_FEEDBACK = 'SAVE_CHAT_FEEDBACK';
const SUBMIT_CHAT_FEEDBACK = exports.SUBMIT_CHAT_FEEDBACK = 'SUBMIT_CHAT_FEEDBACK';
const SAVE_CHAT_FEEDBACK_ROOMID = exports.SAVE_CHAT_FEEDBACK_ROOMID = 'SAVE_CHAT_FEEDBACK_ROOMID';
//ComparePackages
const TOGGLE_COMPARE_PACKAGE = exports.TOGGLE_COMPARE_PACKAGE = 'TOGGLE_COMPARE_PACKAGE';
const RESET_COMPARE_STATE = exports.RESET_COMPARE_STATE = 'RESET_COMPARE_STATE';
const SET_COMMON_UTM_TAGS = exports.SET_COMMON_UTM_TAGS = 'SET_COMMON_UTM_TAGS';
const UNSET_COMMON_UTM_TAGS = exports.UNSET_COMMON_UTM_TAGS = 'UNSET_COMMON_UTM_TAGS';

const APPEND_ARTICLE_DATA = exports.APPEND_ARTICLE_DATA = 'APPEND_ARTICLE_DATA';
const GET_APP_DOWNLOAD_BANNER_LIST = exports.GET_APP_DOWNLOAD_BANNER_LIST = 'GET_APP_DOWNLOAD_BANNER_LIST';

const START_FETCHING_IPD_LIST = exports.START_FETCHING_IPD_LIST = 'START_FETCHING_IPD_LIST';
const GET_IPD_ALPHABETICALLY = exports.GET_IPD_ALPHABETICALLY = 'GET_IPD_ALPHABETICALLY';

const SAVE_PATIENT_DETAILS = exports.SAVE_PATIENT_DETAILS = 'SAVE_PATIENT_DETAILS';

const IPD_CHAT_START = exports.IPD_CHAT_START = 'IPD_CHAT_START';
const SAVE_PRESCRIPTION = exports.SAVE_PRESCRIPTION = 'SAVE_PRESCRIPTION';
const DELETE_PRESCRIPTION = exports.DELETE_PRESCRIPTION = 'DELETE_PRESCRIPTION';
const SAVE_IS_PRESCRIPTION_NEED = exports.SAVE_IS_PRESCRIPTION_NEED = 'SAVE_IS_PRESCRIPTION_NEED';
const CLEAR_PRESCRIPTION = exports.CLEAR_PRESCRIPTION = 'CLEAR_PRESCRIPTION';

const IPD_POPUP_FIRED = exports.IPD_POPUP_FIRED = 'IPD_POPUP_FIRED';
const LOAD_INSURANCE_CRITERIA = exports.LOAD_INSURANCE_CRITERIA = 'LOAD_INSURANCE_CRITERIA';

//Hospital List Sitemap
const START_FETCHING_HOSPITAL_LIST = exports.START_FETCHING_HOSPITAL_LIST = 'START_FETCHING_HOSPITAL_LIST';
const GET_HOSPITAL_LIST_DATA = exports.GET_HOSPITAL_LIST_DATA = 'GET_HOSPITAL_LIST_DATA';
const GET_HOSPITAL_LOCALITY_LIST = exports.GET_HOSPITAL_LOCALITY_LIST = 'GET_HOSPITAL_LOCALITY_LIST';
const START_FETCHING_HOSPITAL_LOCALITY_LIST = exports.START_FETCHING_HOSPITAL_LOCALITY_LIST = 'START_FETCHING_HOSPITAL_LOCALITY_LIST';
const START_FETCHING_OPD_TIME = exports.START_FETCHING_OPD_TIME = 'START_FETCHING_OPD_TIME';
const END_FETCHING_OPD_TIME = exports.END_FETCHING_OPD_TIME = 'END_FETCHING_OPD_TIME';
const SAVE_IPD_POPUP_DATA = exports.SAVE_IPD_POPUP_DATA = 'SAVE_IPD_POPUP_DATA';

//Hospital Comments
const GET_HOSP_COMMENTS = exports.GET_HOSP_COMMENTS = 'GET_HOSP_COMMENTS';

//CitiesData
const USER_CITIES = exports.USER_CITIES = 'USER_CITIES';

//digit insurance 
const DIGIT_PLAN_LIST = exports.DIGIT_PLAN_LIST = 'DIGIT_PLAN_LIST';
const SELECT_DIGIT_PLAN = exports.SELECT_DIGIT_PLAN = 'SELECT_DIGIT_PLAN';
const DIGIT_SELF_DETAILS = exports.DIGIT_SELF_DETAILS = 'DIGIT_SELF_DETAILS';
const SAVE_CURRENT_DIGIT_MEMBERS = exports.SAVE_CURRENT_DIGIT_MEMBERS = 'SAVE_CURRENT_DIGIT_MEMBERS';
const DIGIT_INSURANCE_DATA = exports.DIGIT_INSURANCE_DATA = 'DIGIT_INSURANCE_DATA';

//vip-club
const GET_VIP_LIST = exports.GET_VIP_LIST = 'GET_VIP_LIST';
const SELECT_VIP_CLUB_PLAN = exports.SELECT_VIP_CLUB_PLAN = 'SELECT_VIP_CLUB_PLAN';
const USER_SELF_DETAILS = exports.USER_SELF_DETAILS = 'USER_SELF_DETAILS';
const SAVE_CURRENT_VIP_MEMBERS = exports.SAVE_CURRENT_VIP_MEMBERS = 'SAVE_CURRENT_VIP_MEMBERS';
const SELECT_VIP_USER_PROFILE = exports.SELECT_VIP_USER_PROFILE = 'SELECT_VIP_USER_PROFILE';
const SHOW_VIP_MEMBERS_FORM = exports.SHOW_VIP_MEMBERS_FORM = 'SHOW_VIP_MEMBERS_FORM';
const CLEAR_VIP_SELECTED_PLAN = exports.CLEAR_VIP_SELECTED_PLAN = 'CLEAR_VIP_SELECTED_PLAN';
const SHOW_RETAIL_VIP_CARD_LAB_SUMMARY = exports.SHOW_RETAIL_VIP_CARD_LAB_SUMMARY = 'SHOW_RETAIL_VIP_CARD_LAB_SUMMARY';
const CLEAR_VIP_MEMBER_DATA = exports.CLEAR_VIP_MEMBER_DATA = 'CLEAR_VIP_MEMBER_DATA';
const ADD_VIP_COUPONS = exports.ADD_VIP_COUPONS = 'ADD_VIP_COUPONS';
const REMOVE_VIP_COUPONS = exports.REMOVE_VIP_COUPONS = 'REMOVE_VIP_COUPONS';
const REMOVE_ADD_MEMBER_FORM = exports.REMOVE_ADD_MEMBER_FORM = 'REMOVE_ADD_MEMBER_FORM';

//Chat Payment 
const SET_CHAT_PAYMENT_STATUS = exports.SET_CHAT_PAYMENT_STATUS = 'SET_CHAT_PAYMENT_STATUS';
const RESET_VIP_CLUB = exports.RESET_VIP_CLUB = 'RESET_VIP_CLUB';
const VIP_CLUB_DASHBOARD_DATA = exports.VIP_CLUB_DASHBOARD_DATA = 'VIP_CLUB_DASHBOARD_DATA';
const SAVE_VIP_MEMBER_PROOFS = exports.SAVE_VIP_MEMBER_PROOFS = 'SAVE_VIP_MEMBER_PROOFS';
const DELETE_VIP_MEMBER_PROOF = exports.DELETE_VIP_MEMBER_PROOF = 'DELETE_VIP_MEMBER_PROOF';

// Pharmeasy Iframe
const PHARMEASY_IFRAME = exports.PHARMEASY_IFRAME = 'PHARMEASY_IFRAME';

//CLEAR STORE
const CLEAR_LAB_COUPONS = exports.CLEAR_LAB_COUPONS = 'CLEAR_LAB_COUPONS';
const CLEAR_OPD_COUPONS = exports.CLEAR_OPD_COUPONS = 'CLEAR_OPD_COUPONS';

//Hospitals Nearby/Top
const SAVE_NEARBY_HOSPITALS = exports.SAVE_NEARBY_HOSPITALS = 'SAVE_NEARBY_HOSPITALS';
const SAVE_TOP_HOSPITALS = exports.SAVE_TOP_HOSPITALS = 'SAVE_TOP_HOSPITALS';
const CLEAR_OPD_PAGE_NUMBER = exports.CLEAR_OPD_PAGE_NUMBER = 'CLEAR_OPD_PAGE_NUMBER';

//Single FLOW GOLD
const GET_OPD_VIP_GOLD_PLANS = exports.GET_OPD_VIP_GOLD_PLANS = 'GET_OPD_VIP_GOLD_PLANS';
const GET_LAB_VIP_GOLD_PLANS = exports.GET_LAB_VIP_GOLD_PLANS = 'GET_LAB_VIP_GOLD_PLANS';
const SELECT_LAB_PAYMENT_TYPE = exports.SELECT_LAB_PAYMENT_TYPE = 'SELECT_LAB_PAYMENT_TYPE';

const GET_REFRESH_NEW_TOKEN = exports.GET_REFRESH_NEW_TOKEN = 'GET_REFRESH_NEW_TOKEN';
const GET_REFER_AMOUNT = exports.GET_REFER_AMOUNT = 'GET_REFER_AMOUNT';

const CLEAR_SAVED_PATIENT_DETAILS = exports.CLEAR_SAVED_PATIENT_DETAILS = 'CLEAR_SAVED_PATIENT_DETAILS';

const SAVE_LOGIN_PHONE_NUMBER = exports.SAVE_LOGIN_PHONE_NUMBER = 'SAVE_LOGIN_PHONE_NUMBER';

const SET_FOOTER_DATA = exports.SET_FOOTER_DATA = 'SET_FOOTER_DATA';

/***/ }),

/***/ "./dev/js/helpers/gtm.js":
/*!*******************************!*\
  !*** ./dev/js/helpers/gtm.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(/*! ../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _storage = __webpack_require__(/*! ./storage/storage */ "./dev/js/helpers/storage/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _auth = __webpack_require__(/*! ../actions/commons/auth.js */ "./dev/js/actions/commons/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

function getVisitorId() {
    let uid_string = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    let visitor_id = createUUID(uid_string);
    return visitor_id;
}

function createUUID(uid_string) {
    var dt = new Date().getTime();
    var uuid = uid_string.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
    return uuid;
}

function getVisitId() {
    let uid_string = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxyyyxxxxxx';
    let visit_id = createUUID(uid_string);
    return visit_id;
}

const GTM = {

    send_boot_events: (isUtmTags = false) => {

        let def_data = {
            utm_tags: {
                utm_source: '',
                utm_medium: '',
                utm_term: '',
                utm_campaign: '',
                source: "",
                referrer: ''
            }, device: 'desktop'
        };

        if (typeof window == "undefined" || typeof navigator == "undefined") {
            return def_data;
        }

        if (window.SENT_BOOT_UP_DATA && !isUtmTags) {
            return def_data;
        }

        let parsed = null;
        try {
            parsed = queryString.parse(window.location.search);
        } catch (e) {}

        let utm_tags = def_data.utm_tags;

        if (parsed) {
            let source = '';
            if (parsed.utm_source) {
                source = parsed.utm_source;
            } else if (document.referrer) {
                source = document.referrer;
            }

            utm_tags = {
                utm_source: parsed.utm_source || '',
                utm_medium: parsed.utm_medium || '',
                utm_term: parsed.utm_term || '',
                utm_campaign: parsed.utm_campaign || '',
                source: source,
                referrer: document.referrer || ''
            };
        }

        let data1 = {
            'Category': 'ConsumerApp', 'Action': 'UTMevents', 'event': 'utm-events', 'utm_source': utm_tags.utm_source || '', 'utm_medium': utm_tags.utm_medium || '', 'utm_term': utm_tags.utm_term || '', 'utm_campaign': utm_tags.utm_campaign || '', 'addToGA': false, 'source': utm_tags.source, 'referrer': document.referrer || ''
        };

        GTM.sendEvent({ data: data1 });

        let isMobile = false;
        let device = 'desktop';
        if (/mobile/i.test(navigator.userAgent)) {
            isMobile = true;
            device = 'mobile';
        }
        if (navigator.userAgent.match(/iPad/i)) {
            device = 'ipad';
        }
        if (navigator.userAgent.match(/iPhone/i)) {
            device = 'iphone';
        }
        if (navigator.userAgent.match(/Android/i)) {
            device = 'Android';
        }

        if (navigator.userAgent.match(/BlackBerry/i)) {
            device = 'BlackBerry';
        }

        let data2 = {
            'Category': 'ConsumerApp', 'Action': 'VisitorInfo', 'event': 'visitor-info', 'Device': device, 'Mobile': isMobile, 'platform': navigator.platform || '', 'addToGA': false
        };

        GTM.sendEvent({ data: data2 });

        window.SENT_BOOT_UP_DATA = true;

        return { utm_tags, device };
    },

    sendEvent: ({ data }, send_to_GA = true, send_to_backend = true) => {
        try {
            /**
             * dataLayer is expected to be a global variable set by gtm - not to be used on server-side
             */

            if (dataLayer && send_to_GA) {
                data.UAID = _config2.default.UAID;
                data.Tracker = _config2.default.Tracker;
                let gtmData = JSON.parse(JSON.stringify(data));
                if (data.addToGA == undefined) {
                    dataLayer.push(gtmData);
                }
            }

            if (navigator) {
                data.userAgent = navigator.userAgent;
            }

            data.visitor_info = GTM.getVisitorInfo();
            data.triggered_at = Math.floor(new Date().getTime());
            if (send_to_backend && _config2.default.env == "production") {
                (0, _auth.setGTMSession)(data);
            }
        } catch (e) {
            //
        }
    },

    getVisitorInfo: () => {
        let visitor_info = "";

        if (typeof window == "object") {
            if (window.VISITOR_INFO && typeof window.VISITOR_INFO == 'string') {
                visitor_info = window.VISITOR_INFO;
            }
        }

        if (!visitor_info) {
            visitor_info = _storage2.default.getVisitorInfo();
        }

        if (visitor_info && visitor_info.length) {
            try {
                visitor_info = JSON.parse(visitor_info);
            } catch (e) {}
        }

        if (visitor_info && visitor_info.visit_id && visitor_info.visitor_id) {
            let last_visit_difference = new Date().getTime() - visitor_info.last_visit_time;

            if (last_visit_difference > 3600000) {
                visitor_info.visit_id = getVisitId();
            }
            visitor_info.last_visit_time = new Date().getTime();
        } else {
            let visitor_id = getVisitorId();
            let visit_id = getVisitId();
            visitor_info = {
                visit_id: visit_id,
                visitor_id: visitor_id,
                last_visit_time: new Date().getTime()
            };
        }

        let updated_cookie_val = JSON.stringify(visitor_info);

        if (typeof window == "object") {
            window.VISITOR_INFO = updated_cookie_val;
        }
        _storage2.default.setVisitorInfo(updated_cookie_val);

        return visitor_info;
    },

    getUserId: () => {
        let user_id = _storage2.default.getUserId() || '';
        return user_id;
    }
};

exports.default = GTM;

/***/ }),

/***/ "./dev/js/helpers/mapHelpers.js":
/*!**************************************!*\
  !*** ./dev/js/helpers/mapHelpers.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._autoCompleteService = _autoCompleteService;
exports._getlocationFromLatLong = _getlocationFromLatLong;
exports._getLocationFromPlaceId = _getLocationFromPlaceId;
exports._getNameforPlaceId = _getNameforPlaceId;
exports._getNameFromLocation = _getNameFromLocation;

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(/*! ../config/config */ "./dev/js/config/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _autoCompleteService(query, cb, types = null) {

    let url = `${_config2.default.GOOGLE_SERVICE_URL}/autocomplete/${query}`;
    _axios2.default.post(url, {
        types: types
    }).then(data => {
        if (data && data.data) {
            cb(data.data);
        }
    }).catch(e => {
        cb([]);
    });
}

function _getlocationFromLatLong(lat, long, location_type = 'locality', cb) {
    var lat_c = parseFloat(parseFloat(lat).toFixed(6));
    var long_c = parseFloat(parseFloat(long).toFixed(6));

    let url = `${_config2.default.GOOGLE_SERVICE_URL}/location/latlong/${lat_c}/${long_c}`;
    _axios2.default.get(url).then(data => {
        if (data && data.data) {
            let results = data.data;
            if (results && results[0]) {
                let results_to_pick = results[0];
                results.map(x => {
                    if (x.address_components && x.address_components.length > results_to_pick.address_components.length) {
                        results_to_pick = x;
                    }
                });

                let location_name = "";
                let locality = _getNameFromLocation(results_to_pick, 'locality');
                let sub_locality = _getNameFromLocation(results_to_pick, 'sublocality');
                // debugger
                if (sub_locality && location_type != 'city') {
                    location_name += `${sub_locality}, `;
                }
                if (locality) {
                    location_name += `${locality}`;
                }
                if (!location_name) {
                    location_name = results_to_pick.formatted_address;
                }

                let location_object = {
                    formatted_address: location_name,
                    name: location_name,
                    place_id: "",
                    geometry: { location: { lat, lng: long } },
                    locality: locality,
                    sub_locality: sub_locality
                };
                cb(location_object);
            }
        }
    }).catch(e => {
        // cb([])
    });
}

function _getLocationFromPlaceId(placeId, cb, modify = false) {
    let url = `${_config2.default.GOOGLE_SERVICE_URL}/location/placeid/${placeId}`;
    _axios2.default.get(url).then(data => {
        if (data && data.data) {
            let place = data.data;
            if (modify) {
                cb(place);
                return;
            }
            let location_name = place.formatted_address;
            let formedName = _getNameforPlaceId(place);

            //Get Locality & SubLocality
            let locality = _getNameFromLocation(place, 'locality');
            let sub_locality = _getNameFromLocation(place, 'sublocality');

            if (formedName) {
                location_name = formedName;
            }
            // debugger
            let location_object = {
                formatted_address: location_name,
                name: location_name,
                place_id: place.place_id,
                geometry: place.geometry,
                locality: locality,
                sub_locality: sub_locality
            };
            cb(location_object);
        } else {
            // cb(null)
        }
    }).catch(e => {
        // cb(null)
    });
}

function _getNameforPlaceId(result) {
    let name = [];
    if (result.address_components && result.address_components.length) {
        let found_locality = false;
        for (let i = 0; i < result.address_components.length; i++) {

            if (result.address_components[i].types) {
                for (let x of result.address_components[i].types) {
                    if (x == 'locality') {
                        found_locality = true;
                        break;
                    }
                }
                name.push(result.address_components[i].long_name);
                if (found_locality) {
                    break;
                }
            }
        }
        if (!found_locality) {
            name = "";
        }
    }
    if (name.length) {
        return name.join(', ');
    } else return "";
}

function _getNameFromLocation(result, type) {
    let name = "";
    if (result.address_components && result.address_components.length) {
        for (let i = result.address_components.length - 1; i >= 0; i--) {
            if (result.address_components[i].types) {
                for (let x of result.address_components[i].types) {
                    if (x == type) {
                        name = result.address_components[i].long_name;
                        break;
                    }
                }
            }
            if (name) {
                break;
            }
        }
    }
    return name;
}

/***/ }),

/***/ "./dev/js/helpers/navigate/index.js":
/*!******************************************!*\
  !*** ./dev/js/helpers/navigate/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navigate = __webpack_require__(/*! ./navigate */ "./dev/js/helpers/navigate/navigate.js");

var _navigate2 = _interopRequireDefault(_navigate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _navigate2.default;

/***/ }),

/***/ "./dev/js/helpers/navigate/navigate.js":
/*!*********************************************!*\
  !*** ./dev/js/helpers/navigate/navigate.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function getLocationParam(props, tag) {
    // this API assumes the context of react-router-4
    const paramString = props.location.search;
    const params = new URLSearchParams(paramString);
    return params.get(tag);
}

const NAVIGATE = {
    navigateTo: where => {
        if (window) {
            let no_reload = getLocationParam(window, 'ref');
            if (where == '/') {
                if (!no_reload) {
                    // add nr to check and stop recursive reloads
                    window.location.href = where + "?ref=nr";
                }
            } else {
                window.location.href = where;
            }
        }
    },

    /**
     * Check if the component is required to fetch new data from server, or just use the exisitng one. 
     */
    refreshLabSearchResults: props => {
        let lat = getLocationParam(props, 'lat') || null;
        let long = getLocationParam(props, 'long') || null;
        let place_id = getLocationParam(props, 'place_id') || "";

        let oldLocation = null;
        if (lat || place_id) {
            oldLocation = {
                lat, long, place_id
            };
        }

        if (!!!oldLocation) {
            return true;
        }

        let new_lat = null;
        if (props.selectedLocation && props.selectedLocation.geometry) {
            new_lat = props.selectedLocation.geometry.location.lat;
            if (typeof new_lat === 'function') new_lat = new_lat();
            new_lat = parseFloat(parseFloat(new_lat).toFixed(6));
        }

        if (oldLocation && oldLocation.lat && new_lat && oldLocation.lat != new_lat) {
            return true;
        }

        let noResulsFound = props.labList.filter(x => props.LABS[x]) < 10;

        if (props.history.action === 'PUSH' || noResulsFound || props.SET_FROM_SERVER) {
            return true;
        }

        return false;
    },

    /**
     * Check if the component is required to fetch new data from server, or just use the exisitng one. 
     */
    refreshDoctorSearchResults: props => {
        let lat = getLocationParam(props, 'lat') || null;
        let long = getLocationParam(props, 'long') || null;
        let place_id = getLocationParam(props, 'place_id') || "";

        let oldLocation = null;
        if (lat || place_id) {
            oldLocation = {
                lat, long, place_id
            };
        }

        if (!!!oldLocation) {
            return true;
        }

        let new_lat = null;
        if (props.selectedLocation && props.selectedLocation.geometry) {
            new_lat = props.selectedLocation.geometry.location.lat;
            if (typeof new_lat === 'function') new_lat = new_lat();
            new_lat = parseFloat(parseFloat(new_lat).toFixed(6));
        }

        if (oldLocation && oldLocation.lat && new_lat && oldLocation.lat != new_lat) {
            return true;
        }

        let noResulsFound = props.doctorList.filter(x => props.DOCTORS[x]) < 10;

        if (props.history.action === 'PUSH' || noResulsFound || props.SET_FROM_SERVER) {
            return true;
        }

        return false;
    }
};

exports.default = NAVIGATE;

/***/ }),

/***/ "./dev/js/helpers/socket.js":
/*!**********************************!*\
  !*** ./dev/js/helpers/socket.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _api = __webpack_require__(/*! ../api/api */ "./dev/js/api/api.js");

var _config = __webpack_require__(/*! ../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _storage = __webpack_require__(/*! ../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SOCKET = (() => {

    let _initialized = false;
    let _instance = null;

    const init = cb => {

        if (!_initialized || !_instance) {
            if (typeof io == "undefined") {
                return;
            }
            console.log(' ======== INITIALIZING SOCKET FOR IN-APP NOTIFICATIONS ==========');

            //Fetch userid with auth token to create a seperate room
            _storage2.default.getAuthToken().then(token => {
                if (token) {
                    const socket = io(_config2.default.SOCKET_BASE_URL, {
                        path: _config2.default.SOCKET_BASE_PATH
                        // query: {
                        //     token: token
                        // }
                    });
                    socket.on('reqData', socketData => {
                        socket.emit('getData', { token: token });
                    });
                    _initialized = true;
                    _instance = socket;
                    cb();
                } else {
                    _initialized = false;
                    _instance = null;
                }
            }).catch(e => {
                _initialized = false;
                _instance = null;
            });
        }
    };

    const getInstance = () => {
        return _instance;
    };

    const refreshSocketConnection = () => {
        //Build new socket connection on token refresh
        if (_instance) {
            _instance.disconnect();
            _instance = null;
        }
    };

    return { init, getInstance: getInstance.bind(undefined), refreshSocketConnection: refreshSocketConnection.bind(undefined) };
})();
// import io from 'socket.io-client';
exports.default = SOCKET;

/***/ }),

/***/ "./dev/js/helpers/storage/cookie.js":
/*!******************************************!*\
  !*** ./dev/js/helpers/storage/cookie.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	request: null,

	init: function (req) {
		this.request = req;
	},

	getReq: function () {
		return this.request;
	}
};

/***/ }),

/***/ "./dev/js/helpers/storage/index.js":
/*!*****************************************!*\
  !*** ./dev/js/helpers/storage/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _storage = __webpack_require__(/*! ./storage */ "./dev/js/helpers/storage/storage.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _storage2.default;

/***/ }),

/***/ "./dev/js/helpers/storage/redis-helper.js":
/*!************************************************!*\
  !*** ./dev/js/helpers/storage/redis-helper.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _api = __webpack_require__(/*! ../../api/api.js */ "./dev/js/api/api.js");

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const redis = __webpack_require__(/*! redis */ "redis");


let client = null;
try {
	client = redis.createClient({
		port: 6379, // replace with your port
		host: _config2.default.REDIS_HOST, // replace with your hostanme or IP address
		password: undefined // replace with your password
	});

	if (client) {
		client.on("error", function (err) {
			console.log("Error " + err);
		});
	}
} catch (e) {}

var RedisHelper = {

	setData: (key, data) => {
		if (client) {
			client.set(key, JSON.stringify(data));
			client.expire(key, 30 * 86400);
		}
	},
	getData: (key, cb) => {
		if (client) {
			client.get(key, function (err, resp) {
				if (err || !resp) {
					cb(null);
				} else {
					try {
						cb(JSON.parse(resp));
					} catch (e) {
						client.del(key);
						cb(null);
					}
				}
			});
		} else {
			cb(null);
		}
	},
	getArticle: dataParams => {
		return new Promise((resolve, reject) => {
			RedisHelper.getData(dataParams.article_url, resp => {

				if (resp) {
					console.log('Data from redis');
					resolve(resp);
				} else {
					console.log('Data Fetch from API send to redis');
					let url = `/api/v1/article/detail?url=${dataParams.article_url}`;
					return (0, _api.API_GET)(url).then(function (response) {
						if (response) {
							let dataClone = _extends({}, response);
							RedisHelper.setData(dataParams.article_url, response);
							resolve(dataClone);
						}
					}).catch(function (error) {
						reject(null);
					});
				}
			});
		});
	}

};

exports.default = RedisHelper;

/***/ }),

/***/ "./dev/js/helpers/storage/storage.js":
/*!*******************************************!*\
  !*** ./dev/js/helpers/storage/storage.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cookie = __webpack_require__(/*! ./cookie.js */ "./dev/js/helpers/storage/cookie.js");

var _cookie2 = _interopRequireDefault(_cookie);

var _api = __webpack_require__(/*! ../../api/api.js */ "./dev/js/api/api.js");

var _socket = __webpack_require__(/*! ../socket */ "./dev/js/helpers/socket.js");

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CryptoJS = __webpack_require__(/*! crypto-js */ "crypto-js");


function deleteAllCookies() {
    if (document) {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
}

function setCookie(name, value, days) {
    if (document) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
}

function getCookie(name) {
    var nameEQ = name + "=";
    if (document) {
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    } else if (_cookie2.default && _cookie2.default.getReq) {
        try {
            let req = _cookie2.default.getReq();
            if (req && req.headers && req.headers.cookie) {
                let cookies = req.headers.cookie;
                var ca = cookies.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            }
        } catch (e) {}
    }
}

function eraseCookie(name) {
    if (document) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    try {
        if (base64Url && window && typeof window == "object") {
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            return JSON.parse(window.atob(base64));
        } else {
            return {};
        }
    } catch (e) {
        return {};
    }
};

function generateKeyFromPassword(password) {
    var userHash = CryptoJS.MD5(password);
    var keyStr = userHash.toString().substring(0, 16);
    var key = CryptoJS.enc.Utf8.parse(keyStr);
    return key;
}

const STORAGE = {
    setAuthToken: token => {
        setCookie('tokenauth', token, 10);
        return Promise.resolve(true);
    },
    getAuthToken: (dataParams = {}) => {

        return Promise.resolve(getCookie('tokenauth'));

        let istokenRefreshCall = dataParams.url && dataParams.url.includes('api-token-refresh');
        let exp_time = {};
        try {
            exp_time = getCookie('tokenRefreshTime');
            exp_time = JSON.parse(exp_time);
        } catch (e) {}

        if (STORAGE.checkAuth() && exp_time && Object.keys(exp_time).length && exp_time.payload && exp_time.payload.exp * 1000 < new Date().getTime() + 5700 && dataParams && !istokenRefreshCall) {
            let token = STORAGE.refreshTokenCall({ token: getCookie('tokenauth'), fromWhere: 'FromSTORAGE', isForceUpdate: false });
            return Promise.resolve(token);
        } else {
            return Promise.resolve(getCookie('tokenauth'));
        }
    },
    checkAuth: () => {
        return !!getCookie('tokenauth');
    },
    deleteAuth: () => {
        eraseCookie('tokenauth');
        // deleteAllCookies()
        eraseCookie('tokenRefreshTime');
        return Promise.resolve();
    },
    isAgent: () => {
        //return true;
        let token = getCookie('tokenauth');
        if (token) {
            let jwtData = parseJwt(token);
            return !!jwtData.agent_id;
        }
    },
    setUserId: userId => {
        setCookie('user_id', userId, 10);
        return Promise.resolve(true);
    },
    getUserId: () => {
        return getCookie('user_id');
    },
    deleteUserId: () => {
        eraseCookie('user_id');
        return Promise.resolve(true);
    },
    setVisitorInfo: visitorId => {
        setCookie('visitinfo', visitorId, 10);
        return Promise.resolve(true);
    },
    getVisitorInfo: () => {
        return getCookie('visitinfo') || '';
    },
    deleteVisitorInfo: () => {
        eraseCookie('visitinfo');
        return Promise.resolve(true);
    },
    setAppointmentDetails: token => {
        setCookie('booking_info', token, 5);
        return Promise.resolve(true);
    },
    setAnyCookie: (name, value, day) => {
        setCookie(name, value, day);
    },
    getAnyCookie: name => {
        return getCookie(name);
    },
    setAuthTokenRefreshTime: exp_time => {
        setCookie('tokenRefreshTime', exp_time, 10);

        return Promise.resolve(true);
    },

    encrypt(user_profile_id) {
        let date = Math.floor(new Date().getTime() / 1000);
        let encryptedData = `${user_profile_id}.${date}`;
        let msgString = encryptedData.toString();
        var key = generateKeyFromPassword('hpDqwzdpoQY8ymm5');
        var iv = CryptoJS.lib.WordArray.random(16);
        var encrypted = CryptoJS.AES.encrypt(msgString, key, {
            iv: iv
        });
        return iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64);
    },
    refreshTokenCall(params, cb) {
        let login_user_id = getCookie('user_id');
        if (params.user_id) {
            login_user_id = params.user_id;
        }
        if (login_user_id) {
            let ciphertext = STORAGE.encrypt(login_user_id);
            return (0, _api.API_POST)('/api/v1/user/api-token-refresh', {
                token: params.token,
                reset: ciphertext,
                enableCall: true,
                fromWhere: params.fromWhere,
                force_update: params.isForceUpdate
            }).then(data => {
                if (data && Object.keys(data).length) {
                    STORAGE.setAuthToken(data.token).then(resp => {
                        _socket2.default.refreshSocketConnection();
                    });
                    STORAGE.setAuthTokenRefreshTime(JSON.stringify(data));
                    if (cb) {
                        cb(data);
                    }
                    return data.token;
                }
            }).catch(e => {
                return false;
            });
        } else {
            return Promise.resolve(getCookie('tokenauth'));
        }
    },
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').then(function (registration) {
                    console.log('Service Worker registration Success', registration.scope);
                }, function (err) {
                    //registration Failed
                    console.log('Service Worker registration Failed', err);
                });
            });
        }
    },
    unregisterServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                navigator.serviceWorker.getRegistrations().then(registers => {
                    for (let i = 0; i < registers.length; i++) {
                        registers[i].unregister();
                    }
                });
            } catch (e) {}
        }
    }

};

exports.default = STORAGE;

/***/ }),

/***/ "./dev/js/reducers/commons/auth.js":
/*!*****************************************!*\
  !*** ./dev/js/reducers/commons/auth.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = defaultState, action) {

    switch (action.type) {
        case _types.SEND_OTP_REQUEST:
            {
                let newState = _extends({}, defaultState);

                newState.otp_request_sent = true;
                newState.phoneNumber = action.payload.phoneNumber;

                return newState;
            }

        case _types.SEND_OTP_SUCCESS:
            {
                let newState = _extends({}, state);
                newState.otp_request_sent = false;
                newState.otp_request_success = true;
                newState.otp_request_fail = false;
                newState.success_message = action.payload.success_message;
                newState.error_message = "";
                return newState;
            }

        case _types.SEND_OTP_FAIL:
            {
                let newState = _extends({}, state);
                newState.otp_request_sent = false;
                newState.otp_request_fail = true;
                newState.otp_request_success = false;
                newState.error_message = action.payload.error_message;

                return newState;
            }

        case _types.SUBMIT_OTP_REQUEST:
            {
                let newState = _extends({}, state);
                newState.submit_otp = true;
                newState.error_message = "";
                return newState;
            }

        case _types.SUBMIT_OTP_SUCCESS:
            {
                let newState = _extends({}, state);
                newState.submit_otp = false;
                newState.submit_otp_fail = false;
                newState.submit_otp_success = true;
                newState.token = action.payload.token;
                newState.error_message = "";
                return newState;
            }

        case _types.SUBMIT_OTP_FAIL:
            {
                let newState = _extends({}, state);
                newState.submit_otp = false;
                newState.submit_otp_fail = true;
                newState.submit_otp_success = false;
                newState.error_message = action.payload.error_message;
                return newState;
            }

        case _types.RESET_AUTH:
            {
                return defaultState;
            }

    }
    return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

const defaultState = {
    token: null,
    error_message: "",
    success_message: "",
    otp_request_sent: false,
    otp_request_success: false,
    otp_request_fail: false,
    phoneNumber: "",
    submit_otp: false,
    submit_otp_success: false,
    submit_otp_fail: false
};

/***/ }),

/***/ "./dev/js/reducers/commons/elasticSearch.js":
/*!**************************************************!*\
  !*** ./dev/js/reducers/commons/elasticSearch.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (state = defaultState, action) {

	switch (action.type) {

		case _types.GET_CITIES_MAP:
			{}
	}
	return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

const defaultState = {
	elasticData: {}
};

/***/ }),

/***/ "./dev/js/reducers/commons/siteMap.js":
/*!********************************************!*\
  !*** ./dev/js/reducers/commons/siteMap.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = defaultState, action) {

	switch (action.type) {

		case _types.GET_CITIES_MAP:
			{

				let newState = _extends({}, state);

				newState.citiesMap = action.payload;
				return newState;
			}

		case _types.GET_CITIES_SPECIALITIES:
			{
				let newState = _extends({}, state);
				newState.citiesMapSpecialities = action.payload;
				return newState;
			}

		case _types.GET_SPECIALITIES_MAP:
			{

				let newState = _extends({}, state);

				newState.specialitiesMap = action.payload;
				return newState;
			}

		case _types.GET_SPECIALITIES_CITIES:
			{
				let newState = _extends({}, state);
				newState.specialitiesMapCities = action.payload;
				return newState;
			}

		case _types.GET_TESTS_FLAG:
			{
				let newState = _extends({}, state);
				newState.testIndexLoading = action.flag;
				return newState;
			}

		case _types.GET_TESTS_ALPHABETICALLY:
			{
				let newState = _extends({}, state);
				newState.alphabeticalTests = action.payload;
				newState.selectedAlphabet = action.payload.key;
				newState.testIndexLoading = action.flag;
				return newState;
			}

		case _types.GET_INSURANCE_NETWORK:
			{
				let newState = _extends({}, state);
				newState.insuranceNetwork = action.payload;
				newState.inputString = action.payload.starts_with;
				return newState;
			}

		case _types.SET_NETWORK_TYPE:
			{
				let newState = _extends({}, state);
				newState.networkType = action.payload;
				return newState;
			}

		case _types.START_FETCHING_IPD_LIST:
			{
				let newState = _extends({}, state);
				newState.ipdIndexLoading = action.flag;
				return newState;
			}

		case _types.GET_IPD_ALPHABETICALLY:
			{
				let newState = _extends({}, state);
				newState.alphabeticalIpdTests = action.payload;
				newState.selectedIpdListAlphabet = action.character;
				newState.ipdIndexLoading = action.flag;
				return newState;
			}

		case _types.START_FETCHING_HOSPITAL_LIST:
			{
				let newState = _extends({}, state);
				newState.hospitalIndexLoading = true;
				return newState;
			}

		case _types.GET_HOSPITAL_LIST_DATA:
			{
				let newState = _extends({}, state);
				newState.selectedHospitalList = action.payload;
				newState.hospitalIndexLoading = false;
				return newState;
			}

		case _types.START_FETCHING_HOSPITAL_LOCALITY_LIST:
			{
				let newState = _extends({}, state);
				newState.hospitalListLoading = true;
				return newState;
			}

		case _types.GET_HOSPITAL_LOCALITY_LIST:
			{
				let newState = _extends({}, state);
				newState.hospitalLocalityList = action.payload;
				newState.hospitalListLoading = false;
				return newState;
			}
	}
	return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

const defaultState = {
	citiesMap: [],
	citiesMapSpecialities: {},
	specialitiesMap: [],
	specialitiesMapCities: {},
	alphabeticalTests: [],
	insuranceNetwork: [],
	networkType: 'doctor',
	testIndexLoading: true,
	alphabeticalIpdTests: [],
	selectedIpdListAlphabet: '',
	ipdIndexLoading: true,
	hospitalIndexLoading: true,
	selectedHospitalList: [],
	hospitalLocalityList: {},
	hospitalListLoading: true
};

/***/ }),

/***/ "./dev/js/reducers/commons/user.js":
/*!*****************************************!*\
  !*** ./dev/js/reducers/commons/user.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = defaultState, action) {

    switch (action.type) {
        case _types.APPEND_USER_PROFILES:
            {
                let newState = _extends({}, state, {
                    profiles: _extends({}, state.profiles)

                    // add a dummy profile to keep system in working state
                    // TODO: do this better way
                });if (action.allUsers) {
                    newState.profiles = {};
                    newState.selectedProfile = null;
                }
                if (action.payload && action.payload.length == 0) {
                    action.payload.push(DUMMY_PROFILE);
                } else {
                    if (newState.profiles[DUMMY_PROFILE.id]) {
                        delete newState.profiles[DUMMY_PROFILE.id];
                        newState.selectedProfile = null;
                    }
                }
                let is_any_user_buy_gold = null;
                newState.profiles = action.payload.reduce((profileMap, profile) => {
                    if (profile.is_default_user) {
                        if (!newState.selectedProfile) {
                            newState.selectedProfile = profile.id;
                            newState.primaryMobile = profile.phone_number;
                            newState.userName = profile.name;
                        }
                        newState.is_login_user_insured = profile.is_insured;
                        newState.insurance_status = profile.insurance_status;
                        newState.defaultProfile = profile.id;
                    }
                    if (profile.is_vip_gold_member || profile.is_vip_member) {
                        is_any_user_buy_gold = profile.id;
                    }
                    profileMap[profile.id] = profile;
                    return profileMap;
                }, newState.profiles);

                if (!newState.selectedProfile && action.payload.length) {
                    newState.selectedProfile = action.payload[0].id;
                }

                newState.is_any_user_buy_gold = is_any_user_buy_gold;

                if (!newState.defaultProfile && action.payload.length) {
                    newState.defaultProfile = action.payload[0].id;
                }
                newState.user_detail_fetched = true;

                return newState;
            }

        case _types.APPEND_USER_APPOINTMENTS:
            {
                let newState = _extends({}, state, {
                    appointments: _extends({}, state.appointments)
                });

                newState.appointments[action.payload.profile_id] = action.payload.appointments;

                return newState;
            }

        case _types.APPEND_UPCOMING_APPOINTMENTS:
            {
                let newState = _extends({}, state, {
                    userUpcomingAppointments: [].concat(state.userUpcomingAppointments)
                });

                newState.userUpcomingAppointments = action.payload.appointments;

                return newState;
            }

        case _types.SELECT_USER_PROFILE:
            {
                let newState = _extends({}, state);

                if (state.profiles[action.payload]) {
                    newState.selectedProfile = action.payload;
                }

                return newState;
            }

        case _types.APPEND_ADDRESS:
            {
                let newState = _extends({}, state);
                newState.address = action.payload;
                return newState;
            }

        case _types.APPEND_NOTIFICATIONS:
            {

                let newState = _extends({}, state, {
                    notifications: state.notifications ? [...state.notifications] : []
                });

                newState.newNotification = 0;
                newState.unread_count = action.payload.unread_count;

                if (action.payload.replace) {
                    newState.notifications = action.payload.notifications;
                } else {
                    newState.notifications = [...newState.notifications, ...action.payload.notifications];
                }

                newState.notifications.map(not => {
                    if (!not.viewed_at) {
                        newState.newNotification += 1;
                    }
                });

                return newState;
            }

        case _types.APPEND_USER_TRANSACTIONS:
            {

                let newState = _extends({}, state, {
                    userTransactions: state.userTransactions ? [].concat(state.userTransactions) : []
                });

                newState.userTransactions = action.payload.user_transactions;
                newState.userWalletBalance = action.payload.user_wallet_balance;
                newState.userCashbackBalance = action.payload.consumer_cashback;

                return newState;
            }

        case _types.APPEND_HEALTH_TIP:
            {
                let newState = _extends({}, state, {
                    healthTips: state.healthTips ? [].concat(state.healthTips) : []
                });
                newState.healthTips = action.payload;
                return newState;
            }

        case _types.APPEND_ORDER_HISTORY:
            {
                let newState = _extends({}, state, {
                    orderHistory: state.orderHistory ? [].concat(state.orderHistory) : []
                });
                newState.orderHistory = action.payload;
                return newState;
            }

        case _types.APPEND_ARTICLES:
            {
                let newState = _extends({}, state, {
                    articles: state.articles ? [].concat(state.articles) : []
                });
                newState.articles = action.payload;
                return newState;
            }

        case _types.APPEND_CHAT_DOCTOR:
            {
                let newState = _extends({}, state, {
                    chatDoctors: _extends({}, state.chatDoctors),
                    chatRoomIds: _extends({}, state.chatRoomIds)
                });
                newState.chatRoomIds = {};
                newState.chatDoctors[action.payload.doctorId] = action.payload.data;
                newState.chatRoomIds[action.payload.roomId] = action.payload.doctorId;
                return newState;
            }

        case _types.APPEND_CHAT_HISTORY:
            {
                let newState = _extends({}, state, {
                    chatHistory: []
                });
                newState.chatHistory = action.payload;
                return newState;
            }

        case _types.RESET_AUTH:
            {
                return _extends({}, defaultState, { summary_utm: state.summary_utm, summary_utm_validity: state.summary_utm_validity });
            }

        case _types.APPEND_CITIES:
            {
                let newState = _extends({}, state);
                newState.citiesName = action.payload;
                return newState;
            }

        case _types.SET_CHATROOM_ID:
            {
                let newState = _extends({}, state);
                newState.currentRoomId = action.payload;
                if (action.extraParams) {

                    if (action.extraParams.payment) {
                        newState.chatPaymentStatus = action.payload;
                    }

                    if (action.extraParams.showDisabledPayment) {
                        newState.mobileVerificationDone = action.payload;
                    }
                }

                return newState;
            }

        case _types.APPEND_ARTICLE_LIST:
            {
                let newState = _extends({}, state, {
                    articleList: [].concat(state.articleList)
                });

                newState.articlePageCount = Math.ceil(action.payload.total_articles / 10);

                newState.pageButtonCount = action.staticPage || 1;

                newState.ARTICLE_LOADED = true;
                if (action.replaceList) {
                    newState.articleList = action.payload.result;
                } else {
                    newState.articleList = newState.articleList.concat(action.payload.result);
                }

                //dedupe
                let dedupe = {};
                let final_articles = [];
                for (let article of newState.articleList) {
                    let id = article.id || article.url;
                    if (!dedupe[id]) {
                        final_articles.push(article);
                        dedupe[id] = true;
                    }
                }

                newState.articleList = final_articles;
                newState.articleListData = action.payload;

                return newState;
            }

        case _types.SAVE_UTM_TAGS:
            {
                let newState = _extends({}, state);
                newState.utm_tags = action.payload;
                return newState;
            }

        case _types.SAVE_DEVICE_INFO:
            {
                let newState = _extends({}, state);
                newState.device_info = action.payload;
                return newState;
            }

        case _types.START_LIVE_CHAT:
            {
                let newState = _extends({}, state);
                newState.liveChatStarted = action.payload;

                if (action.deleteRoomId) {
                    newState.chatRoomIds = {};
                }
                return newState;
            }

        case _types.GET_APPLICABLE_COUPONS:
            {
                let newState = _extends({}, state);
                newState.applicableCoupons = action.payload;
                return newState;
            }

        case _types.GET_USER_PRESCRIPTION:
            {
                let newState = _extends({}, state);
                newState.userPrescriptions = action.payload;
                return newState;
            }
        case _types.CLOSE_POPUP:
            {
                let newState = _extends({}, state, {
                    rated_appoinments: _extends({}, state.rated_appoinments)
                });

                newState.rated_appoinments[action.payload.appointment_id] = true;
                return newState;
            }

        case _types.SELECT_SEARCH_TYPE:
            {
                let newState = _extends({}, state);
                if (action.payload.includes('lab') || action.payload.includes('opd') || action.payload.includes('ipd')) {
                    newState.selectedSearchType = action.payload;
                }
                return newState;
            }

        case _types.SELECT_TESTS:
            {
                let newState = _extends({}, state);
                newState.testList = action.payload;
                return newState;
            }

        case _types.SET_SUMMARY_UTM:
            {
                let newState = _extends({}, state);
                newState.summary_utm = action.payload.toggle;
                newState.summary_utm_validity = action.payload.validity;
                return newState;
            }

        case _types.GET_OFFER_LIST:
            {
                let newState = _extends({}, state);
                newState.offerList = action.payload;
                return newState;
            }

        case _types.APPEND_CART:
            {
                let newState = _extends({}, state);

                newState.cart = action.payload.cart_items;
                return newState;
            }

        case _types.TOGGLE_LEFT_MENU:
            {
                let newState = _extends({}, state);
                if (action.defaultVal) {
                    newState.toggleLeftMenu = action.toggle;
                } else {
                    newState.toggleLeftMenu = !newState.toggleLeftMenu;
                }

                newState.leftMenuOpenFirstTime = true;

                return newState;
            }

        case _types.UPCOMING_APPOINTMENTS:
            {
                let newState = _extends({}, state);
                newState.upcoming_appointments = action.payload;
                return newState;
            }

        case _types.IS_USER_CARED:
            {
                let newState = _extends({}, state);
                newState.isUserCared = action.payload;
                return newState;
            }

        case _types.SAVE_CHAT_FEEDBACK:
            {
                let newState = _extends({}, state);

                newState.chat_feedback = [].concat(newState.chat_feedback);

                newState.chat_feedback = newState.chat_feedback.filter(data => {
                    if (data.type && data.type.includes(action.ques)) {
                        return false;
                    }
                    return true;
                });

                newState.chat_feedback.push({ type: action.ques, data: action.data });
                return newState;
            }

        case _types.SUBMIT_CHAT_FEEDBACK:
            {
                let newState = _extends({}, state);

                newState.chat_feedback = {};
                return newState;
            }

        case _types.SAVE_CHAT_FEEDBACK_ROOMID:
            {
                let newState = _extends({}, state);

                newState.chat_feedback_roomId = action.payload;
                return newState;
            }

        case _types.SET_COMMON_UTM_TAGS:
            {
                let newState = _extends({}, state);
                newState.common_utm_tags = [].concat(newState.common_utm_tags);
                newState.common_utm_tags = newState.common_utm_tags.filter(x => {
                    if (x.type == action.actionType) {
                        return false;
                    }
                    return true;
                });
                let tags = _extends({}, action.payload);
                tags.type = action.actionType;
                newState.common_utm_tags.push(tags);
                return newState;
            }

        case _types.UNSET_COMMON_UTM_TAGS:
            {
                let newState = _extends({}, state);
                newState.common_utm_tags = newState.common_utm_tags.filter(x => x.type != action.actionType);
                return newState;
            }

        case _types.APPEND_ARTICLE_DATA:
            {
                let newState = _extends({}, state, {
                    articleData: _extends({}, state.articleData)
                });
                newState.articleData[action.payload.url] = action.payload;
                return newState;
            }

        case _types.GET_APP_DOWNLOAD_BANNER_LIST:
            {
                let newState = _extends({}, state);
                newState.app_download_list = action.payload && action.payload.length ? action.payload[0].data : [];
                return newState;
            }

        case _types.IPD_CHAT_START:
            {
                let newState = _extends({}, state);
                newState.ipd_chat = action.payload;
                return newState;
            }

        case _types.IPD_POPUP_FIRED:
            {
                let newState = _extends({}, state);
                newState.is_ipd_form_submitted = true;
                return newState;
            }

        case _types.USER_CITIES:
            {
                let newState = _extends({}, state);
                newState.user_cities = action.payload;
                return newState;
            }

        case _types.PHARMEASY_IFRAME:
            {
                let newState = _extends({}, state, {
                    iFrameUrls: [...state.iFrameUrls]
                });
                if (action.emptyUrls) {
                    newState.iFrameUrls = [];
                } else {
                    newState.iFrameUrls.push(action.url);
                }
                if (action.leftMenuClick) {
                    if (newState.iFrameUrls.includes('/order-medicine')) {
                        newState.iFrameUrls = newState.iFrameUrls.filter(x => x !== '/order-medicine');
                    }
                }
                return newState;
            }

        case _types.SET_CHAT_PAYMENT_STATUS:
            {
                let newState = _extends({}, state);
                newState.chatPaymentStatus = action.payload;
                newState.mobileVerificationDone = action.payload;
                return newState;
            }

        case _types.GET_REFRESH_NEW_TOKEN:
            {
                let newState = _extends({}, state);
                newState.refreshedToken = action.payload;
                return newState;
            }
        case _types.GET_REFER_AMOUNT:
            {
                let newState = _extends({}, state);
                if (action.payload && Object.keys(action.payload).length) {
                    newState.refer_amount = action.payload.referral_amt;
                } else {
                    newState.refer_amount = defaultState.refer_amount;
                }
                return newState;
            }
        case _types.SAVE_LOGIN_PHONE_NUMBER:
            {
                let newState = _extends({}, state);
                newState.user_loggedIn_number = action.payload;
                return newState;
            }

    }
    return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

const DUMMY_PROFILE = {
    gender: "m",
    id: 999999,
    is_default_user: true,
    name: "User",
    dob: null,
    isDummyUser: true,
    email: null
};

const defaultState = {
    profiles: {},
    appointments: {},
    address: [],
    defaultProfile: null,
    selectedProfile: null,
    notifications: [],
    newNotification: 0,
    userUpcomingAppointments: [],
    userTransactions: [],
    userWalletBalance: 0,
    healthTips: [],
    orderHistory: [],
    articles: [],
    chatDoctors: {},
    chatHistory: [],
    chatRoomIds: {},
    citiesName: [],
    articleList: [],
    articleListData: [],
    ARTICLE_LOADED: false,
    articlePageCount: 0,
    pageButtonCount: 0,
    currentRoomId: null,
    utm_tags: {},
    device_info: 'desktop',
    liveChatStarted: false,
    applicableCoupons: [],
    userPrescriptions: [],
    primaryMobile: 0,
    userName: '',
    unread_count: '',
    rated_appoinments: {},
    selectedSearchType: 'opd',
    testList: {},
    userCashbackBalance: 0,
    summary_utm: false,
    summary_utm_validity: null,
    offerList: null,
    cart: null,
    toggleLeftMenu: false,
    leftMenuOpenFirstTime: false,
    upcoming_appointments: [],
    is_login_user_insured: null,
    isUserCared: {},
    common_utm_tags: [],
    articleData: {},
    app_download_list: [],
    chat_feedback: [],
    chat_feedback_roomId: '',
    insurance_status: null,
    ipd_chat: false,
    is_ipd_form_submitted: false,
    user_cities: [],
    iFrameUrls: [],
    chatPaymentStatus: null,
    mobileVerificationDone: false,
    is_any_user_buy_gold: null,
    refreshedToken: null,
    refer_amount: null,
    user_loggedIn_number: null,
    user_detail_fetched: false
};

/***/ }),

/***/ "./dev/js/reducers/diagnosis/labSearchData.js":
/*!****************************************************!*\
  !*** ./dev/js/reducers/diagnosis/labSearchData.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = defaultState, action) {

    switch (action.type) {
        case _types.APPEND_LABS_SEARCH:
            {
                let newState = _extends({}, state);
                return action.payload.reduce((lapMap, lab) => {
                    lapMap[lab.id] = lapMap[lab.id] || {};
                    lapMap[lab.id] = lab;
                    return lapMap;
                }, newState);
            }

    }
    return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

const defaultState = {};

/***/ }),

/***/ "./dev/js/reducers/diagnosis/labs.js":
/*!*******************************************!*\
  !*** ./dev/js/reducers/diagnosis/labs.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = defaultState, action) {

    switch (action.type) {
        case _types.APPEND_LABS:
            {
                let newState = _extends({}, state);
                if (action.payload.removeTests && action.payload.labTest && action.payload.labTest.tests && action.payload.labTest.lab) {

                    newState[action.payload.labTest.lab.id] = _extends({}, action.payload.labTest);
                    newState[action.payload.labTest.lab.id].tests = newState[action.payload.labTest.lab.id].tests.filter(test => {
                        if (test.test.id == action.payload.test_id) {
                            return false;
                        }
                        return true;
                    });

                    return newState;
                } else {
                    return action.payload.reduce((lapMap, lab) => {
                        lapMap[lab.lab.id] = lapMap[lab.lab.id] || {};
                        lapMap[lab.lab.id] = _extends({}, lapMap[lab.lab.id], lab);
                        return lapMap;
                    }, newState);
                }
            }

    }
    return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

const defaultState = {};

/***/ }),

/***/ "./dev/js/reducers/diagnosis/labsSearch.js":
/*!*************************************************!*\
  !*** ./dev/js/reducers/diagnosis/labsSearch.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = defaultState, action) {

    switch (action.type) {

        case _types.TOGGLE_404:
            {
                let newState = _extends({}, state);
                newState.show404 = false;
                return newState;
            }

        case _types.LAB_SEARCH_START:
            {
                let newState = _extends({}, state);

                newState.LOADED_LABS_SEARCH = false;

                return newState;
            }

        case _types.LAB_SEARCH:
            {
                let newState = _extends({}, state, {
                    labList: [].concat(state.labList)
                });

                if (action.payload.page === 1) {
                    newState.labList = action.payload.result.map(lab => lab.id);
                } else {
                    let dedupe = {};
                    newState.labList = newState.labList.concat(action.payload.result.map(lab => lab.id)).filter(function (item) {
                        return dedupe.hasOwnProperty(item) ? false : dedupe[item] = true;
                    });
                }

                if (action.payload.page === 1 || newState.count == 0 && action.payload.count) {
                    newState.count = action.payload.count;
                }

                newState.LOADED_LABS_SEARCH = true;
                newState.curr_page = action.payload.page;
                newState.seoData = action.payload.seo;
                newState.test_data = action.payload.tests;
                newState.show404 = action.payload.show404 || false;
                return newState;
            }

        case _types.SELECT_LAB_TIME_SLOT:
            {
                let newState = _extends({}, state);

                if (action.payload.reschedule) {
                    newState.rescheduleSlot = _extends({}, action.payload.slot);
                }
                newState.selectedSlot = _extends({}, action.payload.slot);
                newState.selectedDateFormat = action.payload.dateParams;

                return newState;
            }

        case _types.SELECR_APPOINTMENT_TYPE_LAB:
            {
                let newState = _extends({}, state);
                newState.selectedAppointmentType = _extends({}, action.payload);
                return newState;
            }

        case _types.SELECT_USER_ADDRESS:
            {
                let newState = _extends({}, state);
                newState.selectedAddress = action.payload;
                return newState;
            }

        case _types.SET_SERVER_RENDER_LAB:
            {
                let newState = _extends({}, state);
                newState.SET_FROM_SERVER = action.payload;
                return newState;
            }

        case _types.ADD_LAB_COUPONS:
            {
                let newState = _extends({}, state, {
                    labCoupons: _extends({}, state.labCoupons)
                    /*
                                if(state.labCoupons[action.labId]){
                                    newState.labCoupons[action.labId] = [].concat(state.labCoupons[action.labId])
                                } else {
                                    newState.labCoupons[action.labId] = []
                                }*/
                });newState.labCoupons[action.labId] = [];
                newState.labCoupons[action.labId].push(action.payload);

                return newState;
            }

        case _types.REMOVE_LAB_COUPONS:
            {
                let newState = _extends({}, state, {
                    labCoupons: _extends({}, state.labCoupons)
                });
                if (action.couponId) {
                    newState.labCoupons[action.labId] = newState.labCoupons[action.labId].filter(coupon => {
                        coupon.coupon_id != action.couponId;
                    });
                }

                newState.disCountedLabPrice = 0;
                newState.couponAutoApply = false;
                return newState;
            }

        case _types.APPLY_LAB_COUPONS:
            {
                let newState = _extends({}, state);
                if (action.payload.status == 1) {
                    newState.disCountedLabPrice = parseInt(action.payload.discount);
                }

                return newState;
            }

        case _types.RESET_LAB_COUPONS:
            {
                let newState = _extends({}, state);
                newState.disCountedLabPrice = 0;

                return newState;
            }
        case _types.SEARCH_HEALTH_PACKAGES:
            {
                let newState = _extends({}, state, {
                    packagesList: _extends({}, state.packagesList)
                });
                if (action.page == 1) {
                    newState.packagesList = action.payload;
                } else {
                    newState.packagesList.result = newState.packagesList.result.concat(action.payload.result);
                }
                newState.LOADED_LABS_SEARCH = true;
                return newState;
            }
        case _types.SAVE_PRESCRIPTION:
            {
                let newState = _extends({}, state, {
                    user_prescriptions: [].concat(state.user_prescriptions)
                });
                if (newState.user_prescriptions.length > 0) {

                    let found = [];
                    newState.user_prescriptions = newState.user_prescriptions.filter(data => {

                        if (data.id == action.payload.id) {
                            found.push(data);
                            return false;
                        }
                        return true;
                    });

                    if (found) {
                        let data = Object.assign({}, found[0], action.payload);
                        newState.user_prescriptions.push(data);
                    } else {
                        newState.user_prescriptions.push(action.payload);
                    }
                } else {
                    newState.user_prescriptions.push(action.payload);
                }
                return newState;
            }
        case _types.DELETE_PRESCRIPTION:
            {
                let newState = _extends({}, state, {
                    user_prescriptions: [].concat(state.user_prescriptions)
                });
                let currentSelectedMember;
                if (newState.user_prescriptions && newState.user_prescriptions.length > 0) {
                    currentSelectedMember = newState.user_prescriptions;
                    let currentProofs = currentSelectedMember[0].img_path_ids.filter(x => x.image !== action.payload);
                    currentSelectedMember[0].img_path_ids = currentProofs;
                }
                newState.user_prescriptions = currentSelectedMember;
                return newState;
            }
        case _types.CLEAR_PRESCRIPTION:
            {
                let newState = _extends({}, state);
                newState.user_prescriptions = [];
                newState.is_prescription_needed = null;
                return newState;
            }
        case _types.SAVE_IS_PRESCRIPTION_NEED:
            {
                let newState = _extends({}, state);
                newState.is_prescription_needed = action.payload.prescription_needed;
                return newState;
            }

        case _types.CLEAR_LAB_COUPONS:
            {
                let newState = _extends({}, state);
                newState.labCoupons = {};
                return newState;
            }

        case _types.SHOW_RETAIL_VIP_CARD_LAB_SUMMARY:
            {
                let newState = _extends({}, state);
                newState.show_vip_non_login_card = action.payload;
                return newState;
            }

        case _types.SELECT_LAB_PAYMENT_TYPE:
            {
                let newState = _extends({}, state);
                newState.payment_type = action.payload;
                return newState;
            }

    }

    return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

const defaultState = {
    labList: [],
    count: 0,
    LOADED_LABS_SEARCH: false,
    selectedSlot: { time: {} },
    rescheduleSlot: { time: {} },
    selectedAppointmentType: {
        r_pickup: 'home',
        p_pickup: 'home'
    },
    selectedAddress: null,
    SET_FROM_SERVER: false,
    labCoupons: {},
    disCountedLabPrice: 0,
    couponAutoApply: true,
    curr_page: null,
    packagesList: [],
    seoData: {},
    test_data: [],
    show404: false,
    user_prescriptions: [],
    is_prescription_needed: null,
    selectedDateFormat: null,
    show_vip_non_login_card: false,
    payment_type: 6
};

/***/ }),

/***/ "./dev/js/reducers/diagnosis/searchCriteria.js":
/*!*****************************************************!*\
  !*** ./dev/js/reducers/diagnosis/searchCriteria.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = defaultState, action) {

    switch (action.type) {
        case _types.LOAD_SEARCH_CRITERIA_LAB:
            {
                let newState = _extends({}, state);
                if (action.payload) {
                    newState = _extends({}, newState, action.payload);
                }
                newState.LOADED_SEARCH_CRITERIA_LAB = true;
                return newState;
            }

        case _types.TOGGLE_DIAGNOSIS_CRITERIA:
            {
                let newState = _extends({}, state, {
                    selectedCriterias: [].concat(state.selectedCriterias),
                    lab_test_data: _extends({}, state.lab_test_data),
                    filterCriteria: _extends({}, state.filterCriteria),
                    nextFilterCriteria: _extends({}, state.nextFilterCriteria)
                });

                newState.filterCriteria.lab_name = "";
                newState.filterCriteria.network_id = "";

                newState.nextFilterCriteria.lab_name = "";
                newState.nextFilterCriteria.network_id = "";

                if (action.payload.forceAddTestids) {
                    let forcedAddedTests = [];
                    newState.lab_test_data[action.payload.labId] = [];
                    action.payload.tests.map(x => {
                        forcedAddedTests.push({ extra_test: true, id: x.test.id, lab_id: action.payload.labId, name: x.test.name, type: 'test', url: x.test.url, hide_price: x.hide_price || false });
                    });
                    newState.lab_test_data[action.payload.labId] = forcedAddedTests;
                } else if (action.payload.criteria.extra_test && action.payload.criteria.lab_id) {
                    newState.lab_test_data[action.payload.criteria.lab_id] = newState.lab_test_data[action.payload.criteria.lab_id] || [];

                    newState.currentLabSelectedTests = newState.currentLabSelectedTests || [];

                    let found = false;
                    let foundTest = false;
                    newState.lab_test_data[action.payload.criteria.lab_id] = newState.lab_test_data[action.payload.criteria.lab_id].filter(curr => {
                        if (curr.id == action.payload.criteria.id && curr.type == action.payload.type) {
                            found = true;
                            return false;
                        }
                        return true;
                    });

                    if (!found || action.payload.forceAdd) {
                        newState.lab_test_data[action.payload.criteria.lab_id].push(_extends({}, action.payload.criteria, {
                            type: action.payload.type
                        }));
                    }

                    if (action.payload.criteria.add_to_common) {
                        newState.currentLabSelectedTests.map((curr, key) => {
                            if (curr.id == action.payload.criteria.id && curr.type == action.payload.type) {
                                curr.is_selected = !curr.is_selected;
                            }
                        });
                    }
                } else {
                    let found = false;
                    newState.selectedCriterias = newState.selectedCriterias.filter(curr => {
                        if (curr.id == action.payload.criteria.id && curr.type == action.payload.type) {
                            found = true;
                            return false;
                        }
                        return true;
                    });

                    if (action.payload.forceAdd) {
                        newState.selectedCriterias = [_extends({}, action.payload.criteria, {
                            type: action.payload.type
                        })];
                        newState.nextSelectedCriterias = [_extends({}, action.payload.criteria, {
                            type: action.payload.type
                        })];
                        newState.currentSearchedCriterias = [_extends({}, action.payload.criteria, {
                            type: action.payload.type
                        })];
                    } else if (!found) {
                        newState.selectedCriterias.push(_extends({}, action.payload.criteria, {
                            type: action.payload.type
                        }));
                        newState.nextSelectedCriterias.push(_extends({}, action.payload.criteria, {
                            type: action.payload.type
                        }));
                        newState.currentSearchedCriterias.push(_extends({}, action.payload.criteria, {
                            type: action.payload.type
                        }));
                    }
                    newState.fetchNewResults = true;
                }

                return newState;
            }

        case _types.SELECT_LOCATION_DIAGNOSIS:
            {
                let newState = _extends({}, state);

                newState.selectedLocation = action.payload;
                if (action.range == 'autoComplete') {
                    newState.locationType = 'autoComplete';
                } else if (action.range == 'autoDetect') {
                    newState.locationType = 'autoDetect';
                } else if (action.range == 'geoip') {
                    newState.locationType = 'geoip';
                } else {
                    newState.locationType = 'geo';
                }
                newState.fetchNewResults = !!action.fetchNewResults;

                return newState;
            }

        case _types.MERGE_SEARCH_STATE_LAB:
            {
                let newState = _extends({}, state, action.payload, {
                    fetchNewResults: !!action.fetchNewResults
                });

                let extra_tests = state.currentSearchedCriterias.filter(x => x.extra_test) || [];
                newState.currentSearchedCriterias = newState.currentSearchedCriterias || [];
                newState.currentSearchedCriterias = newState.currentSearchedCriterias.concat(extra_tests);
                return newState;
            }

        case _types.MERGE_SEARCH_STATE_OPD:
            {
                let newState = _extends({}, state);

                if (action.payload.selectedLocation) {
                    newState.selectedLocation = action.payload.selectedLocation;
                }

                return newState;
            }

        case _types.RESET_FILTER_STATE:
            {
                let newState = _extends({}, state);
                newState.filterCriteria = DEFAULT_FILTER_STATE;
                newState.nextFilterCriteria = DEFAULT_FILTER_STATE;
                newState.filterCriteriaPackages = DEFAULT_FILTER_STATE_PACKAGES;
                newState.filterCriteriaPackages.catIds = [];
                // newState.fetchNewResults = true
                return newState;
            }

        case _types.CLEAR_EXTRA_TESTS:
            {
                let newState = _extends({}, state, {
                    selectedCriterias: [].concat(state.selectedCriterias),
                    lab_test_data: {},
                    currentLabSelectedTests: [],
                    currentSearchedCriterias: []
                });

                newState.selectedCriterias = newState.selectedCriterias.filter(x => {
                    return !x.extra_test;
                });
                return newState;
            }

        case _types.CLEAR_ALL_TESTS:
            {
                let newState = _extends({}, state, {
                    selectedCriterias: [],
                    lab_test_data: {},
                    nextSelectedCriterias: []
                });

                return newState;
            }

        case _types.SET_FETCH_RESULTS_LAB:
            {
                let newState = _extends({}, state);
                newState.fetchNewResults = !!action.payload;
                return newState;
            }

        case _types.SET_CORPORATE_COUPON:
            {
                let newState = _extends({}, state);
                newState.corporateCoupon = action.payload;
                return newState;
            }

        case _types.SAVE_CURRENT_LAB_PROFILE_TESTS:
            {
                let newState = _extends({}, state);
                let selectedTestsId = [];

                if (action.payload.tests && action.forceAdd) {
                    newState.currentLabSelectedTests = [];
                    action.payload.tests.map((test_to_toggle, i) => {

                        let test = Object.assign({}, test_to_toggle);
                        test.mrp = test_to_toggle.mrp;
                        test.deal_price = test_to_toggle.deal_price;
                        test.extra_test = true;
                        test.id = test_to_toggle.test.id;
                        test.name = test_to_toggle.test.name;
                        test.pre_test_info = test_to_toggle.test.pre_test_info;
                        test.why = test_to_toggle.test.why;
                        test.type = 'test';
                        test.lab_id = action.payload.lab.id;
                        test.is_selected = true;
                        newState.currentLabSelectedTests.push(test);
                        selectedTestsId.push(test_to_toggle.test.id);
                    });
                    if (newState.currentLabSelectedTests.length < 5) {
                        action.payload.lab_tests.map((test_to_toggle, i) => {
                            if (selectedTestsId.indexOf(test_to_toggle.test_id) == -1 && newState.currentLabSelectedTests.length < 5) {

                                let test = Object.assign({}, test_to_toggle);
                                test.mrp = test_to_toggle.mrp;
                                test.deal_price = test_to_toggle.deal_price;
                                test.extra_test = true;
                                test.id = test_to_toggle.test.id;
                                test.name = test_to_toggle.test.name;
                                test.pre_test_info = test_to_toggle.test.pre_test_info;
                                test.why = test_to_toggle.test.why;
                                test.type = 'test';
                                test.lab_id = action.payload.lab.id;
                                test.is_selected = false;
                                test.test = test_to_toggle.test;
                                newState.currentLabSelectedTests.push(test);
                            }
                        });
                    }
                } else {}
                return newState;
            }
        case _types.SEARCH_TEST_INFO:
            {
                let newState = _extends({}, state);
                newState.searchTestInfoData = action.payload;
                return newState;
            }

        case _types.SET_LAB_SEARCH_ID:
            {
                let newState = _extends({}, state, {
                    selectedCriterias: [...state.selectedCriterias],
                    search_id_data: _extends({}, state.search_id_data)
                });

                if (!newState.last_save_searched_date) {
                    newState.last_save_searched_date = new Date();
                }

                newState.search_id_data[action.searchId] = {};
                newState.search_id_data[action.searchId].commonSelectedCriterias = action.payload.commonSelectedCriterias;
                newState.search_id_data[action.searchId].filterCriteria = action.payload.filterCriteria;
                newState.search_id_data[action.searchId].data = {};
                newState.search_id_data[action.searchId].page = action.page;
                newState.currentSearchedCriterias = action.payload.commonSelectedCriterias;
                newState.nextSelectedCriterias = [];
                newState.nextFilterCriteria = DEFAULT_FILTER_STATE;
                newState.filterCriteria = action.payload.filterCriteria;
                newState.currentSearchId = action.searchId;
                newState.fetchNewResults = true;
                newState.page = action.page;

                return newState;
            }

        case _types.GET_LAB_SEARCH_ID_RESULTS:
            {
                let newState = _extends({}, state);
                if (newState.search_id_data && newState.search_id_data[action.searchId]) {
                    newState.currentSearchedCriterias = newState.search_id_data[action.searchId].commonSelectedCriterias;
                    newState.filterCriteria = newState.search_id_data[action.searchId].filterCriteria;
                    newState.currentSearchId = action.searchId;
                    newState.nextSelectedCriterias = [];
                    newState.nextFilterCriteria = DEFAULT_FILTER_STATE;
                }
                return newState;
            }

        case _types.SAVE_LAB_RESULTS_WITH_SEARCHID:
            {
                let newState = _extends({}, state, {
                    search_id_data: _extends({}, state.search_id_data)
                });
                if (newState.search_id_data && newState.search_id_data[newState.currentSearchId]) {
                    newState.search_id_data[newState.currentSearchId] = Object.assign({}, newState.search_id_data[newState.currentSearchId]);
                    if (action.page == 1) {

                        newState.search_id_data[newState.currentSearchId].data = action.payload;
                    } else if (newState.search_id_data[newState.currentSearchId].data) {
                        if (Object.values(newState.search_id_data[newState.currentSearchId].data).length && newState.search_id_data[newState.currentSearchId].data.result) {

                            newState.search_id_data[newState.currentSearchId].data.result = newState.search_id_data[newState.currentSearchId].data.result.concat(action.payload.result);
                        } else {
                            newState.search_id_data[newState.currentSearchId].data = action.payload;
                        }
                    }
                }

                return newState;
            }

        case _types.SET_LAB_URL_PAGE:
            {
                let newState = _extends({}, state);
                newState.page = action.payload;
                return newState;
            }

        case _types.SAVE_PINCODE:
            {
                let newState = _extends({}, state);
                newState.pincode = action.payload;
                return newState;
            }
        case _types.TOGGLE_PACKAGE_ID:
            {
                let newState = _extends({}, state, {
                    filterCriteriaPackages: _extends({}, state.filterCriteriaPackages)
                });

                if (newState.filterCriteriaPackages) {
                    newState.filterCriteriaPackages.package_ids = [];
                    newState.filterCriteriaPackages.package_ids.push(action.package_id);
                    // if (action.isHomePage) {
                    //     newState.filterCriteriaPackages.package_ids.push(action.package_id);
                    // } else {
                    //     newState.filterCriteriaPackages.package_ids = action.package_id
                    // }
                }
                return newState;
            }

        case _types.TOGGLE_SEARCH_PACKAGES:
            {
                let newState = _extends({}, state, {
                    selectedPackages: [].concat(state.selectedPackages)
                });
                if (action.healthPackage) {
                    let ids = newState.selectedPackages.filter(x => x.id == action.healthPackage.id);
                    if (ids.length) {
                        newState.selectedPackages = newState.selectedPackages.filter(x => x.id != action.healthPackage.id);
                    } else {
                        newState.selectedPackages.push(action.healthPackage);
                    }
                }
                return newState;
            }

        case _types.CLEAR_LAB_SEARCH_ID:
            {
                let newState = _extends({}, state);
                if (newState.last_save_searched_date) {
                    const date1 = new Date();
                    const date2 = new Date(newState.last_save_searched_date);
                    const diffTime = Math.abs(date1.getTime() - date2.getTime());
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    if (diffDays > 2) {
                        newState.search_id_data = {};
                        newState.last_save_searched_date = null;
                    }
                }
                return newState;
            }

        case _types.TOGGLE_COMPARE_PACKAGE:
            {
                let newState = _extends({}, state, {
                    compare_packages: [].concat(state.compare_packages)
                });

                let selected_packages = [].concat(newState.compare_packages);
                let found = false;
                if (action.reset) {
                    newState.compare_packages = action.payload.criteria;
                } else {
                    selected_packages = selected_packages.filter(x => {
                        if (x.id == action.payload.criteria.id && x.lab_id == action.payload.criteria.lab_id) {
                            found = true;
                            return false;
                        }
                        return true;
                    });
                    if (!found) {
                        selected_packages.push(action.payload.criteria);
                    }
                    newState.compare_packages = selected_packages;
                }
                return newState;
            }

        case _types.RESET_COMPARE_STATE:
            {
                let newState = _extends({}, state);
                newState.compare_packages = defaultState.compare_packages;
                return newState;
            }

        case _types.SAVE_PATIENT_DETAILS:
            {
                let newState = _extends({}, state);
                newState.saved_patient_details = action.payload.criteria;
                return newState;
            }

        case _types.CLEAR_SAVED_PATIENT_DETAILS:
            {
                // IN CASE OF BOOKING SUMMARY USER
                let newState = _extends({}, state);
                newState.saved_patient_details = {};
                return newState;
            }

    }
    return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

// const moment = require('moment');

const DEFAULT_FILTER_STATE = {
    //priceRange: [0, 20000],
    //distanceRange: [0, 15],
    sort_on: '',
    sort_order: '',
    avg_rating: '',
    availability: [],
    home_visit: false,
    lab_visit: false,
    lab_name: "",
    network_id: "",
    is_insured: false
};

const DEFAULT_FILTER_STATE_PACKAGES = {
    /*priceRange: [0, 20000],
    distanceRange: [0, 15],
    */
    sort_on: '',
    sort_order: '',
    avg_rating: '',
    home_visit: false,
    lab_visit: false,
    lab_name: "",
    network_id: "",
    catIds: [],
    max_age: '',
    min_age: '',
    gender: '',
    packageType: '',
    test_ids: '',
    selectCatIDs: [],
    package_ids: []
};

const defaultState = {
    LOADED_SEARCH_CRITERIA_LAB: false,
    common_tests: [],
    common_conditions: [],
    common_package: [],
    preferred_labs: [],
    selectedCriterias: [],
    selectedLocation: null,
    filterCriteria: DEFAULT_FILTER_STATE,
    lab_test_data: {},
    locationType: 'geo',
    fetchNewResults: false,
    corporateCoupon: "",
    currentLabSelectedTests: [],
    searchTestInfoData: {},
    page: 1,
    search_id_data: {},
    nextSelectedCriterias: [],
    currentSearchedCriterias: [],
    currentSearchId: '',
    nextFilterCriteria: DEFAULT_FILTER_STATE,
    pincode: null,
    filterCriteriaPackages: DEFAULT_FILTER_STATE_PACKAGES,
    recommended_package: [],
    last_save_searched_date: null,
    selectedPackages: [],
    compare_packages: [],
    saved_patient_details: {}
};

/***/ }),

/***/ "./dev/js/reducers/index.js":
/*!**********************************!*\
  !*** ./dev/js/reducers/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxPersist = __webpack_require__(/*! redux-persist */ "redux-persist");

var _storage = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");

var _storage2 = _interopRequireDefault(_storage);

var _searchCriteria = __webpack_require__(/*! ./opd/searchCriteria.js */ "./dev/js/reducers/opd/searchCriteria.js");

var _searchCriteria2 = _interopRequireDefault(_searchCriteria);

var _searchCriteria3 = __webpack_require__(/*! ./diagnosis/searchCriteria.js */ "./dev/js/reducers/diagnosis/searchCriteria.js");

var _searchCriteria4 = _interopRequireDefault(_searchCriteria3);

var _doctors = __webpack_require__(/*! ./opd/doctors.js */ "./dev/js/reducers/opd/doctors.js");

var _doctors2 = _interopRequireDefault(_doctors);

var _hospitals = __webpack_require__(/*! ./opd/hospitals.js */ "./dev/js/reducers/opd/hospitals.js");

var _hospitals2 = _interopRequireDefault(_hospitals);

var _doctorProfiles = __webpack_require__(/*! ./opd/doctorProfiles.js */ "./dev/js/reducers/opd/doctorProfiles.js");

var _doctorProfiles2 = _interopRequireDefault(_doctorProfiles);

var _doctorSearch = __webpack_require__(/*! ./opd/doctorSearch.js */ "./dev/js/reducers/opd/doctorSearch.js");

var _doctorSearch2 = _interopRequireDefault(_doctorSearch);

var _labs = __webpack_require__(/*! ./diagnosis/labs.js */ "./dev/js/reducers/diagnosis/labs.js");

var _labs2 = _interopRequireDefault(_labs);

var _labsSearch = __webpack_require__(/*! ./diagnosis/labsSearch.js */ "./dev/js/reducers/diagnosis/labsSearch.js");

var _labsSearch2 = _interopRequireDefault(_labsSearch);

var _user = __webpack_require__(/*! ./commons/user.js */ "./dev/js/reducers/commons/user.js");

var _user2 = _interopRequireDefault(_user);

var _auth = __webpack_require__(/*! ./commons/auth.js */ "./dev/js/reducers/commons/auth.js");

var _auth2 = _interopRequireDefault(_auth);

var _siteMap = __webpack_require__(/*! ./commons/siteMap.js */ "./dev/js/reducers/commons/siteMap.js");

var _siteMap2 = _interopRequireDefault(_siteMap);

var _labSearchData = __webpack_require__(/*! ./diagnosis/labSearchData.js */ "./dev/js/reducers/diagnosis/labSearchData.js");

var _labSearchData2 = _interopRequireDefault(_labSearchData);

var _elasticSearch = __webpack_require__(/*! ./commons/elasticSearch.js */ "./dev/js/reducers/commons/elasticSearch.js");

var _elasticSearch2 = _interopRequireDefault(_elasticSearch);

var _insuranceCriteria = __webpack_require__(/*! ./insurance/insuranceCriteria.js */ "./dev/js/reducers/insurance/insuranceCriteria.js");

var _insuranceCriteria2 = _interopRequireDefault(_insuranceCriteria);

var _searchCriteria5 = __webpack_require__(/*! ./ipd/searchCriteria.js */ "./dev/js/reducers/ipd/searchCriteria.js");

var _searchCriteria6 = _interopRequireDefault(_searchCriteria5);

var _vipClubCriteria = __webpack_require__(/*! ./vipClub/vipClubCriteria.js */ "./dev/js/reducers/vipClub/vipClubCriteria.js");

var _vipClubCriteria2 = _interopRequireDefault(_vipClubCriteria);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const persistConfig = {
    key: 'root',
    storage: _storage2.default,
    whitelist: []
};

const DOCTOR_LIST_PRESIST = {
    key: 'DOCTOR_SEARCH',
    storage: _storage2.default,
    whitelist: ['selectedSlot', 'rescheduleSlot', 'selectedDoctorProcedure', 'commonProfileSelectedProcedures', 'payment_type', 'selectedDateFormat', 'doctorCoupons']
};

const LAB_LIST_PRESIST = {
    key: 'LAB_SEARCH',
    storage: _storage2.default,
    whitelist: ['selectedSlot', 'rescheduleSlot', 'selectedAppointmentType', 'selectedAddress', 'user_prescriptions', 'is_prescription_needed', 'selectedDateFormat', 'labCoupons', 'payment_type']
};

const USER_PERSIST = {
    key: 'USER',
    storage: _storage2.default,
    whitelist: ['summary_utm_validity', 'summary_utm', 'chatDoctors', 'chatRoomIds', 'currentRoomId', 'liveChatStarted', 'userPhoneNo', 'selectedSearchType', 'common_utm_tags', 'app_download_list', 'ipd_chat', 'user_cities', 'iFrameUrls', 'chatPaymentStatus', 'defaultProfile', 'profiles', 'mobileVerificationDone', 'user_loggedIn_number']
};

const OPD_SEARCH_PERSIST = {
    key: 'SEARCH_CRITERIA_OPD',
    storage: _storage2.default,
    blacklist: ['fetchNewResults', 'getNewUrl', 'commonProcedurers', 'page', 'mergeUrlState', 'specializations', 'commonSelectedCriterias', 'common_settings', 'nearbyHospitals']
};

const LAB_SEARCH_PERSIST = {
    key: 'SEARCH_CRITERIA_LABS',
    storage: _storage2.default,
    blacklist: ['fetchNewResults', 'page', 'common_tests', 'common_package', 'currentSearchedCriterias', 'filterCriteriaPackages']
};

const AUTH_PERSIST = {
    key: 'AUTH',
    storage: _storage2.default,
    whitelist: []
};

const INSURANCE_LIST_PRESIST = {
    key: 'INSURANCE',
    storage: _storage2.default,
    whitelist: ['insurnaceData', 'self_data_values', 'selected_plan', 'currentSelectedInsuredMembersId', 'create_payment_resp', 'members_proofs', 'insurer_bank_details', 'avail_now_data', 'cancel_reason']
};
const VIP_CLUB_CRITERIA_PRESIST = {
    key: 'VIPCLUB',
    storage: _storage2.default,
    whitelist: ['vipClubList', 'selected_vip_plan', 'vipClubMemberDetails', 'currentSelectedVipMembersId', 'LOAD_VIP_CLUB_DASHBOARD', 'vip_club_db_data', 'members_proofs', 'showVipDetailsView', 'savedMemberData', 'odpGoldPredictedPrice', 'labGoldPredictedPrice', 'vipCoupons', 'selected_digit_plan', 'currentSelectedDigitMembersId', 'digitPlans', 'digit_self_details']
};
const IPD_SEARCH_PERSIST = {
    key: 'SEARCH_CRITERIA_IPD',
    storage: _storage2.default,
    blacklist: ['page', 'getNewResults', 'fetchNewResults', 'locationFetched', 'HOSPITAL_DETAIL_LOADED', 'IPD_INFO_LOADED', 'ipd_hospital_detail_info', 'ipdPopupData', 'hospital_list']
};

const allReducers = (0, _redux.combineReducers)({
    SEARCH_CRITERIA_OPD: (0, _reduxPersist.persistReducer)(OPD_SEARCH_PERSIST, _searchCriteria2.default),
    SEARCH_CRITERIA_LABS: (0, _reduxPersist.persistReducer)(LAB_SEARCH_PERSIST, _searchCriteria4.default),
    DOCTORS: _doctors2.default,
    HOSPITALS: _hospitals2.default,
    DOCTOR_SEARCH: (0, _reduxPersist.persistReducer)(DOCTOR_LIST_PRESIST, _doctorSearch2.default),
    LABS: _labs2.default,
    LAB_SEARCH: (0, _reduxPersist.persistReducer)(LAB_LIST_PRESIST, _labsSearch2.default),
    USER: (0, _reduxPersist.persistReducer)(USER_PERSIST, _user2.default),
    AUTH: (0, _reduxPersist.persistReducer)(AUTH_PERSIST, _auth2.default),
    SITE_MAP: _siteMap2.default,
    DOCTOR_PROFILES: _doctorProfiles2.default,
    LAB_SEARCH_DATA: _labSearchData2.default,
    ELASTIC_SEARCH: _elasticSearch2.default,
    INSURANCE: (0, _reduxPersist.persistReducer)(INSURANCE_LIST_PRESIST, _insuranceCriteria2.default),
    SEARCH_CRITERIA_IPD: (0, _reduxPersist.persistReducer)(IPD_SEARCH_PERSIST, _searchCriteria6.default),
    VIPCLUB: (0, _reduxPersist.persistReducer)(VIP_CLUB_CRITERIA_PRESIST, _vipClubCriteria2.default)
});

const persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, allReducers);

exports.default = persistedReducer;

/***/ }),

/***/ "./dev/js/reducers/insurance/insuranceCriteria.js":
/*!********************************************************!*\
  !*** ./dev/js/reducers/insurance/insuranceCriteria.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = defaultState, action) {

    switch (action.type) {
        case _types.GET_INSURANCE:
            {
                let newState = _extends({}, state);
                if (Object.keys(action.payload).length > 0) {
                    newState.insurnaceData = action.payload;
                    if (action.payload.certificate) {
                        newState.LOAD_INSURANCE = false;
                    } else {
                        if (action.payload.insurance[0].plans && action.payload.insurance[0].plans.length > 0) {
                            if (Object.keys(newState.selected_plan).length == 0) {
                                newState.selected_plan = action.payload.insurance[0].plans.filter(x => x.is_selected);
                                if (newState.selected_plan.length) {
                                    newState.selected_plan = newState.selected_plan[0];
                                }
                                // newState.selected_plan[0].plan_name = action.payload.insurance[0].name
                                // newState.selected_plan[0].logo = action.payload.insurance[0].logo
                                // newState.selected_plan[0].insurer_document = action.payload.insurance[0].insurer_document
                                // newState.selected_plan[0].insurer = action.payload.insurance[0].id
                                // newState.selected_plan[0].stateData = action.payload.state
                            }
                            newState.LOAD_INSURANCE = true;
                        }
                    }
                } else {
                    newState.insurnaceData = action.payload;
                }
                return newState;
            }
        case _types.SELECT_INSURANCE_PLAN:
            {
                let newState = _extends({}, state, {
                    select_plan: _extends({}, state.select_plan)
                });
                newState.selected_plan = action.payload.selected_plan;
                return newState;
            }
        case _types.APPEND_USER_PROFILES:
            {
                let newState = _extends({}, state, {
                    profiles: _extends({}, state.profiles)
                });
                if (action.payload && action.payload.length == 0) {
                    action.payload.push(DUMMY_PROFILE);
                } else {
                    if (newState.profiles[DUMMY_PROFILE.id]) {
                        delete newState.profiles[DUMMY_PROFILE.id];
                        newState.selectedProfile = null;
                    }
                }

                newState.profiles = action.payload.reduce((profileMap, profile) => {
                    if (profile.is_default_user) {
                        if (!newState.selectedProfile) {
                            newState.selectedProfile = profile.id;
                            newState.primaryMobile = profile.phone_number;
                            newState.userName = profile.name;
                        }
                        newState.defaultProfile = profile.id;
                    }
                    profileMap[profile.id] = profile;
                    return profileMap;
                }, newState.profiles);

                if (!newState.selectedProfile && action.payload.length) {
                    newState.selectedProfile = action.payload[0].id;
                }

                if (!newState.defaultProfile && action.payload.length) {
                    newState.defaultProfile = action.payload[0].id;
                }

                return newState;
            }
        case _types.SELF_DATA:
            {
                let newState = _extends({}, state, {
                    self_data_values: _extends({}, state.self_data_values)
                });
                return action.self_data_values.reduce((selfData, selfProfile) => {
                    if (newState.self_data_values[selfProfile.id]) {
                        newState.self_data_values[selfProfile.id] = Object.assign({}, selfData[selfProfile.id], selfProfile);
                    } else {
                        newState.self_data_values[selfProfile.id] = _extends({}, selfProfile);
                    }
                    return newState;
                }, newState);
            }
        case _types.INSURANCE_PAY:
            {
                let newState = _extends({}, state, {
                    create_payment_resp: _extends({}, state.create_payment_resp)
                });
                newState.create_payment_resp = action.payload;
                return newState;
            }
        case _types.SELECT_PROFILE:
            {
                let newState = _extends({}, state, {
                    self_data_values: _extends({}, state.self_data_values),
                    currentSelectedInsuredMembersId: [].concat(state.currentSelectedInsuredMembersId)
                });
                newState.self_data_values[action.payload.newProfileid] = {};
                newState.self_data_values[action.payload.newProfileid] = action.payload.newProfile;
                newState.currentSelectedInsuredMembersId.map((val, key) => {
                    if (parseInt(key) == parseInt(action.payload.param_id)) {
                        newState.currentSelectedInsuredMembersId[key][action.payload.param_id] = action.payload.newProfileid;
                    }
                });

                return newState;
            }
        case _types.INSURE_MEMBER_LIST:
            {
                let newState = _extends({}, state, {
                    insured_member_list: _extends({}, state.insured_member_list)
                });
                newState.insured_member_list = action.payload;
                return newState;
            }
        case _types.UPDATE_MEMBER_LIST:
            {
                let newState = _extends({}, state, {
                    member_list_updated: _extends({}, state.member_list_updated)
                });
                newState.member_list_updated = action.payload;
                return newState;
            }
        case _types.INSURED_PROFILE:
            {
                let newState = _extends({}, state, {
                    get_insured_profile: _extends({}, state.get_insured_profile)
                });
                newState.get_insured_profile = action.payload;
                return newState;
            }
        case _types.SAVE_CURRENT_INSURED_MEMBERS:
            {
                let newState = _extends({}, state);
                newState.currentSelectedInsuredMembersId = action.payload;
                return newState;
            }
        case _types.RESET_CURRENT_INSURED_MEMBERS:
            {
                let newState = _extends({}, state);
                let currentSelectedMembers = {};
                let currentSelectedProfiles = [];
                newState.currentSelectedInsuredMembersId.map((val, key) => {
                    currentSelectedProfiles.push(val[key]);
                });
                Object.values(newState.self_data_values).map((member, key) => {
                    if (currentSelectedProfiles.indexOf(member.id) != -1) {
                        currentSelectedMembers[member.id] = {};
                        currentSelectedMembers[member.id] = member;
                    }
                });
                newState.self_data_values = currentSelectedMembers;
                return newState;
            }
        case _types.RESET_INSURED_PLANS:
            {
                let newState = _extends({}, state);
                newState.currentSelectedInsuredMembersId = [];
                return newState;
            }
        case _types.CLEAR_INSURANCE:
            {
                let newState = _extends({}, state);
                newState.self_data_values = {};
                newState.selected_plan = {};
                newState.currentSelectedInsuredMembersId = [];
                newState.members_proofs = [];
                return newState;
            }
        case _types.RESET_INSURED_DATA:
            {
                let newState = _extends({}, state);
                let user_selected_plan = newState.insurnaceData.insurance[0].plans.filter(x => x.id == action.payload.selected_plan_id);
                let members = {};
                newState.selected_plan = user_selected_plan[0];
                newState.currentSelectedInsuredMembersId = action.payload.currentSelectedInsuredMembersId;
                action.payload.members.map((result, i) => {
                    members[result.id] = _extends({}, result);
                });
                newState.self_data_values = members;
                return newState;
            }
        case _types.SAVE_INSURANCE_BANK_DETAILS:
            {
                let newState = _extends({}, state);
                newState.insurer_bank_details = action.payload;
                return newState;
            }
        case _types.ENDORSED_MEMBER_LIST:
            {
                let newState = _extends({}, state);
                newState.endorsed_member_data.members = action.payload.members;
                return newState;
            }
        case _types.SAVE_MEMBER_PROOFS:
            {
                let newState = _extends({}, state, {
                    members_proofs: [].concat(state.members_proofs)
                });
                if (newState.members_proofs.length > 0) {

                    let found = [];
                    newState.members_proofs = newState.members_proofs.filter(data => {

                        if (data.id == action.payload.id) {
                            found.push(data);
                            return false;
                        }
                        return true;
                    });

                    if (found) {
                        let data = Object.assign({}, found[0], action.payload);
                        newState.members_proofs.push(data);
                    } else {
                        newState.members_proofs.push(action.payload);
                    }
                } else {
                    newState.members_proofs.push(action.payload);
                }
                return newState;
            }
        case _types.DELETE_MEMBER_PROOF:
            {
                let newState = _extends({}, state);

                let currentSelectedMember = null;
                newState.members_proofs = newState.members_proofs.filter(member => {

                    if (member.id == action.payload.member_id) {
                        currentSelectedMember = member;
                        return false;
                    }
                    return true;
                });

                if (currentSelectedMember) {
                    let currentProofs = currentSelectedMember.img_path_ids.filter(x => x.id !== action.payload.id);
                    currentSelectedMember.img_path_ids = currentProofs;
                }

                newState.members_proofs.push(_extends({}, currentSelectedMember));
                return newState;
            }
        case _types.SAVE_AVAIL_NOW_INSURANCE:
            {
                let newState = _extends({}, state);

                newState.avail_now_data = action.payload;
                return newState;
            }

        case _types.CLEAR_AVAIL_NOW_INSURANCE:
            {
                let newState = _extends({}, state);

                newState.avail_now_data = null;
                return newState;
            }

        case _types.CANCEL_REASON_INSURANCE:
            {
                let newState = _extends({}, state);

                newState.cancel_reason = action.payload;
                return newState;
            }
        case _types.CLEAR_BANK_DETAILS_INSURANCE:
            {

                let newState = _extends({}, state);

                newState.cancel_reason = defaultState.cancel_reason;
                newState.insurer_bank_details = defaultState.insurer_bank_details;
                console.log(newState);
                return newState;
            }
    }
    return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

const defaultState = {
    insurnaceData: {},
    selected_plan: {},
    self_data_values: {},
    create_payment_resp: {},
    members_data_value: {},
    insured_member_list: {},
    member_list_updated: {},
    get_insured_profile: {},
    endorsed_member_data: {},
    LOAD_INSURANCE: false,
    currentSelectedInsuredMembersId: [],
    insurer_bank_details: {},
    members_proofs: [],
    avail_now_data: null,
    cancel_reason: null
};
const DUMMY_PROFILE = {
    gender: "m",
    id: 999999,
    is_default_user: true,
    name: "User",
    dob: new Date(),
    isDummyUser: true,
    email: null
};

/***/ }),

/***/ "./dev/js/reducers/ipd/searchCriteria.js":
/*!***********************************************!*\
  !*** ./dev/js/reducers/ipd/searchCriteria.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = defaultState, action) {

	switch (action.type) {

		case _types.TOGGLE_IPD:
			{
				let newState = _extends({}, state, {
					selectedCriterias: [],
					commonSelectedCriterias: [],
					nextSelectedCriterias: []
				});
				if (action.forceAdd) {
					if (action.payload.length) {
						newState.selectedCriterias.push(_extends({}, action.payload));
						newState.commonSelectedCriterias.push(_extends({}, action.payload));
						newState.nextSelectedCriterias.push(_extends({}, action.payload));
					} else {
						newState.selectedCriterias = [];
						newState.commonSelectedCriterias = [];
						newState.nextSelectedCriterias = [];
					}
				} else {
					let found = false;
					newState.selectedCriterias = newState.selectedCriterias.filter(ipd => {
						if (ipd.id == action.payload.id) {
							found = true;
							return false;
						}
						return true;
					});

					if (!found) {
						newState.selectedCriterias.push(action.payload);
					}
				}

				return newState;
			}

		case _types.LOADED_IPD_INFO:
			{
				let newState = _extends({}, state);
				newState.IPD_INFO_LOADED = true;
				if (action.payload && action.payload.about && action.payload.about.id) {
					newState.commonSelectedCriterias = [{ 'id': action.payload.about.id, 'name': action.payload.about.name }];
				}
				newState.ipd_info = action.payload;
				return newState;
			}

		case _types.GET_IPD_HOSPITALS:
			{
				let newState = _extends({}, state, {
					hospital_list: [].concat(state.hospital_list),
					HOSPITAL_DATA: _extends({}, state.HOSPITAL_DATA)
				});
				newState.hospital_search_results = {
					insurance_providers: action.payload.health_insurance_providers || [],
					count: action.payload.count || 0
				};

				newState.getNewResults = false;
				newState.fetchNewResults = false;
				newState.HOSPITAL_SEARCH_DATA_LOADED = true;

				if (action.payload) {

					newState.hospitalSearchSeoData = action.payload.seo ? action.payload.seo : null;
					newState.hospitalCanonicalUrl = action.payload.canonical_url ? action.payload.canonical_url : null;
					newState.hospitalBreadcrumb = action.payload.breadcrumb ? action.payload.breadcrumb : [];

					newState.hospital_bottom_content = action.payload.bottom_content ? action.payload.bottom_content : null;
					newState.hospital_search_content = action.payload.search_content ? action.payload.search_content : null;
				}

				let page = action.page ? parseInt(action.page) : 1;
				if (page == 1) {
					newState.hospital_list = [];
				}

				action.payload && action.payload.result && action.payload.result.map(hospital => {
					if (newState.hospital_list.indexOf(hospital.id) > -1) {} else {
						newState.hospital_list = newState.hospital_list.concat(hospital.id);
					}
					if (newState.HOSPITAL_DATA[hospital.id]) {
						newState.HOSPITAL_DATA[hospital.id] = Object.assign({}, newState.HOSPITAL_DATA[hospital.id], hospital);
					} else {
						newState.HOSPITAL_DATA[hospital.id] = _extends({}, hospital);
					}
				});
				return newState;
			}

		case _types.MERGE_IPD_CRITERIA:
			{
				let newState = _extends({}, state, action.payload);
				return newState;
			}

		case _types.START_HOSPITAL_SEARCH:
			{
				let newState = _extends({}, state);
				newState.HOSPITAL_SEARCH_DATA_LOADED = false;
				return newState;
			}

		case _types.SET_IPD_SEARCH_ID:
			{
				let newState = _extends({}, state, {
					search_id_data: _extends({}, state.search_id_data)
				});
				if (!newState.last_save_searched_date) {
					newState.last_save_searched_date = new Date();
				}
				newState.search_id_data[action.searchId] = {};
				newState.search_id_data[action.searchId].commonSelectedCriterias = action.payload.commonSelectedCriterias;
				newState.search_id_data[action.searchId].filterCriteria = action.payload.filterCriteria;
				newState.search_id_data[action.searchId].data = {};
				newState.search_id_data[action.searchId].page = action.page;
				newState.nextSelectedCriterias = [];
				newState.nextFilterCriteria = DEFAULT_HOSPITAL_FILTER_STATE;
				newState.commonSelectedCriterias = action.payload.commonSelectedCriterias;
				newState.filterCriteria = action.payload.filterCriteria;
				newState.fetchNewResults = true;
				newState.currentSearchId = action.searchId;
				newState.page = action.page;
				return newState;
			}

		case _types.SAVE_IPD_RESULTS_WITH_SEARCHID:
			{
				let newState = _extends({}, state, {
					search_id_data: _extends({}, state.search_id_data)
				});
				if (newState.search_id_data && newState.search_id_data[newState.currentSearchId]) {

					newState.search_id_data[newState.currentSearchId] = Object.assign(newState.search_id_data[newState.currentSearchId]);
					if (action.page == 1) {
						newState.search_id_data[newState.currentSearchId].data = action.payload;
					} else if (newState.search_id_data[newState.currentSearchId].data) {
						if (Object.values(newState.search_id_data[newState.currentSearchId].data).length && newState.search_id_data[newState.currentSearchId].data.result) {

							newState.search_id_data[newState.currentSearchId].data.result = newState.search_id_data[newState.currentSearchId].data.result.concat(action.payload.result);
						} else {
							newState.search_id_data[newState.currentSearchId].data = action.payload;
						}
					}
				}
				return newState;
			}

		case _types.GET_IPD_SEARCH_ID_RESULTS:
			{
				let newState = _extends({}, state);
				if (newState.search_id_data && newState.search_id_data[action.searchId]) {
					newState.commonSelectedCriterias = newState.search_id_data[action.searchId].commonSelectedCriterias;
					newState.filterCriteria = newState.search_id_data[action.searchId].filterCriteria;
					newState.currentSearchId = action.searchId;
					newState.nextSelectedCriterias = [];
					newState.nextFilterCriteria = DEFAULT_HOSPITAL_FILTER_STATE;
				}
				return newState;
			}

		case _types.SELECT_IPD_LOCATION_STATUS:
			{
				let newState = _extends({}, state);
				newState.locationFetched = true;
				newState.fetchNewResults = !!action.fetchNewResults;
				return newState;
			}

		case _types.GET_IPD_HOSPITAL_DETAIL:
			{
				let newState = _extends({}, state, {
					ipd_hospital_detail_info: _extends({}, state.ipd_hospital_detail_info)
				});
				newState.HOSPITAL_DETAIL_LOADED = true;
				if (newState.ipd_hospital_detail_info && newState.ipd_hospital_detail_info[action.payload.id]) {} else {
					newState.ipd_hospital_detail_info[action.payload.id] = {};
				}
				newState.ipd_hospital_detail_info[action.payload.id] = action.payload;
				return newState;
			}

		case _types.CLEAR_IPD_SEARCH_IDS:
			{
				let newState = _extends({}, state);
				if (newState.last_save_searched_date) {

					const date1 = new Date();
					const date2 = new Date(newState.last_save_searched_date);
					const diffTime = Math.abs(date1.getTime() - date2.getTime());
					const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

					if (diffDays > 2) {
						newState.search_id_data = {};
						newState.last_save_searched_date = null;
					}
				}
				return newState;
			}

		case _types.GET_IPD_HOSPITAL_DETAIL_START:
			{
				let newState = _extends({}, state);
				newState.HOSPITAL_DETAIL_LOADED = false;

				return newState;
			}

		case _types.LOADED_IPD_INFO_START:
			{
				let newState = _extends({}, state);

				newState.IPD_INFO_LOADED = false;
				return newState;
			}

		case _types.SAVE_IPD_POPUP_DATA:
			{
				let newState = _extends({}, state, {
					ipdPopupData: _extends({}, state.ipdPopupData)
				});

				newState.ipdPopupData[action.dataType] = _extends({}, action.payload);
				return newState;
			}

		case _types.GET_HOSP_COMMENTS:
			{
				let newState = _extends({}, state);
				newState.hospitalComments = action.payload;
				return newState;
			}

	}
	return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

// const moment = require('moment');

const DEFAULT_HOSPITAL_FILTER_STATE = {
	distance: [0, 20],
	provider_ids: [],
	network_id: ''
};

const defaultState = {
	selectedIpd: [],
	selectedCriterias: [],
	commonSelectedCriterias: [],
	nextSelectedCriterias: [],
	ipd_info: {},
	IPD_INFO_LOADED: false,
	filterCriteria: DEFAULT_HOSPITAL_FILTER_STATE,
	hospital_list: [],
	hospital_search_results: {},
	HOSPITAL_DATA: {},
	search_id_data: {},
	last_save_searched_date: null,
	nextFilterCriteria: DEFAULT_HOSPITAL_FILTER_STATE,
	currentSearchId: '',
	page: 1,
	fetchNewResults: false,
	getNewResults: true,
	ipd_hospital_detail_info: {},
	HOSPITAL_DETAIL_LOADED: false,
	locationFetched: false,
	hospitalSearchSeoData: null,
	hospitalCanonicalUrl: null,
	hospitalBreadcrumb: [],
	hospital_search_content: '',
	hospital_bottom_content: '',
	HOSPITAL_SEARCH_DATA_LOADED: false,
	ipdPopupData: {},
	hospitalComments: []
};

/***/ }),

/***/ "./dev/js/reducers/opd/doctorProfiles.js":
/*!***********************************************!*\
  !*** ./dev/js/reducers/opd/doctorProfiles.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = defaultState, action) {

    switch (action.type) {
        case _types.APPEND_DOCTORS_PROFILE:
            {
                let newState = _extends({}, state);

                return action.payload.reduce((doctorMap, doctor) => {
                    if (doctorMap[doctor.id]) {
                        doctorMap[doctor.id] = Object.assign({}, doctorMap[doctor.id], doctor);
                    } else {
                        doctorMap[doctor.id] = _extends({}, doctor);
                    }
                    return doctorMap;
                }, newState);
            }

    }
    return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

const defaultState = {};

/***/ }),

/***/ "./dev/js/reducers/opd/doctorSearch.js":
/*!*********************************************!*\
  !*** ./dev/js/reducers/opd/doctorSearch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = defaultState, action) {

    switch (action.type) {

        case _types.TOGGLE_404:
            {
                let newState = _extends({}, state);
                newState.show404 = false;
                return newState;
            }

        case _types.DOCTOR_SEARCH_START:
            {
                let newState = _extends({}, state);
                /*if(newState.doctorList.length){
                    
                }else{
                    
                }*/
                newState.LOADED_DOCTOR_SEARCH = false;
                return newState;
            }

        case _types.DOCTOR_SEARCH:
            {
                let newState = _extends({}, state, {
                    doctorList: [].concat(state.doctorList)
                });

                if (action.payload.page === 1) {
                    newState.doctorList = action.payload.result.map(doc => doc.id);
                    newState.count = action.payload.count;
                } else {
                    let dedupe = {};
                    newState.doctorList = newState.doctorList.concat(action.payload.result.map(doc => doc.id)).filter(function (item) {
                        return dedupe.hasOwnProperty(item) ? false : dedupe[item] = true;
                    });
                }

                newState.search_content = action.payload.search_content || '';

                if (action.payload.page === 1 || newState.count == 0 && action.payload.count) {
                    newState.count = action.payload.count;
                }

                newState.reviews = action.payload.reviews;
                newState.ratings = action.payload.ratings;
                newState.ratings_title = action.payload.ratings_title;
                newState.bottom_content = action.payload.bottom_content;
                newState.LOADED_DOCTOR_SEARCH = true;
                newState.curr_page = action.payload.page;
                newState.breadcrumb = action.payload.breadcrumb;
                newState.seoData = action.payload.seo;
                newState.show404 = action.payload.show404 || false;
                newState.canonical_url = action.payload.canonical_url || null;
                newState.hospitalData = action.payload.hospital || null;
                newState.similar_specializations = action.payload.similar_specializations || null;
                return newState;
            }

        case _types.HOSPITAL_SEARCH:
            {
                let newState = _extends({}, state, {
                    hospitalList: [].concat(state.hospitalList)
                });

                if (action.payload.page === 1) {
                    newState.hospitalList = action.payload.result.map(hospital => hospital.hospital_id);
                } else {
                    let dedupe = {};
                    newState.hospitalList = newState.hospitalList.concat(action.payload.result.map(hospital => hospital.hospital_id)).filter(function (item) {
                        return dedupe.hasOwnProperty(item) ? false : dedupe[item] = true;
                    });
                }

                if (action.payload.page === 1 || newState.count == 0 && action.payload.count) {
                    newState.count = action.payload.count;
                }

                newState.search_content = action.payload.search_content || '';
                newState.LOADED_DOCTOR_SEARCH = true;
                newState.reviews = action.payload.reviews;
                newState.ratings = action.payload.ratings;
                newState.ratings_title = action.payload.ratings_title;
                newState.bottom_content = action.payload.bottom_content;
                newState.curr_page = action.payload.page;
                newState.show404 = action.payload.show404 || false;
                newState.canonical_url = action.payload.canonical_url || null;

                return newState;
            }

        case _types.SELECT_OPD_TIME_SLOT:
            {
                let newState = _extends({}, state, {
                    selectedSlot: _extends({}, state.selectedSlot),
                    rescheduleSlot: _extends({}, state.rescheduleSlot)
                });

                if (action.payload.reschedule) {
                    newState.rescheduleSlot = _extends({}, action.payload.slot);
                    newState.appointmentId = action.payload.appointmentId;
                }

                newState.selectedSlot = _extends({}, action.payload.slot);

                newState.selectedDateFormat = action.payload.extraDateParams;

                return newState;
            }

        case _types.SELECT_OPD_PAYMENT_TYPE:
            {
                let newState = _extends({}, state);

                newState.payment_type = action.payload;

                return newState;
            }

        case _types.SET_SERVER_RENDER_OPD:
            {
                let newState = _extends({}, state);
                newState.SET_FROM_SERVER = action.payload;
                return newState;
            }

        case _types.ADD_OPD_COUPONS:
            {

                let newState = _extends({}, state, {
                    doctorCoupons: _extends({}, state.doctorCoupons)
                    /*
                                if(state.doctorCoupons[action.hospitalId]){
                                    newState.doctorCoupons[action.hospitalId] = [].concat(state.doctorCoupons[action.hospitalId])
                                } else {
                                    newState.doctorCoupons[action.hospitalId] = []
                                }*/
                });newState.doctorCoupons[action.hospitalId] = [];
                newState.doctorCoupons[action.hospitalId].push(action.payload);

                return newState;
            }

        case _types.REMOVE_OPD_COUPONS:
            {

                let newState = _extends({}, state, {
                    doctorCoupons: _extends({}, state.doctorCoupons)
                });

                if (action.couponId) {
                    newState.doctorCoupons[action.hospitalId] = newState.doctorCoupons[action.hospitalId].filter(coupon => {
                        coupon.coupon_id != action.couponId;
                    });
                }
                newState.disCountedOpdPrice = 0;
                newState.couponAutoApply = false;
                return newState;
            }

        case _types.APPLY_OPD_COUPONS:
            {
                let newState = _extends({}, state);

                if (action.payload.status == 1) {
                    newState.disCountedOpdPrice = parseInt(action.payload.discount);
                }

                return newState;
            }

        case _types.RESET_OPD_COUPONS:
            {
                let newState = _extends({}, state);
                newState.disCountedOpdPrice = 0;

                return newState;
            }

        case _types.SET_PROCEDURES:
            {
                let newState = _extends({}, state);

                //            newState.profileCommonProcedures = action.commonProcedurers
                /* let commonProcedurers = action.commonProcedurers.split(',')
                 let commonSelectedProcedures = []
                 commonProcedurers.map((x) => {
                     commonSelectedProcedures.push(parseInt(x))
                 })*/
                let hospitals = action.payload.hospitals.length ? action.payload.hospitals : [];
                let is_procedure = false;

                let data = {};

                newState.selectedDoctorProcedure = {};
                newState.selectedDoctorProcedure[action.doctorId] = {};
                hospitals.map(hospital => {

                    if (hospital.procedure_categories.length > 0) {
                        newState.selectedDoctorProcedure[action.doctorId][hospital.hospital_id] = { 'categories': {}, 'selectedProcedures': 0, 'unselectedProcedures': 0, 'price': {}, 'categories_name': [] };
                    }
                    let deal_price = 0;
                    let mrp = 0;
                    let unselectedCount = 0;
                    let selectedCount = 0;
                    let selectedProcedureIds = [];
                    let categories_name = [];
                    hospital.procedure_categories.map(procedure => {
                        is_procedure = true;
                        newState.selectedDoctorProcedure[action.doctorId][hospital.hospital_id].categories[procedure.procedure_category_id] = [];
                        data['category_name'] = procedure.name;
                        categories_name.push(procedure.name);
                        data['category_id'] = procedure.procedure_category_id;
                        procedure.procedures.map(pids => {
                            data['agreed_price'] = pids.agreed_price;
                            data['deal_price'] = pids.deal_price;
                            data['mrp'] = pids.mrp;

                            data['procedure_id'] = pids.procedure.id;
                            data['duration'] = pids.procedure.duration;
                            data['procedure_name'] = pids.procedure.name;
                            data['hospital_id'] = hospital.hospital_id;
                            if (pids.is_selected) {

                                data['is_selected'] = true;
                                selectedProcedureIds.push(pids.procedure.id);
                                deal_price = deal_price + pids.deal_price;
                                mrp = mrp + pids.mrp;
                                selectedCount++;
                            } else {

                                data['is_selected'] = false;
                                unselectedCount++;
                            }

                            newState.selectedDoctorProcedure[action.doctorId][hospital.hospital_id].categories[procedure.procedure_category_id].push(_extends({}, data));
                        });
                        let price = {
                            deal_price: deal_price,
                            mrp: mrp
                        };
                        newState.selectedDoctorProcedure[action.doctorId][hospital.hospital_id].price = price;
                        newState.selectedDoctorProcedure[action.doctorId][hospital.hospital_id].selectedProcedures = selectedCount;
                        newState.selectedDoctorProcedure[action.doctorId][hospital.hospital_id].unselectedProcedures = unselectedCount;
                        newState.selectedDoctorProcedure[action.doctorId][hospital.hospital_id].categories_name = categories_name;
                    });
                });

                if (!is_procedure) {
                    newState.selectedDoctorProcedure = {};
                    //newState.profileCommonProcedures = []
                }

                return newState;
            }

        case _types.TOGGLE_PROFILE_PROCEDURES:
            {
                let newState = _extends({}, state, {
                    selectedDoctorProcedure: JSON.parse(JSON.stringify(state.selectedDoctorProcedure))
                });

                try {

                    Object.entries(newState.selectedDoctorProcedure[action.doctor_id]).map((hospital, i) => {
                        let deal_price = 0;
                        let mrp = 0;
                        let unselectedCount = 0;
                        let selectedCount = 0;

                        Object.values(hospital[1].categories).map((category, j) => {

                            if (category) {
                                category.map((procedure, k) => {

                                    if (action.procedure.indexOf(procedure.procedure_id) != -1) {
                                        deal_price = deal_price + newState.selectedDoctorProcedure[action.doctor_id][hospital[0]].categories[procedure.category_id][k].deal_price;
                                        mrp = mrp + newState.selectedDoctorProcedure[action.doctor_id][hospital[0]].categories[procedure.category_id][k].mrp;
                                        selectedCount++;
                                        newState.selectedDoctorProcedure[action.doctor_id][hospital[0]].categories[procedure.category_id][k].is_selected = true;
                                    } else {
                                        unselectedCount++;
                                        newState.selectedDoctorProcedure[action.doctor_id][hospital[0]].categories[procedure.category_id][k].is_selected = false;
                                    }
                                });
                            }
                        });

                        let price = {
                            deal_price: deal_price,
                            mrp: mrp
                        };
                        newState.selectedDoctorProcedure[action.doctor_id][hospital[0]].price = price;
                        newState.selectedDoctorProcedure[action.doctor_id][hospital[0]].selectedProcedures = selectedCount;
                        newState.selectedDoctorProcedure[action.doctor_id][hospital[0]].unselectedProcedures = unselectedCount;
                    });
                    //newState.profileCommonProcedures = action.procedure
                } catch (e) {
                    console.log(e);
                }

                return newState;
            }

        case _types.SAVE_PROFILE_PROCEDURES:
            {
                let newState = _extends({}, state);
                let selectedProcedures = [];

                if (action.forceAdd) {
                    newState.commonProfileSelectedProcedures = action.selectedProcedures;
                    return newState;
                }
                if (newState.selectedDoctorProcedure[action.doctor_id] && newState.selectedDoctorProcedure[action.doctor_id][action.clinic_id] && newState.selectedDoctorProcedure[action.doctor_id][action.clinic_id].categories) {

                    Object.values(newState.selectedDoctorProcedure[action.doctor_id][action.clinic_id].categories).map(procedure => {

                        selectedProcedures = selectedProcedures.concat(procedure.filter(x => x.is_selected).map(x => x.procedure_id));
                    });
                }

                newState.commonProfileSelectedProcedures = selectedProcedures;
                return newState;
            }

        case _types.START_FETCHING_OPD_TIME:
            {
                let newState = _extends({}, state);
                newState.TIMESLOT_DATA_LOADING = true;
                return newState;
            }

        case _types.END_FETCHING_OPD_TIME:
            {
                let newState = _extends({}, state);
                newState.TIMESLOT_DATA_LOADING = false;
                return newState;
            }

        case _types.CLEAR_OPD_COUPONS:
            {
                let newState = _extends({}, state);
                newState.doctorCoupons = {};
                return newState;
            }

        case _types.SET_FOOTER_DATA:
            {
                let newState = _extends({}, state);
                newState.static_footer_data = action.payload;
                return newState;
            }

    }

    return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

const defaultState = {
    doctorList: [],
    hospitalList: [],
    count: 0,
    ratings: null,
    reviews: null,
    ratings_title: '',
    bottom_content: '',
    LOADED_DOCTOR_SEARCH: false,
    selectedSlot: { time: {} },
    rescheduleSlot: { time: {} },
    appointmentId: null,
    SET_FROM_SERVER: false,
    doctorCoupons: {},
    disCountedOpdPrice: 0,
    search_content: '',
    selectedDoctorProcedure: {},
    profileCommonProcedures: [],
    commonProfileSelectedProcedures: [],
    couponAutoApply: true,
    curr_page: null,
    breadcrumb: [],
    seoData: {},
    show404: false,
    payment_type: 6,
    canonical_url: null,
    hospitalData: null,
    selectedDateFormat: null,
    TIMESLOT_DATA_LOADING: false,
    similar_specializations: null,
    static_footer_data: null
};

/***/ }),

/***/ "./dev/js/reducers/opd/doctors.js":
/*!****************************************!*\
  !*** ./dev/js/reducers/opd/doctors.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = defaultState, action) {

    switch (action.type) {
        case _types.APPEND_DOCTORS:
            {
                let newState = _extends({}, state);

                return action.payload.reduce((doctorMap, doctor) => {
                    if (doctorMap[doctor.id]) {
                        doctorMap[doctor.id] = Object.assign({}, doctorMap[doctor.id], doctor);
                    } else {
                        doctorMap[doctor.id] = _extends({}, doctor);
                    }
                    return doctorMap;
                }, newState);
            }

    }
    return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

const defaultState = {};

/***/ }),

/***/ "./dev/js/reducers/opd/hospitals.js":
/*!******************************************!*\
  !*** ./dev/js/reducers/opd/hospitals.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = defaultState, action) {

    switch (action.type) {
        case _types.APPEND_HOSPITALS:
            {
                let newState = _extends({}, state);

                return action.payload.reduce((hospitalMap, hospital) => {
                    if (hospitalMap[hospital.hospital_id]) {
                        hospitalMap[hospital.hospital_id] = Object.assign({}, hospitalMap[hospital.hospital_id], hospital);
                    } else {
                        hospitalMap[hospital.hospital_id] = _extends({}, hospital);
                    }
                    return hospitalMap;
                }, newState);
            }

    }
    return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

const defaultState = {};

/***/ }),

/***/ "./dev/js/reducers/opd/searchCriteria.js":
/*!***********************************************!*\
  !*** ./dev/js/reducers/opd/searchCriteria.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = defaultState, action) {

    switch (action.type) {
        case _types.LOAD_SEARCH_CRITERIA_OPD:
            {
                let newState = _extends({}, state);
                if (action.payload) {
                    newState = _extends({}, newState, action.payload);
                }

                newState.selectedCriterias = newState.selectedCriterias.filter(curr => {
                    return curr.type == newState.selectedCriteriaType;
                });
                newState.commonProcedurers = [];
                newState.LOADED_SEARCH_CRITERIA_OPD = true;
                return newState;
            }

        case _types.TOGGLE_OPD_CRITERIA:
            {
                let newState = _extends({}, state, {
                    selectedCriterias: [].concat(state.selectedCriterias),
                    filterCriteria: _extends({}, state.filterCriteria),
                    nextFilterCriteria: _extends({}, state.nextFilterCriteria)
                });

                newState.filterCriteria.doctor_name = "";
                newState.filterCriteria.hospital_name = "";
                newState.filterCriteria.hospital_id = "";

                newState.nextFilterCriteria.doctor_name = "";
                newState.nextFilterCriteria.hospital_name = "";
                newState.nextFilterCriteria.hospital_id = "";

                let found = false;
                newState.selectedCriterias = newState.selectedCriterias.filter(curr => {
                    if (curr.id == action.payload.criteria.id && curr.type == action.payload.type) {
                        found = true;
                        return false;
                    }
                    return true;
                });

                /**
                 * QUICK HACK TO MAKE CONDITIONS AND SPECIALIZATIONS MUTUALLY EXCLUSIVE 
                 * TO BE CHANGED IN FUTURE 
                **/

                /* if (action.payload.type == 'condition') {
                     newState.selectedCriterias = []
                 } else {
                     newState.selectedCriterias = newState.selectedCriterias.filter((curr) => {
                         return curr.type != 'condition'
                     })
                 }*/

                if (action.payload.type) {
                    newState.selectedCriterias = newState.selectedCriterias.filter(curr => {
                        return curr.type == action.payload.type;
                    });
                }

                if (action.payload.forceAdd) {
                    newState.commonSelectedCriterias = [_extends({}, action.payload.criteria, {
                        type: action.payload.type
                    })];
                    newState.nextSelectedCriterias = [_extends({}, action.payload.criteria, {
                        type: action.payload.type
                    })];
                    newState.filterCriteria = DEFAULT_FILTER_STATE;
                    newState.nextFilterCriteria = DEFAULT_FILTER_STATE;
                } else if (!found) {
                    newState.selectedCriterias.push(_extends({}, action.payload.criteria, {
                        type: action.payload.type
                    }));
                }
                newState.selectedCriteriaType = action.payload.type;
                newState.fetchNewResults = true;

                if (action.payload.filters && Object.values(action.payload.filters).length) {
                    newState.filterCriteria = Object.assign({}, newState.filterCriteria, action.payload.filters);
                    newState.nextFilterCriteria = Object.assign({}, newState.filterCriteria, action.payload.filters);
                }

                return newState;
            }

        case _types.SELECT_LOCATION_OPD:
            {
                let newState = _extends({}, state);

                newState.selectedLocation = action.payload;
                if (action.range == 'autoComplete') {
                    newState.locationType = 'autoComplete';
                } else if (action.range == 'autoDetect') {
                    newState.locationType = 'autoDetect';
                } else if (action.range == 'geoip') {
                    newState.locationType = 'geoip';
                } else {
                    newState.locationType = 'geo';
                }
                newState.fetchNewResults = !!action.fetchNewResults;

                return newState;
            }

        case _types.MERGE_SEARCH_STATE_OPD:
            {
                let newState = _extends({}, state, action.payload, {
                    fetchNewResults: !!action.fetchNewResults
                });

                return newState;
            }

        case _types.MERGE_SEARCH_STATE_LAB:
            {
                let newState = _extends({}, state);

                if (action.payload.selectedLocation) {
                    newState.selectedLocation = action.payload.selectedLocation;
                }

                return newState;
            }

        case _types.RESET_FILTER_STATE:
            {
                let newState = _extends({}, state);
                newState.filterCriteria = DEFAULT_FILTER_STATE;
                newState.nextFilterCriteria = DEFAULT_FILTER_STATE;
                // newState.fetchNewResults = true
                return newState;
            }

        case _types.SET_FETCH_RESULTS_OPD:
            {
                let newState = _extends({}, state);
                newState.fetchNewResults = !!action.payload;
                return newState;
            }

        case _types.SAVE_COMMON_PROCEDURES:
            {
                let newState = _extends({}, state);
                if (action.forceAdd) {
                    newState.getNewUrl = true;
                    newState.commonSelectedCriterias = newState.commonSelectedCriterias.filter(x => x.type != 'procedures');
                    action.payload.map(procedure => {
                        newState.commonSelectedCriterias.push({ type: "procedures", id: procedure, name: "" });
                        newState.nextSelectedCriterias.push({ type: "procedures", id: procedure, name: "" });
                    });
                } else {
                    let commonIds = newState.commonProcedurers.map(x => x.id);
                    action.payload.map(procedure => {
                        if (commonIds.indexOf(procedure.id) == -1) {
                            newState.commonProcedurers.push(procedure);
                        } else {
                            newState.commonProcedurers = newState.commonProcedurers.filter(x => x != x.id);
                        }
                    });

                    action.category_ids.map(category => {});
                }
                return newState;
            }

        case _types.CLONE_SELECTED_CRITERIAS:
            {
                let newState = _extends({}, state);
                newState.commonSelectedCriterias = [].concat(action.payload);
                newState.nextSelectedCriterias = [].concat(action.payload);
                return newState;
            }

        case _types.MERGE_SELECTED_CRITERIAS:
            {
                let newState = _extends({}, state);

                newState.commonSelectedCriterias = [];
                newState.filterCriteria = DEFAULT_FILTER_STATE;
                newState.nextFilterCriteria = DEFAULT_FILTER_STATE;
                newState.nextSelectedCriterias = [];

                return newState;
            }

        case _types.FILTER_SEARCH_CRITERIA_OPD:
            {
                let newState = _extends({}, state, {
                    selectedCriterias: [...state.selectedCriterias]
                });

                newState.selectedCriterias = newState.selectedCriterias.filter(x => x.type.includes(action.payload));

                return newState;
            }

        case _types.SET_SEARCH_ID:
            {
                let newState = _extends({}, state, {
                    commonSelectedCriterias: [...state.commonSelectedCriterias],
                    search_id_data: _extends({}, state.search_id_data)
                });
                if (!newState.last_save_searched_date) {
                    newState.last_save_searched_date = new Date();
                }
                newState.search_id_data[action.searchId] = {};
                newState.search_id_data[action.searchId].commonSelectedCriterias = action.payload.commonSelectedCriterias;
                newState.search_id_data[action.searchId].filterCriteria = action.payload.filterCriteria;
                newState.search_id_data[action.searchId].data = {};
                newState.search_id_data[action.searchId].page = action.page;
                newState.nextSelectedCriterias = [];
                newState.nextFilterCriteria = DEFAULT_FILTER_STATE;
                newState.commonSelectedCriterias = action.payload.commonSelectedCriterias;
                newState.filterCriteria = action.payload.filterCriteria;
                newState.fetchNewResults = true;
                newState.currentSearchId = action.searchId;
                newState.page = action.page;
                return newState;
            }

        case _types.GET_SEARCH_ID_RESULTS:
            {
                let newState = _extends({}, state);
                if (newState.search_id_data && newState.search_id_data[action.searchId]) {
                    newState.commonSelectedCriterias = newState.search_id_data[action.searchId].commonSelectedCriterias;
                    newState.filterCriteria = newState.search_id_data[action.searchId].filterCriteria;
                    newState.currentSearchId = action.searchId;
                    newState.nextSelectedCriterias = [];
                    newState.nextFilterCriteria = DEFAULT_FILTER_STATE;
                }
                return newState;
            }

        case _types.SAVE_RESULTS_WITH_SEARCHID:
            {
                let newState = _extends({}, state, {
                    search_id_data: _extends({}, state.search_id_data)
                });
                if (newState.search_id_data && newState.search_id_data[newState.currentSearchId]) {

                    newState.search_id_data[newState.currentSearchId] = Object.assign(newState.search_id_data[newState.currentSearchId]);
                    newState.search_id_data[newState.currentSearchId].commonSelectedCriterias = action.commonSelectedCriterias;
                    if (action.page == 1) {
                        newState.search_id_data[newState.currentSearchId].data = action.payload;
                        newState.search_id_data[newState.currentSearchId].clinic_card = action.clinic_card;
                    } else if (newState.search_id_data[newState.currentSearchId].data) {
                        if (Object.values(newState.search_id_data[newState.currentSearchId].data).length && newState.search_id_data[newState.currentSearchId].data.result) {

                            newState.search_id_data[newState.currentSearchId].data.result = newState.search_id_data[newState.currentSearchId].data.result.concat(action.payload.result);
                        } else {
                            newState.search_id_data[newState.currentSearchId].data = action.payload;
                            newState.search_id_data[newState.currentSearchId].clinic_card = action.clinic_card;
                        }
                    }
                }
                return newState;
            }

        case _types.MERGE_URL_STATE:
            {
                let newState = _extends({}, state);

                newState.mergeUrlState = action.payload;
                return newState;
            }

        case _types.SET_URL_PAGE:
            {
                let newState = _extends({}, state);
                newState.page = action.payload;
                return newState;
            }

        case _types.SET_NEXT_SEARCH_CRITERIA:
            {
                let newState = _extends({}, state);
                newState.nextSelectedCriterias = newState.commonSelectedCriterias;
                return newState;
            }

        case _types.CLEAR_OPD_SEARCH_ID:
            {
                let newState = _extends({}, state);
                if (newState.last_save_searched_date) {
                    const date1 = new Date();
                    const date2 = new Date(newState.last_save_searched_date);
                    const diffTime = Math.abs(date1.getTime() - date2.getTime());
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    if (diffDays > 2) {
                        newState.search_id_data = {};
                        newState.last_save_searched_date = null;
                    }
                }
                return newState;
            }
        case _types.LOAD_INSURANCE_CRITERIA:
            {
                let newState = _extends({}, state);
                newState.common_settings = action.payload;
                return newState;
            }
        case _types.CLEAR_OPD_PAGE_NUMBER:
            {
                let newState = _extends({}, state);
                newState.page = 1;
                return newState;
            }

        case _types.SAVE_NEARBY_HOSPITALS:
            {
                let newState = _extends({}, state);
                newState.nearbyHospitals = action.payload;
                return newState;
            }

        case _types.SAVE_TOP_HOSPITALS:
            {
                let newState = _extends({}, state);
                newState.topHospitals = action.payload;
                return newState;
            }

    }
    return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

// const moment = require('moment');
const DEFAULT_FILTER_STATE = {
    //priceRange: [0, 3000],
    //distanceRange: [0, 15],
    sort_on: '',
    sort_order: '',
    sits_at_clinic: false,
    sits_at_hospital: false,
    gender: '',
    availability: [],
    rating: '',
    doctor_name: "",
    hospital_name: "",
    hospital_id: "",
    is_insured: false,
    specialization_filter_ids: []
};

const defaultState = {
    LOADED_SEARCH_CRITERIA_OPD: false,
    specializations: [],
    conditions: [],
    selectedCriterias: [],
    selectedLocation: null,
    filterCriteria: DEFAULT_FILTER_STATE,
    locationType: 'geo',
    fetchNewResults: false,
    procedure_categories: [],
    selectedCriteriaType: '',
    commonProcedurers: [],
    getNewUrl: false,
    commonSelectedCriterias: [],
    page: 1,
    procedures: [],
    search_id_data: {},
    nextSelectedCriterias: [],
    nextFilterCriteria: DEFAULT_FILTER_STATE,
    currentSearchId: '',
    mergeUrlState: false,
    last_save_searched_date: null,
    ipd_procedures: [],
    top_hospitals: [],
    common_settings: null,
    package_categories: [],
    nearbyHospitals: {},
    topHospitals: {}
};

/***/ }),

/***/ "./dev/js/reducers/vipClub/vipClubCriteria.js":
/*!****************************************************!*\
  !*** ./dev/js/reducers/vipClub/vipClubCriteria.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = defaultState, action) {

    switch (action.type) {

        case _types.DIGIT_PLAN_LIST:
            {
                let newState = _extends({}, state);
                newState.digitPlans = action.payload;
                if (Object.keys(newState.selected_digit_plan).length == 0) {
                    newState.selected_digit_plan = action.payload.filter(x => x.is_selected)[0];
                    if (Object.keys(newState.selected_digit_plan).length) {
                        newState.selected_digit_plan.isForceUpdate = true;
                        newState.selected_digit_plan = newState.selected_digit_plan;
                    }
                }
                return newState;
            }
        case _types.DIGIT_SELF_DETAILS:
            {
                let newState = _extends({}, state, {
                    digit_self_details: _extends({}, state.digit_self_details)
                });
                return action.digit_self_details.reduce((selfData, selfProfile) => {
                    if (newState.digit_self_details[selfProfile.id]) {
                        newState.digit_self_details[selfProfile.id] = Object.assign({}, selfData[selfProfile.id], selfProfile);
                    } else {
                        newState.digit_self_details[selfProfile.id] = _extends({}, selfProfile);
                    }
                    return newState;
                }, newState);
            }
        case _types.SELECT_DIGIT_PLAN:
            {
                let newState = _extends({}, state, {
                    selected_digit_plan: _extends({}, state.selected_vip_plan)
                });
                newState.selected_digit_plan = action.payload.selected_vip_plan;
                return newState;
            }

        case _types.SAVE_CURRENT_DIGIT_MEMBERS:
            {
                let newState = _extends({}, state, {
                    currentSelectedDigitMembersId: []
                });
                newState.currentSelectedDigitMembersId = newState.currentSelectedDigitMembersId.concat(action.payload);
                return newState;
            }
        case _types.GET_VIP_LIST:
            {
                let newState = _extends({}, state);
                if (action.payload.certificate) {
                    newState.vipClubList = action.payload;
                    newState.LOAD_VIP_CLUB = false;
                } else if (Object.keys(action.payload).length > 0 && action.payload.plus_data && action.payload.plus_data.length) {
                    newState.vipClubList = action.payload.plus_data[0];
                    if (action.is_vip_gold) {
                        if (action.payload.plus_data[0].gold_plans && action.payload.plus_data[0].gold_plans.length > 0) {
                            if (Object.keys(newState.selected_vip_plan).length == 0) {
                                newState.selected_vip_plan = action.payload.plus_data[0].gold_plans.filter(x => x.is_selected)[0];
                                if (Object.keys(newState.selected_vip_plan).length) {
                                    newState.selected_vip_plan.isForceUpdate = true;
                                    newState.selected_vip_plan = newState.selected_vip_plan;
                                }
                            }
                            // else{
                            //     if(newState.selected_vip_plan && Object.keys(newState.selected_vip_plan).length > 0 && !newState.selected_vip_plan.isForceUpdate){
                            //         newState.selected_vip_plan = newState.selected_vip_plan
                            //     }
                            // }
                            newState.LOAD_VIP_CLUB = true;
                        }
                    } else {
                        if (action.payload.plus_data[0].plans && action.payload.plus_data[0].plans.length > 0) {
                            if (Object.keys(newState.selected_vip_plan).length == 0) {
                                newState.selected_vip_plan = action.payload.plus_data[0].plans.filter(x => x.is_selected)[0];
                                if (Object.keys(newState.selected_vip_plan).length) {
                                    newState.selected_vip_plan.isForceUpdate = true;
                                    newState.selected_vip_plan = newState.selected_vip_plan;
                                }
                            }
                            // else{
                            //     if(newState.selected_vip_plan && Object.keys(newState.selected_vip_plan).length > 0 && !newState.selected_vip_plan.isForceUpdate){
                            //         newState.selected_vip_plan = newState.selected_vip_plan
                            //     }
                            // }
                            newState.LOAD_VIP_CLUB = true;
                        }
                    }
                }
                return newState;
            }

        case _types.SELECT_VIP_CLUB_PLAN:
            {
                let newState = _extends({}, state, {
                    selected_vip_plan: _extends({}, state.selected_vip_plan)
                });
                newState.selected_vip_plan = action.payload.selected_vip_plan;
                return newState;
            }

        case _types.USER_SELF_DETAILS:
            {
                let newState = _extends({}, state, {
                    vipClubMemberDetails: _extends({}, state.vipClubMemberDetails)
                });
                return action.vipClubMemberDetails.reduce((selfData, selfProfile) => {
                    if (newState.vipClubMemberDetails[selfProfile.id]) {
                        newState.vipClubMemberDetails[selfProfile.id] = Object.assign({}, selfData[selfProfile.id], selfProfile);
                    } else {
                        newState.vipClubMemberDetails[selfProfile.id] = _extends({}, selfProfile);
                    }
                    return newState;
                }, newState);
            }

        case _types.SELECT_VIP_USER_PROFILE:
            {
                let newState = _extends({}, state, {
                    vipClubMemberDetails: _extends({}, state.vipClubMemberDetails),
                    currentSelectedVipMembersId: [].concat(state.currentSelectedVipMembersId)
                });
                newState.vipClubMemberDetails[action.payload.newProfileid] = {};
                newState.vipClubMemberDetails[action.payload.newProfileid] = action.payload.newProfile;
                newState.currentSelectedVipMembersId.map((val, key) => {
                    if (parseInt(key) == parseInt(action.payload.param_id)) {
                        newState.currentSelectedVipMembersId[key][action.payload.param_id] = action.payload.newProfileid;
                        newState.currentSelectedVipMembersId[key].isUserSelectedProfile = true;
                    }
                });
                return newState;
            }

        case _types.SAVE_CURRENT_VIP_MEMBERS:
            {
                let newState = _extends({}, state, {
                    currentSelectedVipMembersId: []
                });
                newState.currentSelectedVipMembersId = newState.currentSelectedVipMembersId.concat(action.payload);
                return newState;
            }

        case _types.RESET_VIP_CLUB:
            {

                let newState = _extends({}, state);
                newState.currentSelectedVipMembersId = [];
                if (action.summaryPage) {} else {
                    newState.selected_vip_plan = {};
                    newState.show_doctor_payment_mode = false;
                    newState.show_lab_payment_mode = false;
                }
                newState.vipClubMemberDetails = {};
                newState.members_proofs = [];
                newState.vipClubList = [];
                newState.LOAD_VIP_CLUB_DASHBOARD = false;
                newState.showVipDetailsView = false;
                newState.savedMemberData = [];
                newState.vipCoupons = [];
                newState.digitPlans = {}, newState.digit_self_details = {}, newState.currentSelectedDigitMembersId = [];

                return newState;
            }

        case _types.VIP_CLUB_DASHBOARD_DATA:
            {

                let newState = _extends({}, state);
                newState.vip_club_db_data = action.payload;
                newState.LOAD_VIP_CLUB_DASHBOARD = true;

                return newState;
            }
        case _types.SAVE_VIP_MEMBER_PROOFS:
            {
                let newState = _extends({}, state, {
                    members_proofs: [].concat(state.members_proofs)
                });
                if (newState.members_proofs.length > 0) {

                    let found = [];
                    newState.members_proofs = newState.members_proofs.filter(data => {

                        if (data.id == action.payload.id) {
                            found.push(data);
                            return false;
                        }
                        return true;
                    });

                    if (found) {
                        let data = Object.assign({}, found[0], action.payload);
                        newState.members_proofs.push(data);
                    } else {
                        newState.members_proofs.push(action.payload);
                    }
                } else {
                    newState.members_proofs.push(action.payload);
                }
                return newState;
            }

        case _types.DELETE_VIP_MEMBER_PROOF:
            {
                let newState = _extends({}, state);

                let currentSelectedMember = null;
                newState.members_proofs = newState.members_proofs.filter(member => {

                    if (member.id == action.payload.member_id) {
                        currentSelectedMember = member;
                        return false;
                    }
                    return true;
                });

                if (currentSelectedMember) {
                    let currentProofs = currentSelectedMember.img_path_ids.filter(x => x.id !== action.payload.id);
                    currentSelectedMember.img_path_ids = currentProofs;
                }

                newState.members_proofs.push(_extends({}, currentSelectedMember));
                return newState;
            }

        case _types.SHOW_VIP_MEMBERS_FORM:
            {
                let newState = _extends({}, state);
                if (action.payload.data && Object.keys(action.payload.data).length > 0 && action.payload.data.members && action.payload.data.members.length > 0) {
                    // newState.currentSelectedVipMembersId=[]

                    // newState.vipClubMemberDetails={}
                    // newState.members_proofs = []
                    if (action.payload.data && Object.keys(newState.selected_vip_plan).length == 0) {
                        newState.selected_vip_plan = {};
                        newState.selected_vip_plan = action.payload.data.plan;
                    }
                    if (action.extraParams && Object.keys(action.extraParams).length) {
                        if (action.extraParams.user_type && action.extraParams.user_type === action.payload.data.coupon_type && action.payload.data.coupon_data) {
                            newState.vipCoupons = action.payload.data.coupon_data;
                        } else {
                            newState.vipCoupons = [];
                        }
                    }
                    newState.savedMemberData = action.payload.data.members;
                }
                newState.showVipDetailsView = true;
                return newState;
            }
        case _types.CLEAR_VIP_SELECTED_PLAN:
            {
                let newState = _extends({}, state);
                if (newState.selected_vip_plan && Object.keys(newState.selected_vip_plan).length) {
                    newState.selected_vip_plan = {};
                }
                return newState;
            }

        case _types.CLEAR_VIP_MEMBER_DATA:
            {
                let newState = _extends({}, state);
                if (newState.vipClubMemberDetails && Object.keys(newState.vipClubMemberDetails).length) {
                    newState.vipClubMemberDetails = {};
                }
                return newState;
            }

        case _types.GET_OPD_VIP_GOLD_PLANS:
            {
                let newState = _extends({}, state);
                newState.odpGoldPredictedPrice = action.payload;
                newState.show_doctor_payment_mode = true;
                return newState;
            }

        case _types.GET_LAB_VIP_GOLD_PLANS:
            {
                let newState = _extends({}, state);
                newState.labGoldPredictedPrice = action.payload;
                newState.show_lab_payment_mode = true;
                return newState;
            }

        case _types.ADD_VIP_COUPONS:
            {
                let newState = _extends({}, state, {
                    vipCoupons: _extends({}, state.vipCoupons)
                });
                newState.vipCoupons = [];
                newState.vipCoupons.push(action.payload);
                return newState;
            }

        case _types.REMOVE_VIP_COUPONS:
            {
                let newState = _extends({}, state);
                newState.vipCoupons = [];
                return newState;
            }

        case _types.REMOVE_ADD_MEMBER_FORM:
            {
                let newState = _extends({}, state);
                newState.currentSelectedVipMembersId = [];
                newState.currentSelectedVipMembersId = action.payload;
                return newState;
            }
    }
    return state;
};

var _types = __webpack_require__(/*! ../../constants/types */ "./dev/js/constants/types.js");

const defaultState = {
    members_proofs: [],
    LOAD_VIP_CLUB: false,
    vipClubList: [],
    selected_vip_plan: {},
    vipClubMemberDetails: {},
    currentSelectedVipMembersId: [],
    LOAD_VIP_CLUB_DASHBOARD: false,
    vip_club_db_data: {},
    showVipDetailsView: false,
    savedMemberData: [],
    odpGoldPredictedPrice: [],
    labGoldPredictedPrice: [],
    vipCoupons: [],
    show_doctor_payment_mode: false,
    show_lab_payment_mode: false,
    digitPlans: {},
    selected_digit_plan: {},
    digit_self_details: {},
    currentSelectedDigitMembersId: []
};

const DUMMY_PROFILE = {
    gender: "m",
    id: 999999,
    is_default_user: true,
    name: "User",
    dob: null,
    isDummyUser: true,
    email: null
};

/***/ }),

/***/ "./dev/js/routes.js":
/*!**************************!*\
  !*** ./dev/js/routes.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _config = __webpack_require__(/*! ./config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "react-transition-group");

var _HelmetTags = __webpack_require__(/*! ./components/commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _reactLoadable = __webpack_require__(/*! react-loadable */ "react-loadable");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

const loading = () => _react2.default.createElement(
    'div',
    { className: 'loading_Linebar_container' },
    _react2.default.createElement('div', { className: 'loading_bar_line' })
);

const AgentLogin = (0, _reactLoadable2.default)({
    loader: () => __webpack_require__.e(/*! import() */ 99).then(__webpack_require__.t.bind(null, /*! ./containers/commons/agentLogin.js */ "./dev/js/containers/commons/agentLogin.js", 7)),
    modules: ['./containers/commons/agentLogin.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/agentLogin.js */ "./dev/js/containers/commons/agentLogin.js")],
    loading
});
const DirectBooking = (0, _reactLoadable2.default)({
    loader: () => __webpack_require__.e(/*! import() */ 100).then(__webpack_require__.t.bind(null, /*! ./containers/commons/directBooking.js */ "./dev/js/containers/commons/directBooking.js", 7)),
    modules: ['./containers/commons/directBooking.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/directBooking.js */ "./dev/js/containers/commons/directBooking.js")],
    loading
});
const CouponSelectNewView = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(81)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/CouponsView.js */ "./dev/js/containers/commons/CouponsView.js", 7)),
    modules: ['./containers/commons/CouponsView.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/CouponsView.js */ "./dev/js/containers/commons/CouponsView.js")],
    loading
});
const Search = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(10), __webpack_require__.e(21), __webpack_require__.e(35), __webpack_require__.e(63)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/search */ "./dev/js/containers/commons/search.js", 7)),
    modules: ['./containers/commons/search'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/search */ "./dev/js/containers/commons/search.js")],
    loading
});
const searchTestInfo = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(8), __webpack_require__.e(23), __webpack_require__.e(93)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/searchTestInfo */ "./dev/js/containers/commons/searchTestInfo.js", 7)),
    modules: ['./containers/commons/searchTestInfo'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/searchTestInfo */ "./dev/js/containers/commons/searchTestInfo.js")],
    loading
});
const Referral = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(66)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/referral */ "./dev/js/containers/commons/referral.js", 7)),
    modules: ['./containers/commons/referral'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/referral */ "./dev/js/containers/commons/referral.js")],
    loading
});
const Cart = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(49)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/cart */ "./dev/js/containers/commons/cart.js", 7)),
    modules: ['./containers/commons/cart'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/cart */ "./dev/js/containers/commons/cart.js")],
    loading
});
const OrderMedicine = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(76)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/orderMedicine.js */ "./dev/js/containers/commons/orderMedicine.js", 7)),
    modules: ['./containers/commons/orderMedicine.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/orderMedicine.js */ "./dev/js/containers/commons/orderMedicine.js")],
    loading
});
const OrderSummary = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(73)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/OrderSummary */ "./dev/js/containers/commons/OrderSummary.js", 7)),
    modules: ['./containers/commons/OrderSummary'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/OrderSummary */ "./dev/js/containers/commons/OrderSummary.js")],
    loading
});
const MobileViewChat = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(127)]).then(__webpack_require__.t.bind(null, /*! ./components/commons/mobileViewChat/MobileViewChat */ "./dev/js/components/commons/mobileViewChat/MobileViewChat.js", 7)),
    modules: ['./components/commons/mobileViewChat/MobileViewChat'],
    webpack: () => [/*require.resolve*/(/*! ./components/commons/mobileViewChat/MobileViewChat */ "./dev/js/components/commons/mobileViewChat/MobileViewChat.js")],
    loading
});
const RatingsView = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(19), __webpack_require__.e(75)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/RatingsView.js */ "./dev/js/containers/commons/RatingsView.js", 7)),
    modules: ['./containers/commons/RatingsView.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/RatingsView.js */ "./dev/js/containers/commons/RatingsView.js")],
    loading
});
const MyRatings = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(33), __webpack_require__.e(109)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/MyRatings.js */ "./dev/js/containers/commons/MyRatings.js", 7)),
    modules: ['./containers/commons/MyRatings.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/MyRatings.js */ "./dev/js/containers/commons/MyRatings.js")],
    loading
});
const Offers = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(105)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/Offers */ "./dev/js/containers/commons/Offers.js", 7)),
    modules: ['./containers/commons/Offers'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/Offers */ "./dev/js/containers/commons/Offers.js")],
    loading
});
const PrimeCare = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(68)]).then(__webpack_require__.t.bind(null, /*! ./containers/care/primeCare.js */ "./dev/js/containers/care/primeCare.js", 7)),
    modules: ['./containers/care/primeCare.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/care/primeCare.js */ "./dev/js/containers/care/primeCare.js")],
    loading
});
const PrimeCareBooking = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(74)]).then(__webpack_require__.t.bind(null, /*! ./containers/care/primeCareBooking.js */ "./dev/js/containers/care/primeCareBooking.js", 7)),
    modules: ['./containers/care/primeCareBooking.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/care/primeCareBooking.js */ "./dev/js/containers/care/primeCareBooking.js")],
    loading
});
const PrimeCareSuccess = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(87)]).then(__webpack_require__.t.bind(null, /*! ./containers/care/primeCareSuccess.js */ "./dev/js/containers/care/primeCareSuccess.js", 7)),
    modules: ['./containers/care/primeCareSuccess.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/care/primeCareSuccess.js */ "./dev/js/containers/care/primeCareSuccess.js")],
    loading
});
const Compare = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(128)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/ComparePackages.js */ "./dev/js/containers/commons/ComparePackages.js", 7)),
    modules: ['./containers/commons/ComparePackages.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/ComparePackages.js */ "./dev/js/containers/commons/ComparePackages.js")],
    loading
});
const UserSignup = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(7), __webpack_require__.e(92)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/UserSignup */ "./dev/js/containers/commons/UserSignup.js", 7)),
    modules: ['./containers/commons/UserSignup'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/UserSignup */ "./dev/js/containers/commons/UserSignup.js")],
    loading
});
const UserLogin = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(85)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/UserLogin */ "./dev/js/containers/commons/UserLogin.js", 7)),
    modules: ['./containers/commons/UserLogin'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/UserLogin */ "./dev/js/containers/commons/UserLogin.js")],
    loading
});
const Wallet = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(59)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/Wallet */ "./dev/js/containers/commons/Wallet.js", 7)),
    modules: ['./containers/commons/Wallet'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/Wallet */ "./dev/js/containers/commons/Wallet.js")],
    loading
});
const NotFound = (0, _reactLoadable2.default)({
    loader: () => __webpack_require__.e(/*! import() */ 104).then(__webpack_require__.t.bind(null, /*! ./containers/commons/404 */ "./dev/js/containers/commons/404.js", 7)),
    modules: ['./containers/commons/404'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/404 */ "./dev/js/containers/commons/404.js")],
    loading
});

const PackageCompare = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(12), __webpack_require__.e(72)]).then(__webpack_require__.t.bind(null, /*! ./containers/diagnosis/PackageCompare.js */ "./dev/js/containers/diagnosis/PackageCompare.js", 7)),
    modules: ['./containers/diagnosis/PackageCompare.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/diagnosis/PackageCompare.js */ "./dev/js/containers/diagnosis/PackageCompare.js")],
    loading
});

const LocationSearch = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(69)]).then(__webpack_require__.t.bind(null, /*! ./containers/opd/LocationSearch.js */ "./dev/js/containers/opd/LocationSearch.js", 7)),
    modules: ['./containers/opd/LocationSearch.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/opd/LocationSearch.js */ "./dev/js/containers/opd/LocationSearch.js")],
    loading
});
const SearchResults = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(9), __webpack_require__.e(8), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(11), __webpack_require__.e(15), __webpack_require__.e(46)]).then(__webpack_require__.t.bind(null, /*! ./containers/opd/SearchResults.js */ "./dev/js/containers/opd/SearchResults.js", 7)),
    modules: ['./containers/opd/SearchResults.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/opd/SearchResults.js */ "./dev/js/containers/opd/SearchResults.js")],
    loading
});
const DoctorProfile = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(9), __webpack_require__.e(8), __webpack_require__.e(11), __webpack_require__.e(15), __webpack_require__.e(18), __webpack_require__.e(16), __webpack_require__.e(19), __webpack_require__.e(25), __webpack_require__.e(41), __webpack_require__.e(43)]).then(__webpack_require__.t.bind(null, /*! ./containers/opd/DoctorProfile.js */ "./dev/js/containers/opd/DoctorProfile.js", 7)),
    modules: ['./containers/opd/DoctorProfile.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/opd/DoctorProfile.js */ "./dev/js/containers/opd/DoctorProfile.js")],
    loading
});
const AppointmentSlot = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(20), __webpack_require__.e(31), __webpack_require__.e(96)]).then(__webpack_require__.t.bind(null, /*! ./containers/opd/AppointmentSlot.js */ "./dev/js/containers/opd/AppointmentSlot.js", 7)),
    modules: ['./containers/opd/AppointmentSlot.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/opd/AppointmentSlot.js */ "./dev/js/containers/opd/AppointmentSlot.js")],
    loading
});
const PatientDetails = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(7), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(13), __webpack_require__.e(16), __webpack_require__.e(20), __webpack_require__.e(25), __webpack_require__.e(26), __webpack_require__.e(29)]).then(__webpack_require__.t.bind(null, /*! ./containers/opd/PatientDetails.js */ "./dev/js/containers/opd/PatientDetails.js", 7)),
    modules: ['./containers/opd/PatientDetails.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/opd/PatientDetails.js */ "./dev/js/containers/opd/PatientDetails.js")],
    loading
});
const SeoBooking = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(7), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(13), __webpack_require__.e(16), __webpack_require__.e(20), __webpack_require__.e(25), __webpack_require__.e(26), __webpack_require__.e(29), __webpack_require__.e(31), __webpack_require__.e(131)]).then(__webpack_require__.t.bind(null, /*! ./containers/opd/SeoBooking.js */ "./dev/js/containers/opd/SeoBooking.js", 7)),
    modules: ['./containers/opd/SeoBooking.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/opd/SeoBooking.js */ "./dev/js/containers/opd/SeoBooking.js")],
    loading
});
const SeoBooking_Lab = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(7), __webpack_require__.e(13), __webpack_require__.e(27), __webpack_require__.e(36), __webpack_require__.e(38), __webpack_require__.e(129)]).then(__webpack_require__.t.bind(null, /*! ./containers/diagnosis/SeoBooking.js */ "./dev/js/containers/diagnosis/SeoBooking.js", 7)),
    modules: ['./containers/diagnosis/SeoBooking.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/diagnosis/SeoBooking.js */ "./dev/js/containers/diagnosis/SeoBooking.js")],
    loading
});
const Booking_OPD = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(18), __webpack_require__.e(30), __webpack_require__.e(41), __webpack_require__.e(108)]).then(__webpack_require__.t.bind(null, /*! ./containers/opd/Booking.js */ "./dev/js/containers/opd/Booking.js", 7)),
    modules: ['./containers/opd/Booking.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/opd/Booking.js */ "./dev/js/containers/opd/Booking.js")],
    loading
});
const TestsList = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(117)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/testsList.js */ "./dev/js/containers/commons/testsList.js", 7)),
    modules: ['./containers/commons/testsList.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/testsList.js */ "./dev/js/containers/commons/testsList.js")],
    loading
});

const ChatFeedback = (0, _reactLoadable2.default)({
    loader: () => __webpack_require__.e(/*! import() */ 51).then(__webpack_require__.t.bind(null, /*! ./containers/commons/ChatFeedback.js */ "./dev/js/containers/commons/ChatFeedback.js", 7)),
    modules: ['./containers/commons/ChatFeedback.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/ChatFeedback.js */ "./dev/js/containers/commons/ChatFeedback.js")],
    loading
});

const IpdList = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(113)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/ipdLists.js */ "./dev/js/containers/commons/ipdLists.js", 7)),
    modules: ['./containers/commons/ipdLists.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/ipdLists.js */ "./dev/js/containers/commons/ipdLists.js")],
    loading
});

const CodPaymentPage = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(65)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/codPayment.js */ "./dev/js/containers/commons/codPayment.js", 7)),
    modules: ['./containers/commons/codPayment.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/codPayment.js */ "./dev/js/containers/commons/codPayment.js")],
    loading
});

/**
 * IPD ROUTES
 */

const AppointmentReschedule = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(20), __webpack_require__.e(26), __webpack_require__.e(57)]).then(__webpack_require__.t.bind(null, /*! ./containers/opd/AppointmentReschedule.js */ "./dev/js/containers/opd/AppointmentReschedule.js", 7)),
    modules: ['./containers/opd/AppointmentReschedule.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/opd/AppointmentReschedule.js */ "./dev/js/containers/opd/AppointmentReschedule.js")],
    loading
});
const Article = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(17), __webpack_require__.e(37), __webpack_require__.e(53)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/article */ "./dev/js/containers/commons/article.js", 7)),
    modules: ['./containers/commons/article'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/article */ "./dev/js/containers/commons/article.js")],
    loading
});
const ArticleList = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(64)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/articleList */ "./dev/js/containers/commons/articleList.js", 7)),
    modules: ['./containers/commons/articleList'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/articleList */ "./dev/js/containers/commons/articleList.js")],
    loading
});
const StaticPages = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(44)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/StaticPages */ "./dev/js/containers/commons/StaticPages.js", 7)),
    modules: ['./containers/commons/StaticPages'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/StaticPages */ "./dev/js/containers/commons/StaticPages.js")],
    loading
});
const CitiesSiteMap = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(71)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/CitiesSiteMap.js */ "./dev/js/containers/commons/CitiesSiteMap.js", 7)),
    modules: ['./containers/commons/CitiesSiteMap.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/CitiesSiteMap.js */ "./dev/js/containers/commons/CitiesSiteMap.js")],
    loading
});
const SpecializationSiteMap = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(80)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/SpecializationSiteMap */ "./dev/js/containers/commons/SpecializationSiteMap.js", 7)),
    modules: ['./containers/commons/SpecializationSiteMap'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/SpecializationSiteMap */ "./dev/js/containers/commons/SpecializationSiteMap.js")],
    loading
});
const adsBooking = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(115)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/adsBooking.js */ "./dev/js/containers/commons/adsBooking.js", 7)),
    modules: ['./containers/commons/adsBooking.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/adsBooking.js */ "./dev/js/containers/commons/adsBooking.js")],
    loading
});
const InsuranceStaticView = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(14), __webpack_require__.e(122)]).then(__webpack_require__.t.bind(null, /*! ./containers/insurance/InsuranceStaticView */ "./dev/js/containers/insurance/InsuranceStaticView.js", 7)),
    modules: ['./containers/insurance/InsuranceStaticView'],
    webpack: () => [/*require.resolve*/(/*! ./containers/insurance/InsuranceStaticView */ "./dev/js/containers/insurance/InsuranceStaticView.js")],
    loading
});
const InsuranceView = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(14), __webpack_require__.e(124)]).then(__webpack_require__.t.bind(null, /*! ./containers/insurance/InsuranceView */ "./dev/js/containers/insurance/InsuranceView.js", 7)),
    modules: ['./containers/insurance/InsuranceView'],
    webpack: () => [/*require.resolve*/(/*! ./containers/insurance/InsuranceView */ "./dev/js/containers/insurance/InsuranceView.js")],
    loading
});
const InsuranceDetails = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(14), __webpack_require__.e(34), __webpack_require__.e(120)]).then(__webpack_require__.t.bind(null, /*! ./containers/insurance/InsuranceDetails */ "./dev/js/containers/insurance/InsuranceDetails.js", 7)),
    modules: ['./containers/insurance/InsuranceDetails'],
    webpack: () => [/*require.resolve*/(/*! ./containers/insurance/InsuranceDetails */ "./dev/js/containers/insurance/InsuranceDetails.js")],
    loading
});
const InsuranceReview = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(60)]).then(__webpack_require__.t.bind(null, /*! ./containers/insurance/InsuranceReview */ "./dev/js/containers/insurance/InsuranceReview.js", 7)),
    modules: ['./containers/insurance/InsuranceReview'],
    webpack: () => [/*require.resolve*/(/*! ./containers/insurance/InsuranceReview */ "./dev/js/containers/insurance/InsuranceReview.js")],
    loading
});
const InsuranceSuccess = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(123)]).then(__webpack_require__.t.bind(null, /*! ./containers/insurance/InsuranceSuccess */ "./dev/js/containers/insurance/InsuranceSuccess.js", 7)),
    modules: ['./containers/insurance/InsuranceSuccess'],
    webpack: () => [/*require.resolve*/(/*! ./containers/insurance/InsuranceSuccess */ "./dev/js/containers/insurance/InsuranceSuccess.js")],
    loading
});
const InsuranceViewUI = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(116)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/InsuranceView.js */ "./dev/js/containers/commons/InsuranceView.js", 7)),
    modules: ['./containers/commons/InsuranceView.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/InsuranceView.js */ "./dev/js/containers/commons/InsuranceView.js")],
    loading
});
const InsuranceCertificate = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(90)]).then(__webpack_require__.t.bind(null, /*! ./containers/insurance/InsuranceCertificate.js */ "./dev/js/containers/insurance/InsuranceCertificate.js", 7)),
    modules: ['./containers/insurance/InsuranceCertificate.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/insurance/InsuranceCertificate.js */ "./dev/js/containers/insurance/InsuranceCertificate.js")],
    loading
});
const InsuranceCancellation = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(89)]).then(__webpack_require__.t.bind(null, /*! ./containers/insurance/InsuranceCancellation.js */ "./dev/js/containers/insurance/InsuranceCancellation.js", 7)),
    modules: ['./containers/insurance/InsuranceCancellation.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/insurance/InsuranceCancellation.js */ "./dev/js/containers/insurance/InsuranceCancellation.js")],
    loading
});

const InsuranceBankDetails = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(88)]).then(__webpack_require__.t.bind(null, /*! ./containers/insurance/InsuranceBankDetails.js */ "./dev/js/containers/insurance/InsuranceBankDetails.js", 7)),
    modules: ['./containers/insurance/InsuranceBankDetails.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/insurance/InsuranceBankDetails.js */ "./dev/js/containers/insurance/InsuranceBankDetails.js")],
    loading
});

const InsuranceNetwork = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(119)]).then(__webpack_require__.t.bind(null, /*! ./containers/insurance/InsuranceNetwork.js */ "./dev/js/containers/insurance/InsuranceNetwork.js", 7)),
    modules: ['./containers/insurance/InsuranceNetwork.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/insurance/InsuranceNetwork.js */ "./dev/js/containers/insurance/InsuranceNetwork.js")],
    loading
});
const InsuranceEndorsementDetails = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(14), __webpack_require__.e(34), __webpack_require__.e(121)]).then(__webpack_require__.t.bind(null, /*! ./containers/insurance/InsuranceEndorsementDetails */ "./dev/js/containers/insurance/InsuranceEndorsementDetails.js", 7)),
    modules: ['./containers/insurance/InsuranceEndorsementDetails'],
    webpack: () => [/*require.resolve*/(/*! ./containers/insurance/InsuranceEndorsementDetails */ "./dev/js/containers/insurance/InsuranceEndorsementDetails.js")],
    loading
});
const IPDInfo = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(11), __webpack_require__.e(15), __webpack_require__.e(22), __webpack_require__.e(39), __webpack_require__.e(55)]).then(__webpack_require__.t.bind(null, /*! ./containers/ipd/IpdInfo.js */ "./dev/js/containers/ipd/IpdInfo.js", 7)),
    modules: ['./containers/ipd/IpdInfo.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/ipd/IpdInfo.js */ "./dev/js/containers/ipd/IpdInfo.js")],
    loading
});
const IpdForm = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(7), __webpack_require__.e(22)]).then(__webpack_require__.t.bind(null, /*! ./containers/ipd/IpdForm.js */ "./dev/js/containers/ipd/IpdForm.js", 7)),
    modules: ['./containers/ipd/IpdForm.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/ipd/IpdForm.js */ "./dev/js/containers/ipd/IpdForm.js")],
    loading
});
const IpdHospitalSearch = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(12), __webpack_require__.e(39), __webpack_require__.e(52)]).then(__webpack_require__.t.bind(null, /*! ./containers/ipd/IpdHospitalSearch.js */ "./dev/js/containers/ipd/IpdHospitalSearch.js", 7)),
    modules: ['./containers/ipd/IpdHospitalSearch.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/ipd/IpdHospitalSearch.js */ "./dev/js/containers/ipd/IpdHospitalSearch.js")],
    loading
});
const IpdHospitalDetail = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(7), __webpack_require__.e(9), __webpack_require__.e(8), __webpack_require__.e(11), __webpack_require__.e(15), __webpack_require__.e(17), __webpack_require__.e(16), __webpack_require__.e(19), __webpack_require__.e(22), __webpack_require__.e(37), __webpack_require__.e(50)]).then(__webpack_require__.t.bind(null, /*! ./containers/ipd/IpdHospitalDetail.js */ "./dev/js/containers/ipd/IpdHospitalDetail.js", 7)),
    modules: ['./containers/ipd/IpdHospitalDetail.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/ipd/IpdHospitalDetail.js */ "./dev/js/containers/ipd/IpdHospitalDetail.js")],
    loading
});
const IpdDetail = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(130)]).then(__webpack_require__.t.bind(null, /*! ./containers/ipd/IpdDetail.js */ "./dev/js/containers/ipd/IpdDetail.js", 7)),
    modules: ['./containers/ipd/IpdDetail.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/ipd/IpdDetail.js */ "./dev/js/containers/ipd/IpdDetail.js")],
    loading
});
const Booking_LAB = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(18), __webpack_require__.e(30), __webpack_require__.e(83)]).then(__webpack_require__.t.bind(null, /*! ./containers/diagnosis/Booking.js */ "./dev/js/containers/diagnosis/Booking.js", 7)),
    modules: ['./containers/diagnosis/Booking.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/diagnosis/Booking.js */ "./dev/js/containers/diagnosis/Booking.js")],
    loading
});
const DX_SearchCriteria = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(10), __webpack_require__.e(35), __webpack_require__.e(107)]).then(__webpack_require__.t.bind(null, /*! ./containers/diagnosis/SearchCriteria.js */ "./dev/js/containers/diagnosis/SearchCriteria.js", 7)),
    modules: ['./containers/diagnosis/SearchCriteria.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/diagnosis/SearchCriteria.js */ "./dev/js/containers/diagnosis/SearchCriteria.js")],
    loading
});
const DX_SearchResults = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(9), __webpack_require__.e(8), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(23), __webpack_require__.e(32), __webpack_require__.e(58)]).then(__webpack_require__.t.bind(null, /*! ./containers/diagnosis/SearchResults.js */ "./dev/js/containers/diagnosis/SearchResults.js", 7)),
    modules: ['./containers/diagnosis/SearchResults.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/diagnosis/SearchResults.js */ "./dev/js/containers/diagnosis/SearchResults.js")],
    loading
});
const Lab = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(18), __webpack_require__.e(19), __webpack_require__.e(45)]).then(__webpack_require__.t.bind(null, /*! ./containers/diagnosis/Lab.js */ "./dev/js/containers/diagnosis/Lab.js", 7)),
    modules: ['./containers/diagnosis/Lab.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/diagnosis/Lab.js */ "./dev/js/containers/diagnosis/Lab.js")],
    loading
});
const DX_BookingSummary = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(7), __webpack_require__.e(13), __webpack_require__.e(27)]).then(__webpack_require__.t.bind(null, /*! ./containers/diagnosis/BookingSummary.js */ "./dev/js/containers/diagnosis/BookingSummary.js", 7)),
    modules: ['./containers/diagnosis/BookingSummary.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/diagnosis/BookingSummary.js */ "./dev/js/containers/diagnosis/BookingSummary.js")],
    loading
});
const TestSelector = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(38), __webpack_require__.e(114)]).then(__webpack_require__.t.bind(null, /*! ./containers/diagnosis/TestSelector */ "./dev/js/containers/diagnosis/TestSelector.js", 7)),
    modules: ['./containers/diagnosis/TestSelector'],
    webpack: () => [/*require.resolve*/(/*! ./containers/diagnosis/TestSelector */ "./dev/js/containers/diagnosis/TestSelector.js")],
    loading
});
const AppointmentSlot_Lab = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(36), __webpack_require__.e(95)]).then(__webpack_require__.t.bind(null, /*! ./containers/diagnosis/AppointmentSlot.js */ "./dev/js/containers/diagnosis/AppointmentSlot.js", 7)),
    modules: ['./containers/diagnosis/AppointmentSlot.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/diagnosis/AppointmentSlot.js */ "./dev/js/containers/diagnosis/AppointmentSlot.js")],
    loading
});
const HealthPackage = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(78)]).then(__webpack_require__.t.bind(null, /*! ./containers/diagnosis/HealthPackage */ "./dev/js/containers/diagnosis/HealthPackage.js", 7)),
    modules: ['./containers/diagnosis/HealthPackage'],
    webpack: () => [/*require.resolve*/(/*! ./containers/diagnosis/HealthPackage */ "./dev/js/containers/diagnosis/HealthPackage.js")],
    loading
});
const HealthPackageAdvisor = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(106)]).then(__webpack_require__.t.bind(null, /*! ./containers/diagnosis/HealthPackageAdvisor */ "./dev/js/containers/diagnosis/HealthPackageAdvisor.js", 7)),
    modules: ['./containers/diagnosis/HealthPackageAdvisor'],
    webpack: () => [/*require.resolve*/(/*! ./containers/diagnosis/HealthPackageAdvisor */ "./dev/js/containers/diagnosis/HealthPackageAdvisor.js")],
    loading
});
const ThyrocarePackage = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(9), __webpack_require__.e(118)]).then(__webpack_require__.t.bind(null, /*! ./containers/diagnosis/ThyrocarePackage */ "./dev/js/containers/diagnosis/ThyrocarePackage.js", 7)),
    modules: ['./containers/diagnosis/ThyrocarePackage'],
    webpack: () => [/*require.resolve*/(/*! ./containers/diagnosis/ThyrocarePackage */ "./dev/js/containers/diagnosis/ThyrocarePackage.js")],
    loading
});
const TaxSaverTC = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(10), __webpack_require__.e(98)]).then(__webpack_require__.t.bind(null, /*! ./components/diagnosis/searchPackages/TaxSaverTC.js */ "./dev/js/components/diagnosis/searchPackages/TaxSaverTC.js", 7)),
    modules: ['./components/diagnosis/searchPackages/TaxSaverTC.js'],
    webpack: () => [/*require.resolve*/(/*! ./components/diagnosis/searchPackages/TaxSaverTC.js */ "./dev/js/components/diagnosis/searchPackages/TaxSaverTC.js")],
    loading
});
const DX_SearchPackages = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(9), __webpack_require__.e(8), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(47)]).then(__webpack_require__.t.bind(null, /*! ./containers/diagnosis/SearchPackages.js */ "./dev/js/containers/diagnosis/SearchPackages.js", 7)),
    modules: ['./containers/diagnosis/SearchPackages.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/diagnosis/SearchPackages.js */ "./dev/js/containers/diagnosis/SearchPackages.js")],
    loading
});
const Home = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(24), __webpack_require__.e(21), __webpack_require__.e(28), __webpack_require__.e(40), __webpack_require__.e(48)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/Home */ "./dev/js/containers/commons/Home.js", 7)),
    modules: ['./containers/commons/Home'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/Home */ "./dev/js/containers/commons/Home.js")],
    loading
});
const HomeChat = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(28), __webpack_require__.e(94)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/HomeChat */ "./dev/js/containers/commons/HomeChat.js", 7)),
    modules: ['./containers/commons/HomeChat'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/HomeChat */ "./dev/js/containers/commons/HomeChat.js")],
    loading
});
const Notifications = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(84)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/Notifications */ "./dev/js/containers/commons/Notifications.js", 7)),
    modules: ['./containers/commons/Notifications'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/Notifications */ "./dev/js/containers/commons/Notifications.js")],
    loading
});
const ChatHistory = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(103)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/chatHistory */ "./dev/js/containers/commons/chatHistory.js", 7)),
    modules: ['./containers/commons/chatHistory'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/chatHistory */ "./dev/js/containers/commons/chatHistory.js")],
    loading
});

const UserProfile = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(7), __webpack_require__.e(33), __webpack_require__.e(42)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/UserProfile.js */ "./dev/js/containers/commons/UserProfile.js", 7)),
    modules: ['./containers/commons/UserProfile.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/UserProfile.js */ "./dev/js/containers/commons/UserProfile.js")],
    loading
});

const Payment = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(82)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/Payment */ "./dev/js/containers/commons/Payment.js", 7)),
    modules: ['./containers/commons/Payment'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/Payment */ "./dev/js/containers/commons/Payment.js")],
    loading
});

const HospitalList = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(77)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/hospitalList.js */ "./dev/js/containers/commons/hospitalList.js", 7)),
    modules: ['./containers/commons/hospitalList.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/hospitalList.js */ "./dev/js/containers/commons/hospitalList.js")],
    loading
});

const SingleChatPageFeedback = (0, _reactLoadable2.default)({
    loader: () => __webpack_require__.e(/*! import() */ 101).then(__webpack_require__.t.bind(null, /*! ./containers/commons/SingleChatPageFeedback.js */ "./dev/js/containers/commons/SingleChatPageFeedback.js", 7)),
    modules: ['./containers/commons/SingleChatPageFeedback.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/SingleChatPageFeedback.js */ "./dev/js/containers/commons/SingleChatPageFeedback.js")],
    loading
});

const categoryTestResults = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(8), __webpack_require__.e(10), __webpack_require__.e(12), __webpack_require__.e(23), __webpack_require__.e(32), __webpack_require__.e(70)]).then(__webpack_require__.t.bind(null, /*! ./containers/diagnosis/categoryTestResults.js */ "./dev/js/containers/diagnosis/categoryTestResults.js", 7)),
    modules: ['./containers/diagnosis/categoryTestResults.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/diagnosis/categoryTestResults.js */ "./dev/js/containers/diagnosis/categoryTestResults.js")],
    loading
});

const LensFit = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(17), __webpack_require__.e(86)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/lensFit */ "./dev/js/containers/commons/lensFit.js", 7)),
    modules: ['./containers/commons/lensFit'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/lensFit */ "./dev/js/containers/commons/lensFit.js")],
    loading
});

const CancelPolicyApp = (0, _reactLoadable2.default)({
    loader: () => __webpack_require__.e(/*! import() */ 110).then(__webpack_require__.t.bind(null, /*! ./containers/commons/cancelPolicyApp.js */ "./dev/js/containers/commons/cancelPolicyApp.js", 7)),
    modules: ['./containers/commons/cancelPolicyApp.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/cancelPolicyApp.js */ "./dev/js/containers/commons/cancelPolicyApp.js")],
    loading
});

const VipClub = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(5), __webpack_require__.e(17), __webpack_require__.e(102)]).then(__webpack_require__.t.bind(null, /*! ./containers/commons/VipClub */ "./dev/js/containers/commons/VipClub.js", 7)),
    modules: ['./containers/commons/VipClub'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/VipClub */ "./dev/js/containers/commons/VipClub.js")],
    loading
});

const VipClubView = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(24), __webpack_require__.e(21), __webpack_require__.e(40), __webpack_require__.e(56)]).then(__webpack_require__.t.bind(null, /*! ./containers/vipClub/VipClub */ "./dev/js/containers/vipClub/VipClub.js", 7)),
    modules: ['./containers/vipClub/VipClub'],
    webpack: () => [/*require.resolve*/(/*! ./containers/vipClub/VipClub */ "./dev/js/containers/vipClub/VipClub.js")],
    loading
});

const VipClubMemberDetailsView = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(7), __webpack_require__.e(24), __webpack_require__.e(54)]).then(__webpack_require__.t.bind(null, /*! ./containers/vipClub/VipClubMemberDetails */ "./dev/js/containers/vipClub/VipClubMemberDetails.js", 7)),
    modules: ['./containers/vipClub/VipClubMemberDetails'],
    webpack: () => [/*require.resolve*/(/*! ./containers/vipClub/VipClubMemberDetails */ "./dev/js/containers/vipClub/VipClubMemberDetails.js")],
    loading
});

const VipClubActivatedView = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(67)]).then(__webpack_require__.t.bind(null, /*! ./containers/vipClub/VipClubActivatedDetails */ "./dev/js/containers/vipClub/VipClubActivatedDetails.js", 7)),
    modules: ['./containers/vipClub/VipClubActivatedDetails'],
    webpack: () => [/*require.resolve*/(/*! ./containers/vipClub/VipClubActivatedDetails */ "./dev/js/containers/vipClub/VipClubActivatedDetails.js")],
    loading
});
const VipClubStaticView = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(112)]).then(__webpack_require__.t.bind(null, /*! ./containers/vipClub/VipClubStaticView */ "./dev/js/containers/vipClub/VipClubStaticView.js", 7)),
    modules: ['./containers/vipClub/VipClubStaticView'],
    webpack: () => [/*require.resolve*/(/*! ./containers/vipClub/VipClubStaticView */ "./dev/js/containers/vipClub/VipClubStaticView.js")],
    loading
});

const PaypalCancellation = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(125)]).then(__webpack_require__.t.bind(null, /*! ./components/commons/PaypalCancellation.js */ "./dev/js/components/commons/PaypalCancellation.js", 7)),
    modules: ['./components/commons/PaypalCancellation.js'],
    webpack: () => [/*require.resolve*/(/*! ./components/commons/PaypalCancellation.js */ "./dev/js/components/commons/PaypalCancellation.js")],
    loading
});

const MedlifePolicyApp = (0, _reactLoadable2.default)({
    loader: () => __webpack_require__.e(/*! import() */ 111).then(__webpack_require__.t.bind(null, /*! ./containers/commons/medlifePolicyApp.js */ "./dev/js/containers/commons/medlifePolicyApp.js", 7)),
    modules: ['./containers/commons/medlifePolicyApp.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/commons/medlifePolicyApp.js */ "./dev/js/containers/commons/medlifePolicyApp.js")],
    loading
});

const CommonTnC = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(97)]).then(__webpack_require__.t.bind(null, /*! ./components/commons/commonTnC.js */ "./dev/js/components/commons/commonTnC.js", 7)),
    modules: ['./components/commons/commonTnC.js'],
    webpack: () => [/*require.resolve*/(/*! ./components/commons/commonTnC.js */ "./dev/js/components/commons/commonTnC.js")],
    loading
});

const ChatRatings = (0, _reactLoadable2.default)({
    loader: () => __webpack_require__.e(/*! import() */ 126).then(__webpack_require__.t.bind(null, /*! ./components/commons/chatRatings.js */ "./dev/js/components/commons/chatRatings.js", 7)),
    modules: ['./components/commons/chatRatings.js'],
    webpack: () => [/*require.resolve*/(/*! ./components/commons/chatRatings.js */ "./dev/js/components/commons/chatRatings.js")],
    loading
});

const DigitPlans = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(62)]).then(__webpack_require__.t.bind(null, /*! ./containers/vipClub/digitInsurance.js */ "./dev/js/containers/vipClub/digitInsurance.js", 7)),
    modules: ['./containers/vipClub/digitInsurance.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/vipClub/digitInsurance.js */ "./dev/js/containers/vipClub/digitInsurance.js")],
    loading
});
const DigitForm = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(79)]).then(__webpack_require__.t.bind(null, /*! ./containers/vipClub/DigitInsuranceFormPage.js */ "./dev/js/containers/vipClub/DigitInsuranceFormPage.js", 7)),
    modules: ['./containers/vipClub/DigitInsuranceFormPage.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/vipClub/DigitInsuranceFormPage.js */ "./dev/js/containers/vipClub/DigitInsuranceFormPage.js")],
    loading
});

const DigitReview = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(61)]).then(__webpack_require__.t.bind(null, /*! ./containers/vipClub/DigitSummaryPage.js */ "./dev/js/containers/vipClub/DigitSummaryPage.js", 7)),
    modules: ['./containers/vipClub/DigitSummaryPage.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/vipClub/DigitSummaryPage.js */ "./dev/js/containers/vipClub/DigitSummaryPage.js")],
    loading
});
const DigitOrder = (0, _reactLoadable2.default)({
    loader: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(91)]).then(__webpack_require__.t.bind(null, /*! ./containers/vipClub/DigitOrderPage.js */ "./dev/js/containers/vipClub/DigitOrderPage.js", 7)),
    modules: ['./containers/vipClub/DigitOrderPage.js'],
    webpack: () => [/*require.resolve*/(/*! ./containers/vipClub/DigitOrderPage.js */ "./dev/js/containers/vipClub/DigitOrderPage.js")],
    loading
});
/**
 * RENDER_ON_SERVER : true will enable Server-side-rendering  for that route.
 */

let routes = [{ path: '/', exact: true, component: Home, RENDER_ON_SERVER: true }, { path: '/referral', exact: true, component: Referral }, { path: '/online-consultation', exact: true, component: HomeChat, RENDER_ON_SERVER: true }, { path: '/user', component: UserProfile }, { path: '/locationsearch', exact: true, component: LocationSearch }, { path: '/chathistory', exact: true, component: ChatHistory }, { path: '/notifications', exact: true, component: Notifications }, { path: '/login', exact: true, component: UserLogin }, { path: '/signup', exact: true, component: UserSignup }, { path: '/addprofile', exact: true, component: UserSignup }, { path: '/wallet', exact: true, component: Wallet }, { path: `/*-dsdp`, component: Article, RENDER_ON_SERVER: true }, { path: `/*-mddp`, component: Article, RENDER_ON_SERVER: true }, { path: `/*-artdp`, component: Article, RENDER_ON_SERVER: true }, { path: `/*-nmdp`, component: Article, RENDER_ON_SERVER: true }, { path: `/all-diseases`, component: ArticleList, RENDER_ON_SERVER: true }, { path: `/all-medicines`, component: ArticleList, RENDER_ON_SERVER: true }, { path: `/all-articles`, component: ArticleList, RENDER_ON_SERVER: true }, { path: '/doctors-near-me', exact: true, component: ArticleList, RENDER_ON_SERVER: true }, { path: '/payment/:id', exact: true, component: Payment }, { path: '/order/summary/:id', exact: true, component: OrderSummary }, { path: '/mobileviewchat', exact: true, component: MobileViewChat }, { path: '/search', exact: true, component: Search }, { path: '/offers', exact: true, component: Offers }, { path: '/cart', exact: true, component: Cart }, { path: '/order-medicine', exact: true, component: OrderMedicine }, { path: '/opd/searchresults', exact: true, component: SearchResults, RENDER_ON_SERVER: true }, { path: '/opd/searchresults/location=*', exact: true, component: SearchResults, RENDER_ON_SERVER: true }, { path: '/*-sptcit', exact: true, component: SearchResults, RENDER_ON_SERVER: true }, { path: '/*-sptlitcit', exact: true, component: SearchResults, RENDER_ON_SERVER: true }, { path: '/*-ipddp', exact: true, component: SearchResults, RENDER_ON_SERVER: true }, { path: '/opd/doctor/:id', exact: true, component: DoctorProfile, RENDER_ON_SERVER: true }, { path: '/*-dpp', exact: true, component: DoctorProfile, RENDER_ON_SERVER: true }, { path: '/opd/doctor/:id/:clinicId/book', exact: true, component: AppointmentSlot }, { path: '/opd/doctor/:id/:clinicId/bookdetails', exact: true, component: PatientDetails }, { path: '/*-dpp/booking', exact: true, component: SeoBooking, RENDER_ON_SERVER: true }, { path: '/coupon/:type/:id/:cid', exact: true, private: true, component: CouponSelectNewView }, { path: '/opd/appointment/:refId', exact: true, component: Booking_OPD }, { path: '/opd/reschedule/:refId', exact: true, component: AppointmentReschedule }, { path: '/lab/searchresults', exact: true, component: DX_SearchResults, RENDER_ON_SERVER: true }, { path: '/lab/searchresults/location=*', exact: true, component: DX_SearchResults, RENDER_ON_SERVER: true }, { path: '/*-lbcit', exact: true, component: DX_SearchResults, RENDER_ON_SERVER: true }, { path: '/*-lblitcit', exact: true, component: DX_SearchResults, RENDER_ON_SERVER: true }, { path: '/lab/:id', exact: true, component: Lab, RENDER_ON_SERVER: true }, { path: '/*-lpp', exact: true, component: Lab, RENDER_ON_SERVER: true }, { path: '/lab/:id/tests', exact: true, component: TestSelector }, { path: '/lab/:id/timeslots', exact: true, component: AppointmentSlot_Lab }, { path: '/lab/:id/book', exact: true, component: DX_BookingSummary }, { path: '/*-lpp/booking', exact: true, component: SeoBooking_Lab, RENDER_ON_SERVER: true }, { path: '/lab/appointment/:refId', exact: true, component: Booking_LAB }, { path: '/about', exact: true, component: StaticPages, RENDER_ON_SERVER: true }, { path: '/howitworks', exact: true, component: StaticPages, RENDER_ON_SERVER: true }, { path: '/privacy', exact: true, component: StaticPages, RENDER_ON_SERVER: true }, { path: '/disclaimer', exact: true, component: StaticPages, RENDER_ON_SERVER: true }, { path: '/contact', exact: true, component: StaticPages, RENDER_ON_SERVER: true }, { path: '/terms', exact: true, component: StaticPages, RENDER_ON_SERVER: true }, { path: '/careers', exact: true, component: StaticPages, RENDER_ON_SERVER: true }, { path: '/media', exact: true, component: StaticPages, RENDER_ON_SERVER: true }, { path: '/cancelpolicy', exact: true, component: StaticPages, RENDER_ON_SERVER: true }, { path: '/doctorsignup', exact: true, component: StaticPages, RENDER_ON_SERVER: true }, { path: '/health-package-compare', exact: true, component: HealthPackage, RENDER_ON_SERVER: true }, { path: '/thyrocare-aarogyam-packages', exact: true, component: ThyrocarePackage, RENDER_ON_SERVER: true }, { path: '/agent/login', exact: true, component: AgentLogin }, { path: '/agent/booking', exact: true, component: DirectBooking }, { path: '/view-all-ratings', exact: true, component: RatingsView, RENDER_ON_SERVER: false }, { path: '/myratings', exact: true, component: MyRatings, RENDER_ON_SERVER: false }, { path: '/speciality-inventory', exact: true, component: SpecializationSiteMap, RENDER_ON_SERVER: true }, { path: '/speciality-inventory/:speciality', exact: true, component: SpecializationSiteMap, RENDER_ON_SERVER: true }, { path: '/city-inventory', exact: true, component: CitiesSiteMap, RENDER_ON_SERVER: true }, { path: '/city-inventory/:city', exact: true, component: CitiesSiteMap, RENDER_ON_SERVER: true }, { path: '/tests', exact: true, component: TestsList, RENDER_ON_SERVER: true }, { path: '/search/testinfo', exact: true, component: searchTestInfo, RENDER_ON_SERVER: true }, { path: '/bookings', exact: true, component: adsBooking }, { path: '/full-body-checkup-health-packages', exact: true, component: DX_SearchPackages, RENDER_ON_SERVER: true }, { path: '/health-package-advisor', exact: true, component: HealthPackageAdvisor, RENDER_ON_SERVER: true }, { path: '/searchpackages', exact: true, component: DX_SearchPackages, redirect: false, redirectTo: "full-body-checkup-health-packages", RENDER_ON_SERVER: true }, { path: '/tax-saver-health-packages', exact: true, component: DX_SearchPackages, RENDER_ON_SERVER: true }, { path: '/tax-saver-health-packages-tc', exact: true, component: TaxSaverTC, RENDER_ON_SERVER: true }, { path: `/*-tpp`, component: searchTestInfo, RENDER_ON_SERVER: true }, { path: '/sms/booking', exact: true, component: DirectBooking }, { path: '/prime/plans', exact: true, component: PrimeCare }, { path: '/prime/booking', exact: true, component: PrimeCareBooking }, { path: '/prime/success', exact: true, component: PrimeCareSuccess }, { path: '/compare', exact: true, component: Compare }, { path: '/ipdInfo', exact: true, component: IPDInfo, RENDER_ON_SERVER: true }, { path: '/*-ipdp', exact: true, component: IPDInfo, RENDER_ON_SERVER: true }, { path: '/ipd/:id/getPriceEstimate', exact: true, component: IpdForm }, { path: '/ipd/searchHospitals', exact: true, component: IpdHospitalSearch, RENDER_ON_SERVER: true }, { path: '/*-ipdhp', exact: true, component: IpdHospitalSearch, RENDER_ON_SERVER: true }, { path: '/*-hspcit', exact: true, component: IpdHospitalSearch, RENDER_ON_SERVER: true }, { path: '/*-hsplitcit', exact: true, component: IpdHospitalSearch, RENDER_ON_SERVER: true }, { path: '/ipd/hospital/:hospitalId', exact: true, component: IpdHospitalDetail, RENDER_ON_SERVER: true }, { path: '/*-hpp', exact: true, component: IpdHospitalDetail, RENDER_ON_SERVER: true }, { path: '/ipd/:ipd_id/detail', exact: true, component: IpdDetail }, { path: '/chat/feedback', component: ChatFeedback }, { path: '/package/compare', exact: true, component: PackageCompare }, { path: '/*-hpcp', exact: true, component: PackageCompare }, { path: '/ipd-procedures', exact: true, component: IpdList, RENDER_ON_SERVER: true }, { path: '/order/paymentSummary', exact: true, component: CodPaymentPage }, { path: '/hospitals', exact: true, component: HospitalList, RENDER_ON_SERVER: true }, { path: '/Chat/Review', exact: true, component: SingleChatPageFeedback }, { path: '/categoryTestResults', exact: true, component: categoryTestResults }, { path: '/*-tpcp', exact: true, component: categoryTestResults }, { path: '/hospitals/inventory', exact: true, component: HospitalList, RENDER_ON_SERVER: true }, { path: '/lensfit-tnc', exact: true, component: LensFit, RENDER_ON_SERVER: true }, { path: '/cancel-policy-app', exact: true, component: CancelPolicyApp }, { path: '/vip-club', exact: true, component: VipClub, RENDER_ON_SERVER: true }, { path: '/lensfit', exact: true, component: VipClub, RENDER_ON_SERVER: true }, { path: '/vip-club-details', exact: true, component: VipClubView }, { path: '/vip-club-member-details', exact: true, component: VipClubMemberDetailsView }, { path: '/vip-club-activated-details', exact: true, component: VipClubActivatedView }, { path: '/vip-club-static-pages', exact: true, component: VipClubStaticView }, { path: '/terms-conditions-policy-paypal', exact: true, component: PaypalCancellation }, { path: '/vip-gold-details', exact: true, component: VipClubView }, { path: '/vip-club-gold-details', exact: true, component: VipClubView }, { path: '/medlife-tnc-app', exact: true, component: MedlifePolicyApp }, { path: '/terms-conditions/:id', exact: true, component: CommonTnC }, { path: '/chat-ratings', exact: true, component: ChatRatings }, { path: '/covid-plans', exact: true, component: DigitPlans }, { path: '/covid-form', exact: true, component: DigitForm }, { path: '/covid-review', exact: true, component: DigitReview }, { path: '/covid-order/summary/:id', exact: true, component: DigitOrder }];

if (_config2.default.ENABLE_INSURANCE) {
    routes = routes.concat([{ path: '/insurance1', exact: true, component: InsuranceViewUI }, { path: '/insurance/insurance-plans', exact: true, component: InsuranceStaticView, RENDER_ON_SERVER: true }, { path: '/insurance/insurance-plan-view', exact: true, component: InsuranceView, RENDER_ON_SERVER: true }, { path: '/insurance/insurance-user-details', exact: true, component: InsuranceDetails, RENDER_ON_SERVER: true }, { path: '/insurance/insurance-endorsement-details', exact: true, component: InsuranceEndorsementDetails, RENDER_ON_SERVER: true }, { path: '/insurance/insurance-user-details-review', exact: true, component: InsuranceReview, RENDER_ON_SERVER: true }, { path: '/insurance/complete', exact: true, component: InsuranceSuccess, RENDER_ON_SERVER: true }, { path: '/insurance/certificate', exact: true, component: InsuranceCertificate, RENDER_ON_SERVER: true }, { path: '/insurance/cancelpolicy', exact: true, component: InsuranceCancellation, RENDER_ON_SERVER: true }, { path: '/insurance/canceldetails', exact: true, component: InsuranceBankDetails, RENDER_ON_SERVER: true }, { path: '/insurance/network', exact: true, component: InsuranceNetwork, RENDER_ON_SERVER: true }]);
}

routes.push({ path: '*', component: NotFound, NO_MATCH: true });

class RouterConfig extends _react.Component {

    render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_HelmetTags2.default, null),
            _react2.default.createElement(_reactRouterDom.Route, {
                render: ({ location }) => {
                    return _react2.default.createElement(
                        _reactTransitionGroup.TransitionGroup,
                        null,
                        _react2.default.createElement(
                            _reactTransitionGroup.CSSTransition,
                            {
                                key: location.pathname,
                                classNames: 'fade',
                                timeout: { enter: 250, exit: 0 },
                                exit: false
                            },
                            _react2.default.createElement(
                                _reactRouterDom.Switch,
                                { location: location },
                                routes.map((route, i) => _react2.default.createElement(_reactRouterDom.Route, _extends({}, route, { key: i })))
                            )
                        )
                    );
                }
            })
        );
    }

}

RouterConfig.ROUTES = routes;
exports.default = RouterConfig;

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _routes = __webpack_require__(/*! ./dev/js/routes.js */ "./dev/js/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(/*! redux-logger */ "redux-logger");

var _index = __webpack_require__(/*! ./dev/js/reducers/index.js */ "./dev/js/reducers/index.js");

var _index2 = _interopRequireDefault(_index);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _config = __webpack_require__(/*! ./dev/js/config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _reactLoadable = __webpack_require__(/*! react-loadable */ "react-loadable");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _cookie = __webpack_require__(/*! ./dev/js/helpers/storage/cookie.js */ "./dev/js/helpers/storage/cookie.js");

var _cookie2 = _interopRequireDefault(_cookie);

var _redisHelper = __webpack_require__(/*! ./dev/js/helpers/storage/redis-helper.js */ "./dev/js/helpers/storage/redis-helper.js");

var _redisHelper2 = _interopRequireDefault(_redisHelper);

var _index3 = __webpack_require__(/*! ./dev/js/actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// set env vars
__webpack_require__(/*! dotenv */ "dotenv").config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
global.document = null;

const path = __webpack_require__(/*! path */ "path");
const http = __webpack_require__(/*! http */ "http");
const Express = __webpack_require__(/*! express */ "express");
const app = new Express();
const server = new http.Server(app);
const axios = __webpack_require__(/*! axios */ "axios");
const fs = __webpack_require__(/*! fs */ "fs");
const DIST_FOLDER = './dist/';
const Sentry = __webpack_require__(/*! @sentry/node */ "@sentry/node");
const stats = JSON.parse(_readFileSync(`${DIST_FOLDER}asset-loadable.json`));
const index_bundle = _find_index_bundle();
const compression = __webpack_require__(/*! compression */ "compression");

let cache = {
    html: "",
    storeData: "",
    helmet: null,
    split_bundles: []
};

let last_cache_time = null;

const helmet = __webpack_require__(/*! helmet */ "helmet");
//import STORAGE from './dev/js/helpers/storage'


// import { getBundles } from 'react-loadable/webpack'
// import { getBundles } from 'react-loadable-ssr-addon';

// GZIP Compression
app.use(compression());

if (_config2.default.RAVEN_SERVER_DSN_KEY && false) {
    Sentry.init({ dsn: _config2.default.RAVEN_SERVER_DSN_KEY });
    app.use(Sentry.Handlers.requestHandler());
    app.use(helmet.hsts({
        maxAge: 5184000,
        includeSubDomains: true,
        preload: true
    }));
}

app.disable('etag');
app.set('views', path.join(__dirname, '../dist'));
app.get('/firebase-messaging-sw.js', function (req, res) {
    res.sendFile(path.join(__dirname, '../assets/firebase-messaging-sw.js'));
});
app.get('/disbaled-apple-app-site-association', function (req, res) {
    res.json({
        "applinks": {
            "apps": [],
            "details": [{
                "appID": "29VUWR4N68.com.docprime",
                "paths": ["*"]
            }]
        },
        "webcredentials": {
            "apps": ["29VUWR4N68.com.docprime"]
        },
        "activitycontinuation": {
            "apps": ["29VUWR4N68.com.docprime"]
        }
    });
});
app.use('/assets', Express.static(path.join(__dirname, '../assets')));
app.use('/dist', Express.static(path.join(__dirname, '../dist')));
app.use('/sw.js', Express.static('sw.js'));
app.use('/offline.html', Express.static('offline.html'));

function getUtmParams(req, res) {
    try {
        if (req && req.query && req.query.utm_source == 'sbi_utm') {
            res.cookie('sbi_utm', true, { maxAge: 900000 });
        }
    } catch (e) {}
}

app.all('*', function (req, res) {
    //console.log('Enter Requests');
    /**
     * Fetch Css files
     */

    if (_cookie2.default && _cookie2.default.init) {
        _cookie2.default.init(req);
    }

    //getUtmParams(req, res);

    if (req.get('host') && req.get('host').includes('www.')) {
        let redirect_url = "https://docprime.com" + req.originalUrl;
        res.writeHead(301, { "Location": redirect_url });
        return res.end();
    }
    let show_sbi_theme = false;

    try {
        // if( (req && req.query && req.query.utm_source=='sbi_utm') || (req && req.cookies && req.cookies.sbi_utm) || (req && req.headers && req.headers.cookie && req.headers.cookie.includes('sbi_utm') ) ) {
        //    show_sbi_theme = true;
        //    res.cookie('sbi_utm',true, { maxAge: 900000});
        // }
        if (req.get('host') && req.get('host').includes('sbi')) {
            show_sbi_theme = true;
            res.cookie('sbi_utm', true, { maxAge: 900000 });
        }
    } catch (e) {}

    //For local host
    if (req && req.query && req.query.utm_source && req.query.utm_source == 'sbi_utm') {
        show_sbi_theme = true;
    }

    _readStyles().then(styleFiles => {
        //console.log('read styles');

        let css_file = styleFiles[0];
        let bootstrap_file = styleFiles[1];

        // use cache
        // if (req.path == "/" && last_cache_time) {
        //     var startTime = last_cache_time
        //     var endTime = new Date()
        //     var difference = endTime.getTime() - startTime.getTime()
        //     var resultInMinutes = Math.round(difference / 60000)

        //     if (resultInMinutes > 30) {
        //         last_cache_time = null
        //         cache = {
        //             html: "",
        //             storeData: "",
        //             helmet: null,
        //             split_bundles: []
        //         }
        //     } else {
        //         res.render('index.ejs', {
        //             html: cache.html, storeData: cache.storeData, helmet: cache.helmet, ASSETS_BASE_URL: ASSETS_BASE_URL, css_file, bootstrap_file, index_bundle, split_bundles: cache.split_bundles
        //         })
        //         return
        //     }
        // }

        /** 
         *  Track API calls for funneling 
         */
        _serverHit(req, 'server');

        /**
         * Initialized store with persisted reducer and all middlewares
         * TODO: use persisted data for inital render
         */
        const store = (0, _redux.createStore)(_index2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

        /** 
         * Check if a route is enabled for SSR , RENDER_ON_SERVER == true,
         * if enabled, check if it needs any data(async API) before rendering, if so
         * then wait for that data to resolve then render with proper data.
         */
        const promises = [];
        let split_bundles = [];
        let route_matched = false;
        _routes2.default.ROUTES.some(route => {
            // use `matchPath` here
            const match = (0, _reactRouterDom.matchPath)(req.path, route);
            if (match) {
                route_matched = route;
            }

            // handle custome redirects
            if (match && route.redirect && route.redirectTo) {
                promises.push(Promise.reject({ url: route.redirectTo }));
            }

            if (match && route.RENDER_ON_SERVER) {
                try {
                    promises.push(store.dispatch((0, _index3.getSpecialityFooterData)()));
                } catch (e) {}
                //console.log(e);


                /**
                 * If a component needs preloading, chain preload followed by loadData if required
                 */
                //For Article Page,get/set props from REDIS
                if (req && req.path && (req.path.match('-mddp') || req.path.match('-dsdp') || req.path.match('-mddp'))) {
                    let article_url = match.url;
                    article_url = article_url.toLowerCase().substring(1, article_url.length);
                    let dataParams = {
                        article_url: article_url
                    };
                    try {
                        promises.push(_redisHelper2.default.getArticle(dataParams).then(data => {
                            if (route.component.preload) {
                                route.component.preload().then(r => {
                                    return r.default || r;
                                }).then(c => {

                                    if (c.buildStateFromRedis) {
                                        return c.buildStateFromRedis(data, store);
                                    } else if (c.loadData) {
                                        return c.loadData(store, match, req.query);
                                    }
                                    return {};
                                });
                            } else {
                                if (route.component.buildStateFromRedis) {
                                    return route.component.buildStateFromRedis(data, store);
                                } else if (route.component.loadData) {
                                    return route.component.loadData(store, match, req.query);
                                } else {
                                    return Promise.resolve({});
                                }
                            }
                        }));
                    } catch (e) {

                        if (route.component.preload) {
                            promises.push(route.component.preload().then(r => {
                                return r.default || r;
                            }).then(c => {
                                if (c.loadData) {
                                    return c.loadData(store, match, req.query);
                                }
                                return {};
                            }));
                        } else {
                            if (route.component.loadData) {
                                promises.push(route.component.loadData(store, match, req.query));
                            } else {
                                promises.push(Promise.resolve({}));
                            }
                        }
                    }
                } else if (route.component.preload) {
                    promises.push(route.component.preload().then(r => {
                        return r.default || r;
                    }).then(c => {
                        if (c.loadData) {
                            return c.loadData(store, match, req.query);
                        }
                        return {};
                    }));
                } else {
                    if (route.component.loadData) {
                        promises.push(route.component.loadData(store, match, req.query));
                    } else {
                        promises.push(Promise.resolve({}));
                    }
                }
            }

            return match;
        });

        /** 
         * Only when a route matches all criteria for SSR, we do SSR
         */
        // console.log(req.path);
        // console.log('Routes REad');
        // console.log(promises && promises.length);
        if (promises && promises.length) {

            // set a timeout to check if SSR is taking too long, if it does , just render the normal page.
            let SSR_TIMER = setTimeout(() => {
                //console.log('timeout error');
                _serverHit(req, 'server_done');
                res.set('X-Frame-Options', 'sameorigin');
                res.render('index.ejs', {
                    html: "", storeData: "{}", helmet: null, ASSETS_BASE_URL: "/assets", css_file, bootstrap_file, index_bundle, split_bundles, show_sbi_theme
                });
            }, 10000);

            Promise.all(promises).then(data => {
                //console.log('Inside PRomise');
                try {
                    /**
                     * Context for async data loading -> mimic componentDidMount actions.
                     */
                    let context = {};
                    if (data && data[0]) {
                        context.data = data[0];
                    }
                    //console.log('Befor frames PRomise');
                    res.set('X-Frame-Options', 'sameorigin');
                    //console.log('After Frames PRomise');

                    if (context.data && context.data.status && context.data.status == 404) {

                        if (req && req.path && req.path.match('-mddp')) {
                            res.writeHead(302, {
                                'Location': '/all-medicines'
                            });
                            res.end();
                        }

                        res.status(404);
                    }

                    if (context.data && context.data.status && context.data.status == 301) {
                        res.status(301);
                    }

                    const storeData = JSON.stringify(store.getState());

                    /**
                     * Store preloaded module's path- required while appending chunk in template
                     */
                    const modules = [];
                    const html = _server2.default.renderToString(_react2.default.createElement(
                        _reactLoadable2.default.Capture,
                        { report: moduleName => modules.push(moduleName) },
                        _react2.default.createElement(
                            _reactRedux.Provider,
                            { store: store },
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.StaticRouter,
                                    {
                                        location: req.url,
                                        context: context
                                    },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(_routes2.default, null)
                                    )
                                )
                            )
                        )
                    ));

                    // split bundles based on react-loadbale.json stats - built via webpack
                    split_bundles = _getBundles(stats, modules);
                    const helmet = _reactHelmet.Helmet.renderStatic();

                    // clear timer to mark success in SSR
                    clearTimeout(SSR_TIMER);

                    _serverHit(req, 'server_done');
                    _serverHit(req, 'server_done_ssr');

                    // populate cache
                    // if (req.path == "/") {
                    //     last_cache_time = new Date()
                    //     cache = {
                    //         storeData, html, helmet, split_bundles
                    //     }
                    // }

                    res.render('index.ejs', {
                        html, storeData, helmet, ASSETS_BASE_URL: "/assets", css_file, bootstrap_file, index_bundle, split_bundles, show_sbi_theme
                    });
                } catch (e) {
                    if (_config2.default.RAVEN_SERVER_DSN_KEY) {}
                    // Sentry.captureException(e)

                    // console.log('inside error');
                    // console.log(e);
                    clearTimeout(SSR_TIMER);

                    _serverHit(req, 'server_done');
                    res.render('index.ejs', {
                        html: "", storeData: "{}", helmet: null, ASSETS_BASE_URL: "/assets", css_file, bootstrap_file, index_bundle, split_bundles, show_sbi_theme
                    });
                }
            }).catch(error => {
                // console.log('inside GET. DDD error',error);

                clearTimeout(SSR_TIMER);

                /** 
                 * If a new url is sent via any API call, then redirect client.
                 */
                if (error && error.url) {
                    let status = error.status || 301;
                    res.redirect(status, `/${error.url}`);
                } else {

                    if (_config2.default.RAVEN_SERVER_DSN_KEY) {
                        // Sentry.captureException(error)
                    }
                    if (req && req.path && req.path.match('-mddp')) {
                        res.writeHead(302, {
                            'Location': '/all-medicines'
                        });
                        res.end();
                    }

                    res.status(404);
                    _serverHit(req, 'server_done');
                    res.render('index.ejs', {
                        html: "", storeData: "{}", helmet: null, ASSETS_BASE_URL: "/assets", css_file, bootstrap_file, index_bundle, split_bundles, show_sbi_theme
                    });
                }
            });
        } else {
            // if not route is matched, send 404 status along with the page.
            if (route_matched.NO_MATCH) {
                res.status(404);
            }
            _serverHit(req, 'server_done');
            res.render('index.ejs', {
                html: "", storeData: "{}", helmet: null, ASSETS_BASE_URL: "/assets", css_file, bootstrap_file, index_bundle, split_bundles, show_sbi_theme
            });
        }
    }).catch(e => {
        if (_config2.default.RAVEN_SERVER_DSN_KEY) {
            // Sentry.captureException(error)
        }
    });
});

if (_config2.default.RAVEN_SERVER_DSN_KEY && false) {
    app.use(Sentry.Handlers.errorHandler());
}

_reactLoadable2.default.preloadAll().then(() => {

    server.listen(process.env.PORT || 3000, err => {
        if (err) {
            return console.error(err);
        }
        console.info(`Server running on http://localhost:${process.env.PORT || 3000}`);
    });
}).catch(e => {
    //console.log('erorror in preload');
    //console.log(e);
});

function _find_index_bundle() {
    let files = fs.readdirSync(DIST_FOLDER);
    for (let file of files) {
        if (file.includes('.bundle.js') && file.includes('index')) {
            if (false) {} else {
                return `/dist/${file}`;
            }
        }
    }
}

function _readStyles() {
    return new Promise((resolve, reject) => {
        fs.readdir(DIST_FOLDER, (err, files) => {
            let stylePromises = [];
            for (let file of files) {
                if (file.includes('.css')) {
                    stylePromises.push(_readFileAsync(`${DIST_FOLDER}${file}`));
                    break;
                }
            }
            stylePromises.push(_readFileAsync(`./assets/css/bootstrap-grid.min.css`));

            Promise.all(stylePromises).then(styleFilesData => {
                resolve(styleFilesData);
            }).catch(e => {
                if (_config2.default.RAVEN_SERVER_DSN_KEY && false) {
                    Sentry.captureException(error);
                }
                reject(e);
            });
        });
    });
}

function _readFileAsync(filename) {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(filename, 'utf-8', (err, data) => {
                if (err) reject(err);else resolve(data);
            });
        } catch (err) {
            reject(err);
        }
    });
}

function _serverHit(req, type = 'server') {
    return;
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || (req.connection.socket ? req.connection.socket.remoteAddress : null);

    let agent = req.headers['user-agent'] || null;

    axios.post(_config2.default.API_BASE_URL + '/api/v1/tracking/serverhit', {
        url: req.url,
        refferar: req.headers.referer,
        ip: ip,
        type: type,
        agent: agent
    }).then(res => {
        // console.log(res)
    }).catch(e => {
        // console.log(e)
    });
}

function _readFileSync(filename) {
    return fs.readFileSync(filename, 'utf-8');
}

function _getBundles(stats, modules = []) {
    if (!modules.length) {
        return [];
    }

    let r_module = modules[0];
    let required_bundles = stats.origins[r_module];
    if (!required_bundles || !required_bundles.length) {
        return [];
    }

    let split_bundles = [];
    for (let b of required_bundles) {
        let curr_bundle = stats.assets[b];
        if (curr_bundle && curr_bundle.js && curr_bundle.js.length) {
            split_bundles.push(curr_bundle.js[0]);
        }
    }
    return split_bundles;
}

/***/ }),

/***/ "@sentry/node":
/*!*******************************!*\
  !*** external "@sentry/node" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sentry/node");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "compress.js":
/*!******************************!*\
  !*** external "compress.js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compress.js");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "constants":
/*!****************************!*\
  !*** external "constants" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("constants");

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto-js");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "node-snackbar":
/*!********************************!*\
  !*** external "node-snackbar" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-snackbar");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "rc-calendar":
/*!******************************!*\
  !*** external "rc-calendar" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-calendar");

/***/ }),

/***/ "rc-slider/lib/Range":
/*!**************************************!*\
  !*** external "rc-slider/lib/Range" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-slider/lib/Range");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-copy-to-clipboard":
/*!******************************************!*\
  !*** external "react-copy-to-clipboard" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ "react-cropper":
/*!********************************!*\
  !*** external "react-cropper" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cropper");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-image-lightbox":
/*!***************************************!*\
  !*** external "react-image-lightbox" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-lightbox");

/***/ }),

/***/ "react-infinite-scroller":
/*!******************************************!*\
  !*** external "react-infinite-scroller" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroller");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-share":
/*!******************************!*\
  !*** external "react-share" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-share");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });