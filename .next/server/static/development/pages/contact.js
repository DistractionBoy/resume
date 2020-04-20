module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BackgroundLines.js":
/*!***************************************!*\
  !*** ./components/BackgroundLines.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Volumes/nonssd/dev/sponhumanprod/resume-website/components/BackgroundLines.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function BackgroundLines(props) {
  return __jsx("div", {
    className: "mi-bglines",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BackgroundLines);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./data/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/nonssd/dev/sponhumanprod/resume-website/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (({
  pageMetaData: {
    title = 'CV: Jason Pierce',
    description = '',
    keywords = ''
  }
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, title), __jsx("meta", {
  name: "description",
  content: description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "keywords",
  content: keywords,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}), __jsx("meta", {
  charSet: "utf-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "author",
  content: "Jason Pierce",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "shortcut icon",
  href: "/images/favicon-frame.ico",
  type: "image/x-icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  href: "/images/favicon.ico",
  type: "image/x-icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-startup-image",
  href: "/images/launch.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "apple-mobile-web-app-title",
  content: "SponHumanProd",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "apple-mobile-web-app-capable",
  content: "yes",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "57x57",
  href: "/images/touch-icon-iphone.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "76x76",
  href: "/images/touch-icon-ipad.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "120x120",
  href: "/images/touch-icon-iphone-retina.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "152x152",
  href: "/images/touch-icon-ipad-retina.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "167x167",
  href: "/images/touch-icon-ipad-pro.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "/images/touch-icon-iphone-6-plus.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  sizes: "192x192",
  href: "/images/icon-hd.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  sizes: "128x128",
  href: "/images/icon.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }
})));

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_JPtheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/JPtheme */ "./public/JPtheme.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.js");
/* harmony import */ var _components_BackgroundLines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BackgroundLines */ "./components/BackgroundLines.js");
var _jsxFileName = "/Volumes/nonssd/dev/sponhumanprod/resume-website/components/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  pageMetaData
}) => __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
  theme: _public_JPtheme__WEBPACK_IMPORTED_MODULE_2__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "mi-wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}, __jsx(_components_BackgroundLines__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }
}), __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  pageMetaData: pageMetaData,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }
}), __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 13
  }
}), children)));

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Volumes/nonssd/dev/sponhumanprod/resume-website/components/Navigation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Navigation = () => {
  const {
    0: information,
    1: setInformation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: navigationToggler,
    1: setNavigationToggler
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/information').then(response => {
      setInformation(response.data);
    });
  }, []);
  return __jsx("nav", {
    className: navigationToggler ? "mi-header is-visible" : "mi-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: handleNavigationToggler,
    className: "mi-header-toggler",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, !navigationToggler ? __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 39
    }
  }) : __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 54
    }
  })), __jsx("div", {
    className: "mi-header-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "mi-header-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: information.brandImage,
    alt: "brandimage",
    style: {
      borderRadius: '50%',
      border: '5px solid #2e344e'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }))), __jsx("ul", {
    className: "mi-header-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 40
    }
  }, "Home"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/resume",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 46
    }
  }, "Resume"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 49
    }
  }, "Portfolio"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 47
    }
  }, "Contact")))), __jsx("p", {
    className: "mi-header-copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "\xA9 ", new Date().getFullYear(), " ", __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 86
    }
  }, __jsx("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: "http://sponhumanprod.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 89
    }
  }, "SponHumanProd")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/Sectiontitle.js":
/*!************************************!*\
  !*** ./components/Sectiontitle.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Volumes/nonssd/dev/sponhumanprod/resume-website/components/Sectiontitle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Sectiontitle(props) {
  return __jsx("div", {
    className: "mi-sectiontitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, props.title), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, props.title));
}

/* harmony default export */ __webpack_exports__["default"] = (Sectiontitle);

/***/ }),

/***/ "./data/db/database.js":
/*!*****************************!*\
  !*** ./data/db/database.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock */ "./data/mock.js");

