exports.ids = [12];
exports.modules = {

/***/ "./dev/js/helpers/urltoState.js":
/*!**************************************!*\
  !*** ./dev/js/helpers/urltoState.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.opdSearchStateBuilder = opdSearchStateBuilder;
exports.labSearchStateBuilder = labSearchStateBuilder;
exports.PackageSearchStateBuilder = PackageSearchStateBuilder;
exports.HospitalSearchStateBuilder = HospitalSearchStateBuilder;

var _mapHelpers = __webpack_require__(/*! ./mapHelpers.js */ "./dev/js/helpers/mapHelpers.js");

var _api = __webpack_require__(/*! ../api/api */ "./dev/js/api/api.js");

function opdSearchStateBuilder(selectLocation, querParams, isServer = false, location_ms = null) {

    try {
        return new Promise((resolve, reject) => {

            let _getLocationParamBind = tag => _getLocationParam(querParams, isServer, tag);

            let specializations_ids = _getLocationParamBind('specializations') || "";
            let condition_ids = _getLocationParamBind('conditions') || "";

            let lat = _getLocationParamBind('lat') || "";
            let long = _getLocationParamBind('long') || "";
            let place_id = _getLocationParamBind('place_id') || "";

            let locality = _getLocationParamBind('locality') || "";
            let sub_locality = _getLocationParamBind('sub_locality') || "";

            //let min_distance = parseInt(_getLocationParamBind('min_distance')) || 0
            //let max_distance = parseInt(_getLocationParamBind('max_distance')) || 15
            //let min_fees = parseInt(_getLocationParamBind('min_fees')) || 0
            //let max_fees = parseInt(_getLocationParamBind('max_fees')) || 3000
            //let is_available = _getLocationParamBind('is_available') === "true"
            //let is_female = _getLocationParamBind('is_female') === "true"

            let sort_on = _getLocationParamBind('sort_on') || '';
            let sort_order = _getLocationParamBind('sort_order') || '';
            let availability = _getLocationParamBind('availability') || [];
            let avg_ratings = _getLocationParamBind('avg_ratings') || '';
            let gender = _getLocationParamBind('gender') || '';
            let sits_at_clinic = _getLocationParamBind('sits_at_clinic') === "true";
            let sits_at_hospital = _getLocationParamBind('sits_at_hospital') === "true";

            let doctor_name = _getLocationParamBind('doctor_name');
            doctor_name = doctor_name || "";
            let hospital_name = _getLocationParamBind('hospital_name');
            hospital_name = hospital_name || "";
            let locationType = _getLocationParamBind('locationType') || "geo";
            let procedures_ids = _getLocationParamBind('procedure_ids') || "";
            let category_ids = _getLocationParamBind('procedure_category_ids') || "";
            let ipd_procedures = _getLocationParamBind('ipd_procedures') || "";
            let page = _getLocationParamBind('page') || 1;
            page = parseInt(page);
            let hospital_id = _getLocationParamBind('hospital_id') || "";
            let is_insured = _getLocationParamBind('is_insured') === "true";
            let group_ids = _getLocationParamBind('group_ids') || '';
            let specialization_filter_ids = _getLocationParamBind('specialization_filter_ids') || '';
            let spec = [];
            let cond = [];
            let procedures = [];
            let procedure_categories = [];
            let ipd_ids = [];
            let group_data = [];
            if (specializations_ids) {
                spec = specializations_ids.split(',').map(x => {
                    return {
                        type: 'speciality',
                        name: "",
                        id: parseInt(x)
                    };
                });
            }

            if (condition_ids) {
                cond = condition_ids.split(',').map(x => {
                    return {
                        type: 'condition',
                        name: "",
                        id: parseInt(x)
                    };
                });
            }

            if (procedures_ids) {
                procedures = procedures_ids.split(',').map(x => {
                    return {
                        type: 'procedures',
                        name: "",
                        id: parseInt(x)
                    };
                });
            }

            if (category_ids) {
                procedure_categories = category_ids.split(',').map(x => {
                    return {
                        type: 'procedures_category',
                        name: "",
                        id: parseInt(x)
                    };
                });
            }

            if (ipd_procedures) {
                ipd_ids = ipd_procedures.split(',').map(x => {
                    return {
                        type: 'ipd',
                        name: "",
                        id: parseInt(x)
                    };
                });
            }

            if (group_ids) {
                group_data = group_ids.split(',').map(x => {
                    return {
                        type: 'group_ids',
                        name: "",
                        id: parseInt(x)
                    };
                });
            }

            let commonSelectedCriterias = [...cond, ...spec, ...procedures, ...procedure_categories, ...ipd_ids, ...group_data];

            let filterCriteria = {
                sort_order, gender, availability, avg_ratings, sits_at_hospital, sits_at_clinic, sort_on, specialization_filter_ids
            };

            if (doctor_name) {
                filterCriteria.doctor_name = doctor_name;
            }

            if (hospital_name) {
                filterCriteria.hospital_name = hospital_name;
            }

            if (hospital_id) {
                filterCriteria.hospital_id = hospital_id;
            }

            if (is_insured) {
                filterCriteria.is_insured = is_insured;
            }

            if (!isServer && !location_ms) {
                if (place_id) {
                    setTimeout(() => {
                        (0, _mapHelpers._getLocationFromPlaceId)(place_id, location_object => {
                            selectLocation(location_object, 'autoComplete', false);
                        });
                    }, 1000);
                } else {
                    if (lat && long) {
                        setTimeout(() => {
                            (0, _mapHelpers._getlocationFromLatLong)(lat, long, locationType == 'geoip' ? 'city' : 'locality', location_object => {
                                selectLocation(location_object, locationType, false);
                            });
                        }, 1000);
                    }
                }
            }

            let selectedLocation = null;
            if (lat && long) {
                selectedLocation = { geometry: { location: { lat, lng: long } }, place_id, formatted_address: "Delhi", sub_locality: sub_locality, locality: locality };
            }

            if (location_ms) {
                (0, _api.API_GET)(`/api/v1/geoip/adword/${location_ms}`).then(data => {
                    selectedLocation = { geometry: { location: { lat: data.latitude, lng: data.longitude } }, place_id, formatted_address: "" };

                    if (!isServer) {
                        setTimeout(() => {
                            (0, _mapHelpers._getlocationFromLatLong)(data.latitude, data.longitude, 'locality', location_object => {
                                selectLocation(location_object, 'geo', false);
                            });
                        }, 1000);
                    }

                    resolve({
                        filterCriteria,
                        commonSelectedCriterias,
                        selectedLocation,
                        page
                    });
                }).catch(e => {
                    if (selectedLocation) {
                        if (!isServer) {
                            setTimeout(() => {
                                (0, _mapHelpers._getlocationFromLatLong)(lat, long, 'locality', location_object => {
                                    selectLocation(location_object, 'geo', false);
                                });
                            }, 1000);
                        }
                        resolve({
                            filterCriteria,
                            commonSelectedCriterias,
                            selectedLocation,
                            page
                        });
                    } else {
                        resolve({
                            filterCriteria,
                            commonSelectedCriterias,
                            pagepage,
                            page
                        });
                    }
                });
            } else {
                if (selectedLocation) {
                    resolve({
                        filterCriteria,
                        commonSelectedCriterias,
                        selectedLocation,
                        page
                    });
                } else {
                    resolve({
                        filterCriteria,
                        commonSelectedCriterias,
                        page
                    });
                }
            }
        });
    } catch (e) {
        console.error(e);
    }
}

