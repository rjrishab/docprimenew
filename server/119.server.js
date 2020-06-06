exports.ids = [119];
exports.modules = {

/***/ "./dev/js/components/insurance/InsuranceNetworkView.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/insurance/InsuranceNetworkView.js ***!
  \*************************************************************/
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

var _locationElements = __webpack_require__(/*! ../../containers/commons/locationElements */ "./dev/js/containers/commons/locationElements.js");

var _locationElements2 = _interopRequireDefault(_locationElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InsuranceNetworkView extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.topLabClick = () => {
            this.setState({
                topLabActive: true,
                selectedChar: null
            });
            this.updateInsuranceNetwork('lab', '');
        };

        this.state = {
            type: this.props.networkType,
            searchValue: '',
            placeholder: '',
            searchCities: [],
            selectedChar: 0,
            showAlphabets: true,
            topLabActive: true,
            docSearch: 'name'
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
        let searchString = this.getCharacter(this.state.selectedChar);
        if (this.state.type == 'doctor') {
            this.updateInsuranceNetwork(this.state.type, searchString, this.state.docSearch);
        } else {
            this.updateInsuranceNetwork(this.state.type, searchString);
        }
        this.setState({ placeholder: `Search ${this.state.type}` });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedLocation != this.props.selectedLocation) {
            let selectedLocation = '';
            let lat = 28.644800;
            let long = 77.216721;
            selectedLocation = nextProps.selectedLocation;
            lat = selectedLocation.geometry.location.lat;
            long = selectedLocation.geometry.location.lng;
            if (typeof lat === 'function') lat = lat();
            if (typeof long === 'function') long = long();
            let searchString = this.getCharacter(this.state.selectedChar);
            this.props.getInsuranceNetworks(lat, long, this.state.type, searchString);
        }
    }

    getCharacter(index) {
        return String.fromCharCode(97 + index);
    }

    updateInsuranceNetwork(type, string, searchBy = '') {
        let { lat, long } = this.getLocation();
        this.props.getInsuranceNetworks(lat, long, type, string, searchBy); // get user insurance networks
    }

    getLocation() {
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
        return { lat, long };
    }

    tabClick(type) {
        if (type == 'doctor') {
            this.setState({
                type: type,
                placeholder: 'Search doctor',
                searchValue: '',
                selectedChar: 0,
                docSearch: 'name'
            });
            let searchString = this.getCharacter(0);
            this.updateInsuranceNetwork(type, searchString, 'name');
        } else if (type == 'lab') {
            this.setState({
                type: type,
                placeholder: 'Search lab',
                searchValue: '',
                topLabActive: true,
                selectedChar: null
            });
            this.updateInsuranceNetwork(type, '');
        }
        this.props.setNetworkType(type);
        this.setState({ showAlphabets: true });
    }

    inputHandler(e) {
        this.setState({ searchValue: e.target.value });
        if (this.state.type == 'doctor') {
            if (e.target.value) {
                this.setState({ showAlphabets: false });
                this.updateInsuranceNetwork(this.state.type, e.target.value, this.state.docSearch);
            } else {
                if (this.state.docSearch == 'name') {
                    this.setState({ showAlphabets: true });
                } else {
                    this.setState({ showAlphabets: false });
                }
                let searchString = this.getCharacter(this.state.selectedChar);
                this.updateInsuranceNetwork(this.state.type, searchString, this.state.docSearch);
            }
        } else {
            if (e.target.value) {
                this.setState({ showAlphabets: false });
                this.updateInsuranceNetwork(this.state.type, e.target.value);
            } else {
                this.setState({ showAlphabets: true });
                let searchString = this.getCharacter(this.state.selectedChar);
                this.updateInsuranceNetwork(this.state.type, searchString);
            }
        }
    }

    selectLocation(city) {
        this.child.selectLocation(city, () => {
            this.setState({ searchCities: [] });
        });
    }

    getCityListLayout(searchResults = []) {
        if (searchResults.length) {
            this.setState({ searchCities: searchResults });
        } else {
            this.setState({ searchCities: [], searchValue: '' });
        }
    }

    alphabetClick(index) {
        this.setState({ selectedChar: index, topLabActive: false });
        let searchString = this.getCharacter(index);
        if (this.state.type == 'doctor') {
            this.updateInsuranceNetwork(this.state.type, searchString, 'name');
        } else {
            this.updateInsuranceNetwork(this.state.type, searchString);
        }
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    getAlphabets() {
        let alphabets = [];
        for (let i = 0; i <= 25; i++) {
            alphabets.push(String.fromCharCode(65 + i));
        }
        return alphabets;
    }

    resultClick(id, url) {
        if (url) {
            this.props.history.push(`/${url}?from=insurance_network`);
        } else {
            this.props.history.push(`/opd/doctor/${id}?from=insurance_network`);
        }
    }

    radioClick(type) {
        let searchString = this.getCharacter(this.state.selectedChar);
        this.setState({ searchValue: '', showAlphabets: true });
        if (type == 'name') {
            this.setState({ docSearch: 'name', showAlphabets: true });
            this.updateInsuranceNetwork('doctor', searchString, 'name');
        } else {
            this.setState({ docSearch: 'specialization', showAlphabets: false });
        }
    }

    render() {
        let alphabets = this.getAlphabets();
        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
            _react2.default.createElement(_DesktopProfileHeader2.default, _extends({}, this.props, { showPackageStrip: true })),
            _react2.default.createElement(
                'section',
                { className: 'container dp-container-div' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                        _react2.default.createElement(
                            'div',
                            { className: 'container-fluid' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'ntwrk-tabs' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-center', onClick: () => this.tabClick('doctor'), style: this.state.type == 'doctor' ? { borderBottom: '2px solid #f78631' } : {} },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'fw-500' },
                                                'Doctors'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-center', onClick: () => this.tabClick('lab'), style: this.state.type == 'lab' ? { borderBottom: '2px solid #f78631' } : {} },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'fw-500' },
                                                'Diagnostic Labs'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'widget mb-10' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'search-top-container' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'serch-nw-inputs-container' },
                                                _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: ref => this.child = ref, getCityListLayout: this.getCityListLayout.bind(this), resultType: 'search', fromCriteria: true, commonSearchPage: true })),
                                                this.state.type == 'doctor' ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'srch-radio-btns ipd-srch-radio-btn' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'dtl-radio' },
                                                        _react2.default.createElement(
                                                            'label',
                                                            { className: 'container-radio', style: { fontSize: 13 } },
                                                            'Search by name',
                                                            _react2.default.createElement('input', { type: 'radio', onChange: () => this.radioClick('name'), checked: this.state.docSearch == 'name', name: 'radio' }),
                                                            _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'dtl-radio' },
                                                        _react2.default.createElement(
                                                            'label',
                                                            { className: 'container-radio', style: { fontSize: 13 } },
                                                            'Search by specialization',
                                                            _react2.default.createElement('input', { type: 'radio', onChange: () => this.radioClick('specialization'), checked: this.state.docSearch == 'specialization', name: 'radio' }),
                                                            _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                        )
                                                    )
                                                ) : '',
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'serch-nw-inputs mb-0' },
                                                    _react2.default.createElement('input', { type: 'text', autoComplete: 'off', className: 'd-block new-srch-doc-lab', id: 'search_bar', onChange: this.inputHandler.bind(this), value: this.state.searchValue, placeholder: this.state.placeholder }),
                                                    _react2.default.createElement('img', { style: { width: '15px' }, className: 'srch-inp-img', src: "/assets" + "/img/shape-srch.svg" })
                                                )
                                            )
                                        )
                                    ),
                                    this.state.searchCities.length > 0 ? _react2.default.createElement(
                                        'section',
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'widget searchMargin' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'common-search-container pt-0' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'common-listing-cont' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        null,
                                                        this.state.searchCities.map((result, i) => {
                                                            return _react2.default.createElement(
                                                                'li',
                                                                { key: i, onClick: this.selectLocation.bind(this, result) },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    result.description
                                                                )
                                                            );
                                                        })
                                                    )
                                                )
                                            )
                                        )
                                    ) : '',
                                    this.state.searchCities.length == 0 ? _react2.default.createElement(
                                        'section',
                                        { className: 'widget searchMargin' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'ntwrk-alpha-div' },
                                            !this.state.searchValue && this.props.insuranceNetwork && this.props.insuranceNetwork.total_count ? _react2.default.createElement(
                                                'p',
                                                { className: 'fw-500', style: { paddingLeft: 10, marginBottom: 4 } },
                                                this.props.insuranceNetwork.total_count,
                                                ' ',
                                                this.state.type,
                                                's covered under insurance'
                                            ) : '',
                                            this.state.showAlphabets ? _react2.default.createElement(
                                                'div',
                                                { className: 'd-flex top-ntwrks-div' },
                                                this.state.type == 'lab' ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'top-ntwrks', onClick: this.topLabClick },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: `${this.state.topLabActive ? `fw-500 text-primary` : `fw-500`}` },
                                                        'Top Labs'
                                                    )
                                                ) : '',
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'ntwrk-alpha' },
                                                    alphabets && alphabets.length ? alphabets.map((character, i) => {
                                                        return _react2.default.createElement(
                                                            'li',
                                                            { key: i, onClick: () => this.alphabetClick(i), style: i == this.state.selectedChar ? { cursor: 'auto' } : { cursor: 'pointer' } },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: i == this.state.selectedChar ? 'alphaSelected ntwrk-char fw-500' : 'ntwrk-char fw-500' },
                                                                character
                                                            )
                                                        );
                                                    }) : ''
                                                )
                                            ) : ''
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            this.props.insuranceNetwork && this.props.insuranceNetwork.results && this.props.insuranceNetwork.results.length ? _react2.default.createElement(
                                                'ul',
                                                null,
                                                this.props.insuranceNetwork.results.map((result, index) => {
                                                    return _react2.default.createElement(
                                                        'li',
                                                        { key: index, className: 'ntwrk-list-item', onClick: () => this.resultClick(result.id, result.url) },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'ntwrk-list-content' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'ntwrk-list-content-name fw-500' },
                                                                result.name
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'd-flex align-items-center flex-wrap' },
                                                                result.specializations && result.specializations.length ? _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'd-flex align-items-center flex-wrap', style: { marginRight: 4 } },
                                                                    _react2.default.createElement(
                                                                        'p',
                                                                        { className: 'ntwrk-list-content-city fw-500' },
                                                                        result.specializations[0]
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        { style: { marginLeft: 4, color: '#757575' } },
                                                                        '|'
                                                                    )
                                                                ) : '',
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'ntwrk-list-content-city fw-500' },
                                                                    result.city
                                                                )
                                                            )
                                                        ),
                                                        result.distance ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'ntwrk-list-dist' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500' },
                                                                result.distance,
                                                                ' km'
                                                            )
                                                        ) : ''
                                                    );
                                                })
                                            ) : this.props.insuranceNetwork && this.props.insuranceNetwork.results && !this.props.insuranceNetwork.results.length ? _react2.default.createElement(
                                                'p',
                                                { className: 'fw-500 text-center', style: { fontSize: 18, padding: '15px 0px' } },
                                                'No results found !!'
                                            ) : ''
                                        )
                                    ) : ""
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { onClick: () => this.props.history.go(-1), className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round text-lg sticky-btn' },
                            'Back'
                        )
                    )
                )
            )
        );
    }
}