const database = {
  information: {
    name: 'Jason Pierce',
    aboutContent: "Passionate about presentation, I am a Sr. Software Engineer with an eye for design and a side-gig as a multimedia freelancer.",
    age: 35,
    phone: '(703) 789-5247',
    nationality: 'American',
    language: 'English, German',
    email: '',
    address: 'Warrenton, VA, USA',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://facebook.com/SponHumanProd',
      twitter: 'https://twitter.com/DistractionBoy_',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/jason-pierce/',
      dribbble: '',
      github: 'https://github.com/jason-pierce-designs'
    },
    brandImage: '/images/profile-pic.png',
    aboutImage: '/images/about-image-sm.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/jasonPierceCV.pdf'
  },
  services: [{
    title: "Web Development",
    icon: 'fa fa-code',
    details: "Experience as both a full time Developer (W-2) and a discreet subcontractor "
  }, {
    title: "Project Management",
    icon: 'fa fa-project-diagram',
    details: "Delivering incrementally and often, my clients do not feel disconnected from their project."
  }, {
    title: "Photography",
    icon: 'fa fa-camera',
    details: "Event, product, and portrait photographer with over 10 years of professional experience."
  }],
  reviews: [{
    id: 1,
    content: `I won't forget how Jason saved the day when my team was struggling with a bad 
                email template we inherited at the 11th hour of launching. We approached Jason asking 
                if he knew who could help but he stepped 
                in and helped us resolve the issue quickly while teaching us some new HTML tricks to 
                improve deliverability and engagement. Errors went from 18 to 0, and we 
                optimized the layout for mobile screens as well. He took the time to figure 
                out the issues, and he set up a couple 
                training sessions to empower my team. It was more than we 
                asked for––and certainly more than most people would have done in his position.`,
    author: {
      name: 'Ifdy Perez',
      designation: 'Marketing Director'
    }
  }, {
    id: 2,
    content: `Jason would be a great addition to any front end team, or team needing front-end 
                development. He has a great sense of humor and a unique perception that allows him to ask 
                good questions in a non threatening way that gets answers. I was impressed with Jason’s 
                understanding of progressive enhancements for web pages (ie - optimizing website 
                presentation based on screen size). I was equally impressed with his knowledge of how 
                to make UIs accessible (for section 508 compliance), the presentations he gave to us 
                on accessibility and his insistence that the company take it seriously!`,
    author: {
      name: 'Fred Biden',
      designation: 'Project Engineer'
    }
  }, {
    id: 3,
    content: `Jason was my student in the Advanced Database class and stood out as a very engaged, 
                inquisitive and grounded student. It was clear from the quality of his assignments 
                that he has a flair for programming and design. He is also able to apply newer 
                technologies in UI/UX design to real-world scenarios quickly - a rare trait that I 
                have leveraged by having him give talks in my class on UI technologies, careers 
                and just life in IT. He never disappoints - this is evident by the intense student 
                engagement he garners every time he speaks. Thank you Jason for readily agreeing 
                each semester to share your experience with my students.`,
    author: {
      name: 'Manju Aravind',
      designation: 'Seasoned IT Practitioner'
    }
  }, {
    id: 4,
    content: `I had the privilege of working with Jason on the same scrum team for over a year. 
                He was always prepared and provided 
                valuable feedback during grooming and planning sessions. Jason is detail oriented and always 
                takes the initiative to go the extra mile to provide the best user experience within the 
                product. He worked closely with our Design team to re-architect a scheduling feature within 
                the app to provide not only a better user experience but also made sure the technical design 
                was scaleable. He is always willing to jump in and help even if it's not something he is 
                currently working on to help his team.`,
    author: {
      name: 'Archana Josaitas',
      designation: 'Product Director'
    }
  }],
  skills: [{
    title: "HTML/CSS/SASS",
    value: 95
  }, {
    title: "JavaScript (ESX)",
    value: 88
  }, {
    title: "React",
    value: 83
  }, {
    title: "Redux",
    value: 84
  }, {
    title: "Angular (1.x)",
    value: 90
  }, {
    title: "Node",
    value: 70
  }, {
    title: "Google Maps API",
    value: 93
  }, {
    title: "Material-UI/Bootstrap",
    value: 93
  }, {
    title: "Styled Components",
    value: 75
  }, {
    title: "508 Compliance",
    value: 97
  }],
  portfolios: [{
    id: 1,
    title: "All of Us",
    subtitle: "Sr. Software Engineer",
    imageUrl: "/images/portfolio/all-of-us.jpg",
    url: 'https://participant.joinallofus.org/#/register?lang=en'
  }, {
    id: 2,
    title: "Stratera Holiday Party",
    subtitle: "Event Photographer",
    imageUrl: "/images/portfolio/stratera-tech-party.jpg",
    largeImageUrl: ["/images/portfolio/stratera-technologies/holiday-party-2019-2.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-20.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-25.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-26.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-29.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-31.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-39.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-44.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-62.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-66.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-67.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-69.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-70.jpg", "/images/portfolio/stratera-technologies/holiday-party-2019-101.jpg"]
  }, {
    id: 3,
    title: "Elite Build Inc",
    subtitle: "Logo Designer",
    imageUrl: "/images/portfolio/elite-build-logo.jpg",
    largeImageUrl: ["/images/elite-build-lg.jpg"]
  }, {
    id: 4,
    title: "Surprise Engagement",
    subtitle: "Portrait Photographer",
    imageUrl: "/images/portfolio/surprise-engagement.jpg",
    largeImageUrl: ["/images/portfolio/proposal/_JMP2049.jpg", "/images/portfolio/proposal/_JMP2112.jpg", "/images/portfolio/proposal/_JMP2115.jpg", "/images/portfolio/proposal/_JMP2123.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-82.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-83.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-108.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-109.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-116.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-136.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-137.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-146.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-150.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-176.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-178.jpg", "/images/portfolio/proposal/jaswanth-harshitha-proposal-189.jpg"]
  }, {
    id: 5,
    title: "CPC DB | USPTO",
    subtitle: "UI Developer",
    imageUrl: "/images/portfolio/uspto-logo.jpg",
    largeImageUrl: ["/images/portfolio/cpcdb-stratera.jpg"]
  }, {
    id: 6,
    title: "Engagement Party",
    subtitle: "Event Photographer",
    imageUrl: "/images/portfolio/engagement-party.jpg",
    largeImageUrl: ["/images/portfolio/party/jaswanth-harshi-party-14.jpg", "/images/portfolio/party/jaswanth-harshi-party-15.jpg", "/images/portfolio/party/jaswanth-harshi-party-18.jpg", "/images/portfolio/party/jaswanth-harshi-party-39.jpg", "/images/portfolio/party/jaswanth-harshi-party-69.jpg", "/images/portfolio/party/jaswanth-harshi-party-70.jpg", "/images/portfolio/party/jaswanth-harshi-party-77.jpg", "/images/portfolio/party/jaswanth-harshi-party-83.jpg", "/images/portfolio/party/jaswanth-harshi-party-96.jpg", "/images/portfolio/party/jaswanth-harshi-party-101.jpg", "/images/portfolio/party/jaswanth-harshi-party-113.jpg", "/images/portfolio/party/jaswanth-harshi-party-152.jpg", "/images/portfolio/party/jaswanth-harshi-party-166.jpg", "/images/portfolio/party/jaswanth-harshi-party-176.jpg", "/images/portfolio/party/jaswanth-harshi-party-180.jpg", "/images/portfolio/party/jaswanth-harshi-party-185.jpg", "/images/portfolio/party/jaswanth-harshi-party-190.jpg", "/images/portfolio/party/jaswanth-harshi-party-192.jpg"]
  }, {
    id: 7,
    title: "Story of Our Schools",
    subtitle: "Web Developer",
    imageUrl: "/images/portfolio/story-of-our-schools.jpg",
    url: 'https://storyofourschools.org'
  }, {
    id: 8,
    title: "Mike & Kristin",
    subtitle: "Event Photographer",
    imageUrl: "/images/portfolio/mike-kristin.jpg",
    largeImageUrl: ["/images/portfolio/mike-kristin/Kristin-n-Mike-1.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-2.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-16.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-34.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-37.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-41.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-43.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-61.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-79.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-81.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-112.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-115.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-116.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-118.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-134.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-173.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-190.jpg", "/images/portfolio/mike-kristin/Kristin-n-Mike-234.jpg"]
  }, {
    id: 9,
    title: "PeppiGel",
    subtitle: "Project Manager",
    imageUrl: "/images/portfolio/peppi-gel.jpg",
    url: 'https://peppigel.com'
  }, {
    id: 10,
    title: "Exxon Mobile",
    subtitle: "UI Developer",
    imageUrl: "/images/portfolio/exxon-mobile.jpg",
    largeImageUrl: ["/images/portfolio/mbil-branding.jpg"]
  }, {
    id: 11,
    title: "Cori",
    subtitle: "Portrait Photographer",
    imageUrl: "/images/portfolio/cori-portrait.jpg",
    largeImageUrl: ["/images/portfolio/cori/crusher-shoot-9.jpg", "/images/portfolio/cori/crusher-shoot-12.jpg", "/images/portfolio/cori/crusher-shoot-51.jpg", "/images/portfolio/cori/crusher-shoot-60.jpg", "/images/portfolio/cori/crusher-shoot-69.jpg", "/images/portfolio/cori/crusher-shoot-84.jpg", "/images/portfolio/cori/crusher-shoot-94.jpg", "/images/portfolio/cori/crusher-shoot-95.jpg", "/images/portfolio/cori/crusher-shoot-96.jpg", "/images/portfolio/cori/crusher-shoot-97.jpg", "/images/portfolio/cori/crusher-shoot-98.jpg", "/images/portfolio/cori/crusher-shoot-99.jpg"]
  }, {
    id: 12,
    title: "International Gourmet Foods",
    subtitle: "Web Developer",
    imageUrl: "/images/portfolio/igf-logo.jpg",
    url: 'http://igf-inc.com'
  }, {
    id: 13,
    title: "\"Bongo Bobby\"",
    subtitle: "Event Photographer",
    imageUrl: "/images/portfolio/bongo-bobby-3.jpg",
    largeImageUrl: ["/images/portfolio/bongo-bobby/bongo-bobby-1.jpg", "/images/portfolio/bongo-bobby/bongo-bobby-5.jpg", "/images/portfolio/bongo-bobby/bongo-bobby-23.jpg", "/images/portfolio/bongo-bobby/bongo-bobby-24.jpg", "/images/portfolio/bongo-bobby/bongo-bobby-33.jpg", "/images/portfolio/bongo-bobby/bongo-bobby-36.jpg", "/images/portfolio/bongo-bobby/bongo-bobby-47.jpg", "/images/portfolio/bongo-bobby/bongo-bobby-58.jpg", "/images/portfolio/bongo-bobby/pinkNwhiteParty-16.jpg", "/images/portfolio/bongo-bobby/pinkNwhiteParty-34.jpg", "/images/portfolio/bongo-bobby/pinkNwhiteParty-43.jpg", "/images/portfolio/bongo-bobby/pinkNwhiteParty-57.jpg", "/images/portfolio/bongo-bobby/robert-powell-gig1-8.jpg", "/images/portfolio/bongo-bobby/robert-powell-gig1-9.jpg", "/images/portfolio/bongo-bobby/robert-powell-gig1-13.jpg", "/images/portfolio/bongo-bobby/robert-powell-gig1-14.jpg", "/images/portfolio/bongo-bobby/robert-powell-gig1-42.jpg", "/images/portfolio/bongo-bobby/robert-powell-gig1-61.jpg", "/images/portfolio/bongo-bobby/RobertPowell-1.jpg", "/images/portfolio/bongo-bobby/RobertPowell-10.jpg", "/images/portfolio/bongo-bobby/RobertPowell-14.jpg", "/images/portfolio/bongo-bobby/RobertPowell-33.jpg", "/images/portfolio/bongo-bobby/RobertPowell-61.jpg", "/images/portfolio/bongo-bobby/RobertPowell-75.jpg"]
  }, {
    id: 14,
    title: "Sabra | E-Newsletter",
    subtitle: "UI Developer",
    imageUrl: "/images/portfolio/sabra.jpg",
    largeImageUrl: ["/images/portfolio/sbra-newsletter.jpg"]
  }, {
    id: 15,
    title: "Camila",
    subtitle: "Portrait Photographer",
    imageUrl: "/images/portfolio/camila-portrait.jpg",
    largeImageUrl: ["/images/portfolio/camila/mila-fam-3.jpg", "/images/portfolio/camila/mila-fam-5.jpg", "/images/portfolio/camila/mila-fam-8.jpg", "/images/portfolio/camila/mila-fam-11b.jpg", "/images/portfolio/camila/mila-fam-13.jpg", "/images/portfolio/camila/mila-fam-14.jpg", "/images/portfolio/camila/mila-fam-15.jpg", "/images/portfolio/camila/mila-fam-16.jpg", "/images/portfolio/camila/mila-fam-17.jpg", "/images/portfolio/camila/mila-fam-19.jpg"]
  }, {
    id: 16,
    title: "KCPT",
    subtitle: "Logo Designer",
    imageUrl: "/images/portfolio/kcpt-logo.jpg",
    largeImageUrl: ["/images/portfolio/kcpt-logo-lg.jpg"]
  }, {
    id: 17,
    title: "Jay Neal",
    subtitle: "Event Photographer.",
    imageUrl: "/images/portfolio/neal-baby-shower.jpg",
    largeImageUrl: ["/images/portfolio/jay/Neal-baby-shower-7.jpg", "/images/portfolio/jay/Neal-baby-shower-17.jpg", "/images/portfolio/jay/Neal-baby-shower-24.jpg", "/images/portfolio/jay/Neal-baby-shower-30.jpg", "/images/portfolio/jay/Neal-baby-shower-31.jpg", "/images/portfolio/jay/Neal-baby-shower-50.jpg", "/images/portfolio/jay/Neal-baby-shower-65.jpg", "/images/portfolio/jay/Neal-baby-shower-67.jpg", "/images/portfolio/jay/Neal-baby-shower-73.jpg", "/images/portfolio/jay/Neal-baby-shower-111.jpg", "/images/portfolio/jay/Neal-baby-shower-121.jpg", "/images/portfolio/jay/Neal-baby-shower-141.jpg", "/images/portfolio/jay/Neal-baby-shower-154.jpg", "/images/portfolio/jay/Neal-baby-shower-157.jpg", "/images/portfolio/jay/Neal-baby-shower-159.jpg"]
  }, {
    id: 18,
    title: "Galenski Plumbing",
    subtitle: "Web Developer",
    imageUrl: "/images/portfolio/galenski-plumbing.jpg",
    largeImageUrl: ["/images/portfolio/galenski-plumbing/home-page.jpg", "/images/portfolio/galenski-plumbing/rooter-page.jpg", "/images/portfolio/galenski-plumbing/about-page.jpg", "/images/portfolio/galenski-plumbing/services-page.jpg"]
  }, {
    id: 19,
    title: "Marion Barry's Last Night",
    subtitle: "Event Photographer",
    imageUrl: "/images/portfolio/marion-barry-raymone-baine.jpg",
    largeImageUrl: ["/images/portfolio/marion-barry/shadow-room.jpg", "/images/portfolio/marion-barry/signing-books.jpg", "/images/portfolio/marion-barry/raymone-baine-group.jpg", "/images/portfolio/marion-barry/raymone-baine-at-table.jpg", "/images/portfolio/marion-barry/raymone-baine.jpg", "/images/portfolio/marion-barry/marion-portrait.jpg", "/images/portfolio/marion-barry/marion-portrait-2.jpg", "/images/portfolio/marion-barry/lead-singer.jpg", "/images/portfolio/marion-barry/pay-sax-man.jpg", "/images/portfolio/marion-barry/sax-man.jpg", "/images/portfolio/marion-barry/congressman.jpg", "/images/portfolio/marion-barry/marion-portrait.jpg", "/images/portfolio/marion-barry/shadow-rep.jpg", "/images/portfolio/marion-barry/shadow-rep-2.jpg", "/images/portfolio/marion-barry/call-with-marion.jpg", "/images/portfolio/marion-barry/call-with-marion-2.jpg", "/images/portfolio/marion-barry/call-with-marion-3.jpg", "/images/portfolio/marion-barry/call-with-marion-4.jpg", "/images/portfolio/marion-barry/bartenders.jpg", "/images/portfolio/marion-barry/bartender-portrait.jpg"]
  }, {
    id: 20,
    title: "Tapout Body Spray",
    subtitle: "Lighting & Electric",
    imageUrl: "/images/portfolio/tapout-commercial.jpg",
    largeImageUrl: ["/images/portfolio/tapout/brooklyn-shipyard.jpg", "/images/portfolio/tapout/greenhouse-brooklyn.jpg", "/images/portfolio/tapout/jcena-cam.jpg", "/images/portfolio/tapout/john-cena.jpg", "/images/portfolio/tapout/tapout-spray.jpg"]
  }, {
    id: 21,
    title: "Lorena Bobbit",
    subtitle: "Logo Designer",
    imageUrl: "/images/portfolio/lorenas-red-wagon-logo.jpg",
    largeImageUrl: ["/images/portfolio/LRWlogo6FINAL.jpg"]
  }, {
    id: 22,
    title: "El Vaquero West",
    subtitle: "Designer/Photographer",
    imageUrl: "/images/portfolio/el-vaquero.jpg",
    largeImageUrl: ["/images/portfolio/el-vaquero/cover.jpg", "/images/portfolio/el-vaquero/appswithburn.jpg", "/images/portfolio/el-vaquero/lunch.jpg", "/images/portfolio/el-vaquero/carnepollo.jpg", "/images/portfolio/el-vaquero/specialdinners.jpg", "/images/portfolio/el-vaquero/burritos.jpg", "/images/portfolio/el-vaquero/combos.jpg", "/images/portfolio/el-vaquero/drinks.jpg", "/images/portfolio/el-vaquero/chef-salad.jpg", "/images/portfolio/el-vaquero/burritocalifornia.jpg", "/images/portfolio/el-vaquero/nachos-tejanos.jpg", "/images/portfolio/el-vaquero/cheesecake.jpg", "/images/portfolio/el-vaquero/xango.jpg", "/images/portfolio/el-vaquero/to-go-outside.jpg", "/images/portfolio/el-vaquero/to-go-inside.jpg"]
  }, {
    id: 23,
    title: "Batbike",
    subtitle: "Portrait Photographer",
    imageUrl: "/images/portfolio/batbike.jpg",
    largeImageUrl: ["/images/portfolio/batbike/bergen-batmobile-1.jpg", "/images/portfolio/batbike/bergen-batmobile-2.jpg", "/images/portfolio/batbike/bergen-batmobile-3.jpg", "/images/portfolio/batbike/bergen-batmobile-4.jpg", "/images/portfolio/batbike/bergen-batmobile-5.jpg", "/images/portfolio/batbike/bergen-batmobile-6.jpg", "/images/portfolio/batbike/bergen-batmobile-7.jpg", "/images/portfolio/batbike/bergen-batmobile-8.jpg", "/images/portfolio/batbike/bergen-batmobile-9.jpg", "/images/portfolio/batbike/bergen-batmobile-10.jpg", "/images/portfolio/batbike/bergen-batmobile-11.jpg", "/images/portfolio/batbike/bergen-batmobile-13.jpg"]
  }, {
    id: 24,
    title: "Mark & Paula",
    subtitle: "Event Photographer",
    imageUrl: "/images/portfolio/mark-paula.jpg",
    largeImageUrl: ["/images/portfolio/mark-paula/Paula-and-Mark-11.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-38.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-40.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-42.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-46.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-47.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-71.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-75.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-81.jpg", "/images/portfolio/mark-paula/Paula-and-Mark-103.jpg"]
  }, {
    id: 25,
    title: "CNA Scientific",
    subtitle: "Multimedia Specialist",
    imageUrl: "/images/portfolio/cna-logo.jpg",
    largeImageUrl: ["/images/portfolio/cna/beaker-setup-pic.jpg", "/images/portfolio/cna/beaker-pic-setup.jpg", "/images/portfolio/cna/beakers-pic.jpg", "/images/portfolio/cna/cna-catalogue-cover.jpg", "/images/portfolio/cna/cna-brochure-front.jpg", "/images/portfolio/cna/cna-brochure-inside.jpg", "/images/portfolio/cna/cna-brochure-back.jpg", "/images/portfolio/cna/micro-inspector.jpg", "/images/portfolio/cna/microscope.jpg"]
  }, {
    id: 26,
    title: "Carson & Kelly",
    subtitle: "Event Photographer",
    imageUrl: "/images/portfolio/carson-kelly.jpg",
    largeImageUrl: ["/images/portfolio/carson-kelly/ck-martin-9.jpg", "/images/portfolio/carson-kelly/ck-martin-10.jpg", "/images/portfolio/carson-kelly/ck-martin-11.jpg", "/images/portfolio/carson-kelly/ck-martin-14.jpg", "/images/portfolio/carson-kelly/ck-martin-15.jpg", "/images/portfolio/carson-kelly/ck-martin-20.jpg", "/images/portfolio/carson-kelly/ck-martin-23.jpg", "/images/portfolio/carson-kelly/ck-martin-34.jpg", "/images/portfolio/carson-kelly/ck-martin-35.jpg", "/images/portfolio/carson-kelly/ck-martin-38.jpg", "/images/portfolio/carson-kelly/ck-martin-45.jpg", "/images/portfolio/carson-kelly/ck-martin-46.jpg", "/images/portfolio/carson-kelly/ck-martin-56.jpg", "/images/portfolio/carson-kelly/ck-martin-89.jpg", "/images/portfolio/carson-kelly/ck-martin-106.jpg", "/images/portfolio/carson-kelly/ck-martin-118.jpg", "/images/portfolio/carson-kelly/ck-martin-124.jpg", "/images/portfolio/carson-kelly/ck-martin-127.jpg", "/images/portfolio/carson-kelly/ck-martin-130.jpg", "/images/portfolio/carson-kelly/ck-martin-132.jpg", "/images/portfolio/carson-kelly/ck-martin-135.jpg", "/images/portfolio/carson-kelly/ck-martin-140.jpg", "/images/portfolio/carson-kelly/ck-martin-142.jpg", "/images/portfolio/carson-kelly/ck-martin-160.jpg", "/images/portfolio/carson-kelly/ck-martin-226.jpg", "/images/portfolio/carson-kelly/ck-martin-248.jpg"]
  }, {
    id: 27,
    title: "Loudoun Exteriors",
    subtitle: "Graphic Designer",
    imageUrl: "/images/portfolio/loudoun-exteriors.jpg",
    largeImageUrl: ["/images/portfolio/loudoun-exteriors/loudoun-exteriors-logo.jpg", "/images/portfolio/loudoun-exteriors/loudoun-exteriors-ad-1.jpg", "/images/portfolio/loudoun-exteriors/loudoun-exteriors-ad-2.jpg", "/images/portfolio/loudoun-exteriors/loudoun-exteriors-ad-3.jpg", "/images/portfolio/loudoun-exteriors/loudoun-exteriors-ad-4.jpg"]
  }],
  experience: {
    workingExperience: [{
      id: 1,
      year: "2017 - Present",
      position: "Senior Software Engineer",
      company: "Vibrent Health",
      details: `Sr. Engineer responsible for delivering complex product
                  features. Web App primary contributor, building scalable
                  and modern applications and libraries. Developed and
                  delivered National Institute of Health’s research program
                  All Of Us to national launch. It is a platform to support
                  building one of the largest and most diverse datasets for
                  precision medicine health research.
                  Helped redefine the front end architecture for building a
                  new complex SAAS based research product across all
                  platforms.`
    }, {
      id: 2,
      year: "2016 - 2017",
      position: "UI Developer",
      company: "Stratera Technologies",
      details: `Developed UI features in support of The Patent and Trade
                  Office’s Cooperative Patent Classification Database, a
                  new program that used Spring/Restful services displayed
                  with Angular whose purpose was to help employees of
                  the PTO classify patents, search for classifications and
                  maintain their history, where each major release was then
                  used by over 20,000 employees`
    }, {
      id: 3,
      year: "2014 - 2015",
      position: "UI Developer",
      company: "Agilex Technologies",
      details: `Front End Web Developer contributing to a suite of apps
                  for the Veterans Administration, in an Agile/Scrum
                  environment with Continuous Integration. Learned about
                  508 Accessibility Standards.`
    }, {
      id: 4,
      year: "2010 - Present",
      position: "Owner",
      company: "Spontaneous Human Productions",
      details: `After a few years of freelancing on small projects 
                  and teaching myself the basics of design, I officially 
                  launched Spontaneous Human Productions in July of 2010
                  and have since used it to tackle a wide variety of projects
                  ranging from design and video to photography and web services`
    }],
    educationExperience: [{
      id: 1,
      year: "2011 - 2014",
      graduation: "Bachelor of Science | Applied Information Technology",
      university: "George Mason University",
      details: "Trained in the workings and management of IT projects with a focus on the client's bottom line"
    }, {
      id: 2,
      year: "2009-2011",
      graduation: "Associates of Science | Information Technology",
      university: "Northern Virginia Community College",
      details: "Member of Phi Thetha Kappa: the National Honor Society fraternity"
    }]
  },
  blogs: [{
    id: 1,
    title: 'Markdown & Html supported blog.',
    featuredImage: '/images/blog-image-1.jpg',
    filesource: '../../blog/markdown-html-supported-blog.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 2,
    title: 'Installing NodeJS on your device.',
    featuredImage: '/images/blog-image-2.jpg',
    filesource: '../../blog/installing-nodejs-on-your-device.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 3,
    title: 'UI/UX design starter with Adobe XD.',
    featuredImage: '/images/blog-image-3.jpg',
    filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 4,
    title: 'Boost your post for increasing sales.',
    featuredImage: '/images/blog-image-4.jpg',
    filesource: '../../blog/boost-your-post-for-increasing-sales.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 5,
    title: 'Difference between GatsbyJS & NextJS.',
    featuredImage: '/images/blog-image-5.jpg',
    filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 6,
    title: 'How to choose javascript framework for project.',
    featuredImage: '/images/blog-image-6.jpg',
    filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 7,
    title: 'Web automation with python language.',
    featuredImage: '/images/blog-image-7.jpg',
    filesource: '../../blog/web-automation-with-python-language.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 8,
    title: 'Time to use latest technology for creating a website.',
    featuredImage: '/images/blog-image-8.jpg',
    filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 9,
    title: 'Think out of the box.',
    featuredImage: '/images/blog-image-9.jpg',
    filesource: '../../blog/think-out-of-the-box.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 10,
    title: 'Trending designs in 2020.',
    featuredImage: '/images/blog-image-1.jpg',
    filesource: '../../blog/trending-designs-in-2020.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 11,
    title: 'How to get 10k instagram followers?',
    featuredImage: '/images/blog-image-2.jpg',
    filesource: '../../blog/how-to-get-10k-instagram-followers.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 12,
    title: 'What NodeJS can do?',
    featuredImage: '/images/blog-image-3.jpg',
    filesource: '../../blog/what-nodejs-can-do.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 13,
    title: 'Futures of javascript.',
    featuredImage: '/images/blog-image-4.jpg',
    filesource: '../../blog/future-of-javascript.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 14,
    title: 'Popular javascript library in 2020.',
    featuredImage: '/images/blog-image-5.jpg',
    filesource: '../../blog/popular-javascript-library-in-2020.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }, {
    id: 15,
    title: 'Promrammers must read books.',
    featuredImage: '/images/blog-image-6.jpg',
    filesource: '../../blog/programmers-must-read-books.md',
    createDay: "20",
    createMonth: 'February',
    createYear: "2020"
  }],
  contactInfo: {
    phoneNumbers: ['(703) 789-5247'],
    emailAddress: ['jason.pierce.designs@gmail.com', 'jason.pierce@sponhumanprod.com'],
    address: "Warrenton, Virginia 20186. United States"
  }
};
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});
_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});