function labSearchStateBuilder(selectLocation, querParams, isServer = false, location_ms = null) {
    try {
        return new Promise((resolve, reject) => {

            let _getLocationParamBind = tag => _getLocationParam(querParams, isServer, tag);

            let test_ids = _getLocationParamBind('test_ids') || "";
            let lat = _getLocationParamBind('lat') || "";
            let long = _getLocationParamBind('long') || "";
            let place_id = _getLocationParamBind('place_id') || "";
            /*let min_distance = parseInt(_getLocationParamBind('min_distance')) || 0
            let max_distance = parseInt(_getLocationParamBind('max_distance')) || 15
            let min_price = parseInt(_getLocationParamBind('min_price')) || 0
            let max_price = parseInt(_getLocationParamBind('max_price')) || 20000
            */
            let sort_on = _getLocationParamBind('sort_on') || '';
            let sort_order = _getLocationParamBind('sort_order') || '';
            let avg_ratings = _getLocationParamBind('avg_ratings') || '';
            let availability = _getLocationParamBind('availability') || [];
            let home_visit = _getLocationParamBind('home_visit') === "true";
            let lab_visit = _getLocationParamBind('lab_visit') === "true";

            let lab_name = _getLocationParamBind('lab_name') || "";
            lab_name = lab_name || "";
            let network_id = _getLocationParamBind('network_id') || "";
            network_id = network_id || "";
            let locationType = _getLocationParamBind('locationType') || "geo";
            let page = _getLocationParamBind('page') || 1;
            page = parseInt(page);

            let is_insured = _getLocationParamBind('is_insured') === "true";

            let currentSearchedCriterias = [];
            if (test_ids) {
                currentSearchedCriterias = test_ids.split(',').map(x => {
                    return {
                        type: 'test',
                        name: "",
                        id: parseInt(x)
                    };
                });
            }

            let filterCriteria = {
                sort_order, availability, avg_ratings, home_visit, lab_visit, sort_on
            };

            if (lab_name) {
                filterCriteria.lab_name = lab_name;
            }

            if (network_id) {
                filterCriteria.network_id = network_id;
            }

            if (is_insured) {
                filterCriteria.is_insured = is_insured;
            }

            if (!isServer && !location_ms) {
                if (place_id) {
                    setTimeout(() => {
                        (0, _mapHelpers._getLocationFromPlaceId)(place_id, location_object => {
                            selectLocation(location_object, 'autoComplete', false);
                        });
                    }, 1000);
                } else {
                    if (lat && long) {
                        setTimeout(() => {
                            (0, _mapHelpers._getlocationFromLatLong)(lat, long, locationType == 'geoip' ? 'city' : 'locality', location_object => {
                                selectLocation(location_object, locationType, false);
                            });
                        }, 1000);
                    }
                }
            }

            let selectedLocation = null;
            if (lat && long) {
                selectedLocation = { geometry: { location: { lat, lng: long } }, place_id, formatted_address: "Delhi" };
            }

            if (location_ms) {
                (0, _api.API_GET)(`/api/v1/geoip/adword/${location_ms}`).then(data => {
                    selectedLocation = { geometry: { location: { lat: data.latitude, lng: data.longitude } }, place_id, formatted_address: "" };

                    if (!isServer) {
                        setTimeout(() => {
                            (0, _mapHelpers._getlocationFromLatLong)(data.latitude, data.longitude, 'locality', location_object => {
                                selectLocation(location_object, 'geo', false);
                            });
                        }, 1000);
                    }

                    resolve({
                        filterCriteria,
                        currentSearchedCriterias,
                        selectedLocation,
                        page
                    });
                }).catch(e => {
                    if (selectedLocation) {
                        if (!isServer) {
                            setTimeout(() => {
                                (0, _mapHelpers._getlocationFromLatLong)(lat, long, 'locality', location_object => {
                                    selectLocation(location_object, 'geo', false);
                                });
                            }, 1000);
                        }
                        resolve({
                            filterCriteria,
                            currentSearchedCriterias,
                            selectedLocation,
                            page
                        });
                    } else {
                        resolve({
                            filterCriteria,
                            currentSearchedCriterias,
                            page
                        });
                    }
                });
            } else {
                if (selectedLocation) {
                    resolve({
                        filterCriteria,
                        currentSearchedCriterias,
                        selectedLocation,
                        page
                    });
                } else {
                    resolve({
                        filterCriteria,
                        currentSearchedCriterias,
                        page
                    });
                }
            }
        });
    } catch (e) {
        console.error(e);
    }
}

function PackageSearchStateBuilder(selectLocation, querParams, isServer = false, location_ms = null) {
    try {
        return new Promise((resolve, reject) => {

            let _getLocationParamBind = tag => _getLocationParam(querParams, isServer, tag);

            let test_ids = _getLocationParamBind('test_ids') || "";
            let lat = _getLocationParamBind('lat') || "";
            let long = _getLocationParamBind('long') || "";
            let place_id = _getLocationParamBind('place_id') || "";
            /*let min_distance = parseInt(_getLocationParamBind('min_distance')) || 0
            let max_distance = parseInt(_getLocationParamBind('max_distance')) || 15
            let min_price = parseInt(_getLocationParamBind('min_price')) || 0
            let max_price = parseInt(_getLocationParamBind('max_price')) || 20000
            */
            let sort_on = _getLocationParamBind('sort_on') || '';
            let sort_order = _getLocationParamBind('sort_order') || '';
            let avg_rating = _getLocationParamBind('avg_rating') || '';
            let home_visit = _getLocationParamBind('home_visit') === "true";
            let lab_visit = _getLocationParamBind('lab_visit') === "true";

            let lab_name = _getLocationParamBind('lab_name') || "";
            // let test_ids = _getLocationParamBind('test_ids') || ""
            let catIds = _getLocationParamBind('category_ids') || "";
            lab_name = lab_name || "";
            let network_id = _getLocationParamBind('network_id') || "";
            network_id = network_id || "";
            let locationType = _getLocationParamBind('locationType') || "geo";
            let page = _getLocationParamBind('page') || 1;
            page = parseInt(page);
            let max_age = parseInt(_getLocationParamBind('max_age')) || "";
            let min_age = parseInt(_getLocationParamBind('min_age')) || "";
            let gender = parseInt(_getLocationParamBind('gender')) || "";
            let package_type = parseInt(_getLocationParamBind('package_type')) || "";
            let package_ids = parseInt(_getLocationParamBind('package_ids')) || "";
            let package_category_ids = parseInt(_getLocationParamBind('package_category_ids')) || "";

            let currentSearchedCriterias = [];
            // if (test_ids) {
            //     currentSearchedCriterias = test_ids.split(',').map((x) => {
            //         return {
            //             type: 'test',
            //             name: "",
            //             id: parseInt(x)
            //         }
            //     })
            // }

            let filterCriteriaPackages = {
                sort_order, max_age, min_age, package_type, gender, catIds, test_ids, package_ids, package_category_ids, avg_rating, lab_visit, home_visit, sort_on
            };

            if (lab_name) {
                filterCriteriaPackages.lab_name = lab_name;
            }

            if (network_id) {
                filterCriteriaPackages.network_id = network_id;
            }

            /*filterCriteriaPackages.priceRange = [0, 20000]
            filterCriteriaPackages.priceRange[0] = filterCriteriaPackages.min_price
            filterCriteriaPackages.priceRange[1] = filterCriteriaPackages.max_price
             filterCriteriaPackages.distanceRange = [0, 15]
            filterCriteriaPackages.distanceRange[0] = filterCriteriaPackages.min_distance
            filterCriteriaPackages.distanceRange[1] = filterCriteriaPackages.max_distance
            */
            if (!isServer && !location_ms) {
                if (place_id) {
                    setTimeout(() => {
                        (0, _mapHelpers._getLocationFromPlaceId)(place_id, location_object => {
                            selectLocation(location_object, 'autoComplete', false);
                        });
                    }, 1000);
                } else {
                    if (lat && long) {
                        setTimeout(() => {
                            (0, _mapHelpers._getlocationFromLatLong)(lat, long, locationType == 'geoip' ? 'city' : 'locality', location_object => {
                                selectLocation(location_object, locationType, false);
                            });
                        }, 1000);
                    }
                }
            }

            let selectedLocation = null;
            if (lat && long) {
                selectedLocation = { geometry: { location: { lat, lng: long } }, place_id, formatted_address: "Delhi" };
            }

            if (location_ms) {
                (0, _api.API_GET)(`/api/v1/geoip/adword/${location_ms}`).then(data => {
                    selectedLocation = { geometry: { location: { lat: data.latitude, lng: data.longitude } }, place_id, formatted_address: "" };

                    if (!isServer) {
                        setTimeout(() => {
                            (0, _mapHelpers._getlocationFromLatLong)(data.latitude, data.longitude, 'locality', location_object => {
                                selectLocation(location_object, 'geo', false);
                            });
                        }, 1000);
                    }

                    resolve({
                        filterCriteriaPackages,
                        currentSearchedCriterias,
                        selectedLocation,
                        page
                    });
                }).catch(e => {
                    if (selectedLocation) {
                        if (!isServer) {
                            setTimeout(() => {
                                (0, _mapHelpers._getlocationFromLatLong)(lat, long, 'locality', location_object => {
                                    selectLocation(location_object, 'geo', false);
                                });
                            }, 1000);
                        }
                        resolve({
                            filterCriteriaPackages,
                            currentSearchedCriterias,
                            selectedLocation,
                            page
                        });
                    } else {
                        resolve({
                            filterCriteriaPackages,
                            currentSearchedCriterias,
                            page
                        });
                    }
                });
            } else {
                if (selectedLocation) {
                    resolve({
                        filterCriteriaPackages,
                        currentSearchedCriterias,
                        selectedLocation,
                        page
                    });
                } else {
                    resolve({
                        filterCriteriaPackages,
                        currentSearchedCriterias,
                        page
                    });
                }
            }
        });
    } catch (e) {
        console.error(e);
    }
}

