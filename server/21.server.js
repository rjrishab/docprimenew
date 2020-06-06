exports.ids = [21];
exports.modules = {

/***/ "./dev/js/components/commons/PrescriptionUpload/prescriptionUpload.js":
/*!****************************************************************************!*\
  !*** ./dev/js/components/commons/PrescriptionUpload/prescriptionUpload.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _commonFixedPopup = __webpack_require__(/*! ../commonFixedPopup/commonFixedPopup.js */ "./dev/js/components/commons/commonFixedPopup/commonFixedPopup.js");

var _commonFixedPopup2 = _interopRequireDefault(_commonFixedPopup);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _loginPopup = __webpack_require__(/*! ../../../containers/commons/loginPopup.js */ "./dev/js/containers/commons/loginPopup.js");

var _loginPopup2 = _interopRequireDefault(_loginPopup);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Compress = __webpack_require__(/*! compress.js */ "compress.js");
const queryString = __webpack_require__(/*! query-string */ "query-string");


/*To Reuse the component make sure to pass these methods from parent component
1) This is pure component so please dont't do this (...this.props) , only props you need in the component use only those.
2) historyObj= {this.props.history}, locationObj = {this.props.location}
3) method name ==> afterUserLogin()
*/

class PrescriptionView extends _react2.default.PureComponent {

    constructor(props) {
        super(props);

        this.upload = (event, type = 0) => {

            if (type) {
                this.setState({ showLoginView: _storage2.default.checkAuth() ? false : true, open_popup_overlay: true });
            } else {
                if (event && event.target && event.target.files && event.target.files.length && event.target.files[0].name) {
                    let file = event.target.files[0];
                    let fileName = file.name;
                    if (/(.png|.jpeg|.jpg|.pdf)/.test(fileName)) {
                        let fileSize = file.size / (1024 * 1024);

                        if (Math.round(fileSize) <= 5) {

                            if (fileName.includes('.pdf')) {
                                let file_pdf = "/assets" + "/img/pdf-loading.png";
                                this.setState({ selected_file: file_pdf, selected_file_name: fileName, uploadFileData: { dataUrl: null, file: file } });
                                //this.finishCrop(null, file)
                            } else {

                                const compress = new Compress();
                                compress.compress([file], {
                                    quality: 1,
                                    maxWidth: 1000,
                                    maxHeight: 1000
                                }).then(results => {
                                    const img1 = results[0];
                                    const base64str = img1.data;
                                    const imgExt = img1.ext;
                                    const file = Compress.convertBase64ToFile(base64str, imgExt);
                                    this.getBase64(file, dataUrl => {
                                        this.setState({ selected_file: dataUrl, selected_file_name: fileName, uploadFileData: { dataUrl: dataUrl, file: null } });
                                        //this.finishCrop(dataUrl, null)
                                    });
                                }).catch(e => {
                                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Error uploading image." });
                                });
                            }
                            this.setState({ show_error: false });
                        } else {
                            this.setState({ show_error: 'Please upload file less than 5MB' });
                        }
                    } else {
                        this.setState({ show_error: 'Invalid Format', selected_file_name: null, selected_file: null });
                    }
                    this.setState({ open_popup_overlay: true });
                }
            }
        };

        this.cancelOverlay = val => {
            this.setState({ open_popup_overlay: false, selected_file: null, selected_file_name: null, showSuccess: false });
        };

        this.submit = () => {
            if (this.state.selected_file) {
                this.finishCrop();
            } else {
                this.setState({ uploadFileData: {} });
                setTimeout(() => {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please upload valid file" });
                }, 500);
            }
        };

        this.afterUserLogin = () => {
            this.setState({ showLoginView: false });
            if (this.props.afterUserLogin) {
                this.props.afterUserLogin();
            }
        };

        this.doneClicked = () => {
            this.setState({ selected_file: null, open_popup_overlay: false, selected_file_name: null, showSuccess: false });
        };

        this.state = {
            show_error: false,
            open_popup_overlay: false,
            selected_file: '',
            showLoginView: false,
            isLoading: false,
            selected_file_name: null,
            uploadFileData: {}
        };
    }

    getBase64(file, cb) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    finishCrop() {
        let dataUrl = this.state.uploadFileData.dataUrl;
        let file = this.state.uploadFileData.file;
        let file_blob_data;
        if (dataUrl) {
            file_blob_data = this.dataURItoBlob(dataUrl);
        }
        // if(file) {
        //     file = this.dataURItoBlob(file)
        // }
        let mem_data = {};
        let existingData;
        let img_tag = "file";
        this.setState({
            isLoading: true
        }, () => {
            let form_data = new FormData();
            if (file) {
                form_data.append(img_tag, file, "imageFilename.pdf");
            } else {
                form_data.append(img_tag, file_blob_data, "imageFilename.jpeg");
            }
            this.props.uploadCommonPrescription(form_data, (dataResp, err) => {
                if (dataResp) {
                    let user_no = this.props.primaryMobile ? this.props.primaryMobile : this.props.user_loggedIn_number;
                    if (user_no) {
                        user_no = Number(user_no);
                    }
                    const parsed = queryString.parse(this.props.locationObj.search);
                    let data = {
                        phone_number: user_no, lead_source: 'Prescriptions', source: parsed, lead_type: 'PRESCRIPTIONS', doctor_name: '', exitpoint_url: dataResp.file_url, doctor_id: null, hospital_id: null, hospital_name: null
                    };
                    let gtm_data = { 'Category': 'ConsumerApp', 'Action': 'PrescriptionSubmitted', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'prescription-submitted' };
                    _gtm2.default.sendEvent({ data: gtm_data });
                    this.props.NonIpdBookingLead(data);

                    setTimeout(() => {
                        this.setState({ showSuccess: true, open_popup_overlay: false, uploadFileData: {} });
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Prescription Uploaded Successfully" });
                    }, 500);
                } else {
                    setTimeout(() => {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Prescription upload failure,please try after some time" });
                    }, 500);
                    this.setState({ selected_file: null, selected_file_name: null });
                }
                this.setState({ isLoading: false });
            });
        });
    }

    dataURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    }

    render() {
        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            this.props.is_home_page ? _react2.default.createElement(
                'div',
                { className: ` ${this.props.labWidget ? 'slider-card-column upload-lab-widget' : 'widget mb-3 align-item-center justify-content-between upload-prescription-widget mbl-view-presc-section'}` },
                _react2.default.createElement(
                    'div',
                    { className: 'd-flex align-item-center' },
                    _react2.default.createElement('img', { width: '47', src: "/assets" + "/img/lab-test-pres.png" }),
                    _react2.default.createElement(
                        'h6',
                        { className: 'fw-500 ml-2' },
                        'Book Test from Prescription!'
                    )
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'm-0 cstm-book-btn fw-500', onClick: e => this.upload(e, 1) },
                    'Upload'
                )
            ) : '',
            this.props.search_lab && !this.state.open_popup_overlay ? _react2.default.createElement(
                'div',
                { className: 'widget mb-3 d-flex align-item-center justify-content-between upload-prescription-widget' },
                _react2.default.createElement(
                    'div',
                    { className: 'd-flex align-item-center' },
                    _react2.default.createElement('img', { width: '47', src: "/assets" + "/img/lab-test-pres.png" }),
                    _react2.default.createElement(
                        'h6',
                        { className: 'fw-500 ml-2' },
                        'Book Test ',
                        _react2.default.createElement('br', null),
                        ' from Prescription!'
                    )
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'm-0 cstm-book-btn fw-500', onClick: e => this.upload(e, 1) },
                    'Upload'
                )
            ) : '',
            this.state.showSuccess ? _react2.default.createElement(
                'div',
                { className: 'rcvd-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'received-prescription-section p-5 d-flex justify-content-center align-items-center flex-column d-none' },
                    _react2.default.createElement('img', { width: '57', src: "/assets" + "/img/success-checked.svg" }),
                    _react2.default.createElement(
                        'p',
                        null,
                        'We have received your prescription. Our medical representative will call you for assistance'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'cstm-book-btn fw-700', style: { width: 120 }, onClick: this.doneClicked },
                        'Done'
                    )
                )
            ) : '',
            this.state.open_popup_overlay ? _react2.default.createElement(
                _commonFixedPopup2.default,
                { cancelOverlay: a => this.cancelOverlay(a) },
                this.state.showLoginView ? _react2.default.createElement(_loginPopup2.default, { afterUserLogin: this.afterUserLogin, locationObj: this.props.locationObj, historyObj: this.props.historyObj, closePopup: this.cancelOverlay }) : _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'upload-prescription' },
                        !this.state.showSuccess ? _react2.default.createElement(
                            _react2.default.Fragment,
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: 'widget-header text-center mv-header p-3' },
                                _react2.default.createElement(
                                    'h4',
                                    { className: 'fw-700 text-md' },
                                    'Upload Prescription'
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { className: 'cross-presc-modal', onClick: () => this.setState({ abc: true }) /*this.props.hideLoginPopup.bind(this)*/ },
                                    _react2.default.createElement(
                                        'span',
                                        { onClick: () => this.cancelOverlay(1) },
                                        '\xD7'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: `upload-prescription-column d-flex align-item-center justify-content-center flex-column ${this.state.show_error ? 'error-border-color' : ''}`, style: { position: 'relative' } },
                                this.state.isLoading ? _react2.default.createElement(
                                    'div',
                                    { className: 'ins-prf-img-grd d-block upload-presc-loading-pdf d-flex align-item-center justify-content-center' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'loader-for-chat-div mt-0' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'loader-for-chat mb-0' },
                                            _react2.default.createElement('span', null),
                                            _react2.default.createElement('span', null),
                                            _react2.default.createElement('span', null),
                                            _react2.default.createElement('span', null),
                                            _react2.default.createElement('span', null),
                                            _react2.default.createElement('span', null)
                                        )
                                    )
                                ) : '',
                                _react2.default.createElement('img', { className: this.state.selected_file ? 'prescription-uploaded-img' : 'prescription-uploaded', width: !this.state.selected_file ? '70px' : '', src: this.state.selected_file ? this.state.selected_file : "/assets" + "/img/presc-icon.png" }),
                                this.state.selected_file_name ? _react2.default.createElement(
                                    'h6',
                                    { className: 'fw-500 text-center', style: { fontSize: 11 } },
                                    this.state.selected_file_name
                                ) : '',
                                this.state.show_error ? _react2.default.createElement(
                                    _react2.default.Fragment,
                                    null,
                                    _react2.default.createElement('img', { className: 'prescription-uploaded-img', src: this.state.selected_file }),
                                    _react2.default.createElement(
                                        'h6',
                                        { className: 'error-msg-text text-center' },
                                        this.state.show_error
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'cstm-book-btn fw-700 d-flex align-item-center mt-3 mb-3' },
                                        _react2.default.createElement('img', { src: "/assets" + "/img/up-arrow.svg", height: '17' }),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'text-white', htmlFor: 'presc-upload', style: { fontSize: 13 } },
                                                'Re-Upload'
                                            )
                                        ),
                                        _react2.default.createElement('input', { id: 'presc-upload', type: 'file', accept: 'image/*;capture=camera', onChange: e => this.upload(e) })
                                    )
                                ) : _react2.default.createElement(
                                    'button',
                                    { className: 'cstm-book-btn fw-700 d-flex align-item-center mt-3 mb-3', onClick: e => e.stopPropagation() },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/up-arrow.svg", height: '17' }),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'text-white', htmlFor: 'presc-upload', style: { fontSize: 13 } },
                                            this.state.selected_file ? 'Re-Upload' : 'Upload'
                                        )
                                    ),
                                    _react2.default.createElement('input', { id: 'presc-upload', type: 'file', accept: 'image/*;capture=camera', onChange: e => this.upload(e) })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'p-3 pb-0' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'health-advisor-col d-flex p-2 align-items-start' },
                                    _react2.default.createElement('img', { width: '17', className: 'info-detail-icon', src: "/assets" + "/img/info-icon.svg" }),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'ml-2' },
                                        'Our health advisor will assist you in booking your tests'
                                    )
                                ),
                                _react2.default.createElement('hr', { style: { marginTop: 11 } })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'guidelines-col p-3 pt-0' },
                                _react2.default.createElement(
                                    'h5',
                                    { className: 'fw-500 text-black', style: { marginBottom: 5 } },
                                    'Prescription Guidelines'
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    null,
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'fw-500' },
                                        'Avoid blurred image'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'fw-500' },
                                        'Supported files type: jpeg , jpg , png , pdf'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'fw-500' },
                                        'Maximum allowed file size: 5MB'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'presc-submit-btn cstm-book-btn fw-700', style: { borderRadius: 0 }, onClick: this.submit },
                                'Submit'
                            )
                        ) : ''
                    )
                )
            ) : ''
        );
    }
}

exports.default = PrescriptionView;

/***/ }),

/***/ "./dev/js/components/commons/commonFixedPopup/commonFixedPopup.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/commons/commonFixedPopup/commonFixedPopup.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CommonPopup extends _react2.default.PureComponent {

	render() {

		return _react2.default.createElement(
			_react2.default.Fragment,
			null,
			_react2.default.createElement("div", { className: "cancel-overlay cancel-overlay-zindex", onClick: () => this.props.cancelOverlay(1) }),
			_react2.default.createElement(
				"div",
				{ className: "widget cancel-appointment-div cancel-popup" },
				this.props.children
			)
		);
	}
}

exports.default = CommonPopup;

/***/ }),

/***/ "./dev/js/components/commons/commonFixedPopup/loginPopup.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/commons/commonFixedPopup/loginPopup.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _commonFixedPopup = __webpack_require__(/*! ./commonFixedPopup.js */ "./dev/js/components/commons/commonFixedPopup/commonFixedPopup.js");