/***/ }),

/***/ "./data/index.js":
/*!***********************!*\
  !*** ./data/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock */ "./data/mock.js");
/* harmony import */ var _db_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db/database */ "./data/db/database.js");


_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onAny().passThrough();

/***/ }),

/***/ "./data/mock.js":
/*!**********************!*\
  !*** ./data/mock.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const MockAdapter = __webpack_require__(/*! axios-mock-adapter */ "axios-mock-adapter");

const axios = __webpack_require__(/*! axios */ "axios");

const Mock = new MockAdapter(axios);
/* harmony default export */ __webpack_exports__["default"] = (Mock);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Sectiontitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sectiontitle */ "./components/Sectiontitle.js");
/* harmony import */ var _material_ui_icons_PhoneAndroid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/PhoneAndroid */ "@material-ui/icons/PhoneAndroid");
/* harmony import */ var _material_ui_icons_PhoneAndroid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhoneAndroid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/MailOutline */ "@material-ui/icons/MailOutline");
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Room */ "@material-ui/icons/Room");
/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Volumes/nonssd/dev/sponhumanprod/resume-website/pages/contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const metaData = {
  title: `Contact Mr. Jason Pierce`,
  description: `Want to reach me directly? Fill out the form and I'll get the message sent straight to my phone`,
  keywords: 'Jason Pierce, Contact me, direct hire'
};