function HospitalSearchStateBuilder(selectLocation, querParams, isServer = false, location_ms = null) {

    try {
        return new Promise((resolve, reject) => {

            let _getLocationParamBind = tag => _getLocationParam(querParams, isServer, tag);

            let ipd_id = _getLocationParamBind('ipd_id') || "";
            let lat = _getLocationParamBind('lat') || "";
            let long = _getLocationParamBind('long') || "";
            let place_id = _getLocationParamBind('place_id') || "";
            let min_distance = parseInt(_getLocationParamBind('min_distance')) || 0;
            let max_distance = parseInt(_getLocationParamBind('max_distance')) || 20;

            let provider_ids = _getLocationParamBind('provider_ids') || "";
            let locationType = _getLocationParamBind('locationType') || "geo";
            let page = _getLocationParamBind('page') || 1;
            page = parseInt(page);
            let network_id = _getLocationParamBind('network_id') || "";

            let filterCriteria = {
                min_distance, max_distance
            };

            filterCriteria.distance = [0, 20];
            filterCriteria.distance[0] = filterCriteria.min_distance;
            filterCriteria.distance[1] = filterCriteria.max_distance;
            filterCriteria.provider_ids = provider_ids;
            filterCriteria.network_id = network_id;

            if (ipd_id) {
                ipd_id = ipd_id.split(',').map(x => {
                    return {
                        type: 'ipd',
                        name: "",
                        id: parseInt(x)
                    };
                });
            }

            let commonSelectedCriterias = [...ipd_id];

            if (!isServer && !location_ms) {
                if (place_id) {
                    setTimeout(() => {
                        (0, _mapHelpers._getLocationFromPlaceId)(place_id, location_object => {
                            selectLocation(location_object, 'autoComplete', false);
                        });
                    }, 1000);
                } else {
                    if (lat && long) {
                        setTimeout(() => {
                            (0, _mapHelpers._getlocationFromLatLong)(lat, long, locationType == 'geoip' ? 'city' : 'locality', location_object => {
                                selectLocation(location_object, locationType, false);
                            });
                        }, 1000);
                    }
                }
            }

            let selectedLocation = null;
            if (lat && long) {
                selectedLocation = { geometry: { location: { lat, lng: long } }, place_id, formatted_address: "Delhi" };
            }

            if (location_ms) {
                (0, _api.API_GET)(`/api/v1/geoip/adword/${location_ms}`).then(data => {
                    selectedLocation = { geometry: { location: { lat: data.latitude, lng: data.longitude } }, place_id, formatted_address: "" };

                    if (!isServer) {
                        setTimeout(() => {
                            (0, _mapHelpers._getlocationFromLatLong)(data.latitude, data.longitude, 'locality', location_object => {
                                selectLocation(location_object, 'geo', false);
                            });
                        }, 1000);
                    }

                    resolve({
                        filterCriteria,
                        commonSelectedCriterias,
                        selectedLocation,
                        page
                    });
                }).catch(e => {
                    if (selectedLocation) {
                        if (!isServer) {
                            setTimeout(() => {
                                (0, _mapHelpers._getlocationFromLatLong)(lat, long, 'locality', location_object => {
                                    selectLocation(location_object, 'geo', false);
                                });
                            }, 1000);
                        }
                        resolve({
                            filterCriteria,
                            commonSelectedCriterias,
                            selectedLocation,
                            page
                        });
                    } else {
                        resolve({
                            filterCriteria,
                            commonSelectedCriterias,
                            page
                        });
                    }
                });
            } else {
                if (selectedLocation) {
                    resolve({
                        filterCriteria,
                        commonSelectedCriterias,
                        selectedLocation,
                        page
                    });
                } else {
                    resolve({
                        filterCriteria,
                        commonSelectedCriterias,
                        page
                    });
                }
            }
        });
    } catch (e) {
        console.error(e);
    }
}