exports.default = InsuranceNetworkView;

/***/ }),

/***/ "./dev/js/containers/insurance/InsuranceNetwork.js":
/*!*********************************************************!*\
  !*** ./dev/js/containers/insurance/InsuranceNetwork.js ***!
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

var _InsuranceNetworkView = __webpack_require__(/*! ../../components/insurance/InsuranceNetworkView.js */ "./dev/js/components/insurance/InsuranceNetworkView.js");

var _InsuranceNetworkView2 = _interopRequireDefault(_InsuranceNetworkView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InsuranceNetwork extends _react2.default.Component {

    render() {
        return _react2.default.createElement(_InsuranceNetworkView2.default, this.props);
    }
}

const mapStateToProps = state => {
    const {
        insuranceNetwork,
        inputString,
        networkType
    } = state.SITE_MAP;

    const {
        selectedLocation
    } = state.SEARCH_CRITERIA_OPD;

    return {
        insuranceNetwork,
        inputString,
        selectedLocation,
        networkType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getInsuranceNetworks: (lat, long, type, searchString, searchBy) => dispatch((0, _index.getInsuranceNetworks)(lat, long, type, searchString, searchBy)),
        setNetworkType: type => dispatch((0, _index.setNetworkType)(type))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceNetwork);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvSW5zdXJhbmNlTmV0d29ya1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvaW5zdXJhbmNlL0luc3VyYW5jZU5ldHdvcmsuanMiXSwibmFtZXMiOlsiSW5zdXJhbmNlTmV0d29ya1ZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ0b3BMYWJDbGljayIsInNldFN0YXRlIiwidG9wTGFiQWN0aXZlIiwic2VsZWN0ZWRDaGFyIiwidXBkYXRlSW5zdXJhbmNlTmV0d29yayIsInN0YXRlIiwidHlwZSIsIm5ldHdvcmtUeXBlIiwic2VhcmNoVmFsdWUiLCJwbGFjZWhvbGRlciIsInNlYXJjaENpdGllcyIsInNob3dBbHBoYWJldHMiLCJkb2NTZWFyY2giLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsInNjcm9sbFRvIiwic2VhcmNoU3RyaW5nIiwiZ2V0Q2hhcmFjdGVyIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNlbGVjdGVkTG9jYXRpb24iLCJsYXQiLCJsb25nIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxuZyIsImdldEluc3VyYW5jZU5ldHdvcmtzIiwiaW5kZXgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJzdHJpbmciLCJzZWFyY2hCeSIsImdldExvY2F0aW9uIiwidGFiQ2xpY2siLCJzZXROZXR3b3JrVHlwZSIsImlucHV0SGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbGVjdExvY2F0aW9uIiwiY2l0eSIsImNoaWxkIiwiZ2V0Q2l0eUxpc3RMYXlvdXQiLCJzZWFyY2hSZXN1bHRzIiwibGVuZ3RoIiwiYWxwaGFiZXRDbGljayIsImdldEFscGhhYmV0cyIsImFscGhhYmV0cyIsImkiLCJwdXNoIiwicmVzdWx0Q2xpY2siLCJpZCIsInVybCIsImhpc3RvcnkiLCJyYWRpb0NsaWNrIiwicmVuZGVyIiwiYm9yZGVyQm90dG9tIiwicmVmIiwiYmluZCIsImZvbnRTaXplIiwid2lkdGgiLCJBU1NFVFNfQkFTRV9VUkwiLCJtYXAiLCJyZXN1bHQiLCJkZXNjcmlwdGlvbiIsImluc3VyYW5jZU5ldHdvcmsiLCJ0b3RhbF9jb3VudCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luQm90dG9tIiwiY2hhcmFjdGVyIiwiY3Vyc29yIiwicmVzdWx0cyIsIm5hbWUiLCJzcGVjaWFsaXphdGlvbnMiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJjb2xvciIsImRpc3RhbmNlIiwicGFkZGluZyIsImdvIiwiSW5zdXJhbmNlTmV0d29yayIsIm1hcFN0YXRlVG9Qcm9wcyIsImlucHV0U3RyaW5nIiwiU0lURV9NQVAiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLG9CQUFOLFNBQW1DQyxnQkFBTUMsU0FBekMsQ0FBbUQ7QUFDL0NDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjs7QUFEZSxhQXFLbkJDLFdBckttQixHQXFLTCxNQUFNO0FBQ2hCLGlCQUFLQyxRQUFMLENBQWM7QUFDVkMsOEJBQWMsSUFESjtBQUVWQyw4QkFBYztBQUZKLGFBQWQ7QUFJQSxpQkFBS0Msc0JBQUwsQ0FBNEIsS0FBNUIsRUFBbUMsRUFBbkM7QUFDSCxTQTNLa0I7O0FBRWYsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGtCQUFNLEtBQUtQLEtBQUwsQ0FBV1EsV0FEUjtBQUVUQyx5QkFBYSxFQUZKO0FBR1RDLHlCQUFhLEVBSEo7QUFJVEMsMEJBQWMsRUFKTDtBQUtUUCwwQkFBYyxDQUxMO0FBTVRRLDJCQUFlLElBTk47QUFPVFQsMEJBQWMsSUFQTDtBQVFUVSx1QkFBVztBQVJGLFNBQWI7QUFVSDs7QUFFREMsd0JBQW9CO0FB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bXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IExvY2F0aW9uRWxlbWVudHMgZnJvbSAnLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uRWxlbWVudHMnO1xuXG5jbGFzcyBJbnN1cmFuY2VOZXR3b3JrVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0eXBlOiB0aGlzLnByb3BzLm5ldHdvcmtUeXBlLFxuICAgICAgICAgICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICAgICAgc2VhcmNoQ2l0aWVzOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdGVkQ2hhcjogMCxcbiAgICAgICAgICAgIHNob3dBbHBoYWJldHM6IHRydWUsXG4gICAgICAgICAgICB0b3BMYWJBY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBkb2NTZWFyY2g6ICduYW1lJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VhcmNoU3RyaW5nID0gdGhpcy5nZXRDaGFyYWN0ZXIodGhpcy5zdGF0ZS5zZWxlY3RlZENoYXIpXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnR5cGUgPT0gJ2RvY3RvcicpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW5zdXJhbmNlTmV0d29yayh0aGlzLnN0YXRlLnR5cGUsIHNlYXJjaFN0cmluZywgdGhpcy5zdGF0ZS5kb2NTZWFyY2gpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUluc3VyYW5jZU5ldHdvcmsodGhpcy5zdGF0ZS50eXBlLCBzZWFyY2hTdHJpbmcpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBsYWNlaG9sZGVyOiBgU2VhcmNoICR7dGhpcy5zdGF0ZS50eXBlfWAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLnNlbGVjdGVkTG9jYXRpb24gIT0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9ICcnXG4gICAgICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbiA9IG5leHRQcm9wcy5zZWxlY3RlZExvY2F0aW9uO1xuICAgICAgICAgICAgbGF0ID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvbmcgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcbiAgICAgICAgICAgIGxldCBzZWFyY2hTdHJpbmcgPSB0aGlzLmdldENoYXJhY3Rlcih0aGlzLnN0YXRlLnNlbGVjdGVkQ2hhcilcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0SW5zdXJhbmNlTmV0d29ya3MobGF0LCBsb25nLCB0aGlzLnN0YXRlLnR5cGUsIHNlYXJjaFN0cmluZylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENoYXJhY3RlcihpbmRleCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIGluZGV4KVxuICAgIH1cblxuICAgIHVwZGF0ZUluc3VyYW5jZU5ldHdvcmsodHlwZSwgc3RyaW5nLCBzZWFyY2hCeSA9ICcnKSB7XG4gICAgICAgIGxldCB7IGxhdCwgbG9uZyB9ID0gdGhpcy5nZXRMb2NhdGlvbigpXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0SW5zdXJhbmNlTmV0d29ya3MobGF0LCBsb25nLCB0eXBlLCBzdHJpbmcsIHNlYXJjaEJ5KSAvLyBnZXQgdXNlciBpbnN1cmFuY2UgbmV0d29ya3NcbiAgICB9XG5cbiAgICBnZXRMb2NhdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkTG9jYXRpb24gPSAnJ1xuICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgIGxldCBsb25nID0gNzcuMjE2NzIxXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24gPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb247XG4gICAgICAgICAgICBsYXQgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxhdFxuICAgICAgICAgICAgbG9uZyA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubG5nXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGxhdCwgbG9uZyB9XG4gICAgfVxuXG4gICAgdGFiQ2xpY2sodHlwZSkge1xuICAgICAgICBpZiAodHlwZSA9PSAnZG9jdG9yJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBkb2N0b3InLFxuICAgICAgICAgICAgICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENoYXI6IDAsXG4gICAgICAgICAgICAgICAgZG9jU2VhcmNoOiAnbmFtZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQgc2VhcmNoU3RyaW5nID0gdGhpcy5nZXRDaGFyYWN0ZXIoMClcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW5zdXJhbmNlTmV0d29yayh0eXBlLCBzZWFyY2hTdHJpbmcsICduYW1lJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09ICdsYWInKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGxhYicsXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgIHRvcExhYkFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENoYXI6IG51bGxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUluc3VyYW5jZU5ldHdvcmsodHlwZSwgJycpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZXROZXR3b3JrVHlwZSh0eXBlKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FscGhhYmV0czogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudHlwZSA9PSAnZG9jdG9yJykge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBbHBoYWJldHM6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJbnN1cmFuY2VOZXR3b3JrKHRoaXMuc3RhdGUudHlwZSwgZS50YXJnZXQudmFsdWUsIHRoaXMuc3RhdGUuZG9jU2VhcmNoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kb2NTZWFyY2ggPT0gJ25hbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWxwaGFiZXRzOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBbHBoYWJldHM6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBzZWFyY2hTdHJpbmcgPSB0aGlzLmdldENoYXJhY3Rlcih0aGlzLnN0YXRlLnNlbGVjdGVkQ2hhcilcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUluc3VyYW5jZU5ldHdvcmsodGhpcy5zdGF0ZS50eXBlLCBzZWFyY2hTdHJpbmcsIHRoaXMuc3RhdGUuZG9jU2VhcmNoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBbHBoYWJldHM6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJbnN1cmFuY2VOZXR3b3JrKHRoaXMuc3RhdGUudHlwZSwgZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWxwaGFiZXRzOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaFN0cmluZyA9IHRoaXMuZ2V0Q2hhcmFjdGVyKHRoaXMuc3RhdGUuc2VsZWN0ZWRDaGFyKVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW5zdXJhbmNlTmV0d29yayh0aGlzLnN0YXRlLnR5cGUsIHNlYXJjaFN0cmluZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdExvY2F0aW9uKGNpdHkpIHtcbiAgICAgICAgdGhpcy5jaGlsZC5zZWxlY3RMb2NhdGlvbigoY2l0eSksICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IFtdIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0Q2l0eUxpc3RMYXlvdXQoc2VhcmNoUmVzdWx0cyA9IFtdKSB7XG4gICAgICAgIGlmIChzZWFyY2hSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogc2VhcmNoUmVzdWx0cyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogW10sIHNlYXJjaFZhbHVlOiAnJyB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWxwaGFiZXRDbGljayhpbmRleCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDaGFyOiBpbmRleCwgdG9wTGFiQWN0aXZlOiBmYWxzZSB9KVxuICAgICAgICBsZXQgc2VhcmNoU3RyaW5nID0gdGhpcy5nZXRDaGFyYWN0ZXIoaW5kZXgpXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnR5cGUgPT0gJ2RvY3RvcicpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW5zdXJhbmNlTmV0d29yayh0aGlzLnN0YXRlLnR5cGUsIHNlYXJjaFN0cmluZywgJ25hbWUnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJbnN1cmFuY2VOZXR3b3JrKHRoaXMuc3RhdGUudHlwZSwgc2VhcmNoU3RyaW5nKVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWxwaGFiZXRzKCkge1xuICAgICAgICBsZXQgYWxwaGFiZXRzID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjU7IGkrKykge1xuICAgICAgICAgICAgYWxwaGFiZXRzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbHBoYWJldHNcbiAgICB9XG5cbiAgICByZXN1bHRDbGljayhpZCwgdXJsKSB7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt1cmx9P2Zyb209aW5zdXJhbmNlX25ldHdvcmtgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7aWR9P2Zyb209aW5zdXJhbmNlX25ldHdvcmtgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9wTGFiQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG9wTGFiQWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgc2VsZWN0ZWRDaGFyOiBudWxsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudXBkYXRlSW5zdXJhbmNlTmV0d29yaygnbGFiJywgJycpXG4gICAgfVxuXG4gICAgcmFkaW9DbGljayh0eXBlKSB7XG4gICAgICAgIGxldCBzZWFyY2hTdHJpbmcgPSB0aGlzLmdldENoYXJhY3Rlcih0aGlzLnN0YXRlLnNlbGVjdGVkQ2hhcilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiAnJywgc2hvd0FscGhhYmV0czogdHJ1ZSB9KVxuICAgICAgICBpZiAodHlwZSA9PSAnbmFtZScpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkb2NTZWFyY2g6ICduYW1lJywgc2hvd0FscGhhYmV0czogdHJ1ZSB9KVxuICAgICAgICAgICAgdGhpcy51cGRhdGVJbnN1cmFuY2VOZXR3b3JrKCdkb2N0b3InLCBzZWFyY2hTdHJpbmcsICduYW1lJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkb2NTZWFyY2g6ICdzcGVjaWFsaXphdGlvbicsIHNob3dBbHBoYWJldHM6IGZhbHNlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBhbHBoYWJldHMgPSB0aGlzLmdldEFscGhhYmV0cygpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgey4uLnRoaXMucHJvcHN9IHNob3dQYWNrYWdlU3RyaXA9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGRwLWNvbnRhaW5lci1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm50d3JrLXRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMudGFiQ2xpY2soJ2RvY3RvcicpfSBzdHlsZT17dGhpcy5zdGF0ZS50eXBlID09ICdkb2N0b3InID8geyBib3JkZXJCb3R0b206ICcycHggc29saWQgI2Y3ODYzMScgfSA6IHt9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkRvY3RvcnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgb25DbGljaz17KCkgPT4gdGhpcy50YWJDbGljaygnbGFiJyl9IHN0eWxlPXt0aGlzLnN0YXRlLnR5cGUgPT0gJ2xhYicgPyB7IGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCAjZjc4NjMxJyB9IDoge319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+RGlhZ25vc3RpYyBMYWJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC10b3AtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcmNoLW53LWlucHV0cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25FbGVtZW50cyB7Li4udGhpcy5wcm9wc30gb25SZWY9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9IGdldENpdHlMaXN0TGF5b3V0PXt0aGlzLmdldENpdHlMaXN0TGF5b3V0LmJpbmQodGhpcyl9IHJlc3VsdFR5cGU9J3NlYXJjaCcgZnJvbUNyaXRlcmlhPXt0cnVlfSBjb21tb25TZWFyY2hQYWdlPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiByYWRpbyBidXR0b25zICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50eXBlID09ICdkb2N0b3InID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3JjaC1yYWRpby1idG5zIGlwZC1zcmNoLXJhZGlvLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIiBzdHlsZT17eyBmb250U2l6ZTogMTMgfX0+U2VhcmNoIGJ5IG5hbWU8aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DaGFuZ2U9eygpID0+IHRoaXMucmFkaW9DbGljaygnbmFtZScpfSBjaGVja2VkPXt0aGlzLnN0YXRlLmRvY1NlYXJjaCA9PSAnbmFtZSd9IG5hbWU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIiBzdHlsZT17eyBmb250U2l6ZTogMTMgfX0+U2VhcmNoIGJ5IHNwZWNpYWxpemF0aW9uPGlucHV0IHR5cGU9XCJyYWRpb1wiIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnJhZGlvQ2xpY2soJ3NwZWNpYWxpemF0aW9uJyl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUuZG9jU2VhcmNoID09ICdzcGVjaWFsaXphdGlvbid9IG5hbWU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJjaC1udy1pbnB1dHMgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBjbGFzc05hbWU9XCJkLWJsb2NrIG5ldy1zcmNoLWRvYy1sYWJcIiBpZD1cInNlYXJjaF9iYXJcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9IHBsYWNlaG9sZGVyPXt0aGlzLnN0YXRlLnBsYWNlaG9sZGVyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTVweCcgfX0gY2xhc3NOYW1lPVwic3JjaC1pbnAtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc2hhcGUtc3JjaC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgc2VhcmNoTWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXIgcHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tbGlzdGluZy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaENpdGllcy5tYXAoKHJlc3VsdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfSBvbkNsaWNrPXt0aGlzLnNlbGVjdExvY2F0aW9uLmJpbmQodGhpcywgcmVzdWx0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntyZXN1bHQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoQ2l0aWVzLmxlbmd0aCA9PSAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndpZGdldCBzZWFyY2hNYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnR3cmstYWxwaGEtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgJiYgdGhpcy5wcm9wcy5pbnN1cmFuY2VOZXR3b3JrICYmIHRoaXMucHJvcHMuaW5zdXJhbmNlTmV0d29yay50b3RhbF9jb3VudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAxMCwgbWFyZ2luQm90dG9tOiA0IH19Pnt0aGlzLnByb3BzLmluc3VyYW5jZU5ldHdvcmsudG90YWxfY291bnR9IHt0aGlzLnN0YXRlLnR5cGV9cyBjb3ZlcmVkIHVuZGVyIGluc3VyYW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0FscGhhYmV0cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHRvcC1udHdya3MtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50eXBlID09ICdsYWInID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbnR3cmtzXCIgb25DbGljaz17dGhpcy50b3BMYWJDbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUudG9wTGFiQWN0aXZlID8gYGZ3LTUwMCB0ZXh0LXByaW1hcnlgIDogYGZ3LTUwMGB9YH0+VG9wIExhYnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibnR3cmstYWxwaGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhYmV0cyAmJiBhbHBoYWJldHMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhYmV0cy5tYXAoKGNoYXJhY3RlciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmFscGhhYmV0Q2xpY2soaSl9IHN0eWxlPXtpID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRDaGFyID8geyBjdXJzb3I6ICdhdXRvJyB9IDogeyBjdXJzb3I6ICdwb2ludGVyJyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aSA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2hhciA/ICdhbHBoYVNlbGVjdGVkIG50d3JrLWNoYXIgZnctNTAwJyA6ICdudHdyay1jaGFyIGZ3LTUwMCd9PntjaGFyYWN0ZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaW5zdXJhbmNlTmV0d29yayAmJiB0aGlzLnByb3BzLmluc3VyYW5jZU5ldHdvcmsucmVzdWx0cyAmJiB0aGlzLnByb3BzLmluc3VyYW5jZU5ldHdvcmsucmVzdWx0cy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pbnN1cmFuY2VOZXR3b3JrLnJlc3VsdHMubWFwKChyZXN1bHQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJudHdyay1saXN0LWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlc3VsdENsaWNrKHJlc3VsdC5pZCwgcmVzdWx0LnVybCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm50d3JrLWxpc3QtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnR3cmstbGlzdC1jb250ZW50LW5hbWUgZnctNTAwXCI+e3Jlc3VsdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zcGVjaWFsaXphdGlvbnMgJiYgcmVzdWx0LnNwZWNpYWxpemF0aW9ucy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtd3JhcFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm50d3JrLWxpc3QtY29udGVudC1jaXR5IGZ3LTUwMFwiPntyZXN1bHQuc3BlY2lhbGl6YXRpb25zWzBdfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA0LCBjb2xvcjogJyM3NTc1NzUnIH19Pnw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudHdyay1saXN0LWNvbnRlbnQtY2l0eSBmdy01MDBcIj57cmVzdWx0LmNpdHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGlzdGFuY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnR3cmstbGlzdC1kaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPntyZXN1bHQuZGlzdGFuY2V9IGttPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaW5zdXJhbmNlTmV0d29yayAmJiB0aGlzLnByb3BzLmluc3VyYW5jZU5ldHdvcmsucmVzdWx0cyAmJiAhdGhpcy5wcm9wcy5pbnN1cmFuY2VOZXR3b3JrLnJlc3VsdHMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgZm9udFNpemU6IDE4LCBwYWRkaW5nOiAnMTVweCAwcHgnIH19ID5ObyByZXN1bHRzIGZvdW5kICEhPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKX0gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgc3RpY2t5LWJ0blwiPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdXJhbmNlTmV0d29ya1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBnZXRJbnN1cmFuY2VOZXR3b3Jrcywgc2V0TmV0d29ya1R5cGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IEluc3VyYW5jZU5ldHdvcmtWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5zdXJhbmNlL0luc3VyYW5jZU5ldHdvcmtWaWV3LmpzJ1xuXG5jbGFzcyBJbnN1cmFuY2VOZXR3b3JrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbnN1cmFuY2VOZXR3b3JrVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBpbnN1cmFuY2VOZXR3b3JrLFxuICAgICAgICBpbnB1dFN0cmluZyxcbiAgICAgICAgbmV0d29ya1R5cGVcbiAgICB9ID0gc3RhdGUuU0lURV9NQVBcblxuICAgIGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvblxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbnN1cmFuY2VOZXR3b3JrLFxuICAgICAgICBpbnB1dFN0cmluZyxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgbmV0d29ya1R5cGVcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEluc3VyYW5jZU5ldHdvcmtzOiAobGF0LCBsb25nLCB0eXBlLCBzZWFyY2hTdHJpbmcsIHNlYXJjaEJ5KSA9PiBkaXNwYXRjaChnZXRJbnN1cmFuY2VOZXR3b3JrcyhsYXQsIGxvbmcsIHR5cGUsIHNlYXJjaFN0cmluZywgc2VhcmNoQnkpKSxcbiAgICAgICAgc2V0TmV0d29ya1R5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZXROZXR3b3JrVHlwZSh0eXBlKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluc3VyYW5jZU5ldHdvcmspIl0sInNvdXJjZVJvb3QiOiIifQ==