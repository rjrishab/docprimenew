exports.ids = [105];
exports.modules = {

/***/ "./dev/js/components/commons/offers/OffersView.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/offers/OffersView.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _RightBar = __webpack_require__(/*! ../RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _footer = __webpack_require__(/*! ../Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _FixedMobileFooter = __webpack_require__(/*! ../Home/FixedMobileFooter */ "./dev/js/components/commons/Home/FixedMobileFooter.js");

var _FixedMobileFooter2 = _interopRequireDefault(_FixedMobileFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OffersView extends _react2.default.Component {

    navigateTo(offer) {
        if (offer.url_details && offer.url_details.test_ids) {
            let test = {};

            let filters = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'lab_name': offer.url_details.lab_name || '', 'network_id': offer.url_details.network_id || '' };

            test.type = 'test';
            test.id = [];

            let testIdArray = offer.url_details.test_ids.split(',');
            for (let id in testIdArray) {
                test.id.push(parseInt(testIdArray[id]));
            }

            this.props.toggleDiagnosisCriteria('test', test, true, filters);
            setTimeout(() => {
                this.props.history.push('/lab/searchresults');
            }, 100);

            let data = {
                'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (offer.url_details && offer.url_details.specializations && offer.url_details.specializations != '') {
            let speciality = {};

            let filters = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

            speciality.type = 'speciality';
            speciality.id = [];

            let specialityIdArray = offer.url_details.specializations.split(',');
            for (let id in specialityIdArray) {
                speciality.id.push(parseInt(specialityIdArray[id]));
            }

            this.props.toggleOPDCriteria('speciality', speciality, true, filters);
            setTimeout(() => {
                this.props.history.push('/opd/searchresults');
            }, 100);

            let data = {
                'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (offer.url_details && offer.url_details.procedure_ids && offer.url_details.procedure_ids != '') {
            let speciality = {};

            let filters = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

            speciality.type = 'procedures';
            speciality.id = [];

            let specialityIdArray = offer.url_details.procedure_ids.split(',');
            for (let id in specialityIdArray) {
                speciality.id.push(parseInt(specialityIdArray[id]));
            }

            this.props.toggleOPDCriteria('procedures', speciality, true, filters);
            setTimeout(() => {
                this.props.history.push('/opd/searchresults');
            }, 100);

            let data = {
                'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (offer.url_details && offer.url_details.procedure_category_ids && offer.url_details.procedure_category_ids != '') {
            let speciality = {};

            let filters = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

            speciality.type = 'procedures_category';
            speciality.id = [];

            let specialityIdArray = offer.url_details.procedure_category_ids.split(',');
            for (let id in specialityIdArray) {
                speciality.id.push(parseInt(specialityIdArray[id]));
            }

            this.props.toggleOPDCriteria('procedures_category', speciality, true, filters);
            setTimeout(() => {
                this.props.history.push('/opd/searchresults');
            }, 100);

            let data = {
                'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (offer.url_details && offer.url_details.conditions && offer.url_details.conditions != '') {
            let speciality = {};

            let filters = { 'priceRange': [offer.url_details.min_fees, offer.url_details.max_fees], 'distanceRange': [offer.url_details.min_distance, offer.url_details.max_distance], 'sort_on': offer.url_details.sort_on || '', 'is_female': offer.url_details.is_female || false, 'is_available': offer.url_details.is_available || false, 'doctor_name': offer.url_details.doctor_name || '', 'hospital_name': offer.url_details.hospital_name || '', 'hospital_id': offer.url_details.hospital_id || '' };

            speciality.type = 'condition';
            speciality.id = [];

            let specialityIdArray = offer.url_details.conditions.split(',');
            for (let id in specialityIdArray) {
                speciality.id.push(parseInt(specialityIdArray[id]));
            }

            this.props.toggleOPDCriteria('condition', speciality, true, filters);
            setTimeout(() => {
                this.props.history.push('/opd/searchresults');
            }, 100);

            let data = {
                'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
            };
            _gtm2.default.sendEvent({ data: data });
        } else if (offer.url) {
            if (offer.url.startsWith('http')) {
                window.open(offer.url, '_blank');
            } else {
                this.props.history.push(offer.url);
            }

            let data = {
                'Category': 'ConsumerApp', 'Action': offer.event_name, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': offer.event_name, 'clickedOn': offer.slider_location
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        let selectedLocation = '';
        let lat = 28.644800;
        let long = 77.216721;
        if (this.props.selectedLocation) {
            selectedLocation = this.props.selectedLocation;
            lat = selectedLocation.geometry.location.lat;
            long = selectedLocation.geometry.location.lng;
            if (typeof lat === 'function') lat = lat();
            if (typeof long === 'function') long = long();
        }

        this.props.getOfferList(lat, long);
    }

    render() {

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap', style: { background: '#fff' } },
            _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true }),
            _react2.default.createElement(
                'section',
                { className: 'container parent-section book-appointment-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-7 center-column' },
                        _react2.default.createElement(
                            'div',
                            { className: 'container' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'offers_page').length ? _react2.default.createElement(
                                        'p',
                                        { className: 'fw-700 offer-heading mrt-20' },
                                        'Offers'
                                    ) : _react2.default.createElement(
                                        'p',
                                        { className: 'fw-700 offer-heading mrt-20' },
                                        'No offers available'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'offers_page').length ? this.props.offerList.filter(x => x.slider_location === 'offers_page').map((offer, i) => {
                                        return _react2.default.createElement(
                                            'div',
                                            { className: 'offer-div', key: i, onClick: () => this.navigateTo(offer) },
                                            _react2.default.createElement('img', { src: offer.image })
                                        );
                                    }) : ''
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(_RightBar2.default, { noChatButton: true, msgTemplate: 'gold_general_template' })
                )
            ),
            _react2.default.createElement(_footer2.default, null),
            _react2.default.createElement(_FixedMobileFooter2.default, _extends({ offersPage: true }, this.props))
        );
    }
}

exports.default = OffersView;

/***/ }),

/***/ "./dev/js/components/commons/offers/index.js":
/*!***************************************************!*\
  !*** ./dev/js/components/commons/offers/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OffersView = __webpack_require__(/*! ./OffersView */ "./dev/js/components/commons/offers/OffersView.js");

var _OffersView2 = _interopRequireDefault(_OffersView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _OffersView2.default;

/***/ }),