function _getLocationParam(querParams, isServer = false, tag) {
    if (isServer) {
        return querParams[tag];
    } else {
        // this API assumes the context of react-router-4
        const params = new URLSearchParams(querParams);
        return params.get(tag);
    }
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvaGVscGVycy91cmx0b1N0YXRlLmpzIl0sIm5hbWVzIjpbIm9wZFNlYXJjaFN0YXRlQnVpbGRlciIsImxhYlNlYXJjaFN0YXRlQnVpbGRlciIsIlBhY2thZ2VTZWFyY2hTdGF0ZUJ1aWxkZXIiLCJIb3NwaXRhbFNlYXJjaFN0YXRlQnVpbGRlciIsInNlbGVjdExvY2F0aW9uIiwicXVlclBhcmFtcyIsImlzU2VydmVyIiwibG9jYXRpb25fbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIl9nZXRMb2NhdGlvblBhcmFtQmluZCIsInRhZyIsIl9nZXRMb2NhdGlvblBhcmFtIiwic3BlY2lhbGl6YXRpb25zX2lkcyIsImNvbmRpdGlvbl9pZHMiLCJsYXQiLCJsb25nIiwicGxhY2VfaWQiLCJsb2NhbGl0eSIsInN1Yl9sb2NhbGl0eSIsInNvcnRfb24iLCJzb3J0X29yZGVyIiwiYXZhaWxhYmlsaXR5IiwiYXZnX3JhdGluZ3MiLCJnZW5kZXIiLCJzaXRzX2F0X2NsaW5pYyIsInNpdHNfYXRfaG9zcGl0YWwiLCJkb2N0b3JfbmFtZSIsImhvc3BpdGFsX25hbWUiLCJsb2NhdGlvblR5cGUiLCJwcm9jZWR1cmVzX2lkcyIsImNhdGVnb3J5X2lkcyIsImlwZF9wcm9jZWR1cmVzIiwicGFnZSIsInBhcnNlSW50IiwiaG9zcGl0YWxfaWQiLCJpc19pbnN1cmVkIiwiZ3JvdXBfaWRzIiwic3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkcyIsInNwZWMiLCJjb25kIiwicHJvY2VkdXJlcyIsInByb2NlZHVyZV9jYXRlZ29yaWVzIiwiaXBkX2lkcyIsImdyb3VwX2RhdGEiLCJzcGxpdCIsIm1hcCIsIngiLCJ0eXBlIiwibmFtZSIsImlkIiwiY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJmaWx0ZXJDcml0ZXJpYSIsInNldFRpbWVvdXQiLCJsb2NhdGlvbl9vYmplY3QiLCJzZWxlY3RlZExvY2F0aW9uIiwiZ2VvbWV0cnkiLCJsb2NhdGlvbiIsImxuZyIsImZvcm1hdHRlZF9hZGRyZXNzIiwidGhlbiIsImRhdGEiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNhdGNoIiwiZSIsInBhZ2VwYWdlIiwiY29uc29sZSIsImVycm9yIiwidGVzdF9pZHMiLCJob21lX3Zpc2l0IiwibGFiX3Zpc2l0IiwibGFiX25hbWUiLCJuZXR3b3JrX2lkIiwiY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzIiwiYXZnX3JhdGluZyIsImNhdElkcyIsIm1heF9hZ2UiLCJtaW5fYWdlIiwicGFja2FnZV90eXBlIiwicGFja2FnZV9pZHMiLCJwYWNrYWdlX2NhdGVnb3J5X2lkcyIsImZpbHRlckNyaXRlcmlhUGFja2FnZXMiLCJpcGRfaWQiLCJtaW5fZGlzdGFuY2UiLCJtYXhfZGlzdGFuY2UiLCJwcm92aWRlcl9pZHMiLCJkaXN0YW5jZSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztRQUdnQkEscUIsR0FBQUEscUI7UUFpT0FDLHFCLEdBQUFBLHFCO1FBbUpBQyx5QixHQUFBQSx5QjtRQTJKQUMsMEIsR0FBQUEsMEI7O0FBbGhCaEI7O0FBQ0E7O0FBRU8sU0FBU0gscUJBQVQsQ0FBK0JJLGNBQS9CLEVBQStDQyxVQUEvQyxFQUEyREMsV0FBVyxLQUF0RSxFQUE2RUMsY0FBYyxJQUEzRixFQUFpRzs7QUFFcEcsUUFBSTtBQUNBLGVBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjs7QUFFcEMsZ0JBQUlDLHdCQUF5QkMsR0FBRCxJQUFTQyxrQkFBa0JSLFVBQWxCLEVBQThCQyxRQUE5QixFQUF3Q00sR0FBeEMsQ0FBckM7O0FBRUEsZ0JBQUlFLHNCQUFzQkgsc0JBQXNCLGlCQUF0QixLQUE0QyxFQUF0RTtBQUNBLGdCQUFJSSxnQkFBZ0JKLHNCQUFzQixZQUF0QixLQUF1QyxFQUEzRDs7QUFFQSxnQkFBSUssTUFBTUwsc0JBQXNCLEtBQXRCLEtBQWdDLEVBQTFD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O0FBRUpELG1EQUZJO0FBR0psQjtBQUhJLHlCQUFSO0FBS0g7QUFDSixpQkF2Q0Q7QUF3Q0gsYUF6Q0QsTUF5Q087QUFDSCxvQkFBSXNCLGdCQUFKLEVBQXNCO0FBQ2xCL0MsNEJBQVE7QUFDSjRDLHNDQURJO0FBRUpELCtDQUZJO0FBR0pJLHdDQUhJO0FBSUp0QjtBQUpJLHFCQUFSO0FBTUgsaUJBUEQsTUFPTztBQUNIekIsNEJBQVE7QUFDSjRDLHNDQURJO0FBRUpELCtDQUZJO0FBR0psQjtBQUhJLHFCQUFSO0FBS0g7QUFDSjtBQUNKLFNBeEhNLENBQVA7QUEwSEgsS0EzSEQsQ0EySEUsT0FBT2dDLENBQVAsRUFBVTtBQUNSRSxnQkFBUUMsS0FBUixDQUFjSCxDQUFkO0FBQ0g7QUFDSjs7QUFFRCxTQUFTckQsaUJBQVQsQ0FBMkJSLFVBQTNCLEVBQXVDQyxXQUFXLEtBQWxELEVBQXlETSxHQUF6RCxFQUE4RDtBQUMxRCxRQUFJTixRQUFKLEVBQWM7QUFDVixlQUFPRCxXQUFXTyxHQUFYLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSDtBQUNBLGNBQU02RSxTQUFTLElBQUlDLGVBQUosQ0FBb0JyRixVQUFwQixDQUFmO0FBQ0EsZUFBT29GLE9BQU9FLEdBQVAsQ0FBVy9FLEdBQVgsQ0FBUDtBQUNIO0FBQ0osQyIsImZpbGUiOiIxMi5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZ2V0bG9jYXRpb25Gcm9tTGF0TG9uZywgX2dldExvY2F0aW9uRnJvbVBsYWNlSWQgfSBmcm9tICcuL21hcEhlbHBlcnMuanMnXG5pbXBvcnQgeyBBUElfR0VUIH0gZnJvbSAnLi4vYXBpL2FwaSdcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZFNlYXJjaFN0YXRlQnVpbGRlcihzZWxlY3RMb2NhdGlvbiwgcXVlclBhcmFtcywgaXNTZXJ2ZXIgPSBmYWxzZSwgbG9jYXRpb25fbXMgPSBudWxsKSB7XG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgX2dldExvY2F0aW9uUGFyYW1CaW5kID0gKHRhZykgPT4gX2dldExvY2F0aW9uUGFyYW0ocXVlclBhcmFtcywgaXNTZXJ2ZXIsIHRhZylcblxuICAgICAgICAgICAgbGV0IHNwZWNpYWxpemF0aW9uc19pZHMgPSBfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ3NwZWNpYWxpemF0aW9ucycpIHx8IFwiXCJcbiAgICAgICAgICAgIGxldCBjb25kaXRpb25faWRzID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdjb25kaXRpb25zJykgfHwgXCJcIlxuXG4gICAgICAgICAgICBsZXQgbGF0ID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdsYXQnKSB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgbG9uZyA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnbG9uZycpIHx8IFwiXCJcbiAgICAgICAgICAgIGxldCBwbGFjZV9pZCA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgncGxhY2VfaWQnKSB8fCBcIlwiXG5cbiAgICAgICAgICAgIGxldCBsb2NhbGl0eSA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnbG9jYWxpdHknKSB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgc3ViX2xvY2FsaXR5ID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdzdWJfbG9jYWxpdHknKSB8fCBcIlwiXG5cbiAgICAgICAgICAgIC8vbGV0IG1pbl9kaXN0YW5jZSA9IHBhcnNlSW50KF9nZXRMb2NhdGlvblBhcmFtQmluZCgnbWluX2Rpc3RhbmNlJykpIHx8IDBcbiAgICAgICAgICAgIC8vbGV0IG1heF9kaXN0YW5jZSA9IHBhcnNlSW50KF9nZXRMb2NhdGlvblBhcmFtQmluZCgnbWF4X2Rpc3RhbmNlJykpIHx8IDE1XG4gICAgICAgICAgICAvL2xldCBtaW5fZmVlcyA9IHBhcnNlSW50KF9nZXRMb2NhdGlvblBhcmFtQmluZCgnbWluX2ZlZXMnKSkgfHwgMFxuICAgICAgICAgICAgLy9sZXQgbWF4X2ZlZXMgPSBwYXJzZUludChfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ21heF9mZWVzJykpIHx8IDMwMDBcbiAgICAgICAgICAgIC8vbGV0IGlzX2F2YWlsYWJsZSA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnaXNfYXZhaWxhYmxlJykgPT09IFwidHJ1ZVwiXG4gICAgICAgICAgICAvL2xldCBpc19mZW1hbGUgPSBfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ2lzX2ZlbWFsZScpID09PSBcInRydWVcIlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgc29ydF9vbiA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnc29ydF9vbicpIHx8ICcnXG4gICAgICAgICAgICBsZXQgc29ydF9vcmRlciA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnc29ydF9vcmRlcicpIHx8ICcnXG4gICAgICAgICAgICBsZXQgYXZhaWxhYmlsaXR5ID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdhdmFpbGFiaWxpdHknKSB8fCBbXVxuICAgICAgICAgICAgbGV0IGF2Z19yYXRpbmdzID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdhdmdfcmF0aW5ncycpIHx8ICcnXG4gICAgICAgICAgICBsZXQgZ2VuZGVyID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdnZW5kZXInKSB8fCAnJ1xuICAgICAgICAgICAgbGV0IHNpdHNfYXRfY2xpbmljID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdzaXRzX2F0X2NsaW5pYycpID09PSBcInRydWVcIlxuICAgICAgICAgICAgbGV0IHNpdHNfYXRfaG9zcGl0YWwgPSBfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ3NpdHNfYXRfaG9zcGl0YWwnKSA9PT0gXCJ0cnVlXCJcblxuXG4gICAgICAgICAgICBsZXQgZG9jdG9yX25hbWUgPSBfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ2RvY3Rvcl9uYW1lJylcbiAgICAgICAgICAgIGRvY3Rvcl9uYW1lID0gZG9jdG9yX25hbWUgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IGhvc3BpdGFsX25hbWUgPSBfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ2hvc3BpdGFsX25hbWUnKVxuICAgICAgICAgICAgaG9zcGl0YWxfbmFtZSA9IGhvc3BpdGFsX25hbWUgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uVHlwZSA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnbG9jYXRpb25UeXBlJykgfHwgXCJnZW9cIlxuICAgICAgICAgICAgbGV0IHByb2NlZHVyZXNfaWRzID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdwcm9jZWR1cmVfaWRzJykgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IGNhdGVnb3J5X2lkcyA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgncHJvY2VkdXJlX2NhdGVnb3J5X2lkcycpIHx8IFwiXCJcbiAgICAgICAgICAgIGxldCBpcGRfcHJvY2VkdXJlcyA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnaXBkX3Byb2NlZHVyZXMnKSB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgcGFnZSA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgncGFnZScpIHx8IDFcbiAgICAgICAgICAgIHBhZ2UgPSBwYXJzZUludChwYWdlKVxuICAgICAgICAgICAgbGV0IGhvc3BpdGFsX2lkID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdob3NwaXRhbF9pZCcpIHx8IFwiXCJcbiAgICAgICAgICAgIGxldCBpc19pbnN1cmVkID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdpc19pbnN1cmVkJykgPT09IFwidHJ1ZVwiXG4gICAgICAgICAgICBsZXQgZ3JvdXBfaWRzID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdncm91cF9pZHMnKSB8fCAnJ1xuICAgICAgICAgICAgbGV0IHNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMgPSBfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ3NwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMnKSB8fCAnJ1xuICAgICAgICAgICAgbGV0IHNwZWMgPSBbXVxuICAgICAgICAgICAgbGV0IGNvbmQgPSBbXVxuICAgICAgICAgICAgbGV0IHByb2NlZHVyZXMgPSBbXVxuICAgICAgICAgICAgbGV0IHByb2NlZHVyZV9jYXRlZ29yaWVzID0gW11cbiAgICAgICAgICAgIGxldCBpcGRfaWRzID0gW11cbiAgICAgICAgICAgIGxldCBncm91cF9kYXRhID0gW11cbiAgICAgICAgICAgIGlmIChzcGVjaWFsaXphdGlvbnNfaWRzKSB7XG4gICAgICAgICAgICAgICAgc3BlYyA9IHNwZWNpYWxpemF0aW9uc19pZHMuc3BsaXQoJywnKS5tYXAoKHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzcGVjaWFsaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcGFyc2VJbnQoeClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25kaXRpb25faWRzKSB7XG4gICAgICAgICAgICAgICAgY29uZCA9IGNvbmRpdGlvbl9pZHMuc3BsaXQoJywnKS5tYXAoKHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjb25kaXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwYXJzZUludCh4KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb2NlZHVyZXNfaWRzKSB7XG4gICAgICAgICAgICAgICAgcHJvY2VkdXJlcyA9IHByb2NlZHVyZXNfaWRzLnNwbGl0KCcsJykubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJvY2VkdXJlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHBhcnNlSW50KHgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnlfaWRzKSB7XG4gICAgICAgICAgICAgICAgcHJvY2VkdXJlX2NhdGVnb3JpZXMgPSBjYXRlZ29yeV9pZHMuc3BsaXQoJywnKS5tYXAoKHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwcm9jZWR1cmVzX2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcGFyc2VJbnQoeClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGlwZF9wcm9jZWR1cmVzKXtcbiAgICAgICAgICAgICAgICBpcGRfaWRzID0gaXBkX3Byb2NlZHVyZXMuc3BsaXQoJywnKS5tYXAoKHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpcGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwYXJzZUludCh4KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoZ3JvdXBfaWRzKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBfZGF0YSA9IGdyb3VwX2lkcy5zcGxpdCgnLCcpLm1hcCgoeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dyb3VwX2lkcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHBhcnNlSW50KHgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgPSBbLi4uY29uZCwgLi4uc3BlYywgLi4ucHJvY2VkdXJlcywgLi4ucHJvY2VkdXJlX2NhdGVnb3JpZXMsIC4uLmlwZF9pZHMsIC4uLmdyb3VwX2RhdGFdXG5cbiAgICAgICAgICAgIGxldCBmaWx0ZXJDcml0ZXJpYSA9IHtcbiAgICAgICAgICAgICAgICBzb3J0X29yZGVyLCBnZW5kZXIsIGF2YWlsYWJpbGl0eSwgYXZnX3JhdGluZ3MsIHNpdHNfYXRfaG9zcGl0YWwsIHNpdHNfYXRfY2xpbmljLCBzb3J0X29uLCBzcGVjaWFsaXphdGlvbl9maWx0ZXJfaWRzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkb2N0b3JfbmFtZSkge1xuICAgICAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhLmRvY3Rvcl9uYW1lID0gZG9jdG9yX25hbWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhvc3BpdGFsX25hbWUpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYS5ob3NwaXRhbF9uYW1lID0gaG9zcGl0YWxfbmFtZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihob3NwaXRhbF9pZCl7XG4gICAgICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEuaG9zcGl0YWxfaWQgPSBob3NwaXRhbF9pZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihpc19pbnN1cmVkKXtcbiAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYS5pc19pbnN1cmVkID0gaXNfaW5zdXJlZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzU2VydmVyICYmICFsb2NhdGlvbl9tcykge1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZV9pZCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9nZXRMb2NhdGlvbkZyb21QbGFjZUlkKHBsYWNlX2lkLCAobG9jYXRpb25fb2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0TG9jYXRpb24obG9jYXRpb25fb2JqZWN0LCAnYXV0b0NvbXBsZXRlJywgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXQgJiYgbG9uZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2dldGxvY2F0aW9uRnJvbUxhdExvbmcobGF0LCBsb25nLCAobG9jYXRpb25UeXBlID09ICdnZW9pcCcgPyAnY2l0eScgOiAnbG9jYWxpdHknKSwgKGxvY2F0aW9uX29iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RMb2NhdGlvbihsb2NhdGlvbl9vYmplY3QsIGxvY2F0aW9uVHlwZSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZExvY2F0aW9uID0gbnVsbFxuICAgICAgICAgICAgaWYgKGxhdCAmJiBsb25nKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbiA9IHsgZ2VvbWV0cnk6IHsgbG9jYXRpb246IHsgbGF0LCBsbmc6IGxvbmcgfSB9LCBwbGFjZV9pZCwgZm9ybWF0dGVkX2FkZHJlc3M6IFwiRGVsaGlcIiwgc3ViX2xvY2FsaXR5OiBzdWJfbG9jYWxpdHksIGxvY2FsaXR5OiBsb2NhbGl0eSB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsb2NhdGlvbl9tcykge1xuICAgICAgICAgICAgICAgIEFQSV9HRVQoYC9hcGkvdjEvZ2VvaXAvYWR3b3JkLyR7bG9jYXRpb25fbXN9YCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uID0geyBnZW9tZXRyeTogeyBsb2NhdGlvbjogeyBsYXQ6IGRhdGEubGF0aXR1ZGUsIGxuZzogZGF0YS5sb25naXR1ZGUgfSB9LCBwbGFjZV9pZCwgZm9ybWF0dGVkX2FkZHJlc3M6IFwiXCIgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNTZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9nZXRsb2NhdGlvbkZyb21MYXRMb25nKGRhdGEubGF0aXR1ZGUsIGRhdGEubG9uZ2l0dWRlLCAnbG9jYWxpdHknLCAobG9jYXRpb25fb2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdExvY2F0aW9uKGxvY2F0aW9uX29iamVjdCwgJ2dlbycsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1NlcnZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZ2V0bG9jYXRpb25Gcm9tTGF0TG9uZyhsYXQsIGxvbmcsICdsb2NhbGl0eScsIChsb2NhdGlvbl9vYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdExvY2F0aW9uKGxvY2F0aW9uX29iamVjdCwgJ2dlbycsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb25TZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb25TZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYlNlYXJjaFN0YXRlQnVpbGRlcihzZWxlY3RMb2NhdGlvbiwgcXVlclBhcmFtcywgaXNTZXJ2ZXIgPSBmYWxzZSwgbG9jYXRpb25fbXMgPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgbGV0IF9nZXRMb2NhdGlvblBhcmFtQmluZCA9ICh0YWcpID0+IF9nZXRMb2NhdGlvblBhcmFtKHF1ZXJQYXJhbXMsIGlzU2VydmVyLCB0YWcpXG5cbiAgICAgICAgICAgIGxldCB0ZXN0X2lkcyA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgndGVzdF9pZHMnKSB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgbGF0ID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdsYXQnKSB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgbG9uZyA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnbG9uZycpIHx8IFwiXCJcbiAgICAgICAgICAgIGxldCBwbGFjZV9pZCA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgncGxhY2VfaWQnKSB8fCBcIlwiXG4gICAgICAgICAgICAvKmxldCBtaW5fZGlzdGFuY2UgPSBwYXJzZUludChfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ21pbl9kaXN0YW5jZScpKSB8fCAwXG4gICAgICAgICAgICBsZXQgbWF4X2Rpc3RhbmNlID0gcGFyc2VJbnQoX2dldExvY2F0aW9uUGFyYW1CaW5kKCdtYXhfZGlzdGFuY2UnKSkgfHwgMTVcbiAgICAgICAgICAgIGxldCBtaW5fcHJpY2UgPSBwYXJzZUludChfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ21pbl9wcmljZScpKSB8fCAwXG4gICAgICAgICAgICBsZXQgbWF4X3ByaWNlID0gcGFyc2VJbnQoX2dldExvY2F0aW9uUGFyYW1CaW5kKCdtYXhfcHJpY2UnKSkgfHwgMjAwMDBcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBsZXQgc29ydF9vbiA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnc29ydF9vbicpIHx8ICcnXG4gICAgICAgICAgICBsZXQgc29ydF9vcmRlciA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnc29ydF9vcmRlcicpIHx8ICcnXG4gICAgICAgICAgICBsZXQgYXZnX3JhdGluZ3MgPSBfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ2F2Z19yYXRpbmdzJykgfHwgJydcbiAgICAgICAgICAgIGxldCBhdmFpbGFiaWxpdHkgPSBfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ2F2YWlsYWJpbGl0eScpIHx8IFtdXG4gICAgICAgICAgICBsZXQgaG9tZV92aXNpdCA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnaG9tZV92aXNpdCcpID09PVwidHJ1ZVwiXG4gICAgICAgICAgICBsZXQgbGFiX3Zpc2l0ID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdsYWJfdmlzaXQnKSA9PT1cInRydWVcIlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGxldCBsYWJfbmFtZSA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnbGFiX25hbWUnKSB8fCBcIlwiXG4gICAgICAgICAgICBsYWJfbmFtZSA9IGxhYl9uYW1lIHx8IFwiXCJcbiAgICAgICAgICAgIGxldCBuZXR3b3JrX2lkID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCduZXR3b3JrX2lkJykgfHwgXCJcIlxuICAgICAgICAgICAgbmV0d29ya19pZCA9IG5ldHdvcmtfaWQgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uVHlwZSA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnbG9jYXRpb25UeXBlJykgfHwgXCJnZW9cIlxuICAgICAgICAgICAgbGV0IHBhZ2UgPSBfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ3BhZ2UnKSB8fCAxXG4gICAgICAgICAgICBwYWdlID0gcGFyc2VJbnQocGFnZSlcblxuICAgICAgICAgICAgbGV0IGlzX2luc3VyZWQgPSBfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ2lzX2luc3VyZWQnKSA9PT0gXCJ0cnVlXCJcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcyA9IFtdXG4gICAgICAgICAgICBpZiAodGVzdF9pZHMpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMgPSB0ZXN0X2lkcy5zcGxpdCgnLCcpLm1hcCgoeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Rlc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwYXJzZUludCh4KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGZpbHRlckNyaXRlcmlhID0ge1xuICAgICAgICAgICAgICAgIHNvcnRfb3JkZXIsIGF2YWlsYWJpbGl0eSwgYXZnX3JhdGluZ3MsIGhvbWVfdmlzaXQsIGxhYl92aXNpdCwgc29ydF9vblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGFiX25hbWUpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYS5sYWJfbmFtZSA9IGxhYl9uYW1lXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXR3b3JrX2lkKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEubmV0d29ya19pZCA9IG5ldHdvcmtfaWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoaXNfaW5zdXJlZCl7XG4gICAgICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEuaXNfaW5zdXJlZCA9IGlzX2luc3VyZWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc1NlcnZlciAmJiAhbG9jYXRpb25fbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxhY2VfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZ2V0TG9jYXRpb25Gcm9tUGxhY2VJZChwbGFjZV9pZCwgKGxvY2F0aW9uX29iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdExvY2F0aW9uKGxvY2F0aW9uX29iamVjdCwgJ2F1dG9Db21wbGV0ZScsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGF0ICYmIGxvbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9nZXRsb2NhdGlvbkZyb21MYXRMb25nKGxhdCwgbG9uZywgKGxvY2F0aW9uVHlwZSA9PSAnZ2VvaXAnID8gJ2NpdHknIDogJ2xvY2FsaXR5JyksIChsb2NhdGlvbl9vYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0TG9jYXRpb24obG9jYXRpb25fb2JqZWN0LCBsb2NhdGlvblR5cGUsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9IG51bGxcbiAgICAgICAgICAgIGlmIChsYXQgJiYgbG9uZykge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24gPSB7IGdlb21ldHJ5OiB7IGxvY2F0aW9uOiB7IGxhdCwgbG5nOiBsb25nIH0gfSwgcGxhY2VfaWQsIGZvcm1hdHRlZF9hZGRyZXNzOiBcIkRlbGhpXCIgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobG9jYXRpb25fbXMpIHtcbiAgICAgICAgICAgICAgICBBUElfR0VUKGAvYXBpL3YxL2dlb2lwL2Fkd29yZC8ke2xvY2F0aW9uX21zfWApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbiA9IHsgZ2VvbWV0cnk6IHsgbG9jYXRpb246IHsgbGF0OiBkYXRhLmxhdGl0dWRlLCBsbmc6IGRhdGEubG9uZ2l0dWRlIH0gfSwgcGxhY2VfaWQsIGZvcm1hdHRlZF9hZGRyZXNzOiBcIlwiIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZ2V0bG9jYXRpb25Gcm9tTGF0TG9uZyhkYXRhLmxhdGl0dWRlLCBkYXRhLmxvbmdpdHVkZSwgJ2xvY2FsaXR5JywgKGxvY2F0aW9uX29iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RMb2NhdGlvbihsb2NhdGlvbl9vYmplY3QsICdnZW8nLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9nZXRsb2NhdGlvbkZyb21MYXRMb25nKGxhdCwgbG9uZywgJ2xvY2FsaXR5JywgKGxvY2F0aW9uX29iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0TG9jYXRpb24obG9jYXRpb25fb2JqZWN0LCAnZ2VvJywgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gUGFja2FnZVNlYXJjaFN0YXRlQnVpbGRlcihzZWxlY3RMb2NhdGlvbiwgcXVlclBhcmFtcywgaXNTZXJ2ZXIgPSBmYWxzZSwgbG9jYXRpb25fbXMgPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgbGV0IF9nZXRMb2NhdGlvblBhcmFtQmluZCA9ICh0YWcpID0+IF9nZXRMb2NhdGlvblBhcmFtKHF1ZXJQYXJhbXMsIGlzU2VydmVyLCB0YWcpXG5cbiAgICAgICAgICAgIGxldCB0ZXN0X2lkcyA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgndGVzdF9pZHMnKSB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgbGF0ID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdsYXQnKSB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgbG9uZyA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnbG9uZycpIHx8IFwiXCJcbiAgICAgICAgICAgIGxldCBwbGFjZV9pZCA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgncGxhY2VfaWQnKSB8fCBcIlwiXG4gICAgICAgICAgICAvKmxldCBtaW5fZGlzdGFuY2UgPSBwYXJzZUludChfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ21pbl9kaXN0YW5jZScpKSB8fCAwXG4gICAgICAgICAgICBsZXQgbWF4X2Rpc3RhbmNlID0gcGFyc2VJbnQoX2dldExvY2F0aW9uUGFyYW1CaW5kKCdtYXhfZGlzdGFuY2UnKSkgfHwgMTVcbiAgICAgICAgICAgIGxldCBtaW5fcHJpY2UgPSBwYXJzZUludChfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ21pbl9wcmljZScpKSB8fCAwXG4gICAgICAgICAgICBsZXQgbWF4X3ByaWNlID0gcGFyc2VJbnQoX2dldExvY2F0aW9uUGFyYW1CaW5kKCdtYXhfcHJpY2UnKSkgfHwgMjAwMDBcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBsZXQgc29ydF9vbiA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnc29ydF9vbicpIHx8ICcnXG4gICAgICAgICAgICBsZXQgc29ydF9vcmRlciA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnc29ydF9vcmRlcicpIHx8ICcnXG4gICAgICAgICAgICBsZXQgYXZnX3JhdGluZyA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnYXZnX3JhdGluZycpIHx8ICcnXG4gICAgICAgICAgICBsZXQgaG9tZV92aXNpdCA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnaG9tZV92aXNpdCcpID09PSBcInRydWVcIlxuICAgICAgICAgICAgbGV0IGxhYl92aXNpdCA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnbGFiX3Zpc2l0JykgPT09IFwidHJ1ZVwiXG5cbiAgICAgICAgICAgIGxldCBsYWJfbmFtZSA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnbGFiX25hbWUnKSB8fCBcIlwiXG4gICAgICAgICAgICAvLyBsZXQgdGVzdF9pZHMgPSBfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ3Rlc3RfaWRzJykgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IGNhdElkcyA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnY2F0ZWdvcnlfaWRzJykgfHwgXCJcIlxuICAgICAgICAgICAgbGFiX25hbWUgPSBsYWJfbmFtZSB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgbmV0d29ya19pZCA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnbmV0d29ya19pZCcpIHx8IFwiXCJcbiAgICAgICAgICAgIG5ldHdvcmtfaWQgPSBuZXR3b3JrX2lkIHx8IFwiXCJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvblR5cGUgPSBfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ2xvY2F0aW9uVHlwZScpIHx8IFwiZ2VvXCJcbiAgICAgICAgICAgIGxldCBwYWdlID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdwYWdlJykgfHwgMVxuICAgICAgICAgICAgcGFnZSA9IHBhcnNlSW50KHBhZ2UpXG4gICAgICAgICAgICBsZXQgbWF4X2FnZT0gcGFyc2VJbnQoX2dldExvY2F0aW9uUGFyYW1CaW5kKCdtYXhfYWdlJykpIHx8IFwiXCJcbiAgICAgICAgICAgIGxldCBtaW5fYWdlPSBwYXJzZUludChfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ21pbl9hZ2UnKSkgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IGdlbmRlcj0gcGFyc2VJbnQoX2dldExvY2F0aW9uUGFyYW1CaW5kKCdnZW5kZXInKSkgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IHBhY2thZ2VfdHlwZT0gcGFyc2VJbnQoX2dldExvY2F0aW9uUGFyYW1CaW5kKCdwYWNrYWdlX3R5cGUnKSkgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IHBhY2thZ2VfaWRzPSBwYXJzZUludChfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ3BhY2thZ2VfaWRzJykpIHx8IFwiXCJcbiAgICAgICAgICAgIGxldCBwYWNrYWdlX2NhdGVnb3J5X2lkcz0gcGFyc2VJbnQoX2dldExvY2F0aW9uUGFyYW1CaW5kKCdwYWNrYWdlX2NhdGVnb3J5X2lkcycpKSB8fCBcIlwiXG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMgPSBbXVxuICAgICAgICAgICAgLy8gaWYgKHRlc3RfaWRzKSB7XG4gICAgICAgICAgICAvLyAgICAgY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzID0gdGVzdF9pZHMuc3BsaXQoJywnKS5tYXAoKHgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHR5cGU6ICd0ZXN0JyxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDogcGFyc2VJbnQoeClcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIGxldCBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzID0ge1xuICAgICAgICAgICAgICAgIHNvcnRfb3JkZXIsIG1heF9hZ2UsIG1pbl9hZ2UsIHBhY2thZ2VfdHlwZSwgZ2VuZGVyLCBjYXRJZHMsIHRlc3RfaWRzLCBwYWNrYWdlX2lkcywgcGFja2FnZV9jYXRlZ29yeV9pZHMsIGF2Z19yYXRpbmcsIGxhYl92aXNpdCwgaG9tZV92aXNpdCwgc29ydF9vblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGFiX25hbWUpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLmxhYl9uYW1lID0gbGFiX25hbWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ldHdvcmtfaWQpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLm5ldHdvcmtfaWQgPSBuZXR3b3JrX2lkXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy5wcmljZVJhbmdlID0gWzAsIDIwMDAwXVxuICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy5wcmljZVJhbmdlWzBdID0gZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy5taW5fcHJpY2VcbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhUGFja2FnZXMucHJpY2VSYW5nZVsxXSA9IGZpbHRlckNyaXRlcmlhUGFja2FnZXMubWF4X3ByaWNlXG5cbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhUGFja2FnZXMuZGlzdGFuY2VSYW5nZSA9IFswLCAxNV1cbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhUGFja2FnZXMuZGlzdGFuY2VSYW5nZVswXSA9IGZpbHRlckNyaXRlcmlhUGFja2FnZXMubWluX2Rpc3RhbmNlXG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLmRpc3RhbmNlUmFuZ2VbMV0gPSBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLm1heF9kaXN0YW5jZVxuKi9cbiAgICAgICAgICAgIGlmICghaXNTZXJ2ZXIgJiYgIWxvY2F0aW9uX21zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2dldExvY2F0aW9uRnJvbVBsYWNlSWQocGxhY2VfaWQsIChsb2NhdGlvbl9vYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RMb2NhdGlvbihsb2NhdGlvbl9vYmplY3QsICdhdXRvQ29tcGxldGUnLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhdCAmJiBsb25nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZ2V0bG9jYXRpb25Gcm9tTGF0TG9uZyhsYXQsIGxvbmcsIChsb2NhdGlvblR5cGUgPT0gJ2dlb2lwJyA/ICdjaXR5JyA6ICdsb2NhbGl0eScpLCAobG9jYXRpb25fb2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdExvY2F0aW9uKGxvY2F0aW9uX29iamVjdCwgbG9jYXRpb25UeXBlLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkTG9jYXRpb24gPSBudWxsXG4gICAgICAgICAgICBpZiAobGF0ICYmIGxvbmcpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uID0geyBnZW9tZXRyeTogeyBsb2NhdGlvbjogeyBsYXQsIGxuZzogbG9uZyB9IH0sIHBsYWNlX2lkLCBmb3JtYXR0ZWRfYWRkcmVzczogXCJEZWxoaVwiIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uX21zKSB7XG4gICAgICAgICAgICAgICAgQVBJX0dFVChgL2FwaS92MS9nZW9pcC9hZHdvcmQvJHtsb2NhdGlvbl9tc31gKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24gPSB7IGdlb21ldHJ5OiB7IGxvY2F0aW9uOiB7IGxhdDogZGF0YS5sYXRpdHVkZSwgbG5nOiBkYXRhLmxvbmdpdHVkZSB9IH0sIHBsYWNlX2lkLCBmb3JtYXR0ZWRfYWRkcmVzczogXCJcIiB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1NlcnZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2dldGxvY2F0aW9uRnJvbUxhdExvbmcoZGF0YS5sYXRpdHVkZSwgZGF0YS5sb25naXR1ZGUsICdsb2NhbGl0eScsIChsb2NhdGlvbl9vYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0TG9jYXRpb24obG9jYXRpb25fb2JqZWN0LCAnZ2VvJywgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhUGFja2FnZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9nZXRsb2NhdGlvbkZyb21MYXRMb25nKGxhdCwgbG9uZywgJ2xvY2FsaXR5JywgKGxvY2F0aW9uX29iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0TG9jYXRpb24obG9jYXRpb25fb2JqZWN0LCAnZ2VvJywgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhUGFja2FnZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhUGFja2FnZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhUGFja2FnZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIb3NwaXRhbFNlYXJjaFN0YXRlQnVpbGRlcihzZWxlY3RMb2NhdGlvbiwgcXVlclBhcmFtcywgaXNTZXJ2ZXIgPSBmYWxzZSwgbG9jYXRpb25fbXMgPSBudWxsKSB7XG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgX2dldExvY2F0aW9uUGFyYW1CaW5kID0gKHRhZykgPT4gX2dldExvY2F0aW9uUGFyYW0ocXVlclBhcmFtcywgaXNTZXJ2ZXIsIHRhZylcblxuICAgICAgICAgICAgbGV0IGlwZF9pZCA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnaXBkX2lkJykgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IGxhdCA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgnbGF0JykgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IGxvbmcgPSBfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ2xvbmcnKSB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgcGxhY2VfaWQgPSBfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ3BsYWNlX2lkJykgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IG1pbl9kaXN0YW5jZSA9IHBhcnNlSW50KF9nZXRMb2NhdGlvblBhcmFtQmluZCgnbWluX2Rpc3RhbmNlJykpIHx8IDBcbiAgICAgICAgICAgIGxldCBtYXhfZGlzdGFuY2UgPSBwYXJzZUludChfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ21heF9kaXN0YW5jZScpKSB8fCAyMFxuXG4gICAgICAgICAgICBsZXQgcHJvdmlkZXJfaWRzID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdwcm92aWRlcl9pZHMnKSB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25UeXBlID0gX2dldExvY2F0aW9uUGFyYW1CaW5kKCdsb2NhdGlvblR5cGUnKSB8fCBcImdlb1wiXG4gICAgICAgICAgICBsZXQgcGFnZSA9IF9nZXRMb2NhdGlvblBhcmFtQmluZCgncGFnZScpIHx8IDFcbiAgICAgICAgICAgIHBhZ2UgPSBwYXJzZUludChwYWdlKVxuICAgICAgICAgICAgbGV0IG5ldHdvcmtfaWQgPSBfZ2V0TG9jYXRpb25QYXJhbUJpbmQoJ25ldHdvcmtfaWQnKSB8fCBcIlwiXG5cbiAgICAgICAgICAgIGxldCBmaWx0ZXJDcml0ZXJpYSA9IHtcbiAgICAgICAgICAgICAgIG1pbl9kaXN0YW5jZSwgbWF4X2Rpc3RhbmNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhLmRpc3RhbmNlID0gWzAsIDIwXVxuICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEuZGlzdGFuY2VbMF0gPSBmaWx0ZXJDcml0ZXJpYS5taW5fZGlzdGFuY2VcbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhLmRpc3RhbmNlWzFdID0gZmlsdGVyQ3JpdGVyaWEubWF4X2Rpc3RhbmNlXG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYS5wcm92aWRlcl9pZHMgPSBwcm92aWRlcl9pZHNcbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhLm5ldHdvcmtfaWQgPSBuZXR3b3JrX2lkXG5cbiAgICAgICAgICAgIGlmKGlwZF9pZCl7XG4gICAgICAgICAgICAgICAgaXBkX2lkID0gaXBkX2lkLnNwbGl0KCcsJykubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaXBkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcGFyc2VJbnQoeClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjb21tb25TZWxlY3RlZENyaXRlcmlhcyA9IFsuLi5pcGRfaWRdXG5cblxuICAgICAgICAgICAgaWYgKCFpc1NlcnZlciAmJiAhbG9jYXRpb25fbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxhY2VfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZ2V0TG9jYXRpb25Gcm9tUGxhY2VJZChwbGFjZV9pZCwgKGxvY2F0aW9uX29iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdExvY2F0aW9uKGxvY2F0aW9uX29iamVjdCwgJ2F1dG9Db21wbGV0ZScsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGF0ICYmIGxvbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9nZXRsb2NhdGlvbkZyb21MYXRMb25nKGxhdCwgbG9uZywgKGxvY2F0aW9uVHlwZSA9PSAnZ2VvaXAnID8gJ2NpdHknIDogJ2xvY2FsaXR5JyksIChsb2NhdGlvbl9vYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0TG9jYXRpb24obG9jYXRpb25fb2JqZWN0LCBsb2NhdGlvblR5cGUsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9IG51bGxcbiAgICAgICAgICAgIGlmIChsYXQgJiYgbG9uZykge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24gPSB7IGdlb21ldHJ5OiB7IGxvY2F0aW9uOiB7IGxhdCwgbG5nOiBsb25nIH0gfSwgcGxhY2VfaWQsIGZvcm1hdHRlZF9hZGRyZXNzOiBcIkRlbGhpXCIgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobG9jYXRpb25fbXMpIHtcbiAgICAgICAgICAgICAgICBBUElfR0VUKGAvYXBpL3YxL2dlb2lwL2Fkd29yZC8ke2xvY2F0aW9uX21zfWApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbiA9IHsgZ2VvbWV0cnk6IHsgbG9jYXRpb246IHsgbGF0OiBkYXRhLmxhdGl0dWRlLCBsbmc6IGRhdGEubG9uZ2l0dWRlIH0gfSwgcGxhY2VfaWQsIGZvcm1hdHRlZF9hZGRyZXNzOiBcIlwiIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU2VydmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZ2V0bG9jYXRpb25Gcm9tTGF0TG9uZyhkYXRhLmxhdGl0dWRlLCBkYXRhLmxvbmdpdHVkZSwgJ2xvY2FsaXR5JywgKGxvY2F0aW9uX29iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RMb2NhdGlvbihsb2NhdGlvbl9vYmplY3QsICdnZW8nLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tb25TZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNTZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2dldGxvY2F0aW9uRnJvbUxhdExvbmcobGF0LCBsb25nLCAnbG9jYWxpdHknLCAobG9jYXRpb25fb2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RMb2NhdGlvbihsb2NhdGlvbl9vYmplY3QsICdnZW8nLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tb25TZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gX2dldExvY2F0aW9uUGFyYW0ocXVlclBhcmFtcywgaXNTZXJ2ZXIgPSBmYWxzZSwgdGFnKSB7XG4gICAgaWYgKGlzU2VydmVyKSB7XG4gICAgICAgIHJldHVybiBxdWVyUGFyYW1zW3RhZ11cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzIEFQSSBhc3N1bWVzIHRoZSBjb250ZXh0IG9mIHJlYWN0LXJvdXRlci00XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlclBhcmFtcylcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5nZXQodGFnKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9