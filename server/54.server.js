exports.ids = [54];
exports.modules = {

/***/ "./dev/js/components/commons/paymentForm/PaymentForm.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/paymentForm/PaymentForm.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PaymentForm extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    sendEvent() {
        let refs = this.props.refs;
        if (refs) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ContinueClicked', 'pageSource': refs, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
        } else {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ContinueClicked', 'pageSource': 'UNKNOWN', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }

    componentDidMount() {
        this.sendEvent();
    }

    getPaymentNodeName(name, index) {
        return `${name}[${index}]`;
    }

    render() {

        // let data = { "paymentMode": "CC", "responseCode": "227", "bankTxId": "", "txDate": "Jun 4, 2018 12:10:23 PM", "bankName": "SBI", "statusMsg": "Oops an error occurred. We will get back to you!", "currency": "INR", "statusCode": 1, "pgGatewayName": "MOCK", "responseMessage": "Your payment has been declined by your bank. Please contact your bank for any queries. If money has been deducted from your account, your bank will inform us within 48 hrs and we will refund the same", "txStatus": "TXN_FAILURE", "customerId": 51, "orderNo": this.props.paymentData['orderId'], "statusShortMsg": "Others", "email": "dummy_appointment@policybazaar.com", "pbGatewayName": "paytm", "mobile": "9999999997", productId: this.props.paymentData['productId'] }

        // if (this.props.paymentData['referenceId']) {
        //     data['referenceId'] = this.props.paymentData['referenceId']
        // }

        // data['pgTxId'] = this.props.paymentData['orderId']
        // data = btoa(JSON.stringify(data))

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'form',
                { id: 'paymentForm', ref: 'paymentForm', method: 'post', action: this.props.paymentData && this.props.paymentData['is_single_flow'] ? _config2.default.PG_MULTI_ORDER_URL : _config2.default.PG_URL, style: { display: 'none' } },
                this.props.paymentData['is_single_flow'] ? _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    this.props.paymentData['items'].map((item, i) => {
                        return _react2.default.createElement(
                            _react2.default.Fragment,
                            null,
                            _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('name', i), id: item['name'], defaultValue: item['name'] }),
                            _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('productId', i), id: item['productId'], defaultValue: item['productId'] }),
                            _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('txAmount', i), id: item['txAmount'], defaultValue: item['txAmount'] }),
                            _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('orderId', i), id: item['orderId'], defaultValue: item['orderId'] }),
                            _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('holdPayment', i), id: item['holdPayment'], defaultValue: item['holdPayment'] }),
                            item && item['insurerCode'] ? _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('insurerCode', i), id: item['insurerCode'], defaultValue: item['insurerCode'] }) : ''
                        );
                    })
                ) : _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement('input', { type: 'text', name: 'name', defaultValue: this.props.paymentData['name'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'productId', defaultValue: this.props.paymentData['productId'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'txAmount', defaultValue: this.props.paymentData['txAmount'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'orderId', defaultValue: this.props.paymentData['orderId'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'holdPayment', defaultValue: this.props.paymentData['holdPayment'] }),
                    this.props.paymentData && this.props.paymentData['insurerCode'] ? _react2.default.createElement('input', { type: 'text', name: 'insurerCode', defaultValue: this.props.paymentData['insurerCode'] }) : ''
                ),
                _react2.default.createElement('input', { type: 'text', name: 'custId', defaultValue: this.props.paymentData['custId'] }),
                _react2.default.createElement('input', { type: 'text', name: 'mobile', defaultValue: this.props.paymentData['mobile'] }),
                _react2.default.createElement('input', { type: 'text', name: 'email', defaultValue: this.props.paymentData['email'] }),
                _react2.default.createElement('input', { type: 'text', name: 'surl', defaultValue: this.props.paymentData['surl'] }),
                _react2.default.createElement('input', { type: 'text', name: 'furl', defaultValue: this.props.paymentData['furl'] }),
                this.props.paymentData && this.props.paymentData['referenceId'] ? _react2.default.createElement('input', { type: 'text', name: 'referenceId', defaultValue: this.props.paymentData['referenceId'] }) : '',
                _react2.default.createElement('input', { type: 'text', name: 'hash', defaultValue: this.props.paymentData['hash'] }),
                _react2.default.createElement('input', { type: 'text', name: 'isPreAuth', defaultValue: this.props.paymentData['isPreAuth'] }),
                this.props.paymentData && this.props.paymentData['paytmMsg'] ? _react2.default.createElement('input', { type: 'text', name: 'paytmMsg', defaultValue: this.props.paymentData['paytmMsg'] }) : '',
                this.props.paymentData && this.props.paymentData['couponCode'] ? _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement('input', { type: 'text', name: 'couponCode', defaultValue: this.props.paymentData['couponCode'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'discountedAmnt', defaultValue: this.props.paymentData['discountedAmnt'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'couponPgMode', defaultValue: this.props.paymentData['couponPgMode'] })
                ) : '',
                this.props.paymentData && this.props.paymentData['refOrderId'] ? _react2.default.createElement('input', { type: 'text', name: 'refOrderId', defaultValue: this.props.paymentData['refOrderId'] }) : '',
                this.props.paymentData && this.props.paymentData['refOrderNo'] ? _react2.default.createElement('input', { type: 'text', name: 'refOrderNo', defaultValue: this.props.paymentData['refOrderNo'] }) : '',
                this.props.paymentData && this.props.paymentData['parentProductId'] ? _react2.default.createElement('input', { type: 'text', name: 'parentProductId', defaultValue: this.props.paymentData['parentProductId'] }) : ''
            )
        );
    }
}

exports.default = PaymentForm;

/***/ }),

/***/ "./dev/js/components/commons/paymentForm/index.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/paymentForm/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PaymentForm = __webpack_require__(/*! ./PaymentForm */ "./dev/js/components/commons/paymentForm/PaymentForm.js");

var _PaymentForm2 = _interopRequireDefault(_PaymentForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PaymentForm2.default;

/***/ }),

/***/ "./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js":
/*!********************************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js ***!
  \********************************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BookingConfirmationPopup extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return _react2.default.createElement(
			'div',
			{ className: 'search-el-popup-overlay' },
			_react2.default.createElement(
				'div',
				{ className: 'search-el-popup vip-srch-pop-min' },
				_react2.default.createElement(
					'div',
					{ className: 'widget' },
					_react2.default.createElement(
						'div',
						{ className: 'widget-content padiing-srch-el' },
						_react2.default.createElement(
							_react2.default.Fragment,
							null,
							_react2.default.createElement(
								'p',
								{ className: 'srch-el-conent' },
								this.props.is_gold ? 'Confirm delete member?' : 'Do you wish to continue?'
							),
							_react2.default.createElement(
								'div',
								{ className: 'search-el-btn-container' },
								_react2.default.createElement(
									'button',
									{ onClick: this.props.priceConfirmationPopup.bind(this, true) },
									'Yes'
								),
								_react2.default.createElement(
									'button',
									{ onClick: this.props.priceConfirmationPopup.bind(this, false) },
									'No'
								)
							)
						)
					)
				)
			)
		);
	}
}

exports.default = BookingConfirmationPopup;

/***/ }),

/***/ "./dev/js/components/vipClub/insuranceProofs.js":
/*!******************************************************!*\
  !*** ./dev/js/components/vipClub/insuranceProofs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");
const Compress = __webpack_require__(/*! compress.js */ "compress.js");

class InsuranceProofs extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUrl: null,
            zoomImageUrl: null,
            zoomImage: false,
            openPdf: false,
            openPdfUrl: null,
            isLoading: false
        };
    }

    pickFile(member_id, e) {
        // to select file
        if (e.target.files && e.target.files[0]) {
            let file = e.target.files[0];
            if (e.target.files[0] && e.target.files[0].name.includes('.pdf')) {
                this.finishCrop(null, member_id, file);
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
                        this.finishCrop(dataUrl, member_id, null);
                        this.setState({ dataUrl });
                    });
                }).catch(e => {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Error uploading image." });
                });
            }
        }
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

    finishCrop(dataUrl, member_id, file) {
        // cropping the image
        let file_blob_data;
        if (dataUrl) {
            file_blob_data = this.dataURItoBlob(dataUrl);
        }
        let mem_data = {};
        let existingData;
        let img_tag = "proof_file";
        this.setState({
            dataUrl: null, isLoading: true
        }, () => {
            let form_data = new FormData();
            if (file) {
                form_data.append(img_tag, file, "imageFilename.pdf");
            } else {
                form_data.append(img_tag, file_blob_data, "imageFilename.jpeg");
            }
            this.props.uploadVipProof(form_data, member_id, 'image', (data, err) => {
                // store selected proof to database
                if (data) {
                    let dataId = data.id;
                    mem_data.id = this.props.member_id;
                    mem_data.is_primary_user = this.props.is_primary_user;
                    mem_data.img_path_ids = [];
                    if (this.props.members_proofs.length > 0) {
                        Object.entries(this.props.members_proofs).map(function ([key, value]) {
                            if (value.id == member_id) {
                                mem_data.img_path_ids = value.img_path_ids;
                                mem_data.img_path_ids.push({ id: dataId, image: data.data.proof_file, val: dataId });
                            } else {
                                mem_data.img_path_ids = [];
                                mem_data.img_path_ids.push({ id: dataId, image: data.data.proof_file, val: dataId });
                            }
                        });
                    } else {
                        mem_data.img_path_ids.push({ id: dataId, image: data.data.proof_file, val: dataId });
                    }
                    this.setState({ isLoading: false });
                    this.props.storeVipMemberProofs(mem_data); // to store member proof ids to the user store
                }
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

    removeImage(img) {
        let Uploaded_image_data = [];
        Uploaded_image_data = this.props.members_proofs.filter(x => x.id == this.props.member_id);
        Uploaded_image_data[0].img_path_ids.map((data, i) => {
            data.member_id = this.props.member_id;
            if (data.image == img) {
                this.props.removeVipMemberProof(data); // to remove cancelled uploaded image
            }
        });
    }

    render() {
        let Uploaded_image_data = [];
        let img_url = [];
        let pdf_url = [];
        if (this.props.members_proofs && this.props.members_proofs.length > 0) {
            Uploaded_image_data = this.props.members_proofs.filter(x => x.id == this.props.member_id);
            if (Uploaded_image_data.length > 0) {
                Uploaded_image_data[0].img_path_ids.map((data, i) => {
                    if (data.image.includes('pdf')) {
                        pdf_url.push(data.image);
                    } else {
                        img_url.push(data.image);
                    }
                });
            }
        }
        let show_upload = true;
        if (img_url && img_url.length > 0 || pdf_url && pdf_url.length > 0) {
            show_upload = false;
        }
        return _react2.default.createElement(
            'div',
            { className: 'insurance-proofs-cont', style: { margin: '10px -10px 0px -10px' } },
            _react2.default.createElement(
                'div',
                { className: 'upload-addbtn-cont', id: `member_${this.props.member_id}_upload` },
                _react2.default.createElement(
                    'div',
                    { className: 'ins-upld-cont' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ins-sb-frst-img' },
                        _react2.default.createElement('img', { src: "/assets" + "/img/ins-warning.svg" })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'ins-upload-text' },
                        _react2.default.createElement(
                            'p',
                            { className: 'ins-upload-para-text' },
                            'Upload any governement ID proof'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'ins-upload-sub-text' },
                            'Aadhar card, Passport, Driving License, Voter ID Card'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'ins-file-tyle' },
                            'File type: jpg, jpeg, png, pdf '
                        )
                    )
                ),
                show_upload ? _react2.default.createElement(
                    'span',
                    { className: 'ins-proof-upload-btn', onClick: () => {
                            document.getElementById('imageFilePicker_' + this.props.member_id + '_front').click();
                            document.getElementById('imageFilePicker_' + this.props.member_id + '_front').value = "";
                        } },
                    _react2.default.createElement('img', { src: "/assets" + "/img/ins-up-ico.svg" }),
                    ' Upload',
                    _react2.default.createElement('input', { type: 'file', style: { display: 'none' }, id: `imageFilePicker_${this.props.member_id}_front`, onChange: this.pickFile.bind(this, this.props.member_id), accept: 'image/x-png,image/jpeg,image/jpg,.pdf' })
                ) : ''
            ),
            this.state.isLoading && show_upload ? _react2.default.createElement(
                'div',
                { className: 'ins-prf-img-grd d-block' },
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
            Uploaded_image_data && Uploaded_image_data.length > 0 && !show_upload ? _react2.default.createElement(
                'div',
                { className: 'upload-img-section' },
                img_url && img_url.length > 0 ? img_url.map((data, i) => {
                    return _react2.default.createElement(
                        'div',
                        { key: i, className: 'ins-prf-img-grd' },
                        _react2.default.createElement('img', { className: 'img-fluid ins-up-img-ic', src: data }),
                        _react2.default.createElement('img', { className: 'ins-prf-cls', onClick: this.removeImage.bind(this, data), src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png' })
                    );
                }) : '',
                pdf_url && pdf_url.length > 0 ? pdf_url.map((data, i) => {
                    return _react2.default.createElement(
                        'div',
                        { className: 'ins-prf-img-grd', key: i },
                        _react2.default.createElement('img', { className: 'img-fluid ins-up-img-ic', src: "/assets" + "/img/pdf.jpg" }),
                        _react2.default.createElement('img', { className: 'ins-prf-cls', onClick: this.removeImage.bind(this, data), src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png' })
                    );
                }) : '',
                this.state.isLoading ? _react2.default.createElement(
                    'div',
                    { className: 'ins-prf-img-grd' },
                    _react2.default.createElement(
                        'div',
                        { className: 'loader-for-chat-div mt-0' },
                        _react2.default.createElement(
                            'div',
                            { className: 'loader-for-chat mb-0', style: { width: '50px' } },
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null)
                        )
                    )
                ) : '',
                (img_url && img_url.length || pdf_url && pdf_url.length) >= 5 ? '' : _react2.default.createElement(
                    'span',
                    { className: 'ins-prf-addMore', onClick: () => {
                            document.getElementById('imageFilePicker_' + this.props.member_id + '_back').click();
                            document.getElementById('imageFilePicker_' + this.props.member_id + '_back').value = "";
                        } },
                    _react2.default.createElement('img', { className: 'ins-addico', src: "/assets" + "/img/ins-add-ico.svg" }),
                    'Add More',
                    _react2.default.createElement('input', { type: 'file', style: { display: 'none' }, id: `imageFilePicker_${this.props.member_id}_back`, onChange: this.pickFile.bind(this, this.props.member_id), accept: 'image/x-png,image/jpeg,image/jpg,.pdf' })
                )
            ) : ''
        );
    }
}
exports.default = InsuranceProofs;

/***/ }),

/***/ "./dev/js/components/vipClub/vipClubActivatedMemeberDetailsView.js":
/*!*************************************************************************!*\
  !*** ./dev/js/components/vipClub/vipClubActivatedMemeberDetailsView.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _insuranceProofs = __webpack_require__(/*! ./insuranceProofs.js */ "./dev/js/components/vipClub/insuranceProofs.js");

var _insuranceProofs2 = _interopRequireDefault(_insuranceProofs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class VipClubActivatedMemberDetails extends _react2.default.Component {
	// already activated members view

	constructor(props) {
		super(props);
		this.state = {
			toggleTabType: false,
			tabsValue: []
		};
	}

	render() {
		return _react2.default.createElement(
			'section',
			{ className: 'vip-user-details-container' },
			this.props.vip_club_db_data.data.user && Object.keys(this.props.vip_club_db_data.data.user).length > 0 && this.props.vip_club_db_data.data.user.plus_members && this.props.vip_club_db_data.data.user.plus_members.length > 0 ? this.props.vip_club_db_data.data.user.plus_members.map((val, key) => {
				return _react2.default.createElement(
					'div',
					{ key: key, className: 'ins-user-details-lisitng', id: val.id },
					_react2.default.createElement(
						'p',
						{ className: 'sub-form-hed' },
						val.is_primary_user ? 'Proposer' : val.relation ? val.relation : ''
					),
					_react2.default.createElement(
						'ul',
						{ className: 'ins-usr-img-para pl-0' },
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'div',
								{ className: 'img-list-width' },
								_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/user-01.svg" })
							),
							_react2.default.createElement(
								'p',
								{ style: { 'textTransform': 'capitalize' } },
								val.first_name,
								' ',
								val.last_name,
								' | ',
								val.title == 'mr.' ? 'Male' : val.gender == 'm' ? 'Male' : 'Female'
							)
						),
						val.dob ? _react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'div',
								{ className: 'img-list-width' },
								_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/calendar-01.svg" })
							),
							_react2.default.createElement(
								'p',
								null,
								val.dob
							)
						) : '',
						val.email ? _react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'div',
								{ className: 'img-list-width' },
								_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/mail-01.svg" })
							),
							_react2.default.createElement(
								'p',
								null,
								val.email
							)
						) : ''
					)
				);
			}) : ""
		);
	}

}

exports.default = VipClubActivatedMemberDetails;

/***/ }),

/***/ "./dev/js/components/vipClub/vipClubFamilyMembers.js":
/*!***********************************************************!*\
  !*** ./dev/js/components/vipClub/vipClubFamilyMembers.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _vipClubPopup = __webpack_require__(/*! ./vipClubPopup.js */ "./dev/js/components/vipClub/vipClubPopup.js");

var _vipClubPopup2 = _interopRequireDefault(_vipClubPopup);

var _newDateSelector = __webpack_require__(/*! ../commons/newDateSelector.js */ "./dev/js/components/commons/newDateSelector.js");

var _newDateSelector2 = _interopRequireDefault(_newDateSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class VipProposerFamily extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			last_name: '',
			dob: '',
			id: '',
			// relation: '',
			// title: '',
			showPopup: false,
			setDefault: false,
			profile_id: null,
			// relation_key:'',
			is_disable: false,
			member_form_id: this.props.member_form_id,
			is_already_user: false,
			isUserSelectedProfile: this.props.isUserSelectedProfile,
			isDobValidated: false,
			is_dob_error: false,
			gender: 'm',
			isForceUpdateDob: false
		};
	}

	componentWillReceiveProps(props) {
		let self = this;
		let profile = {};
		if (props.is_from_payment) {
			if (props.vipClubMemberDetails[props.member_id]) {
				let profile = Object.assign({}, this.props.vipClubMemberDetails[this.props.member_id]);
				let nextProfile = Object.assign({}, props.vipClubMemberDetails[props.member_id]);
				if (JSON.stringify(this.state) != JSON.stringify(nextProfile)) {
					this.setState(_extends({}, nextProfile));
				}
			} else if (props.member_id >= 0 && !this.state.setDefault) {
				this.setState({ id: props.member_id, setDefault: true }, () => {
					this.setState({ is_disable: false }, () => {
						self.handleSubmit();
					});
				});
			}
		}
	}

	handleChange(field, event) {
		this.setState({
			[event.target.getAttribute('data-param')]: event.target.value, id: this.props.member_id
		});
	}

	handleRelation(id, event) {
		var relation_id = document.getElementById(id);
		this.setState({ id: this.props.member_id, 'relation': event.target.value, 'relation_key': relation_id.options[relation_id.selectedIndex].getAttribute('data-param') }, () => {
			this.handleSubmit();
		});
	}

	handleSubmit() {
		var self_data = this.state;
		if (self_data.name !== '') {
			if (self_data.name.length > 50) {
				self_data.name = self_data.name.slice(0, 50);
			}
		}
		this.props.userDetails('self_data', self_data); // to save user form details in store
	}

	togglePopup(newProfileid, member_id, newProfile) {
		if (newProfileid !== '') {
			if (newProfile && newProfile.dob) {
				this.setState({ dob: newProfile.dob, isDobValidated: true });
			}
			newProfile.isUserSelectedProfile = true;
			this.props.selectVipUserProfile(newProfileid, member_id, newProfile, this.props.param_id); // select profile from option
			this.setState({
				showPopup: !this.state.showPopup,
				profile_id: newProfileid,
				id: newProfileid,
				isForceUpdateDob: true
			}, () => {
				this.handleSubmit();
			});
		} else {
			this.setState({ showPopup: !this.state.showPopup, isForceUpdateDob: false });
		}
	}

	handleNameCharacters(field, event) {
		if (field == 'name') {
			if (this.state.name.length == 50) {
				event.preventDefault();
			}
		}
	}

	hideSelectProfilePopup() {
		this.setState({ showPopup: false });
	}

	submitNewDob(type, newDate, isValidDob, user_form_id) {
		let self = this;
		self.setState({
			dob: newDate, isDobValidated: isValidDob
		}, () => {
			self.handleSubmit();
		});
	}

	unSetForceUpdateDob() {
		this.setState({ isForceUpdateDob: false });
	}

	render() {
		console.log(this.props.validateErrors);
		let commonMsgSpan = _react2.default.createElement(
			'span',
			{ className: 'fill-error-span' },
			'*This is a mandatory field'
		);

		return _react2.default.createElement(
			'div',
			{ className: 'ins-sub-forms mrt-10', id: `member_${this.props.member_id}` },
			_react2.default.createElement(
				'div',
				{ className: 'widget goldUserAddon', style: { padding: '10px' } },
				_react2.default.createElement(
					'div',
					{ className: 'sub-form-input-data', style: { marginBottom: 10 } },
					_react2.default.createElement(
						'div',
						null,
						this.props.vip_club_db_data.data.user && Object.keys(this.props.vip_club_db_data.data.user).length > 0 && this.props.vip_club_db_data.data.user.plus_members && this.props.vip_club_db_data.data.user.plus_members.length > 0 ? _react2.default.createElement(
							'p',
							{ className: 'sub-form-hed' },
							`Member ${this.props.vip_club_db_data.data.user.plus_members.length + this.props.member_view_id + 1}`
						) : ''
					),
					_react2.default.createElement(
						'div',
						null,
						this.props.is_tobe_remove_option ? _react2.default.createElement(
							'div',
							{ className: 'sub-form-hed-click', onClick: this.props.removeMemberForm.bind(this, this.props.member_id) },
							'Remove'
						) : ''
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'd-flex' },
					_react2.default.createElement(
						'p',
						{ className: `label-names-buttons ${this.state.gender == 'm' ? 'btn-active' : ''}`, name: 'gender', checked: this.state.gender == 'm', onClick: () => this.setState({ 'gender': 'm' }, () => {
								this.handleSubmit();
							}), onBlur: this.handleChange.bind(this) },
						'Male'
					),
					_react2.default.createElement(
						'p',
						{ className: `label-names-buttons ${this.state.gender == 'f' ? 'btn-active' : ''}`, name: 'gender', checked: this.state.gender == 'f', onClick: () => this.setState({ 'gender': 'f' }, () => {
								this.handleSubmit();
							}), onBlur: this.handleChange.bind(this) },
						'Female'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'row no-gutters' },
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement(
							'div',
							{ className: 'ins-form-group inp-margin-right ' },
							_react2.default.createElement('input', { type: 'text', style: { 'textTransform': 'capitalize' },
								id: `name_${this.props.member_id}`,
								className: `form-control ins-form-control ${this.props.validateErrors.indexOf('name') > -1 ? 'fill-error' : ''}`, required: true,
								autoComplete: 'first_name',
								name: 'name', 'data-param': 'name',
								value: this.state.name,
								onChange: this.handleChange.bind(this, 'name'),
								onBlur: this.handleSubmit.bind(this),
								onKeyPress: this.handleNameCharacters.bind(this, 'name'),
								disabled: this.state.is_disable ? 'disabled' : ''
							}),
							_react2.default.createElement(
								'label',
								{ className: this.state.is_disable ? 'form-control-placeholder datePickerLabel' : 'form-control-placeholder',
									htmlFor: `name_${this.props.member_id}` },
								_react2.default.createElement('span', { className: 'labelDot' }),
								'Name'
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/user-01.svg" })
						),
						this.props.validateErrors.indexOf('name') > -1 ? commonMsgSpan : ''
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement(
							'form',
							null,
							_react2.default.createElement(_newDateSelector2.default, _extends({}, this.props, { getNewDate: this.submitNewDob.bind(this), is_dob_error: this.props.is_dob_error, old_dob: this.state.dob, user_form_id: this.props.member_id, is_gold: true, unSetForceUpdateDob: this.unSetForceUpdateDob.bind(this), isForceUpdateDob: this.state.isForceUpdateDob })),
							this.props.validateErrors.indexOf('dob') > -1 ? commonMsgSpan : ''
						)
					)
				),
				this.props.show_selected_profiles.length > 0 && !this.state.is_disable ? _react2.default.createElement(
					'div',
					{ className: 'sub-form-hed-click', onClick: () => this.setState({
							showPopup: true, isForceUpdateDob: false }) },
					'Select from profile',
					_react2.default.createElement('img', { src: "/assets" + "/img/rgt-arw.svg" })
				) : ''
			),
			this.state.showPopup ? _react2.default.createElement(_vipClubPopup2.default, _extends({}, this.props, {
				currentSelectedVipMembersId: this.props.currentSelectedVipMembersId,
				member_id: this.props.member_id,
				closePopup: this.togglePopup.bind(this),
				isSelectprofile: true,
				vipClubMemberDetails: this.props.vipClubMemberDetails[this.props.member_id],
				hideSelectProfilePopup: this.hideSelectProfilePopup.bind(this),
				is_see_more: false
			})) : ''
		);
	}

}

exports.default = VipProposerFamily;

/***/ }),

/***/ "./dev/js/components/vipClub/vipClubMemberDetailsView.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/vipClub/vipClubMemberDetailsView.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _vipClubSelf = __webpack_require__(/*! ./vipClubSelf.js */ "./dev/js/components/vipClub/vipClubSelf.js");

var _vipClubSelf2 = _interopRequireDefault(_vipClubSelf);

var _vipClubFamilyMembers = __webpack_require__(/*! ./vipClubFamilyMembers.js */ "./dev/js/components/vipClub/vipClubFamilyMembers.js");

var _vipClubFamilyMembers2 = _interopRequireDefault(_vipClubFamilyMembers);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _paymentForm = __webpack_require__(/*! ../commons/paymentForm */ "./dev/js/components/commons/paymentForm/index.js");

var _paymentForm2 = _interopRequireDefault(_paymentForm);

var _gtm = __webpack_require__(/*! ../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _staticDisclaimer = __webpack_require__(/*! ../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

var _vipClubActivatedMemeberDetailsView = __webpack_require__(/*! ./vipClubActivatedMemeberDetailsView.js */ "./dev/js/components/vipClub/vipClubActivatedMemeberDetailsView.js");

var _vipClubActivatedMemeberDetailsView2 = _interopRequireDefault(_vipClubActivatedMemeberDetailsView);

var _BookingConfirmationPopup = __webpack_require__(/*! ../diagnosis/bookingSummary/BookingConfirmationPopup.js */ "./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js");