var _commonFixedPopup2 = _interopRequireDefault(_commonFixedPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


/*To Reuse the component make sure to pass these methods from parent component
1) ===> afterUserLogin(this method is called after user logged in successfully)
2) This is pure component so please dont't do this (...this.props) , only props you need in the component use only those.
3) historyObj= {this.props.history}, locationObj = {this.props.location}
4) ===>closePopup (method to close popup)
*/
class LoginPopup extends _react2.default.Component {

    constructor(props) {
        super(props);
        this._mounted = false;
        this.state = {
            phoneNumber: '',
            validationError: '',
            showOTP: false,
            otp: "",
            otpTimeout: false,
            error_message: '',
            smsBtnType: null,
            enableOtpRequest: false
        };
    }

    componentDidMount() {
        this._mounted = true;
    }

    componentWillUnmount() {
        this._mounted = false;
    }
    inputHandler(e) {
        if (this.state.showOTP && e.target.name == 'phoneNumber') {
            this.setState({ [e.target.name]: e.target.value, validationError: "", showOTP: false, otp: "", error_message: '' });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    submitOTPRequest(number, resendFlag = false, viaSms, viaWhatsapp, fromPopup = null) {

        let lead_data = queryString.parse(this.props.locationObj.search);
        if (number.match(/^[56789]{1}[0-9]{9}$/)) {

            this.setState({ validationError: "" });

            this.props.sendOTP(number, viaSms, viaWhatsapp, 'insurance-login', error => {
                if (error) {
                    this.setState({ validationError: "Could not generate OTP." });
                } else {

                    let data = {
                        'Category': 'ConsumerApp', 'Action': 'LoginPopupContinue', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'login-popup-continue-click', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : '', 'mobileNo': this.state.phoneNumber
                    };
                    _gtm2.default.sendEvent({ data: data });
                    if (viaWhatsapp) {
                        this.setState({ enableOtpRequest: true });
                    } else {
                        this.setState({ enableOtpRequest: false });
                    }
                    this.setState({ showOTP: true, otpTimeout: true, smsBtnType: viaSms ? true : false });
                    setTimeout(() => {
                        if (this._mounted) {
                            this.setState({ otpTimeout: false });
                        }
                    }, 20000);
                    setTimeout(() => {
                        if (this._mounted) {
                            this.setState({ enableOtpRequest: false });
                        }
                    }, 60000);

                    if (fromPopup && document.getElementsByClassName('ins-form-slider')) {
                        if (fromPopup == 'one') {
                            document.getElementsByClassName('ins-form-slider')[0].scroll({ left: 999, behavior: 'smooth' });
                        } else {
                            document.getElementsByClassName('ins-form-slider')[0].scroll({ left: -999, behavior: 'smooth' });
                        }
                    }
                }
            });
        } else {
            this.setState({ validationError: "Please provide a valid number (10 digits)" });
        }
    }

    verifyOTP() {
        let parsed = queryString.parse(this.props.locationObj.search);
        let self = this;
        if (!this.state.otp) {
            this.setState({ validationError: "Please enter OTP", error_message: '' });
            return;
        }
        if (this.state.otp.length < 6 || this.state.otp.length > 6) {
            this.setState({ validationError: "Please enter valid OTP", error_message: '' });
            return;
        }

        let lead_data = parsed;
        if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
            this.setState({ validationError: "" });
            let extraParams = {};
            this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParams, exists => {
                if (exists.code == 'invalid') {
                    this.setState({ error_message: exists.message, validationError: '' });
                } else {
                    this.props.getUserProfile().then(resp => {
                        this.props.afterUserLogin();
                        setTimeout(() => {
                            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Login Successfully" });
                        }, 500);
                    });
                }
            });
        } else {
            this.setState({ validationError: "Please provide a valid number (10 digits)" });
        }
    }

    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.verifyOTP();
        }
    }

    _handleContinuePress(e) {
        if (e.key === 'Enter') {
            if (!this.state.showOTP) {
                this.submitOTPRequest(this.state.phoneNumber, '', true, false, 'one');
            }
        }
    }

    editNumber() {
        let number = this.state.phoneNumber;

        document.getElementsByClassName('ins-form-slider')[0].scroll({ left: -999, behavior: 'smooth' });

        setTimeout(() => {
            this.setState({ validationError: "", showOTP: false, otp: "", phoneNumber: '' }, () => {
                this.setState({ phoneNumber: number });
                document.getElementById("number").focus();
            });
        }, 200);
    }

    render() {

        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                'div',
                { className: 'ins-form-slider mobile-verification-screen' },
                _react2.default.createElement(
                    'div',
                    { className: 'one' },
                    _react2.default.createElement(
                        'div',
                        { className: 'widget-header text-center mv-header', style: { position: 'relative' } },
                        _react2.default.createElement(
                            'h4',
                            { className: 'fw-500 text-md sign-up-mbl-text' },
                            'Enter your mobile number to proceed'
                        ),
                        _react2.default.createElement(
                            'a',
                            { onClick: this.props.closePopup, style: { position: 'absolute', right: 4, top: 4 } },
                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/rt-close.svg", style: { width: 14 } })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'widget-content text-center pt-0 pb-0' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group mobile-field sup-input-pdng' },
                            _react2.default.createElement(
                                'div',
                                { className: 'adon-group enter-mobile-number' },
                                _react2.default.createElement('input', { type: 'number', id: 'number', className: 'fc-input text-center', placeholder: 'Enter your mobile number', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this._handleContinuePress.bind(this), disabled: this.state.showOTP ? true : false })
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'errorMessage m-0 mb-2' },
                            this.state.error_message
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'errorMessage m-0 mb-2' },
                            this.state.validationError
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text-center' },
                            _react2.default.createElement(
                                'button',
                                { onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, false, true, false, 'one'), className: 'v-btn v-btn-primary btn-sm lg-sms-btn btn-grdnt' },
                                'Let\u2019s get you in'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'two' },
                    _react2.default.createElement(
                        'div',
                        { className: 'widget-header text-center mv-header' },
                        _react2.default.createElement(
                            'h4',
                            { className: 'fw-500 text-md sign-up-mbl-text' },
                            'Enter the OTP we\u2019ve sent to your mobile number'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'widget-content text-center pt-0 pb-0' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group mobile-field sup-input-pdng' },
                            _react2.default.createElement(
                                'div',
                                { className: 'adon-group enter-mobile-number' },
                                _react2.default.createElement('input', { type: 'number', id: 'number', className: 'fc-input text-center', placeholder: '10 digit mobile number', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this._handleContinuePress.bind(this), disabled: this.state.showOTP ? true : false }),
                                _react2.default.createElement(
                                    'a',
                                    { className: 'ins-num-edit', onClick: this.editNumber.bind(this) },
                                    'Edit'
                                )
                            ),
                            this.state.showOTP ? _react2.default.createElement(
                                'div',
                                { className: 'adon-group enter-mobile-number' },
                                _react2.default.createElement('br', null),
                                _react2.default.createElement('br', null),
                                _react2.default.createElement('input', { type: 'number', className: 'fc-input text-center', placeholder: 'Enter OTP', value: this.state.otp, onChange: this.inputHandler.bind(this), name: 'otp', onKeyPress: this._handleKeyPress.bind(this) }),
                                this.state.otpTimeout ? "" : _react2.default.createElement(
                                    'div',
                                    { className: 'd-flex align-items-start justify-content-between' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'resendOtp', style: { fontSize: '12px' }, onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, true, this.state.smsBtnType ? false : true, !this.state.smsBtnType ? false : true, 'one') },
                                        this.state.smsBtnType ? 'Prefer we WhatsApp it to you?' : 'Send via SMS'
                                    ),
                                    this.state.enableOtpRequest ? '' : _react2.default.createElement(
                                        'a',
                                        { className: 'resendOtp ins-otp-resend', onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, true, this.state.smsBtnType ? true : false, !this.state.smsBtnType ? true : false, 'one') },
                                        'Resend'
                                    )
                                )
                            ) : ""
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'errorMessage m-0 mb-2' },
                            this.state.error_message
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'errorMessage m-0 mb-2' },
                            this.state.validationError
                        ),
                        this.state.showOTP ? _react2.default.createElement(
                            'div',
                            { className: 'text-center' },
                            _react2.default.createElement(
                                'button',
                                { onClick: this.verifyOTP.bind(this), disabled: this.props.submit_otp, className: 'btn-grdnt v-btn v-btn-primary btn-sm' },
                                'Access Now'
                            )
                        ) : _react2.default.createElement(
                            'div',
                            { className: 'text-center' },
                            _react2.default.createElement(
                                'button',
                                { onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, false, true, false), disabled: this.props.otp_request_sent, className: 'v-btn v-btn-primary btn-sm lg-sms-btn btn-grdnt' },
                                'Let\u2019s get you in'
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'p',
                { className: 'text-center fw-500 p-3', style: { fontSize: 12 } },
                'By proceeding, you hereby agree to the ',
                _react2.default.createElement(
                    'a',
                    { href: '/terms', target: '_blank', style: { color: `var(--text--primary--color)` } },
                    'End User Agreement'
                ),
                ' and ',
                _react2.default.createElement(
                    'a',
                    { href: '/privacy', target: '_blank', style: { color: `var(--text--primary--color)` } },
                    'Privacy Policy.'
                )
            )
        );
    }
}
exports.default = LoginPopup;

/***/ }),

/***/ "./dev/js/containers/commons/PrescriptionUpload.js":
/*!*********************************************************!*\
  !*** ./dev/js/containers/commons/PrescriptionUpload.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _prescriptionUpload = __webpack_require__(/*! ../../components/commons/PrescriptionUpload/prescriptionUpload.js */ "./dev/js/components/commons/PrescriptionUpload/prescriptionUpload.js");

var _prescriptionUpload2 = _interopRequireDefault(_prescriptionUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PrescriptionUpload extends _react2.default.Component {

	render() {

		return _react2.default.createElement(_prescriptionUpload2.default, this.props);
	}
}

const mapStateToProps = (state, passedProps) => {

	let { primaryMobile, user_loggedIn_number } = state.USER;

	return {
		primaryMobile,
		user_loggedIn_number
	};
};

const mapDispatchToProps = dispatch => {
	return {
		uploadCommonPrescription: (dataParams, callback) => dispatch((0, _index.uploadCommonPrescription)(dataParams, callback)),
		NonIpdBookingLead: (data, cb) => dispatch((0, _index.NonIpdBookingLead)(data, cb))

	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PrescriptionUpload);

/***/ }),

/***/ "./dev/js/containers/commons/loginPopup.js":
/*!*************************************************!*\
  !*** ./dev/js/containers/commons/loginPopup.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _loginPopup = __webpack_require__(/*! ../../components/commons/commonFixedPopup/loginPopup.js */ "./dev/js/components/commons/commonFixedPopup/loginPopup.js");