/***/ "./dev/js/containers/commons/Offers.js":
/*!*********************************************!*\
  !*** ./dev/js/containers/commons/Offers.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _offers = __webpack_require__(/*! ../../components/commons/offers */ "./dev/js/components/commons/offers/index.js");

var _offers2 = _interopRequireDefault(_offers);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Offers extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return _react2.default.createElement(_offers2.default, this.props);
    }
}

const mapStateToProps = state => {
    const {
        offerList
    } = state.USER;

    const {
        selectedLocation
    } = state.SEARCH_CRITERIA_LABS;

    return {
        offerList,
        selectedLocation
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleOPDCriteria: (type, criteria, forceAdd, filters) => dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filters)),
        toggleDiagnosisCriteria: (type, criteria, forceAdd, filters) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filters)),
        selectSearchType: type => dispatch((0, _index.selectSearchType)(type)),
        getOfferList: (lat, long) => dispatch((0, _index.getOfferList)(lat, long))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Offers);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL29mZmVycy9PZmZlcnNWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvb2ZmZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvT2ZmZXJzLmpzIl0sIm5hbWVzIjpbIk9mZmVyc1ZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsIm5hdmlnYXRlVG8iLCJvZmZlciIsInVybF9kZXRhaWxzIiwidGVzdF9pZHMiLCJ0ZXN0IiwiZmlsdGVycyIsIm1pbl9mZWVzIiwibWF4X2ZlZXMiLCJtaW5fZGlzdGFuY2UiLCJtYXhfZGlzdGFuY2UiLCJzb3J0X29uIiwibGFiX25hbWUiLCJuZXR3b3JrX2lkIiwidHlwZSIsImlkIiwidGVzdElkQXJyYXkiLCJzcGxpdCIsInB1c2giLCJwYXJzZUludCIsInByb3BzIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJzZXRUaW1lb3V0IiwiaGlzdG9yeSIsImRhdGEiLCJldmVudF9uYW1lIiwiR1RNIiwiZ2V0VXNlcklkIiwic2xpZGVyX2xvY2F0aW9uIiwic2VuZEV2ZW50Iiwic3BlY2lhbGl6YXRpb25zIiwic3BlY2lhbGl0eSIsImlzX2ZlbWFsZSIsImlzX2F2YWlsYWJsZSIsImRvY3Rvcl9uYW1lIiwiaG9zcGl0YWxfbmFtZSIsImhvc3BpdGFsX2lkIiwic3BlY2lhbGl0eUlkQXJyYXkiLCJ0b2dnbGVPUERDcml0ZXJpYSIsInByb2NlZHVyZV9pZHMiLCJwcm9jZWR1cmVfY2F0ZWdvcnlfaWRzIiwiY29uZGl0aW9ucyIsInVybCIsInN0YXJ0c1dpdGgiLCJ3aW5kb3ciLCJvcGVuIiwiY29tcG9uZW50RGlkTW91bnQiLCJzY3JvbGxUbyIsInNlbGVjdGVkTG9jYXRpb24iLCJsYXQiLCJsb25nIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxuZyIsImdldE9mZmVyTGlzdCIsInJlbmRlciIsImJhY2tncm91bmQiLCJvZmZlckxpc3QiLCJmaWx0ZXIiLCJ4IiwibGVuZ3RoIiwibWFwIiwiaSIsImltYWdlIiwiT2ZmZXJzIiwiY29uc3RydWN0b3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIlVTRVIiLCJTRUFSQ0hfQ1JJVEVSSUFfTEFCUyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY3JpdGVyaWEiLCJmb3JjZUFkZCIsInNlbGVjdFNlYXJjaFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLFVBQU4sU0FBeUJDLGdCQUFNQyxTQUEvQixDQUF5Qzs7QUFFckNDLGVBQVdDLEtBQVgsRUFBa0I7QUFDZCxZQUFJQSxNQUFNQyxXQUFOLElBQXFCRCxNQUFNQyxXQUFOLENBQWtCQyxRQUEzQyxFQUFxRDtBQUNqRCxnQkFBSUMsT0FBTyxFQUFYOztBQUVBLGdCQUFJQyxVQUFVLEVBQUUsY0FBYyxDQUFDSixNQUFNQyxXQUFOLENBQWtCSSxRQUFuQixFQUE2QkwsTUFBTUMsV0FBTixDQUFrQkssUUFBL0MsQ0FBaEIsRUFBMEUsaUJBQWlCLENBQUNOLE1BQU1DLFdBQU4sQ0FBa0JNLFlBQW5CLEVBQWlDUCxNQUFNQyxXQUFOLENBQWtCTyxZQUFuRCxDQUEzRixFQUE2SixXQUFXUixNQUFNQyxXQUFOLENBQWtCUSxPQUFsQixJQUE2QixFQUFyTSxFQUF5TSxZQUFZVCxNQUFNQyxXQUFOLENBQWtCUyxRQUFsQixJQUE4QixFQUFuUCxFQUF1UCxjQUFjVixNQUFNQyxXQUFOLENBQWtCVSxVQUFsQixJQUFnQyxFQUFyUyxFQUFkOztBQUVBUixpQkFBS1MsSUFBTCxHQUFZLE1BQVo7QUFDQVQsaUJBQUtVLEVBQUwsR0FBVSxFQUFWOztBQUVBLGdCQUFJQyxjQUFjZCxNQUFNQyxXQUFOLENBQWtCQyxRQUFsQixDQUEyQmEsS0FBM0IsQ0FBaUMs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SUEsV0FBTztBQUNIWixpQkFERztBQUVIVDtBQUZHLEtBQVA7QUFJSCxDQWJEOztBQWVBLE1BQU1zQixxQkFBc0JDLFFBQUQsSUFBYztBQUNyQyxXQUFPO0FBQ0hqQywyQkFBbUIsQ0FBQ3hCLElBQUQsRUFBTzBELFFBQVAsRUFBaUJDLFFBQWpCLEVBQTJCbkUsT0FBM0IsS0FBdUNpRSxTQUFTLDhCQUFrQnpELElBQWxCLEVBQXdCMEQsUUFBeEIsRUFBa0NDLFFBQWxDLEVBQTRDbkUsT0FBNUMsQ0FBVCxDQUR2RDtBQUVIZSxpQ0FBeUIsQ0FBQ1AsSUFBRCxFQUFPMEQsUUFBUCxFQUFpQkMsUUFBakIsRUFBMkJuRSxPQUEzQixLQUF1Q2lFLFNBQVMsb0NBQXdCekQsSUFBeEIsRUFBOEIwRCxRQUE5QixFQUF3Q0MsUUFBeEMsRUFBa0RuRSxPQUFsRCxDQUFULENBRjdEO0FBR0hvRSwwQkFBbUI1RCxJQUFELElBQVV5RCxTQUFTLDZCQUFpQnpELElBQWpCLENBQVQsQ0FIekI7QUFJSHdDLHNCQUFjLENBQUNMLEdBQUQsRUFBTUMsSUFBTixLQUFlcUIsU0FBUyx5QkFBYXRCLEdBQWIsRUFBa0JDLElBQWxCLENBQVQ7QUFKMUIsS0FBUDtBQU1ILENBUEQ7O2tCQVNlLHlCQUFRZ0IsZUFBUixFQUF5Qkksa0JBQXpCLEVBQTZDTixNQUE3QyxDIiwiZmlsZSI6IjEwNS5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vRGVza3RvcFByb2ZpbGVIZWFkZXInO1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uL1JpZ2h0QmFyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vSG9tZS9mb290ZXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtJztcbmltcG9ydCBGaXhlZE1vYmlsZUZvb3RlciBmcm9tICcuLi9Ib21lL0ZpeGVkTW9iaWxlRm9vdGVyJztcblxuY2xhc3MgT2ZmZXJzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBuYXZpZ2F0ZVRvKG9mZmVyKSB7XG4gICAgICAgIGlmIChvZmZlci51cmxfZGV0YWlscyAmJiBvZmZlci51cmxfZGV0YWlscy50ZXN0X2lkcykge1xuICAgICAgICAgICAgbGV0IHRlc3QgPSB7fVxuXG4gICAgICAgICAgICBsZXQgZmlsdGVycyA9IHsgJ3ByaWNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2ZlZXMsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9mZWVzXSwgJ2Rpc3RhbmNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2Rpc3RhbmNlLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZGlzdGFuY2VdLCAnc29ydF9vbic6IG9mZmVyLnVybF9kZXRhaWxzLnNvcnRfb24gfHwgJycsICdsYWJfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmxhYl9uYW1lIHx8ICcnLCAnbmV0d29ya19pZCc6IG9mZmVyLnVybF9kZXRhaWxzLm5ldHdvcmtfaWQgfHwgJycgfVxuXG4gICAgICAgICAgICB0ZXN0LnR5cGUgPSAndGVzdCdcbiAgICAgICAgICAgIHRlc3QuaWQgPSBbXVxuXG4gICAgICAgICAgICBsZXQgdGVzdElkQXJyYXkgPSBvZmZlci51cmxfZGV0YWlscy50ZXN0X2lkcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gdGVzdElkQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB0ZXN0LmlkLnB1c2gocGFyc2VJbnQodGVzdElkQXJyYXlbaWRdKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIHRlc3QsIHRydWUsIGZpbHRlcnMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xhYi9zZWFyY2hyZXN1bHRzJylcbiAgICAgICAgICAgIH0sIDEwMClcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6IG9mZmVyLmV2ZW50X25hbWUsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50Jzogb2ZmZXIuZXZlbnRfbmFtZSwgJ2NsaWNrZWRPbic6IG9mZmVyLnNsaWRlcl9sb2NhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG9mZmVyLnVybF9kZXRhaWxzICYmIG9mZmVyLnVybF9kZXRhaWxzLnNwZWNpYWxpemF0aW9ucyAmJiBvZmZlci51cmxfZGV0YWlscy5zcGVjaWFsaXphdGlvbnMgIT0gJycpIHtcbiAgICAgICAgICAgIGxldCBzcGVjaWFsaXR5ID0ge31cblxuICAgICAgICAgICAgbGV0IGZpbHRlcnMgPSB7ICdwcmljZVJhbmdlJzogW29mZmVyLnVybF9kZXRhaWxzLm1pbl9mZWVzLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZmVlc10sICdkaXN0YW5jZVJhbmdlJzogW29mZmVyLnVybF9kZXRhaWxzLm1pbl9kaXN0YW5jZSwgb2ZmZXIudXJsX2RldGFpbHMubWF4X2Rpc3RhbmNlXSwgJ3NvcnRfb24nOiBvZmZlci51cmxfZGV0YWlscy5zb3J0X29uIHx8ICcnLCAnaXNfZmVtYWxlJzogb2ZmZXIudXJsX2RldGFpbHMuaXNfZmVtYWxlIHx8IGZhbHNlLCAnaXNfYXZhaWxhYmxlJzogb2ZmZXIudXJsX2RldGFpbHMuaXNfYXZhaWxhYmxlIHx8IGZhbHNlLCAnZG9jdG9yX25hbWUnOiBvZmZlci51cmxfZGV0YWlscy5kb2N0b3JfbmFtZSB8fCAnJywgJ2hvc3BpdGFsX25hbWUnOiBvZmZlci51cmxfZGV0YWlscy5ob3NwaXRhbF9uYW1lIHx8ICcnLCAnaG9zcGl0YWxfaWQnOiBvZmZlci51cmxfZGV0YWlscy5ob3NwaXRhbF9pZCB8fCAnJyB9XG5cbiAgICAgICAgICAgIHNwZWNpYWxpdHkudHlwZSA9ICdzcGVjaWFsaXR5J1xuICAgICAgICAgICAgc3BlY2lhbGl0eS5pZCA9IFtdXG5cbiAgICAgICAgICAgIGxldCBzcGVjaWFsaXR5SWRBcnJheSA9IG9mZmVyLnVybF9kZXRhaWxzLnNwZWNpYWxpemF0aW9ucy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gc3BlY2lhbGl0eUlkQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXR5LmlkLnB1c2gocGFyc2VJbnQoc3BlY2lhbGl0eUlkQXJyYXlbaWRdKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVPUERDcml0ZXJpYSgnc3BlY2lhbGl0eScsIHNwZWNpYWxpdHksIHRydWUsIGZpbHRlcnMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL29wZC9zZWFyY2hyZXN1bHRzJylcbiAgICAgICAgICAgIH0sIDEwMClcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6IG9mZmVyLmV2ZW50X25hbWUsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50Jzogb2ZmZXIuZXZlbnRfbmFtZSwgJ2NsaWNrZWRPbic6IG9mZmVyLnNsaWRlcl9sb2NhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG9mZmVyLnVybF9kZXRhaWxzICYmIG9mZmVyLnVybF9kZXRhaWxzLnByb2NlZHVyZV9pZHMgJiYgb2ZmZXIudXJsX2RldGFpbHMucHJvY2VkdXJlX2lkcyAhPSAnJykge1xuICAgICAgICAgICAgbGV0IHNwZWNpYWxpdHkgPSB7fVxuXG4gICAgICAgICAgICBsZXQgZmlsdGVycyA9IHsgJ3ByaWNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2ZlZXMsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9mZWVzXSwgJ2Rpc3RhbmNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2Rpc3RhbmNlLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZGlzdGFuY2VdLCAnc29ydF9vbic6IG9mZmVyLnVybF9kZXRhaWxzLnNvcnRfb24gfHwgJycsICdpc19mZW1hbGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19mZW1hbGUgfHwgZmFsc2UsICdpc19hdmFpbGFibGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19hdmFpbGFibGUgfHwgZmFsc2UsICdkb2N0b3JfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmRvY3Rvcl9uYW1lIHx8ICcnLCAnaG9zcGl0YWxfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX25hbWUgfHwgJycsICdob3NwaXRhbF9pZCc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX2lkIHx8ICcnIH1cblxuICAgICAgICAgICAgc3BlY2lhbGl0eS50eXBlID0gJ3Byb2NlZHVyZXMnXG4gICAgICAgICAgICBzcGVjaWFsaXR5LmlkID0gW11cblxuICAgICAgICAgICAgbGV0IHNwZWNpYWxpdHlJZEFycmF5ID0gb2ZmZXIudXJsX2RldGFpbHMucHJvY2VkdXJlX2lkcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gc3BlY2lhbGl0eUlkQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXR5LmlkLnB1c2gocGFyc2VJbnQoc3BlY2lhbGl0eUlkQXJyYXlbaWRdKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVPUERDcml0ZXJpYSgncHJvY2VkdXJlcycsIHNwZWNpYWxpdHksIHRydWUsIGZpbHRlcnMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL29wZC9zZWFyY2hyZXN1bHRzJylcbiAgICAgICAgICAgIH0sIDEwMClcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6IG9mZmVyLmV2ZW50X25hbWUsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50Jzogb2ZmZXIuZXZlbnRfbmFtZSwgJ2NsaWNrZWRPbic6IG9mZmVyLnNsaWRlcl9sb2NhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG9mZmVyLnVybF9kZXRhaWxzICYmIG9mZmVyLnVybF9kZXRhaWxzLnByb2NlZHVyZV9jYXRlZ29yeV9pZHMgJiYgb2ZmZXIudXJsX2RldGFpbHMucHJvY2VkdXJlX2NhdGVnb3J5X2lkcyAhPSAnJykge1xuICAgICAgICAgICAgbGV0IHNwZWNpYWxpdHkgPSB7fVxuXG4gICAgICAgICAgICBsZXQgZmlsdGVycyA9IHsgJ3ByaWNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2ZlZXMsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9mZWVzXSwgJ2Rpc3RhbmNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2Rpc3RhbmNlLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZGlzdGFuY2VdLCAnc29ydF9vbic6IG9mZmVyLnVybF9kZXRhaWxzLnNvcnRfb24gfHwgJycsICdpc19mZW1hbGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19mZW1hbGUgfHwgZmFsc2UsICdpc19hdmFpbGFibGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19hdmFpbGFibGUgfHwgZmFsc2UsICdkb2N0b3JfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmRvY3Rvcl9uYW1lIHx8ICcnLCAnaG9zcGl0YWxfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX25hbWUgfHwgJycsICdob3NwaXRhbF9pZCc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX2lkIHx8ICcnIH1cblxuICAgICAgICAgICAgc3BlY2lhbGl0eS50eXBlID0gJ3Byb2NlZHVyZXNfY2F0ZWdvcnknXG4gICAgICAgICAgICBzcGVjaWFsaXR5LmlkID0gW11cblxuICAgICAgICAgICAgbGV0IHNwZWNpYWxpdHlJZEFycmF5ID0gb2ZmZXIudXJsX2RldGFpbHMucHJvY2VkdXJlX2NhdGVnb3J5X2lkcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gc3BlY2lhbGl0eUlkQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXR5LmlkLnB1c2gocGFyc2VJbnQoc3BlY2lhbGl0eUlkQXJyYXlbaWRdKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVPUERDcml0ZXJpYSgncHJvY2VkdXJlc19jYXRlZ29yeScsIHNwZWNpYWxpdHksIHRydWUsIGZpbHRlcnMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL29wZC9zZWFyY2hyZXN1bHRzJylcbiAgICAgICAgICAgIH0sIDEwMClcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6IG9mZmVyLmV2ZW50X25hbWUsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50Jzogb2ZmZXIuZXZlbnRfbmFtZSwgJ2NsaWNrZWRPbic6IG9mZmVyLnNsaWRlcl9sb2NhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG9mZmVyLnVybF9kZXRhaWxzICYmIG9mZmVyLnVybF9kZXRhaWxzLmNvbmRpdGlvbnMgJiYgb2ZmZXIudXJsX2RldGFpbHMuY29uZGl0aW9ucyAhPSAnJykge1xuICAgICAgICAgICAgbGV0IHNwZWNpYWxpdHkgPSB7fVxuXG4gICAgICAgICAgICBsZXQgZmlsdGVycyA9IHsgJ3ByaWNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2ZlZXMsIG9mZmVyLnVybF9kZXRhaWxzLm1heF9mZWVzXSwgJ2Rpc3RhbmNlUmFuZ2UnOiBbb2ZmZXIudXJsX2RldGFpbHMubWluX2Rpc3RhbmNlLCBvZmZlci51cmxfZGV0YWlscy5tYXhfZGlzdGFuY2VdLCAnc29ydF9vbic6IG9mZmVyLnVybF9kZXRhaWxzLnNvcnRfb24gfHwgJycsICdpc19mZW1hbGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19mZW1hbGUgfHwgZmFsc2UsICdpc19hdmFpbGFibGUnOiBvZmZlci51cmxfZGV0YWlscy5pc19hdmFpbGFibGUgfHwgZmFsc2UsICdkb2N0b3JfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmRvY3Rvcl9uYW1lIHx8ICcnLCAnaG9zcGl0YWxfbmFtZSc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX25hbWUgfHwgJycsICdob3NwaXRhbF9pZCc6IG9mZmVyLnVybF9kZXRhaWxzLmhvc3BpdGFsX2lkIHx8ICcnIH1cblxuICAgICAgICAgICAgc3BlY2lhbGl0eS50eXBlID0gJ2NvbmRpdGlvbidcbiAgICAgICAgICAgIHNwZWNpYWxpdHkuaWQgPSBbXVxuXG4gICAgICAgICAgICBsZXQgc3BlY2lhbGl0eUlkQXJyYXkgPSBvZmZlci51cmxfZGV0YWlscy5jb25kaXRpb25zLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpZCBpbiBzcGVjaWFsaXR5SWRBcnJheSkge1xuICAgICAgICAgICAgICAgIHNwZWNpYWxpdHkuaWQucHVzaChwYXJzZUludChzcGVjaWFsaXR5SWRBcnJheVtpZF0pKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZU9QRENyaXRlcmlhKCdjb25kaXRpb24nLCBzcGVjaWFsaXR5LCB0cnVlLCBmaWx0ZXJzKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9vcGQvc2VhcmNocmVzdWx0cycpXG4gICAgICAgICAgICB9LCAxMDApXG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiBvZmZlci5ldmVudF9uYW1lLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6IG9mZmVyLmV2ZW50X25hbWUsICdjbGlja2VkT24nOiBvZmZlci5zbGlkZXJfbG9jYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChvZmZlci51cmwpIHtcbiAgICAgICAgICAgIGlmIChvZmZlci51cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4ob2ZmZXIudXJsLCAnX2JsYW5rJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKG9mZmVyLnVybClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6IG9mZmVyLmV2ZW50X25hbWUsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50Jzogb2ZmZXIuZXZlbnRfbmFtZSwgJ2NsaWNrZWRPbic6IG9mZmVyLnNsaWRlcl9sb2NhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cbiAgICAgICAgbGV0IHNlbGVjdGVkTG9jYXRpb24gPSAnJ1xuICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgIGxldCBsb25nID0gNzcuMjE2NzIxXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24gPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb247XG4gICAgICAgICAgICBsYXQgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxhdFxuICAgICAgICAgICAgbG9uZyA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubG5nXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRPZmZlckxpc3QobGF0LCBsb25nKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2ZmZicgfX0+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1NlYXJjaD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcGFyZW50LXNlY3Rpb24gYm9vay1hcHBvaW50bWVudC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdvZmZlcnNfcGFnZScpLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy03MDAgb2ZmZXItaGVhZGluZyBtcnQtMjBcIj5PZmZlcnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy03MDAgb2ZmZXItaGVhZGluZyBtcnQtMjBcIj5ObyBvZmZlcnMgYXZhaWxhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdvZmZlcnNfcGFnZScpLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9mZmVyTGlzdC5maWx0ZXIoeCA9PiB4LnNsaWRlcl9sb2NhdGlvbiA9PT0gJ29mZmVyc19wYWdlJykubWFwKChvZmZlciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyLWRpdlwiIGtleT17aX0gb25DbGljaz17KCkgPT4gdGhpcy5uYXZpZ2F0ZVRvKG9mZmVyKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17b2ZmZXIuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRCYXIgbm9DaGF0QnV0dG9uPXt0cnVlfSBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgICA8Rml4ZWRNb2JpbGVGb290ZXIgb2ZmZXJzUGFnZT17dHJ1ZX0gey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJzVmlldyIsImltcG9ydCBPZmZlcnNWaWV3IGZyb20gJy4vT2ZmZXJzVmlldydcblxuZXhwb3J0IGRlZmF1bHQgT2ZmZXJzVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IE9mZmVyc1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL29mZmVycyc7XG5pbXBvcnQgeyB0b2dnbGVPUERDcml0ZXJpYSwgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIGdldE9mZmVyTGlzdCwgc2VsZWN0U2VhcmNoVHlwZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmNsYXNzIE9mZmVycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE9mZmVyc1ZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIG9mZmVyTGlzdFxuICAgIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICBjb25zdCB7XG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb25cbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlNcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9mZmVyTGlzdCxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9nZ2xlT1BEQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcnMpID0+IGRpc3BhdGNoKHRvZ2dsZU9QRENyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVycykpLFxuICAgICAgICB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVycykgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXJzKSksXG4gICAgICAgIHNlbGVjdFNlYXJjaFR5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RTZWFyY2hUeXBlKHR5cGUpKSxcbiAgICAgICAgZ2V0T2ZmZXJMaXN0OiAobGF0LCBsb25nKSA9PiBkaXNwYXRjaChnZXRPZmZlckxpc3QobGF0LCBsb25nKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE9mZmVycyk7Il0sInNvdXJjZVJvb3QiOiIifQ==