var _BookingConfirmationPopup2 = _interopRequireDefault(_BookingConfirmationPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class VipClubMemberDetailsView extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			saveMembers: false,
			validateErrors: {},
			show_selected_profiles: [],
			paymentData: null,
			show_popup: false,
			proceed: false,
			popupMemData: {},
			coupon_code: null,
			coupon_id: null,
			is_payment_coupon_applied: false,
			coupon_discount: null,
			user_email: null,
			user_phone_number: null,
			is_dob_error: false,
			showConfirmationPopup: 'close',
			to_be_remove_id: ''
		};
	}
	componentDidMount() {
		if (window) {
			window.scrollTo(0, 0);
		}
		if (this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && !this.props.is_from_payment && this.props.vipCoupons.length > 0) {
			// get coupon discount
			this.props.applyCouponDiscount({ productId: this.props.selected_vip_plan.is_gold ? 8 : 11, couponCode: this.props.vipCoupons[0].code, couponId: this.props.vipCoupons[0].coupon_id, plan_id: this.props.selected_vip_plan.id, deal_price: this.props.selected_vip_plan.deal_price,
				cb: resp => {
					if (resp) {
						this.setState({ coupon_discount: resp.discount });
					}
				}
			});
			this.setState({ is_payment_coupon_applied: true, coupon_code: this.props.vipCoupons[0].code, coupon_id: this.props.vipCoupons[0].coupon_id });
		}

		if (this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.profiles[this.props.USER.defaultProfile] && Object.keys(this.props.USER.profiles[this.props.USER.defaultProfile]).length > 0) {
			this.setState({ user_email: this.props.USER.profiles[this.props.USER.defaultProfile].email, user_phone_number: this.props.USER.profiles[this.props.USER.defaultProfile].phone_number });
		}
	}

	addMembers(isFromDefaultUser) {
		// add new members 
		let member_dummy_data = {
			name: '',
			last_name: '',
			dob: '',
			id: '',
			// relation: null,
			// relation_key: null,
			// title: '',
			profile: null,
			profile_id: null,
			phone_number: '',
			email: null,
			isUserSelectedProfile: true,
			// day:null,
			// mnth:null,
			// year:null,
			// email:'',
			first_name: '',
			age: ''
		};
		let card;
		let membersId = [];
		if (isFromDefaultUser && !this.props.is_from_payment) {
			this.props.clearVipMemeberData(); // reset vip or gold store to initial state
			membersId.push({ '0': 0, type: 'self', member_form_id: 0, isUserSelectedProfile: true, to_be_remove: false });
			member_dummy_data.id = 0;
			member_dummy_data.is_tobe_dummy_user = true;
			this.props.saveCurrentSelectedVipMembers(membersId, resp => {
				// save current visible form member or selected user profile id
				this.props.userDetails('self_data', member_dummy_data); // to save user form details in store
			});
		} else {
			if (this.props.vip_club_db_data && this.props.vip_club_db_data.data && Object.keys(this.props.vip_club_db_data.data).length && this.props.vip_club_db_data.data.plan && this.props.vip_club_db_data.data.plan.length > 0) {
				// this.props.vip_club_db_data.data.plan[0].total_allowed_members	
				if (this.props.currentSelectedVipMembersId && this.props.currentSelectedVipMembersId.length > 0 && this.props.currentSelectedVipMembersId.length < this.props.vip_club_db_data.data.plan[0].total_allowed_members) {
					membersId = [].concat(this.props.currentSelectedVipMembersId);
					let currentFormIdsCount = this.props.currentSelectedVipMembersId.length;
					let total_allowed_members = this.props.vip_club_db_data.data.plan[0].total_allowed_members;
					if (currentFormIdsCount <= total_allowed_members) {
						membersId.push({ [currentFormIdsCount]: currentFormIdsCount, type: 'adult', member_form_id: currentFormIdsCount, isUserSelectedProfile: true, to_be_remove: true });
						member_dummy_data.id = currentFormIdsCount;
						member_dummy_data.is_tobe_dummy_user = false;
					}
					this.props.saveCurrentSelectedVipMembers(membersId, resp => {
						// save current visible form member or selected user profile id
						this.props.userDetails('self_data', member_dummy_data); // to save user form details in store
					});
				}
			}
		}
	}

	componentWillReceiveProps(props) {
		let card;
		let self = this;
		let isDummyUser;
		let membersId = [];
		if (!this.state.saveMembers && Object.keys(props.selected_vip_plan).length > 0 && !props.currentSelectedVipMembersId.length && !props.is_from_payment) {
			let loginUser;
			let isDefaultUser;
			if (props.USER) {
				loginUser = props.USER.defaultProfile;
			}
			if (this.props.savedMemberData && this.props.savedMemberData.length > 0) {
				if (this.props.savedMemberData.length == 1 && this.props.savedMemberData[0] == null) {
					if (props.USER.profiles && Object.keys(props.USER.profiles).length && props.USER.profiles[props.USER.defaultProfile] && Object.keys(props.USER.profiles[props.USER.defaultProfile]).length > 0) {
						membersId.push({ [0]: props.USER.profiles[props.USER.defaultProfile].id, type: 'self', member_form_id: 0, isUserSelectedProfile: true, fromWhere: 'show_api' });
					} else {
						membersId.push({ [0]: 0, type: 'self', member_form_id: 0, isUserSelectedProfile: true, fromWhere: 'show_api', to_be_remove: false });
					}
				} else {
					Object.entries(props.savedMemberData).map(function ([key, value]) {
						membersId.push({ [key]: value.id, type: 'self', member_form_id: 0, isUserSelectedProfile: true, to_be_remove: false });
					});
				}
				props.saveCurrentSelectedVipMembers(membersId); // save current visible form member or selected user profile id
				this.setState({ saveMembers: true });
			} else {
				if (props.USER.profiles && Object.keys(props.USER.profiles).length && props.USER.profiles[props.USER.defaultProfile]) {
					isDefaultUser = props.USER.profiles[props.USER.defaultProfile].is_default_user;
					isDummyUser = props.USER.profiles[props.USER.defaultProfile].isDummyUser;
				}
				if (!isDummyUser) {
					membersId.push({ '0': loginUser, type: 'self', member_form_id: 0, isUserSelectedProfile: false, to_be_remove: false });
				} else {
					membersId.push({ '0': 0, type: 'self', member_form_id: 0, isUserSelectedProfile: false, to_be_remove: false });
				}
				props.saveCurrentSelectedVipMembers(membersId); // save current visible form member or selected user profile id
				this.setState({ saveMembers: true });
			}
		} else if (!this.state.saveMembers && Object.keys(props.selected_vip_plan).length > 0 && props.is_from_payment && Object.keys(props.vip_club_db_data).length > 0) {
			if (props.vip_club_db_data.data.user && Object.keys(props.vip_club_db_data.data.user).length > 0 && props.vip_club_db_data.data.user.plus_members && props.vip_club_db_data.data.user.plus_members.length > 0) {
				if (!Object.keys(props.vipClubMemberDetails).length) {
					membersId.push({ [0]: 0, type: 'adult', member_form_id: 0, isUserSelectedProfile: false, to_be_remove: false });
					this.setState({ saveMembers: true });
				} else {
					props.currentSelectedVipMembersId.map((val, key) => {
						if (Object.keys(props.vipClubMemberDetails).length > 0) {
							membersId.push({ [key]: props.vipClubMemberDetails[val[key]].id, type: 'adult', member_form_id: props.vipClubMemberDetails[val[key]].id, isUserSelectedProfile: false, to_be_remove: key == 0 ? false : true });
						}
					});
				}

				props.saveCurrentSelectedVipMembers(membersId); // save current visible form member or selected user profile id
				this.setState({ saveMembers: true });
			}
		}
		let profileLength = Object.keys(props.USER.profiles).length;
		let currentSelectedProfiles = [];
		let show_selected_profile = [];
		this.props.currentSelectedVipMembersId.map((val, key) => {
			currentSelectedProfiles.push(val[key]);
		});
		let already_users_ids = [];
		if (this.props.vip_club_db_data && Object.keys(this.props.vip_club_db_data).length > 0 && this.props.vip_club_db_data.data.user && Object.keys(this.props.vip_club_db_data.data).length > 0 && Object.keys(this.props.vip_club_db_data.data.user).length > 0 && this.props.vip_club_db_data.data.user.plus_members && this.props.vip_club_db_data.data.user.plus_members.length > 0) {
			this.props.vip_club_db_data.data.user.plus_members.map((val, key) => {
				already_users_ids.push(val.profile);
			});
		}
		if (profileLength > 0) {
			if (!props.USER.profiles[props.USER.defaultProfile].isDummyUser) {
				{
					Object.entries(props.USER.profiles).map(function ([key, value]) {

						if (currentSelectedProfiles.indexOf(parseInt(key)) == -1 && key !== props.USER.defaultProfile && already_users_ids.indexOf(parseInt(key)) == -1) {
							show_selected_profile.push(key);
						}
					});
				}
				self.setState({ show_selected_profiles: show_selected_profile });
			}
		}
	}

	processPayment(data) {
		if (data && data.status) {
			this.setState({ paymentData: data.data }, () => {
				setTimeout(() => {
					if (document.getElementById('paymentForm') && Object.keys(this.state.paymentData).length > 0) {
						let form = document.getElementById('paymentForm');
						form.submit();
					}
				}, 500);
			});
		}
	}

	proceedPlan(isSms, extraDataParams = {}) {
		//new
		let success_id;
		let data = {};
		let pushData = {};
		let isDummyUser;
		let self_profile = {};
		let is_disable = false;
		let member_ref = '';
		let validatingErrors = {};
		let param;
		let parsed = queryString.parse(this.props.location.search);
		if (this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && this.props.vipClubMemberDetails && Object.keys(this.props.vipClubMemberDetails).length > 0) {
			data.plan_id = this.props.selected_vip_plan.id;
			data.members = [];
			data.utm_spo_tags = parsed;
			pushData.utm_spo_tags = parsed;
			pushData.plan = this.props.selected_vip_plan;
			pushData.dummy_data_type = 'PLAN_PURCHASE';
			pushData.members = [];
			pushData.coupon_data = this.props.vipCoupons;
			if (isSms) {
				pushData.is_agent = true;
			} else {
				pushData.is_agent = false;
			}
			let fields = [];
			this.props.currentSelectedVipMembersId.map((val, key) => {
				if (Object.keys(this.props.vipClubMemberDetails).length > 0) {
					fields = [];
					param = this.props.vipClubMemberDetails[val[key]];
					if (param && Object.keys(param).length > 0) {
						//common validation starts

						if (param.name == "") {
							is_disable = true;
							fields.push('name');
						}

						if (param.dob == null || param.dob == "") {
							is_disable = true;
							fields.push('dob');
							this.setState({ is_dob_error: true });
						}

						if (param.dob != null && !param.isDobValidated) {
							is_disable = true;
							fields.push('dob');
							this.setState({ is_dob_error: true });
						}

						//common validation ends 

						if (!this.props.is_from_payment) {
							if (param.email == "" || !param.email) {
								is_disable = true;
								fields.push('email');
							}
							if (param.email != '' && param.relation == 'self') {
								let validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
								validEmail = validEmail.test(param.email);
								if (!validEmail) {
									is_disable = true;
									fields.push('email');
								}
							}
						}
					}
					validatingErrors[param.id] = fields;
				}
			});
			console.log(validatingErrors);
			Object.keys(validatingErrors).forEach(function (key) {
				if (validatingErrors[key].length > 0) {
					is_disable = true;
					member_ref = `member_${key}`;
				}
			});
			this.setState({ validateErrors: validatingErrors });
			if (is_disable && document.getElementById(member_ref)) {
				document.getElementById(member_ref).scrollIntoView();
			} else {
				let city;
				let city_code;
				let address;
				let pincode;
				var members = {};
				let primary_user = {};
				if (this.props.is_from_payment) {
					let is_member_updated = [];
					let image_ids = [];
					if (this.props.vip_club_db_data.data.user && Object.keys(this.props.vip_club_db_data.data.user).length > 0 && this.props.vip_club_db_data.data.user.plus_members && this.props.vip_club_db_data.data.user.plus_members.length > 0) {
						primary_user = this.props.vip_club_db_data.data.user.plus_members.filter(x => x.is_primary_user)[0];
					}
					if (this.props.members_proofs && this.props.members_proofs.length > 0 && Object.keys(primary_user).length > 0) {
						//for self member_proofs
						param = primary_user;
						members = {};
						members.profile = param.profile;
						members.id = param.profile;
						members.is_primary_user = param.is_primary_user;
						// members.title = primary_user.title
						members.first_name = primary_user.first_name;
						members.last_name = '';
						members.email = primary_user.email;
						members.dob = primary_user.dob;
						is_member_updated = this.props.members_proofs.filter(x => x.id == param.profile);
						if (is_member_updated && is_member_updated.length > 0) {
							if (is_member_updated[0].img_path_ids.length > 0) {
								image_ids = [];
								is_member_updated[0].img_path_ids.map((imgId, i) => {
									image_ids.push({ 'proof_file': imgId.id });
								});
							}
							members.document_ids = image_ids;
						}
						data.members.push(members);
					}
					this.props.currentSelectedVipMembersId.map((val, key) => {
						if (Object.keys(this.props.vipClubMemberDetails).length > 0) {
							param = this.props.vipClubMemberDetails[val[key]];
							members = {};
							// members.title = param.title
							// members.relation = param.relation_key
							members.first_name = param.name;
							members.last_name = '';
							members.email = null;
							members.dob = param.dob;
							members.gender = param.gender;
							members.profile = param.profile_id;
							members.is_primary_user = false;
							// data.members.push(members)
							if (this.props.members_proofs && this.props.members_proofs.length > 0) {
								is_member_updated = this.props.members_proofs.filter(x => x.id == param.id);
								if (is_member_updated && is_member_updated.length > 0) {
									if (is_member_updated[0].img_path_ids.length > 0) {
										image_ids = [];
										is_member_updated[0].img_path_ids.map((imgId, i) => {
											image_ids.push({ 'proof_file': imgId.id });
										});
									}
									members.document_ids = image_ids;
								}
								// members.id=param.id
							}
							// pushData.members.push(members)
							return data.members.push(members);
						}
					});
					console.log(data);
					let popupMemData;
					popupMemData = data.members;
					this.setState({ popupMemData: popupMemData });
					if (!this.state.proceed && this.props.currentSelectedVipMembersId && this.props.currentSelectedVipMembersId.length < this.props.selected_vip_plan.total_allowed_members) {
						this.setState({ show_popup: true });
						return;
					}
					console.log(data);
					this.props.addVipMembersData(data, resp => {
						// to add member details
						if (resp.success) {
							this.props.history.push('vip-club-activated-details');
						}
					});
				} else {
					this.props.currentSelectedVipMembersId.map((val, key) => {
						if (Object.keys(this.props.vipClubMemberDetails).length > 0) {
							param = this.props.vipClubMemberDetails[val[key]];
							members = {};
							// members.title = param.title
							// members.relation = param.relation_key
							members.first_name = param.name;
							members.last_name = '';
							members.email = param.email;
							members.dob = param.dob;
							members.gender = param.gender;
							members.profile = param.profile_id;
							members.id = param.id;
							members.is_primary_user = true;
							data.members.push(members);
							data['coupon_code'] = this.state.coupon_code && this.state.is_payment_coupon_applied ? [this.state.coupon_code] : [];
							data['coupon_type'] = this.props.selected_vip_plan.is_gold ? 'gold' : 'vip';
							pushData['coupon_code'] = this.state.coupon_code && this.state.is_payment_coupon_applied ? [this.state.coupon_code] : [];
							pushData['coupon_type'] = this.props.selected_vip_plan.is_gold ? 'gold' : 'vip';
							pushData.members.push(param);
							console.log(data);

							if (_storage2.default.isAgent()) {
								this.pushUserData(pushData);
							}

							if (_storage2.default && _storage2.default.getAnyCookie('sbi_utm') && this.props.common_utm_tags && this.props.common_utm_tags.length && this.props.common_utm_tags.filter(x => x.type == 'sbi_utm').length) {

								let tags = this.props.common_utm_tags.filter(x => x.type == 'sbi_utm')[0];
								if (tags.utm_tags) {

									data['utm_sbi_tags'] = tags.utm_tags;
								}
							} else if (document && document.location && document.location.host && document.location.host.includes('sbi')) {
								data['utm_sbi_tags'] = {
									utm_tags: {
										utm_source: 'sbi_utm',
										utm_term: '',
										utm_medium: '',
										utm_campaign: ''
									},
									time: new Date().getTime()
								};
							}

							if (isSms) {
								this.sendSMS(extraDataParams);
							} else {
								this.props.vipClubPay(data, resp => {
									// to request for payment

									if (resp && resp.error) {
										_nodeSnackbar2.default.show({ pos: 'bottom-center', text: resp.error });
										return;
									}
									if (resp.payment_required) {
										this.processPayment(resp);
									} else {
										if (resp && resp.data) {
											success_id = '/vip-club-activated-details?payment_success=true&id=' + resp.data.id;
											this.props.history.push(success_id);
										}
									}
								});
							}
						}
					});
				}
			}
		}
	}

	pushUserData(data) {
		// to save proposer/self data to the dummy table in case of agent or proposer self
		if (data && Object.keys(data).length && data.members && data.members.length && _storage2.default.isAgent()) {
			if (data.members.length == 1 && data.members[0] == null) {} else {
				this.props.pushMembersData(data);
			}
		}
	}

	sendSMS(extraDataParams) {
		let parsed = queryString.parse(this.props.location.search);
		let extraParams = {};
		if (extraDataParams && extraDataParams.sendOnWhatsup) {
			extraParams['message_medium'] = 'WHATSAPP';
		}
		this.props.sendAgentBookingURL(null, 'sms', 'vip_purchase', parsed, extraParams, (err, res) => {
			//send payment link in sms to user by agaent
			if (err) {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SEND ERROR" });
			} else {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SENT SUCCESSFULY" });
			}
		});
	}

	proceedMembers(is_wait) {
		this.setState({ show_popup: false, proceed: is_wait ? true : false }, () => {
			if (document.getElementById('submit_buy')) {
				document.getElementById('submit_buy').click();
			}
		});
	}

	proceedMembersNo(is_wait) {
		this.setState({ show_popup: false, proceed: false, popupMemData: {} });
	}

	applyCoupons() {
		// apply coupons 
		let selected_plan_id = null;
		if (this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && !this.props.is_from_payment) {
			// this.props.getCoupons({productId:this.state.is_gold?8:11,gold_plan_id:this.props.selected_vip_plan.id})
			selected_plan_id = this.props.selected_vip_plan.id;
			this.props.history.push(`/coupon/vip/${selected_plan_id}/${this.props.selected_vip_plan.is_gold ? 8 : 11}?deal_price=${this.props.selected_vip_plan.deal_price}&cart_item=`);
		}
	}

	removeCoupon() {
		const parsed = queryString.parse(this.props.location.search);
		let gold_push_data = {};
		let param;
		gold_push_data.plan = this.props.selected_vip_plan;
		gold_push_data.dummy_data_type = 'PLAN_PURCHASE';
		gold_push_data.members = [];
		gold_push_data.coupon_data = [];
		gold_push_data.utm_spo_tags = parsed;
		gold_push_data.is_agent = false;
		gold_push_data.coupon_type = this.props.selected_vip_plan.is_gold ? 'gold' : 'vip';
		this.props.currentSelectedVipMembersId.map((val, key) => {
			if (Object.keys(this.props.vipClubMemberDetails).length > 0) {
				param = this.props.vipClubMemberDetails[val[key]];
				gold_push_data.members.push(param);
			}
		});
		if (_storage2.default.isAgent()) {
			gold_push_data.is_agent = true;
			this.pushUserData(gold_push_data); // to save proposer/self data to the dummy table in case of agent or proposer self
		}
		this.props.removeVipCoupons(); // to reset coupons to intial state
	}

	removeMemberForm(id) {
		let new_data = [];
		// this.setState({showConfirmationPopup: 'open',to_be_remove_id:id})
		if (this.props.currentSelectedVipMembersId && this.props.currentSelectedVipMembersId.length) {
			new_data = this.props.currentSelectedVipMembersId.filter(x => x.member_form_id != id);
			this.props.removeMembers(new_data);
			this.setState({ showConfirmationPopup: 'close', to_be_remove_id: '' });
		}
	}

	priceConfirmationPopup(choice) {
		let new_data = [];
		if (!choice) {
			this.setState({ showConfirmationPopup: 'close' });
		} else {
			if (this.props.currentSelectedVipMembersId && this.props.currentSelectedVipMembersId.length) {
				new_data = this.props.currentSelectedVipMembersId.filter(x => x.member_form_id != this.state.to_be_remove_id);
				this.props.removeMembers(new_data);
				this.setState({ showConfirmationPopup: 'close', to_be_remove_id: '' });
			}
		}
	}
	render() {
		let child;
		let adult;
		let userProfile;
		let proposer_id = 0;
		// let selectedProfileId = parseInt(this.props.USER.defaultProfile) // to be deleted
		if (this.props.USER && this.props.USER.defaultProfile) {
			if (this.props.USER.defaultProfile == 999999) {
				proposer_id = 0;
			} else {
				proposer_id = this.props.USER.defaultProfile;
			}
		}
		let show_extra_fields = false;

		if (this.props.currentSelectedVipMembersId && this.props.currentSelectedVipMembersId.length > 0) {
			this.props.currentSelectedVipMembersId.filter(x => x.isUserSelectedProfile).map((data, i) => {
				proposer_id = data[i];
				show_extra_fields = true;
			});
		}
		// let selectedProfileId = parseInt(this.props.USER.defaultProfile) // to be deleted
		let selectedMembersId = 0;

		if (this.props.is_from_payment && Object.keys(this.props.selected_vip_plan).length > 0) {

			userProfile = Object.assign({}, this.props.USER.profiles[this.props.USER.defaultProfile]);

			var n = this.props.selected_vip_plan.total_allowed_members - 1;
			if (n !== 0) {
				child = this.props.currentSelectedVipMembersId.filter(x => x.type === 'adult').map((data, i) => {
					// selectedMembersId++
					return _react2.default.createElement(_vipClubFamilyMembers2.default, _extends({}, this.props, {
						key: i,
						member_id: data[i],
						id: `member_${i}`,
						param_id: i,
						member_view_id: i,
						validateErrors: this.state.validateErrors[data[i]] || [],
						show_selected_profiles: this.state.show_selected_profiles,
						member_form_id: i,
						isUserSelectedProfile: false,
						show_extra_fields: show_extra_fields,
						user_email: this.state.user_email,
						user_phone_number: this.state.user_phone_number,
						is_dob_error: this.state.is_dob_error,
						is_tobe_remove_option: data.to_be_remove,
						removeMemberForm: this.removeMemberForm.bind(this)
					}));
				});
			}
		}
		return _react2.default.createElement(
			'div',
			{ className: 'profile-body-wrap' },
			this.props.isSalesAgent && this.props.isAgent ? '' : _react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
			this.state.showConfirmationPopup == 'open' ? _react2.default.createElement(_BookingConfirmationPopup2.default, _extends({}, this.props, { priceConfirmationPopup: this.priceConfirmationPopup.bind(this), is_gold: true })) : '',
			_react2.default.createElement(
				'section',
				{ className: 'container container-top-margin cardMainPaddingRmv' },
				_react2.default.createElement(
					'div',
					{ className: 'row no-gutters dsktp-row-gutter' },
					_react2.default.createElement(
						'div',
						{ className: 'col-12 col-md-7 col-lg-7 ins-main-padding' },
						this.state.show_popup ? _react2.default.createElement(
							'div',
							{ className: 'search-el-popup-overlay ' },
							_react2.default.createElement(
								'div',
								{ className: 'search-el-popup' },
								_react2.default.createElement(
									'div',
									{ className: 'widget' },
									_react2.default.createElement(
										'div',
										{ className: 'widget-content padiing-srch-el pb-0' },
										_react2.default.createElement(
											'p',
											{ style: { fontSize: '14px' }, className: 'srch-el-conent' },
											' ',
											this.props.currentSelectedVipMembersId.length,
											' Members Added'
										),
										_react2.default.createElement(
											'div',
											{ className: 'vip-pop-table' },
											_react2.default.createElement(
												'div',
												{ className: 'vip-sn-tbl m-0' },
												this.state.popupMemData && Object.keys(this.state.popupMemData).length > 0 ? Object.entries(this.state.popupMemData).map(function ([key, val]) {
													return val.is_already_user ? '' : _react2.default.createElement(
														'table',
														{ key: key, className: 'vip-acrd-content text-center' },
														_react2.default.createElement(
															'tbody',
															null,
															_react2.default.createElement(
																'tr',
																null,
																_react2.default.createElement(
																	'th',
																	null,
																	'Name'
																),
																_react2.default.createElement(
																	'th',
																	null,
																	'Gender'
																),
																_react2.default.createElement(
																	'th',
																	null,
																	'DOB'
																)
															),
															_react2.default.createElement(
																'tr',
																null,
																_react2.default.createElement(
																	'td',
																	{ style: { textTransform: 'capitalize' } },
																	val.first_name
																),
																val.title ? _react2.default.createElement(
																	'td',
																	{ style: { 'textTransform': 'capitalize' } },
																	val.title == 'mr.' ? 'm' : 'f'
																) : val.gender ? _react2.default.createElement(
																	'td',
																	{ style: { 'textTransform': 'capitalize' } },
																	val.gender
																) : '',
																_react2.default.createElement(
																	'td',
																	null,
																	val.dob
																)
															)
														)
													);
												}) : ''
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'search-el-btn-container' },
											_react2.default.createElement(
												'button',
												{ style: { fontSize: '14px' }, onClick: this.proceedMembersNo.bind(this, 0) },
												'Cancel'
											),
											_react2.default.createElement(
												'button',
												{ style: { fontSize: '14px' }, onClick: this.proceedMembers.bind(this, 1) },
												'Submit'
											)
										)
									)
								)
							)
						) : '',
						_react2.default.createElement(
							'section',
							{ className: 'profile-book-screen' },
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'div',
									{ className: 'insurance-member-container', style: { padding: 0 } },
									_react2.default.createElement(
										'h4',
										{ className: 'mb-0', style: { padding: '2px 0px 6px' } },
										'Member Details'
									),
									_react2.default.createElement(
										'div',
										{ className: 'vip-wrng-mssg' },
										this.props.is_from_payment ? _react2.default.createElement(
											'span',
											null,
											'Member details can\u2019t be edited after submission'
										) : _react2.default.createElement(
											'span',
											null,
											'Gold Membership plan will be activated on the below profile mobile number and can add more members later'
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'widget goldUserAddon', style: { padding: '10px' } },
										_react2.default.createElement(
											'div',
											{ className: ` insurance-member-details ${this.props.is_from_payment ? '' : 'mrt-20'}` },
											!this.props.is_from_payment ? _react2.default.createElement(_vipClubSelf2.default, _extends({}, this.props, {
												id: `member_${proposer_id}`,
												member_id: proposer_id,
												validateErrors: this.state.validateErrors[proposer_id] || [],
												member_form_id: 0,
												show_selected_profiles: this.state.show_selected_profiles,
												isUserSelectedProfile: false,
												addMembers: this.addMembers.bind(this),
												show_extra_fields: show_extra_fields,
												user_email: this.state.user_email,
												user_phone_number: this.state.user_phone_number,
												is_dob_error: this.state.is_dob_error
											})) : _react2.default.createElement(_vipClubActivatedMemeberDetailsView2.default, this.props)
										)
									),
									!this.props.is_from_payment ? this.props.vipCoupons && this.props.vipCoupons.length > 0 ? _react2.default.createElement(
										'div',
										{ className: 'widget cpn-blur mrb-15 cursor-pointer' },
										_react2.default.createElement(
											'div',
											{ className: 'widget-content d-flex jc-spaceb mt-10' },
											_react2.default.createElement(
												'h4',
												{ className: 'title coupon-text d-flex align-item-center m-0', style: { color: 'green' } },
												_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/coupon-applied.svg", className: 'visit-time-icon mr-10' }),
												_react2.default.createElement(
													'span',
													null,
													'Coupon Applied'
												)
											),
											_react2.default.createElement(
												'h4',
												{ className: 'title m-0 d-flex align-item-center', style: { color: 'green', marginRight: 13, fontSize: '12px', marginTop: '6px' } },
												_react2.default.createElement(
													'span',
													{ className: 'mr-10' },
													this.props.vipCoupons[0].code
												),
												_react2.default.createElement('img', { style: { width: 17 }, onClick: e => {
														this.removeCoupon();
														this.setState({ is_payment_coupon_applied: false, coupon_discount: null });
													}, src: "/assets" + "/img/customer-icons/cross.svg" })
											)
										)
									) : _react2.default.createElement(
										'div',
										{ className: 'widget cpn-blur mrb-15 cursor-pointer', onClick: this.applyCoupons.bind(this) },
										_react2.default.createElement(
											'div',
											{ className: 'widget-content d-flex jc-spaceb mt-10' },
											_react2.default.createElement(
												'h4',
												{ className: 'title coupon-text d-flex align-item-center m-0' },
												_react2.default.createElement('img', { style: { width: '24px' }, src: "/assets" + "/img/ofr-cpn.svg", className: 'visit-time-icon mr-10' }),
												_react2.default.createElement(
													'span',
													null,
													'HAVE A COUPON?'
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'visit-time-icon coupon-icon-arrow' },
												_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/right-arrow.svg" })
											)
										)
									) : '',
									child
								)
							),
							this.props.is_from_payment && this.props.currentSelectedVipMembersId && this.props.currentSelectedVipMembersId.length > 0 && this.props.vip_club_db_data && this.props.vip_club_db_data.data && Object.keys(this.props.vip_club_db_data.data).length && this.props.vip_club_db_data.data.plan && this.props.vip_club_db_data.data.plan.length > 0 && this.props.vip_club_db_data.data.user && Object.keys(this.props.vip_club_db_data.data.user).length && this.props.vip_club_db_data.data.user.plus_members && Object.keys(this.props.vip_club_db_data.data.user.plus_members).length && this.props.vip_club_db_data.data.user.plus_members.length + this.props.currentSelectedVipMembersId.length < this.props.vip_club_db_data.data.plan[0].total_allowed_members ? _react2.default.createElement(
								'button',
								{ className: 'add-mem-blk', onClick: this.addMembers.bind(this, false) },
								' ',
								_react2.default.createElement('img', { className: 'vip-add-img', src: "/assets" + '/img/vip-mem.svg' }),
								'Add Member'
							) : ''
						),
						!_storage2.default.isAgent() && this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && !this.props.is_from_payment && !this.props.isAgent ? _react2.default.createElement(
							'button',
							{ className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.proceedPlan.bind(this, false) },
							'Continue to Pay \u20B9',
							this.props.selected_vip_plan.deal_price - this.state.coupon_discount,
							_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
						) : !_storage2.default.isAgent() && this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && !this.props.is_from_payment && this.props.isAgent === 'false' ? _react2.default.createElement(
							'button',
							{ className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.proceedPlan.bind(this, false) },
							'Continue to Pay \u20B9',
							this.props.selected_vip_plan.deal_price - this.state.coupon_discount,
							_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
						) : '',
						!_storage2.default.isAgent() && this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && _react2.default.createElement(
							'div',
							{ className: 'v-btn-primary d-flex align-flex-sp-bt fixed horizontal bottom no-round text-lg sticky-btn' },
							this.props.isAgent === 'true' && this.props.isSalesAgent ? _react2.default.createElement(
								_react2.default.Fragment,
								null,
								_react2.default.createElement(
									'div',
									{ className: 'fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container ' },
									_react2.default.createElement(
										'button',
										{ className: 'add-shpng-cart-btn', 'data-disabled': 'true', onClick: this.proceedPlan.bind(this, true) },
										'Send SMS',
										_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
									),
									_react2.default.createElement(
										'button',
										{ className: 'v-btn-primary book-btn-mrgn-adjust', onClick: this.proceedPlan.bind(this, false) },
										'Continue to Pay \u20B9',
										this.props.selected_vip_plan.deal_price - this.state.coupon_discount,
										_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
									)
								)
							) : !this.props.isAgent && this.props.isAgent === 'false' ? _react2.default.createElement(
								'button',
								{ className: 'v-btn p-3 v-btn-primary', onClick: this.proceedPlan.bind(this, false) },
								'Continue to Pay \u20B9',
								this.props.selected_vip_plan.deal_price - this.state.coupon_discount,
								_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
							) : ''
						),
						!_storage2.default.isAgent() && this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && this.props.is_from_payment && !this.props.isSalesAgent && !this.props.isAgent ? _react2.default.createElement(
							'button',
							{ id: 'submit_buy', className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.proceedPlan.bind(this, false) },
							'Done',
							_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
						) : '',
						_storage2.default.isAgent() && this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && this.props.is_from_payment && !this.props.isSalesAgent && !this.props.isAgent ? _react2.default.createElement(
							'button',
							{ className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.proceedPlan.bind(this, true) },
							'Send SMS',
							_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
						) : _storage2.default.isAgent() && this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0 && !this.props.is_from_payment && !this.props.isSalesAgent && !this.props.isAgent ? _react2.default.createElement(
							_react2.default.Fragment,
							null,
							_react2.default.createElement(
								'div',
								{ className: 'fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container' },
								_react2.default.createElement(
									'button',
									{ className: 'v-btn-primary book-btn-mrgn-adjust', onClick: this.proceedPlan.bind(this, true) },
									'Send SMS',
									_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
								),
								_react2.default.createElement(
									'button',
									{ className: 'add-shpng-cart-btn', onClick: this.proceedPlan.bind(this, true, { sendOnWhatsup: true }) },
									_react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/wa-logo-sm.png' }),
									'Send on Whatsapp',
									_react2.default.createElement('span', { className: 'foot-btn-sub-span' })
								)
							),
							'\xB8'
						) : ''
					),
					_react2.default.createElement(_ChatPanel2.default, null)
				)
			),
			_react2.default.createElement(_staticDisclaimer2.default, { isVip: true }),
			this.state.paymentData ? _react2.default.createElement(_paymentForm2.default, { paymentData: this.state.paymentData, refs: 'opd' }) : ""
		);
	}

}

exports.default = VipClubMemberDetailsView;

/***/ }),

/***/ "./dev/js/components/vipClub/vipClubSelf.js":
/*!**************************************************!*\
  !*** ./dev/js/components/vipClub/vipClubSelf.js ***!
  \**************************************************/
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

var _insuranceProofs = __webpack_require__(/*! ./insuranceProofs.js */ "./dev/js/components/vipClub/insuranceProofs.js");

var _insuranceProofs2 = _interopRequireDefault(_insuranceProofs);

var _vipClubPopup = __webpack_require__(/*! ./vipClubPopup.js */ "./dev/js/components/vipClub/vipClubPopup.js");

var _vipClubPopup2 = _interopRequireDefault(_vipClubPopup);

var _newDateSelector = __webpack_require__(/*! ../commons/newDateSelector.js */ "./dev/js/components/commons/newDateSelector.js");

