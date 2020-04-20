webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Sectiontitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Sectiontitle */ "./components/Sectiontitle.js");
/* harmony import */ var _material_ui_icons_PhoneAndroid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/PhoneAndroid */ "./node_modules/@material-ui/icons/PhoneAndroid.js");
/* harmony import */ var _material_ui_icons_PhoneAndroid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhoneAndroid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/MailOutline */ "./node_modules/@material-ui/icons/MailOutline.js");
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Room */ "./node_modules/@material-ui/icons/Room.js");
/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_7__);


var _this = undefined,
    _jsxFileName = "/Volumes/nonssd/dev/sponhumanprod/resume-website/pages/contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var metaData = {
  title: "Contact Mr. Jason Pierce",
  description: "Want to reach me directly? Fill out the form and I'll get the message sent straight to my phone",
  keywords: 'Jason Pierce, Contact me, direct hire'
};

var ContactPage = function ContactPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      phoneNumbers = _useState[0],
      setPhoneNumbers = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      emailAddress = _useState2[0],
      setEmailAddress = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      address = _useState3[0],
      setAddress = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: "",
    email: "",
    subject: "",
    message: ""
  }),
      formdata = _useState4[0],
      setFormdata = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      error = _useState5[0],
      setError = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      message = _useState6[0],
      setMessage = _useState6[1];

  var submitHandler = function submitHandler(event) {
    event.preventDefault();

    if (!formdata.name) {
      setError(true);
      setMessage('Name is required');
    } else if (!formdata.email) {
      setError(true);
      setMessage('Email is required');
    } else if (!formdata.subject) {
      setError(true);
      setMessage('Subject is required');
    } else if (!formdata.message) {
      setError(true);
      setMessage('Message is required');
    } else {
      setError(false);
      setMessage('You message has been sent!!!');
    }
  };

  var handleChange = function handleChange(event) {
    setFormdata(_objectSpread({}, formdata, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.currentTarget.name, event.currentTarget.value)));
  };

  var numberFormatter = function numberFormatter(number) {
    var phnNumber = number;
    return phnNumber;
  };

  var handleAlerts = function handleAlerts() {
    if (error && message) {
      return __jsx("div", {
        className: "alert alert-danger mt-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }
      }, message);
    } else if (!error && message) {
      return __jsx("div", {
        className: "alert alert-success mt-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, message);
    } else {
      return null;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/contactinfo').then(function (response) {
      setPhoneNumbers(response.data.phoneNumbers);
      setEmailAddress(response.data.emailAddress);
      setAddress(response.data.address);
    });
  }, []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pageMetaData: metaData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mi-contact-area mi-section mi-padding-top mi-padding-bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(_components_Sectiontitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Contact Me",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "mi-contact-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, !phoneNumbers ? null : __jsx("div", {
    className: "mi-contact-infoblock",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "mi-contact-infoblock-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_PhoneAndroid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "mi-contact-infoblock-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 23
    }
  }, __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, "Phone"), phoneNumbers.map(function (phoneNumber) {
    return __jsx("p", {
      key: phoneNumber,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 27
      }
    }, __jsx("a", {
      href: numberFormatter(phoneNumber),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 48
      }
    }, phoneNumber));
  }))), !emailAddress ? null : __jsx("div", {
    className: "mi-contact-infoblock",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "mi-contact-infoblock-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "mi-contact-infoblock-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 23
    }
  }, __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 25
    }
  }, "Email"), emailAddress.map(function (email) {
    return __jsx("p", {
      key: email,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 27
      }
    }, __jsx("a", {
      href: "mailto:".concat(email),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 42
      }
    }, email));
  }))), !phoneNumbers ? null : __jsx("div", {
    className: "mi-contact-infoblock",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "mi-contact-infoblock-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "mi-contact-infoblock-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 23
    }
  }, __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  }, "Address"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 25
    }
  }, address)))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactPage);

/***/ })

})
//# sourceMappingURL=contact.js.187aac684e90be238da5.hot-update.js.map