(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource/js/components/channels/ChannelComponent.vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/ChannelComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/ChannelComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Default_DefaultComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Default/DefaultComponent */ "./resources/js/components/Default/DefaultComponent.vue");
/* harmony import */ var _Tags_TagComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tags/TagComponent */ "./resources/js/components/Tags/TagComponent.vue");
/* harmony import */ var _MulticastComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MulticastComponent.vue */ "./resources/js/components/channels/MulticastComponent.vue");
/* harmony import */ var _Unicast_H264_H264baseInfoComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Unicast H264/H264baseInfoComponent */ "./resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue");
/* harmony import */ var _Unicast_H265_H265baseInfoComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Unicast H265/H265baseInfoComponent */ "./resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue");
/* harmony import */ var _Dohled_DohledChannelComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dohled/DohledChannelComponent */ "./resources/js/components/channels/Dohled/DohledChannelComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      channelTab: null,
      channelName: "",
      componentType: "multicast"
    };
  },
  components: {
    "multicast-component": _MulticastComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "h264baseinfo-component": _Unicast_H264_H264baseInfoComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    "h265baseinfo-component": _Unicast_H265_H265baseInfoComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    "default-component": _Default_DefaultComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    "tag-component": _Tags_TagComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    "dohled-component": _Dohled_DohledChannelComponent__WEBPACK_IMPORTED_MODULE_5__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/DohledChannelComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Dohled/DohledChannelComponent.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      channelName: ""
    };
  },
  created: function created() {
    this.loadChannelNameById();
  },
  methods: {
    loadChannelNameById: function loadChannelNameById() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("channel/name", {
                  channelId: _this.$route.params.id
                }).then(function (response) {
                  _this.channelName = response.data;
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
      this.loadChannelNameById();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/DohledH264Component.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Dohled/DohledH264Component.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dohled: null
    };
  },
  created: function created() {
    this.loadDohledDatat();
  },
  methods: {
    loadDohledDatat: function loadDohledDatat() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("channel/h264/dohled", {
                  channelId: _this.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this.dohled = response.data.streamData;
                  } else {
                    _this.dohled = null;
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
      this.loadDohledDatat();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/DohledH265Component.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Dohled/DohledH265Component.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dohled: null
    };
  },
  created: function created() {
    this.loadDohledDatat();
  },
  methods: {
    loadDohledDatat: function loadDohledDatat() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("channel/h265/dohled", {
                  channelId: _this.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this.dohled = response.data.streamData;
                  } else {
                    _this.dohled = null;
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
      this.loadDohledDatat();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/TestDohledComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Dohled/TestDohledComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dohled: null
    };
  },
  created: function created() {
    this.loadDohledDatat();
  },
  methods: {
    loadDohledDatat: function loadDohledDatat() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("channel/dohled", {
                  channelId: _this.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this.dohled = response.data.streamData;
                  } else {
                    _this.dohled = null;
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
      this.loadDohledDatat();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_backupComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Multicast/_backupComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      backup: [],
      channelToInterface: null,
      deviceInformation: null,
      editDialog: false,
      items: [],
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadBackup();
  },
  methods: {
    show: function show(e) {
      var _this = this;

      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this.showMenu = true;
      });
    },
    loadBackup: function loadBackup() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.post("backup", {
                  channelId: _this2.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this2.backup = response.data.data;
                  } else {
                    _this2.backup = null;
                  }
                });

              case 3:
                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                _this2.backup = null;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5]]);
      }))();
    },
    GetMoreInformationAboutThisDevice: function GetMoreInformationAboutThisDevice(data) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("device/info", {
                  deviceName: data
                }).then(function (response) {
                  _this3.deviceInformation = response.data;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    openEditDialog: function openEditDialog() {
      var _this4 = this;

      axios.get("device/prijem").then(function (response) {
        _this4.GetMoreInformationAboutThisDevice(_this4.backup.name);

        _this4.items = response.data;
        _this4.editDialog = true;
      });
    },
    closeDialog: function closeDialog() {
      this.editDialog = false;
      this.loadBackup();
    },
    saveData: function saveData() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post("device/backup/edit", {
                  channelId: _this5.$route.params.id,
                  deviceName: _this5.backup.name,
                  channelToInterface: _this5.backup.interfaces,
                  checkIfDeviceHasInterface: _this5.deviceInformation.outputInterfaces
                }).then(function (response) {
                  _this5.$store.state.alerts = response.data.alert;

                  if (response.data.status === "success") {
                    _this5.editDialog = false;

                    _this5.loadBackup();
                  } else {
                    _this5.editDialog = false;
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
    removeData: function removeData() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post("device/backup/remove", {
                  channelId: _this6.$route.params.id
                }).then(function (response) {
                  _this6.$store.state.alerts = response.data.alert;

                  _this6.loadBackup();
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
      this.loadBackup();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_calendarComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Multicast/_calendarComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      events: null
    };
  },
  created: function created() {
    this.getEvents();
  },
  methods: {
    getEvents: function getEvents() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("event/channel", {
                  channelId: _this.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this.events = response.data.data;
                  } else {
                    _this.events = null;
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
      this.getEvents();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_multicastComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Multicast/_multicastComponent.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      editData: null,
      sources: [],
      editMulticastSources: false,
      multicasts: null,
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadMulticast();
  },
  methods: {
    show: function show(e) {
      var _this = this;

      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this.showMenu = true;
      });
    },
    loadMulticast: function loadMulticast() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("multicast", {
                  channelId: _this2.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this2.multicasts = response.data.data;
                  } else {
                    _this2.multicasts = null;
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
    getMulticastSources: function getMulticastSources() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("sources").then(function (response) {
                  _this3.sources = response.data;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    openMulticastEditDialog: function openMulticastEditDialog() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post("channel/multicast", {
                  channelId: _this4.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this4.getMulticastSources();

                    _this4.editData = response.data.data;
                    _this4.editMulticastSources = true;
                  } else {
                    _this4.editData = null;
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
    savedata: function savedata() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post("channel/multicast/edit", {
                  channelId: _this5.$route.params.id,
                  multicastZdroj: _this5.editData.multicastZdroj,
                  multicast_ip: _this5.editData.multicast_ip,
                  stb_ip: _this5.editData.stb_ip,
                  backup_multicastZdroj: _this5.editData.backup_multicastZdroj,
                  backup_multicast_ip: _this5.editData.backup_multicast_ip
                }).then(function (response) {
                  _this5.$store.state.alerts = response.data.alert;

                  if (response.data.status === "success") {
                    _this5.editMulticastSources = false;

                    _this5.loadMulticast();
                  }
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
      this.loadMulticast();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_multiplexorComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Multicast/_multiplexorComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: [],
      editMultiplexor: false,
      multiplexor: null,
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadMultiplexor();
  },
  methods: {
    show: function show(e) {
      var _this = this;

      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this.showMenu = true;
      });
    },
    getMultiplexors: function getMultiplexors() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("device/multiplexors").then(function (response) {
                  _this2.items = response.data;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loadMultiplexor: function loadMultiplexor() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("multiplexor", {
                  channelId: _this3.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this3.multiplexor = response.data.data;
                  } else {
                    _this3.multiplexor = null;
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
    openEditMultiplexor: function openEditMultiplexor() {
      this.getMultiplexors();
      this.editMultiplexor = true;
    },
    closeDialog: function closeDialog() {
      this.loadMultiplexor();
      this.editMultiplexor = false;
    },
    savedata: function savedata() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post("channel/multiplexer/edit", {
                  channelId: _this4.$route.params.id,
                  deviceName: _this4.multiplexor.name
                }).then(function (response) {
                  _this4.$store.state.alerts = response.data.alert;

                  if (response.data.status === "success") {
                    _this4.editMultiplexor = false;

                    _this4.loadMultiplexor();
                  } else {
                    _this4.editMultiplexor = false;
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
    removeMultiplexor: function removeMultiplexor() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post("channel/multiplexer/remove", {
                  channelId: _this5.$route.params.id
                }).then(function (response) {
                  _this5.$store.state.alerts = response.data.alert;

                  _this5.loadMultiplexor();
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
      this.loadMultiplexor();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_noteComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Multicast/_noteComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      notes: [],
      showMenu: false,
      showMenuCreate: false,
      x: 0,
      y: 0,
      x2: 0,
      y2: 0
    };
  },
  created: function created() {
    this.loadNotes();
  },
  methods: {
    showCreate: function showCreate(e) {
      var _this = this;

      e.preventDefault();
      this.showMenuCreate = false;
      this.x2 = e.clientX;
      this.y2 = e.clientY;
      this.$nextTick(function () {
        _this.showMenuCreate = true;
      });
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
    loadNotes: function loadNotes() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("notes", {
                  id: _this3.$route.params.id,
                  datatype: _this3.checkUri()
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this3.notes = response.data.notes;
                  } else {
                    _this3.notes = null;
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
    checkUri: function checkUri() {
      if (this.$route.path === "/channel/" + this.$route.params.id) {
        return "channelId";
      }

      if (this.$route.path === "/channel/" + this.$route.params.id + "/h264") {
        return "channelId";
      }

      if (this.$route.path === "/channel/" + this.$route.params.id + "/h265") {
        return "channelId";
      }

      if (this.$route.path === "/device/" + this.$route.params.id) {
        return "deviceId";
      }
    }
  },
  watch: {
    $route: function $route(to, from) {
      this.loadNotes();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_sourceComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Multicast/_sourceComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      hasLinuxPath: null,
      linuxPath: null,
      channelToInterface: null,
      hasChildren: null,
      children: null,
      childrens: [],
      childrenData: null,
      deviceInformation: null,
      editDialog: false,
      items: [],
      prijem: [],
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadPrijem();
  },
  methods: {
    show: function show(e) {
      var _this = this;

      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this.showMenu = true;
      });
    },
    openEditDialog: function openEditDialog() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("device/prijem").then(function (response) {
                  _this2.GetMoreInformationAboutThisDevice(_this2.prijem.name);

                  _this2.items = response.data;
                  _this2.editDialog = true;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saveData: function saveData() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this3.deviceInformation === null) {
                  _this3.deviceInformation = null;
                } else {
                  _this3.deviceInformation = _this3.deviceInformation.outputInterfaces;
                }

                _context2.next = 3;
                return axios.post("device/prijem/edit", {
                  channelId: _this3.$route.params.id,
                  deviceName: _this3.prijem.name,
                  children: _this3.children,
                  channelToInterface: _this3.prijem.interfaces,
                  linuxPath: _this3.prijem.path,
                  checkIfDeviceHasInterface: _this3.deviceInformation
                }).then(function (response) {
                  _this3.$store.state.alerts = response.data.alert;

                  if (response.data.status === "success") {
                    _this3.editDialog = false;
                    _this3.deviceInformation = [];
                    _this3.hasChildren = null;

                    _this3.loadPrijem();
                  } else {
                    _this3.editDialog = false;
                  }
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    GetMoreInformationAboutThisDevice: function GetMoreInformationAboutThisDevice(data) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post("device/info", {
                  deviceName: data
                }).then(function (response) {
                  if (response.data.status === "sat") {
                    _this4.deviceInformation = response.data.data;
                    _this4.hasChildren = null;
                    _this4.childrens = [];
                    _this4.hasLinuxPath = null;
                  } else if (response.data.status === "poIP") {
                    _this4.hasLinuxPath = null;
                    _this4.hasChildren = "children";
                    _this4.deviceInformation = null;
                    axios.get("device/transcodersAndlinux").then(function (response) {
                      _this4.childrens = response.data;
                    });
                  } else if (response.data.status === "linux") {
                    _this4.hasLinuxPath = true;
                    _this4.deviceInformation = null;
                    _this4.hasChildren = null;
                    _this4.childrens = [];
                  } else {
                    _this4.hasLinuxPath = null;
                    _this4.deviceInformation = null;
                    _this4.hasChildren = null;
                    _this4.childrens = [];
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
    closeDialog: function closeDialog() {
      this.editDialog = false;
      this.loadPrijem();
    },
    removeData: function removeData() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post("device/prijem/remove", {
                  channelId: _this5.$route.params.id
                }).then(function (response) {
                  _this5.$store.state.alerts = response.data.alert;

                  _this5.loadPrijem();
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    loadPrijem: function loadPrijem() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.post("prijem", {
                  channelId: _this6.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this6.prijem = response.data.data;

                    if (response.data.data.children != null) {
                      _this6.childrenData = response.data.data.children;
                    } else {
                      _this6.childrenData = null;
                    }
                  } else {
                    _this6.prijem = null;
                  }
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
      this.loadPrijem();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/MulticastComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/MulticastComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Multicast_multicastComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Multicast/_multicastComponent */ "./resources/js/components/channels/Multicast/_multicastComponent.vue");
/* harmony import */ var _Multicast_multiplexorComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Multicast/_multiplexorComponent */ "./resources/js/components/channels/Multicast/_multiplexorComponent.vue");
/* harmony import */ var _Multicast_sourceComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Multicast/_sourceComponent */ "./resources/js/components/channels/Multicast/_sourceComponent.vue");
/* harmony import */ var _Multicast_backupComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Multicast/_backupComponent */ "./resources/js/components/channels/Multicast/_backupComponent.vue");
/* harmony import */ var _Multicast_calendarComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Multicast/_calendarComponent */ "./resources/js/components/channels/Multicast/_calendarComponent.vue");
/* harmony import */ var _Multicast_noteComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Multicast/_noteComponent */ "./resources/js/components/channels/Multicast/_noteComponent.vue");
/* harmony import */ var _Dohled_TestDohledComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dohled/TestDohledComponent */ "./resources/js/components/channels/Dohled/TestDohledComponent.vue");


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







/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      channelName: ""
    };
  },
  components: {
    "multicast-component": _Multicast_multicastComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    "multiplexor-component": _Multicast_multiplexorComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    "source-component": _Multicast_sourceComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    "backup-component": _Multicast_backupComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    "calendar-component": _Multicast_calendarComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    "note-component": _Multicast_noteComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
    "dohled-component": _Dohled_TestDohledComponent__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  created: function created() {
    this.loadChannelNameById();
  },
  methods: {
    loadChannelNameById: function loadChannelNameById() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("channel/name", {
                  channelId: _this.$route.params.id
                }).then(function (response) {
                  _this.channelName = response.data;
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
      this.loadChannelNameById();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      m3u8s: [],
      editDataDialog: false,
      chunkStoreId: null,
      kvalityOutput: null,
      kvalityForDialog: [],
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadChunkStoreId();
    this.loadOutputKvality();
    this.loadM3u8Kvality();
  },
  methods: {
    loadM3u8Kvality: function loadM3u8Kvality() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("h264/channel/m3u8", {
                  channelId: _this.$route.params.id,
                  type: "h264"
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this.m3u8s = response.data.data;
                  } else {
                    _this.m3u8s = null;
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
    savedata: function savedata() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("h264/channel/edit", {
                  channelId: _this2.$route.params.id,
                  kdekoliv: _this2.m3u8s.kdekoliv,
                  local: _this2.m3u8s.local,
                  mobile: _this2.m3u8s.mobile,
                  p1080: _this2.kvalityForDialog.p1080,
                  p720: _this2.kvalityForDialog.p720,
                  p576: _this2.kvalityForDialog.p576,
                  type: "h264",
                  chunkStoreId: _this2.chunkStoreId
                }).then(function (response) {
                  _this2.$store.state.alerts = response.data.alert;

                  if (response.data.status === "success") {
                    _this2.editDataDialog = false;

                    _this2.loadChunkStoreId();

                    _this2.loadOutputKvality();

                    _this2.loadM3u8Kvality();
                  } else {
                    _this2.m3u8s = null;
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
    openDialog: function openDialog() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post("h264/channel/kvalityForEdit", {
                  channelId: _this3.$route.params.id,
                  type: "h264"
                }).then(function (response) {
                  _this3.kvalityForDialog = response.data;
                });

              case 2:
                _this3.editDataDialog = true;

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    closeDialog: function closeDialog() {
      this.editDataDialog = false;
      this.kvalityForDialog = [];
    },
    show: function show(e) {
      var _this4 = this;

      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this4.showMenu = true;
      });
    },
    loadChunkStoreId: function loadChunkStoreId() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post("unicast/chunkStoreId", {
                  channelId: _this5.$route.params.id
                }).then(function (response) {
                  _this5.chunkStoreId = response.data;
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    loadOutputKvality: function loadOutputKvality() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.post("h264/channel/kvality", {
                  channelId: _this6.$route.params.id,
                  type: "h264"
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this6.kvalityOutput = response.data.data;
                  } else {
                    _this6.kvalityOutput = null;
                  }
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
      this.loadChunkStoreId();
      this.loadOutputKvality();
      this.loadM3u8Kvality();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _H264InfoCoomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./H264InfoCoomponent */ "./resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue");
/* harmony import */ var _unicastDeviceComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_unicastDeviceComponent */ "./resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue");
/* harmony import */ var _Dohled_DohledH264Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Dohled/DohledH264Component */ "./resources/js/components/channels/Dohled/DohledH264Component.vue");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      addToTranscoder: false,
      chunkStoreId: null,
      transcoder: null,
      transcoders: [],
      output1080: null,
      output720: null,
      output576: null,
      hlsKdekoliv: null,
      hlsLocal: null,
      hlsMobile: null,
      outputDialog: false,
      channelName: "",
      exist: "",
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  components: {
    "h264info-component": _H264InfoCoomponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    "transcoder-component": _unicastDeviceComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    "dohled-component": _Dohled_DohledH264Component__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  created: function created() {
    this.loadChannelNameById();
    this.checkIfIs();
  },
  methods: {
    removeH264: function removeH264() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("h264/delete", {
                  channelId: _this.$route.params.id
                }).then(function (response) {
                  _this.$store.state.alerts = response.data.alert;

                  if (response.data.status === "success") {
                    _this.$router.push("/channel/" + response.data.channelId)["catch"](function (err) {});
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
    createOutput: function createOutput() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("device/transcoders").then(function (response) {
                  _this2.transcoders = response.data;
                  _this2.outputDialog = true;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    savedata: function savedata() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post("h264/create", {
                  channelId: _this3.$route.params.id,
                  addToTranscoder: _this3.addToTranscoder,
                  chunkStoreId: _this3.chunkStoreId,
                  transcoder: _this3.transcoder,
                  output1080: _this3.output1080,
                  output720: _this3.output720,
                  output576: _this3.output576,
                  hlsKdekoliv: _this3.hlsKdekoliv,
                  hlsLocal: _this3.hlsLocal,
                  hlsMobile: _this3.hlsMobile
                }).then(function (response) {
                  _this3.$store.state.alerts = response.data.alert; // this.$route.push("/");
                  // this.$route.push("/channel/" + response.data.channelId + "/h264");

                  _this3.loadChannelNameById();

                  _this3.checkIfIs();

                  _this3.outputDialog = false;
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
      this.outputDialog = false;
    },
    show: function show(e) {
      var _this4 = this;

      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this4.showMenu = true;
      });
    },
    loadChannelNameById: function loadChannelNameById() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post("channel/name", {
                  channelId: _this5.$route.params.id
                }).then(function (response) {
                  _this5.channelName = response.data;
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    checkIfIs: function checkIfIs() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.post("h264/check", {
                  channelId: _this6.$route.params.id
                }).then(function (response) {
                  _this6.exist = response.data;
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
      this.loadChannelNameById();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      transcoderStatus: null,
      editDataDialog: false,
      transcoder: [],
      transcoders: [],
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadTranscoder();
    this.loadStatusFromTramscoder();
  },
  methods: {
    closeDialog: function closeDialog() {
      this.editDataDialog = false;
    },
    savedata: function savedata() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("h264/transcoder/update", {
                  channelId: _this.$route.params.id,
                  transcoder: _this.transcoder.name
                }).then(function (response) {
                  _this.$store.state.alerts = response.data.alert;
                  _this.editDataDialog = false;

                  _this.loadTranscoder();
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    openEditDialog: function openEditDialog() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("device/transcoders").then(function (response) {
                  _this2.transcoders = response.data;
                  _this2.editDataDialog = true;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    show: function show(e) {
      var _this3 = this;

      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this3.showMenu = true;
      });
    },
    loadStatusFromTramscoder: function loadStatusFromTramscoder() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post("h264/transcoder/status", {
                  channelId: _this4.$route.params.id
                }).then(function (response) {
                  if (response.data.status === 'success') {
                    _this4.transcoderStatus = response.data;
                  } else {
                    _this4.transcoderStatus = null;
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
    loadTranscoder: function loadTranscoder() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post("h264/transcoder", {
                  channelId: _this5.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this5.transcoder = response.data.data;
                  } else {
                    _this5.transcoder = null;
                  }
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
      this.loadTranscoder();
      this.loadStatusFromTramscoder();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      editDataDialog: false,
      chunkStoreId: null,
      kvalityOutput: null,
      kvalityForDialog: [],
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadChunkStoreId();
    this.loadOutputKvality();
  },
  methods: {
    openDialog: function openDialog() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("h265/channel/kvalityForEdit", {
                  channelId: _this.$route.params.id,
                  type: "h265"
                }).then(function (response) {
                  _this.kvalityForDialog = response.data;
                });

              case 2:
                _this.editDataDialog = true;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    closeDialog: function closeDialog() {
      this.editDataDialog = false;
      this.kvalityForDialog = [];
    },
    savedata: function savedata() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("h265/channel/kvality/update", {
                  channelId: _this2.$route.params.id,
                  p1080: _this2.kvalityForDialog.p1080,
                  p720: _this2.kvalityForDialog.p720
                }).then(function (response) {
                  _this2.$store.state.alerts = response.data.alert;

                  _this2.loadChunkStoreId();

                  _this2.loadOutputKvality();

                  _this2.editDataDialog = false;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    show: function show(e) {
      var _this3 = this;

      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this3.showMenu = true;
      });
    },
    loadChunkStoreId: function loadChunkStoreId() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post("unicast/chunkStoreId", {
                  channelId: _this4.$route.params.id
                }).then(function (response) {
                  _this4.chunkStoreId = response.data;
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    loadOutputKvality: function loadOutputKvality() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post("h264/channel/kvality", {
                  channelId: _this5.$route.params.id,
                  type: "h265"
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this5.kvalityOutput = response.data.data;
                  } else {
                    _this5.kvalityOutput = null;
                  }
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
      this.loadChunkStoreId();
      this.loadOutputKvality();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _H265InfoCoomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./H265InfoCoomponent */ "./resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue");
/* harmony import */ var _unicastDeviceController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_unicastDeviceController */ "./resources/js/components/channels/Unicast H265/_unicastDeviceController.vue");
/* harmony import */ var _Dohled_DohledH265Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Dohled/DohledH265Component */ "./resources/js/components/channels/Dohled/DohledH265Component.vue");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      outputDialog: false,
      output1080: null,
      output720: null,
      transcoders: [],
      transcoder: null,
      channelName: "",
      exist: "",
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  components: {
    "h265info-component": _H265InfoCoomponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    "transcoder-component": _unicastDeviceController__WEBPACK_IMPORTED_MODULE_2__["default"],
    "dohled-component": _Dohled_DohledH265Component__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  created: function created() {
    this.loadChannelNameById();
    this.checkIfIs();
  },
  methods: {
    closeDialog: function closeDialog() {
      this.outputDialog = false;
    },
    savedata: function savedata() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("h265/create", {
                  channelId: _this.$route.params.id,
                  addToTranscoder: _this.addToTranscoder,
                  transcoder: _this.transcoder,
                  output1080: _this.output1080,
                  output720: _this.output720
                }).then(function (response) {
                  _this.$store.state.alerts = response.data.alert; // this.$route.push("/");
                  // this.$route.push("/channel/" + response.data.channelId + "/h264");

                  _this.loadChannelNameById();

                  _this.checkIfIs();

                  _this.outputDialog = false;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    createOutput: function createOutput() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("device/transcodersAndSatelits").then(function (response) {
                  _this2.transcoders = response.data;
                  _this2.outputDialog = true;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    show: function show(e) {
      var _this3 = this;

      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this3.showMenu = true;
      });
    },
    loadChannelNameById: function loadChannelNameById() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post("channel/name", {
                  channelId: _this4.$route.params.id
                }).then(function (response) {
                  _this4.channelName = response.data;
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    checkIfIs: function checkIfIs() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post("h265/check", {
                  channelId: _this5.$route.params.id
                }).then(function (response) {
                  _this5.exist = response.data;
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
      this.loadChannelNameById();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H265/_unicastDeviceController.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Unicast H265/_unicastDeviceController.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      transcoderStatus: null,
      transcoders: [],
      transcoder: null,
      kvalityForDialog: [],
      showMenu: false,
      outputDialog: false,
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadTranscoder();
    this.loadStatusFromTramscoder();
  },
  methods: {
    createOutput: function createOutput() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("device/transcodersAndSatelits").then(function (response) {
                  _this.transcoders = response.data;
                  _this.outputDialog = true;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    savedata: function savedata() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("h265/transcoder/update", {
                  channelId: _this2.$route.params.id,
                  transcoder: _this2.transcoder.name
                }).then(function (response) {
                  _this2.$store.state.alerts = response.data.alert;

                  _this2.loadTranscoder();

                  _this2.outputDialog = false;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    closeDialog: function closeDialog() {
      this.outputDialog = false;
    },
    show: function show(e) {
      var _this3 = this;

      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this3.showMenu = true;
      });
    },
    loadTranscoder: function loadTranscoder() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post("h265/transcoder", {
                  channelId: _this4.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this4.transcoder = response.data.data;
                  } else {
                    _this4.transcoder = null;
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
    loadStatusFromTramscoder: function loadStatusFromTramscoder() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post("h265/transcoder/status", {
                  channelId: _this5.$route.params.id
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this5.transcoderStatus = response.data;
                  } else {
                    _this5.transcoderStatus = null;
                  }
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
      this.loadTranscoder();
      this.loadStatusFromTramscoder();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/ChannelComponent.vue?vue&type=template&id=4a5ea904&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/ChannelComponent.vue?vue&type=template&id=4a5ea904& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
                  { staticClass: "ml-16 mt-3", attrs: { flat: "" } },
                  [
                    _c(
                      "v-tabs",
                      {
                        attrs: { centered: "" },
                        model: {
                          value: _vm.channelTab,
                          callback: function($$v) {
                            _vm.channelTab = $$v
                          },
                          expression: "channelTab"
                        }
                      },
                      [
                        _c("v-tabs-slider"),
                        _vm._v(" "),
                        _c(
                          "v-tab",
                          {
                            attrs: {
                              link: "",
                              to: "/channel/" + this.$route.params.id,
                              href: "multicast"
                            }
                          },
                          [_vm._v("Multicast")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-tab",
                          {
                            attrs: {
                              link: "",
                              to: "/channel/" + this.$route.params.id + "/h264",
                              href: "#tab-2"
                            }
                          },
                          [_vm._v("H264")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-tab",
                          {
                            attrs: {
                              link: "",
                              to: "/channel/" + this.$route.params.id + "/h265",
                              href: "#tab-3"
                            }
                          },
                          [_vm._v("H265")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-tab-item",
                          {
                            staticClass: "ml-16 mt-6",
                            model: {
                              value: _vm.channelTab,
                              callback: function($$v) {
                                _vm.channelTab = $$v
                              },
                              expression: "channelTab"
                            }
                          },
                          [
                            this.$route.path ===
                            "/channel/" + this.$route.params.id
                              ? _c("multicast-component")
                              : _vm._e(),
                            _vm._v(" "),
                            this.$route.path ===
                            "/channel/" + this.$route.params.id + "/h264"
                              ? _c("h264baseinfo-component")
                              : _vm._e(),
                            _vm._v(" "),
                            this.$route.path ===
                            "/channel/" + this.$route.params.id + "/h265"
                              ? _c("h265baseinfo-component")
                              : _vm._e(),
                            _vm._v(" "),
                            this.$route.path ===
                            "/channel/" + this.$route.params.id + "/dohled"
                              ? _c("dohled-component")
                              : _vm._e()
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/DohledChannelComponent.vue?vue&type=template&id=f15d3cd6&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Dohled/DohledChannelComponent.vue?vue&type=template&id=f15d3cd6& ***!
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
    "v-main",
    [
      _c(
        "v-container",
        { staticClass: "ml-3", attrs: { fluid: "" } },
        [
          _c(
            "div",
            [
              _c("h2", [
                _vm._v(_vm._s(_vm.channelName) + " - informace z dohledu")
              ]),
              _vm._v(" "),
              _c("v-divider", { attrs: { inline: "" } })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-row", { staticClass: " mt-6" }, [_c("v-col")], 1)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/DohledH264Component.vue?vue&type=template&id=342739ec&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Dohled/DohledH264Component.vue?vue&type=template&id=342739ec& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _vm.dohled != null
        ? _c(
            "v-card",
            { attrs: { flat: "", color: "#F5F5F7" } },
            [
              _c("v-card-subtitle", [
                _c("strong", [
                  _vm._v("\n                Informace z dohledu\n            ")
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
                        [
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c("span", [
                              _vm._v(
                                "\n                            Stav Streamu:\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _vm.dohled.streamStatus != "success"
                              ? _c("span", [
                                  _c("strong", { staticClass: "red--text" }, [
                                    _vm._v(
                                      "\n                                Problém se streamem\n                            "
                                    )
                                  ])
                                ])
                              : _c("span", [
                                  _c("strong", { staticClass: "green--text" }, [
                                    _vm._v(
                                      "\n                                Stream je v pořádku\n                            "
                                    )
                                  ])
                                ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            [
                              _c("v-img", {
                                attrs: {
                                  "lazy-src": _vm.dohled.img,
                                  "max-height": "150",
                                  "max-width": "250",
                                  src: _vm.dohled.img
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            [
                              _c("strong", [
                                _vm._v(
                                  "\n                            Historie:\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-virtual-scroll", {
                                attrs: {
                                  items: _vm.dohled.history,
                                  "item-height": 50,
                                  height: "100"
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var item = ref.item
                                        return [
                                          _c(
                                            "v-list-item",
                                            [
                                              _c(
                                                "v-list-item-content",
                                                [
                                                  _c("v-list-item-title", [
                                                    item.status === "stream_ok"
                                                      ? _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "green--text"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                Stream je v pořádku\n                                            "
                                                            )
                                                          ]
                                                        )
                                                      : _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "red--text"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  item.status
                                                                ) +
                                                                "\n                                            "
                                                            )
                                                          ]
                                                        )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-list-item-subtitle", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        item.created_at
                                                      )
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  2146523569
                                )
                              })
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/DohledH265Component.vue?vue&type=template&id=706ba6ae&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Dohled/DohledH265Component.vue?vue&type=template&id=706ba6ae& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _vm.dohled != null
        ? _c(
            "v-card",
            { attrs: { flat: "", color: "#F5F5F7" } },
            [
              _c("v-card-subtitle", [
                _c("strong", [
                  _vm._v("\n                Informace z dohledu\n            ")
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
                        [
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c("span", [
                              _vm._v(
                                "\n                            Stav Streamu:\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _vm.dohled.streamStatus != "success"
                              ? _c("span", [
                                  _c("strong", { staticClass: "red--text" }, [
                                    _vm._v(
                                      "\n                                Problém se streamem\n                            "
                                    )
                                  ])
                                ])
                              : _c("span", [
                                  _c("strong", { staticClass: "green--text" }, [
                                    _vm._v(
                                      "\n                                Stream je v pořádku\n                            "
                                    )
                                  ])
                                ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            [
                              _c("v-img", {
                                attrs: {
                                  "lazy-src": _vm.dohled.img,
                                  "max-height": "150",
                                  "max-width": "250",
                                  src: _vm.dohled.img
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            [
                              _c("strong", [
                                _vm._v(
                                  "\n                            Historie:\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-virtual-scroll", {
                                attrs: {
                                  items: _vm.dohled.history,
                                  "item-height": 50,
                                  height: "100"
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var item = ref.item
                                        return [
                                          _c(
                                            "v-list-item",
                                            [
                                              _c(
                                                "v-list-item-content",
                                                [
                                                  _c("v-list-item-title", [
                                                    item.status === "stream_ok"
                                                      ? _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "green--text"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                Stream je v pořádku\n                                            "
                                                            )
                                                          ]
                                                        )
                                                      : _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "red--text"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  item.status
                                                                ) +
                                                                "\n                                            "
                                                            )
                                                          ]
                                                        )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-list-item-subtitle", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        item.created_at
                                                      )
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  2146523569
                                )
                              })
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/TestDohledComponent.vue?vue&type=template&id=07e25e40&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Dohled/TestDohledComponent.vue?vue&type=template&id=07e25e40& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _vm.dohled != null
        ? _c(
            "v-card",
            { attrs: { flat: "", color: "#F5F5F7" } },
            [
              _c("v-card-subtitle", [
                _c("strong", [
                  _vm._v("\n                Informace z dohledu\n            ")
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
                        [
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c("span", [
                              _vm._v(
                                "\n                            Stav Streamu:\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _vm.dohled.streamStatus != "success"
                              ? _c("span", [
                                  _c("strong", { staticClass: "red--text" }, [
                                    _vm._v(
                                      "\n                                Problém se streamem\n                            "
                                    )
                                  ])
                                ])
                              : _c("span", [
                                  _c("strong", { staticClass: "green--text" }, [
                                    _vm._v(
                                      "\n                                Stream je v pořádku\n                            "
                                    )
                                  ])
                                ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            [
                              _c("v-img", {
                                attrs: {
                                  "lazy-src": _vm.dohled.img,
                                  "max-height": "150",
                                  "max-width": "250",
                                  src: _vm.dohled.img
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            [
                              _c("strong", [
                                _vm._v(
                                  "\n                            Historie:\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-virtual-scroll", {
                                attrs: {
                                  items: _vm.dohled.history,
                                  "item-height": 50,
                                  height: "100"
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var item = ref.item
                                        return [
                                          _c(
                                            "v-list-item",
                                            [
                                              _c(
                                                "v-list-item-content",
                                                [
                                                  _c("v-list-item-title", [
                                                    item.status === "stream_ok"
                                                      ? _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "green--text"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                Stream je v pořádku\n                                            "
                                                            )
                                                          ]
                                                        )
                                                      : _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "red--text"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  item.status
                                                                ) +
                                                                "\n                                            "
                                                            )
                                                          ]
                                                        )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-list-item-subtitle", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        item.created_at
                                                      )
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  2146523569
                                )
                              })
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_backupComponent.vue?vue&type=template&id=256e0dd2&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Multicast/_backupComponent.vue?vue&type=template&id=256e0dd2& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
        "v-col",
        [
          _vm.backup != null
            ? _c(
                "v-card",
                {
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
                      _vm._v("\n                    Záloha\n                ")
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
                          _vm.backup != null
                            ? _c(
                                "v-row",
                                [
                                  _c("v-col", { attrs: { cols: "12" } }, [
                                    _c(
                                      "span",
                                      { staticClass: "ml-6" },
                                      [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(_vm.backup.name) +
                                            "\n                                "
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-tooltip",
                                          {
                                            attrs: { bottom: "" },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "activator",
                                                  fn: function(ref) {
                                                    var on = ref.on
                                                    return [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            small: "",
                                                            icon: ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            _vm._g(
                                                              {
                                                                attrs: {
                                                                  small: ""
                                                                }
                                                              },
                                                              on
                                                            ),
                                                            [
                                                              _vm._v(
                                                                "\n                                                mdi-information\n                                            "
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              false,
                                              4040057585
                                            )
                                          },
                                          [
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                "Rychlá informace o zařízení"
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.backup.ip != null
                                          ? _c(
                                              "v-tooltip",
                                              {
                                                attrs: { bottom: "" },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                small: "",
                                                                icon: "",
                                                                link: "",
                                                                href:
                                                                  "http://" +
                                                                  _vm.backup.ip,
                                                                target: "_blank"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                _vm._g(
                                                                  {
                                                                    attrs: {
                                                                      small: ""
                                                                    }
                                                                  },
                                                                  on
                                                                ),
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                mdi-earth\n                                            "
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  false,
                                                  278547372
                                                )
                                              },
                                              [
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    "Přímý proklik na zařízení"
                                                  )
                                                ])
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "v-tooltip",
                                          {
                                            attrs: { bottom: "" },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "activator",
                                                  fn: function(ref) {
                                                    var on = ref.on
                                                    return [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            small: "",
                                                            icon: "",
                                                            link: "",
                                                            to:
                                                              "/device/" +
                                                              _vm.backup.id,
                                                            target: "_blank"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            _vm._g(
                                                              {
                                                                attrs: {
                                                                  small: ""
                                                                }
                                                              },
                                                              on
                                                            ),
                                                            [
                                                              _vm._v(
                                                                "\n                                                mdi-arrow-right\n                                            "
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              false,
                                              2465206110
                                            )
                                          },
                                          [
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                "Proklik na zařízení v rámci\n                                        dokumentace"
                                              )
                                            ])
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm.backup.interfaces != null
                                      ? _c(
                                          "span",
                                          { staticClass: "ml-6" },
                                          [
                                            _vm._v(
                                              "\n                                Vazba:\n                                "
                                            ),
                                            _vm._l(
                                              _vm.backup.interfaces,
                                              function(backupInterface) {
                                                return _c(
                                                  "span",
                                                  { key: backupInterface.id },
                                                  [
                                                    _vm._v(
                                                      "\n                                    " +
                                                        _vm._s(
                                                          backupInterface.interface
                                                        ) +
                                                        " ,\n                                "
                                                    )
                                                  ]
                                                )
                                              }
                                            )
                                          ],
                                          2
                                        )
                                      : _vm._e()
                                  ])
                                ],
                                1
                              )
                            : _c("v-row", [
                                _c("strong", { staticClass: "blue--text" }, [
                                  _vm._v(
                                    "\n                            Není nadefinována záloha\n                        "
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
                          return _vm.openEditDialog()
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    {
                      on: {
                        click: function($event) {
                          return _vm.removeData()
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
                        _vm._v(
                          "\n                        Odebrat\n                    "
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
          _vm.backup != null
            ? _c(
                "v-row",
                { attrs: { justify: "center" } },
                [
                  _c(
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "1000px" },
                      model: {
                        value: _vm.editDialog,
                        callback: function($$v) {
                          _vm.editDialog = $$v
                        },
                        expression: "editDialog"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", [
                            _c("span", { staticClass: "headline" }, [
                              _vm._v("Editace záložního příjmu kanálu")
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
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-combobox", {
                                            attrs: {
                                              dense: "",
                                              label:
                                                "Zařízení na kterých je možné přijímat kanály",
                                              items: _vm.items,
                                              required: "",
                                              clearable: ""
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.GetMoreInformationAboutThisDevice(
                                                  _vm.backup.name
                                                )
                                              }
                                            },
                                            model: {
                                              value: _vm.backup.name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.backup,
                                                  "name",
                                                  $$v
                                                )
                                              },
                                              expression: "backup.name"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm.deviceInformation != null
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _vm.deviceInformation
                                                .outputInterfaces != null
                                                ? _c("v-combobox", {
                                                    attrs: {
                                                      items:
                                                        _vm.deviceInformation
                                                          .outputInterfaces,
                                                      "item-text": "interface",
                                                      "item-value": "id",
                                                      label:
                                                        "Vyberte interface / interfacy, kde se kanál nalézá",
                                                      hint:
                                                        "Vyberte interface / interfacy, kde se kanál nalézá",
                                                      clearable: "",
                                                      multiple: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.backup.interfaces,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.backup,
                                                          "interfaces",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "backup.interfaces"
                                                    }
                                                  })
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        : _vm._e()
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
                                    "\n                            Zavřít\n                        "
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
                                      return _vm.saveData()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            Uložit\n                        "
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
            : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_calendarComponent.vue?vue&type=template&id=f69fb7ca&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Multicast/_calendarComponent.vue?vue&type=template&id=f69fb7ca& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
        "v-card",
        { attrs: { flat: "", color: "#F5F5F7", height: "250" } },
        [
          _c("v-card-subtitle", [
            _c("strong", [_vm._v("\n                Kalendář\n            ")])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: " text--center" },
            [
              _vm.events != null
                ? _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "2" } },
                            [
                              _c("strong", [
                                _vm._v(
                                  "\n                             Den začátku\n                         "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "2" } },
                            [
                              _c("strong", [
                                _vm._v(
                                  "\n                            Čas začátku\n                        "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "2" } },
                            [
                              _c("strong", [
                                _vm._v(
                                  "\n                            Den konce\n                        "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "2" } },
                            [
                              _c("strong", [
                                _vm._v(
                                  "\n                            Čas konce\n                        "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "2" } },
                            [
                              _c("strong", [
                                _vm._v(
                                  "\n                            Popis\n                        "
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "2" } },
                            [
                              _c("strong", [
                                _vm._v(
                                  "\n                            Akce\n                        "
                                )
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.events, function(event) {
                        return _c(
                          "v-row",
                          { key: event.id },
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "12", md: "2" } },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(event.start_day) +
                                    "\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "12", md: "2" } },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(event.start_time) +
                                    "\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "12", md: "2" } },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(event.end_day) +
                                    "\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "12", md: "2" } },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(event.end_time) +
                                    "\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "12", md: "2" } },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(event.note) +
                                    "\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "12", md: "2" } },
                              [
                                _c(
                                  "v-icon",
                                  { attrs: { small: "", color: "red" } },
                                  [
                                    _vm._v(
                                      "\n                            mdi-delete\n                        "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                : _c("v-container", [
                    _vm._v(
                      " \n                Neexistuje žádná událost\n            "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_multicastComponent.vue?vue&type=template&id=685562d9&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Multicast/_multicastComponent.vue?vue&type=template&id=685562d9& ***!
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
    "v-main",
    [
      _vm.multicasts != null
        ? _c(
            "v-card",
            {
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
                    "\n                Zdrojové informace o kanálů\n            "
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
                    _vm._l(_vm.multicasts, function(multicast) {
                      return _c(
                        "v-row",
                        { key: multicast.id },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "3" } },
                            [
                              _c("strong", [_vm._v("Zdroj: ")]),
                              _vm._v(
                                "\n                        " +
                                  _vm._s(multicast.zdroj) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "3" } },
                            [
                              _c("strong", [_vm._v("Multicastová IP: ")]),
                              _vm._v(
                                "\n                        " +
                                  _vm._s(multicast.multicast_ip) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "3" } },
                            [
                              _c("strong", [_vm._v("IP k STB:")]),
                              _vm._v(
                                "\n                        " +
                                  _vm._s(multicast.stb_ip) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "3" } },
                            [
                              _c("strong", [_vm._v("Typ:")]),
                              _vm._v(" "),
                              _c("span", {
                                class: {
                                  "green--text":
                                    multicast.isBackup === "primar",
                                  "orange--text":
                                    multicast.isBackup === "backup"
                                },
                                domProps: {
                                  textContent: _vm._s(multicast.isBackup)
                                }
                              })
                            ]
                          )
                        ],
                        1
                      )
                    }),
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
                      return _vm.openMulticastEditDialog()
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
          _vm.editData != null
            ? _c(
                "v-dialog",
                {
                  attrs: { persistent: "", "max-width": "1000px" },
                  model: {
                    value: _vm.editMulticastSources,
                    callback: function($$v) {
                      _vm.editMulticastSources = $$v
                    },
                    expression: "editMulticastSources"
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
                          _c(
                            "v-container",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c("v-combobox", {
                                        attrs: {
                                          dense: "",
                                          label: "Zdroj multicastu",
                                          "item-text": "zdroj",
                                          "item-value": "id",
                                          items: _vm.sources,
                                          required: "",
                                          clearable: ""
                                        },
                                        model: {
                                          value: _vm.editData.multicastZdroj,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editData,
                                              "multicastZdroj",
                                              $$v
                                            )
                                          },
                                          expression: "editData.multicastZdroj"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          label: "Multicastová IP",
                                          required: ""
                                        },
                                        model: {
                                          value: _vm.editData.multicast_ip,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editData,
                                              "multicast_ip",
                                              $$v
                                            )
                                          },
                                          expression: "editData.multicast_ip"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          label: "IP k STB",
                                          required: ""
                                        },
                                        model: {
                                          value: _vm.editData.stb_ip,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editData,
                                              "stb_ip",
                                              $$v
                                            )
                                          },
                                          expression: "editData.stb_ip"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c("v-combobox", {
                                        attrs: {
                                          dense: "",
                                          label: "Záložní zdroj multicastu",
                                          "item-text": "zdroj",
                                          "item-value": "id",
                                          items: _vm.sources,
                                          required: "",
                                          clearable: ""
                                        },
                                        model: {
                                          value:
                                            _vm.editData.backup_multicastZdroj,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editData,
                                              "backup_multicastZdroj",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "editData.backup_multicastZdroj"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          label: "Multicastová IP",
                                          required: ""
                                        },
                                        model: {
                                          value:
                                            _vm.editData.backup_multicast_ip,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editData,
                                              "backup_multicast_ip",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "editData.backup_multicast_ip"
                                        }
                                      })
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
                                  _vm.editMulticastSources = false
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
                                  return _vm.savedata()
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
            : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_multiplexorComponent.vue?vue&type=template&id=74825666&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Multicast/_multiplexorComponent.vue?vue&type=template&id=74825666& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
        "v-col",
        [
          _vm.multiplexor != null
            ? _c(
                "v-card",
                {
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
                        "\n                    Multiplexer\n                "
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
                          _vm.multiplexor != null
                            ? _c(
                                "v-row",
                                [
                                  _c("v-col", { attrs: { cols: "12" } }, [
                                    _vm.multiplexor.name != null
                                      ? _c(
                                          "span",
                                          { staticClass: "ml-6" },
                                          [
                                            _vm._v(
                                              "\n                                " +
                                                _vm._s(_vm.multiplexor.name) +
                                                "\n                                "
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-tooltip",
                                              {
                                                attrs: { bottom: "" },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                small: "",
                                                                icon: ""
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                _vm._g(
                                                                  {
                                                                    attrs: {
                                                                      small: ""
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        _vm.show = !_vm.show
                                                                      }
                                                                    }
                                                                  },
                                                                  on
                                                                ),
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                mdi-information\n                                            "
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  false,
                                                  2363317701
                                                )
                                              },
                                              [
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  [
                                                    _vm.multiplexor.ip !=
                                                      null &&
                                                    _vm.multiplexor
                                                      .login_user != null &&
                                                    _vm.multiplexor
                                                      .login_password != null
                                                      ? _c(
                                                          "v-container",
                                                          [
                                                            _c("v-row", [
                                                              _c("strong", [
                                                                _vm._v(
                                                                  "\n                                                    IP:\n                                                "
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "ml-2"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                    " +
                                                                      _vm._s(
                                                                        _vm
                                                                          .multiplexor
                                                                          .ip
                                                                      ) +
                                                                      "\n                                                "
                                                                  )
                                                                ]
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-row",
                                                              {
                                                                staticClass:
                                                                  "mt-2"
                                                              },
                                                              [
                                                                _c("strong", [
                                                                  _vm._v(
                                                                    "Přístup:"
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "ml-2"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                    " +
                                                                        _vm._s(
                                                                          _vm
                                                                            .multiplexor
                                                                            .login_user
                                                                        ) +
                                                                        "\n                                                    /\n                                                    " +
                                                                        _vm._s(
                                                                          _vm
                                                                            .multiplexor
                                                                            .login_password
                                                                        ) +
                                                                        "\n                                                "
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      : _c("v-container", [
                                                          _vm._v(
                                                            "\n                                            Nejsou žádné detailní informace\n                                        "
                                                          )
                                                        ])
                                                  ],
                                                  1
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-tooltip",
                                              {
                                                attrs: { bottom: "" },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                small: "",
                                                                icon: "",
                                                                link: "",
                                                                href:
                                                                  "http://" +
                                                                  _vm
                                                                    .multiplexor
                                                                    .ip,
                                                                target: "_blank"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                _vm._g(
                                                                  {
                                                                    attrs: {
                                                                      small: ""
                                                                    }
                                                                  },
                                                                  on
                                                                ),
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                mdi-earth\n                                            "
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  false,
                                                  2371178103
                                                )
                                              },
                                              [
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    "Přímý proklik na zařízení"
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-tooltip",
                                              {
                                                attrs: { bottom: "" },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                small: "",
                                                                icon: "",
                                                                link: "",
                                                                to:
                                                                  "/device/" +
                                                                  _vm
                                                                    .multiplexor
                                                                    .id,
                                                                target: "_blank"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                _vm._g(
                                                                  {
                                                                    attrs: {
                                                                      small: ""
                                                                    }
                                                                  },
                                                                  on
                                                                ),
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                mdi-arrow-right\n                                            "
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  false,
                                                  1548544741
                                                )
                                              },
                                              [
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    "Proklik na zařízení v rámci\n                                        dokumentace"
                                                  )
                                                ])
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ])
                                ],
                                1
                              )
                            : _c("v-row", [
                                _c("strong", { staticClass: "blue--text" }, [
                                  _vm._v(
                                    "\n                            Není nadefinován\n                        "
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
                          return _vm.openEditMultiplexor()
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    {
                      on: {
                        click: function($event) {
                          return _vm.removeMultiplexor()
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
                        _vm._v(
                          "\n                        Odebrat\n                    "
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
          _vm.multiplexor != null
            ? _c(
                "v-row",
                { attrs: { justify: "center" } },
                [
                  _c(
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "1000px" },
                      model: {
                        value: _vm.editMultiplexor,
                        callback: function($$v) {
                          _vm.editMultiplexor = $$v
                        },
                        expression: "editMultiplexor"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", [
                            _c("span", { staticClass: "headline" }, [
                              _vm._v("Editace multiplexoru")
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
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-combobox", {
                                            attrs: {
                                              dense: "",
                                              label: "Multiplexor",
                                              items: _vm.items,
                                              required: "",
                                              clearable: ""
                                            },
                                            model: {
                                              value: _vm.multiplexor.name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.multiplexor,
                                                  "name",
                                                  $$v
                                                )
                                              },
                                              expression: "multiplexor.name"
                                            }
                                          })
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
                                    "\n                            Zavřít\n                        "
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
                                      return _vm.savedata()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            Uložit\n                        "
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
            : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_noteComponent.vue?vue&type=template&id=351425e7&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Multicast/_noteComponent.vue?vue&type=template&id=351425e7& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        "v-card",
        { attrs: { flat: "", color: "#F5F5F7", height: "250" } },
        [
          _c(
            "v-card-subtitle",
            {
              on: {
                contextmenu: function($event) {
                  return _vm.showCreate($event)
                }
              }
            },
            [_c("strong", [_vm._v("\n                Poznámky\n            ")])]
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: " text--center" },
            [
              _c(
                "v-container",
                [
                  _vm.notes === null
                    ? _c("v-row", [
                        _vm._v(
                          "\n                    Neexistuje žádná poznámka\n                "
                        )
                      ])
                    : _c(
                        "v-row",
                        [
                          _c("v-virtual-scroll", {
                            attrs: {
                              items: _vm.notes,
                              "item-height": 60,
                              height: "150"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c(
                                      "v-list-item",
                                      { attrs: { dense: "" } },
                                      [
                                        _c(
                                          "v-list-item-content",
                                          { staticClass: "pt-1" },
                                          [
                                            _c(
                                              "v-list-item-title",
                                              [
                                                _c("v-textarea", {
                                                  attrs: {
                                                    dense: "",
                                                    readonly: "",
                                                    filled: "",
                                                    "prepend-icon":
                                                      "mdi-comment",
                                                    "auto-grow": "",
                                                    rows: "1",
                                                    value: item.poznamka
                                                  },
                                                  on: {
                                                    contextmenu: function(
                                                      $event
                                                    ) {
                                                      return _vm.show($event)
                                                    }
                                                  }
                                                }),
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
                                                          [
                                                            _c(
                                                              "v-list-item-icon",
                                                              [
                                                                _c(
                                                                  "v-icon",
                                                                  {
                                                                    attrs: {
                                                                      "x-small":
                                                                        ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "mdi-delete"
                                                                    )
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-list-item-title",
                                                              [
                                                                _vm._v(
                                                                  "\n                                                        Odebrat\n                                                    "
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
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ])
                          })
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
                "position-x": _vm.x2,
                "position-y": _vm.y2,
                absolute: "",
                "offset-y": ""
              },
              model: {
                value: _vm.showMenuCreate,
                callback: function($$v) {
                  _vm.showMenuCreate = $$v
                },
                expression: "showMenuCreate"
              }
            },
            [
              _c(
                "v-list",
                { attrs: { dense: "" } },
                [
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-icon",
                        [
                          _c("v-icon", { attrs: { "x-small": "" } }, [
                            _vm._v("mdi-plus")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-item-title", [
                        _vm._v(
                          "\n                        Nová poznámka\n                    "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_sourceComponent.vue?vue&type=template&id=268d5f5e&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Multicast/_sourceComponent.vue?vue&type=template&id=268d5f5e& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
        "v-col",
        [
          _vm.prijem != null
            ? _c(
                "v-card",
                {
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
                      _vm._v("\n                    Příjem\n                ")
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
                          _vm.prijem != null
                            ? _c(
                                "v-row",
                                [
                                  _c("v-col", { attrs: { cols: "12" } }, [
                                    _c(
                                      "span",
                                      { staticClass: "ml-6" },
                                      [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(_vm.prijem.name) +
                                            "\n                                "
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-tooltip",
                                          {
                                            attrs: { bottom: "" },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "activator",
                                                  fn: function(ref) {
                                                    var on = ref.on
                                                    return [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            small: "",
                                                            icon: ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            _vm._g(
                                                              {
                                                                attrs: {
                                                                  small: ""
                                                                }
                                                              },
                                                              on
                                                            ),
                                                            [
                                                              _vm._v(
                                                                "\n                                                mdi-information\n                                            "
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              false,
                                              4040057585
                                            )
                                          },
                                          [
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                "Rychlá informace o zařízení"
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.prijem.ip != null
                                          ? _c(
                                              "v-tooltip",
                                              {
                                                attrs: { bottom: "" },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                small: "",
                                                                icon: "",
                                                                link: "",
                                                                href:
                                                                  "http://" +
                                                                  _vm.prijem.ip,
                                                                target: "_blank"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                _vm._g(
                                                                  {
                                                                    attrs: {
                                                                      small: ""
                                                                    }
                                                                  },
                                                                  on
                                                                ),
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                mdi-earth\n                                            "
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  false,
                                                  660878411
                                                )
                                              },
                                              [
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    "Přímý proklik na zařízení"
                                                  )
                                                ])
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "v-tooltip",
                                          {
                                            attrs: { bottom: "" },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "activator",
                                                  fn: function(ref) {
                                                    var on = ref.on
                                                    return [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            small: "",
                                                            icon: "",
                                                            link: "",
                                                            to:
                                                              "/device/" +
                                                              _vm.prijem.id,
                                                            target: "_blank"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            _vm._g(
                                                              {
                                                                attrs: {
                                                                  small: ""
                                                                }
                                                              },
                                                              on
                                                            ),
                                                            [
                                                              _vm._v(
                                                                "\n                                                mdi-arrow-right\n                                            "
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              false,
                                              1055298137
                                            )
                                          },
                                          [
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                "Proklik na zařízení v rámci\n                                        dokumentace"
                                              )
                                            ])
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm.prijem.interfaces != null
                                      ? _c(
                                          "span",
                                          { staticClass: "ml-6" },
                                          [
                                            _vm._v(
                                              "\n                                Vazba:\n                                "
                                            ),
                                            _vm._l(
                                              _vm.prijem.interfaces,
                                              function(prijemInterface) {
                                                return _c(
                                                  "span",
                                                  { key: prijemInterface.id },
                                                  [
                                                    _vm._v(
                                                      "\n                                    " +
                                                        _vm._s(
                                                          prijemInterface.interface
                                                        ) +
                                                        " ,\n                                "
                                                    )
                                                  ]
                                                )
                                              }
                                            )
                                          ],
                                          2
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _vm.prijem.path != null
                                    ? _c(
                                        "v-col",
                                        {
                                          staticClass: "mt-1",
                                          attrs: { cols: "12" }
                                        },
                                        [
                                          _c("span", { staticClass: "ml-6" }, [
                                            _c("strong", [
                                              _vm._v(
                                                "\n                                    Absolutní cesta ke scriptu: \n                                "
                                              )
                                            ]),
                                            _vm._v(
                                              "\n                                " +
                                                _vm._s(_vm.prijem.path) +
                                                "\n                            "
                                            )
                                          ])
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.childrenData != null
                                    ? _c(
                                        "v-col",
                                        {
                                          staticClass: "mt-1",
                                          attrs: { cols: "12" }
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "ml-6" },
                                            [
                                              _c("strong", [
                                                _vm._v(" Tvorba multicastu: ")
                                              ]),
                                              _vm._v(
                                                _vm._s(_vm.childrenData.name) +
                                                  "\n                                "
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-tooltip",
                                                {
                                                  attrs: { bottom: "" },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "activator",
                                                        fn: function(ref) {
                                                          var on = ref.on
                                                          return [
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  small: "",
                                                                  icon: ""
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-icon",
                                                                  _vm._g(
                                                                    {
                                                                      attrs: {
                                                                        small:
                                                                          ""
                                                                      }
                                                                    },
                                                                    on
                                                                  ),
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                mdi-information\n                                            "
                                                                    )
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          ]
                                                        }
                                                      }
                                                    ],
                                                    null,
                                                    false,
                                                    4040057585
                                                  )
                                                },
                                                [
                                                  _vm._v(" "),
                                                  _c("span", [
                                                    _vm._v(
                                                      "Rychlá informace o zařízení"
                                                    )
                                                  ])
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm.childrenData.ip != null
                                                ? _c(
                                                    "v-tooltip",
                                                    {
                                                      attrs: { bottom: "" },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "activator",
                                                            fn: function(ref) {
                                                              var on = ref.on
                                                              return [
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    attrs: {
                                                                      small: "",
                                                                      icon: "",
                                                                      link: "",
                                                                      href:
                                                                        "http://" +
                                                                        _vm
                                                                          .childrenData
                                                                          .ip,
                                                                      target:
                                                                        "_blank"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      _vm._g(
                                                                        {
                                                                          attrs: {
                                                                            small:
                                                                              ""
                                                                          }
                                                                        },
                                                                        on
                                                                      ),
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                                mdi-earth\n                                            "
                                                                        )
                                                                      ]
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]
                                                            }
                                                          }
                                                        ],
                                                        null,
                                                        false,
                                                        4163236929
                                                      )
                                                    },
                                                    [
                                                      _vm._v(" "),
                                                      _c("span", [
                                                        _vm._v(
                                                          "Přímý proklik na zařízení"
                                                        )
                                                      ])
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "v-tooltip",
                                                {
                                                  attrs: { bottom: "" },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "activator",
                                                        fn: function(ref) {
                                                          var on = ref.on
                                                          return [
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  small: "",
                                                                  icon: "",
                                                                  link: "",
                                                                  to:
                                                                    "/device/" +
                                                                    _vm
                                                                      .childrenData
                                                                      .id,
                                                                  target:
                                                                    "_blank"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-icon",
                                                                  _vm._g(
                                                                    {
                                                                      attrs: {
                                                                        small:
                                                                          ""
                                                                      }
                                                                    },
                                                                    on
                                                                  ),
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                mdi-arrow-right\n                                            "
                                                                    )
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          ]
                                                        }
                                                      }
                                                    ],
                                                    null,
                                                    false,
                                                    737019411
                                                  )
                                                },
                                                [
                                                  _vm._v(" "),
                                                  _c("span", [
                                                    _vm._v(
                                                      "Proklik na zařízení v rámci\n                                        dokumentace"
                                                    )
                                                  ])
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            : _c("v-row", [
                                _c("strong", { staticClass: "blue--text" }, [
                                  _vm._v(
                                    "\n                            Není nadefinován\n                        "
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
                          return _vm.openEditDialog()
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    {
                      on: {
                        click: function($event) {
                          return _vm.removeData()
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
                        _vm._v(
                          "\n                        Odebrat\n                    "
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
          _vm.prijem != null
            ? _c(
                "v-row",
                { attrs: { justify: "center" } },
                [
                  _c(
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "1000px" },
                      model: {
                        value: _vm.editDialog,
                        callback: function($$v) {
                          _vm.editDialog = $$v
                        },
                        expression: "editDialog"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", [
                            _c("span", { staticClass: "headline" }, [
                              _vm._v("Editace příjmu kanálu")
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
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-combobox", {
                                            attrs: {
                                              dense: "",
                                              label:
                                                "Zařízení na kterých je možné přijímat kanály",
                                              items: _vm.items,
                                              required: "",
                                              clearable: ""
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.GetMoreInformationAboutThisDevice(
                                                  _vm.prijem.name
                                                )
                                              }
                                            },
                                            model: {
                                              value: _vm.prijem.name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.prijem,
                                                  "name",
                                                  $$v
                                                )
                                              },
                                              expression: "prijem.name"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm.hasLinuxPath != null
                                        ? _c(
                                            "v-col",
                                            {
                                              staticClass: "mt-1",
                                              attrs: { cols: "12" }
                                            },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "ml-6" },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Cesta ke scriptu"
                                                    },
                                                    model: {
                                                      value: _vm.prijem.path,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.prijem,
                                                          "path",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "prijem.path"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.deviceInformation != null
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _vm.deviceInformation
                                                .outputInterfaces != null
                                                ? _c("v-combobox", {
                                                    attrs: {
                                                      items:
                                                        _vm.deviceInformation
                                                          .outputInterfaces,
                                                      "item-text": "interface",
                                                      "item-value": "id",
                                                      label:
                                                        "Vyberte interface / interfacy, kde se kanál nalézá",
                                                      hint:
                                                        "Vyberte interface / interfacy, kde se kanál nalézá",
                                                      clearable: "",
                                                      multiple: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.prijem.interfaces,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.prijem,
                                                          "interfaces",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "prijem.interfaces"
                                                    }
                                                  })
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.hasChildren != null
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-combobox", {
                                                attrs: {
                                                  items: _vm.childrens,
                                                  "item-text": "interface",
                                                  "item-value": "id",
                                                  label: "Vyberte potomka.",
                                                  hint: "Potomek",
                                                  clearable: ""
                                                },
                                                model: {
                                                  value: _vm.children,
                                                  callback: function($$v) {
                                                    _vm.children = $$v
                                                  },
                                                  expression: "children"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e()
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
                                    "\n                            Zavřít\n                        "
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
                                      return _vm.saveData()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            Uložit\n                        "
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
            : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/MulticastComponent.vue?vue&type=template&id=3de650ae&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/MulticastComponent.vue?vue&type=template&id=3de650ae& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
              _c("h2", [_vm._v(_vm._s(_vm.channelName))]),
              _vm._v(" "),
              _c("v-divider", { attrs: { inline: "" } })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: " mt-6" },
            [_c("v-col", [_c("multicast-component")], 1)],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mt-4" },
            [
              _c("multiplexor-component"),
              _vm._v(" "),
              _c("source-component"),
              _vm._v(" "),
              _c("backup-component")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mt-6" },
            [
              _c("v-col", [_c("calendar-component")], 1),
              _vm._v(" "),
              _c("v-col", [_c("note-component")], 1)
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mt-" },
            [_c("v-col", [_c("dohled-component")], 1)],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue?vue&type=template&id=db085144&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue?vue&type=template&id=db085144& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
      _vm.chunkStoreId != "0"
        ? _c(
            "v-card",
            {
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
                  _vm._v("\n                Chunk store id\n            ")
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
                        _c(
                          "span",
                          { staticClass: "ml-6" },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.chunkStoreId) +
                                "\n\n                        "
                            ),
                            _vm._v(" "),
                            _c(
                              "v-tooltip",
                              {
                                attrs: { bottom: "" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-btn",
                                            { attrs: { small: "", icon: "" } },
                                            [
                                              _c(
                                                "v-icon",
                                                _vm._g(
                                                  { attrs: { small: "" } },
                                                  on
                                                ),
                                                [
                                                  _vm._v(
                                                    "\n                                        mdi-information\n                                    "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  1415726833
                                )
                              },
                              [
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v("Informace o chunk Store id")
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "ml-6", attrs: { width: "95%" } }),
              _vm._v(" "),
              _c("v-card-subtitle", [
                _c("strong", [
                  _vm._v("\n                Výstupní kvality\n            ")
                ])
              ]),
              _vm._v(" "),
              _vm.kvalityOutput != null
                ? _c(
                    "v-card-text",
                    { staticClass: "ml-12 text--center" },
                    [
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        _vm._l(_vm.kvalityOutput, function(output) {
                          return _c(
                            "v-list-item",
                            { key: output.output },
                            [
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-subtitle", [
                                    _c("span", [
                                      _c("strong", [
                                        _vm._v(
                                          " " + _vm._s(output.format) + "p: "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "ml-3" }, [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(output.output) +
                                          "\n                            "
                                      )
                                    ])
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("v-divider", { staticClass: "ml-6", attrs: { width: "95%" } }),
              _vm._v(" "),
              _vm.m3u8s != null
                ? _c("v-card-subtitle", [
                    _c("strong", [
                      _vm._v("\n                Výstup v m3u8\n            ")
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.m3u8s != null
                ? _c(
                    "v-card-text",
                    { staticClass: "ml-1 text--center" },
                    [
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c(
                            "v-list-item",
                            [
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-subtitle", [
                                    _c("span", [
                                      _c("strong", [
                                        _vm._v(
                                          "\n                                    HLS kdekoliv:\n                                "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "ml-3" }, [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(_vm.m3u8s.kdekoliv) +
                                          "\n                            "
                                      )
                                    ])
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
                            [
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-subtitle", [
                                    _c("span", [
                                      _c("strong", [
                                        _vm._v(
                                          "\n                                    HLS local:\n                                "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "ml-3" }, [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(_vm.m3u8s.local) +
                                          "\n                            "
                                      )
                                    ])
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
                            [
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-subtitle", [
                                    _c("span", [
                                      _c("strong", [
                                        _vm._v(
                                          "\n                                    HLS mobile:\n                                "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "ml-3" }, [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(_vm.m3u8s.mobile) +
                                          "\n                            "
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
                : _vm._e()
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
                      return _vm.openDialog()
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
                      "\n                    Upravit výstupní kvality\n                "
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
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "1000px" },
              model: {
                value: _vm.editDataDialog,
                callback: function($$v) {
                  _vm.editDataDialog = $$v
                },
                expression: "editDataDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Upravení kvalit")
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
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Chunk Store Id" },
                                    model: {
                                      value: _vm.chunkStoreId,
                                      callback: function($$v) {
                                        _vm.chunkStoreId = $$v
                                      },
                                      expression: "chunkStoreId"
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
                                    attrs: { label: "URL pro 1080p" },
                                    model: {
                                      value: _vm.kvalityForDialog.p1080,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.kvalityForDialog,
                                          "p1080",
                                          $$v
                                        )
                                      },
                                      expression: "kvalityForDialog.p1080"
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
                                    attrs: { label: "URL pro 720p" },
                                    model: {
                                      value: _vm.kvalityForDialog.p720,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.kvalityForDialog,
                                          "p720",
                                          $$v
                                        )
                                      },
                                      expression: "kvalityForDialog.p720"
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
                                    attrs: { label: "URL pro 720p" },
                                    model: {
                                      value: _vm.kvalityForDialog.p576,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.kvalityForDialog,
                                          "p576",
                                          $$v
                                        )
                                      },
                                      expression: "kvalityForDialog.p576"
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
                                    attrs: { label: "m3u8 pro HLS kdekoliv" },
                                    model: {
                                      value: _vm.m3u8s.kdekoliv,
                                      callback: function($$v) {
                                        _vm.$set(_vm.m3u8s, "kdekoliv", $$v)
                                      },
                                      expression: "m3u8s.kdekoliv"
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
                                    attrs: { label: "m3u8 pro HLS local" },
                                    model: {
                                      value: _vm.m3u8s.local,
                                      callback: function($$v) {
                                        _vm.$set(_vm.m3u8s, "local", $$v)
                                      },
                                      expression: "m3u8s.local"
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
                                    attrs: { label: "m3u8 pro HLS mobile" },
                                    model: {
                                      value: _vm.m3u8s.mobile,
                                      callback: function($$v) {
                                        _vm.$set(_vm.m3u8s, "mobile", $$v)
                                      },
                                      expression: "m3u8s.mobile"
                                    }
                                  })
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
                              return _vm.savedata()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue?vue&type=template&id=76ee10b8&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue?vue&type=template&id=76ee10b8& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
      _c("v-container", { staticClass: "ml-3", attrs: { fluid: "" } }, [
        _c(
          "div",
          [
            _c(
              "h2",
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.channelName) +
                    " - H264\n                "
                ),
                _c(
                  "v-tooltip",
                  {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u([
                      {
                        key: "activator",
                        fn: function(ref) {
                          var on = ref.on
                          return [
                            _c(
                              "v-icon",
                              _vm._g(
                                {
                                  attrs: { small: "", color: "red" },
                                  on: {
                                    click: function($event) {
                                      return _vm.removeH264()
                                    }
                                  }
                                },
                                on
                              ),
                              [_vm._v("mdi-delete")]
                            )
                          ]
                        }
                      }
                    ])
                  },
                  [_vm._v(" "), _c("span", [_vm._v("Odebrání H264")])]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("v-divider", { attrs: { inline: "" } })
          ],
          1
        ),
        _vm._v(" "),
        _vm.exist === "exist"
          ? _c(
              "div",
              [
                _c(
                  "v-row",
                  { staticClass: "mt-4" },
                  [_c("v-col", [_c("h264info-component")], 1)],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  { staticClass: "mt-4" },
                  [_c("v-col", [_c("transcoder-component")], 1)],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  { staticClass: "mt-4" },
                  [_c("v-col", [_c("dohled-component")], 1)],
                  1
                )
              ],
              1
            )
          : _vm.exist === "notexist"
          ? _c(
              "div",
              { staticClass: "mt-4" },
              [
                _c(
                  "v-alert",
                  {
                    attrs: { type: "warning" },
                    on: {
                      contextmenu: function($event) {
                        return _vm.show($event)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                Tento formát není nastaven\n            "
                    )
                  ]
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
                                return _vm.createOutput()
                              }
                            }
                          },
                          [
                            _c(
                              "v-list-item-icon",
                              [
                                _c("v-icon", { attrs: { "x-small": "" } }, [
                                  _vm._v("mdi-plus")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-list-item-title", [
                              _vm._v(
                                "\n                            Vytvořit H264 výstup\n                        "
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
                _c(
                  "v-row",
                  { attrs: { justify: "center" } },
                  [
                    _c(
                      "v-dialog",
                      {
                        attrs: { persistent: "", "max-width": "1000px" },
                        model: {
                          value: _vm.outputDialog,
                          callback: function($$v) {
                            _vm.outputDialog = $$v
                          },
                          expression: "outputDialog"
                        }
                      },
                      [
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", [
                              _c("span", { staticClass: "headline" }, [
                                _vm._v("Založení H264 ")
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
                                      "v-row",
                                      [
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "12",
                                              md: "6"
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                label: "Chunk Store ID"
                                              },
                                              model: {
                                                value: _vm.chunkStoreId,
                                                callback: function($$v) {
                                                  _vm.chunkStoreId = $$v
                                                },
                                                expression: "chunkStoreId"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "12",
                                              md: "6"
                                            }
                                          },
                                          [
                                            _c("v-combobox", {
                                              attrs: {
                                                label: "Výber transcodéru",
                                                items: _vm.transcoders,
                                                required: "",
                                                clearable: ""
                                              },
                                              model: {
                                                value: _vm.transcoder,
                                                callback: function($$v) {
                                                  _vm.transcoder = $$v
                                                },
                                                expression: "transcoder"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "12",
                                              md: "4"
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: { label: "URL pro 1080p" },
                                              model: {
                                                value: _vm.output1080,
                                                callback: function($$v) {
                                                  _vm.output1080 = $$v
                                                },
                                                expression: "output1080"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "12",
                                              md: "4"
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: { label: "URL pro 720p" },
                                              model: {
                                                value: _vm.output720,
                                                callback: function($$v) {
                                                  _vm.output720 = $$v
                                                },
                                                expression: "output720"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "12",
                                              md: "4"
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: { label: "URL pro 576p" },
                                              model: {
                                                value: _vm.output576,
                                                callback: function($$v) {
                                                  _vm.output576 = $$v
                                                },
                                                expression: "output576"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "12",
                                              md: "4"
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: { label: "HLS kdekoliv" },
                                              model: {
                                                value: _vm.hlsKdekoliv,
                                                callback: function($$v) {
                                                  _vm.hlsKdekoliv = $$v
                                                },
                                                expression: "hlsKdekoliv"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "12",
                                              md: "4"
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: { label: "HLS local" },
                                              model: {
                                                value: _vm.hlsLocal,
                                                callback: function($$v) {
                                                  _vm.hlsLocal = $$v
                                                },
                                                expression: "hlsLocal"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "12",
                                              md: "4"
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: { label: "HLS mobile" },
                                              model: {
                                                value: _vm.hlsMobile,
                                                callback: function($$v) {
                                                  _vm.hlsMobile = $$v
                                                },
                                                expression: "hlsMobile"
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
                                            _c("v-checkbox", {
                                              attrs: {
                                                label:
                                                  "Založení na transcodér a začít transcodovat"
                                              },
                                              model: {
                                                value: _vm.addToTranscoder,
                                                callback: function($$v) {
                                                  _vm.addToTranscoder = $$v
                                                },
                                                expression: "addToTranscoder"
                                              }
                                            })
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
                                      "\n                                Zavřít\n                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      color: "green darken-1",
                                      text: ""
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.savedata()
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
              ],
              1
            )
          : _c("div", { staticClass: " mt-4" }, [
              _c("span", { staticClass: "mt-12" }, [
                _c("i", {
                  staticClass: "fas fa-spinner fa-spin fa-5x",
                  staticStyle: { color: "#EAF0F1" }
                })
              ])
            ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue?vue&type=template&id=4c265365&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue?vue&type=template&id=4c265365& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
        "v-card",
        {
          attrs: { flat: "", color: "#F5F5F7" },
          on: {
            contextmenu: function($event) {
              return _vm.show($event)
            }
          }
        },
        [
          _c("v-card-subtitle", [
            _c("strong", [_vm._v("\n                Transcodér\n            ")])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "ml-12 text--center" },
            [
              _c(
                "v-container",
                [
                  _vm.transcoder != null
                    ? _c(
                        "v-row",
                        [
                          _c(
                            "span",
                            { staticClass: "ml-6" },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.transcoder.name) +
                                  "\n                        "
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return [
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: { small: "", icon: "" }
                                              },
                                              [
                                                _c(
                                                  "v-icon",
                                                  _vm._g(
                                                    { attrs: { small: "" } },
                                                    on
                                                  ),
                                                  [
                                                    _vm._v(
                                                      "\n                                        mdi-information\n                                    "
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    1415726833
                                  )
                                },
                                [
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v("Rychlá informace o zařízení")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _vm.transcoder.ip != null
                                ? _c(
                                    "v-tooltip",
                                    {
                                      attrs: { bottom: "" },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              return [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      small: "",
                                                      icon: "",
                                                      link: "",
                                                      href:
                                                        "http://" +
                                                        _vm.transcoder.ip,
                                                      target: "_blank"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      _vm._g(
                                                        {
                                                          attrs: { small: "" }
                                                        },
                                                        on
                                                      ),
                                                      [
                                                        _vm._v(
                                                          "\n                                        mdi-earth\n                                    "
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        false,
                                        2086414919
                                      )
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v("Přímý proklik na zařízení")
                                      ])
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return [
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  small: "",
                                                  icon: "",
                                                  link: "",
                                                  to:
                                                    "/device/" +
                                                    _vm.transcoder.id,
                                                  target: "_blank"
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-icon",
                                                  _vm._g(
                                                    { attrs: { small: "" } },
                                                    on
                                                  ),
                                                  [
                                                    _vm._v(
                                                      "\n                                        mdi-arrow-right\n                                    "
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    2717286869
                                  )
                                },
                                [
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      "Proklik na zařízení v rámci\n                                dokumentace"
                                    )
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.transcoderStatus != null
                            ? _c(
                                "v-col",
                                { staticClass: "ml-3", attrs: { cols: "12" } },
                                [
                                  _vm.transcoderStatus.streamStatus === "active"
                                    ? _c("span", [
                                        _vm._v(
                                          "\n                        Stav streamu z transcoderu: \n                            "
                                        ),
                                        _c(
                                          "span",
                                          { staticClass: "green--text" },
                                          [
                                            _c("strong", [
                                              _vm._v(
                                                "\n                                    Transcoduje\n                                "
                                              )
                                            ])
                                          ]
                                        )
                                      ])
                                    : _vm.transcoderStatus.streamStatus ===
                                      "STOP"
                                    ? _c("span", [
                                        _c(
                                          "span",
                                          { staticClass: "blue--text" },
                                          [
                                            _c("strong", [
                                              _vm._v(
                                                "\n                                    Transcoding je zastaven\n                                "
                                              )
                                            ])
                                          ]
                                        )
                                      ])
                                    : _c("span", [
                                        _c(
                                          "span",
                                          { staticClass: "red--text" },
                                          [
                                            _c("strong", [
                                              _vm._v(
                                                "\n                                    Problém s transcodingem\n                                "
                                              )
                                            ])
                                          ]
                                        )
                                      ])
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    : _c("v-row", [
                        _c("strong", { staticClass: "blue--text" }, [
                          _vm._v(
                            "\n                        Není nadefinován transcoder\n                    "
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
                      return _vm.openEditDialog()
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
                      "\n                    Změnit transcoder\n                "
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
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "1000px" },
              model: {
                value: _vm.editDataDialog,
                callback: function($$v) {
                  _vm.editDataDialog = $$v
                },
                expression: "editDataDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Změnit transcoder")
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
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-combobox", {
                                    attrs: {
                                      label: "Výber transcodéru",
                                      items: _vm.transcoders,
                                      required: "",
                                      clearable: ""
                                    },
                                    model: {
                                      value: _vm.transcoder.name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.transcoder, "name", $$v)
                                      },
                                      expression: "transcoder.name"
                                    }
                                  })
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
                              return _vm.savedata()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue?vue&type=template&id=5c27c7fe&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue?vue&type=template&id=5c27c7fe& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
      _vm.chunkStoreId != "0"
        ? _c(
            "v-card",
            {
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
                  _vm._v("\n                Chunk store id\n            ")
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
                        _c(
                          "span",
                          { staticClass: "ml-6" },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.chunkStoreId) +
                                "\n\n                        "
                            ),
                            _vm._v(" "),
                            _c(
                              "v-tooltip",
                              {
                                attrs: { bottom: "" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-btn",
                                            { attrs: { small: "", icon: "" } },
                                            [
                                              _c(
                                                "v-icon",
                                                _vm._g(
                                                  { attrs: { small: "" } },
                                                  on
                                                ),
                                                [
                                                  _vm._v(
                                                    "\n                                        mdi-information\n                                    "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  1415726833
                                )
                              },
                              [
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v("Informace o chunk Store id")
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "ml-6", attrs: { width: "95%" } }),
              _vm._v(" "),
              _c("v-card-subtitle", [
                _c("strong", [
                  _vm._v("\n                Výstupní kvality\n            ")
                ])
              ]),
              _vm._v(" "),
              _vm.kvalityOutput != null
                ? _c(
                    "v-card-text",
                    { staticClass: "ml-12 text--center" },
                    [
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        _vm._l(_vm.kvalityOutput, function(output) {
                          return _c(
                            "v-list-item",
                            { key: output.output },
                            [
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-subtitle", [
                                    _c("span", [
                                      _c("strong", [
                                        _vm._v(
                                          " " + _vm._s(output.format) + "p: "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "ml-3" }, [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(output.output) +
                                          "\n                            "
                                      )
                                    ])
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
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
                      return _vm.openDialog()
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
                      "\n                    Upravit výstupní kvality\n                "
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
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "1000px" },
              model: {
                value: _vm.editDataDialog,
                callback: function($$v) {
                  _vm.editDataDialog = $$v
                },
                expression: "editDataDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Upravení kvalit")
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
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "URL pro 1080p" },
                                    model: {
                                      value: _vm.kvalityForDialog.p1080,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.kvalityForDialog,
                                          "p1080",
                                          $$v
                                        )
                                      },
                                      expression: "kvalityForDialog.p1080"
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
                                    attrs: { label: "URL pro 720p" },
                                    model: {
                                      value: _vm.kvalityForDialog.p720,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.kvalityForDialog,
                                          "p720",
                                          $$v
                                        )
                                      },
                                      expression: "kvalityForDialog.p720"
                                    }
                                  })
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
                              return _vm.savedata()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue?vue&type=template&id=f74079f8&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue?vue&type=template&id=f74079f8& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
      _c("v-container", { staticClass: "ml-3", attrs: { fluid: "" } }, [
        _c(
          "div",
          [
            _c("h2", [_vm._v(_vm._s(_vm.channelName) + " - H265")]),
            _vm._v(" "),
            _c("v-divider", { attrs: { inline: "" } })
          ],
          1
        ),
        _vm._v(" "),
        _vm.exist === "exist"
          ? _c(
              "div",
              [
                _c(
                  "v-row",
                  { staticClass: "mt-4" },
                  [_c("v-col", [_c("h265info-component")], 1)],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  { staticClass: "mt-4" },
                  [_c("v-col", [_c("transcoder-component")], 1)],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  { staticClass: "mt-4" },
                  [_c("v-col", [_c("dohled-component")], 1)],
                  1
                )
              ],
              1
            )
          : _vm.exist === "notexist"
          ? _c(
              "div",
              { staticClass: "mt-4" },
              [
                _c(
                  "v-alert",
                  {
                    attrs: { type: "warning" },
                    on: {
                      contextmenu: function($event) {
                        return _vm.show($event)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                Tento formát není nastaven\n            "
                    )
                  ]
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
                                return _vm.createOutput()
                              }
                            }
                          },
                          [
                            _c(
                              "v-list-item-icon",
                              [
                                _c("v-icon", { attrs: { "x-small": "" } }, [
                                  _vm._v("mdi-plus")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-list-item-title", [
                              _vm._v(
                                "\n                            Vytvořit H265 výstup\n                        "
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
                _c(
                  "v-row",
                  { attrs: { justify: "center" } },
                  [
                    _c(
                      "v-dialog",
                      {
                        attrs: { persistent: "", "max-width": "1000px" },
                        model: {
                          value: _vm.outputDialog,
                          callback: function($$v) {
                            _vm.outputDialog = $$v
                          },
                          expression: "outputDialog"
                        }
                      },
                      [
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", [
                              _c("span", { staticClass: "headline" }, [
                                _vm._v("Založení H265 ")
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
                                      "v-row",
                                      [
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "12",
                                              md: "12"
                                            }
                                          },
                                          [
                                            _c("v-combobox", {
                                              attrs: {
                                                label:
                                                  "Výber transcodéru / H265 příjmu",
                                                items: _vm.transcoders,
                                                required: "",
                                                clearable: ""
                                              },
                                              model: {
                                                value: _vm.transcoder,
                                                callback: function($$v) {
                                                  _vm.transcoder = $$v
                                                },
                                                expression: "transcoder"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "12",
                                              md: "12"
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: { label: "URL pro 1080p" },
                                              model: {
                                                value: _vm.output1080,
                                                callback: function($$v) {
                                                  _vm.output1080 = $$v
                                                },
                                                expression: "output1080"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "12",
                                              md: "12"
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: { label: "URL pro 720p" },
                                              model: {
                                                value: _vm.output720,
                                                callback: function($$v) {
                                                  _vm.output720 = $$v
                                                },
                                                expression: "output720"
                                              }
                                            })
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
                                      "\n                                Zavřít\n                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      color: "green darken-1",
                                      text: ""
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.savedata()
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
              ],
              1
            )
          : _c("div", { staticClass: " mt-4" }, [
              _c("span", { staticClass: "mt-12" }, [
                _c("i", {
                  staticClass: "fas fa-spinner fa-spin fa-5x",
                  staticStyle: { color: "#EAF0F1" }
                })
              ])
            ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H265/_unicastDeviceController.vue?vue&type=template&id=5d169383&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/Unicast H265/_unicastDeviceController.vue?vue&type=template&id=5d169383& ***!
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
  return _c(
    "v-main",
    [
      _c(
        "v-card",
        {
          attrs: { flat: "", color: "#F5F5F7" },
          on: {
            contextmenu: function($event) {
              return _vm.show($event)
            }
          }
        },
        [
          _c("v-card-subtitle", [
            _c("strong", [_vm._v("\n                Transcodér\n            ")])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "ml-12 text--center" },
            [
              _c(
                "v-container",
                [
                  _vm.transcoder != null
                    ? _c(
                        "v-row",
                        [
                          _c(
                            "span",
                            { staticClass: "ml-6" },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.transcoder.name) +
                                  "\n                        "
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return [
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: { small: "", icon: "" }
                                              },
                                              [
                                                _c(
                                                  "v-icon",
                                                  _vm._g(
                                                    { attrs: { small: "" } },
                                                    on
                                                  ),
                                                  [
                                                    _vm._v(
                                                      "\n                                        mdi-information\n                                    "
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    1415726833
                                  )
                                },
                                [
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v("Rychlá informace o zařízení")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _vm.transcoder.ip != null
                                ? _c(
                                    "v-tooltip",
                                    {
                                      attrs: { bottom: "" },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              return [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      small: "",
                                                      icon: "",
                                                      link: "",
                                                      href:
                                                        "http://" +
                                                        _vm.transcoder.ip,
                                                      target: "_blank"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      _vm._g(
                                                        {
                                                          attrs: { small: "" }
                                                        },
                                                        on
                                                      ),
                                                      [
                                                        _vm._v(
                                                          "\n                                        mdi-earth\n                                    "
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        false,
                                        2086414919
                                      )
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v("Přímý proklik na zařízení")
                                      ])
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return [
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  small: "",
                                                  icon: "",
                                                  link: "",
                                                  to:
                                                    "/device/" +
                                                    _vm.transcoder.id,
                                                  target: "_blank"
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-icon",
                                                  _vm._g(
                                                    { attrs: { small: "" } },
                                                    on
                                                  ),
                                                  [
                                                    _vm._v(
                                                      "\n                                        mdi-arrow-right\n                                    "
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    2717286869
                                  )
                                },
                                [
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      "Proklik na zařízení v rámci\n                                dokumentace"
                                    )
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.transcoderStatus != null
                            ? _c(
                                "v-col",
                                { staticClass: "ml-3", attrs: { cols: "12" } },
                                [
                                  _vm.transcoderStatus.streamStatus === "active"
                                    ? _c("span", [
                                        _vm._v(
                                          "\n                            Stav streamu z transcoderu:\n                            "
                                        ),
                                        _c(
                                          "span",
                                          { staticClass: "green--text" },
                                          [
                                            _c("strong", [
                                              _vm._v(
                                                "\n                                    Transcoduje\n                                "
                                              )
                                            ])
                                          ]
                                        )
                                      ])
                                    : _vm.transcoderStatus.streamStatus ===
                                      "STOP"
                                    ? _c("span", [
                                        _c(
                                          "span",
                                          { staticClass: "blue--text" },
                                          [
                                            _c("strong", [
                                              _vm._v(
                                                "\n                                    Transcoding je zastaven\n                                "
                                              )
                                            ])
                                          ]
                                        )
                                      ])
                                    : _c("span", [
                                        _c(
                                          "span",
                                          { staticClass: "red--text" },
                                          [
                                            _c("strong", [
                                              _vm._v(
                                                "\n                                    Problém s transcodingem\n                                "
                                              )
                                            ])
                                          ]
                                        )
                                      ])
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    : _c("v-row", [
                        _c("strong", { staticClass: "blue--text" }, [
                          _vm._v(
                            "\n                        Není nadefinován transcoder\n                    "
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
                      return _vm.createOutput()
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
                      "\n                    Změnit zařízení\n                "
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
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _vm.transcoder != null
            ? _c(
                "v-dialog",
                {
                  attrs: { persistent: "", "max-width": "1000px" },
                  model: {
                    value: _vm.outputDialog,
                    callback: function($$v) {
                      _vm.outputDialog = $$v
                    },
                    expression: "outputDialog"
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-card-title", [
                        _c("span", { staticClass: "headline" }, [
                          _vm._v("Založení H265 ")
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
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      attrs: { cols: "12", sm: "12", md: "12" }
                                    },
                                    [
                                      _c("v-combobox", {
                                        attrs: {
                                          label:
                                            "Výber transcodéru / H265 příjmu",
                                          items: _vm.transcoders,
                                          required: "",
                                          clearable: ""
                                        },
                                        model: {
                                          value: _vm.transcoder.name,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.transcoder,
                                              "name",
                                              $$v
                                            )
                                          },
                                          expression: "transcoder.name"
                                        }
                                      })
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
                                  return _vm.savedata()
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
            : _vm._e()
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

/***/ "./resources/js/components/channels/ChannelComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/channels/ChannelComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelComponent_vue_vue_type_template_id_4a5ea904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelComponent.vue?vue&type=template&id=4a5ea904& */ "./resources/js/components/channels/ChannelComponent.vue?vue&type=template&id=4a5ea904&");
/* harmony import */ var _ChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/ChannelComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelComponent_vue_vue_type_template_id_4a5ea904___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelComponent_vue_vue_type_template_id_4a5ea904___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/ChannelComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/ChannelComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/channels/ChannelComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/ChannelComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/ChannelComponent.vue?vue&type=template&id=4a5ea904&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/channels/ChannelComponent.vue?vue&type=template&id=4a5ea904& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelComponent_vue_vue_type_template_id_4a5ea904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelComponent.vue?vue&type=template&id=4a5ea904& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/ChannelComponent.vue?vue&type=template&id=4a5ea904&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelComponent_vue_vue_type_template_id_4a5ea904___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelComponent_vue_vue_type_template_id_4a5ea904___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Dohled/DohledChannelComponent.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/channels/Dohled/DohledChannelComponent.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DohledChannelComponent_vue_vue_type_template_id_f15d3cd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DohledChannelComponent.vue?vue&type=template&id=f15d3cd6& */ "./resources/js/components/channels/Dohled/DohledChannelComponent.vue?vue&type=template&id=f15d3cd6&");
/* harmony import */ var _DohledChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DohledChannelComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Dohled/DohledChannelComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DohledChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DohledChannelComponent_vue_vue_type_template_id_f15d3cd6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DohledChannelComponent_vue_vue_type_template_id_f15d3cd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Dohled/DohledChannelComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Dohled/DohledChannelComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/channels/Dohled/DohledChannelComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DohledChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DohledChannelComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/DohledChannelComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DohledChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Dohled/DohledChannelComponent.vue?vue&type=template&id=f15d3cd6&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/channels/Dohled/DohledChannelComponent.vue?vue&type=template&id=f15d3cd6& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DohledChannelComponent_vue_vue_type_template_id_f15d3cd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DohledChannelComponent.vue?vue&type=template&id=f15d3cd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/DohledChannelComponent.vue?vue&type=template&id=f15d3cd6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DohledChannelComponent_vue_vue_type_template_id_f15d3cd6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DohledChannelComponent_vue_vue_type_template_id_f15d3cd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Dohled/DohledH264Component.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/channels/Dohled/DohledH264Component.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DohledH264Component_vue_vue_type_template_id_342739ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DohledH264Component.vue?vue&type=template&id=342739ec& */ "./resources/js/components/channels/Dohled/DohledH264Component.vue?vue&type=template&id=342739ec&");
/* harmony import */ var _DohledH264Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DohledH264Component.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Dohled/DohledH264Component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DohledH264Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DohledH264Component_vue_vue_type_template_id_342739ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DohledH264Component_vue_vue_type_template_id_342739ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Dohled/DohledH264Component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Dohled/DohledH264Component.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/channels/Dohled/DohledH264Component.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DohledH264Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DohledH264Component.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/DohledH264Component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DohledH264Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Dohled/DohledH264Component.vue?vue&type=template&id=342739ec&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/channels/Dohled/DohledH264Component.vue?vue&type=template&id=342739ec& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DohledH264Component_vue_vue_type_template_id_342739ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DohledH264Component.vue?vue&type=template&id=342739ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/DohledH264Component.vue?vue&type=template&id=342739ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DohledH264Component_vue_vue_type_template_id_342739ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DohledH264Component_vue_vue_type_template_id_342739ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Dohled/DohledH265Component.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/channels/Dohled/DohledH265Component.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DohledH265Component_vue_vue_type_template_id_706ba6ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DohledH265Component.vue?vue&type=template&id=706ba6ae& */ "./resources/js/components/channels/Dohled/DohledH265Component.vue?vue&type=template&id=706ba6ae&");
/* harmony import */ var _DohledH265Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DohledH265Component.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Dohled/DohledH265Component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DohledH265Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DohledH265Component_vue_vue_type_template_id_706ba6ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DohledH265Component_vue_vue_type_template_id_706ba6ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Dohled/DohledH265Component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Dohled/DohledH265Component.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/channels/Dohled/DohledH265Component.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DohledH265Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DohledH265Component.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/DohledH265Component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DohledH265Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Dohled/DohledH265Component.vue?vue&type=template&id=706ba6ae&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/channels/Dohled/DohledH265Component.vue?vue&type=template&id=706ba6ae& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DohledH265Component_vue_vue_type_template_id_706ba6ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DohledH265Component.vue?vue&type=template&id=706ba6ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/DohledH265Component.vue?vue&type=template&id=706ba6ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DohledH265Component_vue_vue_type_template_id_706ba6ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DohledH265Component_vue_vue_type_template_id_706ba6ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Dohled/TestDohledComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/channels/Dohled/TestDohledComponent.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestDohledComponent_vue_vue_type_template_id_07e25e40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestDohledComponent.vue?vue&type=template&id=07e25e40& */ "./resources/js/components/channels/Dohled/TestDohledComponent.vue?vue&type=template&id=07e25e40&");
/* harmony import */ var _TestDohledComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestDohledComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Dohled/TestDohledComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TestDohledComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TestDohledComponent_vue_vue_type_template_id_07e25e40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TestDohledComponent_vue_vue_type_template_id_07e25e40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Dohled/TestDohledComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Dohled/TestDohledComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/channels/Dohled/TestDohledComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestDohledComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TestDohledComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/TestDohledComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestDohledComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Dohled/TestDohledComponent.vue?vue&type=template&id=07e25e40&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/channels/Dohled/TestDohledComponent.vue?vue&type=template&id=07e25e40& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TestDohledComponent_vue_vue_type_template_id_07e25e40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TestDohledComponent.vue?vue&type=template&id=07e25e40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Dohled/TestDohledComponent.vue?vue&type=template&id=07e25e40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TestDohledComponent_vue_vue_type_template_id_07e25e40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TestDohledComponent_vue_vue_type_template_id_07e25e40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Multicast/_backupComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_backupComponent.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _backupComponent_vue_vue_type_template_id_256e0dd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_backupComponent.vue?vue&type=template&id=256e0dd2& */ "./resources/js/components/channels/Multicast/_backupComponent.vue?vue&type=template&id=256e0dd2&");
/* harmony import */ var _backupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_backupComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Multicast/_backupComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _backupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _backupComponent_vue_vue_type_template_id_256e0dd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _backupComponent_vue_vue_type_template_id_256e0dd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Multicast/_backupComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Multicast/_backupComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_backupComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_backupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_backupComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_backupComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_backupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Multicast/_backupComponent.vue?vue&type=template&id=256e0dd2&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_backupComponent.vue?vue&type=template&id=256e0dd2& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_backupComponent_vue_vue_type_template_id_256e0dd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_backupComponent.vue?vue&type=template&id=256e0dd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_backupComponent.vue?vue&type=template&id=256e0dd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_backupComponent_vue_vue_type_template_id_256e0dd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_backupComponent_vue_vue_type_template_id_256e0dd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Multicast/_calendarComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_calendarComponent.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendarComponent_vue_vue_type_template_id_f69fb7ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_calendarComponent.vue?vue&type=template&id=f69fb7ca& */ "./resources/js/components/channels/Multicast/_calendarComponent.vue?vue&type=template&id=f69fb7ca&");
/* harmony import */ var _calendarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_calendarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Multicast/_calendarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _calendarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _calendarComponent_vue_vue_type_template_id_f69fb7ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _calendarComponent_vue_vue_type_template_id_f69fb7ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Multicast/_calendarComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Multicast/_calendarComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_calendarComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_calendarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_calendarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_calendarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_calendarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Multicast/_calendarComponent.vue?vue&type=template&id=f69fb7ca&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_calendarComponent.vue?vue&type=template&id=f69fb7ca& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calendarComponent_vue_vue_type_template_id_f69fb7ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_calendarComponent.vue?vue&type=template&id=f69fb7ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_calendarComponent.vue?vue&type=template&id=f69fb7ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calendarComponent_vue_vue_type_template_id_f69fb7ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calendarComponent_vue_vue_type_template_id_f69fb7ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Multicast/_multicastComponent.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_multicastComponent.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _multicastComponent_vue_vue_type_template_id_685562d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_multicastComponent.vue?vue&type=template&id=685562d9& */ "./resources/js/components/channels/Multicast/_multicastComponent.vue?vue&type=template&id=685562d9&");
/* harmony import */ var _multicastComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_multicastComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Multicast/_multicastComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _multicastComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _multicastComponent_vue_vue_type_template_id_685562d9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _multicastComponent_vue_vue_type_template_id_685562d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Multicast/_multicastComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Multicast/_multicastComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_multicastComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_multicastComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_multicastComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_multicastComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_multicastComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Multicast/_multicastComponent.vue?vue&type=template&id=685562d9&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_multicastComponent.vue?vue&type=template&id=685562d9& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_multicastComponent_vue_vue_type_template_id_685562d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_multicastComponent.vue?vue&type=template&id=685562d9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_multicastComponent.vue?vue&type=template&id=685562d9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_multicastComponent_vue_vue_type_template_id_685562d9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_multicastComponent_vue_vue_type_template_id_685562d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Multicast/_multiplexorComponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_multiplexorComponent.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _multiplexorComponent_vue_vue_type_template_id_74825666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_multiplexorComponent.vue?vue&type=template&id=74825666& */ "./resources/js/components/channels/Multicast/_multiplexorComponent.vue?vue&type=template&id=74825666&");
/* harmony import */ var _multiplexorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_multiplexorComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Multicast/_multiplexorComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _multiplexorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _multiplexorComponent_vue_vue_type_template_id_74825666___WEBPACK_IMPORTED_MODULE_0__["render"],
  _multiplexorComponent_vue_vue_type_template_id_74825666___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Multicast/_multiplexorComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Multicast/_multiplexorComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_multiplexorComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_multiplexorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_multiplexorComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_multiplexorComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_multiplexorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Multicast/_multiplexorComponent.vue?vue&type=template&id=74825666&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_multiplexorComponent.vue?vue&type=template&id=74825666& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_multiplexorComponent_vue_vue_type_template_id_74825666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_multiplexorComponent.vue?vue&type=template&id=74825666& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_multiplexorComponent.vue?vue&type=template&id=74825666&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_multiplexorComponent_vue_vue_type_template_id_74825666___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_multiplexorComponent_vue_vue_type_template_id_74825666___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Multicast/_noteComponent.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_noteComponent.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noteComponent_vue_vue_type_template_id_351425e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_noteComponent.vue?vue&type=template&id=351425e7& */ "./resources/js/components/channels/Multicast/_noteComponent.vue?vue&type=template&id=351425e7&");
/* harmony import */ var _noteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_noteComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Multicast/_noteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _noteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _noteComponent_vue_vue_type_template_id_351425e7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _noteComponent_vue_vue_type_template_id_351425e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Multicast/_noteComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Multicast/_noteComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_noteComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_noteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_noteComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_noteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_noteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Multicast/_noteComponent.vue?vue&type=template&id=351425e7&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_noteComponent.vue?vue&type=template&id=351425e7& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_noteComponent_vue_vue_type_template_id_351425e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_noteComponent.vue?vue&type=template&id=351425e7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_noteComponent.vue?vue&type=template&id=351425e7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_noteComponent_vue_vue_type_template_id_351425e7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_noteComponent_vue_vue_type_template_id_351425e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Multicast/_sourceComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_sourceComponent.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceComponent_vue_vue_type_template_id_268d5f5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_sourceComponent.vue?vue&type=template&id=268d5f5e& */ "./resources/js/components/channels/Multicast/_sourceComponent.vue?vue&type=template&id=268d5f5e&");
/* harmony import */ var _sourceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_sourceComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Multicast/_sourceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sourceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sourceComponent_vue_vue_type_template_id_268d5f5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sourceComponent_vue_vue_type_template_id_268d5f5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Multicast/_sourceComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Multicast/_sourceComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_sourceComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sourceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_sourceComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_sourceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sourceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Multicast/_sourceComponent.vue?vue&type=template&id=268d5f5e&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/channels/Multicast/_sourceComponent.vue?vue&type=template&id=268d5f5e& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sourceComponent_vue_vue_type_template_id_268d5f5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_sourceComponent.vue?vue&type=template&id=268d5f5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Multicast/_sourceComponent.vue?vue&type=template&id=268d5f5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sourceComponent_vue_vue_type_template_id_268d5f5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sourceComponent_vue_vue_type_template_id_268d5f5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/MulticastComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/channels/MulticastComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MulticastComponent_vue_vue_type_template_id_3de650ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MulticastComponent.vue?vue&type=template&id=3de650ae& */ "./resources/js/components/channels/MulticastComponent.vue?vue&type=template&id=3de650ae&");
/* harmony import */ var _MulticastComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MulticastComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/MulticastComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MulticastComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MulticastComponent_vue_vue_type_template_id_3de650ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MulticastComponent_vue_vue_type_template_id_3de650ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/MulticastComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/MulticastComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/channels/MulticastComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MulticastComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MulticastComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/MulticastComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MulticastComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/MulticastComponent.vue?vue&type=template&id=3de650ae&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/channels/MulticastComponent.vue?vue&type=template&id=3de650ae& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MulticastComponent_vue_vue_type_template_id_3de650ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MulticastComponent.vue?vue&type=template&id=3de650ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/MulticastComponent.vue?vue&type=template&id=3de650ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MulticastComponent_vue_vue_type_template_id_3de650ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MulticastComponent_vue_vue_type_template_id_3de650ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H264InfoCoomponent_vue_vue_type_template_id_db085144___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./H264InfoCoomponent.vue?vue&type=template&id=db085144& */ "./resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue?vue&type=template&id=db085144&");
/* harmony import */ var _H264InfoCoomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./H264InfoCoomponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _H264InfoCoomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _H264InfoCoomponent_vue_vue_type_template_id_db085144___WEBPACK_IMPORTED_MODULE_0__["render"],
  _H264InfoCoomponent_vue_vue_type_template_id_db085144___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_H264InfoCoomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./H264InfoCoomponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_H264InfoCoomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue?vue&type=template&id=db085144&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue?vue&type=template&id=db085144& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_H264InfoCoomponent_vue_vue_type_template_id_db085144___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./H264InfoCoomponent.vue?vue&type=template&id=db085144& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H264/H264InfoCoomponent.vue?vue&type=template&id=db085144&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_H264InfoCoomponent_vue_vue_type_template_id_db085144___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_H264InfoCoomponent_vue_vue_type_template_id_db085144___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H264baseInfoComponent_vue_vue_type_template_id_76ee10b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./H264baseInfoComponent.vue?vue&type=template&id=76ee10b8& */ "./resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue?vue&type=template&id=76ee10b8&");
/* harmony import */ var _H264baseInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./H264baseInfoComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _H264baseInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _H264baseInfoComponent_vue_vue_type_template_id_76ee10b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _H264baseInfoComponent_vue_vue_type_template_id_76ee10b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_H264baseInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./H264baseInfoComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_H264baseInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue?vue&type=template&id=76ee10b8&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue?vue&type=template&id=76ee10b8& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_H264baseInfoComponent_vue_vue_type_template_id_76ee10b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./H264baseInfoComponent.vue?vue&type=template&id=76ee10b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H264/H264baseInfoComponent.vue?vue&type=template&id=76ee10b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_H264baseInfoComponent_vue_vue_type_template_id_76ee10b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_H264baseInfoComponent_vue_vue_type_template_id_76ee10b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unicastDeviceComponent_vue_vue_type_template_id_4c265365___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_unicastDeviceComponent.vue?vue&type=template&id=4c265365& */ "./resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue?vue&type=template&id=4c265365&");
/* harmony import */ var _unicastDeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_unicastDeviceComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _unicastDeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _unicastDeviceComponent_vue_vue_type_template_id_4c265365___WEBPACK_IMPORTED_MODULE_0__["render"],
  _unicastDeviceComponent_vue_vue_type_template_id_4c265365___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_unicastDeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_unicastDeviceComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_unicastDeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue?vue&type=template&id=4c265365&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue?vue&type=template&id=4c265365& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_unicastDeviceComponent_vue_vue_type_template_id_4c265365___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_unicastDeviceComponent.vue?vue&type=template&id=4c265365& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H264/_unicastDeviceComponent.vue?vue&type=template&id=4c265365&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_unicastDeviceComponent_vue_vue_type_template_id_4c265365___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_unicastDeviceComponent_vue_vue_type_template_id_4c265365___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H265InfoCoomponent_vue_vue_type_template_id_5c27c7fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./H265InfoCoomponent.vue?vue&type=template&id=5c27c7fe& */ "./resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue?vue&type=template&id=5c27c7fe&");
/* harmony import */ var _H265InfoCoomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./H265InfoCoomponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _H265InfoCoomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _H265InfoCoomponent_vue_vue_type_template_id_5c27c7fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _H265InfoCoomponent_vue_vue_type_template_id_5c27c7fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_H265InfoCoomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./H265InfoCoomponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_H265InfoCoomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue?vue&type=template&id=5c27c7fe&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue?vue&type=template&id=5c27c7fe& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_H265InfoCoomponent_vue_vue_type_template_id_5c27c7fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./H265InfoCoomponent.vue?vue&type=template&id=5c27c7fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H265/H265InfoCoomponent.vue?vue&type=template&id=5c27c7fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_H265InfoCoomponent_vue_vue_type_template_id_5c27c7fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_H265InfoCoomponent_vue_vue_type_template_id_5c27c7fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H265baseInfoComponent_vue_vue_type_template_id_f74079f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./H265baseInfoComponent.vue?vue&type=template&id=f74079f8& */ "./resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue?vue&type=template&id=f74079f8&");
/* harmony import */ var _H265baseInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./H265baseInfoComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _H265baseInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _H265baseInfoComponent_vue_vue_type_template_id_f74079f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _H265baseInfoComponent_vue_vue_type_template_id_f74079f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_H265baseInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./H265baseInfoComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_H265baseInfoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue?vue&type=template&id=f74079f8&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue?vue&type=template&id=f74079f8& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_H265baseInfoComponent_vue_vue_type_template_id_f74079f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./H265baseInfoComponent.vue?vue&type=template&id=f74079f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H265/H265baseInfoComponent.vue?vue&type=template&id=f74079f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_H265baseInfoComponent_vue_vue_type_template_id_f74079f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_H265baseInfoComponent_vue_vue_type_template_id_f74079f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/Unicast H265/_unicastDeviceController.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H265/_unicastDeviceController.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unicastDeviceController_vue_vue_type_template_id_5d169383___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_unicastDeviceController.vue?vue&type=template&id=5d169383& */ "./resources/js/components/channels/Unicast H265/_unicastDeviceController.vue?vue&type=template&id=5d169383&");
/* harmony import */ var _unicastDeviceController_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_unicastDeviceController.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/Unicast H265/_unicastDeviceController.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _unicastDeviceController_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _unicastDeviceController_vue_vue_type_template_id_5d169383___WEBPACK_IMPORTED_MODULE_0__["render"],
  _unicastDeviceController_vue_vue_type_template_id_5d169383___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/Unicast H265/_unicastDeviceController.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/Unicast H265/_unicastDeviceController.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H265/_unicastDeviceController.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_unicastDeviceController_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_unicastDeviceController.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H265/_unicastDeviceController.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_unicastDeviceController_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/Unicast H265/_unicastDeviceController.vue?vue&type=template&id=5d169383&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/channels/Unicast H265/_unicastDeviceController.vue?vue&type=template&id=5d169383& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_unicastDeviceController_vue_vue_type_template_id_5d169383___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./_unicastDeviceController.vue?vue&type=template&id=5d169383& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/Unicast H265/_unicastDeviceController.vue?vue&type=template&id=5d169383&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_unicastDeviceController_vue_vue_type_template_id_5d169383___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_unicastDeviceController_vue_vue_type_template_id_5d169383___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);