var _loginPopup2 = _interopRequireDefault(_loginPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PrescriptionUpload extends _react2.default.Component {

	render() {

		return _react2.default.createElement(_loginPopup2.default, this.props);
	}
}

const mapStateToProps = (state, passedProps) => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		sendOTP: (number, viaSms, viaWhatsapp, message_type, cb) => dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb)),
		submitOTP: (number, otp, extraParams, cb) => dispatch((0, _index.submitOTP)(number, otp, extraParams, cb)),
		getUserProfile: () => dispatch((0, _index.getUserProfile)())
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PrescriptionUpload);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL1ByZXNjcmlwdGlvblVwbG9hZC9wcmVzY3JpcHRpb25VcGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jb21tb25GaXhlZFBvcHVwL2NvbW1vbkZpeGVkUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jb21tb25GaXhlZFBvcHVwL2xvZ2luUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9QcmVzY3JpcHRpb25VcGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9sb2dpblBvcHVwLmpzIl0sIm5hbWVzIjpbIkNvbXByZXNzIiwicmVxdWlyZSIsInF1ZXJ5U3RyaW5nIiwiUHJlc2NyaXB0aW9uVmlldyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ1cGxvYWQiLCJldmVudCIsInR5cGUiLCJzZXRTdGF0ZSIsInNob3dMb2dpblZpZXciLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwib3Blbl9wb3B1cF9vdmVybGF5IiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJuYW1lIiwiZmlsZSIsImZpbGVOYW1lIiwidGVzdCIsImZpbGVTaXplIiwic2l6ZSIsIk1hdGgiLCJyb3VuZCIsImluY2x1ZGVzIiwiZmlsZV9wZGYiLCJBU1NFVFNfQkFTRV9VUkwiLCJzZWxlY3RlZF9maWxlIiwic2VsZWN0ZWRfZmlsZV9uYW1lIiwidXBsb2FkRmlsZURhdGEiLCJkYXRhVXJsIiwiY29tcHJlc3MiLCJxdWFsaXR5IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJ0aGVuIiwicmVzdWx0cyIsImltZzEiLCJiYXNlNjRzdHIiLCJkYXRhIiwiaW1nRXh0IiwiZXh0IiwiY29udmVydEJhc2U2NFRvRmlsZSIsImdldEJhc2U2NCIsImNhdGNoIiwiZSIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJzaG93X2Vycm9yIiwiY2FuY2VsT3ZlcmxheSIsInZhbCIsInNob3dTdWNjZXNzIiwic3VibWl0Iiwic3RhdGUiLCJmaW5pc2hDcm9wIiwic2V0VGltZW91dCIsImFmdGVyVXNlckxvZ2luIiwiZG9uZUNsaWNrZWQiLCJpc0xvYWRpbmciLCJjYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImZpbGVfYmxvYl9kYXRhIiwiZGF0YVVSSXRvQmxvYiIsIm1lbV9kYXRhIiwiZXhpc3RpbmdEYXRhIiwiaW1nX3RhZyIsImZvcm1fZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXBsb2FkQ29tbW9uUHJlc2NyaXB0aW9uIiwiZGF0YVJlc3AiLCJlcnIiLCJ1c2VyX25vIiwicHJpbWFyeU1vYmlsZSIsInVzZXJfbG9nZ2VkSW5fbnVtYmVyIiwiTnVtYmVyIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbk9iaiIsInNlYXJjaCIsInBob25lX251bWJlciIsImxlYWRfc291cmNlIiwic291cmNlIiwibGVhZF90eXBlIiwiZG9jdG9yX25hbWUiLCJleGl0cG9pbnRfdXJsIiwiZmlsZV91cmwiLCJkb2N0b3JfaWQiLCJob3NwaXRhbF9pZCIsImhvc3BpdGFsX25hbWUiLCJndG1fZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsIk5vbklwZEJvb2tpbmdMZWFkIiwiZGF0YVVSSSIsImJpbmFyeSIsImF0b2IiLCJzcGxpdCIsImFycmF5IiwiaSIsInB1c2giLCJjaGFyQ29kZUF0IiwiQmxvYiIsIlVpbnQ4QXJyYXkiLCJyZW5kZXIiLCJpc19ob21lX3BhZ2UiLCJsYWJXaWRnZXQiLCJzZWFyY2hfbGFiIiwid2lkdGgiLCJhIiwiaGlzdG9yeU9iaiIsImFiYyIsInBvc2l0aW9uIiwiZm9udFNpemUiLCJzdG9wUHJvcGFnYXRpb24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJSYWRpdXMiLCJDb21tb25Qb3B1cCIsImNoaWxkcmVuIiwiTG9naW5Qb3B1cCIsIkNvbXBvbmVudCIsIl9tb3VudGVkIiwicGhvbmVOdW1iZXIiLCJ2YWxpZGF0aW9uRXJyb3IiLCJzaG93T1RQIiwib3RwIiwib3RwVGltZW91dCIsImVycm9yX21lc3NhZ2UiLCJzbXNCdG5UeXBlIiwiZW5hYmxlT3RwUmVxdWVzdCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJpbnB1dEhhbmRsZXIiLCJ2YWx1ZSIsInN1Ym1pdE9UUFJlcXVlc3QiLCJudW1iZXIiLCJyZXNlbmRGbGFnIiwidmlhU21zIiwidmlhV2hhdHNhcHAiLCJmcm9tUG9wdXAiLCJsZWFkX2RhdGEiLCJtYXRjaCIsInNlbmRPVFAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzY3JvbGwiLCJsZWZ0IiwiYmVoYXZpb3IiLCJ2ZXJpZnlPVFAiLCJzZWxmIiwiZXh0cmFQYXJhbXMiLCJzdWJtaXRPVFAiLCJleGlzdHMiLCJjb2RlIiwibWVzc2FnZSIsImdldFVzZXJQcm9maWxlIiwicmVzcCIsIl9oYW5kbGVLZXlQcmVzcyIsImtleSIsIl9oYW5kbGVDb250aW51ZVByZXNzIiwiZWRpdE51bWJlciIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXMiLCJjbG9zZVBvcHVwIiwicmlnaHQiLCJ0b3AiLCJiaW5kIiwic3VibWl0X290cCIsIm90cF9yZXF1ZXN0X3NlbnQiLCJjb2xvciIsIlByZXNjcmlwdGlvblVwbG9hZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZGF0YVBhcmFtcyIsImNhbGxiYWNrIiwibWVzc2FnZV90eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7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QXNCQyxXQUF0QixFQUFrQ3dDLFlBQWxDLEVBQWdEakksRUFBaEQsQ0FBVCxDQURuRDtBQUVBc0csYUFBVyxDQUFDaEIsTUFBRCxFQUFTVixHQUFULEVBQWN5QixXQUFkLEVBQTJCckcsRUFBM0IsS0FBa0M4SCxTQUFTLHNCQUFVeEMsTUFBVixFQUFrQlYsR0FBbEIsRUFBdUJ5QixXQUF2QixFQUFxQ3JHLEVBQXJDLENBQVQsQ0FGN0M7QUFHQTBHLGtCQUFnQixNQUFNb0IsU0FBUyw0QkFBVDtBQUh0QixFQUFQO0FBS0EsQ0FORDs7a0JBUWUseUJBQVFKLGVBQVIsRUFBeUJHLGtCQUF6QixFQUE2Q0osa0JBQTdDLEMiLCJmaWxlIjoiMjEuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbW1vblBvcHVwIGZyb20gJy4uL2NvbW1vbkZpeGVkUG9wdXAvY29tbW9uRml4ZWRQb3B1cC5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IExvZ2luUG9wdXAgZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvZ2luUG9wdXAuanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5jb25zdCBDb21wcmVzcyA9IHJlcXVpcmUoJ2NvbXByZXNzLmpzJylcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtJ1xuXG5cbi8qVG8gUmV1c2UgdGhlIGNvbXBvbmVudCBtYWtlIHN1cmUgdG8gcGFzcyB0aGVzZSBtZXRob2RzIGZyb20gcGFyZW50IGNvbXBvbmVudFxuMSkgVGhpcyBpcyBwdXJlIGNvbXBvbmVudCBzbyBwbGVhc2UgZG9udCd0IGRvIHRoaXMgKC4uLnRoaXMucHJvcHMpICwgb25seSBwcm9wcyB5b3UgbmVlZCBpbiB0aGUgY29tcG9uZW50IHVzZSBvbmx5IHRob3NlLlxuMikgaGlzdG9yeU9iaj0ge3RoaXMucHJvcHMuaGlzdG9yeX0sIGxvY2F0aW9uT2JqID0ge3RoaXMucHJvcHMubG9jYXRpb259XG4zKSBtZXRob2QgbmFtZSA9PT4gYWZ0ZXJVc2VyTG9naW4oKVxuKi9cblxuY2xhc3MgUHJlc2NyaXB0aW9uVmlldyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dfZXJyb3I6IGZhbHNlLFxuXHRcdFx0b3Blbl9wb3B1cF9vdmVybGF5OiBmYWxzZSxcblx0XHRcdHNlbGVjdGVkX2ZpbGU6ICcnLFxuICAgICAgICAgICAgc2hvd0xvZ2luVmlldzogZmFsc2UsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRfZmlsZV9uYW1lOiBudWxsLFxuICAgICAgICAgICAgdXBsb2FkRmlsZURhdGE6e31cblx0XHR9XG5cdH1cblxuXHR1cGxvYWQgPSAoZXZlbnQsIHR5cGU9MCk9PntcblxuICAgICAgICBpZih0eXBlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TG9naW5WaWV3OiBTVE9SQUdFLmNoZWNrQXV0aCgpP2ZhbHNlOnRydWUsIG9wZW5fcG9wdXBfb3ZlcmxheTogdHJ1ZX0pXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGlmKGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuZmlsZXMgJiYgZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCAmJiBldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZSkge1xuICAgICAgICAgICAgICAgIGxldCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgICAgICAgICAgICAgbGV0IGZpbGVOYW1lID0gZmlsZS5uYW1lXG4gICAgICAgICAgICAgICAgaWYoLygucG5nfC5qcGVnfC5qcGd8LnBkZikvLnRlc3QoZmlsZU5hbWUpICkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZVNpemUgPSAoZmlsZS5zaXplKS8oMTAyNCoxMDI0KTtcblxuICAgICAgICAgICAgICAgICAgICBpZihNYXRoLnJvdW5kKGZpbGVTaXplKTw9NSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZpbGVOYW1lLmluY2x1ZGVzKCcucGRmJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlX3BkZiA9IEFTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wZGYtbG9hZGluZy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkX2ZpbGU6IGZpbGVfcGRmLCBzZWxlY3RlZF9maWxlX25hbWU6IGZpbGVOYW1lLCB1cGxvYWRGaWxlRGF0YToge2RhdGFVcmw6IG51bGwsIGZpbGU6IGZpbGV9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmZpbmlzaENyb3AobnVsbCwgZmlsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHJlc3MgPSBuZXcgQ29tcHJlc3MoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByZXNzLmNvbXByZXNzKFtmaWxlXSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nMSA9IHJlc3VsdHNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0c3RyID0gaW1nMS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0V4dCA9IGltZzEuZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBDb21wcmVzcy5jb252ZXJ0QmFzZTY0VG9GaWxlKGJhc2U2NHN0ciwgaW1nRXh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEJhc2U2NChmaWxlLCAoZGF0YVVybCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRfZmlsZTogZGF0YVVybCwgc2VsZWN0ZWRfZmlsZV9uYW1lOiBmaWxlTmFtZSwgdXBsb2FkRmlsZURhdGE6IHtkYXRhVXJsOiBkYXRhVXJsLCBmaWxlOiBudWxsfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmZpbmlzaENyb3AoZGF0YVVybCwgbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiRXJyb3IgdXBsb2FkaW5nIGltYWdlLlwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dfZXJyb3I6IGZhbHNlfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93X2Vycm9yOiAnUGxlYXNlIHVwbG9hZCBmaWxlIGxlc3MgdGhhbiA1TUInfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93X2Vycm9yOiAnSW52YWxpZCBGb3JtYXQnLHNlbGVjdGVkX2ZpbGVfbmFtZTogbnVsbCxzZWxlY3RlZF9maWxlOm51bGwgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuX3BvcHVwX292ZXJsYXk6IHRydWUgfSlcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH1cblx0XHRcblx0fVxuXG4gICAgZ2V0QmFzZTY0KGZpbGUsIGNiKSB7XG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYihyZWFkZXIucmVzdWx0KVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluaXNoQ3JvcCgpIHtcbiAgICAgICAgbGV0IGRhdGFVcmwgPSB0aGlzLnN0YXRlLnVwbG9hZEZpbGVEYXRhLmRhdGFVcmw7XG4gICAgICAgIGxldCBmaWxlID0gdGhpcy5zdGF0ZS51cGxvYWRGaWxlRGF0YS5maWxlO1xuICAgICAgICBsZXQgZmlsZV9ibG9iX2RhdGFcbiAgICAgICAgaWYgKGRhdGFVcmwpIHtcbiAgICAgICAgICAgIGZpbGVfYmxvYl9kYXRhID0gdGhpcy5kYXRhVVJJdG9CbG9iKGRhdGFVcmwpXG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYoZmlsZSkge1xuICAgICAgICAvLyAgICAgZmlsZSA9IHRoaXMuZGF0YVVSSXRvQmxvYihmaWxlKVxuICAgICAgICAvLyB9XG4gICAgICAgIGxldCBtZW1fZGF0YSA9IHt9XG4gICAgICAgIGxldCBleGlzdGluZ0RhdGFcbiAgICAgICAgbGV0IGltZ190YWcgPSBcImZpbGVcIlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZChpbWdfdGFnLCBmaWxlLCBcImltYWdlRmlsZW5hbWUucGRmXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoaW1nX3RhZywgZmlsZV9ibG9iX2RhdGEsIFwiaW1hZ2VGaWxlbmFtZS5qcGVnXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwbG9hZENvbW1vblByZXNjcmlwdGlvbihmb3JtX2RhdGEsIChkYXRhUmVzcCwgZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFSZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VyX25vID0gdGhpcy5wcm9wcy5wcmltYXJ5TW9iaWxlP3RoaXMucHJvcHMucHJpbWFyeU1vYmlsZTp0aGlzLnByb3BzLnVzZXJfbG9nZ2VkSW5fbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIGlmKHVzZXJfbm8pe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9ubyA9IE51bWJlcih1c2VyX25vKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb25PYmouc2VhcmNoKVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lX251bWJlcjp1c2VyX25vLGxlYWRfc291cmNlOidQcmVzY3JpcHRpb25zJyxzb3VyY2U6cGFyc2VkLGxlYWRfdHlwZTonUFJFU0NSSVBUSU9OUycsZG9jdG9yX25hbWU6JycsZXhpdHBvaW50X3VybDpkYXRhUmVzcC5maWxlX3VybCAsZG9jdG9yX2lkOm51bGwsaG9zcGl0YWxfaWQ6bnVsbCxob3NwaXRhbF9uYW1lOm51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3RtX2RhdGEgPSB7J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdQcmVzY3JpcHRpb25TdWJtaXR0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ3ByZXNjcmlwdGlvbi1zdWJtaXR0ZWQnfVxuICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtX2RhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5Ob25JcGRCb29raW5nTGVhZChkYXRhKSAgXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93U3VjY2VzczogdHJ1ZSxvcGVuX3BvcHVwX292ZXJsYXk6IGZhbHNlLCB1cGxvYWRGaWxlRGF0YToge30gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQcmVzY3JpcHRpb24gVXBsb2FkZWQgU3VjY2Vzc2Z1bGx5XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxuXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlByZXNjcmlwdGlvbiB1cGxvYWQgZmFpbHVyZSxwbGVhc2UgdHJ5IGFmdGVyIHNvbWUgdGltZVwiIH0pXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkX2ZpbGU6IG51bGwgLCBzZWxlY3RlZF9maWxlX25hbWU6IG51bGx9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkYXRhVVJJdG9CbG9iKGRhdGFVUkkpIHtcbiAgICAgICAgdmFyIGJpbmFyeSA9IGF0b2IoZGF0YVVSSS5zcGxpdCgnLCcpWzFdKTtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmluYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKGJpbmFyeS5jaGFyQ29kZUF0KGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KGFycmF5KV0sIHsgdHlwZTogJ2ltYWdlL2pwZWcnIH0pO1xuICAgIH1cblxuICAgIGNhbmNlbE92ZXJsYXkgPSAodmFsKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5fcG9wdXBfb3ZlcmxheTogZmFsc2UsIHNlbGVjdGVkX2ZpbGU6IG51bGwsIHNlbGVjdGVkX2ZpbGVfbmFtZTogbnVsbCwgc2hvd1N1Y2Nlc3M6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgc3VibWl0ID0gKCk9PntcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZF9maWxlKXtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoQ3JvcCgpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVwbG9hZEZpbGVEYXRhOiB7fSB9KVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSB1cGxvYWQgdmFsaWQgZmlsZVwiIH0pXG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZnRlclVzZXJMb2dpbiA9ICgpPT57XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dMb2dpblZpZXc6IGZhbHNlfSk7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuYWZ0ZXJVc2VyTG9naW4pe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hZnRlclVzZXJMb2dpbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9uZUNsaWNrZWQgPSAoKT0+e1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRfZmlsZTogbnVsbCwgb3Blbl9wb3B1cF9vdmVybGF5OiBmYWxzZSwgc2VsZWN0ZWRfZmlsZV9uYW1lOiBudWxsLCBzaG93U3VjY2VzczogZmFsc2UgfSlcbiAgICB9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5pc19ob21lX3BhZ2UgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCAke3RoaXMucHJvcHMubGFiV2lkZ2V0PydzbGlkZXItY2FyZC1jb2x1bW4gdXBsb2FkLWxhYi13aWRnZXQnOid3aWRnZXQgbWItMyBhbGlnbi1pdGVtLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB1cGxvYWQtcHJlc2NyaXB0aW9uLXdpZGdldCBtYmwtdmlldy1wcmVzYy1zZWN0aW9uJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjQ3XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbGFiLXRlc3QtcHJlcy5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZnctNTAwIG1sLTJcIj5Cb29rIFRlc3QgZnJvbSBQcmVzY3JpcHRpb24hPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm0tMCBjc3RtLWJvb2stYnRuIGZ3LTUwMFwiIG9uQ2xpY2sgPSB7KGUpPT50aGlzLnVwbG9hZChlLCAxKX0+VXBsb2FkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6Jydcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLnNlYXJjaF9sYWIgJiYgIXRoaXMuc3RhdGUub3Blbl9wb3B1cF9vdmVybGF5P1xuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1iLTMgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHVwbG9hZC1wcmVzY3JpcHRpb24td2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCI0N1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xhYi10ZXN0LXByZXMucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZ3LTUwMCBtbC0yXCI+Qm9vayBUZXN0IDxici8+IGZyb20gUHJlc2NyaXB0aW9uITwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibS0wIGNzdG0tYm9vay1idG4gZnctNTAwXCIgb25DbGljayA9IHsoZSk9PnRoaXMudXBsb2FkKGUsIDEpfT5VcGxvYWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDonJ1xuXHRcdFx0XHR9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dTdWNjZXNzP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJjdmQtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlaXZlZC1wcmVzY3JpcHRpb24tc2VjdGlvbiBwLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtY29sdW1uIGQtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCI1N1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N1Y2Nlc3MtY2hlY2tlZC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBoYXZlIHJlY2VpdmVkIHlvdXIgcHJlc2NyaXB0aW9uLiBPdXIgbWVkaWNhbCByZXByZXNlbnRhdGl2ZSB3aWxsIGNhbGwgeW91IGZvciBhc3Npc3RhbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY3N0bS1ib29rLWJ0biBmdy03MDBcIiBzdHlsZT17e3dpZHRoOjEyMH19IG9uQ2xpY2s9e3RoaXMuZG9uZUNsaWNrZWR9PkRvbmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgfSAgICBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUub3Blbl9wb3B1cF9vdmVybGF5P1xuICAgICAgICAgICAgICAgICAgICA8Q29tbW9uUG9wdXAgY2FuY2VsT3ZlcmxheT17KGEpPT50aGlzLmNhbmNlbE92ZXJsYXkoYSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvZ2luVmlldz88TG9naW5Qb3B1cCBhZnRlclVzZXJMb2dpbj17dGhpcy5hZnRlclVzZXJMb2dpbn0gbG9jYXRpb25PYmo9e3RoaXMucHJvcHMubG9jYXRpb25PYmp9IGhpc3RvcnlPYmo9IHt0aGlzLnByb3BzLmhpc3RvcnlPYmp9IGNsb3NlUG9wdXA9e3RoaXMuY2FuY2VsT3ZlcmxheX0vPlxuICAgICAgICBcdFx0XHRcdFx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWQtcHJlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuc2hvd1N1Y2Nlc3M/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgdGV4dC1jZW50ZXIgbXYtaGVhZGVyIHAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3LTcwMCB0ZXh0LW1kXCI+VXBsb2FkIFByZXNjcmlwdGlvbjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjcm9zcy1wcmVzYy1tb2RhbFwiICBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7YWJjOiB0cnVlfSkgLyp0aGlzLnByb3BzLmhpZGVMb2dpblBvcHVwLmJpbmQodGhpcykqL30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCk9PnRoaXMuY2FuY2VsT3ZlcmxheSgxKX0+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdXBsb2FkLXByZXNjcmlwdGlvbi1jb2x1bW4gZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC1jb2x1bW4gJHt0aGlzLnN0YXRlLnNob3dfZXJyb3I/J2Vycm9yLWJvcmRlci1jb2xvcic6Jyd9YH0gc3R5bGU9e3twb3NpdGlvbjoncmVsYXRpdmUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0xvYWRpbmc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXByZi1pbWctZ3JkIGQtYmxvY2sgdXBsb2FkLXByZXNjLWxvYWRpbmctcGRmIGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1mb3ItY2hhdC1kaXYgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkZXItZm9yLWNoYXQgbWItMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNlbGVjdGVkX2ZpbGUgPyAncHJlc2NyaXB0aW9uLXVwbG9hZGVkLWltZycgOiAncHJlc2NyaXB0aW9uLXVwbG9hZGVkJ30gd2lkdGg9eyF0aGlzLnN0YXRlLnNlbGVjdGVkX2ZpbGUgPyAnNzBweCc6Jyd9IHNyYz17dGhpcy5zdGF0ZS5zZWxlY3RlZF9maWxlP3RoaXMuc3RhdGUuc2VsZWN0ZWRfZmlsZTpBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcHJlc2MtaWNvbi5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkX2ZpbGVfbmFtZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtY2VudGVyXCIgc3R5bGU9e3tmb250U2l6ZToxMX19Pnt0aGlzLnN0YXRlLnNlbGVjdGVkX2ZpbGVfbmFtZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd19lcnJvcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJlc2NyaXB0aW9uLXVwbG9hZGVkLWltZ1wiIHNyYz17dGhpcy5zdGF0ZS5zZWxlY3RlZF9maWxlfSAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImVycm9yLW1zZy10ZXh0IHRleHQtY2VudGVyXCI+e3RoaXMuc3RhdGUuc2hvd19lcnJvcn08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNzdG0tYm9vay1idG4gZnctNzAwIGQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBtdC0zIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdXAtYXJyb3cuc3ZnXCJ9IGhlaWdodD1cIjE3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgaHRtbEZvcj1cInByZXNjLXVwbG9hZFwiIHN0eWxlPXt7IGZvbnRTaXplOiAxM319PlJlLVVwbG9hZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwcmVzYy11cGxvYWRcIiB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLyo7Y2FwdHVyZT1jYW1lcmFcIiBvbkNoYW5nZSA9IHsoZSk9PnRoaXMudXBsb2FkKGUpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxidXR0b24gY2xhc3NOYW1lPVwiY3N0bS1ib29rLWJ0biBmdy03MDAgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIG10LTMgbWItM1wiIG9uQ2xpY2s9eyhlKT0+ZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdXAtYXJyb3cuc3ZnXCJ9IGhlaWdodD1cIjE3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIGh0bWxGb3I9XCJwcmVzYy11cGxvYWRcIiBzdHlsZT17eyBmb250U2l6ZTogMTN9fT57dGhpcy5zdGF0ZS5zZWxlY3RlZF9maWxlPydSZS1VcGxvYWQnOidVcGxvYWQnfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicHJlc2MtdXBsb2FkXCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qO2NhcHR1cmU9Y2FtZXJhXCIgb25DaGFuZ2UgPSB7KGUpPT50aGlzLnVwbG9hZChlKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBwYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWx0aC1hZHZpc29yLWNvbCBkLWZsZXggcC0yIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjE3XCIgY2xhc3NOYW1lPVwiaW5mby1kZXRhaWwtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2luZm8taWNvbi5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+T3VyIGhlYWx0aCBhZHZpc29yIHdpbGwgYXNzaXN0IHlvdSBpbiBib29raW5nIHlvdXIgdGVzdHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBzdHlsZT17e21hcmdpblRvcDogMTF9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1aWRlbGluZXMtY29sIHAtMyBwdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtYmxhY2tcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogNX19PlByZXNjcmlwdGlvbiBHdWlkZWxpbmVzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwXCI+QXZvaWQgYmx1cnJlZCBpbWFnZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlN1cHBvcnRlZCBmaWxlcyB0eXBlOiBqcGVnICwganBnICwgcG5nICwgcGRmPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwXCI+TWF4aW11bSBhbGxvd2VkIGZpbGUgc2l6ZTogNU1CPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByZXNjLXN1Ym1pdC1idG4gY3N0bS1ib29rLWJ0biBmdy03MDBcIiBzdHlsZT17e2JvcmRlclJhZGl1czowfX0gb25DbGljaz17dGhpcy5zdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+OiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9Db21tb25Qb3B1cD5cbiAgICAgICAgICAgICAgICAgICAgOicnXG5cdFx0XHRcdH1cblxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlc2NyaXB0aW9uVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuXG5jbGFzcyBDb21tb25Qb3B1cCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleFwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmNhbmNlbE92ZXJsYXkoMSl9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgYWN0aW9uLXNjcmVlbi1oZWFkZXIgcG9wLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVybXMtY29uZGl0aW9uLWRpdiBvbnNjcmVlbi1zY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICB7XG5cdCAgICAgICAgICAgIFx0XHR0aGlzLnByb3BzLmNoaWxkcmVuXG5cdCAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgXHQ8L2Rpdj5cblx0ICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1vblBvcHVwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBDb21tb25Mb2dpblBvcHVwIGZyb20gJy4vY29tbW9uRml4ZWRQb3B1cC5qcydcblxuXG4vKlRvIFJldXNlIHRoZSBjb21wb25lbnQgbWFrZSBzdXJlIHRvIHBhc3MgdGhlc2UgbWV0aG9kcyBmcm9tIHBhcmVudCBjb21wb25lbnRcbjEpID09PT4gYWZ0ZXJVc2VyTG9naW4odGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHVzZXIgbG9nZ2VkIGluIHN1Y2Nlc3NmdWxseSlcbjIpIFRoaXMgaXMgcHVyZSBjb21wb25lbnQgc28gcGxlYXNlIGRvbnQndCBkbyB0aGlzICguLi50aGlzLnByb3BzKSAsIG9ubHkgcHJvcHMgeW91IG5lZWQgaW4gdGhlIGNvbXBvbmVudCB1c2Ugb25seSB0aG9zZS5cbjMpIGhpc3RvcnlPYmo9IHt0aGlzLnByb3BzLmhpc3Rvcnl9LCBsb2NhdGlvbk9iaiA9IHt0aGlzLnByb3BzLmxvY2F0aW9ufVxuNCkgPT09PmNsb3NlUG9wdXAgKG1ldGhvZCB0byBjbG9zZSBwb3B1cClcbiovXG5jbGFzcyBMb2dpblBvcHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBfbW91bnRlZCA9IGZhbHNlXG4gICAgXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwaG9uZU51bWJlcjogJycsXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3I6ICcnLFxuICAgICAgICAgICAgc2hvd09UUDogZmFsc2UsXG4gICAgICAgICAgICBvdHA6IFwiXCIsXG4gICAgICAgICAgICBvdHBUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yX21lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgc21zQnRuVHlwZTogbnVsbCxcbiAgICAgICAgICAgIGVuYWJsZU90cFJlcXVlc3Q6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLl9tb3VudGVkID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIHRoaXMuX21vdW50ZWQgPSBmYWxzZSAgXG4gICAgfVxuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dPVFAgJiYgZS50YXJnZXQubmFtZSA9PSAncGhvbmVOdW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbkVycm9yOiBcIlwiLCBzaG93T1RQOiBmYWxzZSwgb3RwOiBcIlwiLCBlcnJvcl9tZXNzYWdlOiAnJyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdE9UUFJlcXVlc3QobnVtYmVyLCByZXNlbmRGbGFnID0gZmFsc2UsIHZpYVNtcywgdmlhV2hhdHNhcHAsIGZyb21Qb3B1cCA9IG51bGwpIHtcblxuICAgICAgICBsZXQgbGVhZF9kYXRhID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbk9iai5zZWFyY2gpXG4gICAgICAgIGlmIChudW1iZXIubWF0Y2goL15bNTY3ODldezF9WzAtOV17OX0kLykpIHtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJcIiB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRPVFAobnVtYmVyLCB2aWFTbXMsIHZpYVdoYXRzYXBwLCAnaW5zdXJhbmNlLWxvZ2luJywgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIkNvdWxkIG5vdCBnZW5lcmF0ZSBPVFAuXCIgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xvZ2luUG9wdXBDb250aW51ZScsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnbG9naW4tcG9wdXAtY29udGludWUtY2xpY2snLCAnbW9kZSc6IHZpYVNtcyA/ICd2aWFTbXMnIDogdmlhV2hhdHNhcHAgPyAndmlhV2hhdHNhcHAnIDogJycsICdtb2JpbGVObyc6IHRoaXMuc3RhdGUucGhvbmVOdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICBpZiAodmlhV2hhdHNhcHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVPdHBSZXF1ZXN0OiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlT3RwUmVxdWVzdDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd09UUDogdHJ1ZSwgb3RwVGltZW91dDogdHJ1ZSwgc21zQnRuVHlwZTogdmlhU21zID8gdHJ1ZSA6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fbW91bnRlZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG90cFRpbWVvdXQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDAwKVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX21vdW50ZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVPdHBSZXF1ZXN0OiBmYWxzZSB9KSAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCA2MDAwMClcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbVBvcHVwICYmIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucy1mb3JtLXNsaWRlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbVBvcHVwID09ICdvbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5zLWZvcm0tc2xpZGVyJylbMF0uc2Nyb2xsKHsgbGVmdDogOTk5LCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5zLWZvcm0tc2xpZGVyJylbMF0uc2Nyb2xsKHsgbGVmdDogLTk5OSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG51bWJlciAoMTAgZGlnaXRzKVwiIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2ZXJpZnlPVFAoKSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uT2JqLnNlYXJjaClcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5vdHApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIGVudGVyIE9UUFwiLCBlcnJvcl9tZXNzYWdlOiAnJyB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3RwLmxlbmd0aCA8IDYgfHwgdGhpcy5zdGF0ZS5vdHAubGVuZ3RoID4gNikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJQbGVhc2UgZW50ZXIgdmFsaWQgT1RQXCIsIGVycm9yX21lc3NhZ2U6ICcnIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZWFkX2RhdGEgPSBwYXJzZWRcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGhvbmVOdW1iZXIubWF0Y2goL15bNTY3ODldezF9WzAtOV17OX0kLykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiXCIgfSlcbiAgICAgICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHt9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN1Ym1pdE9UUCh0aGlzLnN0YXRlLnBob25lTnVtYmVyLCB0aGlzLnN0YXRlLm90cCwgZXh0cmFQYXJhbXMsIChleGlzdHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RzLmNvZGUgPT0gJ2ludmFsaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiBleGlzdHMubWVzc2FnZSwgdmFsaWRhdGlvbkVycm9yOiAnJyB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKS50aGVuKChyZXNwKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hZnRlclVzZXJMb2dpbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkxvZ2luIFN1Y2Nlc3NmdWxseVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgbnVtYmVyICgxMCBkaWdpdHMpXCIgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy52ZXJpZnlPVFAoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhbmRsZUNvbnRpbnVlUHJlc3MoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5zaG93T1RQKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRPVFBSZXF1ZXN0KHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsICcnLCB0cnVlLCBmYWxzZSwgJ29uZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0TnVtYmVyKCkge1xuICAgICAgICBsZXQgbnVtYmVyID0gdGhpcy5zdGF0ZS5waG9uZU51bWJlclxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucy1mb3JtLXNsaWRlcicpWzBdLnNjcm9sbCh7IGxlZnQ6IC05OTksIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJcIiwgc2hvd09UUDogZmFsc2UsIG90cDogXCJcIiwgcGhvbmVOdW1iZXI6ICcnIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGhvbmVOdW1iZXI6IG51bWJlciB9KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyXCIpLmZvY3VzKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDIwMClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tc2xpZGVyIG1vYmlsZS12ZXJpZmljYXRpb24tc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIG12LWhlYWRlclwiIHN0eWxlPXt7cG9zaXRpb246J3JlbGF0aXZlJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LW1kIHNpZ24tdXAtbWJsLXRleHRcIj5FbnRlciB5b3VyIG1vYmlsZSBudW1iZXIgdG8gcHJvY2VlZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlUG9wdXB9IHN0eWxlPXt7cG9zaXRpb246J2Fic29sdXRlJywgcmlnaHQ6NCwgdG9wOjR9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3J0LWNsb3NlLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTQgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgdGV4dC1jZW50ZXIgcHQtMCBwYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbW9iaWxlLWZpZWxkIHN1cC1pbnB1dC1wZG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG9uLWdyb3VwIGVudGVyLW1vYmlsZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZjLWlucHV0IHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1vYmlsZSBudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZU51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJwaG9uZU51bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuX2hhbmRsZUNvbnRpbnVlUHJlc3MuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc2hvd09UUCA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlIG0tMCBtYi0yXCI+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2UgbS0wIG1iLTJcIj57dGhpcy5zdGF0ZS52YWxpZGF0aW9uRXJyb3J9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsICdvbmUnKX0gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tc20gbGctc21zLWJ0biBidG4tZ3JkbnRcIj5MZXTigJlzIGdldCB5b3UgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgdGV4dC1jZW50ZXIgbXYtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgc2lnbi11cC1tYmwtdGV4dFwiPkVudGVyIHRoZSBPVFAgd2XigJl2ZSBzZW50IHRvIHlvdXIgbW9iaWxlIG51bWJlcjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHRleHQtY2VudGVyIHB0LTAgcGItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1vYmlsZS1maWVsZCBzdXAtaW5wdXQtcGRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRvbi1ncm91cCBlbnRlci1tb2JpbGUtbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmYy1pbnB1dCB0ZXh0LWNlbnRlclwiIHBsYWNlaG9sZGVyPVwiMTAgZGlnaXQgbW9iaWxlIG51bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lTnVtYmVyfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gbmFtZT1cInBob25lTnVtYmVyXCIgb25LZXlQcmVzcz17dGhpcy5faGFuZGxlQ29udGludWVQcmVzcy5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zaG93T1RQID8gdHJ1ZSA6IGZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbnMtbnVtLWVkaXRcIiBvbkNsaWNrPXt0aGlzLmVkaXROdW1iZXIuYmluZCh0aGlzKX0+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd09UUCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkb24tZ3JvdXAgZW50ZXItbW9iaWxlLW51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZmMtaW5wdXQgdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE9UUFwiIHZhbHVlPXt0aGlzLnN0YXRlLm90cH0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJvdHBcIiBvbktleVByZXNzPXt0aGlzLl9oYW5kbGVLZXlQcmVzcy5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vdHBUaW1lb3V0ID8gXCJcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1zdGFydCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlc2VuZE90cFwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX0gb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgdHJ1ZSwgdGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gZmFsc2UgOiB0cnVlLCAhdGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gZmFsc2UgOiB0cnVlLCAnb25lJyl9Pnt0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyAnUHJlZmVyIHdlIFdoYXRzQXBwIGl0IHRvIHlvdT8nIDogJ1NlbmQgdmlhIFNNUyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVuYWJsZU90cFJlcXVlc3QgPyAnJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlc2VuZE90cCBpbnMtb3RwLXJlc2VuZFwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRydWUsIHRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSwgIXRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSwgJ29uZScpfT5SZXNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZSBtLTAgbWItMlwiPnt0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlIG0tMCBtYi0yXCI+e3RoaXMuc3RhdGUudmFsaWRhdGlvbkVycm9yfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPVFAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudmVyaWZ5T1RQLmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnByb3BzLnN1Ym1pdF9vdHB9IGNsYXNzTmFtZT1cImJ0bi1ncmRudCB2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VzcyBOb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgZmFsc2UsIHRydWUsIGZhbHNlKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMub3RwX3JlcXVlc3Rfc2VudH0gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tc20gbGctc21zLWJ0biBidG4tZ3JkbnRcIj5MZXTigJlzIGdldCB5b3UgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZ3LTUwMCBwLTNcIiBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0gPkJ5IHByb2NlZWRpbmcsIHlvdSBoZXJlYnkgYWdyZWUgdG8gdGhlIDxhIGhyZWY9XCIvdGVybXNcIiB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0gPkVuZCBVc2VyIEFncmVlbWVudDwvYT4gYW5kIDxhIGhyZWY9XCIvcHJpdmFjeVwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IGNvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCB9fSA+UHJpdmFjeSBQb2xpY3kuPC9hPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTG9naW5Qb3B1cCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVwbG9hZENvbW1vblByZXNjcmlwdGlvbiwgTm9uSXBkQm9va2luZ0xlYWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IFByZXNjcmlwdGlvblZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL1ByZXNjcmlwdGlvblVwbG9hZC9wcmVzY3JpcHRpb25VcGxvYWQuanMnXG5cbmNsYXNzIFByZXNjcmlwdGlvblVwbG9hZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8UHJlc2NyaXB0aW9uVmlldyB7Li4udGhpcy5wcm9wc30vPlxuXHRcdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcGFzc2VkUHJvcHMpID0+IHtcblx0XG5cdGxldCB7IHByaW1hcnlNb2JpbGUsIHVzZXJfbG9nZ2VkSW5fbnVtYmVyIH0gPSBzdGF0ZS5VU0VSXG5cdFxuXHRyZXR1cm4ge1xuXHRcdHByaW1hcnlNb2JpbGUsXG5cdFx0dXNlcl9sb2dnZWRJbl9udW1iZXJcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpPT57XG5cdHJldHVybiB7XG5cdFx0dXBsb2FkQ29tbW9uUHJlc2NyaXB0aW9uIDogKGRhdGFQYXJhbXMsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaCh1cGxvYWRDb21tb25QcmVzY3JpcHRpb24oZGF0YVBhcmFtcywgY2FsbGJhY2spKSxcblx0XHROb25JcGRCb29raW5nTGVhZDooZGF0YSxjYikgPT5kaXNwYXRjaChOb25JcGRCb29raW5nTGVhZChkYXRhLCBjYikpLFxuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUHJlc2NyaXB0aW9uVXBsb2FkKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHNlbmRPVFAsIHN1Ym1pdE9UUCwgZ2V0VXNlclByb2ZpbGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IExvZ2luUG9wdXBWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9jb21tb25GaXhlZFBvcHVwL2xvZ2luUG9wdXAuanMnXG5cbmNsYXNzIFByZXNjcmlwdGlvblVwbG9hZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8TG9naW5Qb3B1cFZpZXcgey4uLnRoaXMucHJvcHN9Lz5cblx0XHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG5cdHJldHVybiB7XG5cblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpPT57XG5cdHJldHVybiB7XG5cdFx0c2VuZE9UUDogKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikgPT4gZGlzcGF0Y2goc2VuZE9UUChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpKSxcbiAgICAgICAgc3VibWl0T1RQOiAobnVtYmVyLCBvdHAsIGV4dHJhUGFyYW1zLCBjYikgPT4gZGlzcGF0Y2goc3VibWl0T1RQKG51bWJlciwgb3RwLCBleHRyYVBhcmFtcywgIGNiKSksXG4gICAgICAgIGdldFVzZXJQcm9maWxlOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyUHJvZmlsZSgpKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFByZXNjcmlwdGlvblVwbG9hZCkiXSwic291cmNlUm9vdCI6IiJ9