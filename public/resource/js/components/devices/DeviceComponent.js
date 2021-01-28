(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource/js/components/devices/DeviceComponent"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/DeviceComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/DeviceComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Default_DefaultComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Default/DefaultComponent */ "./resources/js/components/Default/DefaultComponent.vue");
/* harmony import */ var _Tags_TagComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tags/TagComponent */ "./resources/js/components/Tags/TagComponent.vue");
/* harmony import */ var _obecnyDeviceComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_obecnyDeviceComponent */ "./resources/js/components/devices/_obecnyDeviceComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      deviceName: ""
    };
  },
  components: {
    "default-component": _Default_DefaultComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    "tag-component": _Tags_TagComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    "obecnedevice-component": _obecnyDeviceComponent__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {},
  methods: {
    OpenDialogForNewTag: function OpenDialogForNewTag() {}
  },
  watch: {
    $route: function $route(to, from) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      cards: [],
      interfaceId: "",
      polarizaces: [],
      satelits: [],
      dvbs: [],
      sat: "",
      dvb: "",
      freq: "",
      polarizace: "",
      interfaces: "",
      symbolrate: "",
      fec: "",
      lnb: "",
      lnb22k: "",
      ci: "",
      editInterfaceSablonaData: false,
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadDeviceTemplate();
  },
  methods: {
    show: function show(e, interfaceId, dvb, sat, freq, polarizace, symbolrate, fec, lnb, lnb22k, ci) {
      var _this = this;

      this.interfaceId = interfaceId, this.sat = sat;
      this.dvb = dvb;
      this.freq = freq;
      this.polarizace = polarizace;
      this.symbolrate = symbolrate;
      this.fec = fec;
      this.lnb = lnb;
      this.lnb22k = lnb22k;
      this.ci = ci;
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this.showMenu = true;
      });
    },
    loadCards: function loadCards() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("cards").then(function (response) {
                  _this2.cards = response.data;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loadDeviceTemplate: function loadDeviceTemplate() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("device/template", {
                  deviceId: _this3.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this3.interfaces = response.data.inputs[0];
                  } else {
                    _this3.interfaces = null;
                  }
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getSatelits: function getSatelits() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get("satelits").then(function (response) {
                  if (response.data.status === "success") {
                    _this4.satelits = response.data.data;
                  } else {
                    _this4.satelits = null;
                  }
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getDVBS: function getDVBS() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get("dvb").then(function (response) {
                  if (response.data.status === "success") {
                    _this5.dvbs = response.data.data;
                  } else {
                    _this5.dvbs = null;
                  }
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    getPolarizace: function getPolarizace() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.get("polarizace").then(function (response) {
                  _this6.polarizaces = response.data;
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    openEditWindowForInterface: function openEditWindowForInterface() {
      this.getSatelits();
      this.getDVBS();
      this.getPolarizace();
      this.loadCards();
      this.editInterfaceSablonaData = true;
    },
    saveInterface: function saveInterface() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios.post("device/blankom/interface", {
                  deviceId: _this7.$route.params.id,
                  interfaceId: _this7.interfaceId,
                  sat: _this7.sat,
                  dvb: _this7.dvb,
                  freq: _this7.freq,
                  polarizace: _this7.polarizace,
                  symbolrate: _this7.symbolrate,
                  fec: _this7.fec,
                  lnb: _this7.lnb,
                  lnb22k: _this7.lnb22k,
                  ci: _this7.ci
                }).then(function (response) {
                  _this7.$store.state.alerts = response.data;
                  _this7.editInterfaceSablonaData = false;

                  _this7.loadDeviceTemplate();
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    }
  },
  watch: {
    $route: function $route(to, from) {
      this.loadDeviceTemplate();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      cards: [],
      polarizaces: [],
      satelits: [],
      dvbs: [],
      sat: "",
      dvb: "",
      freq: "",
      polarizace: "",
      interfaces: "",
      symbolrate: "",
      fec: "",
      cia: "",
      cib: "",
      editInterfaceSablonaData: false,
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadDeviceTemplate();
  },
  methods: {
    show: function show(e, dvb, sat, freq, polarizace, symbolrate, fec, cia, cib) {
      var _this = this;

      this.sat = sat;
      this.dvb = dvb;
      this.freq = freq;
      this.polarizace = polarizace;
      this.symbolrate = symbolrate;
      this.fec = fec;
      this.cia = cia;
      this.cib = cib;
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this.showMenu = true;
      });
    },
    loadCards: function loadCards() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("cards").then(function (response) {
                  _this2.cards = response.data;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loadDeviceTemplate: function loadDeviceTemplate() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("device/template", {
                  deviceId: _this3.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this3.interfaces = response.data.inputs[0];
                  } else {
                    _this3.interfaces = null;
                  }
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getSatelits: function getSatelits() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get("satelits").then(function (response) {
                  if (response.data.status === "success") {
                    _this4.satelits = response.data.data;
                  } else {
                    _this4.satelits = null;
                  }
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getDVBS: function getDVBS() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get("dvb").then(function (response) {
                  if (response.data.status === "success") {
                    _this5.dvbs = response.data.data;
                  } else {
                    _this5.dvbs = null;
                  }
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    getPolarizace: function getPolarizace() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.get("polarizace").then(function (response) {
                  _this6.polarizaces = response.data;
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    openEditWindowForInterface: function openEditWindowForInterface() {
      this.getSatelits();
      this.getDVBS();
      this.getPolarizace();
      this.loadCards();
      this.editInterfaceSablonaData = true;
    },
    saveInterface: function saveInterface() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios.post("device/fte/interface", {
                  deviceId: _this7.$route.params.id,
                  sat: _this7.sat,
                  dvb: _this7.dvb,
                  freq: _this7.freq,
                  polarizace: _this7.polarizace,
                  interfaces: _this7.interfaces,
                  symbolrate: _this7.symbolrate,
                  fec: _this7.fec,
                  cia: _this7.cia,
                  cib: _this7.cib
                }).then(function (response) {
                  _this7.$store.state.alerts = response.data;
                  _this7.editInterfaceSablonaData = false;

                  _this7.loadDeviceTemplate();
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    }
  },
  watch: {
    $route: function $route(to, from) {
      this.loadDeviceTemplate();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      allInterfaces: [],
      deviceInterfaces: null,
      editDeviceData: false,
      deleteDeviceData: false,
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadInterfaces();
  },
  methods: {
    loadAllInterfaces: function loadAllInterfaces() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("device/allInterfaces").then(function (response) {
                  _this.allInterfaces = response.data;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    show: function show(e) {
      var _this2 = this;

      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this2.showMenu = true;
      });
    },
    loadInterfaces: function loadInterfaces() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("device/currentInterfaces", {
                  deviceId: _this3.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this3.deviceInterfaces = response.data.data;
                  } else {
                    _this3.deviceInterfaces = null;
                  }
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    openEditWindowForDevice: function openEditWindowForDevice() {
      this.editDeviceData = true;
      this.loadAllInterfaces();
    },
    saveDeviceInfo: function saveDeviceInfo() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post("device/interfaces/edit", {
                  deviceId: _this4.$route.params.id,
                  interfaces: _this4.deviceInterfaces
                }).then(function (response) {
                  _this4.$store.state.alerts = response.data.alert;
                  _this4.editDeviceData = false;

                  _this4.loadInterfaces();
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    closeDialog: function closeDialog() {
      this.loadInterfaces();
      this.editDeviceData = false;
      this.deleteDeviceData = false;
    },
    openDeleteDialog: function openDeleteDialog() {
      this.deleteDeviceData = true;
    },
    saveDeleteDeviceInfo: function saveDeleteDeviceInfo() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post("device/interfaces/delete", {
                  deviceId: _this5.$route.params.id
                }).then(function (response) {
                  _this5.$store.state.alerts = response.data.alert;

                  _this5.loadInterfaces();

                  _this5.deleteDeviceData = false;
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  watch: {
    $route: function $route(to, from) {
      this.loadInterfaces();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      polarizaces: [],
      satelits: [],
      dvbs: [],
      sat: "",
      dvb: "",
      freq: "",
      polarizace: "",
      interfaces: "",
      symbolrate: "",
      fec: "",
      asi: "",
      editInterfaceSablonaData: false,
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadDeviceTemplate();
  },
  methods: {
    show: function show(e, dvb, sat, freq, polarizace, symbolrate, fec, asi) {
      var _this = this;

      this.sat = sat;
      this.dvb = dvb;
      this.freq = freq;
      this.polarizace = polarizace;
      this.symbolrate = symbolrate;
      this.fec = fec;
      this.asi = asi;
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this.showMenu = true;
      });
    },
    loadDeviceTemplate: function loadDeviceTemplate() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("device/template", {
                  deviceId: _this2.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this2.interfaces = response.data.inputs[0];
                  } else {
                    _this2.interfaces = null;
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getSatelits: function getSatelits() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("satelits").then(function (response) {
                  if (response.data.status === "success") {
                    _this3.satelits = response.data.data;
                  } else {
                    _this3.satelits = null;
                  }
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getDVBS: function getDVBS() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get("dvb").then(function (response) {
                  if (response.data.status === "success") {
                    _this4.dvbs = response.data.data;
                  } else {
                    _this4.dvbs = null;
                  }
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getPolarizace: function getPolarizace() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get("polarizace").then(function (response) {
                  _this5.polarizaces = response.data;
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    openEditWindowForInterface: function openEditWindowForInterface() {
      this.getSatelits();
      this.getDVBS();
      this.getPolarizace();
      this.editInterfaceSablonaData = true;
    },
    saveInterface: function saveInterface() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.post("device/powerVu/interface", {
                  deviceId: _this6.$route.params.id,
                  sat: _this6.sat,
                  dvb: _this6.dvb,
                  freq: _this6.freq,
                  polarizace: _this6.polarizace,
                  symbolrate: _this6.symbolrate,
                  fec: _this6.fec,
                  asi: _this6.asi
                }).then(function (response) {
                  _this6.$store.state.alerts = response.data;
                  _this6.editInterfaceSablonaData = false;

                  _this6.loadDeviceTemplate();
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  },
  watch: {
    $route: function $route(to, from) {
      this.loadDeviceTemplate();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Transcoder/TranscoderComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/Transcoder/TranscoderComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      gpuStat: "",
      ramUsage: "",
      ramTotal: "",
      ramUsed: "",
      ramPercent: "",
      loadingInterval: null
    };
  },
  mounted: function mounted() {
    this.loadingInterval = setInterval(function () {
      this.loadTranscoderData();
    }.bind(this), 10000);
  },
  created: function created() {
    this.loadTranscoderData();
  },
  methods: {
    loadTranscoderData: function loadTranscoderData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var currentObj;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currentObj = _this;
                _context.next = 3;
                return axios.post("device/transcoderData", {
                  deviceId: _this.$route.params.id
                }).then(function (response) {
                  if (response.data.gpu) {
                    if (typeof response.data.gpu.fb_memory_usage !== "undefined") {
                      currentObj.gpuStat = response.data;

                      if (typeof response.data.gpu.fb_memory_usage !== "undefined") {
                        currentObj.ramUsage = response.data.gpu.fb_memory_usage;
                        currentObj.ramTotal = currentObj.ramUsage.total.replace(" MiB", "");
                        currentObj.ramUsed = currentObj.ramUsage.used.replace(" MiB", "");
                        currentObj.ramPercent = currentObj.ramUsed * 100 / currentObj.ramTotal;
                      }
                    }
                  }
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    destroyEveryThing: function destroyEveryThing() {
      this.gpuStat = "";
      this.ramUsage = "";
      this.ramTotal = "";
      this.ramUsed = "";
      this.ramPercent = "";
      this.loadingInterval = null;
    }
  },
  watch: {
    $route: function $route(to, from) {
      this.loadTranscoderData();
      this.destroyEveryThing();
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.loadingInterval);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_channelsOnDeviceComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/_channelsOnDeviceComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      channels: null,
      search: "",
      headers: [{
        text: "kanál",
        align: "start",
        value: "nazev"
      }]
    };
  },
  created: function created() {
    this.loadChannelsOnDevice();
  },
  methods: {
    loadChannelsOnDevice: function loadChannelsOnDevice() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("device/channels", {
                  deviceId: _this.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this.channels = response.data.data;
                  } else {
                    _this.channels = null;
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  watch: {
    $route: function $route(to, from) {
      this.loadChannelsOnDevice();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_deviceInfoComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/_deviceInfoComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      alerts: [],
      deviceInformations: null,
      editDeviceData: false,
      showMenu: false,
      x: 0,
      y: 0,
      name: name,
      ip: "",
      login_user: "",
      login_password: "",
      category: "",
      vendor: "",
      categories: [],
      vendors: []
    };
  },
  created: function created() {
    this.loadDeviceInformation();
  },
  methods: {
    show: function show(e, name, ip, login_user, login_password, category, vendor) {
      var _this = this;

      this.name = name;
      this.ip = ip;
      this.login_user = login_user;
      this.login_password = login_password;
      this.category = category;
      this.vendor = vendor;
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this.showMenu = true;
      });
    },
    loadDeviceInformation: function loadDeviceInformation() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("device/info_sum", {
                  deviceId: _this2.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this2.deviceInformations = response.data.data;
                  } else {
                    _this2.deviceInformations = null;
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loadCategories: function loadCategories() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("device/categories").then(function (response) {
                  if (response.data.status === "success") {
                    _this3.categories = response.data.data;
                  } else {
                    _this3.categories = null;
                  }
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    loadVendors: function loadVendors() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get("vendors").then(function (response) {
                  if (response.data.status === "success") {
                    _this4.vendors = response.data.data;
                  } else {
                    _this4.vendors = null;
                  }
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    openEditWindowForDevice: function openEditWindowForDevice() {
      this.loadCategories();
      this.loadVendors();
      this.editDeviceData = true;
    },
    saveDeviceInfo: function saveDeviceInfo() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post("device/edit", {
                  deviceId: _this5.$route.params.id,
                  name: _this5.name,
                  ip: _this5.ip,
                  login_user: _this5.login_user,
                  login_password: _this5.login_password,
                  category: _this5.category,
                  vendor: _this5.vendor
                }).then(function (response) {
                  _this5.$store.state.alerts = response.data;
                  _this5.editDeviceData = false;

                  _this5.loadDeviceInformation();

                  _this5.name = "";
                  _this5.ip = "";
                  _this5.login_user = "";
                  _this5.login_password = "";
                  _this5.category = "";
                  _this5.vendor = "";
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  watch: {
    $route: function $route(to, from) {
      this.loadDeviceInformation();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_deviceTemplateComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/_deviceTemplateComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dataTest: "",
      editInterfaceSablonaData: false,
      currentSablona: null,
      template: null,
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadDeviceTemplate();
  },
  methods: {
    show: function show(e, currentSablona) {
      var _this = this;

      this.currentSablona = currentSablona;
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this.showMenu = true;
      });
    },
    loadDeviceTemplate: function loadDeviceTemplate() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("device/template", {
                  deviceId: _this2.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this2.template = response.data.data.template;
                  } else {
                    _this2.template = null;
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    openEditWindowForInterface: function openEditWindowForInterface() {
      this.editInterfaceSablonaData = true;
    },
    saveInterface: function saveInterface(item) {
      console.log(item);
    }
  },
  watch: {
    $route: function $route(to, from) {
      this.loadDeviceTemplate();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_obecnyDeviceComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/_obecnyDeviceComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Interfaces_blankomInterfacesComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Interfaces/_blankomInterfacesComponent */ "./resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue");
/* harmony import */ var _Interfaces_fteInterfacesComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Interfaces/_fteInterfacesComponent */ "./resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue");
/* harmony import */ var _Interfaces_powerVuInterfacesComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Interfaces/_powerVuInterfacesComponent */ "./resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue");
/* harmony import */ var _Interfaces_interfacesforChannelsComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Interfaces/_interfacesforChannelsComponent */ "./resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue");
/* harmony import */ var _deviceInfoComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_deviceInfoComponent */ "./resources/js/components/devices/_deviceInfoComponent.vue");
/* harmony import */ var _deviceTemplateComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_deviceTemplateComponent */ "./resources/js/components/devices/_deviceTemplateComponent.vue");
/* harmony import */ var _channelsOnDeviceComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_channelsOnDeviceComponent */ "./resources/js/components/devices/_channelsOnDeviceComponent.vue");
/* harmony import */ var _Transcoder_TranscoderComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Transcoder/TranscoderComponent */ "./resources/js/components/devices/Transcoder/TranscoderComponent.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      deviceName: "",
      deviceInformations: "",
      deviceVendor: ""
    };
  },
  components: {
    "deviceinformation-component": _deviceInfoComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    "devicetemplate-component": _deviceTemplateComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
    "channelsondevice-component": _channelsOnDeviceComponent__WEBPACK_IMPORTED_MODULE_7__["default"],
    "blankominputs-component": _Interfaces_blankomInterfacesComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    "fteinputs-component": _Interfaces_fteInterfacesComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    "powervu-component": _Interfaces_powerVuInterfacesComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    "interfaces-component": _Interfaces_interfacesforChannelsComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    "transcoder-compoennt": _Transcoder_TranscoderComponent__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  created: function created() {
    this.loadDeviceNameById();
    this.loadDeviceVendor();
  },
  methods: {
    loadDeviceNameById: function loadDeviceNameById() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("device/name", {
                  deviceId: _this.$route.params.id
                }).then(function (response) {
                  _this.deviceName = response.data;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loadDeviceVendor: function loadDeviceVendor() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("device/vendor", {
                  deviceId: _this2.$route.params.id
                }).then(function (response) {
                  _this2.deviceVendor = response.data;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  watch: {
    $route: function $route(to, from) {
      this.loadDeviceNameById();
      this.loadDeviceVendor();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/DeviceComponent.vue?vue&type=template&id=8b70aa0c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/DeviceComponent.vue?vue&type=template&id=8b70aa0c& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-main", [
    !this.$route.params.id
      ? _c("div", { staticClass: "ml-12" }, [_c("default-component")], 1)
      : _c(
          "div",
          [
            _c(
              "v-container",
              { staticClass: "ml-16" },
              [
                _c("tag-component"),
                _vm._v(" "),
                _c(
                  "v-card",
                  { staticClass: "ml-16", attrs: { flat: "" } },
                  [
                    _c(
                      "v-container",
                      { staticClass: "ml-16 mt-6" },
                      [_c("obecnedevice-component")],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue?vue&type=template&id=00456090&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue?vue&type=template&id=00456090& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-main", [
    _vm.interfaces != null
      ? _c(
          "div",
          [
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  [
                    _c(
                      "v-card",
                      {
                        attrs: { flat: "", color: "#F5F5F7", width: "350" },
                        on: {
                          contextmenu: function($event) {
                            return _vm.show(
                              $event,
                              1,
                              _vm.interfaces.rf1_dvb,
                              _vm.interfaces.rf1_sat,
                              _vm.interfaces.rf1_freq,
                              _vm.interfaces.rf1_pol,
                              _vm.interfaces.rf1_symbolRate,
                              _vm.interfaces.rf1_fec,
                              _vm.interfaces.rf1_lnb,
                              _vm.interfaces.rf1_lnb22k,
                              _vm.interfaces.CI1
                            )
                          }
                        }
                      },
                      [
                        _c("v-card-subtitle", [
                          _c("strong", [
                            _vm._v(
                              "\n                            RF 1\n                        "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          { staticClass: "subtitle-1" },
                          [
                            _c(
                              "v-container",
                              [
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [
                                            _vm._v(
                                              "\n                                            DVB:\n                                        "
                                            )
                                          ]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf1_dvb)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [
                                            _vm._v(
                                              "\n                                            Satelit:\n                                        "
                                            )
                                          ]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf1_sat)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [
                                            _vm._v(
                                              "\n                                            Frekvence:\n                                        "
                                            )
                                          ]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf1_freq)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("Polarizace:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf1_pol)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [
                                            _vm._v("Symbol rate:")
                                          ]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.interfaces.rf1_symbolRate
                                              )
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("FEC:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf1_fec)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("LNB:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf1_lnb)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("LNB22k:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf1_lnb22k)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("CI:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.CI1)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  [
                    _c(
                      "v-card",
                      {
                        attrs: { flat: "", color: "#F5F5F7", width: "350" },
                        on: {
                          contextmenu: function($event) {
                            return _vm.show(
                              $event,
                              2,
                              _vm.interfaces.rf2_dvb,
                              _vm.interfaces.rf2_sat,
                              _vm.interfaces.rf2_freq,
                              _vm.interfaces.rf2_pol,
                              _vm.interfaces.rf2_symbolRate,
                              _vm.interfaces.rf2_fec,
                              _vm.interfaces.rf2_lnb,
                              _vm.interfaces.rf2_lnb22k,
                              _vm.interfaces.CI2
                            )
                          }
                        }
                      },
                      [
                        _c("v-card-subtitle", [
                          _c("strong", [
                            _vm._v(
                              "\n                            RF 2\n                        "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "v-container",
                              [
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("DVB:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf2_dvb)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("Satelit:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf2_sat)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("Frekvence:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf2_freq)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("Polarizace:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf2_pol)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [
                                            _vm._v("Symbol rate:")
                                          ]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.interfaces.rf2_symbolRate
                                              )
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("FEC:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf2_fec)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("LNB:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf2_lnb)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("LNB22k:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf2_lnb22k)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("CI:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.CI2)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  [
                    _c(
                      "v-card",
                      {
                        attrs: { flat: "", color: "#F5F5F7", width: "350" },
                        on: {
                          contextmenu: function($event) {
                            return _vm.show(
                              $event,
                              3,
                              _vm.interfaces.rf3_dvb,
                              _vm.interfaces.rf3_sat,
                              _vm.interfaces.rf3_freq,
                              _vm.interfaces.rf3_pol,
                              _vm.interfaces.rf3_symbolRate,
                              _vm.interfaces.rf3_fec,
                              _vm.interfaces.rf3_lnb,
                              _vm.interfaces.rf3_lnb22k,
                              _vm.interfaces.CI3
                            )
                          }
                        }
                      },
                      [
                        _c("v-card-subtitle", [
                          _c("strong", [
                            _vm._v(
                              "\n                            RF 3\n                        "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "v-container",
                              [
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("DVB:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf3_dvb)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("Satelit:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf3_sat)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("Frekvence:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf3_freq)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("Polarizace:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf3_pol)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [
                                            _vm._v("Symbol rate:")
                                          ]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.interfaces.rf3_symbolRate
                                              )
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("FEC:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf3_fec)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("LNB:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf3_lnb)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("LNB22k:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf3_lnb22k)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("CI:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.CI3)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  [
                    _c(
                      "v-card",
                      {
                        attrs: { flat: "", color: "#F5F5F7", width: "350" },
                        on: {
                          contextmenu: function($event) {
                            return _vm.show(
                              $event,
                              4,
                              _vm.interfaces.rf4_dvb,
                              _vm.interfaces.rf4_sat,
                              _vm.interfaces.rf4_freq,
                              _vm.interfaces.rf4_pol,
                              _vm.interfaces.rf4_symbolRate,
                              _vm.interfaces.rf4_fec,
                              _vm.interfaces.rf4_lnb,
                              _vm.interfaces.rf4_lnb22k,
                              _vm.interfaces.CI4
                            )
                          }
                        }
                      },
                      [
                        _c("v-card-subtitle", [
                          _c("strong", [
                            _vm._v(
                              "\n                            RF 4\n                        "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "v-container",
                              [
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("DVB:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf4_dvb)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("Satelit:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf4_sat)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("Frekvence:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf4_freq)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("Polarizace:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf4_pol)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [
                                            _vm._v("Symbol rate:")
                                          ]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.interfaces.rf4_symbolRate
                                              )
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("FEC:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf4_fec)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("LNB:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf4_lnb)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("LNB22k:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.rf4_lnb22k)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  { attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _c("strong", [_vm._v("CI:")]),
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(_vm.interfaces.CI4)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-menu",
              {
                attrs: {
                  dense: "",
                  "position-x": _vm.x,
                  "position-y": _vm.y,
                  absolute: "",
                  "offset-y": ""
                },
                model: {
                  value: _vm.showMenu,
                  callback: function($$v) {
                    _vm.showMenu = $$v
                  },
                  expression: "showMenu"
                }
              },
              [
                _c(
                  "v-list",
                  { attrs: { dense: "" } },
                  [
                    _c(
                      "v-list-item",
                      {
                        on: {
                          click: function($event) {
                            return _vm.openEditWindowForInterface()
                          }
                        }
                      },
                      [
                        _c(
                          "v-list-item-icon",
                          [
                            _c("v-icon", { attrs: { "x-small": "" } }, [
                              _vm._v("mdi-pencil")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-list-item-title", [
                          _vm._v(
                            "\n                        Upravit\n                    "
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            [
              _c(
                "v-row",
                { attrs: { justify: "center" } },
                [
                  _c(
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "800" },
                      model: {
                        value: _vm.editInterfaceSablonaData,
                        callback: function($$v) {
                          _vm.editInterfaceSablonaData = $$v
                        },
                        expression: "editInterfaceSablonaData"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", [
                            _c("span", { staticClass: "headline" }, [
                              _vm._v("Editace RF" + _vm._s(_vm.interfaceId))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c("v-container", { attrs: { fluid: "" } }, [
                                _c(
                                  "span",
                                  { staticClass: "ml-6" },
                                  [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-combobox", {
                                          attrs: {
                                            dense: "",
                                            label: "DVB",
                                            items: _vm.dvbs,
                                            "item-text": "dvb",
                                            "item-value": "dvb",
                                            required: "",
                                            clearable: ""
                                          },
                                          model: {
                                            value: _vm.dvb,
                                            callback: function($$v) {
                                              _vm.dvb = $$v
                                            },
                                            expression: "dvb"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-combobox", {
                                          attrs: {
                                            dense: "",
                                            label: "Satelit",
                                            items: _vm.satelits,
                                            "item-text": "satelit",
                                            "item-value": "satelit",
                                            required: "",
                                            clearable: ""
                                          },
                                          model: {
                                            value: _vm.sat,
                                            callback: function($$v) {
                                              _vm.sat = $$v
                                            },
                                            expression: "sat"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            dense: "",
                                            label: "Frekvence v MHz",
                                            type: "number",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.freq,
                                            callback: function($$v) {
                                              _vm.freq = $$v
                                            },
                                            expression: "freq"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-combobox", {
                                          attrs: {
                                            dense: "",
                                            label: "Polarizace",
                                            items: _vm.polarizaces,
                                            "item-text": "polarizace",
                                            "item-value": "polarizace",
                                            required: "",
                                            clearable: ""
                                          },
                                          model: {
                                            value: _vm.polarizace,
                                            callback: function($$v) {
                                              _vm.polarizace = $$v
                                            },
                                            expression: "polarizace"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            dense: "",
                                            label: "Symbol rate",
                                            type: "number",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.symbolrate,
                                            callback: function($$v) {
                                              _vm.symbolrate = $$v
                                            },
                                            expression: "symbolrate"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            dense: "",
                                            label: "FEC",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.fec,
                                            callback: function($$v) {
                                              _vm.fec = $$v
                                            },
                                            expression: "fec"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            dense: "",
                                            label: "LNB",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.lnb,
                                            callback: function($$v) {
                                              _vm.lnb = $$v
                                            },
                                            expression: "lnb"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            dense: "",
                                            label: "LNB 22k",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.lnb22k,
                                            callback: function($$v) {
                                              _vm.lnb22k = $$v
                                            },
                                            expression: "lnb22k"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-combobox", {
                                          attrs: {
                                            dense: "",
                                            label: "CI",
                                            items: _vm.cards,
                                            "item-text": "card_number",
                                            "item-value": "card_number",
                                            required: "",
                                            clearable: ""
                                          },
                                          model: {
                                            value: _vm.ci,
                                            callback: function($$v) {
                                              _vm.ci = $$v
                                            },
                                            expression: "ci"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "blue darken-1", text: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.editInterfaceSablonaData = false
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Zavřít\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "green darken-1", text: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.saveInterface()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Uložit\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]
          ],
          2
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue?vue&type=template&id=4af0b273&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue?vue&type=template&id=4af0b273& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-main", [
    _vm.interfaces != null
      ? _c(
          "div",
          { staticClass: "mr-10" },
          [
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  [
                    _c(
                      "v-card",
                      {
                        attrs: { flat: "", color: "#F5F5F7" },
                        on: {
                          contextmenu: function($event) {
                            return _vm.show(
                              $event,
                              _vm.interfaces.dvb,
                              _vm.interfaces.sat,
                              _vm.interfaces.freq,
                              _vm.interfaces.polarizace,
                              _vm.interfaces.symbolRate,
                              _vm.interfaces.fec,
                              _vm.interfaces.CIA,
                              _vm.interfaces.CIB
                            )
                          }
                        }
                      },
                      [
                        _c("v-card-subtitle", [
                          _c("strong", [
                            _vm._v(
                              "\n                            Nastavení satelitu\n                        "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "v-container",
                              [
                                _c("v-row", [
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c("strong", [_vm._v("DVB: ")]),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.interfaces.dvb) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c("strong", [_vm._v("Satelit: ")]),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.interfaces.sat) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c("strong", [_vm._v("Frekvence: ")]),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.interfaces.freq) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c("strong", [_vm._v("Polarizace: ")]),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.interfaces.polarizace) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c("strong", [_vm._v("Symbol rate: ")]),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.interfaces.symbolRate) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c("strong", [_vm._v("FEC: ")]),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.interfaces.fec) +
                                        "\n                                "
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("v-row", { staticClass: "mt-6" }, [
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c("strong", [_vm._v("CI A: ")]),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.interfaces.CIA) +
                                        "\n                                "
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("v-row", { staticClass: "mt-6" }, [
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c("strong", [_vm._v("CI B: ")]),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.interfaces.CIB) +
                                        "\n                                "
                                    )
                                  ])
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-menu",
              {
                attrs: {
                  dense: "",
                  "position-x": _vm.x,
                  "position-y": _vm.y,
                  absolute: "",
                  "offset-y": ""
                },
                model: {
                  value: _vm.showMenu,
                  callback: function($$v) {
                    _vm.showMenu = $$v
                  },
                  expression: "showMenu"
                }
              },
              [
                _c(
                  "v-list",
                  { attrs: { dense: "" } },
                  [
                    _c(
                      "v-list-item",
                      {
                        on: {
                          click: function($event) {
                            return _vm.openEditWindowForInterface()
                          }
                        }
                      },
                      [
                        _c(
                          "v-list-item-icon",
                          [
                            _c("v-icon", { attrs: { "x-small": "" } }, [
                              _vm._v("mdi-pencil")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-list-item-title", [
                          _vm._v(
                            "\n                        Upravit\n                    "
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            [
              _c(
                "v-row",
                { attrs: { justify: "center" } },
                [
                  _c(
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "800" },
                      model: {
                        value: _vm.editInterfaceSablonaData,
                        callback: function($$v) {
                          _vm.editInterfaceSablonaData = $$v
                        },
                        expression: "editInterfaceSablonaData"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", [
                            _c("span", { staticClass: "headline" }, [
                              _vm._v("Editace ")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c("v-container", { attrs: { fluid: "" } }, [
                                _c(
                                  "span",
                                  { staticClass: "ml-6" },
                                  [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-combobox", {
                                          attrs: {
                                            dense: "",
                                            label: "DVB",
                                            items: _vm.dvbs,
                                            "item-text": "dvb",
                                            "item-value": "dvb",
                                            required: "",
                                            clearable: ""
                                          },
                                          model: {
                                            value: _vm.dvb,
                                            callback: function($$v) {
                                              _vm.dvb = $$v
                                            },
                                            expression: "dvb"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-combobox", {
                                          attrs: {
                                            dense: "",
                                            label: "Satelit",
                                            items: _vm.satelits,
                                            "item-text": "satelit",
                                            "item-value": "satelit",
                                            required: "",
                                            clearable: ""
                                          },
                                          model: {
                                            value: _vm.sat,
                                            callback: function($$v) {
                                              _vm.sat = $$v
                                            },
                                            expression: "sat"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            dense: "",
                                            label: "Frekvence v MHz",
                                            type: "number",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.freq,
                                            callback: function($$v) {
                                              _vm.freq = $$v
                                            },
                                            expression: "freq"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-combobox", {
                                          attrs: {
                                            dense: "",
                                            label: "Polarizace",
                                            items: _vm.polarizaces,
                                            "item-text": "polarizace",
                                            "item-value": "polarizace",
                                            required: "",
                                            clearable: ""
                                          },
                                          model: {
                                            value: _vm.polarizace,
                                            callback: function($$v) {
                                              _vm.polarizace = $$v
                                            },
                                            expression: "polarizace"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            dense: "",
                                            label: "Symbol rate",
                                            type: "number",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.symbolrate,
                                            callback: function($$v) {
                                              _vm.symbolrate = $$v
                                            },
                                            expression: "symbolrate"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            dense: "",
                                            label: "FEC",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.fec,
                                            callback: function($$v) {
                                              _vm.fec = $$v
                                            },
                                            expression: "fec"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-combobox", {
                                          attrs: {
                                            dense: "",
                                            label: "CIA",
                                            items: _vm.cards,
                                            "item-text": "card_number",
                                            "item-value": "card_number",
                                            required: "",
                                            clearable: ""
                                          },
                                          model: {
                                            value: _vm.cia,
                                            callback: function($$v) {
                                              _vm.cia = $$v
                                            },
                                            expression: "cia"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-combobox", {
                                          attrs: {
                                            dense: "",
                                            label: "CIB",
                                            items: _vm.cards,
                                            "item-text": "card_number",
                                            "item-value": "card_number",
                                            required: "",
                                            clearable: ""
                                          },
                                          model: {
                                            value: _vm.cib,
                                            callback: function($$v) {
                                              _vm.cib = $$v
                                            },
                                            expression: "cib"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "blue darken-1", text: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.editInterfaceSablonaData = false
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Zavřít\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "green darken-1", text: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.saveInterface()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Uložit\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]
          ],
          2
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue?vue&type=template&id=48bdd825&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue?vue&type=template&id=48bdd825& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-main",
    [
      _vm.deviceInterfaces != null
        ? _c(
            "v-card",
            {
              staticClass: "mr-10",
              attrs: { flat: "", color: "#F5F5F7" },
              on: {
                contextmenu: function($event) {
                  return _vm.show($event)
                }
              }
            },
            [
              _c("v-card-subtitle", [
                _c("strong", [
                  _vm._v(
                    "\n                Porty na které je možné připárovat kanál\n            "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "ml-12 text--center" },
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        _vm._l(_vm.deviceInterfaces, function(deviceInterface) {
                          return _c(
                            "span",
                            { key: deviceInterface.key, staticClass: "ml-6" },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(deviceInterface.interface) +
                                  "\n                    "
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-menu",
        {
          attrs: {
            dense: "",
            "position-x": _vm.x,
            "position-y": _vm.y,
            absolute: "",
            "offset-y": ""
          },
          model: {
            value: _vm.showMenu,
            callback: function($$v) {
              _vm.showMenu = $$v
            },
            expression: "showMenu"
          }
        },
        [
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _c(
                "v-list-item",
                {
                  on: {
                    click: function($event) {
                      return _vm.openEditWindowForDevice()
                    }
                  }
                },
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", { attrs: { "x-small": "" } }, [
                        _vm._v("mdi-pencil")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", [
                    _vm._v("\n                    Upravit\n                ")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                {
                  on: {
                    click: function($event) {
                      return _vm.openDeleteDialog()
                    }
                  }
                },
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", { attrs: { "x-small": "" } }, [
                        _vm._v("mdi-delete")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", [
                    _vm._v("\n                    Odebrat\n                ")
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "800" },
              model: {
                value: _vm.editDeviceData,
                callback: function($$v) {
                  _vm.editDeviceData = $$v
                },
                expression: "editDeviceData"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Editace Interfaců ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-container", { attrs: { fluid: "" } }, [
                        _c(
                          "span",
                          { staticClass: "ml-6" },
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "12" } },
                              [
                                _c("v-combobox", {
                                  attrs: {
                                    items: _vm.allInterfaces,
                                    "item-text": "interface",
                                    "item-value": "id",
                                    label:
                                      "Vyberte interface / interfacy na které se následně bude párovat kanál",
                                    hint:
                                      "Vyberte interface / interfacy na které se následně bude párovat kanál",
                                    clearable: "",
                                    multiple: ""
                                  },
                                  model: {
                                    value: _vm.deviceInterfaces,
                                    callback: function($$v) {
                                      _vm.deviceInterfaces = $$v
                                    },
                                    expression: "deviceInterfaces"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.closeDialog()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Zavřít\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.saveDeviceInfo()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Uložit\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "800" },
              model: {
                value: _vm.deleteDeviceData,
                callback: function($$v) {
                  _vm.deleteDeviceData = $$v
                },
                expression: "deleteDeviceData"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Odebrání Interfaců ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-container", { attrs: { fluid: "" } }, [
                        _c(
                          "span",
                          { staticClass: "ml-6" },
                          [
                            _c("v-col", { attrs: { cols: "12" } }, [
                              _c("h3", [
                                _vm._v(
                                  "\n                                    Vážně si přejete odebrat všechny porty\n                                    ze zařízení?\n                                "
                                )
                              ])
                            ])
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.closeDialog()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Zavřít\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.saveDeleteDeviceInfo()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Uložit\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue?vue&type=template&id=37a1a306&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue?vue&type=template&id=37a1a306& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-main", [
    _vm.interfaces != null
      ? _c(
          "div",
          { staticClass: "mr-10" },
          [
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  [
                    _c(
                      "v-card",
                      {
                        attrs: { flat: "", color: "#F5F5F7" },
                        on: {
                          contextmenu: function($event) {
                            return _vm.show(
                              $event,
                              _vm.interfaces.dvb,
                              _vm.interfaces.sat,
                              _vm.interfaces.freq,
                              _vm.interfaces.pol,
                              _vm.interfaces.symbolRate,
                              _vm.interfaces.fec,
                              _vm.interfaces.ASI
                            )
                          }
                        }
                      },
                      [
                        _c("v-card-subtitle", [
                          _c("strong", [
                            _vm._v(
                              "\n                            Nastavení satelitu\n                        "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "v-container",
                              [
                                _c("v-row", [
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c("strong", [_vm._v("DVB: ")]),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.interfaces.dvb) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c("strong", [_vm._v("Satelit: ")]),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.interfaces.sat) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c("strong", [_vm._v("Frekvence: ")]),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.interfaces.freq) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c("strong", [_vm._v("Polarizace: ")]),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.interfaces.pol) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c("strong", [_vm._v("Symbol rate: ")]),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.interfaces.symbolRate) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c("strong", [_vm._v("FEC: ")]),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.interfaces.fec) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c("strong", [_vm._v("ASI: ")]),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.interfaces.ASI) +
                                        "\n                                "
                                    )
                                  ])
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-menu",
              {
                attrs: {
                  dense: "",
                  "position-x": _vm.x,
                  "position-y": _vm.y,
                  absolute: "",
                  "offset-y": ""
                },
                model: {
                  value: _vm.showMenu,
                  callback: function($$v) {
                    _vm.showMenu = $$v
                  },
                  expression: "showMenu"
                }
              },
              [
                _c(
                  "v-list",
                  { attrs: { dense: "" } },
                  [
                    _c(
                      "v-list-item",
                      {
                        on: {
                          click: function($event) {
                            return _vm.openEditWindowForInterface()
                          }
                        }
                      },
                      [
                        _c(
                          "v-list-item-icon",
                          [
                            _c("v-icon", { attrs: { "x-small": "" } }, [
                              _vm._v("mdi-pencil")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-list-item-title", [
                          _vm._v(
                            "\n                        Upravit\n                    "
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            [
              _c(
                "v-row",
                { attrs: { justify: "center" } },
                [
                  _c(
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "800" },
                      model: {
                        value: _vm.editInterfaceSablonaData,
                        callback: function($$v) {
                          _vm.editInterfaceSablonaData = $$v
                        },
                        expression: "editInterfaceSablonaData"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", [
                            _c("span", { staticClass: "headline" }, [
                              _vm._v("Editace ")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c("v-container", { attrs: { fluid: "" } }, [
                                _c(
                                  "span",
                                  { staticClass: "ml-6" },
                                  [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-combobox", {
                                          attrs: {
                                            dense: "",
                                            label: "DVB",
                                            items: _vm.dvbs,
                                            "item-text": "dvb",
                                            "item-value": "dvb",
                                            required: "",
                                            clearable: ""
                                          },
                                          model: {
                                            value: _vm.dvb,
                                            callback: function($$v) {
                                              _vm.dvb = $$v
                                            },
                                            expression: "dvb"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-combobox", {
                                          attrs: {
                                            dense: "",
                                            label: "Satelit",
                                            items: _vm.satelits,
                                            "item-text": "satelit",
                                            "item-value": "satelit",
                                            clearable: "",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.sat,
                                            callback: function($$v) {
                                              _vm.sat = $$v
                                            },
                                            expression: "sat"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            dense: "",
                                            label: "Frekvence v MHz",
                                            type: "number",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.freq,
                                            callback: function($$v) {
                                              _vm.freq = $$v
                                            },
                                            expression: "freq"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-combobox", {
                                          attrs: {
                                            dense: "",
                                            label: "Polarizace",
                                            items: _vm.polarizaces,
                                            "item-text": "polarizace",
                                            "item-value": "polarizace",
                                            required: "",
                                            clearable: ""
                                          },
                                          model: {
                                            value: _vm.polarizace,
                                            callback: function($$v) {
                                              _vm.polarizace = $$v
                                            },
                                            expression: "polarizace"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            dense: "",
                                            label: "Symbol rate",
                                            type: "number",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.symbolrate,
                                            callback: function($$v) {
                                              _vm.symbolrate = $$v
                                            },
                                            expression: "symbolrate"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            dense: "",
                                            label: "FEC",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.fec,
                                            callback: function($$v) {
                                              _vm.fec = $$v
                                            },
                                            expression: "fec"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            dense: "",
                                            label: "ASI",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.asi,
                                            callback: function($$v) {
                                              _vm.asi = $$v
                                            },
                                            expression: "asi"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "blue darken-1", text: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.editInterfaceSablonaData = false
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Zavřít\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "green darken-1", text: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.saveInterface()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Uložit\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]
          ],
          2
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Transcoder/TranscoderComponent.vue?vue&type=template&id=9f644c2a&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/Transcoder/TranscoderComponent.vue?vue&type=template&id=9f644c2a& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-container",
        [
          _c(
            "v-row",
            { staticClass: "justify-center body-2" },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-row", [
                _vm.ramPercent < "75"
                  ? _c(
                      "div",
                      [
                        _c(
                          "v-progress-circular",
                          {
                            staticClass: "mt-2",
                            attrs: {
                              size: 150,
                              width: 4,
                              value: _vm.ramPercent,
                              color: "green"
                            }
                          },
                          [
                            _c(
                              "small",
                              [
                                _c("strong", [
                                  _vm._v(
                                    "\n                                Celkem RAM " +
                                      _vm._s(_vm.ramUsage.total) +
                                      "\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("v-divider"),
                                _vm._v(" "),
                                _c("strong", [
                                  _vm._v(
                                    " Volná RAM " +
                                      _vm._s(_vm.ramUsage.free) +
                                      " "
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.ramPercent >= "75" && _vm.ramPercent < "88"
                  ? _c(
                      "div",
                      [
                        _c(
                          "v-progress-circular",
                          {
                            staticClass: "mt-2",
                            attrs: {
                              size: 150,
                              width: 4,
                              value: _vm.ramPercent,
                              color: "orange"
                            }
                          },
                          [
                            _c(
                              "small",
                              [
                                _c("strong", [
                                  _vm._v(
                                    "\n                                Celkem RAM " +
                                      _vm._s(_vm.ramUsage.total) +
                                      "\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("v-divider"),
                                _vm._v(" "),
                                _c("strong", [
                                  _vm._v(
                                    " Volná RAM " +
                                      _vm._s(_vm.ramUsage.free) +
                                      " "
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.ramPercent >= "88"
                  ? _c(
                      "div",
                      [
                        _c(
                          "v-progress-circular",
                          {
                            staticClass: "mt-2",
                            attrs: {
                              size: 150,
                              width: 4,
                              value: _vm.ramPercent,
                              color: "red"
                            }
                          },
                          [
                            _c(
                              "small",
                              [
                                _c("strong", [
                                  _vm._v(
                                    "\n                                Celkem RAM " +
                                      _vm._s(_vm.ramUsage.total) +
                                      "\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("v-divider"),
                                _vm._v(" "),
                                _c("strong", [
                                  _vm._v(
                                    " Volná RAM " +
                                      _vm._s(_vm.ramUsage.free) +
                                      " "
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _vm._l(_vm.gpuStat.gpu, function(encoder) {
                return _c(
                  "v-row",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: encoder.encoder_util,
                        expression: "encoder.encoder_util"
                      }
                    ],
                    key: encoder.id
                  },
                  [
                    encoder.encoder_util <= "75 %"
                      ? _c(
                          "div",
                          [
                            _c(
                              "v-progress-circular",
                              {
                                staticClass: "mt-2 ",
                                attrs: {
                                  size: 150,
                                  width: 4,
                                  value: encoder.encoder_util,
                                  color: "green"
                                }
                              },
                              [
                                _c("strong", [
                                  _vm._v(
                                    "\n                            Encoder\n                            " +
                                      _vm._s(encoder.encoder_util) +
                                      "\n                        "
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    encoder.encoder_util > "75 %" &&
                    encoder.encoder_util < "88 %"
                      ? _c(
                          "div",
                          [
                            _c(
                              "v-progress-circular",
                              {
                                staticClass: "mt-2 ",
                                attrs: {
                                  size: 150,
                                  width: 4,
                                  value: encoder.encoder_util,
                                  color: "orange"
                                }
                              },
                              [
                                _c("strong", [
                                  _vm._v(
                                    "\n                            Encoder\n                            " +
                                      _vm._s(encoder.encoder_util) +
                                      "\n                        "
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    encoder.encoder_util >= "88 %"
                      ? _c(
                          "div",
                          [
                            _c(
                              "v-progress-circular",
                              {
                                staticClass: "mt-2",
                                attrs: {
                                  size: 150,
                                  width: 4,
                                  value: encoder.encoder_util,
                                  color: "red"
                                }
                              },
                              [
                                _c("strong", [
                                  _vm._v(
                                    "\n                            Encoder\n                            " +
                                      _vm._s(encoder.encoder_util) +
                                      "\n                        "
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                )
              }),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _vm._l(_vm.gpuStat.gpu, function(decoder) {
                return _c(
                  "v-row",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: decoder.decoder_util,
                        expression: "decoder.decoder_util"
                      }
                    ],
                    key: decoder.id
                  },
                  [
                    decoder.decoder_util <= "75 %"
                      ? _c(
                          "div",
                          [
                            _c(
                              "v-progress-circular",
                              {
                                staticClass: "mt-2",
                                attrs: {
                                  size: 150,
                                  width: 4,
                                  value: decoder.decoder_util,
                                  color: "green"
                                }
                              },
                              [
                                _c("strong", [
                                  _vm._v(
                                    "\n                            Decoder\n                            " +
                                      _vm._s(decoder.decoder_util) +
                                      "\n                        "
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    decoder.decoder_util > "75 %" &&
                    decoder.decoder_util < "88 %"
                      ? _c(
                          "div",
                          [
                            _c(
                              "v-progress-circular",
                              {
                                staticClass: "mt-2",
                                attrs: {
                                  size: 150,
                                  width: 4,
                                  value: decoder.decoder_util,
                                  color: "orange"
                                }
                              },
                              [
                                _c("strong", [
                                  _vm._v(
                                    "\n                            Decoder\n                            " +
                                      _vm._s(decoder.decoder_util) +
                                      "\n                        "
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    decoder.decoder_util >= "88 %"
                      ? _c(
                          "div",
                          [
                            _c(
                              "v-progress-circular",
                              {
                                staticClass: "mt-2",
                                attrs: {
                                  size: 150,
                                  width: 4,
                                  value: decoder.decoder_util,
                                  color: "red"
                                }
                              },
                              [
                                _c("strong", [
                                  _vm._v(
                                    "\n                            Decoder\n                            " +
                                      _vm._s(decoder.decoder_util) +
                                      "\n                        "
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                )
              }),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _vm._l(_vm.gpuStat.gpu, function(gpu) {
                return _c(
                  "v-row",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: gpu.gpu_util,
                        expression: "gpu.gpu_util"
                      }
                    ],
                    key: gpu.id
                  },
                  [
                    gpu.gpu_util <= "75 %"
                      ? _c(
                          "div",
                          [
                            _c(
                              "v-progress-circular",
                              {
                                staticClass: "mt-2",
                                attrs: {
                                  size: 150,
                                  width: 4,
                                  value: gpu.gpu_util,
                                  color: "green"
                                }
                              },
                              [
                                _c("strong", [
                                  _vm._v(" GPU " + _vm._s(gpu.gpu_util) + " ")
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    gpu.gpu_util > "75 %" && gpu.gpu_util < "88 %"
                      ? _c(
                          "div",
                          [
                            _c(
                              "v-progress-circular",
                              {
                                staticClass: "mt-2",
                                attrs: {
                                  size: 150,
                                  width: 4,
                                  value: gpu.gpu_util,
                                  color: "orange"
                                }
                              },
                              [
                                _c("strong", [
                                  _vm._v(
                                    "\n                            GPU " +
                                      _vm._s(gpu.gpu_util) +
                                      "\n                        "
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    gpu.gpu_util >= "88 %"
                      ? _c(
                          "div",
                          [
                            _c(
                              "v-progress-circular",
                              {
                                staticClass: "mt-2",
                                attrs: {
                                  size: 150,
                                  width: 4,
                                  value: gpu.gpu_util,
                                  color: "red"
                                }
                              },
                              [
                                _c("strong", [
                                  _vm._v(
                                    "\n                            GPU " +
                                      _vm._s(gpu.gpu_util) +
                                      "\n                        "
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                )
              }),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _vm._l(_vm.gpuStat.gpu, function(gpuTemp) {
                return _c(
                  "v-row",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: gpuTemp.gpu_temp,
                        expression: "gpuTemp.gpu_temp"
                      }
                    ],
                    key: gpuTemp.id
                  },
                  [
                    gpuTemp.gpu_temp <= "70 C"
                      ? _c(
                          "div",
                          [
                            _c(
                              "v-progress-circular",
                              {
                                staticClass: "mt-2",
                                attrs: {
                                  size: 150,
                                  width: 4,
                                  value: gpuTemp.gpu_temp,
                                  color: "green"
                                }
                              },
                              [
                                _c("strong", [
                                  _vm._v(
                                    "\n                            GPU Temp\n                            " +
                                      _vm._s(gpuTemp.gpu_temp) +
                                      "\n                        "
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    gpuTemp.gpu_temp > "70 C" && gpuTemp.gpu_temp < "88 C"
                      ? _c(
                          "div",
                          [
                            _c(
                              "v-progress-circular",
                              {
                                staticClass: "mt-2",
                                attrs: {
                                  size: 150,
                                  width: 4,
                                  value: gpuTemp.gpu_temp,
                                  color: "orange"
                                }
                              },
                              [
                                _c("strong", [
                                  _vm._v(
                                    "\n                            GPU Temp\n                            " +
                                      _vm._s(gpuTemp.gpu_temp) +
                                      "\n                        "
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    gpuTemp.gpu_temp >= "88 C"
                      ? _c(
                          "div",
                          [
                            _c(
                              "v-progress-circular",
                              {
                                staticClass: "mt-2",
                                attrs: {
                                  size: 150,
                                  width: 4,
                                  value: gpuTemp.gpu_temp,
                                  color: "red"
                                }
                              },
                              [
                                _c("strong", [
                                  _vm._v(
                                    "\n                            GPU Temp\n                            " +
                                      _vm._s(gpuTemp.gpu_temp) +
                                      "\n                        "
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                )
              }),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _vm._l(_vm.gpuStat.gpu, function(powerDraw) {
                return _c(
                  "v-row",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: powerDraw.power_draw,
                        expression: "powerDraw.power_draw"
                      }
                    ],
                    key: powerDraw.id
                  },
                  [
                    _c(
                      "v-progress-circular",
                      {
                        staticClass: "mt-2",
                        attrs: {
                          size: 150,
                          width: 4,
                          value: powerDraw.power_draw,
                          color: "green"
                        }
                      },
                      [
                        _c("strong", [
                          _vm._v(" Power " + _vm._s(powerDraw.power_draw) + " ")
                        ])
                      ]
                    )
                  ],
                  1
                )
              })
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_channelsOnDeviceComponent.vue?vue&type=template&id=56cc4c76&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/_channelsOnDeviceComponent.vue?vue&type=template&id=56cc4c76& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-main",
    [
      _vm.channels != null
        ? _c(
            "v-card",
            { staticClass: "mr-10", attrs: { flat: "" } },
            [
              _c("v-card-subtitle", [
                _c("strong", [
                  _vm._v("\n                Kanály na zařízení\n            ")
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: {
                      "append-icon": "mdi-magnify",
                      label: "Vyhledat kanál",
                      "single-line": "",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.search,
                      callback: function($$v) {
                        _vm.search = $$v
                      },
                      expression: "search"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.channels,
                      search: _vm.search
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_deviceInfoComponent.vue?vue&type=template&id=9896a792&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/_deviceInfoComponent.vue?vue&type=template&id=9896a792& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-main",
    [
      _vm.deviceInformations != null
        ? _c(
            "v-card",
            {
              staticClass: "mr-10",
              attrs: { flat: "", color: "#F5F5F7" },
              on: {
                contextmenu: function($event) {
                  return _vm.show(
                    $event,
                    _vm.deviceInformations.name,
                    _vm.deviceInformations.ip,
                    _vm.deviceInformations.login_user,
                    _vm.deviceInformations.login_password,
                    _vm.deviceInformations.category,
                    _vm.deviceInformations.vendor
                  )
                }
              }
            },
            [
              _c("v-card-subtitle", [
                _c("strong", [
                  _vm._v("\n                Informace o zařízení\n            ")
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "ml-12 text--center" },
                [
                  _c(
                    "v-container",
                    [
                      _c("v-row", [
                        _vm.deviceInformations.ip != null
                          ? _c("span", { staticClass: "ml-6" }, [
                              _c("strong", [_vm._v("IP: ")]),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  attrs: {
                                    target: "_blank",
                                    href: "http://" + _vm.deviceInformations.ip
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.deviceInformations.ip) +
                                      "\n                        "
                                  )
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.deviceInformations.login_user != null
                          ? _c("span", { staticClass: "ml-6" }, [
                              _c("strong", [_vm._v("Přístup: ")]),
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.deviceInformations.login_user) +
                                  " /\n                        " +
                                  _vm._s(
                                    _vm.deviceInformations.login_password
                                  ) +
                                  "\n                    "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("span", { staticClass: "ml-6" }, [
                          _c("strong", [_vm._v("Kategorie zařízení:")]),
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.deviceInformations.category) +
                              "\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "ml-6" }, [
                          _c("strong", [_vm._v("Výrobce zařízení:")]),
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.deviceInformations.vendor) +
                              "\n                    "
                          )
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-menu",
        {
          attrs: {
            dense: "",
            "position-x": _vm.x,
            "position-y": _vm.y,
            absolute: "",
            "offset-y": ""
          },
          model: {
            value: _vm.showMenu,
            callback: function($$v) {
              _vm.showMenu = $$v
            },
            expression: "showMenu"
          }
        },
        [
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _c(
                "v-list-item",
                {
                  on: {
                    click: function($event) {
                      return _vm.openEditWindowForDevice()
                    }
                  }
                },
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", { attrs: { "x-small": "" } }, [
                        _vm._v("mdi-pencil")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", [
                    _vm._v("\n                    Upravit\n                ")
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "800" },
              model: {
                value: _vm.editDeviceData,
                callback: function($$v) {
                  _vm.editDeviceData = $$v
                },
                expression: "editDeviceData"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Editace ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-container", { attrs: { fluid: "" } }, [
                        _c(
                          "span",
                          { staticClass: "ml-6" },
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "12" } },
                              [
                                _c("v-text-field", {
                                  attrs: { dense: "", label: "Název zařízení" },
                                  model: {
                                    value: _vm.name,
                                    callback: function($$v) {
                                      _vm.name = $$v
                                    },
                                    expression: "name"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12" } },
                              [
                                _c("v-text-field", {
                                  attrs: { dense: "", label: "IP" },
                                  model: {
                                    value: _vm.ip,
                                    callback: function($$v) {
                                      _vm.ip = $$v
                                    },
                                    expression: "ip"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12" } },
                              [
                                _c("v-text-field", {
                                  attrs: { dense: "", label: "Uživatel" },
                                  model: {
                                    value: _vm.login_user,
                                    callback: function($$v) {
                                      _vm.login_user = $$v
                                    },
                                    expression: "login_user"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12" } },
                              [
                                _c("v-text-field", {
                                  attrs: { dense: "", label: "Heslo" },
                                  model: {
                                    value: _vm.login_password,
                                    callback: function($$v) {
                                      _vm.login_password = $$v
                                    },
                                    expression: "login_password"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12" } },
                              [
                                _c("v-combobox", {
                                  attrs: {
                                    dense: "",
                                    label: "Kategorie",
                                    items: _vm.categories,
                                    "item-text": "name",
                                    "item-value": "name",
                                    required: "",
                                    clearable: ""
                                  },
                                  model: {
                                    value: _vm.category,
                                    callback: function($$v) {
                                      _vm.category = $$v
                                    },
                                    expression: "category"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12" } },
                              [
                                _c("v-combobox", {
                                  attrs: {
                                    dense: "",
                                    label: "Výrobce",
                                    items: _vm.vendors,
                                    "item-text": "vendor",
                                    "item-value": "vendor",
                                    required: "",
                                    clearable: ""
                                  },
                                  model: {
                                    value: _vm.vendor,
                                    callback: function($$v) {
                                      _vm.vendor = $$v
                                    },
                                    expression: "vendor"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              _vm.editDeviceData = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Zavřít\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.saveDeviceInfo()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Uložit\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_deviceTemplateComponent.vue?vue&type=template&id=71dd37eb&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/_deviceTemplateComponent.vue?vue&type=template&id=71dd37eb& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-main", [
    _vm.template != null
      ? _c(
          "div",
          [
            _c(
              "v-row",
              _vm._l(_vm.template, function(sablona) {
                return _c(
                  "v-col",
                  { key: sablona.id },
                  [
                    _c(
                      "v-card",
                      {
                        attrs: { flat: "", color: "#F5F5F7", width: "390" },
                        on: {
                          contextmenu: function($event) {
                            return _vm.show($event, sablona)
                          }
                        }
                      },
                      [
                        _c("v-card-subtitle", [
                          _c("strong", [
                            _vm._v(
                              "\n                            Šablona\n                        "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "v-container",
                              [
                                _c("v-row", [
                                  _c("span", { staticClass: "ml-6" }, [
                                    _c(
                                      "ul",
                                      _vm._l(sablona, function(item, index) {
                                        return _c("li", { key: index }, [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(index) +
                                              " : " +
                                              _vm._s(item) +
                                              "\n                                        "
                                          )
                                        ])
                                      }),
                                      0
                                    )
                                  ])
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              }),
              1
            ),
            _vm._v(" "),
            _c(
              "v-menu",
              {
                attrs: {
                  dense: "",
                  "position-x": _vm.x,
                  "position-y": _vm.y,
                  absolute: "",
                  "offset-y": ""
                },
                model: {
                  value: _vm.showMenu,
                  callback: function($$v) {
                    _vm.showMenu = $$v
                  },
                  expression: "showMenu"
                }
              },
              [
                _c(
                  "v-list",
                  { attrs: { dense: "" } },
                  [
                    _c(
                      "v-list-item",
                      {
                        on: {
                          click: function($event) {
                            return _vm.openEditWindowForInterface()
                          }
                        }
                      },
                      [
                        _c(
                          "v-list-item-icon",
                          [
                            _c("v-icon", { attrs: { "x-small": "" } }, [
                              _vm._v("mdi-pencil")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-list-item-title", [
                          _vm._v(
                            "\n                        Upravit\n                    "
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            [
              _c(
                "v-row",
                { attrs: { justify: "center" } },
                [
                  _c(
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "600" },
                      model: {
                        value: _vm.editInterfaceSablonaData,
                        callback: function($$v) {
                          _vm.editInterfaceSablonaData = $$v
                        },
                        expression: "editInterfaceSablonaData"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", [
                            _c("span", { staticClass: "headline" }, [
                              _vm._v("Editace Interfacu")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c("v-container", [
                                _c(
                                  "span",
                                  { staticClass: "ml-6" },
                                  _vm._l(_vm.currentSablona, function(
                                    item,
                                    index
                                  ) {
                                    return _c(
                                      "v-col",
                                      { key: index, attrs: { cols: "12" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: index,
                                            value: item,
                                            required: ""
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  }),
                                  1
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "blue darken-1", text: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.editInterfaceSablonaData = false
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Zavřít\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "green darken-1", text: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.saveInterface(_vm.item.index)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Uložit\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]
          ],
          2
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_obecnyDeviceComponent.vue?vue&type=template&id=5b548e2e&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/_obecnyDeviceComponent.vue?vue&type=template&id=5b548e2e& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-main",
    [
      _c(
        "v-container",
        { staticClass: "ml-3", attrs: { fluid: "" } },
        [
          _c(
            "div",
            [
              _c("h2", [_vm._v(_vm._s(_vm.deviceName))]),
              _vm._v(" "),
              _c("v-divider", { staticClass: "mr-10", attrs: { inline: "" } })
            ],
            1
          ),
          _vm._v(" "),
          _vm.deviceVendor === "nVidia"
            ? _c(
                "v-row",
                { staticClass: "mt-4" },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [_c("transcoder-compoennt")],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: " mt-6" },
            [_c("v-col", [_c("deviceinformation-component")], 1)],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: " mt-4" },
            [_c("v-col", [_c("interfaces-component")], 1)],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mt-4" },
            [
              _c(
                "v-col",
                [
                  _vm.deviceVendor === "Blankom"
                    ? _c("blankominputs-component")
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.deviceVendor === "FTE"
                    ? _c("fteinputs-component")
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.deviceVendor === "Cisco"
                    ? _c("powervu-component")
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mt-4" },
            [_c("v-col", [_c("channelsondevice-component")], 1)],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/devices/DeviceComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/devices/DeviceComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeviceComponent_vue_vue_type_template_id_8b70aa0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeviceComponent.vue?vue&type=template&id=8b70aa0c& */ "./resources/js/components/devices/DeviceComponent.vue?vue&type=template&id=8b70aa0c&");
/* harmony import */ var _DeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeviceComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/devices/DeviceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeviceComponent_vue_vue_type_template_id_8b70aa0c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeviceComponent_vue_vue_type_template_id_8b70aa0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/devices/DeviceComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/devices/DeviceComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/devices/DeviceComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeviceComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/DeviceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/devices/DeviceComponent.vue?vue&type=template&id=8b70aa0c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/devices/DeviceComponent.vue?vue&type=template&id=8b70aa0c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceComponent_vue_vue_type_template_id_8b70aa0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeviceComponent.vue?vue&type=template&id=8b70aa0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/DeviceComponent.vue?vue&type=template&id=8b70aa0c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceComponent_vue_vue_type_template_id_8b70aa0c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceComponent_vue_vue_type_template_id_8b70aa0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blankomInterfacesComponent_vue_vue_type_template_id_00456090___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_blankomInterfacesComponent.vue?vue&type=template&id=00456090& */ "./resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue?vue&type=template&id=00456090&");
/* harmony import */ var _blankomInterfacesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_blankomInterfacesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _blankomInterfacesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _blankomInterfacesComponent_vue_vue_type_template_id_00456090___WEBPACK_IMPORTED_MODULE_0__["render"],
  _blankomInterfacesComponent_vue_vue_type_template_id_00456090___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blankomInterfacesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_blankomInterfacesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blankomInterfacesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue?vue&type=template&id=00456090&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue?vue&type=template&id=00456090& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blankomInterfacesComponent_vue_vue_type_template_id_00456090___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_blankomInterfacesComponent.vue?vue&type=template&id=00456090& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_blankomInterfacesComponent.vue?vue&type=template&id=00456090&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blankomInterfacesComponent_vue_vue_type_template_id_00456090___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_blankomInterfacesComponent_vue_vue_type_template_id_00456090___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fteInterfacesComponent_vue_vue_type_template_id_4af0b273___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_fteInterfacesComponent.vue?vue&type=template&id=4af0b273& */ "./resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue?vue&type=template&id=4af0b273&");
/* harmony import */ var _fteInterfacesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_fteInterfacesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _fteInterfacesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fteInterfacesComponent_vue_vue_type_template_id_4af0b273___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fteInterfacesComponent_vue_vue_type_template_id_4af0b273___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fteInterfacesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_fteInterfacesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fteInterfacesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue?vue&type=template&id=4af0b273&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue?vue&type=template&id=4af0b273& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fteInterfacesComponent_vue_vue_type_template_id_4af0b273___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_fteInterfacesComponent.vue?vue&type=template&id=4af0b273& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_fteInterfacesComponent.vue?vue&type=template&id=4af0b273&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fteInterfacesComponent_vue_vue_type_template_id_4af0b273___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fteInterfacesComponent_vue_vue_type_template_id_4af0b273___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfacesforChannelsComponent_vue_vue_type_template_id_48bdd825___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_interfacesforChannelsComponent.vue?vue&type=template&id=48bdd825& */ "./resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue?vue&type=template&id=48bdd825&");
/* harmony import */ var _interfacesforChannelsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_interfacesforChannelsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _interfacesforChannelsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _interfacesforChannelsComponent_vue_vue_type_template_id_48bdd825___WEBPACK_IMPORTED_MODULE_0__["render"],
  _interfacesforChannelsComponent_vue_vue_type_template_id_48bdd825___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_interfacesforChannelsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_interfacesforChannelsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_interfacesforChannelsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue?vue&type=template&id=48bdd825&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue?vue&type=template&id=48bdd825& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_interfacesforChannelsComponent_vue_vue_type_template_id_48bdd825___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_interfacesforChannelsComponent.vue?vue&type=template&id=48bdd825& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_interfacesforChannelsComponent.vue?vue&type=template&id=48bdd825&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_interfacesforChannelsComponent_vue_vue_type_template_id_48bdd825___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_interfacesforChannelsComponent_vue_vue_type_template_id_48bdd825___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _powerVuInterfacesComponent_vue_vue_type_template_id_37a1a306___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_powerVuInterfacesComponent.vue?vue&type=template&id=37a1a306& */ "./resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue?vue&type=template&id=37a1a306&");
/* harmony import */ var _powerVuInterfacesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_powerVuInterfacesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _powerVuInterfacesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _powerVuInterfacesComponent_vue_vue_type_template_id_37a1a306___WEBPACK_IMPORTED_MODULE_0__["render"],
  _powerVuInterfacesComponent_vue_vue_type_template_id_37a1a306___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_powerVuInterfacesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_powerVuInterfacesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_powerVuInterfacesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue?vue&type=template&id=37a1a306&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue?vue&type=template&id=37a1a306& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_powerVuInterfacesComponent_vue_vue_type_template_id_37a1a306___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_powerVuInterfacesComponent.vue?vue&type=template&id=37a1a306& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Interfaces/_powerVuInterfacesComponent.vue?vue&type=template&id=37a1a306&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_powerVuInterfacesComponent_vue_vue_type_template_id_37a1a306___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_powerVuInterfacesComponent_vue_vue_type_template_id_37a1a306___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/devices/Transcoder/TranscoderComponent.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/devices/Transcoder/TranscoderComponent.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TranscoderComponent_vue_vue_type_template_id_9f644c2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TranscoderComponent.vue?vue&type=template&id=9f644c2a& */ "./resources/js/components/devices/Transcoder/TranscoderComponent.vue?vue&type=template&id=9f644c2a&");
/* harmony import */ var _TranscoderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TranscoderComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/devices/Transcoder/TranscoderComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TranscoderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TranscoderComponent_vue_vue_type_template_id_9f644c2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TranscoderComponent_vue_vue_type_template_id_9f644c2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/devices/Transcoder/TranscoderComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/devices/Transcoder/TranscoderComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/devices/Transcoder/TranscoderComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TranscoderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TranscoderComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Transcoder/TranscoderComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TranscoderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/devices/Transcoder/TranscoderComponent.vue?vue&type=template&id=9f644c2a&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/devices/Transcoder/TranscoderComponent.vue?vue&type=template&id=9f644c2a& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TranscoderComponent_vue_vue_type_template_id_9f644c2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TranscoderComponent.vue?vue&type=template&id=9f644c2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/Transcoder/TranscoderComponent.vue?vue&type=template&id=9f644c2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TranscoderComponent_vue_vue_type_template_id_9f644c2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TranscoderComponent_vue_vue_type_template_id_9f644c2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/devices/_channelsOnDeviceComponent.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/devices/_channelsOnDeviceComponent.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _channelsOnDeviceComponent_vue_vue_type_template_id_56cc4c76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_channelsOnDeviceComponent.vue?vue&type=template&id=56cc4c76& */ "./resources/js/components/devices/_channelsOnDeviceComponent.vue?vue&type=template&id=56cc4c76&");
/* harmony import */ var _channelsOnDeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_channelsOnDeviceComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/devices/_channelsOnDeviceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _channelsOnDeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _channelsOnDeviceComponent_vue_vue_type_template_id_56cc4c76___WEBPACK_IMPORTED_MODULE_0__["render"],
  _channelsOnDeviceComponent_vue_vue_type_template_id_56cc4c76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/devices/_channelsOnDeviceComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/devices/_channelsOnDeviceComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/devices/_channelsOnDeviceComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_channelsOnDeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./_channelsOnDeviceComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_channelsOnDeviceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_channelsOnDeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/devices/_channelsOnDeviceComponent.vue?vue&type=template&id=56cc4c76&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/devices/_channelsOnDeviceComponent.vue?vue&type=template&id=56cc4c76& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_channelsOnDeviceComponent_vue_vue_type_template_id_56cc4c76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./_channelsOnDeviceComponent.vue?vue&type=template&id=56cc4c76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_channelsOnDeviceComponent.vue?vue&type=template&id=56cc4c76&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_channelsOnDeviceComponent_vue_vue_type_template_id_56cc4c76___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_channelsOnDeviceComponent_vue_vue_type_template_id_56cc4c76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/devices/_deviceInfoComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/devices/_deviceInfoComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deviceInfoComponent_vue_vue_type_template_id_9896a792___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deviceInfoComponent.vue?vue&type=template&id=9896a792& */ "./resources/js/components/devices/_deviceInfoComponent.vue?vue&type=template&id=9896a792&");
/* harmony import */ var _deviceInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_deviceInfoComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/devices/_deviceInfoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _deviceInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deviceInfoComponent_vue_vue_type_template_id_9896a792___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deviceInfoComponent_vue_vue_type_template_id_9896a792___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/devices/_deviceInfoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/devices/_deviceInfoComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/devices/_deviceInfoComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deviceInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./_deviceInfoComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_deviceInfoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deviceInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/devices/_deviceInfoComponent.vue?vue&type=template&id=9896a792&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/devices/_deviceInfoComponent.vue?vue&type=template&id=9896a792& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deviceInfoComponent_vue_vue_type_template_id_9896a792___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./_deviceInfoComponent.vue?vue&type=template&id=9896a792& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_deviceInfoComponent.vue?vue&type=template&id=9896a792&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deviceInfoComponent_vue_vue_type_template_id_9896a792___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deviceInfoComponent_vue_vue_type_template_id_9896a792___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/devices/_deviceTemplateComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/devices/_deviceTemplateComponent.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deviceTemplateComponent_vue_vue_type_template_id_71dd37eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deviceTemplateComponent.vue?vue&type=template&id=71dd37eb& */ "./resources/js/components/devices/_deviceTemplateComponent.vue?vue&type=template&id=71dd37eb&");
/* harmony import */ var _deviceTemplateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_deviceTemplateComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/devices/_deviceTemplateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _deviceTemplateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deviceTemplateComponent_vue_vue_type_template_id_71dd37eb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deviceTemplateComponent_vue_vue_type_template_id_71dd37eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/devices/_deviceTemplateComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/devices/_deviceTemplateComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/devices/_deviceTemplateComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deviceTemplateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./_deviceTemplateComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_deviceTemplateComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deviceTemplateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/devices/_deviceTemplateComponent.vue?vue&type=template&id=71dd37eb&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/devices/_deviceTemplateComponent.vue?vue&type=template&id=71dd37eb& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deviceTemplateComponent_vue_vue_type_template_id_71dd37eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./_deviceTemplateComponent.vue?vue&type=template&id=71dd37eb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_deviceTemplateComponent.vue?vue&type=template&id=71dd37eb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deviceTemplateComponent_vue_vue_type_template_id_71dd37eb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deviceTemplateComponent_vue_vue_type_template_id_71dd37eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/devices/_obecnyDeviceComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/devices/_obecnyDeviceComponent.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _obecnyDeviceComponent_vue_vue_type_template_id_5b548e2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_obecnyDeviceComponent.vue?vue&type=template&id=5b548e2e& */ "./resources/js/components/devices/_obecnyDeviceComponent.vue?vue&type=template&id=5b548e2e&");
/* harmony import */ var _obecnyDeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_obecnyDeviceComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/devices/_obecnyDeviceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _obecnyDeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _obecnyDeviceComponent_vue_vue_type_template_id_5b548e2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _obecnyDeviceComponent_vue_vue_type_template_id_5b548e2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/devices/_obecnyDeviceComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/devices/_obecnyDeviceComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/devices/_obecnyDeviceComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_obecnyDeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./_obecnyDeviceComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_obecnyDeviceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_obecnyDeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/devices/_obecnyDeviceComponent.vue?vue&type=template&id=5b548e2e&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/devices/_obecnyDeviceComponent.vue?vue&type=template&id=5b548e2e& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_obecnyDeviceComponent_vue_vue_type_template_id_5b548e2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./_obecnyDeviceComponent.vue?vue&type=template&id=5b548e2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/_obecnyDeviceComponent.vue?vue&type=template&id=5b548e2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_obecnyDeviceComponent_vue_vue_type_template_id_5b548e2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_obecnyDeviceComponent_vue_vue_type_template_id_5b548e2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);