var _newDateSelector2 = _interopRequireDefault(_newDateSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class VipProposer extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: this.props.user_email,
			gender: '',
			dob: '',
			id: this.props.member_id,
			profile_flag: true,
			profile_id: null,
			profile: '',
			member_form_id: this.props.member_form_id,
			userProfiles: {},
			showPopup: false,
			isUserSelectedProfile: this.props.isUserSelectedProfile,
			phone_number: this.props.user_phone_number,
			isDobValidated: false,
			is_tobe_dummy_user: false,
			isForceUpdateDob: false
		};
	}
	componentDidMount() {
		let profile;
		let isDummyUser;
		if (this.props.USER && this.props.USER.profiles && Object.keys(this.props.USER.profiles).length > 0 && this.props.vipClubMemberDetails[this.props.member_id] && !this.props.is_from_payment) {
			if (!isDummyUser) {
				profile = Object.assign({}, this.props.vipClubMemberDetails[this.props.member_id]);
			} else {
				profile = Object.assign({}, this.props.vipClubMemberDetails[this.props.member_id]);
			}
			if (Object.keys(profile).length > 0) {
				isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser;
				if (profile.isDummyUser) {
					profile.id = 0;
					this.setState({ id: 0 }, () => {
						this.getUserDetails(profile); // fill user details in form
					});
				} else {
					this.setState({ id: profile.id }, () => {
						this.getUserDetails(profile); // fill user details in form
					});
				}
			}
		}
	}
	componentWillReceiveProps(props) {
		let self = this;
		if (props.USER && props.USER.profiles && Object.keys(props.USER.profiles).length > 0 && this.state.profile_flag && !props.is_from_payment) {
			let isDummyUser = props.USER.profiles[props.USER.defaultProfile].isDummyUser;
			if (Object.keys(props.vipClubMemberDetails).length > 0) {
				// retrieve already member details from user store
				let profile;
				if (!isDummyUser) {
					profile = Object.assign({}, props.vipClubMemberDetails[props.member_id]);
				} else {
					profile = Object.assign({}, props.vipClubMemberDetails[props.member_id]);
				}
				if (profile && Object.keys(profile).length) {
					this.setState({ id: profile.id, profile_flag: false }, () => {
						this.getUserDetails(profile); // fill user details in form	
					});
				}
			} else if (props.USER && props.USER.profiles && Object.keys(props.USER.profiles).length > 0 && props.USER.profiles[props.USER.defaultProfile]) {
				let profile;
				let exitsting_user_profile;
				if (props.savedMemberData && props.savedMemberData.length > 0) {
					// retrieve already member details from user dummy table in case of agent
					if (props.USER && Object.keys(props.USER).length && props.USER.profiles && Object.keys(props.USER.profiles).length) {
						exitsting_user_profile = Object.assign({}, props.USER.profiles[props.member_id]);
					}

					if (props.savedMemberData.length == 1 && props.savedMemberData[0] == null) {
						profile = _extends({}, this.state);
						profile.id = this.props.member_id;
						if (profile && Object.keys(profile).length > 0) {
							this.setState({ profile_flag: false });
							this.handleSubmit();
						}
					} else {
						profile = props.savedMemberData.filter(x => x.id == props.member_id);
					}
					if (profile && profile.length > 0) {
						profile = profile[0];
						if (exitsting_user_profile && Object.keys(exitsting_user_profile).length) {
							profile.name = exitsting_user_profile.name;
							profile.dob = exitsting_user_profile.dob;
						}
						this.setState({ id: profile.id, profile_flag: false }, () => {
							this.getUserDetails(profile); // fill user details in form
						});
					}
				} else {
					// retrieve already member details from user profiles
					profile = Object.assign({}, props.USER.profiles[props.USER.defaultProfile]);
					if (profile && Object.keys(profile).length) {
						if (profile.isDummyUser) {
							profile.id = 0;
							this.setState({ id: 0, profile_flag: false }, () => {
								this.getUserDetails(profile); // fill user details in form	
							});
						} else {
							this.setState({ id: profile.id, profile_flag: false }, () => {
								this.getUserDetails(profile); // fill user details in form
							});
						}
					}
				}
			}
		}
	}

	togglePopup(newProfileid, member_id, newProfile) {
		//select from profile
		if (newProfileid !== '') {
			this.setState(_extends({}, newProfile, { profile_flag: true }));
			newProfile.isUserSelectedProfile = true;
			newProfile.is_tobe_dummy_user = false;
			this.props.selectVipUserProfile(newProfileid, member_id, newProfile, 0); // select profile from option
			this.setState({
				showPopup: !this.state.showPopup,
				profile_id: newProfileid,
				id: newProfileid,
				isForceUpdateDob: true
			}, () => {
				this.handleSubmit();
			});
		} else {
			this.setState({ showPopup: !this.state.showPopup, isForceUpdateDob: false });
		}
	}

	hideSelectProfilePopup() {
		this.setState({
			showPopup: false
		});
	}

	getUserDetails(profile) {
		let empty_state = {};
		if (profile.is_tobe_dummy_user) {
			this.setState(_extends({}, empty_state, { name: '' }), () => {
				this.handleSubmit();
			});
		}
		if (Object.keys(profile).length > 0) {
			if (profile.id) {
				this.setState({ profile_id: profile.id ? profile.id : '' });
			}
			if (profile.profile) {
				this.setState({ profile_id: profile.profile ? profile.profile : '' });
			}
			if (profile.gender == 'm') {
				this.setState({ gender: profile.gender ? profile.gender : '', title: 'mr.' });
			} else if (profile.gender == 'f') {
				this.setState({ gender: profile.gender ? profile.gender : '', title: 'miss' });
			}

			if (profile.name == 'User' || profile.name == 'user') {
				this.setState({ name: '' });
			} else if (profile.name) {
				this.setState({ name: profile.name ? profile.name : '' });
			}
			if (this.props.is_from_payment) {
				if (profile.first_name) {
					this.setState({ name: profile.first_name ? profile.first_name : profile.name ? profile.name : '' });
				}
			}
			if (profile.is_tobe_dummy_user) {
				this.setState({ is_tobe_dummy_user: profile.is_tobe_dummy_user });
			}
			if (this.props.user_email) {
				this.setState({ email: this.props.user_email });
			}
			if (profile.email) {
				this.setState({ email: profile.email });
			}
			this.setState({
				dob: profile.dob ? profile.dob : ''
			}, () => {
				this.handleSubmit();
			});
		}
	}

	handleChange(field, event) {
		this.setState({
			[event.target.getAttribute('data-param')]: event.target.value
		});
	}

	handleSubmit() {
		let profile = Object.assign({}, this.props.USER.profiles[this.props.USER.defaultProfile]);
		if (!profile.isDummyUser && this.props.member_id > 0) {
			this.setState({ profile_id: this.props.member_id });
		} else {
			this.setState({ profile_id: null });
		}
		var self_data = this.state;
		this.props.userDetails('self_data', self_data);
	}

	handleNameCharacters(field, event) {
		if (field == 'name') {
			if (this.state.name.length == 50) {
				event.preventDefault();
			}
		}
		// else if (field == 'last_name') {
		// 	if (this.state.last_name.length == 50) {
		// 		event.preventDefault();
		// 	}
		// }
	}

	handleEmail() {
		let formIsValid = true;
		if (this.state.email != '') {
			let validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			validEmail = validEmail.test(this.state.email);
			if (validEmail) {
				this.handleSubmit();
			} else {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter valid Email" });
			}
		}
	}

	submitNewDob(type, newDate, isValidDob) {
		let self = this;
		self.setState({
			dob: newDate, isDobValidated: isValidDob
		}, () => {
			self.handleSubmit();
		});
	}

	unSetForceUpdateDob() {
		this.setState({ isForceUpdateDob: false });
	}

	render() {
		console.log(this.props.member_id);
		let self = this;
		let commonMsgSpan = _react2.default.createElement(
			'span',
			{ className: 'fill-error-span' },
			'*This is a mandatory field'
		);
		let isDummyUser;
		if (this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.profiles[this.props.USER.defaultProfile]) {
			isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser;
		}
		return _react2.default.createElement(
			_react2.default.Fragment,
			null,
			_react2.default.createElement(
				'div',
				{ className: 'row no-gutters', id: isDummyUser ? 'member_0' : `member_${this.props.member_id}` },
				this.props.validateErrors.indexOf('title') > -1 ? commonMsgSpan : '',
				_react2.default.createElement(
					'div',
					{ className: 'd-flex' },
					_react2.default.createElement(
						'p',
						{ className: `label-names-buttons ${this.state.gender == 'm' ? 'btn-active' : ''}`, name: 'gender', checked: this.state.gender == 'm', onClick: () => this.setState({ 'gender': 'm' }, () => {
								this.handleSubmit();
							}), onBlur: this.handleChange.bind(this) },
						'Male'
					),
					_react2.default.createElement(
						'p',
						{ className: `label-names-buttons ${this.state.gender == 'f' ? 'btn-active' : ''}`, name: 'gender', checked: this.state.gender == 'f', onClick: () => this.setState({ 'gender': 'f' }, () => {
								this.handleSubmit();
							}), onBlur: this.handleChange.bind(this) },
						'Female'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'col-12' },
					_react2.default.createElement(
						'div',
						{ className: 'ins-form-group inp-margin-right ' },
						_react2.default.createElement('input', {
							style: { 'textTransform': 'capitalize' },
							type: 'text',
							id: `name_${this.props.member_id}`,
							className: `form-control ins-form-control ${this.props.validateErrors.indexOf('name') > -1 ? 'fill-error' : ''}`, required: true,
							autoComplete: 'first_name',
							name: 'name',
							value: this.state.name,
							'data-param': 'name',
							onChange: this.handleChange.bind(this, 'name'),
							onBlur: this.handleSubmit.bind(this)
							// disabled={this.props.is_from_payment || this.state.disableFName ? 'disabled' : ''} 
							, onKeyPress: this.handleNameCharacters.bind(this, 'name')
						}),
						_react2.default.createElement(
							'label',
							{ className: this.props.is_from_payment /*|| this.state.disableFName*/ ? 'form-control-placeholder datePickerLabel' : 'form-control-placeholder', htmlFor: `name_${this.props.member_id}` },
							_react2.default.createElement('span', { className: 'labelDot' }),
							'Name'
						),
						_react2.default.createElement('img', { src: "/assets" + "/img/user-01.svg" })
					),
					this.props.validateErrors.indexOf('name') > -1 ? commonMsgSpan : ''
				),
				!this.props.is_from_payment && !this.props.user_email ? _react2.default.createElement(
					'div',
					{ className: 'col-12' },
					_react2.default.createElement(
						'div',
						{ className: 'ins-form-group' },
						_react2.default.createElement('input', {
							type: 'text', id: `emails_${this.props.member_id}`,
							className: `form-control ins-form-control ${this.props.validateErrors.indexOf('email') > -1 ? 'fill-error' : ''}`, required: true,
							autoComplete: 'email',
							name: 'email',
							value: this.props.user_email ? this.props.user_email : this.state.email,
							'data-param': 'email',
							onChange: this.handleChange.bind(this, 'email'),
							onBlur: this.handleEmail.bind(this)
							// disabled={this.props.is_from_payment || this.state.disableEmail ? 'disabled' : ''}  
						}),
						_react2.default.createElement(
							'label',
							{ className: this.props.is_from_payment /*|| this.state.disableEmail*/ ? 'form-control-placeholder datePickerLabel' : 'form-control-placeholder', htmlFor: `emails_${this.props.member_id}` },
							_react2.default.createElement('span', { className: 'labelDot' }),
							'Email'
						),
						_react2.default.createElement('img', { src: "/assets" + "/img/mail-01.svg" })
					),
					this.props.validateErrors.indexOf('email') > -1 ? commonMsgSpan : ''
				) : '',
				_react2.default.createElement(
					'div',
					{ className: 'col-12' },
					_react2.default.createElement(
						'form',
						null,
						_react2.default.createElement(_newDateSelector2.default, _extends({}, this.props, { getNewDate: this.submitNewDob.bind(this), is_dob_error: this.props.is_dob_error, old_dob: this.state.dob, is_gold: true, user_form_id: this.props.member_id, isForceUpdateDob: this.state.isForceUpdateDob, unSetForceUpdateDob: this.unSetForceUpdateDob.bind(this) })),
						this.props.validateErrors.indexOf('dob') > -1 ? commonMsgSpan : ''
					)
				),
				!isDummyUser ? _react2.default.createElement(
					'div',
					{ className: 'col-12' },
					_react2.default.createElement(
						'div',
						{ className: 'orSeparator' },
						_react2.default.createElement(
							'span',
							null,
							'or'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'sub-form-hed-click', style: { justifyContent: 'space-between' }, onClick: () => this.setState({
								showPopup: true, profile_flag: true, isForceUpdateDob: false }) },
						'Select Profile/Add New Profile',
						_react2.default.createElement('img', { src: "/assets" + "/img/rgt-arw.svg" })
					)
				) : ''
			),
			this.state.showPopup ? _react2.default.createElement(_vipClubPopup2.default, _extends({}, this.props, {
				currentSelectedVipMembersId: this.props.currentSelectedVipMembersId,
				member_id: this.props.member_id,
				closePopup: this.togglePopup.bind(this),
				isSelectprofile: true,
				vipClubMemberDetails: this.props.vipClubMemberDetails[this.props.member_id],
				hideSelectProfilePopup: this.hideSelectProfilePopup.bind(this),
				is_child_only: this.props.is_child_only,
				is_see_more: false
			})) : ''
		);
	}

}

exports.default = VipProposer;

/***/ }),

/***/ "./dev/js/containers/vipClub/VipClubMemberDetails.js":
/*!***********************************************************!*\
  !*** ./dev/js/containers/vipClub/VipClubMemberDetails.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _vipClubMemberDetailsView = __webpack_require__(/*! ../../components/vipClub/vipClubMemberDetailsView.js */ "./dev/js/components/vipClub/vipClubMemberDetailsView.js");

var _vipClubMemberDetailsView2 = _interopRequireDefault(_vipClubMemberDetailsView);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class VipClubMemberDetails extends _react2.default.Component {

    constructor(props) {
        super(props);
        const parsed = queryString.parse(this.props.location.search);
        this.state = {
            isSalesAgent: parsed.utm_source,
            isAgent: parsed.is_agent || false,
            // is_gold:parsed.is_gold || false,
            is_gold: this.props.match.url.includes('vip-gold-details'),
            is_from_payment: parsed.is_from_payment ? parsed.is_from_payment : false,
            is_vip_gold: parsed.is_vip_gold ? parsed.is_vip_gold : false,
            is_navigate_to_form: false,
            is_user_alrdy_gold: false
        };
    }

    componentDidMount() {
        let extraParams = {};
        let data = {};
        data.selectedLocation = this.props.selectedLocation;
        data.isSalesAgent = this.state.isSalesAgent;
        data.isAgent = this.state.isAgent;
        data.is_gold = this.state.is_gold;
        data.all = this.state.is_vip_gold;
        data.fromWhere = 'user_form';
        if (this.state.is_from_payment) {
            extraParams['user_type'] = 'gold';
            this.setState({ is_navigate_to_form: true });
            this.props.retrieveMembersData('PLAN_PURCHASE', extraParams);
        } else {
            this.props.getVipList(false, data, resp => {
                // to get vip plan list
                console.log(resp);
                if (!resp.certificate) {
                    extraParams['user_type'] = 'gold';
                    this.setState({ is_navigate_to_form: true });
                    this.props.retrieveMembersData('PLAN_PURCHASE', extraParams); // to retrieve already pushed member data in case of agent or proposer it self
                } else {
                    this.setState({ is_user_alrdy_gold: true });
                }
            });
        }
        // if (this.props.selected_vip_plan && Object.keys(this.props.selected_vip_plan).length > 0){
        //     extraParams['user_type']= this.props.selected_vip_plan.is_gold?'gold':'vip'
        // }
        // extraParams['user_type']= this.props.selected_vip_plan.is_gold?'gold':'vip'
        // this.props.citiesData()
    }

    render() {
        let parsed = queryString.parse(this.props.location.search);
        if (this.props.showVipDetailsView && this.state.is_navigate_to_form) {
            return _react2.default.createElement(_vipClubMemberDetailsView2.default, _extends({}, this.props, { is_from_payment: this.state.is_from_payment, isSalesAgent: this.state.isSalesAgent, isAgent: this.state.isAgent, is_gold: this.state.is_gold }));
        } else if (_storage2.default.checkAuth() && this.state.is_user_alrdy_gold && !this.state.is_from_payment) {
            // if already gold or vip user redirect to dashboard
            this.props.history.replace('/vip-club-activated-details');
            return _react2.default.createElement('div', null);
        } else {
            if (this.state.isSalesAgent && this.state.isAgent) {
                return _react2.default.createElement(
                    'div',
                    { className: 'profile-body-wrap' },
                    _react2.default.createElement(_Loader2.default, null)
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: 'profile-body-wrap' },
                    _react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
                    _react2.default.createElement(_Loader2.default, null)
                );
            }
        }
    }
}

const mapStateToProps = state => {
    const USER = state.USER;
    const { selectedLocation } = state.SEARCH_CRITERIA_OPD;
    let { user_cities, common_utm_tags } = state.USER;

    let { vipClubList, selected_vip_plan, vipClubMemberDetails, currentSelectedVipMembersId, vip_club_db_data, members_proofs, showVipDetailsView, savedMemberData, vipCoupons } = state.VIPCLUB;
    return {
        vipClubList, selected_vip_plan, vipClubMemberDetails, currentSelectedVipMembersId, user_cities, USER, vip_club_db_data, members_proofs, showVipDetailsView, savedMemberData, vipCoupons, common_utm_tags, selectedLocation
    };
};