const ContactPage = () => {
  const {
    0: phoneNumbers,
    1: setPhoneNumbers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: emailAddress,
    1: setEmailAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: address,
    1: setAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: formdata,
    1: setFormdata
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const submitHandler = event => {
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

  const handleChange = event => {
    setFormdata(_objectSpread({}, formdata, {
      [event.currentTarget.name]: event.currentTarget.value
    }));
  };

  const numberFormatter = number => {
    const phnNumber = number;
    return phnNumber;
  };

  const handleAlerts = () => {
    if (error && message) {
      return __jsx("div", {
        className: "alert alert-danger mt-4",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }
      }, message);
    } else if (!error && message) {
      return __jsx("div", {
        className: "alert alert-success mt-4",
        __self: undefined,
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/contactinfo').then(response => {
      setPhoneNumbers(response.data.phoneNumbers);
      setEmailAddress(response.data.emailAddress);
      setAddress(response.data.address);
    });
  }, []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageMetaData: metaData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mi-contact-area mi-section mi-padding-top mi-padding-bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(_components_Sectiontitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Contact Me",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "mi-contact-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, !phoneNumbers ? null : __jsx("div", {
    className: "mi-contact-infoblock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "mi-contact-infoblock-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_PhoneAndroid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "mi-contact-infoblock-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 23
    }
  }, __jsx("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, "Phone"), phoneNumbers.map(phoneNumber => __jsx("p", {
    key: phoneNumber,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: numberFormatter(phoneNumber),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 48
    }
  }, phoneNumber))))), !emailAddress ? null : __jsx("div", {
    className: "mi-contact-infoblock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "mi-contact-infoblock-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "mi-contact-infoblock-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 23
    }
  }, __jsx("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 25
    }
  }, "Email"), emailAddress.map(email => __jsx("p", {
    key: email,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: `mailto:${email}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 42
    }
  }, email))))), !phoneNumbers ? null : __jsx("div", {
    className: "mi-contact-infoblock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "mi-contact-infoblock-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "mi-contact-infoblock-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 23
    }
  }, __jsx("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  }, "Address"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 25
    }
  }, address)))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactPage);

/***/ }),

/***/ "./public/JPtheme.js":
/*!***************************!*\
  !*** ./public/JPtheme.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1920
    }
  }
}));

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/contact.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/nonssd/dev/sponhumanprod/resume-website/pages/contact.js */"./pages/contact.js");


/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/MailOutline":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MailOutline" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MailOutline");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/PhoneAndroid":
/*!**************************************************!*\
  !*** external "@material-ui/icons/PhoneAndroid" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PhoneAndroid");

/***/ }),

/***/ "@material-ui/icons/Room":
/*!******************************************!*\
  !*** external "@material-ui/icons/Room" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Room");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "axios-mock-adapter":
/*!*************************************!*\
  !*** external "axios-mock-adapter" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios-mock-adapter");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=contact.js.map