const mapDispatchToProps = dispatch => {
    return {
        userDetails: (self_data, criteria, forceadd) => dispatch((0, _index.userDetails)(self_data, criteria, forceadd)),
        saveCurrentSelectedVipMembers: (membersId, callback) => dispatch((0, _index.saveCurrentSelectedVipMembers)(membersId, callback)),
        citiesData: () => dispatch((0, _index.citiesData)()),
        selectVipUserProfile: (newProfileid, member_id, newProfile, param_id) => dispatch((0, _index.selectVipUserProfile)(newProfileid, member_id, newProfile, param_id)),
        vipClubPay: (criteria, callback) => dispatch((0, _index.vipClubPay)(criteria, callback)),
        addVipMembersData: (criteria, callback) => dispatch((0, _index.addVipMembersData)(criteria, callback)),
        uploadVipProof: (profileData, profileId, imgType, cb) => dispatch((0, _index.uploadVipProof)(profileData, profileId, imgType, cb)),
        storeVipMemberProofs: (imgUrl, cb) => dispatch((0, _index.storeVipMemberProofs)(imgUrl, cb)),
        removeVipMemberProof: criteria => dispatch((0, _index.removeVipMemberProof)(criteria)),
        pushMembersData: criteria => dispatch((0, _index.pushMembersData)(criteria)),
        retrieveMembersData: (type, extraParams, callback) => dispatch((0, _index.retrieveMembersData)(type, extraParams, callback)),
        selectVipClubPlan: (plan, criteria, callback) => dispatch((0, _index.selectVipClubPlan)(plan, criteria, callback)),
        resetVipData: () => dispatch((0, _index.resetVipData)()),
        vipPlusLead: data => dispatch((0, _index.vipPlusLead)(data)),
        sendAgentBookingURL: (orderId, type, purchase_type, query_data, extraParams, cb) => dispatch((0, _index.sendAgentBookingURL)(orderId, type, purchase_type, query_data, extraParams, cb)),
        clearVipMemeberData: () => dispatch((0, _index.clearVipMemeberData)()),
        getCoupons: data => dispatch((0, _index.getCoupons)(data)),
        applyCouponDiscount: data => dispatch((0, _index.applyCouponDiscount)(data)),
        removeVipCoupons: () => dispatch((0, _index.removeVipCoupons)()),
        getVipList: (is_endorsement, data, callback) => dispatch((0, _index.getVipList)(is_endorsement, data, callback)),
        removeMembers: data => dispatch((0, _index.removeMembers)(data))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VipClubMemberDetails);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3BheW1lbnRGb3JtL1BheW1lbnRGb3JtLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvcGF5bWVudEZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2Jvb2tpbmdTdW1tYXJ5L0Jvb2tpbmdDb25maXJtYXRpb25Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL2luc3VyYW5jZVByb29mcy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL3ZpcENsdWJBY3RpdmF0ZWRNZW1lYmVyRGV0YWlsc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvdmlwQ2x1Yi92aXBDbHViRmFtaWx5TWVtYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL3ZpcENsdWJNZW1iZXJEZXRhaWxzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL3ZpcENsdWJTZWxmLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL3ZpcENsdWIvVmlwQ2x1Yk1lbWJlckRldGFpbHMuanMiXSwibmFtZXMiOlsiUGF5bWVudEZvcm0iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInNlbmRFdmVudCIsInJlZnMiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRQYXltZW50Tm9kZU5hbWUiLCJuYW1lIiwiaW5kZXgiLCJyZW5kZXIiLCJwYXltZW50RGF0YSIsIkNPTkZJRyIsIlBHX01VTFRJX09SREVSX1VSTCIsIlBHX1VSTCIsImRpc3BsYXkiLCJtYXAiLCJpdGVtIiwiaSIsIkJvb2tpbmdDb25maXJtYXRpb25Qb3B1cCIsImlzX2dvbGQiLCJwcmljZUNvbmZpcm1hdGlvblBvcHVwIiwiYmluZCIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkNvbXByZXNzIiwiSW5zdXJhbmNlUHJvb2ZzIiwiZGF0YVVybCIsInpvb21JbWFnZVVybCIsInpvb21JbWFnZSIsIm9wZW5QZGYiLCJvcGVuUGRmVXJsIiwiaXNMb2FkaW5nIiwicGlja0ZpbGUiLCJtZW1iZXJfaWQiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJmaWxlIiwiaW5jbHVkZXMiLCJmaW5pc2hDcm9wIiwiY29tcHJlc3MiLCJxdWFsaXR5IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJ0aGVuIiwicmVzdWx0cyIsImltZzEiLCJiYXNlNjRzdHIiLCJpbWdFeHQiLCJleHQiLCJjb252ZXJ0QmFzZTY0VG9GaWxlIiwiZ2V0QmFzZTY0Iiwic2V0U3RhdGUiLCJjYXRjaCIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJjYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImZpbGVfYmxvYl9kYXRhIiwiZGF0YVVSSXRvQmxvYiIsIm1lbV9kYXRhIiwiZXhpc3RpbmdEYXRhIiwiaW1nX3RhZyIsImZvcm1fZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXBsb2FkVmlwUHJvb2YiLCJlcnIiLCJkYXRhSWQiLCJpZCIsImlzX3ByaW1hcnlfdXNlciIsImltZ19wYXRoX2lkcyIsIm1lbWJlcnNfcHJvb2ZzIiwibGVuZ3RoIiwiT2JqZWN0IiwiZW50cmllcyIsImtleSIsInZhbHVlIiwicHVzaCIsImltYWdlIiwicHJvb2ZfZmlsZSIsInZhbCIsInN0b3JlVmlwTWVtYmVyUHJvb2ZzIiwiZGF0YVVSSSIsImJpbmFyeSIsImF0b2IiLCJzcGxpdCIsImFycmF5IiwiY2hhckNvZGVBdCIsIkJsb2IiLCJVaW50OEFycmF5IiwidHlwZSIsInJlbW92ZUltYWdlIiwiaW1nIiwiVXBsb2FkZWRfaW1hZ2VfZGF0YSIsImZpbHRlciIsIngiLCJyZW1vdmVWaXBNZW1iZXJQcm9vZiIsImltZ191cmwiLCJwZGZfdXJsIiwic2hvd191cGxvYWQiLCJtYXJnaW4iLCJBU1NFVFNfQkFTRV9VUkwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xpY2siLCJ3aWR0aCIsIlZpcENsdWJBY3RpdmF0ZWRNZW1iZXJEZXRhaWxzIiwidG9nZ2xlVGFiVHlwZSIsInRhYnNWYWx1ZSIsInZpcF9jbHViX2RiX2RhdGEiLCJ1c2VyIiwia2V5cyIsInBsdXNfbWVtYmVycyIsInJlbGF0aW9uIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInRpdGxlIiwiZ2VuZGVyIiwiZG9iIiwiZW1haWwiLCJWaXBQcm9wb3NlckZhbWlseSIsInNob3dQb3B1cCIsInNldERlZmF1bHQiLCJwcm9maWxlX2lkIiwiaXNfZGlzYWJsZSIsIm1lbWJlcl9mb3JtX2lkIiwiaXNfYWxyZWFkeV91c2VyIiwiaXNVc2VyU2VsZWN0ZWRQcm9maWxlIiwiaXNEb2JWYWxpZGF0ZWQiLCJpc19kb2JfZXJyb3IiLCJpc0ZvcmNlVXBkYXRlRG9iIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInNlbGYiLCJwcm9maWxlIiwiaXNfZnJvbV9wYXltZW50IiwidmlwQ2x1Yk1lbWJlckRldGFpbHMiLCJhc3NpZ24iLCJuZXh0UHJvZmlsZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJmaWVsZCIsImV2ZW50IiwiZ2V0QXR0cmlidXRlIiwiaGFuZGxlUmVsYXRpb24iLCJyZWxhdGlvbl9pZCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4Iiwic2VsZl9kYXRhIiwic2xpY2UiLCJ1c2VyRGV0YWlscyIsInRvZ2dsZVBvcHVwIiwibmV3UHJvZmlsZWlkIiwibmV3UHJvZmlsZSIsInNlbGVjdFZpcFVzZXJQcm9maWxlIiwicGFyYW1faWQiLCJoYW5kbGVOYW1lQ2hhcmFjdGVycyIsInByZXZlbnREZWZhdWx0IiwiaGlkZVNlbGVjdFByb2ZpbGVQb3B1cCIsInN1Ym1pdE5ld0RvYiIsIm5ld0RhdGUiLCJpc1ZhbGlkRG9iIiwidXNlcl9mb3JtX2lkIiwidW5TZXRGb3JjZVVwZGF0ZURvYiIsInZhbGlkYXRlRXJyb3JzIiwiY29tbW9uTXNnU3BhbiIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJtZW1iZXJfdmlld19pZCIsImlzX3RvYmVfcmVtb3ZlX29wdGlvbiIsInJlbW92ZU1lbWJlckZvcm0iLCJpbmRleE9mIiwic2hvd19zZWxlY3RlZF9wcm9maWxlcyIsImN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZCIsIlZpcENsdWJNZW1iZXJEZXRhaWxzVmlldyIsInNhdmVNZW1iZXJzIiwic2hvd19wb3B1cCIsInByb2NlZWQiLCJwb3B1cE1lbURhdGEiLCJjb3Vwb25fY29kZSIsImNvdXBvbl9pZCIsImlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQiLCJjb3Vwb25fZGlzY291bnQiLCJ1c2VyX2VtYWlsIiwidXNlcl9waG9uZV9udW1iZXIiLCJzaG93Q29uZmlybWF0aW9uUG9wdXAiLCJ0b19iZV9yZW1vdmVfaWQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNlbGVjdGVkX3ZpcF9wbGFuIiwidmlwQ291cG9ucyIsImFwcGx5Q291cG9uRGlzY291bnQiLCJwcm9kdWN0SWQiLCJjb3Vwb25Db2RlIiwiY29kZSIsImNvdXBvbklkIiwicGxhbl9pZCIsImRlYWxfcHJpY2UiLCJyZXNwIiwiZGlzY291bnQiLCJVU0VSIiwicHJvZmlsZXMiLCJkZWZhdWx0UHJvZmlsZSIsInBob25lX251bWJlciIsImFkZE1lbWJlcnMiLCJpc0Zyb21EZWZhdWx0VXNlciIsIm1lbWJlcl9kdW1teV9kYXRhIiwiYWdlIiwiY2FyZCIsIm1lbWJlcnNJZCIsImNsZWFyVmlwTWVtZWJlckRhdGEiLCJ0b19iZV9yZW1vdmUiLCJpc190b2JlX2R1bW15X3VzZXIiLCJzYXZlQ3VycmVudFNlbGVjdGVkVmlwTWVtYmVycyIsInBsYW4iLCJ0b3RhbF9hbGxvd2VkX21lbWJlcnMiLCJjb25jYXQiLCJjdXJyZW50Rm9ybUlkc0NvdW50IiwiaXNEdW1teVVzZXIiLCJsb2dpblVzZXIiLCJpc0RlZmF1bHRVc2VyIiwic2F2ZWRNZW1iZXJEYXRhIiwiZnJvbVdoZXJlIiwiaXNfZGVmYXVsdF91c2VyIiwicHJvZmlsZUxlbmd0aCIsImN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzIiwic2hvd19zZWxlY3RlZF9wcm9maWxlIiwiYWxyZWFkeV91c2Vyc19pZHMiLCJwYXJzZUludCIsInByb2Nlc3NQYXltZW50Iiwic3RhdHVzIiwic2V0VGltZW91dCIsImZvcm0iLCJzdWJtaXQiLCJwcm9jZWVkUGxhbiIsImlzU21zIiwiZXh0cmFEYXRhUGFyYW1zIiwic3VjY2Vzc19pZCIsInB1c2hEYXRhIiwic2VsZl9wcm9maWxlIiwibWVtYmVyX3JlZiIsInZhbGlkYXRpbmdFcnJvcnMiLCJwYXJhbSIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJtZW1iZXJzIiwidXRtX3Nwb190YWdzIiwiZHVtbXlfZGF0YV90eXBlIiwiY291cG9uX2RhdGEiLCJpc19hZ2VudCIsImZpZWxkcyIsInZhbGlkRW1haWwiLCJ0ZXN0IiwiZm9yRWFjaCIsInNjcm9sbEludG9WaWV3IiwiY2l0eSIsImNpdHlfY29kZSIsImFkZHJlc3MiLCJwaW5jb2RlIiwicHJpbWFyeV91c2VyIiwiaXNfbWVtYmVyX3VwZGF0ZWQiLCJpbWFnZV9pZHMiLCJpbWdJZCIsImRvY3VtZW50X2lkcyIsImFkZFZpcE1lbWJlcnNEYXRhIiwic3VjY2VzcyIsImhpc3RvcnkiLCJTVE9SQUdFIiwiaXNBZ2VudCIsInB1c2hVc2VyRGF0YSIsImdldEFueUNvb2tpZSIsImNvbW1vbl91dG1fdGFncyIsInRhZ3MiLCJ1dG1fdGFncyIsImhvc3QiLCJ1dG1fc291cmNlIiwidXRtX3Rlcm0iLCJ1dG1fbWVkaXVtIiwidXRtX2NhbXBhaWduIiwidGltZSIsIkRhdGUiLCJnZXRUaW1lIiwic2VuZFNNUyIsInZpcENsdWJQYXkiLCJwYXltZW50X3JlcXVpcmVkIiwicHVzaE1lbWJlcnNEYXRhIiwiZXh0cmFQYXJhbXMiLCJzZW5kT25XaGF0c3VwIiwic2VuZEFnZW50Qm9va2luZ1VSTCIsInJlcyIsInByb2NlZWRNZW1iZXJzIiwiaXNfd2FpdCIsInByb2NlZWRNZW1iZXJzTm8iLCJhcHBseUNvdXBvbnMiLCJzZWxlY3RlZF9wbGFuX2lkIiwicmVtb3ZlQ291cG9uIiwiZ29sZF9wdXNoX2RhdGEiLCJjb3Vwb25fdHlwZSIsInJlbW92ZVZpcENvdXBvbnMiLCJuZXdfZGF0YSIsInJlbW92ZU1lbWJlcnMiLCJjaG9pY2UiLCJjaGlsZCIsImFkdWx0IiwidXNlclByb2ZpbGUiLCJwcm9wb3Nlcl9pZCIsInNob3dfZXh0cmFfZmllbGRzIiwic2VsZWN0ZWRNZW1iZXJzSWQiLCJuIiwiaXNTYWxlc0FnZW50IiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwiY29sb3IiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsIlZpcFByb3Bvc2VyIiwicHJvZmlsZV9mbGFnIiwidXNlclByb2ZpbGVzIiwiZ2V0VXNlckRldGFpbHMiLCJleGl0c3RpbmdfdXNlcl9wcm9maWxlIiwiZW1wdHlfc3RhdGUiLCJoYW5kbGVFbWFpbCIsImZvcm1Jc1ZhbGlkIiwianVzdGlmeUNvbnRlbnQiLCJpc19jaGlsZF9vbmx5IiwiVmlwQ2x1Yk1lbWJlckRldGFpbHMiLCJtYXRjaCIsInVybCIsImlzX3ZpcF9nb2xkIiwiaXNfbmF2aWdhdGVfdG9fZm9ybSIsImlzX3VzZXJfYWxyZHlfZ29sZCIsInNlbGVjdGVkTG9jYXRpb24iLCJhbGwiLCJyZXRyaWV2ZU1lbWJlcnNEYXRhIiwiZ2V0VmlwTGlzdCIsImNlcnRpZmljYXRlIiwic2hvd1ZpcERldGFpbHNWaWV3IiwiY2hlY2tBdXRoIiwicmVwbGFjZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIlNFQVJDSF9DUklURVJJQV9PUEQiLCJ1c2VyX2NpdGllcyIsInZpcENsdWJMaXN0IiwiVklQQ0xVQiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY3JpdGVyaWEiLCJmb3JjZWFkZCIsImNhbGxiYWNrIiwiY2l0aWVzRGF0YSIsInByb2ZpbGVEYXRhIiwicHJvZmlsZUlkIiwiaW1nVHlwZSIsImltZ1VybCIsInNlbGVjdFZpcENsdWJQbGFuIiwicmVzZXRWaXBEYXRhIiwidmlwUGx1c0xlYWQiLCJvcmRlcklkIiwicHVyY2hhc2VfdHlwZSIsInF1ZXJ5X2RhdGEiLCJnZXRDb3Vwb25zIiwiaXNfZW5kb3JzZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxNQUFNQSxXQUFOLFNBQTBCQyxnQkFBTUMsU0FBaEMsQ0FBMEM7QUFDdENDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxFQUFiO0FBR0g7O0FBRURDLGdCQUFZO0FBQ1IsWUFBSUMsT0FBTyxLQUFLSCxLQUFMLENBQVdHLElBQXRCO0FBQ0EsWUFBSUEsSUFBSixFQUFVO0FBQ04sZ0JBQUlDLE9BQU87QUFDUCw0QkFBWSxhQURMLEVBQ29CLFVBQVUsaUJBRDlCLEVBQ2lELGNBQWNELElBRC9ELEVBQ3FFLGNBQWNFLGNBQUlDLFNBQUosTUFBbUIsRUFEdEcsRUFDMEcsVUFBVSxDQURwSCxFQUN1SCxTQUFTO0FBRGhJLGFBQVg7QUFHQUQsMEJBQUlILFNBQUosQ0FBYyxFQUFFRSxNQUFNQSxJQUFSLEVBQWQ7QUFDSCxTQUxELE1BS087QUFDSCxnQkFBSUEsT0FBTztBQUNQLDRCQUFZLGFBREwsRUFDb0IsVUFBVSxpQkFEOUIsRUFDaUQsY0FBYyxTQUQvRCxFQUMwRSxjQUFjQyxjQUFJQyxTQUFKLE1BQW1CLEVBRDNHLEVBQytHLFVBQVUsQ0FEekgsRUFDNEgsU0FBUztBQURySSxhQUFYO0FBR0FELDBCQUFJSCxTQUFKLENBQWMsRUFB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QUFELElBQVVxVyxTQUFTLHVCQUFXclcsSUFBWCxDQUFULENBakJuQjtBQWtCSHlNLDZCQUFzQnpNLElBQUQsSUFBU3FXLFNBQVMsZ0NBQW9CclcsSUFBcEIsQ0FBVCxDQWxCM0I7QUFtQkhzVCwwQkFBaUIsTUFBSytDLFNBQVMsOEJBQVQsQ0FuQm5CO0FBb0JIWCxvQkFBWSxDQUFDMkIsY0FBRCxFQUFnQnJYLElBQWhCLEVBQXFCd1csUUFBckIsS0FBa0NILFNBQVMsdUJBQVdnQixjQUFYLEVBQTBCclgsSUFBMUIsRUFBK0J3VyxRQUEvQixDQUFULENBcEIzQztBQXFCSGhELHVCQUFleFQsSUFBRCxJQUFVcVcsU0FBUywwQkFBY3JXLElBQWQsQ0FBVDtBQXJCckIsS0FBUDtBQXVCSCxDQXhCRDs7a0JBNEJlLHlCQUFRK1YsZUFBUixFQUEwQkssa0JBQTFCLEVBQThDbkIsb0JBQTlDLEMiLCJmaWxlIjoiNTQuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuXG5jbGFzcyBQYXltZW50Rm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzZW5kRXZlbnQoKSB7XG4gICAgICAgIGxldCByZWZzID0gdGhpcy5wcm9wcy5yZWZzXG4gICAgICAgIGlmIChyZWZzKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NvbnRpbnVlQ2xpY2tlZCcsICdwYWdlU291cmNlJzogcmVmcywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29udGludWUtY2xpY2tlZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NvbnRpbnVlQ2xpY2tlZCcsICdwYWdlU291cmNlJzogJ1VOS05PV04nLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb250aW51ZS1jbGlja2VkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNlbmRFdmVudCgpXG4gICAgfVxuXG4gICAgZ2V0UGF5bWVudE5vZGVOYW1lKG5hbWUsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBgJHtuYW1lfVske2luZGV4fV1gXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIGxldCBkYXRhID0geyBcInBheW1lbnRNb2RlXCI6IFwiQ0NcIiwgXCJyZXNwb25zZUNvZGVcIjogXCIyMjdcIiwgXCJiYW5rVHhJZFwiOiBcIlwiLCBcInR4RGF0ZVwiOiBcIkp1biA0LCAyMDE4IDEyOjEwOjIzIFBNXCIsIFwiYmFua05hbWVcIjogXCJTQklcIiwgXCJzdGF0dXNNc2dcIjogXCJPb3BzIGFuIGVycm9yIG9jY3VycmVkLiBXZSB3aWxsIGdldCBiYWNrIHRvIHlvdSFcIiwgXCJjdXJyZW5jeVwiOiBcIklOUlwiLCBcInN0YXR1c0NvZGVcIjogMSwgXCJwZ0dhdGV3YXlOYW1lXCI6IFwiTU9DS1wiLCBcInJlc3BvbnNlTWVzc2FnZVwiOiBcIllvdXIgcGF5bWVudCBoYXMgYmVlbiBkZWNsaW5lZCBieSB5b3VyIGJhbmsuIFBsZWFzZSBjb250YWN0IHlvdXIgYmFuayBmb3IgYW55IHF1ZXJpZXMuIElmIG1vbmV5IGhhcyBiZWVuIGRlZHVjdGVkIGZyb20geW91ciBhY2NvdW50LCB5b3VyIGJhbmsgd2lsbCBpbmZvcm0gdXMgd2l0aGluIDQ4IGhycyBhbmQgd2Ugd2lsbCByZWZ1bmQgdGhlIHNhbWVcIiwgXCJ0eFN0YXR1c1wiOiBcIlRYTl9GQUlMVVJFXCIsIFwiY3VzdG9tZXJJZFwiOiA1MSwgXCJvcmRlck5vXCI6IHRoaXMucHJvcHMucGF5bWVudERhdGFbJ29yZGVySWQnXSwgXCJzdGF0dXNTaG9ydE1zZ1wiOiBcIk90aGVyc1wiLCBcImVtYWlsXCI6IFwiZHVtbXlfYXBwb2ludG1lbnRAcG9saWN5YmF6YWFyLmNvbVwiLCBcInBiR2F0ZXdheU5hbWVcIjogXCJwYXl0bVwiLCBcIm1vYmlsZVwiOiBcIjk5OTk5OTk5OTdcIiwgcHJvZHVjdElkOiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydwcm9kdWN0SWQnXSB9XG5cbiAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZmVyZW5jZUlkJ10pIHtcbiAgICAgICAgLy8gICAgIGRhdGFbJ3JlZmVyZW5jZUlkJ10gPSB0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZlcmVuY2VJZCddXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBkYXRhWydwZ1R4SWQnXSA9IHRoaXMucHJvcHMucGF5bWVudERhdGFbJ29yZGVySWQnXVxuICAgICAgICAvLyBkYXRhID0gYnRvYShKU09OLnN0cmluZ2lmeShkYXRhKSlcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwicGF5bWVudEZvcm1cIiByZWY9XCJwYXltZW50Rm9ybVwiIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249e3RoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaXNfc2luZ2xlX2Zsb3cnXT9DT05GSUcuUEdfTVVMVElfT1JERVJfVVJMOkNPTkZJRy5QR19VUkx9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaXNfc2luZ2xlX2Zsb3cnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2l0ZW1zJ10ubWFwKChpdGVtLCBpKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLmdldFBheW1lbnROb2RlTmFtZSgnbmFtZScsIGkpfSBpZD17aXRlbVsnbmFtZSddfSBkZWZhdWx0VmFsdWU9e2l0ZW1bJ25hbWUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLmdldFBheW1lbnROb2RlTmFtZSgncHJvZHVjdElkJywgaSl9IGlkPXtpdGVtWydwcm9kdWN0SWQnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWydwcm9kdWN0SWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLmdldFBheW1lbnROb2RlTmFtZSgndHhBbW91bnQnLCBpKX0gaWQ9e2l0ZW1bJ3R4QW1vdW50J119IGRlZmF1bHRWYWx1ZT17aXRlbVsndHhBbW91bnQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLmdldFBheW1lbnROb2RlTmFtZSgnb3JkZXJJZCcsIGkpfSBpZD17aXRlbVsnb3JkZXJJZCddfSBkZWZhdWx0VmFsdWU9e2l0ZW1bJ29yZGVySWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLmdldFBheW1lbnROb2RlTmFtZSgnaG9sZFBheW1lbnQnLCBpKX0gIGlkPXtpdGVtWydob2xkUGF5bWVudCddfSBkZWZhdWx0VmFsdWU9e2l0ZW1bJ2hvbGRQYXltZW50J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtICYmIGl0ZW1bJ2luc3VyZXJDb2RlJ10/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e3RoaXMuZ2V0UGF5bWVudE5vZGVOYW1lKCdpbnN1cmVyQ29kZScsIGkpfSBpZD17aXRlbVsnaW5zdXJlckNvZGUnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWydpbnN1cmVyQ29kZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDo8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ25hbWUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJvZHVjdElkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydwcm9kdWN0SWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidHhBbW91bnRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3R4QW1vdW50J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm9yZGVySWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ29yZGVySWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaG9sZFBheW1lbnRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2hvbGRQYXltZW50J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2luc3VyZXJDb2RlJ10/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnN1cmVyQ29kZVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaW5zdXJlckNvZGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImN1c3RJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnY3VzdElkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtb2JpbGVcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ21vYmlsZSddfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnZW1haWwnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1cmxcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3N1cmwnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZ1cmxcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2Z1cmwnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZlcmVuY2VJZCddP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJlZmVyZW5jZUlkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZlcmVuY2VJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJoYXNoXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydoYXNoJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaXNQcmVBdXRoXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydpc1ByZUF1dGgnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydwYXl0bU1zZyddP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBheXRtTXNnXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydwYXl0bU1zZyddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydjb3Vwb25Db2RlJ10gP1xuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb3Vwb25Db2RlXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydjb3Vwb25Db2RlJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRpc2NvdW50ZWRBbW50XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydkaXNjb3VudGVkQW1udCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb3Vwb25QZ01vZGVcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2NvdXBvblBnTW9kZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmT3JkZXJJZCddP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJlZk9yZGVySWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZk9yZGVySWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZPcmRlck5vJ10/XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicmVmT3JkZXJOb1wiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmT3JkZXJObyddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3BhcmVudFByb2R1Y3RJZCddP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhcmVudFByb2R1Y3RJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncGFyZW50UHJvZHVjdElkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG5cblxuICAgICAgICAgICAgICAgIHsvKiA8Zm9ybSBpZD1cInBheW1lbnRGb3JtXCIgcmVmPVwicGF5bWVudEZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPXtgJHtDT05GSUcuQVBJX0JBU0VfVVJMfS9hcGkvdjEvdXNlci90cmFuc2FjdGlvbi9zYXZlYH0gc3R5bGU9e3sgdmlzaWJpbGl0eTogJ2hpZGRlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyZXNwb25zZVwiIGRlZmF1bHRWYWx1ZT17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+ICovfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudEZvcm1cbiIsImltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuL1BheW1lbnRGb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCBQYXltZW50Rm9ybSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIEJvb2tpbmdDb25maXJtYXRpb25Qb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXAtb3ZlcmxheVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cCB2aXAtc3JjaC1wb3AtbWluXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGFkaWluZy1zcmNoLWVsXCI+XG5cdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzcmNoLWVsLWNvbmVudFwiPnt0aGlzLnByb3BzLmlzX2dvbGQ/J0NvbmZpcm0gZGVsZXRlIG1lbWJlcj8nOidEbyB5b3Ugd2lzaCB0byBjb250aW51ZT8nfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1idG4tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsIHRydWUpfT5ZZXM8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgZmFsc2UpfT5ObzwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50Plx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQvKih0aGlzLnByb3BzLmlzX3ZpcF9hcHBsaWNhYmxlIHx8IHRoaXMucHJvcHMuaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUpIHx8IHRoaXMucHJvcHMuaXNDYXJ0IHx8IHRoaXMucHJvcHMuaXNMYWI/XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYWRpaW5nLXNyY2gtZWxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXJ0LTIwIHRleHQtY2VudGVyIGZ3LTUwMFwiPldlIGFyZSByZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1FYXN5IHdlYnNpdGUgaW4gMyBzZWNvbmRzLi4uPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNyY2gtZWwtY29uZW50XCI+RG8geW91IHdpc2ggdG8gY29udGludWU/PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtYnRuLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsIHRydWUpfT5ZZXM8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCBmYWxzZSl9Pk5vPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlwLWJhbm5lci1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aXAtYmFubmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgdnAtY2xzLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLXBvcC1jbHMuc3ZnJ30gb25DbGljaz17dGhpcy5wcm9wcy5iYW5uZXJDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsZmFsc2UpfS8+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgdnAtYm5yLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLWltZy1wb3AucG5nJ30gLz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcC1ibnItdHh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ2cC1ibnIta25vdy10eHRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQm9va2luZ1BhZ2VWaXBCYW5uZXJDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Jvb2tpbmdwYWdlLXZpcC1jbGljaydcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICBcdH1cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICBcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWNsdWItZGV0YWlscz9zb3VyY2U9Ym9va2luZ3BhZ2UmbGVhZF9zb3VyY2U9Ym9va2luZ3BhZ2UnKSB9fT5Lbm93IG1vcmUgYWJvdXQgRG9jcHJpbWUgVklQPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidnAtYm5yLXN1Yi10eHRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmJhbm5lckNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcyx0cnVlKX0+Tm90IEludGVyZXN0ZWQ/IENvbnRpbnVlIEJvb2tpbmcgPGltZyBzdHlsZT17e3dpZHRoOic3cHgnfX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtcmdodC5zdmcnfSAvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj4qL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmNvbnN0IENvbXByZXNzID0gcmVxdWlyZSgnY29tcHJlc3MuanMnKVxuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbW1vbnMvTG9hZGVyJ1xuY2xhc3MgSW5zdXJhbmNlUHJvb2ZzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGFVcmw6IG51bGwsXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmw6IG51bGwsXG4gICAgICAgICAgICB6b29tSW1hZ2U6IGZhbHNlLFxuICAgICAgICAgICAgb3BlblBkZjogZmFsc2UsXG4gICAgICAgICAgICBvcGVuUGRmVXJsOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwaWNrRmlsZShtZW1iZXJfaWQsIGUpIHsgLy8gdG8gc2VsZWN0IGZpbGVcbiAgICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzWzBdKSB7XG4gICAgICAgICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXNbMF0gJiYgZS50YXJnZXQuZmlsZXNbMF0ubmFtZS5pbmNsdWRlcygnLnBkZicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDcm9wKG51bGwsIG1lbWJlcl9pZCwgZmlsZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHJlc3MgPSBuZXcgQ29tcHJlc3MoKVxuICAgICAgICAgICAgICAgIGNvbXByZXNzLmNvbXByZXNzKFtmaWxlXSwge1xuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAxMDAwLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nMSA9IHJlc3VsdHNbMF1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0c3RyID0gaW1nMS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0V4dCA9IGltZzEuZXh0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBDb21wcmVzcy5jb252ZXJ0QmFzZTY0VG9GaWxlKGJhc2U2NHN0ciwgaW1nRXh0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEJhc2U2NChmaWxlLCAoZGF0YVVybCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDcm9wKGRhdGFVcmwsIG1lbWJlcl9pZCwgbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhVXJsIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkVycm9yIHVwbG9hZGluZyBpbWFnZS5cIiB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QmFzZTY0KGZpbGUsIGNiKSB7XG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYihyZWFkZXIucmVzdWx0KVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluaXNoQ3JvcChkYXRhVXJsLCBtZW1iZXJfaWQsIGZpbGUpIHsgLy8gY3JvcHBpbmcgdGhlIGltYWdlXG4gICAgICAgIGxldCBmaWxlX2Jsb2JfZGF0YVxuICAgICAgICBpZiAoZGF0YVVybCkge1xuICAgICAgICAgICAgZmlsZV9ibG9iX2RhdGEgPSB0aGlzLmRhdGFVUkl0b0Jsb2IoZGF0YVVybClcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWVtX2RhdGEgPSB7fVxuICAgICAgICBsZXQgZXhpc3RpbmdEYXRhXG4gICAgICAgIGxldCBpbWdfdGFnID0gXCJwcm9vZl9maWxlXCJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkYXRhVXJsOiBudWxsLGlzTG9hZGluZzp0cnVlXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKGltZ190YWcsIGZpbGUsIFwiaW1hZ2VGaWxlbmFtZS5wZGZcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZChpbWdfdGFnLCBmaWxlX2Jsb2JfZGF0YSwgXCJpbWFnZUZpbGVuYW1lLmpwZWdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMudXBsb2FkVmlwUHJvb2YoZm9ybV9kYXRhLCBtZW1iZXJfaWQsICdpbWFnZScsIChkYXRhLCBlcnIpID0+IHsgLy8gc3RvcmUgc2VsZWN0ZWQgcHJvb2YgdG8gZGF0YWJhc2VcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUlkID0gZGF0YS5pZFxuICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pZCA9IHRoaXMucHJvcHMubWVtYmVyX2lkO1xuICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pc19wcmltYXJ5X3VzZXIgPSB0aGlzLnByb3BzLmlzX3ByaW1hcnlfdXNlcjtcbiAgICAgICAgICAgICAgICAgICAgbWVtX2RhdGEuaW1nX3BhdGhfaWRzPVtdXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMubWVtYmVyc19wcm9vZnMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUuaWQgPT0gbWVtYmVyX2lkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtX2RhdGEuaW1nX3BhdGhfaWRzID0gdmFsdWUuaW1nX3BhdGhfaWRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcy5wdXNoKHtpZDogZGF0YUlkLCBpbWFnZTpkYXRhLmRhdGEucHJvb2ZfZmlsZSwgdmFsOmRhdGFJZH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcyA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcy5wdXNoKHtpZDogZGF0YUlkLCBpbWFnZTpkYXRhLmRhdGEucHJvb2ZfZmlsZSx2YWw6ZGF0YUlkfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVtX2RhdGEuaW1nX3BhdGhfaWRzLnB1c2goe2lkOiBkYXRhSWQsIGltYWdlOmRhdGEuZGF0YS5wcm9vZl9maWxlLCB2YWw6ZGF0YUlkfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6ZmFsc2V9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlVmlwTWVtYmVyUHJvb2ZzKG1lbV9kYXRhKSAvLyB0byBzdG9yZSBtZW1iZXIgcHJvb2YgaWRzIHRvIHRoZSB1c2VyIHN0b3JlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkYXRhVVJJdG9CbG9iKGRhdGFVUkkpIHtcbiAgICAgICAgdmFyIGJpbmFyeSA9IGF0b2IoZGF0YVVSSS5zcGxpdCgnLCcpWzFdKTtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmluYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKGJpbmFyeS5jaGFyQ29kZUF0KGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KGFycmF5KV0sIHsgdHlwZTogJ2ltYWdlL2pwZWcnIH0pO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVJbWFnZShpbWcpe1xuICAgICAgICBsZXQgVXBsb2FkZWRfaW1hZ2VfZGF0YSA9IFtdXG4gICAgICAgIFVwbG9hZGVkX2ltYWdlX2RhdGEgPSB0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzLmZpbHRlcigoeCA9PiB4LmlkID09IHRoaXMucHJvcHMubWVtYmVyX2lkKSlcbiAgICAgICAgVXBsb2FkZWRfaW1hZ2VfZGF0YVswXS5pbWdfcGF0aF9pZHMubWFwKChkYXRhLGkpPT57XG4gICAgICAgICAgICAgICAgZGF0YS5tZW1iZXJfaWQ9dGhpcy5wcm9wcy5tZW1iZXJfaWRcbiAgICAgICAgICAgICAgICBpZihkYXRhLmltYWdlID09IGltZyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlVmlwTWVtYmVyUHJvb2YoZGF0YSkgLy8gdG8gcmVtb3ZlIGNhbmNlbGxlZCB1cGxvYWRlZCBpbWFnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgVXBsb2FkZWRfaW1hZ2VfZGF0YSA9IFtdXG4gICAgICAgIGxldCBpbWdfdXJsID0gW11cbiAgICAgICAgbGV0IHBkZl91cmwgPSBbXVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcyAmJiB0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIFVwbG9hZGVkX2ltYWdlX2RhdGEgPSB0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzLmZpbHRlcigoeCA9PiB4LmlkID09IHRoaXMucHJvcHMubWVtYmVyX2lkKSlcbiAgICAgICAgICAgIGlmKFVwbG9hZGVkX2ltYWdlX2RhdGEubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgVXBsb2FkZWRfaW1hZ2VfZGF0YVswXS5pbWdfcGF0aF9pZHMubWFwKChkYXRhLCBpKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5pbWFnZS5pbmNsdWRlcygncGRmJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGRmX3VybC5wdXNoKGRhdGEuaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nX3VybC5wdXNoKGRhdGEuaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBzaG93X3VwbG9hZCA9IHRydWVcbiAgICAgICAgaWYoKGltZ191cmwgJiYgaW1nX3VybC5sZW5ndGggPiAwKSB8fCAocGRmX3VybCAmJiBwZGZfdXJsLmxlbmd0aCA+IDApKXtcbiAgICAgICAgICAgIHNob3dfdXBsb2FkID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJpbnN1cmFuY2UtcHJvb2ZzLWNvbnRcIiBzdHlsZT17e21hcmdpbjogJzEwcHggLTEwcHggMHB4IC0xMHB4J319PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgLyogICAgdGhpcy5wcm9wcy5lbmRvcnNlbWVudEVycm9yLmluZGV4T2YodGhpcy5wcm9wcy5tZW1iZXJfaWQpICE9IC0xICYmIGltZ191cmwubGVuZ3RoPT0wP1xuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucy1wcmYtZXJyb3ItbXNnXCI+KlBsZWFzZSB1cGxvYWQgdGhlIHJlcXVpcmVkIGRvY3VtZW50czwvc3Bhbj5cbiAgICAgICAgICAgICAgICA6JycqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWQtYWRkYnRuLWNvbnRcIiBpZD17YG1lbWJlcl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfV91cGxvYWRgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy11cGxkLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtc2ItZnJzdC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaW5zLXdhcm5pbmcuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy11cGxvYWQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zLXVwbG9hZC1wYXJhLXRleHRcIj5VcGxvYWQgYW55IGdvdmVybmVtZW50IElEIHByb29mPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zLXVwbG9hZC1zdWItdGV4dFwiPkFhZGhhciBjYXJkLCBQYXNzcG9ydCwgRHJpdmluZyBMaWNlbnNlLCBWb3RlciBJRCBDYXJkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zLWZpbGUtdHlsZVwiPkZpbGUgdHlwZToganBnLCBqcGVnLCBwbmcsIHBkZiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd191cGxvYWQ/XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucy1wcm9vZi11cGxvYWQtYnRuXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcl8nICsgdGhpcy5wcm9wcy5tZW1iZXJfaWQgKyAnX2Zyb250JykuY2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcl8nICsgdGhpcy5wcm9wcy5tZW1iZXJfaWQgKyAnX2Zyb250JykudmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH19PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaW5zLXVwLWljby5zdmdcIn0vPiBVcGxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBpZD17YGltYWdlRmlsZVBpY2tlcl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfV9mcm9udGB9IG9uQ2hhbmdlPXt0aGlzLnBpY2tGaWxlLmJpbmQodGhpcywgdGhpcy5wcm9wcy5tZW1iZXJfaWQpfSBhY2NlcHQ9XCJpbWFnZS94LXBuZyxpbWFnZS9qcGVnLGltYWdlL2pwZywucGRmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlzTG9hZGluZyAmJiBzaG93X3VwbG9hZD9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXByZi1pbWctZ3JkIGQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1mb3ItY2hhdC1kaXYgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyLWZvci1jaGF0IG1iLTAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOicnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVXBsb2FkZWRfaW1hZ2VfZGF0YSAmJiBVcGxvYWRlZF9pbWFnZV9kYXRhLmxlbmd0aCA+IDAgJiYgIXNob3dfdXBsb2FkP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1pbWctc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ191cmwgJiYgaW1nX3VybC5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nX3VybC5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiaW5zLXByZi1pbWctZ3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW5zLXVwLWltZy1pY1wiIHNyYz17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlucy1wcmYtY2xzXCIgb25DbGljaz17dGhpcy5yZW1vdmVJbWFnZS5iaW5kKHRoaXMsIGRhdGEpfSBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZGZfdXJsICYmIHBkZl91cmwubGVuZ3RoPjAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZGZfdXJsLm1hcCgoZGF0YSwgaSkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJpbnMtcHJmLWltZy1ncmRcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW5zLXVwLWltZy1pY1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BkZi5qcGdcIn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbnMtcHJmLWNsc1wiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlSW1hZ2UuYmluZCh0aGlzLCBkYXRhKX0gc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvaWNvbnMvY2xvc2UucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0xvYWRpbmc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtcHJmLWltZy1ncmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItZm9yLWNoYXQtZGl2IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkZXItZm9yLWNoYXQgbWItMCcgc3R5bGU9e3t3aWR0aDonNTBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKChpbWdfdXJsICYmIGltZ191cmwubGVuZ3RoKSB8fCAocGRmX3VybCAmJiBwZGZfdXJsLmxlbmd0aCkpID49IDU/JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PHNwYW4gY2xhc3NOYW1lPVwiaW5zLXByZi1hZGRNb3JlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyXycgKyB0aGlzLnByb3BzLm1lbWJlcl9pZCArICdfYmFjaycpLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcl8nICsgdGhpcy5wcm9wcy5tZW1iZXJfaWQgKyAnX2JhY2snKS52YWx1ZSA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbnMtYWRkaWNvXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaW5zLWFkZC1pY28uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBpZD17YGltYWdlRmlsZVBpY2tlcl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfV9iYWNrYH0gb25DaGFuZ2U9e3RoaXMucGlja0ZpbGUuYmluZCh0aGlzLCB0aGlzLnByb3BzLm1lbWJlcl9pZCl9IGFjY2VwdD1cImltYWdlL3gtcG5nLGltYWdlL2pwZWcsaW1hZ2UvanBnLC5wZGZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSW5zdXJhbmNlUHJvb2ZzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnN1cmFuY2VQcm9vZnMgZnJvbSAnLi9pbnN1cmFuY2VQcm9vZnMuanMnXG5cbmNsYXNzIFZpcENsdWJBY3RpdmF0ZWRNZW1iZXJEZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgLy8gYWxyZWFkeSBhY3RpdmF0ZWQgbWVtYmVycyB2aWV3XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dG9nZ2xlVGFiVHlwZTogZmFsc2UsXG5cdFx0XHR0YWJzVmFsdWU6IFtdXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJ2aXAtdXNlci1kZXRhaWxzLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMubGVuZ3RoID4gMD9cblx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzLm1hcCgodmFsLGtleSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXtrZXl9Y2xhc3NOYW1lPVwiaW5zLXVzZXItZGV0YWlscy1saXNpdG5nXCIgaWQ9e3ZhbC5pZH0+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN1Yi1mb3JtLWhlZFwiPnt2YWwuaXNfcHJpbWFyeV91c2VyPyAnUHJvcG9zZXInOnZhbC5yZWxhdGlvbj92YWwucmVsYXRpb246Jyd9PC9wPlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiaW5zLXVzci1pbWctcGFyYSBwbC0wXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWctbGlzdC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlucy1pbnB1dC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy91c2VyLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyAndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyB9fT57dmFsLmZpcnN0X25hbWV9IHt2YWwubGFzdF9uYW1lfSB8IHt2YWwudGl0bGUgPT0gJ21yLic/J01hbGUnOnZhbC5nZW5kZXIgPT0gJ20nID8gJ01hbGUnOidGZW1hbGUnfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdHt2YWwuZG9iP1xuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltZy1saXN0LXdpZHRoXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpbnMtaW5wdXQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FsZW5kYXItMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57dmFsLmRvYn08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDonJ31cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWwuZW1haWw/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nLWxpc3Qtd2lkdGhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlucy1pbnB1dC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9tYWlsLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e3ZhbC5lbWFpbH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDonJ31cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0ey8qdmFsLmlzX3ByaW1hcnlfdXNlciAmJiB2YWwuZG9jdW1lbnRfaWRzID09IG51bGw/XG5cdFx0XHRcdFx0XHRcdFx0PEluc3VyYW5jZVByb29mcyB7Li4udGhpcy5wcm9wc30gbWVtYmVyX2lkID0ge3ZhbC5wcm9maWxlfSBpc19wcmltYXJ5X3VzZXIgPSB7dHJ1ZX0vPlxuXHRcdFx0XHRcdFx0XHRcdDogJycqL1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0OlwiXCJ9XG5cdFx0XHRcdDwvc2VjdGlvbj5cblxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlwQ2x1YkFjdGl2YXRlZE1lbWJlckRldGFpbHMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVmlwTG9naW5Qb3B1cCBmcm9tICcuL3ZpcENsdWJQb3B1cC5qcydcbmltcG9ydCBOZXdEYXRlU2VsZWN0b3IgZnJvbSAnLi4vY29tbW9ucy9uZXdEYXRlU2VsZWN0b3IuanMnXG5cbmNsYXNzIFZpcFByb3Bvc2VyRmFtaWx5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bmFtZTogJycsXG5cdFx0XHRsYXN0X25hbWU6ICcnLFxuXHRcdFx0ZG9iOiAnJyxcblx0XHRcdGlkOiAnJyxcblx0XHRcdC8vIHJlbGF0aW9uOiAnJyxcblx0XHRcdC8vIHRpdGxlOiAnJyxcblx0XHRcdHNob3dQb3B1cDogZmFsc2UsXG5cdFx0XHRzZXREZWZhdWx0OiBmYWxzZSxcblx0XHRcdHByb2ZpbGVfaWQ6bnVsbCxcbiAgICBcdCAgICAvLyByZWxhdGlvbl9rZXk6JycsXG4gICAgXHQgICAgaXNfZGlzYWJsZTpmYWxzZSxcbiAgICBcdCAgICBtZW1iZXJfZm9ybV9pZDp0aGlzLnByb3BzLm1lbWJlcl9mb3JtX2lkLFxuICAgIFx0ICAgIGlzX2FscmVhZHlfdXNlcjpmYWxzZSxcbiAgICBcdCAgICBpc1VzZXJTZWxlY3RlZFByb2ZpbGU6dGhpcy5wcm9wcy5pc1VzZXJTZWxlY3RlZFByb2ZpbGUsXG4gICAgXHQgICAgaXNEb2JWYWxpZGF0ZWQ6ZmFsc2UsXG4gICAgICAgICAgICBpc19kb2JfZXJyb3I6ZmFsc2UsXG4gICAgICAgICAgICBnZW5kZXI6J20nLFxuICAgICAgICAgICAgaXNGb3JjZVVwZGF0ZURvYjpmYWxzZVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHRsZXQgcHJvZmlsZSA9e31cblx0XHRpZihwcm9wcy5pc19mcm9tX3BheW1lbnQpe1xuXHRcdFx0aWYocHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHNbcHJvcHMubWVtYmVyX2lkXSl7XG5cdFx0XHRcdGxldCBwcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy52aXBDbHViTWVtYmVyRGV0YWlsc1t0aGlzLnByb3BzLm1lbWJlcl9pZF0pXG5cdFx0XHRcdGxldCBuZXh0UHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzW3Byb3BzLm1lbWJlcl9pZF0pXG5cdFx0XHRcdGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSAhPSBKU09OLnN0cmluZ2lmeShuZXh0UHJvZmlsZSkpIHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgLi4ubmV4dFByb2ZpbGUgfSlcblx0XHRcdFx0fVxuXHRcdFx0fWVsc2UgaWYocHJvcHMubWVtYmVyX2lkID49MCAmJiAhdGhpcy5zdGF0ZS5zZXREZWZhdWx0KXsgXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2lkOiBwcm9wcy5tZW1iZXJfaWQsIHNldERlZmF1bHQ6dHJ1ZX0sICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtpc19kaXNhYmxlOmZhbHNlfSwoKSA9Pntcblx0XHRcdFx0XHRcdHNlbGYuaGFuZGxlU3VibWl0KClcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUNoYW5nZShmaWVsZCwgZXZlbnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFtldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmFtJyldOiBldmVudC50YXJnZXQudmFsdWUgLCBpZDp0aGlzLnByb3BzLm1lbWJlcl9pZFxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlUmVsYXRpb24oaWQsZXZlbnQpIHtcblx0XHR2YXIgcmVsYXRpb25faWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7aWQ6dGhpcy5wcm9wcy5tZW1iZXJfaWQsJ3JlbGF0aW9uJzpldmVudC50YXJnZXQudmFsdWUsJ3JlbGF0aW9uX2tleSc6cmVsYXRpb25faWQub3B0aW9uc1tyZWxhdGlvbl9pZC5zZWxlY3RlZEluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyYW0nKX0sKCk9Pntcblx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KClcblx0XHR9KVxuXHR9XG5cblx0aGFuZGxlU3VibWl0KCkge1xuXHRcdHZhciBzZWxmX2RhdGEgPSB0aGlzLnN0YXRlXG5cdFx0aWYoc2VsZl9kYXRhLm5hbWUgIT09ICcnKXtcblx0ICAgIFx0aWYoc2VsZl9kYXRhLm5hbWUubGVuZ3RoID4gNTApe1xuXHRcdFx0XHRzZWxmX2RhdGEubmFtZSA9IHNlbGZfZGF0YS5uYW1lLnNsaWNlKDAsIDUwKVxuXHRcdFx0fVx0XG5cdCAgICB9XG5cdFx0dGhpcy5wcm9wcy51c2VyRGV0YWlscygnc2VsZl9kYXRhJywgc2VsZl9kYXRhKSAvLyB0byBzYXZlIHVzZXIgZm9ybSBkZXRhaWxzIGluIHN0b3JlXG5cdH1cblxuXHR0b2dnbGVQb3B1cChuZXdQcm9maWxlaWQsIG1lbWJlcl9pZCwgbmV3UHJvZmlsZSkge1xuXHRcdGlmKG5ld1Byb2ZpbGVpZCAhPT0gJycpe1xuXHRcdFx0aWYobmV3UHJvZmlsZSAmJiBuZXdQcm9maWxlLmRvYil7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2RvYjpuZXdQcm9maWxlLmRvYixpc0RvYlZhbGlkYXRlZDp0cnVlfSlcblx0XHRcdH1cblx0ICAgIFx0bmV3UHJvZmlsZS5pc1VzZXJTZWxlY3RlZFByb2ZpbGUgPSB0cnVlXG5cdFx0XHR0aGlzLnByb3BzLnNlbGVjdFZpcFVzZXJQcm9maWxlKG5ld1Byb2ZpbGVpZCwgbWVtYmVyX2lkLCBuZXdQcm9maWxlLCB0aGlzLnByb3BzLnBhcmFtX2lkKSAvLyBzZWxlY3QgcHJvZmlsZSBmcm9tIG9wdGlvblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHNob3dQb3B1cDogIXRoaXMuc3RhdGUuc2hvd1BvcHVwLFxuXHRcdFx0XHRwcm9maWxlX2lkOiBuZXdQcm9maWxlaWQsXG5cdFx0XHRcdGlkOm5ld1Byb2ZpbGVpZCxcblx0XHRcdFx0aXNGb3JjZVVwZGF0ZURvYjp0cnVlXG5cdFx0XHR9LCgpID0+e1xuXHRcdFx0XHR0aGlzLmhhbmRsZVN1Ym1pdCgpXG5cdFx0XHR9KVxuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiAhdGhpcy5zdGF0ZS5zaG93UG9wdXAsaXNGb3JjZVVwZGF0ZURvYjpmYWxzZX0pXG5cdFx0fVxuXHR9XG5cbiAgICBoYW5kbGVOYW1lQ2hhcmFjdGVycyhmaWVsZCxldmVudCl7XG5cdFx0aWYoZmllbGQgPT0gJ25hbWUnKXtcblx0XHRcdGlmKHRoaXMuc3RhdGUubmFtZS5sZW5ndGggPT0gNTApe1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgICAgIH1cbiAgICBcdH1cblx0fVxuXG5cdGhpZGVTZWxlY3RQcm9maWxlUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogZmFsc2V9KVxuICAgIH1cblxuICBcdHN1Ym1pdE5ld0RvYih0eXBlLG5ld0RhdGUsaXNWYWxpZERvYix1c2VyX2Zvcm1faWQpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHRzZWxmLnNldFN0YXRlKHtcblx0XHRcdGRvYjogbmV3RGF0ZSwgaXNEb2JWYWxpZGF0ZWQ6aXNWYWxpZERvYlxuXHRcdH0sICgpID0+IHtcblx0XHRcdHNlbGYuaGFuZGxlU3VibWl0KClcblx0XHR9KVxuXHR9XG5cblx0dW5TZXRGb3JjZVVwZGF0ZURvYigpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe2lzRm9yY2VVcGRhdGVEb2I6ZmFsc2V9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMpXG5cdFx0bGV0IGNvbW1vbk1zZ1NwYW4gPSA8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj4qVGhpcyBpcyBhIG1hbmRhdG9yeSBmaWVsZDwvc3Bhbj5cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1zdWItZm9ybXMgbXJ0LTEwXCIgaWQ9e2BtZW1iZXJfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nd2lkZ2V0IGdvbGRVc2VyQWRkb24nIHN0eWxlPXt7cGFkZGluZzonMTBweCd9fSA+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdWItZm9ybS1pbnB1dC1kYXRhXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206MTB9fSA+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlciAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzLmxlbmd0aCA+IDA/PHAgY2xhc3NOYW1lPVwic3ViLWZvcm0taGVkXCI+e2BNZW1iZXIgJHt0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycy5sZW5ndGggKyB0aGlzLnByb3BzLm1lbWJlcl92aWV3X2lkKzF9YH08L3A+OicnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaXNfdG9iZV9yZW1vdmVfb3B0aW9uP1xuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3ViLWZvcm0taGVkLWNsaWNrXCIgb25DbGljaz17dGhpcy5wcm9wcy5yZW1vdmVNZW1iZXJGb3JtLmJpbmQodGhpcyx0aGlzLnByb3BzLm1lbWJlcl9pZCl9PlJlbW92ZVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ6Jyd9XG5cdFx0XHRcdFx0XHQ8L2Rpdj4gXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGxhYmVsLW5hbWVzLWJ1dHRvbnMgJHt0aGlzLnN0YXRlLmdlbmRlciA9PSAnbSc/J2J0bi1hY3RpdmUnOicnfWB9IG5hbWU9XCJnZW5kZXJcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PSAnbSd9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAnZ2VuZGVyJzogJ20nIH0sKCk9Pnt0aGlzLmhhbmRsZVN1Ym1pdCgpIH0pfSBvbkJsdXI9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9Pk1hbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7dGhpcy5zdGF0ZS5nZW5kZXIgPT0gJ2YnPydidG4tYWN0aXZlJzonJ31gfSBuYW1lPVwiZ2VuZGVyXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT0gJ2YnfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgJ2dlbmRlcic6ICdmJyB9LCgpPT57dGhpcy5oYW5kbGVTdWJtaXQoKSB9KX0gb25CbHVyPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfT5GZW1hbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cdFx0XHRcdFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cCBpbnAtbWFyZ2luLXJpZ2h0IFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPXt7J3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZSd9fSBcblx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgbmFtZV8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ25hbWUnKT4gLTEgPydmaWxsLWVycm9yJzonJ31gfSByZXF1aXJlZCBcblx0XHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cImZpcnN0X25hbWVcIiBcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCIgZGF0YS1wYXJhbT0nbmFtZScgXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICduYW1lJyl9IFxuXHRcdFx0XHRcdFx0XHRcdFx0b25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSBcblx0XHRcdFx0XHRcdFx0XHRcdG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlTmFtZUNoYXJhY3RlcnMuYmluZCh0aGlzLCduYW1lJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5zdGF0ZS5pc19kaXNhYmxlID8gJ2Rpc2FibGVkJyA6ICcnfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pc19kaXNhYmxlID8gJ2Zvcm0tY29udHJvbC1wbGFjZWhvbGRlciBkYXRlUGlja2VyTGFiZWwnIDogJ2Zvcm0tY29udHJvbC1wbGFjZWhvbGRlcid9XG5cdFx0XHRcdFx0XHRcdFx0aHRtbEZvcj17YG5hbWVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT48c3BhbiBjbGFzc05hbWU9XCJsYWJlbERvdFwiPjwvc3Bhbj5OYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3VzZXItMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCduYW1lJyk+IC0xP1xuXHRcdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW46Jydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPiBcblx0XHRcdFx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0XHRcdFx0PE5ld0RhdGVTZWxlY3RvciB7Li4udGhpcy5wcm9wc30gZ2V0TmV3RGF0ZT17dGhpcy5zdWJtaXROZXdEb2IuYmluZCh0aGlzKX0gaXNfZG9iX2Vycm9yPXt0aGlzLnByb3BzLmlzX2RvYl9lcnJvcn0gIG9sZF9kb2I9e3RoaXMuc3RhdGUuZG9ifSB1c2VyX2Zvcm1faWQgPXt0aGlzLnByb3BzLm1lbWJlcl9pZH0gaXNfZ29sZD17dHJ1ZX0gdW5TZXRGb3JjZVVwZGF0ZURvYj17dGhpcy51blNldEZvcmNlVXBkYXRlRG9iLmJpbmQodGhpcyl9IGlzRm9yY2VVcGRhdGVEb2I9e3RoaXMuc3RhdGUuaXNGb3JjZVVwZGF0ZURvYn0vPlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZG9iJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW4gOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5zaG93X3NlbGVjdGVkX3Byb2ZpbGVzLmxlbmd0aD4wICYmICF0aGlzLnN0YXRlLmlzX2Rpc2FibGU/XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN1Yi1mb3JtLWhlZC1jbGlja1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0c2hvd1BvcHVwOiB0cnVlLGlzRm9yY2VVcGRhdGVEb2I6ZmFsc2V9KX0+XG5cdFx0XHRcdFx0XHRTZWxlY3QgZnJvbSBwcm9maWxlXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JndC1hcncuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0PC9kaXY+OicnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnNob3dQb3B1cCA/XG5cdFx0XHRcdFx0PFZpcExvZ2luUG9wdXAgey4uLnRoaXMucHJvcHN9IFxuXHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkPXt0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZH0gXG5cdFx0XHRcdFx0XHRtZW1iZXJfaWQ9e3RoaXMucHJvcHMubWVtYmVyX2lkfSBcblx0XHRcdFx0XHRcdGNsb3NlUG9wdXA9e3RoaXMudG9nZ2xlUG9wdXAuYmluZCh0aGlzKX0gXG5cdFx0XHRcdFx0XHRpc1NlbGVjdHByb2ZpbGUgPSB7dHJ1ZX0gXG5cdFx0XHRcdFx0XHR2aXBDbHViTWVtYmVyRGV0YWlscyA9e3RoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHNbdGhpcy5wcm9wcy5tZW1iZXJfaWRdfVxuXHRcdFx0XHRcdFx0aGlkZVNlbGVjdFByb2ZpbGVQb3B1cD17dGhpcy5oaWRlU2VsZWN0UHJvZmlsZVBvcHVwLmJpbmQodGhpcyl9IFxuXHRcdFx0XHRcdFx0aXNfc2VlX21vcmU9e2ZhbHNlfVxuXHRcdFx0XHRcdC8+IDogJydcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlwUHJvcG9zZXJGYW1pbHkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IENoYXRQYW5lbCBmcm9tICcuLi9jb21tb25zL0NoYXRQYW5lbCdcbmltcG9ydCBWaXBQcm9wb3NlciBmcm9tICcuL3ZpcENsdWJTZWxmLmpzJ1xuaW1wb3J0IFZpcFByb3Bvc2VyRmFtaWx5IGZyb20gJy4vdmlwQ2x1YkZhbWlseU1lbWJlcnMuanMnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuLi9jb21tb25zL3BheW1lbnRGb3JtJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcbmltcG9ydCBWaXBDbHViQWN0aXZhdGVkTWVtYmVyRGV0YWlscyBmcm9tICcuL3ZpcENsdWJBY3RpdmF0ZWRNZW1lYmVyRGV0YWlsc1ZpZXcuanMnXG5pbXBvcnQgQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIGZyb20gJy4uL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9Cb29raW5nQ29uZmlybWF0aW9uUG9wdXAuanMnXG5cbmNsYXNzIFZpcENsdWJNZW1iZXJEZXRhaWxzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2F2ZU1lbWJlcnM6ZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZUVycm9yczp7fSxcbiAgICAgICAgICAgIHNob3dfc2VsZWN0ZWRfcHJvZmlsZXM6W10sXG4gICAgICAgICAgIFx0cGF5bWVudERhdGE6IG51bGwsXG4gICAgICAgICAgIFx0c2hvd19wb3B1cDpmYWxzZSxcbiAgICAgICAgICAgXHRwcm9jZWVkOmZhbHNlLFxuICAgICAgICAgICBcdHBvcHVwTWVtRGF0YTp7fSxcbiAgICAgICAgICAgXHRjb3Vwb25fY29kZTpudWxsLFxuICAgICAgICAgICBcdGNvdXBvbl9pZDpudWxsLFxuICAgICAgICAgICBcdGlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6ZmFsc2UsXG4gICAgICAgICAgIFx0Y291cG9uX2Rpc2NvdW50Om51bGwsXG4gICAgICAgICAgIFx0dXNlcl9lbWFpbDpudWxsLFxuICAgICAgICAgICBcdHVzZXJfcGhvbmVfbnVtYmVyOm51bGwsXG4gICAgICAgICAgIFx0aXNfZG9iX2Vycm9yOmZhbHNlLFxuICAgICAgICAgICBcdHNob3dDb25maXJtYXRpb25Qb3B1cDogJ2Nsb3NlJyxcbiAgICAgICAgICAgXHR0b19iZV9yZW1vdmVfaWQ6JydcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIFx0aWYod2luZG93KXtcbiAgICBcdFx0d2luZG93LnNjcm9sbFRvKDAsMClcbiAgICBcdH1cbiAgICBcdGlmICh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4pLmxlbmd0aCA+IDAgJiYgIXRoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50ICYmIHRoaXMucHJvcHMudmlwQ291cG9ucy5sZW5ndGggPjApIHsgLy8gZ2V0IGNvdXBvbiBkaXNjb3VudFxuXHQgICAgXHRcdHRoaXMucHJvcHMuYXBwbHlDb3Vwb25EaXNjb3VudCh7IHByb2R1Y3RJZCA6IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaXNfZ29sZD84OjExLGNvdXBvbkNvZGU6dGhpcy5wcm9wcy52aXBDb3Vwb25zWzBdLmNvZGUsY291cG9uSWQ6dGhpcy5wcm9wcy52aXBDb3Vwb25zWzBdLmNvdXBvbl9pZCxwbGFuX2lkOnRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWQsZGVhbF9wcmljZTp0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmRlYWxfcHJpY2UsXG5cdCAgICBcdFx0Y2I6IChyZXNwKSA9PiB7XG5cdCAgICBcdFx0XHRpZihyZXNwKXtcblx0ICAgIFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7Y291cG9uX2Rpc2NvdW50OnJlc3AuZGlzY291bnR9KVxuXHQgICAgXHRcdFx0fVxuXHQgICAgXHRcdH0gXG5cdCAgICBcdH0pXG5cdCAgICBcdHRoaXMuc2V0U3RhdGUoe2lzX3BheW1lbnRfY291cG9uX2FwcGxpZWQ6dHJ1ZSxjb3Vwb25fY29kZTp0aGlzLnByb3BzLnZpcENvdXBvbnNbMF0uY29kZSwgY291cG9uX2lkOnRoaXMucHJvcHMudmlwQ291cG9uc1swXS5jb3Vwb25faWQgfSlcblx0ICAgIH1cblxuXHQgICAgaWYodGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKS5sZW5ndGggPiAwKXtcblx0ICAgIFx0dGhpcy5zZXRTdGF0ZSh7dXNlcl9lbWFpbDp0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5lbWFpbCx1c2VyX3Bob25lX251bWJlcjp0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5waG9uZV9udW1iZXJ9KVxuXHQgICAgfVxuICAgIH1cblxuICAgIGFkZE1lbWJlcnMoaXNGcm9tRGVmYXVsdFVzZXIpeyAvLyBhZGQgbmV3IG1lbWJlcnMgXG4gICAgXHRsZXQgbWVtYmVyX2R1bW15X2RhdGE9e1xuICAgIFx0XHRuYW1lOiAnJyxcblx0XHRcdGxhc3RfbmFtZTogJycsXG5cdFx0XHRkb2I6ICcnLFxuXHRcdFx0aWQ6ICcnLFxuXHRcdFx0Ly8gcmVsYXRpb246IG51bGwsXG5cdFx0XHQvLyByZWxhdGlvbl9rZXk6IG51bGwsXG5cdFx0XHQvLyB0aXRsZTogJycsXG5cdFx0XHRwcm9maWxlOm51bGwsXG5cdFx0XHRwcm9maWxlX2lkOm51bGwsXG5cdFx0XHRwaG9uZV9udW1iZXI6JycsXG5cdFx0XHRlbWFpbDpudWxsLFxuXHRcdFx0aXNVc2VyU2VsZWN0ZWRQcm9maWxlOnRydWUsXG5cdFx0XHQvLyBkYXk6bnVsbCxcblx0XHRcdC8vIG1udGg6bnVsbCxcblx0XHRcdC8vIHllYXI6bnVsbCxcblx0XHRcdC8vIGVtYWlsOicnLFxuXHRcdFx0Zmlyc3RfbmFtZTonJyxcblx0XHRcdGFnZTonJ1xuICAgIFx0fVxuICAgIFx0bGV0IGNhcmRcbiAgICBcdGxldCBtZW1iZXJzSWQgPSBbXVxuICAgIFx0aWYoaXNGcm9tRGVmYXVsdFVzZXIgJiYgIXRoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50KXtcbiAgICBcdFx0dGhpcy5wcm9wcy5jbGVhclZpcE1lbWViZXJEYXRhKCkgLy8gcmVzZXQgdmlwIG9yIGdvbGQgc3RvcmUgdG8gaW5pdGlhbCBzdGF0ZVxuXHRcdFx0bWVtYmVyc0lkLnB1c2goeycwJzowLCB0eXBlOidzZWxmJyxtZW1iZXJfZm9ybV9pZDowLGlzVXNlclNlbGVjdGVkUHJvZmlsZTp0cnVlLHRvX2JlX3JlbW92ZTpmYWxzZX0pXG5cdFx0XHRtZW1iZXJfZHVtbXlfZGF0YS5pZD0wXG5cdFx0XHRtZW1iZXJfZHVtbXlfZGF0YS5pc190b2JlX2R1bW15X3VzZXIgPSB0cnVlXG5cdFx0XHR0aGlzLnByb3BzLnNhdmVDdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzKG1lbWJlcnNJZCwocmVzcCk9PnsgLy8gc2F2ZSBjdXJyZW50IHZpc2libGUgZm9ybSBtZW1iZXIgb3Igc2VsZWN0ZWQgdXNlciBwcm9maWxlIGlkXG4gICAgXHRcdFx0dGhpcy5wcm9wcy51c2VyRGV0YWlscygnc2VsZl9kYXRhJywgbWVtYmVyX2R1bW15X2RhdGEpIC8vIHRvIHNhdmUgdXNlciBmb3JtIGRldGFpbHMgaW4gc3RvcmVcbiAgICBcdFx0fSlcbiAgICBcdH1lbHNle1xuICAgIFx0XHRpZih0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEpLmxlbmd0aCAmJiAgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEucGxhbiAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS5wbGFuLmxlbmd0aCA+MCl7XG4gICAgXHRcdFx0Ly8gdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEucGxhblswXS50b3RhbF9hbGxvd2VkX21lbWJlcnNcdFxuICAgIFx0XHRcdFx0aWYodGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQgJiYgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5sZW5ndGggIDwgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEucGxhblswXS50b3RhbF9hbGxvd2VkX21lbWJlcnMpe1xuXHRcdFx0ICAgIFx0XHRtZW1iZXJzSWQgPSBbXS5jb25jYXQodGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQpXG5cdFx0XHQgICAgXHRcdGxldCBjdXJyZW50Rm9ybUlkc0NvdW50ID0gdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubGVuZ3RoXG5cdFx0XHQgICAgXHRcdGxldCB0b3RhbF9hbGxvd2VkX21lbWJlcnMgPSB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS5wbGFuWzBdLnRvdGFsX2FsbG93ZWRfbWVtYmVyc1xuXHRcdFx0ICAgIFx0XHRpZihjdXJyZW50Rm9ybUlkc0NvdW50IDw9IHRvdGFsX2FsbG93ZWRfbWVtYmVycyl7XG5cdFx0XHRcdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHtbY3VycmVudEZvcm1JZHNDb3VudF06IGN1cnJlbnRGb3JtSWRzQ291bnQsIHR5cGU6J2FkdWx0JyxtZW1iZXJfZm9ybV9pZDpjdXJyZW50Rm9ybUlkc0NvdW50LGlzVXNlclNlbGVjdGVkUHJvZmlsZTp0cnVlLHRvX2JlX3JlbW92ZTp0cnVlfSlcblx0XHRcdFx0XHRcdFx0bWVtYmVyX2R1bW15X2RhdGEuaWQ9Y3VycmVudEZvcm1JZHNDb3VudFxuXHRcdFx0XHRcdFx0XHRtZW1iZXJfZHVtbXlfZGF0YS5pc190b2JlX2R1bW15X3VzZXIgPSBmYWxzZVxuXHRcdFx0ICAgIFx0XHR9XG5cdFx0XHQgICAgXHRcdHRoaXMucHJvcHMuc2F2ZUN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnMobWVtYmVyc0lkLChyZXNwKT0+eyAgLy8gc2F2ZSBjdXJyZW50IHZpc2libGUgZm9ybSBtZW1iZXIgb3Igc2VsZWN0ZWQgdXNlciBwcm9maWxlIGlkXG5cdFx0XHQgICAgXHRcdFx0dGhpcy5wcm9wcy51c2VyRGV0YWlscygnc2VsZl9kYXRhJywgbWVtYmVyX2R1bW15X2RhdGEpIC8vIHRvIHNhdmUgdXNlciBmb3JtIGRldGFpbHMgaW4gc3RvcmVcblx0XHRcdCAgICBcdFx0fSlcblx0XHRcdCAgICBcdH1cbiAgICBcdFx0fVxuXHQgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpe1xuICAgIFx0bGV0IGNhcmRcbiAgICBcdGxldCBzZWxmID0gdGhpc1xuICAgIFx0bGV0IGlzRHVtbXlVc2VyXG4gICAgXHRsZXQgbWVtYmVyc0lkID0gW11cbiAgICBcdGlmKCF0aGlzLnN0YXRlLnNhdmVNZW1iZXJzICYmIE9iamVjdC5rZXlzKHByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuKS5sZW5ndGggPjAgJiYgIXByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5sZW5ndGggJiYgIXByb3BzLmlzX2Zyb21fcGF5bWVudCl7XG4gICAgXHRcdGxldCBsb2dpblVzZXJcbiAgICBcdFx0bGV0IGlzRGVmYXVsdFVzZXJcbiAgICBcdFx0aWYocHJvcHMuVVNFUil7XG4gICAgXHRcdFx0bG9naW5Vc2VyID0gcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZVxuICAgIFx0XHR9XG4gICAgXHRcdGlmKHRoaXMucHJvcHMuc2F2ZWRNZW1iZXJEYXRhICYmIHRoaXMucHJvcHMuc2F2ZWRNZW1iZXJEYXRhLmxlbmd0aCA+MCl7XG4gICAgXHRcdFx0aWYodGhpcy5wcm9wcy5zYXZlZE1lbWJlckRhdGEubGVuZ3RoID09MSAmJiB0aGlzLnByb3BzLnNhdmVkTWVtYmVyRGF0YVswXSA9PSBudWxsKXtcbiAgICBcdFx0XHRcdGlmKHByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXMocHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoICYmIHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0gJiYgT2JqZWN0LmtleXMocHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSkubGVuZ3RoID4gMCl7XG5cdCAgICBcdFx0XHRcdFx0bWVtYmVyc0lkLnB1c2goe1swXTogcHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pZCwgdHlwZTonc2VsZicsIG1lbWJlcl9mb3JtX2lkOjAsaXNVc2VyU2VsZWN0ZWRQcm9maWxlOnRydWUsZnJvbVdoZXJlOidzaG93X2FwaSd9KVxuXHQgICAgXHRcdFx0fWVsc2V7XG5cdCAgICBcdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHtbMF06IDAsIHR5cGU6J3NlbGYnLCBtZW1iZXJfZm9ybV9pZDowLGlzVXNlclNlbGVjdGVkUHJvZmlsZTp0cnVlLGZyb21XaGVyZTonc2hvd19hcGknLHRvX2JlX3JlbW92ZTpmYWxzZX0pXG5cdCAgICBcdFx0XHR9XG4gICAgXHRcdFx0fWVsc2V7XG4gICAgXHRcdFx0XHRPYmplY3QuZW50cmllcyhwcm9wcy5zYXZlZE1lbWJlckRhdGEpLm1hcChmdW5jdGlvbihba2V5LCB2YWx1ZV0pIHtcbiAgICBcdFx0XHRcdFx0bWVtYmVyc0lkLnB1c2goe1trZXldOiB2YWx1ZS5pZCwgdHlwZTonc2VsZicsIG1lbWJlcl9mb3JtX2lkOjAsaXNVc2VyU2VsZWN0ZWRQcm9maWxlOnRydWUsdG9fYmVfcmVtb3ZlOmZhbHNlfSlcbiAgICBcdFx0XHRcdH0pXG4gICAgXHRcdFx0fVxuICAgIFx0XHRcdHByb3BzLnNhdmVDdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzKG1lbWJlcnNJZCkgLy8gc2F2ZSBjdXJyZW50IHZpc2libGUgZm9ybSBtZW1iZXIgb3Igc2VsZWN0ZWQgdXNlciBwcm9maWxlIGlkXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzYXZlTWVtYmVyczogdHJ1ZX0pXG4gICAgXHRcdH1lbHNle1xuXHQgICAgXHRcdGlmKHByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXMocHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoICYmIHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pe1xuXHQgICAgXHRcdFx0aXNEZWZhdWx0VXNlciA9IHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNfZGVmYXVsdF91c2VyXG5cdCAgICBcdFx0XHRpc0R1bW15VXNlciA9IHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXJcblx0ICAgIFx0XHR9XG5cdCAgICBcdFx0aWYoIWlzRHVtbXlVc2VyKXtcblx0XHQgICAgXHRcdG1lbWJlcnNJZC5wdXNoKHsnMCc6bG9naW5Vc2VyLCB0eXBlOiAnc2VsZicsbWVtYmVyX2Zvcm1faWQ6MCxpc1VzZXJTZWxlY3RlZFByb2ZpbGU6ZmFsc2UsdG9fYmVfcmVtb3ZlOmZhbHNlfSlcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0bWVtYmVyc0lkLnB1c2goeycwJzowLCB0eXBlOidzZWxmJyxtZW1iZXJfZm9ybV9pZDowLGlzVXNlclNlbGVjdGVkUHJvZmlsZTpmYWxzZSx0b19iZV9yZW1vdmU6ZmFsc2V9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdHByb3BzLnNhdmVDdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzKG1lbWJlcnNJZCkgLy8gc2F2ZSBjdXJyZW50IHZpc2libGUgZm9ybSBtZW1iZXIgb3Igc2VsZWN0ZWQgdXNlciBwcm9maWxlIGlkXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzYXZlTWVtYmVyczogdHJ1ZSB9KVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUuc2F2ZU1lbWJlcnMgJiYgT2JqZWN0LmtleXMocHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4pLmxlbmd0aCA+IDAgJiYgcHJvcHMuaXNfZnJvbV9wYXltZW50ICYmIE9iamVjdC5rZXlzKHByb3BzLnZpcF9jbHViX2RiX2RhdGEpLmxlbmd0aCA+IDApIHtcblx0XHRcdGlmIChwcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlciAmJiBPYmplY3Qua2V5cyhwcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlcikubGVuZ3RoID4gMCAmJiBwcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMgJiYgcHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0aWYgKCFPYmplY3Qua2V5cyhwcm9wcy52aXBDbHViTWVtYmVyRGV0YWlscykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0bWVtYmVyc0lkLnB1c2goeyBbMF06IDAsIHR5cGU6ICdhZHVsdCcsIG1lbWJlcl9mb3JtX2lkOiAwLCBpc1VzZXJTZWxlY3RlZFByb2ZpbGU6IGZhbHNlLCB0b19iZV9yZW1vdmU6ZmFsc2UgfSlcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc2F2ZU1lbWJlcnM6IHRydWV9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5tYXAoKHZhbCwga2V5KSA9PiB7XG5cdFx0XHRcdFx0aWYgKE9iamVjdC5rZXlzKHByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHsgW2tleV06IHByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzW3ZhbFtrZXldXS5pZCwgdHlwZTogJ2FkdWx0JywgbWVtYmVyX2Zvcm1faWQ6IHByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzW3ZhbFtrZXldXS5pZCwgaXNVc2VyU2VsZWN0ZWRQcm9maWxlOiBmYWxzZSwgdG9fYmVfcmVtb3ZlOmtleSA9PTA/ZmFsc2U6dHJ1ZSB9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwcm9wcy5zYXZlQ3VycmVudFNlbGVjdGVkVmlwTWVtYmVycyhtZW1iZXJzSWQpIC8vIHNhdmUgY3VycmVudCB2aXNpYmxlIGZvcm0gbWVtYmVyIG9yIHNlbGVjdGVkIHVzZXIgcHJvZmlsZSBpZFxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc2F2ZU1lbWJlcnM6IHRydWUgfSlcblx0XHRcdH1cblx0XHR9XG5cdFx0bGV0IHByb2ZpbGVMZW5ndGggPSBPYmplY3Qua2V5cyhwcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGg7XG5cdFx0bGV0IGN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzID0gW11cblx0XHRsZXQgc2hvd19zZWxlY3RlZF9wcm9maWxlID0gW11cblx0XHR0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5tYXAoKHZhbCwga2V5KSA9PiB7XG5cdFx0XHRjdXJyZW50U2VsZWN0ZWRQcm9maWxlcy5wdXNoKHZhbFtrZXldKVxuXHRcdH0pXG5cdFx0bGV0IGFscmVhZHlfdXNlcnNfaWRzID0gW11cblx0XHRpZiAodGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YSkubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhKS5sZW5ndGggPiAwICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMubWFwKCh2YWwsIGtleSkgPT4ge1xuXHRcdFx0XHRhbHJlYWR5X3VzZXJzX2lkcy5wdXNoKHZhbC5wcm9maWxlKVxuXHRcdFx0fSlcblx0XHR9XG5cdFx0aWYgKHByb2ZpbGVMZW5ndGggPiAwKSB7XG5cdFx0XHRpZiAoIXByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXIpIHtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdE9iamVjdC5lbnRyaWVzKHByb3BzLlVTRVIucHJvZmlsZXMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG5cblx0XHRcdFx0XHRcdGlmIChjdXJyZW50U2VsZWN0ZWRQcm9maWxlcy5pbmRleE9mKHBhcnNlSW50KGtleSkpID09IC0xICYmIGtleSAhPT0gcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSAmJiBhbHJlYWR5X3VzZXJzX2lkcy5pbmRleE9mKHBhcnNlSW50KGtleSkpID09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdHNob3dfc2VsZWN0ZWRfcHJvZmlsZS5wdXNoKGtleSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoeyBzaG93X3NlbGVjdGVkX3Byb2ZpbGVzOiBzaG93X3NlbGVjdGVkX3Byb2ZpbGUgfSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcm9jZXNzUGF5bWVudChkYXRhKSB7XG5cdFx0aWYgKGRhdGEgJiYgZGF0YS5zdGF0dXMpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwYXltZW50RGF0YTogZGF0YS5kYXRhIH0sICgpID0+IHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpICYmIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUucGF5bWVudERhdGEpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW1lbnRGb3JtJylcblx0XHRcdFx0XHRcdGZvcm0uc3VibWl0KClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDUwMClcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cHJvY2VlZFBsYW4oaXNTbXMsIGV4dHJhRGF0YVBhcmFtcyA9IHt9KSB7IC8vbmV3XG5cdFx0bGV0IHN1Y2Nlc3NfaWRcblx0XHRsZXQgZGF0YSA9IHt9XG5cdFx0bGV0IHB1c2hEYXRhID0ge31cblx0XHRsZXQgaXNEdW1teVVzZXJcblx0XHRsZXQgc2VsZl9wcm9maWxlID0ge31cblx0XHRsZXQgaXNfZGlzYWJsZSA9IGZhbHNlXG5cdFx0bGV0IG1lbWJlcl9yZWYgPSAnJ1xuXHRcdGxldCB2YWxpZGF0aW5nRXJyb3JzID0ge31cblx0XHRsZXQgcGFyYW1cblx0XHRsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cdFx0aWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbikubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHMpLmxlbmd0aCA+IDApIHtcblx0XHRcdGRhdGEucGxhbl9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uaWRcblx0XHRcdGRhdGEubWVtYmVycyA9IFtdXG5cdFx0XHRkYXRhLnV0bV9zcG9fdGFncyA9IHBhcnNlZFxuXHRcdFx0cHVzaERhdGEudXRtX3Nwb190YWdzID0gcGFyc2VkXG5cdFx0XHRwdXNoRGF0YS5wbGFuID0gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhblxuXHRcdFx0cHVzaERhdGEuZHVtbXlfZGF0YV90eXBlID0gJ1BMQU5fUFVSQ0hBU0UnXG5cdFx0XHRwdXNoRGF0YS5tZW1iZXJzID0gW11cblx0XHRcdHB1c2hEYXRhLmNvdXBvbl9kYXRhID0gdGhpcy5wcm9wcy52aXBDb3Vwb25zXG5cdFx0XHRpZiAoaXNTbXMpIHtcblx0XHRcdFx0cHVzaERhdGEuaXNfYWdlbnQgPSB0cnVlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwdXNoRGF0YS5pc19hZ2VudCA9IGZhbHNlXG5cdFx0XHR9XG5cdFx0XHRsZXQgZmllbGRzID0gW11cblx0XHRcdHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLm1hcCgodmFsLCBrZXkpID0+IHtcblx0XHRcdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHMpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRmaWVsZHMgPSBbXVxuXHRcdFx0XHRcdHBhcmFtID0gdGhpcy5wcm9wcy52aXBDbHViTWVtYmVyRGV0YWlsc1t2YWxba2V5XV1cblx0XHRcdFx0XHRpZiAocGFyYW0gJiYgT2JqZWN0LmtleXMocGFyYW0pLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdC8vY29tbW9uIHZhbGlkYXRpb24gc3RhcnRzXG5cblx0XHRcdFx0XHRcdGlmIChwYXJhbS5uYW1lID09IFwiXCIpIHtcblx0XHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdFx0ZmllbGRzLnB1c2goJ25hbWUnKVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAocGFyYW0uZG9iID09IG51bGwgfHwgcGFyYW0uZG9iID09IFwiXCIpIHtcblx0XHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdFx0ZmllbGRzLnB1c2goJ2RvYicpXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2lzX2RvYl9lcnJvcjp0cnVlfSlcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKHBhcmFtLmRvYiAhPSBudWxsICYmICFwYXJhbS5pc0RvYlZhbGlkYXRlZCkge1xuXHRcdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHRmaWVsZHMucHVzaCgnZG9iJylcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7aXNfZG9iX2Vycm9yOnRydWV9KVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvL2NvbW1vbiB2YWxpZGF0aW9uIGVuZHMgXG5cblx0XHRcdFx0XHRcdGlmICghdGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQpIHtcblx0XHRcdFx0XHRcdFx0aWYocGFyYW0uZW1haWwgPT0gXCJcIiB8fCAhcGFyYW0uZW1haWwpeyAgXG5cdFx0XHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdFx0XHRmaWVsZHMucHVzaCgnZW1haWwnKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmIChwYXJhbS5lbWFpbCAhPSAnJyAmJiBwYXJhbS5yZWxhdGlvbiA9PSAnc2VsZicpIHtcblx0XHRcdFx0XHRcdFx0XHRsZXQgdmFsaWRFbWFpbCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXHRcdFx0XHRcdFx0XHRcdHZhbGlkRW1haWwgPSB2YWxpZEVtYWlsLnRlc3QocGFyYW0uZW1haWwpXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCF2YWxpZEVtYWlsKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0ZmllbGRzLnB1c2goJ2VtYWlsJylcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFsaWRhdGluZ0Vycm9yc1twYXJhbS5pZF0gPSBmaWVsZHNcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdGNvbnNvbGUubG9nKHZhbGlkYXRpbmdFcnJvcnMpXG5cdFx0XHRPYmplY3Qua2V5cyh2YWxpZGF0aW5nRXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0aWYgKHZhbGlkYXRpbmdFcnJvcnNba2V5XS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRtZW1iZXJfcmVmID0gYG1lbWJlcl8ke2tleX1gXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRlRXJyb3JzOiB2YWxpZGF0aW5nRXJyb3JzIH0pXG5cdFx0XHRpZiAoaXNfZGlzYWJsZSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZW1iZXJfcmVmKSkge1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZW1iZXJfcmVmKS5zY3JvbGxJbnRvVmlldygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGNpdHlcblx0XHRcdFx0bGV0IGNpdHlfY29kZVxuXHRcdFx0XHRsZXQgYWRkcmVzc1xuXHRcdFx0XHRsZXQgcGluY29kZVxuXHRcdFx0XHR2YXIgbWVtYmVycyA9IHt9XG5cdFx0XHRcdGxldCBwcmltYXJ5X3VzZXIgPSB7fVxuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQpIHtcblx0XHRcdFx0XHRsZXQgaXNfbWVtYmVyX3VwZGF0ZWQgPSBbXVxuXHRcdFx0XHRcdGxldCBpbWFnZV9pZHMgPSBbXVxuXHRcdFx0XHRcdGlmICh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0cHJpbWFyeV91c2VyID0gdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMuZmlsdGVyKCh4ID0+IHguaXNfcHJpbWFyeV91c2VyKSlbMF1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRoaXMucHJvcHMubWVtYmVyc19wcm9vZnMgJiYgdGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcy5sZW5ndGggPiAwICYmIE9iamVjdC5rZXlzKHByaW1hcnlfdXNlcikubGVuZ3RoID4gMCkgeyAvL2ZvciBzZWxmIG1lbWJlcl9wcm9vZnNcblx0XHRcdFx0XHRcdHBhcmFtID0gcHJpbWFyeV91c2VyXG5cdFx0XHRcdFx0XHRtZW1iZXJzID0ge31cblx0XHRcdFx0XHRcdG1lbWJlcnMucHJvZmlsZSA9IHBhcmFtLnByb2ZpbGVcblx0XHRcdFx0XHRcdG1lbWJlcnMuaWQgPSBwYXJhbS5wcm9maWxlXG5cdFx0XHRcdFx0XHRtZW1iZXJzLmlzX3ByaW1hcnlfdXNlciA9IHBhcmFtLmlzX3ByaW1hcnlfdXNlclxuXHRcdFx0XHRcdFx0Ly8gbWVtYmVycy50aXRsZSA9IHByaW1hcnlfdXNlci50aXRsZVxuXHRcdFx0XHRcdFx0bWVtYmVycy5maXJzdF9uYW1lID0gcHJpbWFyeV91c2VyLmZpcnN0X25hbWVcblx0XHRcdFx0XHRcdG1lbWJlcnMubGFzdF9uYW1lID0gJydcblx0XHRcdFx0XHRcdG1lbWJlcnMuZW1haWwgPSBwcmltYXJ5X3VzZXIuZW1haWxcblx0XHRcdFx0XHRcdG1lbWJlcnMuZG9iID0gcHJpbWFyeV91c2VyLmRvYlxuXHRcdFx0XHRcdFx0aXNfbWVtYmVyX3VwZGF0ZWQgPSB0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzLmZpbHRlcigoeCA9PiB4LmlkID09IHBhcmFtLnByb2ZpbGUpKVxuXHRcdFx0XHRcdFx0aWYgKGlzX21lbWJlcl91cGRhdGVkICYmIGlzX21lbWJlcl91cGRhdGVkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0aWYgKGlzX21lbWJlcl91cGRhdGVkWzBdLmltZ19wYXRoX2lkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0aW1hZ2VfaWRzID0gW11cblx0XHRcdFx0XHRcdFx0XHRpc19tZW1iZXJfdXBkYXRlZFswXS5pbWdfcGF0aF9pZHMubWFwKChpbWdJZCwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aW1hZ2VfaWRzLnB1c2goeyAncHJvb2ZfZmlsZSc6IGltZ0lkLmlkIH0pXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtZW1iZXJzLmRvY3VtZW50X2lkcyA9IGltYWdlX2lkc1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZGF0YS5tZW1iZXJzLnB1c2gobWVtYmVycylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubWFwKCh2YWwsIGtleSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHMpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0cGFyYW0gPSB0aGlzLnByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzW3ZhbFtrZXldXVxuXHRcdFx0XHRcdFx0XHRtZW1iZXJzID0ge31cblx0XHRcdFx0XHRcdFx0Ly8gbWVtYmVycy50aXRsZSA9IHBhcmFtLnRpdGxlXG5cdFx0XHRcdFx0XHRcdC8vIG1lbWJlcnMucmVsYXRpb24gPSBwYXJhbS5yZWxhdGlvbl9rZXlcblx0XHRcdFx0XHRcdFx0bWVtYmVycy5maXJzdF9uYW1lID0gcGFyYW0ubmFtZVxuXHRcdFx0XHRcdFx0XHRtZW1iZXJzLmxhc3RfbmFtZSA9ICcnXG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMuZW1haWwgPSBudWxsXG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMuZG9iID0gcGFyYW0uZG9iXG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMuZ2VuZGVyID0gcGFyYW0uZ2VuZGVyXG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMucHJvZmlsZSA9IHBhcmFtLnByb2ZpbGVfaWRcblx0XHRcdFx0XHRcdFx0bWVtYmVycy5pc19wcmltYXJ5X3VzZXIgPSBmYWxzZVxuXHRcdFx0XHRcdFx0XHQvLyBkYXRhLm1lbWJlcnMucHVzaChtZW1iZXJzKVxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcyAmJiB0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRpc19tZW1iZXJfdXBkYXRlZCA9IHRoaXMucHJvcHMubWVtYmVyc19wcm9vZnMuZmlsdGVyKCh4ID0+IHguaWQgPT0gcGFyYW0uaWQpKVxuXHRcdFx0XHRcdFx0XHRcdGlmIChpc19tZW1iZXJfdXBkYXRlZCAmJiBpc19tZW1iZXJfdXBkYXRlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaXNfbWVtYmVyX3VwZGF0ZWRbMF0uaW1nX3BhdGhfaWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW1hZ2VfaWRzID0gW11cblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNfbWVtYmVyX3VwZGF0ZWRbMF0uaW1nX3BhdGhfaWRzLm1hcCgoaW1nSWQsIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWFnZV9pZHMucHVzaCh7ICdwcm9vZl9maWxlJzogaW1nSWQuaWQgfSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdG1lbWJlcnMuZG9jdW1lbnRfaWRzID0gaW1hZ2VfaWRzXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC8vIG1lbWJlcnMuaWQ9cGFyYW0uaWRcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvLyBwdXNoRGF0YS5tZW1iZXJzLnB1c2gobWVtYmVycylcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGRhdGEubWVtYmVycy5wdXNoKG1lbWJlcnMpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxuXHRcdFx0XHRcdGxldCBwb3B1cE1lbURhdGFcblx0XHRcdFx0XHRwb3B1cE1lbURhdGEgPSBkYXRhLm1lbWJlcnNcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgcG9wdXBNZW1EYXRhOiBwb3B1cE1lbURhdGEgfSlcblx0XHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUucHJvY2VlZCAmJiB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZCAmJiB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5sZW5ndGggPCB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLnRvdGFsX2FsbG93ZWRfbWVtYmVycykge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dfcG9wdXA6IHRydWUgfSlcblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxuXHRcdFx0XHRcdHRoaXMucHJvcHMuYWRkVmlwTWVtYmVyc0RhdGEoZGF0YSwgKHJlc3ApID0+IHsgLy8gdG8gYWRkIG1lbWJlciBkZXRhaWxzXG5cdFx0XHRcdFx0XHRpZiAocmVzcC5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCd2aXAtY2x1Yi1hY3RpdmF0ZWQtZGV0YWlscycpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5tYXAoKHZhbCwga2V5KSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy52aXBDbHViTWVtYmVyRGV0YWlscykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRwYXJhbSA9IHRoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHNbdmFsW2tleV1dXG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMgPSB7fVxuXHRcdFx0XHRcdFx0XHQvLyBtZW1iZXJzLnRpdGxlID0gcGFyYW0udGl0bGVcblx0XHRcdFx0XHRcdFx0Ly8gbWVtYmVycy5yZWxhdGlvbiA9IHBhcmFtLnJlbGF0aW9uX2tleVxuXHRcdFx0XHRcdFx0XHRtZW1iZXJzLmZpcnN0X25hbWUgPSBwYXJhbS5uYW1lXG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMubGFzdF9uYW1lID0gJydcblx0XHRcdFx0XHRcdFx0bWVtYmVycy5lbWFpbCA9IHBhcmFtLmVtYWlsXG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMuZG9iID0gcGFyYW0uZG9iXG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMuZ2VuZGVyID0gcGFyYW0uZ2VuZGVyXG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMucHJvZmlsZSA9IHBhcmFtLnByb2ZpbGVfaWRcblx0XHRcdFx0XHRcdFx0bWVtYmVycy5pZCA9IHBhcmFtLmlkXG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMuaXNfcHJpbWFyeV91c2VyID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHRkYXRhLm1lbWJlcnMucHVzaChtZW1iZXJzKVxuXHRcdFx0XHRcdFx0XHRkYXRhWydjb3Vwb25fY29kZSddID0gdGhpcy5zdGF0ZS5jb3Vwb25fY29kZSAmJiB0aGlzLnN0YXRlLmlzX3BheW1lbnRfY291cG9uX2FwcGxpZWQgPyBbdGhpcy5zdGF0ZS5jb3Vwb25fY29kZV0gOiBbXVxuXHRcdFx0XHRcdFx0XHRkYXRhWydjb3Vwb25fdHlwZSddID0gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pc19nb2xkID8gJ2dvbGQnIDogJ3ZpcCdcblx0XHRcdFx0XHRcdFx0cHVzaERhdGFbJ2NvdXBvbl9jb2RlJ10gPSB0aGlzLnN0YXRlLmNvdXBvbl9jb2RlICYmIHRoaXMuc3RhdGUuaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZCA/IFt0aGlzLnN0YXRlLmNvdXBvbl9jb2RlXSA6IFtdXG5cdFx0XHRcdFx0XHRcdHB1c2hEYXRhWydjb3Vwb25fdHlwZSddID0gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pc19nb2xkID8gJ2dvbGQnIDogJ3ZpcCdcblx0XHRcdFx0XHRcdFx0cHVzaERhdGEubWVtYmVycy5wdXNoKHBhcmFtKVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxuXG5cdFx0XHRcdFx0XHRcdGlmIChTVE9SQUdFLmlzQWdlbnQoKSkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHVzaFVzZXJEYXRhKHB1c2hEYXRhKVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKFNUT1JBR0UgJiYgU1RPUkFHRS5nZXRBbnlDb29raWUoJ3NiaV91dG0nKSAmJiB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncyAmJiB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5sZW5ndGggJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MuZmlsdGVyKHggPT4geC50eXBlID09ICdzYmlfdXRtJykubGVuZ3RoKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRsZXQgdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc2JpX3V0bScpWzBdXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRhZ3MudXRtX3RhZ3MpIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVsndXRtX3NiaV90YWdzJ10gPSB0YWdzLnV0bV90YWdzXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmxvY2F0aW9uICYmIGRvY3VtZW50LmxvY2F0aW9uLmhvc3QgJiYgZG9jdW1lbnQubG9jYXRpb24uaG9zdC5pbmNsdWRlcygnc2JpJykpIHtcblx0XHRcdFx0XHRcdFx0XHRkYXRhWyd1dG1fc2JpX3RhZ3MnXSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdHV0bV90YWdzOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHV0bV9zb3VyY2U6ICdzYmlfdXRtJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXRtX3Rlcm06ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1dG1fbWVkaXVtOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXRtX2NhbXBhaWduOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cblx0XHRcdFx0XHRcdFx0aWYgKGlzU21zKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZW5kU01TKGV4dHJhRGF0YVBhcmFtcylcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZpcENsdWJQYXkoZGF0YSwgKHJlc3ApID0+IHsgLy8gdG8gcmVxdWVzdCBmb3IgcGF5bWVudFxuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzcCAmJiByZXNwLmVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogcmVzcC5lcnJvciB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXNwLnBheW1lbnRfcmVxdWlyZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9jZXNzUGF5bWVudChyZXNwKVxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYocmVzcCAmJiByZXNwLmRhdGEpe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3NfaWQgPSAnL3ZpcC1jbHViLWFjdGl2YXRlZC1kZXRhaWxzP3BheW1lbnRfc3VjY2Vzcz10cnVlJmlkPScgKyByZXNwLmRhdGEuaWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChzdWNjZXNzX2lkKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cdHB1c2hVc2VyRGF0YShkYXRhKSB7IC8vIHRvIHNhdmUgcHJvcG9zZXIvc2VsZiBkYXRhIHRvIHRoZSBkdW1teSB0YWJsZSBpbiBjYXNlIG9mIGFnZW50IG9yIHByb3Bvc2VyIHNlbGZcblx0XHRpZihkYXRhICYmIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCAmJiBkYXRhLm1lbWJlcnMgJiYgZGF0YS5tZW1iZXJzLmxlbmd0aCAmJiBTVE9SQUdFLmlzQWdlbnQoKSl7XG5cdFx0XHRpZihkYXRhLm1lbWJlcnMubGVuZ3RoID09MSAmJiBkYXRhLm1lbWJlcnNbMF0gPT0gbnVsbCl7XG5cdFx0XHRcdFxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMucHJvcHMucHVzaE1lbWJlcnNEYXRhKGRhdGEpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c2VuZFNNUyhleHRyYURhdGFQYXJhbXMpIHtcblx0XHRsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cdFx0bGV0IGV4dHJhUGFyYW1zID0ge31cblx0XHRpZiAoZXh0cmFEYXRhUGFyYW1zICYmIGV4dHJhRGF0YVBhcmFtcy5zZW5kT25XaGF0c3VwKSB7XG5cdFx0XHRleHRyYVBhcmFtc1snbWVzc2FnZV9tZWRpdW0nXSA9ICdXSEFUU0FQUCc7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMuc2VuZEFnZW50Qm9va2luZ1VSTChudWxsLCAnc21zJywgJ3ZpcF9wdXJjaGFzZScsIHBhcnNlZCwgZXh0cmFQYXJhbXMsIChlcnIsIHJlcykgPT4geyAvL3NlbmQgcGF5bWVudCBsaW5rIGluIHNtcyB0byB1c2VyIGJ5IGFnYWVudFxuXHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiU01TIFNFTkQgRVJST1JcIiB9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNNUyBTRU5UIFNVQ0NFU1NGVUxZXCIgfSlcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0cHJvY2VlZE1lbWJlcnMoaXNfd2FpdCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93X3BvcHVwOiBmYWxzZSwgcHJvY2VlZDogaXNfd2FpdCA/IHRydWUgOiBmYWxzZSB9LCAoKSA9PiB7XG5cdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdF9idXknKSkge1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0X2J1eScpLmNsaWNrKClcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0cHJvY2VlZE1lbWJlcnNObyhpc193YWl0KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dfcG9wdXA6IGZhbHNlLCBwcm9jZWVkOiBmYWxzZSwgcG9wdXBNZW1EYXRhOiB7fSB9KVxuXHR9XG5cblx0YXBwbHlDb3Vwb25zKCkgeyAvLyBhcHBseSBjb3Vwb25zIFxuXHRcdGxldCBzZWxlY3RlZF9wbGFuX2lkID0gbnVsbFxuXHRcdGlmICh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4pLmxlbmd0aCA+IDAgJiYgIXRoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50KSB7XG5cdFx0XHQvLyB0aGlzLnByb3BzLmdldENvdXBvbnMoe3Byb2R1Y3RJZDp0aGlzLnN0YXRlLmlzX2dvbGQ/ODoxMSxnb2xkX3BsYW5faWQ6dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZH0pXG5cdFx0XHRzZWxlY3RlZF9wbGFuX2lkID0gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZFxuXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9jb3Vwb24vdmlwLyR7c2VsZWN0ZWRfcGxhbl9pZH0vJHt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlzX2dvbGQgPyA4IDogMTF9P2RlYWxfcHJpY2U9JHt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmRlYWxfcHJpY2V9JmNhcnRfaXRlbT1gKVxuXHRcdH1cblx0fVxuXG5cdHJlbW92ZUNvdXBvbigpIHtcblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGdvbGRfcHVzaF9kYXRhPXt9XG4gICAgICAgIGxldCBwYXJhbVxuICAgICAgICBnb2xkX3B1c2hfZGF0YS5wbGFuID0gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhblxuICAgICAgICBnb2xkX3B1c2hfZGF0YS5kdW1teV9kYXRhX3R5cGUgPSAnUExBTl9QVVJDSEFTRSdcbiAgICAgICAgZ29sZF9wdXNoX2RhdGEubWVtYmVycyA9IFtdXG4gICAgICAgIGdvbGRfcHVzaF9kYXRhLmNvdXBvbl9kYXRhID0gW11cbiAgICAgICAgZ29sZF9wdXNoX2RhdGEudXRtX3Nwb190YWdzID0gcGFyc2VkXG4gICAgICAgIGdvbGRfcHVzaF9kYXRhLmlzX2FnZW50ID0gZmFsc2VcbiAgICAgICAgZ29sZF9wdXNoX2RhdGEuY291cG9uX3R5cGUgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlzX2dvbGQ/J2dvbGQnOid2aXAnXG4gICAgICAgIHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBhcmFtID0gdGhpcy5wcm9wcy52aXBDbHViTWVtYmVyRGV0YWlsc1t2YWxba2V5XV1cbiAgICAgICAgICAgIGdvbGRfcHVzaF9kYXRhLm1lbWJlcnMucHVzaChwYXJhbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYoU1RPUkFHRS5pc0FnZW50KCkpe1xuICAgICAgICAgICAgZ29sZF9wdXNoX2RhdGEuaXNfYWdlbnQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLnB1c2hVc2VyRGF0YShnb2xkX3B1c2hfZGF0YSkgLy8gdG8gc2F2ZSBwcm9wb3Nlci9zZWxmIGRhdGEgdG8gdGhlIGR1bW15IHRhYmxlIGluIGNhc2Ugb2YgYWdlbnQgb3IgcHJvcG9zZXIgc2VsZlxuICAgICAgICB9XHQgXG5cdFx0dGhpcy5wcm9wcy5yZW1vdmVWaXBDb3Vwb25zKCkgLy8gdG8gcmVzZXQgY291cG9ucyB0byBpbnRpYWwgc3RhdGVcblx0fVxuXG5cdHJlbW92ZU1lbWJlckZvcm0oaWQpe1xuXHRcdGxldCBuZXdfZGF0YSA9IFtdXG5cdFx0Ly8gdGhpcy5zZXRTdGF0ZSh7c2hvd0NvbmZpcm1hdGlvblBvcHVwOiAnb3BlbicsdG9fYmVfcmVtb3ZlX2lkOmlkfSlcblx0XHRpZih0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZCAmJiB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5sZW5ndGgpe1xuXHRcdFx0bmV3X2RhdGEgPSAgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQuZmlsdGVyKHggPT4geC5tZW1iZXJfZm9ybV9pZCAhPSBpZClcblx0XHRcdHRoaXMucHJvcHMucmVtb3ZlTWVtYmVycyhuZXdfZGF0YSlcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlybWF0aW9uUG9wdXA6ICdjbG9zZScsdG9fYmVfcmVtb3ZlX2lkOicnIH0pXG5cdFx0fVxuXHR9XG5cblx0cHJpY2VDb25maXJtYXRpb25Qb3B1cChjaG9pY2UpIHtcblx0XHRsZXQgbmV3X2RhdGEgPSBbXVxuICAgICAgICBpZiAoIWNob2ljZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDb25maXJtYXRpb25Qb3B1cDogJ2Nsb3NlJyB9KVxuICAgICAgICB9IGVsc2Uge1xuXHRcdFx0aWYodGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQgJiYgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubGVuZ3RoKXtcblx0XHRcdFx0bmV3X2RhdGEgPSAgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQuZmlsdGVyKHggPT4geC5tZW1iZXJfZm9ybV9pZCAhPSB0aGlzLnN0YXRlLnRvX2JlX3JlbW92ZV9pZClcblx0XHRcdFx0dGhpcy5wcm9wcy5yZW1vdmVNZW1iZXJzKG5ld19kYXRhKVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd0NvbmZpcm1hdGlvblBvcHVwOiAnY2xvc2UnLHRvX2JlX3JlbW92ZV9pZDonJyB9KVxuXHRcdFx0fVxuICAgICAgICB9XG4gICAgfVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IGNoaWxkXG5cdFx0bGV0IGFkdWx0XG5cdFx0bGV0IHVzZXJQcm9maWxlXG5cdFx0bGV0IHByb3Bvc2VyX2lkID0gMFxuXHRcdC8vIGxldCBzZWxlY3RlZFByb2ZpbGVJZCA9IHBhcnNlSW50KHRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSkgLy8gdG8gYmUgZGVsZXRlZFxuXHRcdGlmICh0aGlzLnByb3BzLlVTRVIgJiYgdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlID09IDk5OTk5OSkge1xuXHRcdFx0XHRwcm9wb3Nlcl9pZCA9IDBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByb3Bvc2VyX2lkID0gdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCBzaG93X2V4dHJhX2ZpZWxkcyA9IGZhbHNlXG5cblx0XHRpZiAodGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQgJiYgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQuZmlsdGVyKHggPT4geC5pc1VzZXJTZWxlY3RlZFByb2ZpbGUpLm1hcCgoZGF0YSwgaSkgPT4ge1xuXHRcdFx0XHRwcm9wb3Nlcl9pZCA9IGRhdGFbaV1cblx0XHRcdFx0c2hvd19leHRyYV9maWVsZHMgPSB0cnVlXG5cdFx0XHR9KVxuXHRcdH1cblx0XHQvLyBsZXQgc2VsZWN0ZWRQcm9maWxlSWQgPSBwYXJzZUludCh0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpIC8vIHRvIGJlIGRlbGV0ZWRcblx0XHRsZXQgc2VsZWN0ZWRNZW1iZXJzSWQgPSAwXG5cblx0XHRpZiAodGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbikubGVuZ3RoID4gMCkge1xuXG5cdFx0XHR1c2VyUHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKVxuXG5cdFx0XHR2YXIgbiA9ICh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLnRvdGFsX2FsbG93ZWRfbWVtYmVycyAtIDEpXG5cdFx0XHRpZiAobiAhPT0gMCkge1xuXHRcdFx0XHRjaGlsZCA9IHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ2FkdWx0JykubWFwKChkYXRhLCBpKSA9PiB7XG5cdFx0XHRcdFx0Ly8gc2VsZWN0ZWRNZW1iZXJzSWQrK1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxWaXBQcm9wb3NlckZhbWlseSB7Li4udGhpcy5wcm9wc30gXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2l9IFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVtYmVyX2lkPXtkYXRhW2ldfSBcblx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgbWVtYmVyXyR7aX1gfSBcblx0XHRcdFx0XHRcdFx0XHRcdHBhcmFtX2lkID0ge2l9IFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVtYmVyX3ZpZXdfaWQ9IHtpfSBcblx0XHRcdFx0XHRcdFx0XHRcdHZhbGlkYXRlRXJyb3JzPXt0aGlzLnN0YXRlLnZhbGlkYXRlRXJyb3JzW2RhdGFbaV1dIHx8IFtdfSBcblx0XHRcdFx0XHRcdFx0XHRcdHNob3dfc2VsZWN0ZWRfcHJvZmlsZXM9e3RoaXMuc3RhdGUuc2hvd19zZWxlY3RlZF9wcm9maWxlc30gXG5cdFx0XHRcdFx0XHRcdFx0XHRtZW1iZXJfZm9ybV9pZCA9IHtpfVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNVc2VyU2VsZWN0ZWRQcm9maWxlID0ge2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0c2hvd19leHRyYV9maWVsZHMgPSB7c2hvd19leHRyYV9maWVsZHN9XG5cdFx0XHRcdFx0XHRcdFx0XHR1c2VyX2VtYWlsID0ge3RoaXMuc3RhdGUudXNlcl9lbWFpbH1cblx0XHRcdFx0XHRcdFx0XHRcdHVzZXJfcGhvbmVfbnVtYmVyID0ge3RoaXMuc3RhdGUudXNlcl9waG9uZV9udW1iZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRpc19kb2JfZXJyb3I9e3RoaXMuc3RhdGUuaXNfZG9iX2Vycm9yfVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNfdG9iZV9yZW1vdmVfb3B0aW9uID0ge2RhdGEudG9fYmVfcmVtb3ZlfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVtb3ZlTWVtYmVyRm9ybSA9IHt0aGlzLnJlbW92ZU1lbWJlckZvcm0uYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5pc1NhbGVzQWdlbnQgJiYgdGhpcy5wcm9wcy5pc0FnZW50ID8gJydcblx0XHRcdFx0XHRcdDogPFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0gLz5cblx0XHRcdFx0fVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93Q29uZmlybWF0aW9uUG9wdXAgPT0gJ29wZW4nP1xuXHRcdFx0XHRcdDxCb29raW5nQ29uZmlybWF0aW9uUG9wdXAgey4uLnRoaXMucHJvcHN9IHByaWNlQ29uZmlybWF0aW9uUG9wdXA9e3RoaXMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMpfSBpc19nb2xkID0ge3RydWV9IC8+XG5cdFx0XHRcdFx0OicnXG5cdFx0XHRcdH1cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luIGNhcmRNYWluUGFkZGluZ1JtdlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMgZHNrdHAtcm93LWd1dHRlclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgaW5zLW1haW4tcGFkZGluZ1wiPlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93X3BvcHVwID9cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwLW92ZXJsYXkgXCIgPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBhZGlpbmctc3JjaC1lbCBwYi0wXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0gY2xhc3NOYW1lPVwic3JjaC1lbC1jb25lbnRcIj4ge3RoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLmxlbmd0aH0gTWVtYmVycyBBZGRlZDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aXAtcG9wLXRhYmxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aXAtc24tdGJsIG0tMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUucG9wdXBNZW1EYXRhICYmIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUucG9wdXBNZW1EYXRhKS5sZW5ndGggPiAwID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmVudHJpZXModGhpcy5zdGF0ZS5wb3B1cE1lbURhdGEpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB2YWwuaXNfYWxyZWFkeV91c2VyID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IDx0YWJsZSBrZXk9e2tleX0gY2xhc3NOYW1lPVwidmlwLWFjcmQtY29udGVudCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKjx0aGVhZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjb2xTcGFuPSczJz48cCBjbGFzc05hbWU9XCJ2aXAtcG9wLXRibC1oZFwiPnt2YWwuZmlyc3RfbmFtZX0gdmFsLmxhc3RfbmFtZTwvcD48L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGhlYWQ+Ki99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGg+TmFtZTwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aD5HZW5kZXI8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGg+RE9CPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17e3RleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJ319Pnt2YWwuZmlyc3RfbmFtZX08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsLnRpdGxlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17eyAndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyB9fSA+e3ZhbC50aXRsZSA9PSAnbXIuJyA/ICdtJyA6ICdmJ308L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiB2YWwuZ2VuZGVyID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt7ICd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnIH19ID57dmFsLmdlbmRlcn08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPnt2YWwuZG9ifTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1idG4tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19IG9uQ2xpY2s9e3RoaXMucHJvY2VlZE1lbWJlcnNOby5iaW5kKHRoaXMsIDApfT5DYW5jZWw8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPHNwYW4gY2xhc3NOYW1lPVwic3JjLWVsLWJ0bi1ib3JkZXJcIj48L3NwYW4+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fSBvbkNsaWNrPXt0aGlzLnByb2NlZWRNZW1iZXJzLmJpbmQodGhpcywgMSl9PlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZmlsZS1ib29rLXNjcmVlblwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluc3VyYW5jZS1tZW1iZXItY29udGFpbmVyXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cIm1iLTBcIiBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDBweCA2cHgnIH19Pk1lbWJlciBEZXRhaWxzPC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aXAtd3JuZy1tc3NnXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCA/PHNwYW4+TWVtYmVyIGRldGFpbHMgY2Fu4oCZdCBiZSBlZGl0ZWQgYWZ0ZXIgc3VibWlzc2lvbjwvc3Bhbj46IDxzcGFuPkdvbGQgTWVtYmVyc2hpcCBwbGFuIHdpbGwgYmUgYWN0aXZhdGVkIG9uIHRoZSBiZWxvdyBwcm9maWxlIG1vYmlsZSBudW1iZXIgYW5kIGNhbiBhZGQgbW9yZSBtZW1iZXJzIGxhdGVyPC9zcGFuPn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBnb2xkVXNlckFkZG9uXCIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgIGluc3VyYW5jZS1tZW1iZXItZGV0YWlscyAke3RoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50ID8gJycgOiAnbXJ0LTIwJ31gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshdGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQgPyA8VmlwUHJvcG9zZXIgey4uLnRoaXMucHJvcHN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgbWVtYmVyXyR7cHJvcG9zZXJfaWR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVtYmVyX2lkPXtwcm9wb3Nlcl9pZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsaWRhdGVFcnJvcnM9e3RoaXMuc3RhdGUudmFsaWRhdGVFcnJvcnNbcHJvcG9zZXJfaWRdIHx8IFtdfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZW1iZXJfZm9ybV9pZD17MH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd19zZWxlY3RlZF9wcm9maWxlcz17dGhpcy5zdGF0ZS5zaG93X3NlbGVjdGVkX3Byb2ZpbGVzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1VzZXJTZWxlY3RlZFByb2ZpbGU9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhZGRNZW1iZXJzPXt0aGlzLmFkZE1lbWJlcnMuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd19leHRyYV9maWVsZHMgPSB7c2hvd19leHRyYV9maWVsZHN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVzZXJfZW1haWwgPSB7dGhpcy5zdGF0ZS51c2VyX2VtYWlsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1c2VyX3Bob25lX251bWJlciA9IHt0aGlzLnN0YXRlLnVzZXJfcGhvbmVfbnVtYmVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc19kb2JfZXJyb3I9e3RoaXMuc3RhdGUuaXNfZG9iX2Vycm9yfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiA8VmlwQ2x1YkFjdGl2YXRlZE1lbWJlckRldGFpbHMgey4uLnRoaXMucHJvcHN9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IXRoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50ID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZpcENvdXBvbnMgJiYgdGhpcy5wcm9wcy52aXBDb3Vwb25zLmxlbmd0aCA+IDAgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY3BuLWJsdXIgbXJiLTE1IGN1cnNvci1wb2ludGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgZC1mbGV4IGpjLXNwYWNlYiBtdC0xMFwiID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0bGUgY291cG9uLXRleHQgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIG0tMFwiIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9jb3Vwb24tYXBwbGllZC5zdmdcIn0gY2xhc3NOYW1lPVwidmlzaXQtdGltZS1pY29uIG1yLTEwXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPkNvdXBvbiBBcHBsaWVkPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInRpdGxlIG0tMCBkLWZsZXggYWxpZ24taXRlbS1jZW50ZXJcIiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgbWFyZ2luUmlnaHQ6IDEzLCBmb250U2l6ZTogJzEycHgnLCBtYXJnaW5Ub3A6ICc2cHgnIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibXItMTBcIj57dGhpcy5wcm9wcy52aXBDb3Vwb25zWzBdLmNvZGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzdHlsZT17eyB3aWR0aDogMTcgfX0gb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5yZW1vdmVDb3Vwb24oKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNfcGF5bWVudF9jb3Vwb25fYXBwbGllZDogZmFsc2UsIGNvdXBvbl9kaXNjb3VudDogbnVsbCB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY3Jvc3Muc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNwbi1ibHVyIG1yYi0xNSBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9e3RoaXMuYXBwbHlDb3Vwb25zLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IGQtZmxleCBqYy1zcGFjZWIgbXQtMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwidGl0bGUgY291cG9uLXRleHQgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIG0tMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzdHlsZT17eyB3aWR0aDogJzI0cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL29mci1jcG4uc3ZnXCJ9IGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvbiBtci0xMFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5IQVZFIEEgQ09VUE9OPzwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlzaXQtdGltZS1pY29uIGNvdXBvbi1pY29uLWFycm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3JpZ2h0LWFycm93LnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtjaGlsZH1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCAmJiB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZCAmJiB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YSAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YSkubGVuZ3RoICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnBsYW4gJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEucGxhbi5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlcikubGVuZ3RoICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzKS5sZW5ndGggJiYgKCh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycy5sZW5ndGggKyB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5sZW5ndGgpIDwgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEucGxhblswXS50b3RhbF9hbGxvd2VkX21lbWJlcnMpP1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC1tZW0tYmxrXCIgb25DbGljaz17dGhpcy5hZGRNZW1iZXJzLmJpbmQodGhpcywgZmFsc2UpfT4gPGltZyBjbGFzc05hbWU9XCJ2aXAtYWRkLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLW1lbS5zdmcnfSAvPkFkZCBNZW1iZXI8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0XHRcdFx0ey8qJHt0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycy5sZW5ndGggKyB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5sZW5ndGggPT0gMiA/ICczcmQnIDogdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMubGVuZ3RoICsgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubGVuZ3RoID09IDMgPyAnNHRoJyA6IHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzLmxlbmd0aCArIHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLmxlbmd0aCA9PSA0ID8gJ0Fub3RoZXInIDogJyd9Ki99XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHQhU1RPUkFHRS5pc0FnZW50KCkgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuKS5sZW5ndGggPiAwICYmICF0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCAmJiAhdGhpcy5wcm9wcy5pc0FnZW50ID9cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWxnIHN0aWNreS1idG5cIiBvbkNsaWNrPXt0aGlzLnByb2NlZWRQbGFuLmJpbmQodGhpcywgZmFsc2UpfT5Db250aW51ZSB0byBQYXkg4oK5e3RoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uZGVhbF9wcmljZSAtIHRoaXMuc3RhdGUuY291cG9uX2Rpc2NvdW50fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb290LWJ0bi1zdWItc3BhblwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0OiAhU1RPUkFHRS5pc0FnZW50KCkgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuKS5sZW5ndGggPiAwICYmICF0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCAmJiB0aGlzLnByb3BzLmlzQWdlbnQgPT09ICdmYWxzZScgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCBidG4tbGcgdGV4dC1sZyBzdGlja3ktYnRuXCIgb25DbGljaz17dGhpcy5wcm9jZWVkUGxhbi5iaW5kKHRoaXMsIGZhbHNlKX0+Q29udGludWUgdG8gUGF5IOKCuXt0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmRlYWxfcHJpY2UgLSB0aGlzLnN0YXRlLmNvdXBvbl9kaXNjb3VudH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb290LWJ0bi1zdWItc3BhblwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHQhU1RPUkFHRS5pc0FnZW50KCkgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuKS5sZW5ndGggPiAwICYmIDxkaXYgY2xhc3NOYW1lPVwidi1idG4tcHJpbWFyeSBkLWZsZXggYWxpZ24tZmxleC1zcC1idCBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIHN0aWNreS1idG5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pc0FnZW50ID09PSAndHJ1ZScgJiYgdGhpcy5wcm9wcy5pc1NhbGVzQWdlbnQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgc3RpY2t5LWJ0biBwLTAgdi1idG4gIGJ0bi1sZyBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIGJ1dHRvbnMtYWRkY2FydC1jb250YWluZXIgXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLXNocG5nLWNhcnQtYnRuXCIgZGF0YS1kaXNhYmxlZD1cInRydWVcIiBvbkNsaWNrPXt0aGlzLnByb2NlZWRQbGFuLmJpbmQodGhpcywgdHJ1ZSl9PlNlbmQgU01TXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb290LWJ0bi1zdWItc3BhblwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4tcHJpbWFyeSBib29rLWJ0bi1tcmduLWFkanVzdFwiIG9uQ2xpY2s9e3RoaXMucHJvY2VlZFBsYW4uYmluZCh0aGlzLCBmYWxzZSl9PkNvbnRpbnVlIHRvIFBheSDigrl7dGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5kZWFsX3ByaWNlIC0gdGhpcy5zdGF0ZS5jb3Vwb25fZGlzY291bnR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9vdC1idG4tc3ViLXNwYW5cIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICF0aGlzLnByb3BzLmlzQWdlbnQgJiYgdGhpcy5wcm9wcy5pc0FnZW50ID09PSAnZmFsc2UnID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnByb2NlZWRQbGFuLmJpbmQodGhpcywgZmFsc2UpfT5Db250aW51ZSB0byBQYXkg4oK5e3RoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4uZGVhbF9wcmljZSAtIHRoaXMuc3RhdGUuY291cG9uX2Rpc2NvdW50fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb290LWJ0bi1zdWItc3BhblwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHQhU1RPUkFHRS5pc0FnZW50KCkgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50ICYmICF0aGlzLnByb3BzLmlzU2FsZXNBZ2VudCAmJiAhdGhpcy5wcm9wcy5pc0FnZW50ID9cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gaWQ9XCJzdWJtaXRfYnV5XCIgY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWxnIHN0aWNreS1idG5cIiBvbkNsaWNrPXt0aGlzLnByb2NlZWRQbGFuLmJpbmQodGhpcywgZmFsc2UpfT5Eb25lXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvb3QtYnRuLXN1Yi1zcGFuXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0U1RPUkFHRS5pc0FnZW50KCkgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50ICYmICF0aGlzLnByb3BzLmlzU2FsZXNBZ2VudCAmJiAhdGhpcy5wcm9wcy5pc0FnZW50ID9cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWxnIHN0aWNreS1idG5cIiBvbkNsaWNrPXt0aGlzLnByb2NlZWRQbGFuLmJpbmQodGhpcywgdHJ1ZSl9PlNlbmQgU01TXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvb3QtYnRuLXN1Yi1zcGFuXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6IFNUT1JBR0UuaXNBZ2VudCgpICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbikubGVuZ3RoID4gMCAmJiAhdGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQgJiYgIXRoaXMucHJvcHMuaXNTYWxlc0FnZW50ICYmICF0aGlzLnByb3BzLmlzQWdlbnQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXhlZCBzdGlja3ktYnRuIHAtMCB2LWJ0biAgYnRuLWxnIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgYnV0dG9ucy1hZGRjYXJ0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJ2LWJ0bi1wcmltYXJ5IGJvb2stYnRuLW1yZ24tYWRqdXN0XCIgb25DbGljaz17dGhpcy5wcm9jZWVkUGxhbi5iaW5kKHRoaXMsIHRydWUpfT5TZW5kIFNNU1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvb3QtYnRuLXN1Yi1zcGFuXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC1zaHBuZy1jYXJ0LWJ0blwiIG9uQ2xpY2s9e3RoaXMucHJvY2VlZFBsYW4uYmluZCh0aGlzLCB0cnVlLCB7IHNlbmRPbldoYXRzdXA6IHRydWUgfSl9PjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy93YS1sb2dvLXNtLnBuZyd9Lz5TZW5kIG9uIFdoYXRzYXBwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9vdC1idG4tc3ViLXNwYW5cIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj7CuFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8Q2hhdFBhbmVsIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PERpc2NsYWltZXIgaXNWaXA9e3RydWV9IC8+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLnBheW1lbnREYXRhID8gPFBheW1lbnRGb3JtIHBheW1lbnREYXRhPXt0aGlzLnN0YXRlLnBheW1lbnREYXRhfSByZWZzPSdvcGQnIC8+IDogXCJcIlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFZpcENsdWJNZW1iZXJEZXRhaWxzVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IEluc3VyYW5jZVByb29mcyBmcm9tICcuL2luc3VyYW5jZVByb29mcy5qcydcbmltcG9ydCBWaXBMb2dpblBvcHVwIGZyb20gJy4vdmlwQ2x1YlBvcHVwLmpzJ1xuaW1wb3J0IE5ld0RhdGVTZWxlY3RvciBmcm9tICcuLi9jb21tb25zL25ld0RhdGVTZWxlY3Rvci5qcydcblxuY2xhc3MgVmlwUHJvcG9zZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuYW1lOiAnJyxcblx0XHRcdGVtYWlsOiB0aGlzLnByb3BzLnVzZXJfZW1haWwsXG5cdFx0XHRnZW5kZXI6ICcnLFxuXHRcdFx0ZG9iOiAnJyxcblx0XHRcdGlkOiB0aGlzLnByb3BzLm1lbWJlcl9pZCxcblx0XHRcdHByb2ZpbGVfZmxhZzogdHJ1ZSxcblx0XHRcdHByb2ZpbGVfaWQ6IG51bGwsXG5cdFx0XHRwcm9maWxlOicnLFxuXHRcdFx0bWVtYmVyX2Zvcm1faWQ6dGhpcy5wcm9wcy5tZW1iZXJfZm9ybV9pZCxcblx0XHRcdHVzZXJQcm9maWxlczp7fSxcblx0XHRcdHNob3dQb3B1cDpmYWxzZSxcblx0XHRcdGlzVXNlclNlbGVjdGVkUHJvZmlsZTp0aGlzLnByb3BzLmlzVXNlclNlbGVjdGVkUHJvZmlsZSxcblx0XHRcdHBob25lX251bWJlcjp0aGlzLnByb3BzLnVzZXJfcGhvbmVfbnVtYmVyLFxuXHRcdFx0aXNEb2JWYWxpZGF0ZWQ6ZmFsc2UsXG4gICAgICAgICAgICBpc190b2JlX2R1bW15X3VzZXI6ZmFsc2UsXG4gICAgICAgICAgICBpc0ZvcmNlVXBkYXRlRG9iOmZhbHNlXG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGxldCBwcm9maWxlXG5cdFx0bGV0IGlzRHVtbXlVc2VyXG5cdFx0aWYgKHRoaXMucHJvcHMuVVNFUiAmJiB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHNbdGhpcy5wcm9wcy5tZW1iZXJfaWRdICYmICF0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCkge1xuXHRcdFx0aWYgKCFpc0R1bW15VXNlcikge1xuXHRcdFx0XHRwcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy52aXBDbHViTWVtYmVyRGV0YWlsc1t0aGlzLnByb3BzLm1lbWJlcl9pZF0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy52aXBDbHViTWVtYmVyRGV0YWlsc1t0aGlzLnByb3BzLm1lbWJlcl9pZF0pXG5cdFx0XHR9XG5cdFx0XHRpZihPYmplY3Qua2V5cyhwcm9maWxlKS5sZW5ndGggPiAwKXtcblx0XHRcdFx0aXNEdW1teVVzZXIgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pc0R1bW15VXNlclxuXHRcdFx0XHRpZihwcm9maWxlLmlzRHVtbXlVc2VyKXtcblx0XHRcdFx0XHRwcm9maWxlLmlkID0gMFxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2lkOjB9LCgpPT57XG5cdCAgICBcdFx0XHRcdHRoaXMuZ2V0VXNlckRldGFpbHMocHJvZmlsZSkgLy8gZmlsbCB1c2VyIGRldGFpbHMgaW4gZm9ybVxuXHQgICAgXHRcdFx0fSlcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7aWQ6cHJvZmlsZS5pZH0sKCk9Pntcblx0ICAgIFx0XHRcdFx0dGhpcy5nZXRVc2VyRGV0YWlscyhwcm9maWxlKSAvLyBmaWxsIHVzZXIgZGV0YWlscyBpbiBmb3JtXG5cdCAgICBcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHRpZiAocHJvcHMuVVNFUiAmJiBwcm9wcy5VU0VSLnByb2ZpbGVzICYmIE9iamVjdC5rZXlzKHByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5wcm9maWxlX2ZsYWcgJiYgIXByb3BzLmlzX2Zyb21fcGF5bWVudCkge1xuXHRcdFx0bGV0IGlzRHVtbXlVc2VyID0gcHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pc0R1bW15VXNlclxuXHRcdFx0aWYgKE9iamVjdC5rZXlzKHByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzKS5sZW5ndGggPiAwKSB7IC8vIHJldHJpZXZlIGFscmVhZHkgbWVtYmVyIGRldGFpbHMgZnJvbSB1c2VyIHN0b3JlXG5cdFx0XHRcdGxldCBwcm9maWxlXG5cdFx0XHRcdGlmICghaXNEdW1teVVzZXIpIHtcblx0XHRcdFx0XHRwcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHNbcHJvcHMubWVtYmVyX2lkXSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHNbcHJvcHMubWVtYmVyX2lkXSlcblx0XHRcdFx0fVx0XHRcdFx0XG5cdFx0XHRcdGlmKHByb2ZpbGUgJiYgT2JqZWN0LmtleXMocHJvZmlsZSkubGVuZ3RoKXtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtpZDpwcm9maWxlLmlkLHByb2ZpbGVfZmxhZzpmYWxzZX0sKCk9Pntcblx0XHRcdCAgICBcdFx0dGhpcy5nZXRVc2VyRGV0YWlscyhwcm9maWxlKSAvLyBmaWxsIHVzZXIgZGV0YWlscyBpbiBmb3JtXHRcblx0XHRcdCAgICBcdH0pXG5cdFx0XHQgICAgfVxuXHRcdFx0fWVsc2UgaWYgKHByb3BzLlVTRVIgJiYgcHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyhwcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGggPiAwICAmJiBwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKSB7XG5cdFx0XHRcdGxldCBwcm9maWxlXG5cdFx0XHRcdGxldCBleGl0c3RpbmdfdXNlcl9wcm9maWxlXG5cdFx0XHRcdGlmKHByb3BzLnNhdmVkTWVtYmVyRGF0YSAmJiBwcm9wcy5zYXZlZE1lbWJlckRhdGEubGVuZ3RoID4gMCl7IC8vIHJldHJpZXZlIGFscmVhZHkgbWVtYmVyIGRldGFpbHMgZnJvbSB1c2VyIGR1bW15IHRhYmxlIGluIGNhc2Ugb2YgYWdlbnRcblx0XHRcdFx0XHRpZihwcm9wcy5VU0VSICYmIE9iamVjdC5rZXlzKHByb3BzLlVTRVIpLmxlbmd0aCAmJiBwcm9wcy5VU0VSLnByb2ZpbGVzICYmIE9iamVjdC5rZXlzKHByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCl7XG5cdFx0XHRcdFx0XHRleGl0c3RpbmdfdXNlcl9wcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5tZW1iZXJfaWRdKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZihwcm9wcy5zYXZlZE1lbWJlckRhdGEubGVuZ3RoID09IDEgJiYgcHJvcHMuc2F2ZWRNZW1iZXJEYXRhWzBdID09IG51bGwpe1xuXHRcdFx0XHRcdFx0cHJvZmlsZSA9IHsuLi50aGlzLnN0YXRlfVxuXHRcdFx0XHRcdFx0cHJvZmlsZS5pZCA9IHRoaXMucHJvcHMubWVtYmVyX2lkXG5cdFx0XHRcdFx0XHRpZihwcm9maWxlICYmIE9iamVjdC5rZXlzKHByb2ZpbGUpLmxlbmd0aCA+IDApe1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtwcm9maWxlX2ZsYWc6ZmFsc2V9KVxuXHRcdFx0ICAgIFx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHByb2ZpbGUgPSBwcm9wcy5zYXZlZE1lbWJlckRhdGEuZmlsdGVyKCh4PT54LmlkID09IHByb3BzLm1lbWJlcl9pZCkpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHByb2ZpbGUgJiYgcHJvZmlsZS5sZW5ndGggPiAwKXtcblx0XHRcdFx0XHRcdHByb2ZpbGUgPSBwcm9maWxlWzBdXG5cdFx0XHRcdFx0XHRpZihleGl0c3RpbmdfdXNlcl9wcm9maWxlICYmIE9iamVjdC5rZXlzKGV4aXRzdGluZ191c2VyX3Byb2ZpbGUpLmxlbmd0aCl7XG5cdFx0XHRcdFx0XHRcdHByb2ZpbGUubmFtZSA9IGV4aXRzdGluZ191c2VyX3Byb2ZpbGUubmFtZVxuXHRcdFx0XHRcdFx0XHRwcm9maWxlLmRvYiA9IGV4aXRzdGluZ191c2VyX3Byb2ZpbGUuZG9iXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtpZDpwcm9maWxlLmlkLHByb2ZpbGVfZmxhZzpmYWxzZX0sKCk9Pntcblx0XHRcdCAgICBcdFx0XHR0aGlzLmdldFVzZXJEZXRhaWxzKHByb2ZpbGUpXHQvLyBmaWxsIHVzZXIgZGV0YWlscyBpbiBmb3JtXG5cdFx0XHQgICAgXHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ZWxzZXsgLy8gcmV0cmlldmUgYWxyZWFkeSBtZW1iZXIgZGV0YWlscyBmcm9tIHVzZXIgcHJvZmlsZXNcblx0XHRcdFx0XHRwcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSlcblx0XHRcdFx0XHRpZiAocHJvZmlsZSAmJiBPYmplY3Qua2V5cyhwcm9maWxlKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGlmKHByb2ZpbGUuaXNEdW1teVVzZXIpe1xuXHRcdFx0XHRcdFx0XHRwcm9maWxlLmlkID0gMFxuXHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtpZDowLHByb2ZpbGVfZmxhZzpmYWxzZX0sKCk9Pntcblx0XHRcdCAgICBcdFx0XHRcdHRoaXMuZ2V0VXNlckRldGFpbHMocHJvZmlsZSkvLyBmaWxsIHVzZXIgZGV0YWlscyBpbiBmb3JtXHRcblx0XHRcdCAgICBcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2lkOnByb2ZpbGUuaWQscHJvZmlsZV9mbGFnOmZhbHNlfSwoKT0+e1xuXHRcdFx0ICAgIFx0XHRcdFx0dGhpcy5nZXRVc2VyRGV0YWlscyhwcm9maWxlKVx0Ly8gZmlsbCB1c2VyIGRldGFpbHMgaW4gZm9ybVxuXHRcdFx0ICAgIFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlUG9wdXAobmV3UHJvZmlsZWlkLCBtZW1iZXJfaWQsIG5ld1Byb2ZpbGUpIHsgLy9zZWxlY3QgZnJvbSBwcm9maWxlXG5cdFx0aWYobmV3UHJvZmlsZWlkICE9PSAnJyl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsuLi5uZXdQcm9maWxlLHByb2ZpbGVfZmxhZzp0cnVlfSlcblx0XHRcdG5ld1Byb2ZpbGUuaXNVc2VyU2VsZWN0ZWRQcm9maWxlPXRydWVcblx0XHRcdG5ld1Byb2ZpbGUuaXNfdG9iZV9kdW1teV91c2VyID0gZmFsc2Vcblx0XHRcdHRoaXMucHJvcHMuc2VsZWN0VmlwVXNlclByb2ZpbGUobmV3UHJvZmlsZWlkLCBtZW1iZXJfaWQsIG5ld1Byb2ZpbGUsIDApIC8vIHNlbGVjdCBwcm9maWxlIGZyb20gb3B0aW9uXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c2hvd1BvcHVwOiAhdGhpcy5zdGF0ZS5zaG93UG9wdXAsXG5cdFx0XHRcdHByb2ZpbGVfaWQ6IG5ld1Byb2ZpbGVpZCxcblx0XHRcdFx0aWQ6bmV3UHJvZmlsZWlkLFxuXHRcdFx0XHRpc0ZvcmNlVXBkYXRlRG9iOnRydWVcblx0XHRcdH0sKCkgPT57XG5cdFx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KCk7XG5cdFx0XHR9KVxuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiAhdGhpcy5zdGF0ZS5zaG93UG9wdXAsaXNGb3JjZVVwZGF0ZURvYjpmYWxzZX0pXG5cdFx0fVxuXHR9XG5cblx0aGlkZVNlbGVjdFByb2ZpbGVQb3B1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93UG9wdXA6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuXHRnZXRVc2VyRGV0YWlscyhwcm9maWxlKSB7XG5cdFx0bGV0IGVtcHR5X3N0YXRlID17fVxuXHRcdGlmKHByb2ZpbGUuaXNfdG9iZV9kdW1teV91c2VyKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoey4uLmVtcHR5X3N0YXRlLG5hbWU6Jyd9LCgpPT57XG5cdFx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KClcblx0XHRcdH0pXG5cdFx0fVxuXHRcdGlmKE9iamVjdC5rZXlzKHByb2ZpbGUpLmxlbmd0aCA+IDApe1xuXHRcdFx0aWYocHJvZmlsZS5pZCl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3Byb2ZpbGVfaWQ6cHJvZmlsZS5pZD9wcm9maWxlLmlkOicnfSlcblx0XHRcdH1cblx0XHRcdGlmKHByb2ZpbGUucHJvZmlsZSl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3Byb2ZpbGVfaWQ6cHJvZmlsZS5wcm9maWxlP3Byb2ZpbGUucHJvZmlsZTonJ30pXG5cdFx0XHR9XG5cdFx0XHRpZihwcm9maWxlLmdlbmRlciA9PSAnbScpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtnZW5kZXI6cHJvZmlsZS5nZW5kZXI/cHJvZmlsZS5nZW5kZXI6JycsdGl0bGU6ICdtci4nfSlcblx0XHRcdH1lbHNlIGlmKHByb2ZpbGUuZ2VuZGVyID09ICdmJyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2dlbmRlcjpwcm9maWxlLmdlbmRlcj9wcm9maWxlLmdlbmRlcjonJyx0aXRsZTogJ21pc3MnfSlcblx0XHRcdH1cblxuXHRcdFx0aWYocHJvZmlsZS5uYW1lID09ICdVc2VyJyB8fCBwcm9maWxlLm5hbWUgPT0gJ3VzZXInKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IG5hbWU6Jyd9KVxuXHRcdFx0fWVsc2UgaWYocHJvZmlsZS5uYW1lKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IG5hbWU6cHJvZmlsZS5uYW1lP3Byb2ZpbGUubmFtZTonJ30pXG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCl7XG5cdFx0XHRcdGlmKHByb2ZpbGUuZmlyc3RfbmFtZSl7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7bmFtZTpwcm9maWxlLmZpcnN0X25hbWU/cHJvZmlsZS5maXJzdF9uYW1lOnByb2ZpbGUubmFtZT9wcm9maWxlLm5hbWU6Jyd9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihwcm9maWxlLmlzX3RvYmVfZHVtbXlfdXNlcil7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2lzX3RvYmVfZHVtbXlfdXNlcjpwcm9maWxlLmlzX3RvYmVfZHVtbXlfdXNlcn0pXG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLnByb3BzLnVzZXJfZW1haWwpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtlbWFpbDp0aGlzLnByb3BzLnVzZXJfZW1haWx9KVxuXHRcdFx0fVxuXHRcdFx0aWYocHJvZmlsZS5lbWFpbCl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2VtYWlsOnByb2ZpbGUuZW1haWx9KVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGRvYjogcHJvZmlsZS5kb2IgPyBwcm9maWxlLmRvYiA6Jydcblx0XHRcdH0sKCk9Pntcblx0XHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQoKVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UoZmllbGQsIGV2ZW50KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRbZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJhbScpXTogZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0fSlcblx0fVxuXG5cdGhhbmRsZVN1Ym1pdCgpIHtcblx0XHRsZXQgcHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKVxuXHRcdGlmICghcHJvZmlsZS5pc0R1bW15VXNlciAmJiB0aGlzLnByb3BzLm1lbWJlcl9pZCA+IDApIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlX2lkOiB0aGlzLnByb3BzLm1lbWJlcl9pZCB9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgcHJvZmlsZV9pZDogbnVsbCB9KVxuXHRcdH1cblx0XHR2YXIgc2VsZl9kYXRhID0gdGhpcy5zdGF0ZVxuXHRcdHRoaXMucHJvcHMudXNlckRldGFpbHMoJ3NlbGZfZGF0YScsIHNlbGZfZGF0YSlcblx0fVxuXG5cdGhhbmRsZU5hbWVDaGFyYWN0ZXJzKGZpZWxkLCBldmVudCkge1xuXHRcdGlmIChmaWVsZCA9PSAnbmFtZScpIHtcblx0XHRcdGlmICh0aGlzLnN0YXRlLm5hbWUubGVuZ3RoID09IDUwKSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cdFx0fSBcblx0XHQvLyBlbHNlIGlmIChmaWVsZCA9PSAnbGFzdF9uYW1lJykge1xuXHRcdC8vIFx0aWYgKHRoaXMuc3RhdGUubGFzdF9uYW1lLmxlbmd0aCA9PSA1MCkge1xuXHRcdC8vIFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblx0fVxuXG5cdGhhbmRsZUVtYWlsKCkge1xuXHRcdGxldCBmb3JtSXNWYWxpZCA9IHRydWU7XG5cdFx0aWYgKHRoaXMuc3RhdGUuZW1haWwgIT0gJycpIHtcblx0XHRcdGxldCB2YWxpZEVtYWlsID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cdFx0XHR2YWxpZEVtYWlsID0gdmFsaWRFbWFpbC50ZXN0KHRoaXMuc3RhdGUuZW1haWwpO1xuXHRcdFx0aWYgKHZhbGlkRW1haWwpIHtcblx0XHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgdmFsaWQgRW1haWxcIiB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRzdWJtaXROZXdEb2IodHlwZSxuZXdEYXRlLGlzVmFsaWREb2IpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHRzZWxmLnNldFN0YXRlKHtcblx0XHRcdGRvYjogbmV3RGF0ZSwgaXNEb2JWYWxpZGF0ZWQ6aXNWYWxpZERvYlxuXHRcdH0sICgpID0+IHtcblx0XHRcdHNlbGYuaGFuZGxlU3VibWl0KClcblx0XHR9KVxuXHR9XG5cblx0dW5TZXRGb3JjZVVwZGF0ZURvYigpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe2lzRm9yY2VVcGRhdGVEb2I6ZmFsc2V9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMubWVtYmVyX2lkKVxuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdGxldCBjb21tb25Nc2dTcGFuID0gPHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+KlRoaXMgaXMgYSBtYW5kYXRvcnkgZmllbGQ8L3NwYW4+XG5cdFx0bGV0IGlzRHVtbXlVc2VyXG5cdFx0aWYgKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCAmJiB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSkge1xuXHRcdFx0aXNEdW1teVVzZXIgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pc0R1bW15VXNlclxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCIgaWQ9e2lzRHVtbXlVc2VyID8gJ21lbWJlcl8wJyA6IGBtZW1iZXJfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCd0aXRsZScpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7dGhpcy5zdGF0ZS5nZW5kZXIgPT0gJ20nPydidG4tYWN0aXZlJzonJ31gfSBuYW1lPVwiZ2VuZGVyXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT0gJ20nfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgJ2dlbmRlcic6ICdtJyB9LCgpPT57dGhpcy5oYW5kbGVTdWJtaXQoKSB9KX0gb25CbHVyPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfT5NYWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbGFiZWwtbmFtZXMtYnV0dG9ucyAke3RoaXMuc3RhdGUuZ2VuZGVyID09ICdmJz8nYnRuLWFjdGl2ZSc6Jyd9YH0gbmFtZT1cImdlbmRlclwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09ICdmJ30gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7ICdnZW5kZXInOiAnZicgfSwoKT0+e3RoaXMuaGFuZGxlU3VibWl0KCkgfSl9IG9uQmx1cj17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0+RmVtYWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cCBpbnAtbWFyZ2luLXJpZ2h0IFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0gXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRcdFx0XHRpZD17YG5hbWVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignbmFtZScpID4gLTEgPyAnZmlsbC1lcnJvcicgOiAnJ31gfSByZXF1aXJlZCBcblx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJmaXJzdF9uYW1lXCIgXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cIm5hbWVcIiBcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBcblx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmFtPSduYW1lJyBcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnbmFtZScpfSBcblx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9IFxuXHRcdFx0XHRcdFx0XHRcdC8vIGRpc2FibGVkPXt0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCB8fCB0aGlzLnN0YXRlLmRpc2FibGVGTmFtZSA/ICdkaXNhYmxlZCcgOiAnJ30gXG5cdFx0XHRcdFx0XHRcdFx0b25LZXlQcmVzcz17dGhpcy5oYW5kbGVOYW1lQ2hhcmFjdGVycy5iaW5kKHRoaXMsICduYW1lJyl9IFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCAvKnx8IHRoaXMuc3RhdGUuZGlzYWJsZUZOYW1lKi8gPyAnZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbCcgOiAnZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyJ30gaHRtbEZvcj17YG5hbWVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT48c3BhbiBjbGFzc05hbWU9XCJsYWJlbERvdFwiPjwvc3Bhbj5OYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy91c2VyLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignbmFtZScpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsvKjxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgaW5zLWZvcm0tZ3JvdXAgaW5wLW1hcmdpbi1yaWdodFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0gXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRcdFx0XHRpZD17YGxhc3RfbmFtZV8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdsYXN0X25hbWUnKSA+IC0xID8gJ2ZpbGwtZXJyb3InIDogJyd9YH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwibGFzdF9uYW1lXCIgXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImxhc3RfbmFtZVwiIFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmxhc3RfbmFtZX0gXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJhbT0nbGFzdF9uYW1lJyBcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnbGFzdF9uYW1lJyl9IFxuXHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzLCBmYWxzZSxmYWxzZSl9IFxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXt0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCB8fCB0aGlzLnN0YXRlLmRpc2FibGVMTmFtZSA/ICdkaXNhYmxlZCcgOiAnJ30gXG5cdFx0XHRcdFx0XHRcdFx0b25LZXlQcmVzcz17dGhpcy5oYW5kbGVOYW1lQ2hhcmFjdGVycy5iaW5kKHRoaXMsICdsYXN0X25hbWUnKX0gXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e3RoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50IHx8IHRoaXMuc3RhdGUuZGlzYWJsZUxOYW1lID8gJ2Zvcm0tY29udHJvbC1wbGFjZWhvbGRlciBkYXRlUGlja2VyTGFiZWwnIDogJ2Zvcm0tY29udHJvbC1wbGFjZWhvbGRlcid9IGh0bWxGb3I9e2BsYXN0X25hbWVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT48c3BhbiBjbGFzc05hbWU9XCJsYWJlbERvdFwiPjwvc3Bhbj5MYXN0IE5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3VzZXItMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdsYXN0X25hbWUnKSA+IC0xID9cblx0XHRcdFx0XHRcdFx0XHRjb21tb25Nc2dTcGFuIDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj4qL31cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQhdGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQgJiYgIXRoaXMucHJvcHMudXNlcl9lbWFpbD9cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIGlkPXtgZW1haWxzXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZW1haWwnKSA+IC0xID8gJ2ZpbGwtZXJyb3InIDogJyd9YH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJlbWFpbFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5wcm9wcy51c2VyX2VtYWlsP3RoaXMucHJvcHMudXNlcl9lbWFpbDp0aGlzLnN0YXRlLmVtYWlsfSBcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyYW09J2VtYWlsJyBcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsJ2VtYWlsJyl9IFxuXHRcdFx0XHRcdFx0XHRcdFx0b25CbHVyPXt0aGlzLmhhbmRsZUVtYWlsLmJpbmQodGhpcyl9IFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gZGlzYWJsZWQ9e3RoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50IHx8IHRoaXMuc3RhdGUuZGlzYWJsZUVtYWlsID8gJ2Rpc2FibGVkJyA6ICcnfSAgXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCAvKnx8IHRoaXMuc3RhdGUuZGlzYWJsZUVtYWlsKi8gPyAnZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbCcgOiAnZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyJ30gaHRtbEZvcj17YGVtYWlsc18ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9PjxzcGFuIGNsYXNzTmFtZT1cImxhYmVsRG90XCI+PC9zcGFuPkVtYWlsPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL21haWwtMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdlbWFpbCcpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29tbW9uTXNnU3BhbiA6ICcnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0OicnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC8qdGhpcy5wcm9wcy5zaG93X2V4dHJhX2ZpZWxkcyAmJiAhdGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQ/XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiIGlkPXtgcGhvbmVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdwaG9uZV9udW1iZXInKSA+IC0xID8gJ2ZpbGwtZXJyb3InIDogJyd9YH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJwaG9uZV9udW1iZXJcIiBcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwaG9uZV9udW1iZXJcIiBcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnBob25lX251bWJlcn0gXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmFtPSdwaG9uZV9udW1iZXInIFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ3Bob25lX251bWJlcicpfSBcblx0XHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzLCBmYWxzZSxmYWxzZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQgfHwgdGhpcy5zdGF0ZS5kaXNhYmxlUGhvbmVObyA/ICdkaXNhYmxlZCcgOiAnJ30gIFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQgfHwgdGhpcy5zdGF0ZS5kaXNhYmxlUGhvbmVObyA/ICdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgZGF0ZVBpY2tlckxhYmVsJyA6ICdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXInfSBodG1sRm9yPXtgcGhvbmVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT48c3BhbiBjbGFzc05hbWU9XCJsYWJlbERvdFwiPjwvc3Bhbj5QaG9uZSBOdW1lcjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9tYWlsLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZigncGhvbmVfbnVtYmVyJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21tb25Nc2dTcGFuIDogJydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ6JycqL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdDxOZXdEYXRlU2VsZWN0b3Igey4uLnRoaXMucHJvcHN9IGdldE5ld0RhdGU9e3RoaXMuc3VibWl0TmV3RG9iLmJpbmQodGhpcyl9IGlzX2RvYl9lcnJvcj17dGhpcy5wcm9wcy5pc19kb2JfZXJyb3J9ICBvbGRfZG9iPXt0aGlzLnN0YXRlLmRvYn0gaXNfZ29sZD17dHJ1ZX0gdXNlcl9mb3JtX2lkID17dGhpcy5wcm9wcy5tZW1iZXJfaWR9IGlzRm9yY2VVcGRhdGVEb2IgPXt0aGlzLnN0YXRlLmlzRm9yY2VVcGRhdGVEb2J9IHVuU2V0Rm9yY2VVcGRhdGVEb2I9e3RoaXMudW5TZXRGb3JjZVVwZGF0ZURvYi5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZG9iJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW4gOiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Zvcm0+IFxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsvKjxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGlucy1mb3JtLWdyb3VwICR7dGhpcy5wcm9wcy5pc19mcm9tX3BheW1lbnQgfHwgdGhpcy5zdGF0ZS5kaXNhYmxlRG9iID8nY2xpY2stZGlzYWJsZSc6Jyd9YH0gPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbFwiIGh0bWxGb3I9XCJpbnMtZGF0ZVwiPkRhdGUgb2YgYmlydGg8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhbGVuZGFyLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYi1zZWxlY3QtZGl2IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYi1zZWxlY3QgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBpZD17YGRheWRyb3Bkb3duXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gdmFsdWU9e3RoaXMuc3RhdGUuZGF5fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBoaWRkZW4+REQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkb2ItZG93bi1pY29uXCIgc3R5bGU9e3sgcmlnaHQ6ICc0cHgnIH19IHNyYz1cIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2Itc2VsZWN0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgaWQ9e2Btb250aGRyb3Bkb3duXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gdmFsdWU9e3RoaXMuc3RhdGUubW50aH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gaGlkZGVuPk1NPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZG9iLWRvd24taWNvblwiIHN0eWxlPXt7IHJpZ2h0OiAnNHB4JyB9fSBzcmM9XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9iLXNlbGVjdCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPXtgeWVhcmRyb3Bkb3duXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gdmFsdWU9e3RoaXMuc3RhdGUueWVhcn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gaGlkZGVuPllZWVk8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkb2ItZG93bi1pY29uXCIgc3R5bGU9e3sgcmlnaHQ6ICczcHgnIH19IHNyYz1cIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZG9iJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0Y29tbW9uTXNnU3BhbiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+Ki99XG5cdFx0XHRcdFx0eyFpc0R1bW15VXNlcj88ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvclNlcGFyYXRvclwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5vcjwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdWItZm9ybS1oZWQtY2xpY2tcIiBzdHlsZT17e2p1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2Vlbid9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdFx0c2hvd1BvcHVwOiB0cnVlLCBwcm9maWxlX2ZsYWc6dHJ1ZSxpc0ZvcmNlVXBkYXRlRG9iOmZhbHNlfSl9PlxuXHRcdFx0XHRcdFx0XHRTZWxlY3QgUHJvZmlsZS9BZGQgTmV3IFByb2ZpbGVcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9yZ3QtYXJ3LnN2Z1wifSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PjonJ31cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvLyB0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudD9cblx0XHRcdFx0XHQvLyBcdDxJbnN1cmFuY2VQcm9vZnMgey4uLnRoaXMucHJvcHN9IC8+XG5cdFx0XHRcdFx0Ly8gXHQ6ICcnXG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuc3RhdGUuc2hvd1BvcHVwP1xuXHRcdFx0XHRcdDxWaXBMb2dpblBvcHVwICB7Li4udGhpcy5wcm9wc30gXG5cdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQ9e3RoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkfSBcblx0XHRcdFx0XHRcdG1lbWJlcl9pZD17dGhpcy5wcm9wcy5tZW1iZXJfaWR9IFxuXHRcdFx0XHRcdFx0Y2xvc2VQb3B1cD17dGhpcy50b2dnbGVQb3B1cC5iaW5kKHRoaXMpfSBcblx0XHRcdFx0XHRcdGlzU2VsZWN0cHJvZmlsZSA9IHt0cnVlfSBcblx0XHRcdFx0XHRcdHZpcENsdWJNZW1iZXJEZXRhaWxzID17dGhpcy5wcm9wcy52aXBDbHViTWVtYmVyRGV0YWlsc1t0aGlzLnByb3BzLm1lbWJlcl9pZF19XG5cdFx0XHRcdFx0XHRoaWRlU2VsZWN0UHJvZmlsZVBvcHVwPXt0aGlzLmhpZGVTZWxlY3RQcm9maWxlUG9wdXAuYmluZCh0aGlzKX0gXG5cdFx0XHRcdFx0XHRpc19jaGlsZF9vbmx5ID0ge3RoaXMucHJvcHMuaXNfY2hpbGRfb25seX1cblx0XHRcdFx0XHRcdGlzX3NlZV9tb3JlPXtmYWxzZX1cblx0XHRcdFx0XHQvPiA6ICcnXG5cdFx0XHRcdH1cblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0KVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlwUHJvcG9zZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyB1c2VyRGV0YWlscywgc2F2ZUN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnMsIGNpdGllc0RhdGEsIHNlbGVjdFZpcFVzZXJQcm9maWxlLCB2aXBDbHViUGF5LCBhZGRWaXBNZW1iZXJzRGF0YSwgdXBsb2FkVmlwUHJvb2YsIHJlbW92ZVZpcE1lbWJlclByb29mLCBzdG9yZVZpcE1lbWJlclByb29mcywgcHVzaE1lbWJlcnNEYXRhLCByZXRyaWV2ZU1lbWJlcnNEYXRhLCBzZWxlY3RWaXBDbHViUGxhbiwgcmVzZXRWaXBEYXRhLCB2aXBQbHVzTGVhZCwgc2VuZEFnZW50Qm9va2luZ1VSLCBjbGVhclZpcE1lbWViZXJEYXRhLCBnZXRDb3Vwb25zLCBhcHBseUNvdXBvbkRpc2NvdW50LCByZW1vdmVWaXBDb3Vwb25zLCBzZW5kQWdlbnRCb29raW5nVVJMLCBnZXRWaXBMaXN0LHJlbW92ZU1lbWJlcnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IFZpcENsdWJNZW1iZXJEZXRhaWxzVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3ZpcENsdWIvdmlwQ2x1Yk1lbWJlckRldGFpbHNWaWV3LmpzJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgVmlwQ2x1Yk1lbWJlckRldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIGlzU2FsZXNBZ2VudDpwYXJzZWQudXRtX3NvdXJjZSxcbiAgICAgICAgICAgIGlzQWdlbnQ6cGFyc2VkLmlzX2FnZW50IHx8IGZhbHNlLFxuICAgICAgICAgICAgLy8gaXNfZ29sZDpwYXJzZWQuaXNfZ29sZCB8fCBmYWxzZSxcbiAgICAgICAgICAgIGlzX2dvbGQ6dGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJ3ZpcC1nb2xkLWRldGFpbHMnKSxcbiAgICAgICAgICAgIGlzX2Zyb21fcGF5bWVudDpwYXJzZWQuaXNfZnJvbV9wYXltZW50P3BhcnNlZC5pc19mcm9tX3BheW1lbnQ6ZmFsc2UsXG4gICAgICAgICAgICBpc192aXBfZ29sZDpwYXJzZWQuaXNfdmlwX2dvbGQ/cGFyc2VkLmlzX3ZpcF9nb2xkOmZhbHNlLFxuICAgICAgICAgICAgaXNfbmF2aWdhdGVfdG9fZm9ybTpmYWxzZSxcbiAgICAgICAgICAgIGlzX3VzZXJfYWxyZHlfZ29sZDpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHt9XG4gICAgICAgIGxldCBkYXRhPXt9XG4gICAgICAgIGRhdGEuc2VsZWN0ZWRMb2NhdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvblxuICAgICAgICBkYXRhLmlzU2FsZXNBZ2VudCA9IHRoaXMuc3RhdGUuaXNTYWxlc0FnZW50XG4gICAgICAgIGRhdGEuaXNBZ2VudCA9IHRoaXMuc3RhdGUuaXNBZ2VudFxuICAgICAgICBkYXRhLmlzX2dvbGQgPSB0aGlzLnN0YXRlLmlzX2dvbGRcbiAgICAgICAgZGF0YS5hbGwgPSB0aGlzLnN0YXRlLmlzX3ZpcF9nb2xkXG4gICAgICAgIGRhdGEuZnJvbVdoZXJlID0gJ3VzZXJfZm9ybSdcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5pc19mcm9tX3BheW1lbnQpe1xuICAgICAgICAgICAgZXh0cmFQYXJhbXNbJ3VzZXJfdHlwZSddPSAnZ29sZCdcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX25hdmlnYXRlX3RvX2Zvcm06dHJ1ZX0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJldHJpZXZlTWVtYmVyc0RhdGEoJ1BMQU5fUFVSQ0hBU0UnLGV4dHJhUGFyYW1zKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VmlwTGlzdChmYWxzZSxkYXRhLChyZXNwKT0+eyAvLyB0byBnZXQgdmlwIHBsYW4gbGlzdFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3ApXG4gICAgICAgICAgICAgICAgaWYoIXJlc3AuY2VydGlmaWNhdGUpe1xuICAgICAgICAgICAgICAgICAgICBleHRyYVBhcmFtc1sndXNlcl90eXBlJ109ICdnb2xkJ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19uYXZpZ2F0ZV90b19mb3JtOnRydWV9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJldHJpZXZlTWVtYmVyc0RhdGEoJ1BMQU5fUFVSQ0hBU0UnLGV4dHJhUGFyYW1zKSAvLyB0byByZXRyaWV2ZSBhbHJlYWR5IHB1c2hlZCBtZW1iZXIgZGF0YSBpbiBjYXNlIG9mIGFnZW50IG9yIHByb3Bvc2VyIGl0IHNlbGZcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfdXNlcl9hbHJkeV9nb2xkOnRydWV9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIFxuICAgICAgICB9XG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4pLmxlbmd0aCA+IDApe1xuICAgICAgICAvLyAgICAgZXh0cmFQYXJhbXNbJ3VzZXJfdHlwZSddPSB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlzX2dvbGQ/J2dvbGQnOid2aXAnXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZXh0cmFQYXJhbXNbJ3VzZXJfdHlwZSddPSB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlzX2dvbGQ/J2dvbGQnOid2aXAnXG4gICAgICAgIC8vIHRoaXMucHJvcHMuY2l0aWVzRGF0YSgpXG5cbiAgICB9XG5cblx0cmVuZGVyKCl7XG4gICAgICAgIGxldCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zaG93VmlwRGV0YWlsc1ZpZXcgJiYgdGhpcy5zdGF0ZS5pc19uYXZpZ2F0ZV90b19mb3JtKXtcbiAgICAgICAgICAgIHJldHVybiA8VmlwQ2x1Yk1lbWJlckRldGFpbHNWaWV3IHsuLi50aGlzLnByb3BzfSBpc19mcm9tX3BheW1lbnQ9e3RoaXMuc3RhdGUuaXNfZnJvbV9wYXltZW50fSBpc1NhbGVzQWdlbnQ9e3RoaXMuc3RhdGUuaXNTYWxlc0FnZW50fSBpc0FnZW50PXt0aGlzLnN0YXRlLmlzQWdlbnR9IGlzX2dvbGQ9e3RoaXMuc3RhdGUuaXNfZ29sZH0gLz5cbiAgICAgICAgfWVsc2UgaWYoU1RPUkFHRS5jaGVja0F1dGgoKSAmJiB0aGlzLnN0YXRlLmlzX3VzZXJfYWxyZHlfZ29sZCAmJiAhdGhpcy5zdGF0ZS5pc19mcm9tX3BheW1lbnQpey8vIGlmIGFscmVhZHkgZ29sZCBvciB2aXAgdXNlciByZWRpcmVjdCB0byBkYXNoYm9hcmRcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZSgnL3ZpcC1jbHViLWFjdGl2YXRlZC1kZXRhaWxzJylcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmlzU2FsZXNBZ2VudCAmJiB0aGlzLnN0YXRlLmlzQWdlbnQpe1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcbiAgICBjb25zdCB7IHNlbGVjdGVkTG9jYXRpb24gfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcbiAgICBsZXQgeyB1c2VyX2NpdGllcywgY29tbW9uX3V0bV90YWdzIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICBsZXQgeyB2aXBDbHViTGlzdCwgc2VsZWN0ZWRfdmlwX3BsYW4sIHZpcENsdWJNZW1iZXJEZXRhaWxzLCBjdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQsIHZpcF9jbHViX2RiX2RhdGEsIG1lbWJlcnNfcHJvb2ZzLCBzaG93VmlwRGV0YWlsc1ZpZXcsc2F2ZWRNZW1iZXJEYXRhLCB2aXBDb3Vwb25zIH0gPSBzdGF0ZS5WSVBDTFVCXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmlwQ2x1Ykxpc3QsIHNlbGVjdGVkX3ZpcF9wbGFuLCB2aXBDbHViTWVtYmVyRGV0YWlscywgY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLCB1c2VyX2NpdGllcywgVVNFUiwgdmlwX2NsdWJfZGJfZGF0YSwgbWVtYmVyc19wcm9vZnMsIHNob3dWaXBEZXRhaWxzVmlldywgc2F2ZWRNZW1iZXJEYXRhLCB2aXBDb3Vwb25zLCBjb21tb25fdXRtX3RhZ3MsIHNlbGVjdGVkTG9jYXRpb25cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJEZXRhaWxzOihzZWxmX2RhdGEsY3JpdGVyaWEsZm9yY2VhZGQpID0+IGRpc3BhdGNoKHVzZXJEZXRhaWxzKHNlbGZfZGF0YSxjcml0ZXJpYSxmb3JjZWFkZCkpLFxuICAgICAgICBzYXZlQ3VycmVudFNlbGVjdGVkVmlwTWVtYmVyczogKG1lbWJlcnNJZCxjYWxsYmFjaykgPT4gZGlzcGF0Y2goc2F2ZUN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnMobWVtYmVyc0lkLGNhbGxiYWNrKSksXG4gICAgICAgIGNpdGllc0RhdGE6ICgpID0+IGRpc3BhdGNoKGNpdGllc0RhdGEoKSksXG4gICAgICAgIHNlbGVjdFZpcFVzZXJQcm9maWxlOihuZXdQcm9maWxlaWQsbWVtYmVyX2lkLG5ld1Byb2ZpbGUscGFyYW1faWQpID0+IGRpc3BhdGNoKHNlbGVjdFZpcFVzZXJQcm9maWxlKG5ld1Byb2ZpbGVpZCxtZW1iZXJfaWQsbmV3UHJvZmlsZSxwYXJhbV9pZCkpLFxuICAgICAgICB2aXBDbHViUGF5IDooY3JpdGVyaWEsY2FsbGJhY2spID0+IGRpc3BhdGNoKHZpcENsdWJQYXkoY3JpdGVyaWEsY2FsbGJhY2spKSxcbiAgICAgICAgYWRkVmlwTWVtYmVyc0RhdGE6KGNyaXRlcmlhLGNhbGxiYWNrKSA9PiBkaXNwYXRjaChhZGRWaXBNZW1iZXJzRGF0YShjcml0ZXJpYSxjYWxsYmFjaykpLFxuICAgICAgICB1cGxvYWRWaXBQcm9vZjoocHJvZmlsZURhdGEsIHByb2ZpbGVJZCxpbWdUeXBlLCBjYikgPT5kaXNwYXRjaCh1cGxvYWRWaXBQcm9vZihwcm9maWxlRGF0YSwgcHJvZmlsZUlkLGltZ1R5cGUsIGNiKSksXG4gICAgICAgIHN0b3JlVmlwTWVtYmVyUHJvb2ZzOihpbWdVcmwsY2IpPT5kaXNwYXRjaChzdG9yZVZpcE1lbWJlclByb29mcyhpbWdVcmwsY2IpKSxcbiAgICAgICAgcmVtb3ZlVmlwTWVtYmVyUHJvb2Y6KGNyaXRlcmlhKT0+ZGlzcGF0Y2gocmVtb3ZlVmlwTWVtYmVyUHJvb2YoY3JpdGVyaWEpKSxcbiAgICAgICAgcHVzaE1lbWJlcnNEYXRhOihjcml0ZXJpYSkgPT5kaXNwYXRjaChwdXNoTWVtYmVyc0RhdGEoY3JpdGVyaWEpKSxcbiAgICAgICAgcmV0cmlldmVNZW1iZXJzRGF0YToodHlwZSwgZXh0cmFQYXJhbXMsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChyZXRyaWV2ZU1lbWJlcnNEYXRhKHR5cGUsIGV4dHJhUGFyYW1zLCBjYWxsYmFjaykpLFxuICAgICAgICBzZWxlY3RWaXBDbHViUGxhbjogKHBsYW4sY3JpdGVyaWEsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChzZWxlY3RWaXBDbHViUGxhbihwbGFuLGNyaXRlcmlhLCBjYWxsYmFjaykpLFxuICAgICAgICByZXNldFZpcERhdGE6KCkgPT4gZGlzcGF0Y2gocmVzZXRWaXBEYXRhKCkpLFxuICAgICAgICB2aXBQbHVzTGVhZDogKGRhdGEpID0+IGRpc3BhdGNoKHZpcFBsdXNMZWFkKGRhdGEpKSxcbiAgICAgICAgc2VuZEFnZW50Qm9va2luZ1VSTDogKG9yZGVySWQsIHR5cGUsIHB1cmNoYXNlX3R5cGUscXVlcnlfZGF0YSwgZXh0cmFQYXJhbXMsIGNiKSA9PiBkaXNwYXRjaChzZW5kQWdlbnRCb29raW5nVVJMKG9yZGVySWQsIHR5cGUscHVyY2hhc2VfdHlwZSxxdWVyeV9kYXRhLGV4dHJhUGFyYW1zLCAgY2IpKSxcbiAgICAgICAgY2xlYXJWaXBNZW1lYmVyRGF0YTooKSA9PmRpc3BhdGNoKGNsZWFyVmlwTWVtZWJlckRhdGEoKSksXG4gICAgICAgIGdldENvdXBvbnM6IChkYXRhKSA9PiBkaXNwYXRjaChnZXRDb3Vwb25zKGRhdGEpKSxcbiAgICAgICAgYXBwbHlDb3Vwb25EaXNjb3VudDogKGRhdGEpID0+ZGlzcGF0Y2goYXBwbHlDb3Vwb25EaXNjb3VudChkYXRhKSksXG4gICAgICAgIHJlbW92ZVZpcENvdXBvbnM6KCkgPT5kaXNwYXRjaChyZW1vdmVWaXBDb3Vwb25zKCkpLFxuICAgICAgICBnZXRWaXBMaXN0OiAoaXNfZW5kb3JzZW1lbnQsZGF0YSxjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0VmlwTGlzdChpc19lbmRvcnNlbWVudCxkYXRhLGNhbGxiYWNrKSksXG4gICAgICAgIHJlbW92ZU1lbWJlcnM6KGRhdGEpID0+IGRpc3BhdGNoKHJlbW92ZU1lbWJlcnMoZGF0YSkpXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMgLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFZpcENsdWJNZW1iZXJEZXRhaWxzKSJdLCJzb3VyY2VSb290IjoiIn0=