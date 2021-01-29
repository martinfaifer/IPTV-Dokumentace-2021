(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource/js/components/NavigationComponent"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Alerts/AlertComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Alerts/AlertComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: {
    alert: function alert() {
      return this.$store.state.alerts;
    }
  },
  data: function data() {
    return {};
  },
  methods: {},
  watch: {
    alert: function alert() {
      if (this.alert != null) {
        setTimeout(function () {
          this.$store.state.alerts = null;
        }.bind(this), 4000);
      } else {
        return;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Alerts/EventComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Alerts/EventComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      events: null,
      dialog: false
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
                return axios.get("events/today").then(function (response) {
                  if (response.data.status === "success") {
                    _this.events = response.data.events;
                    _this.dialog = true;
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/CardMenuComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Cards/CardMenuComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      cards: [],
      cardId: null,
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadCards();
  },
  methods: {
    loadCards: function loadCards() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("cards").then(function (response) {
                  _this.cards = response.data;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    show: function show(e, cardId) {
      var _this2 = this;

      this.cardId = cardId;
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this2.showMenu = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavigationComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavigationComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Alerts_AlertComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alerts/AlertComponent */ "./resources/js/components/Alerts/AlertComponent.vue");
/* harmony import */ var _channels_ChannelsMenuComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channels/ChannelsMenuComponent */ "./resources/js/components/channels/ChannelsMenuComponent.vue");
/* harmony import */ var _devices_DevicesMenuComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devices/DevicesMenuComponent */ "./resources/js/components/devices/DevicesMenuComponent.vue");
/* harmony import */ var _components_SearchBar_SearchComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchBar/SearchComponent */ "./resources/js/components/SearchBar/SearchComponent.vue");
/* harmony import */ var _Cards_CardMenuComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cards/CardMenuComponent */ "./resources/js/components/Cards/CardMenuComponent.vue");
/* harmony import */ var _Alerts_EventComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Alerts/EventComponent */ "./resources/js/components/Alerts/EventComponent.vue");
/* harmony import */ var _Settings_SettingsMenuComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Settings/SettingsMenuComponent */ "./resources/js/components/Settings/SettingsMenuComponent.vue");


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







/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      alerts: [],
      alertCount: "0",
      snackbar: false,
      text: "Prosím reloadněte si stránku!",
      vertical: true,
      searchDialogInput: false,
      componentType: "",
      alertMenu: null,
      drawer: true,
      mini: true,
      channels: null,
      fav: true,
      menu: false,
      message: false,
      hints: true,
      user: null,
      isLoading: false,
      model: null,
      search: null,
      entries: []
    };
  },
  computed: {
    fields: function fields() {
      var _this = this;

      if (!this.model) return [];
      return Object.keys(this.model).map(function (key) {
        return {
          key: key,
          value: _this.model[key] || "n/a"
        };
      });
    },
    items: function items() {
      var _this2 = this;

      return this.entries.map(function (entry) {
        var result = entry.result.length > _this2.result ? entry.result.slice(0, _this2.result) + "..." : entry.result;
        return Object.assign({}, entry, {
          result: result
        });
      });
    }
  },
  components: {
    "alert-component": _Alerts_AlertComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    "channelssidemenu-component": _channels_ChannelsMenuComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    "devicessidemenu-component": _devices_DevicesMenuComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    "search-compoennt": _components_SearchBar_SearchComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    "cardsmenu-component": _Cards_CardMenuComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    "event-component": _Alerts_EventComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
    "settingsmenu-component": _Settings_SettingsMenuComponent__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  created: function created() {
    this.getUser();
    this.loadWriteDataByUri();
    this.getAlertsFromDohled();
  },
  methods: {
    getAlertsFromDohled: function getAlertsFromDohled() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("/api/iptv/alerts").then(function (response) {
                  if (response.data.length === 0) {
                    _this3.alerts = response.data;
                    _this3.alertCount = "0";
                  } else {
                    _this3.alerts = response.data;
                    _this3.alertCount = response.data.length;
                  }
                });

              case 3:
                _context.next = 7;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5]]);
      }))();
    },
    logOut: function logOut() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios.get("logout").then(function (response) {
                  _this4.$router.push("/login");
                });

              case 3:
                _context2.next = 7;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2["catch"](0);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 5]]);
      }))();
    },
    getUser: function getUser() {
      var _this5 = this;

      axios.get("user").then(function (response) {
        // overení pokud není problem s overením csrf tokenu
        if (response.status === 419) {
          _this5.snackbar = true;
        } else {
          // skrytí snackbaru
          _this5.snackbar = false; // není problem s csrf pokracujeme dále

          if (response.data.status == "error") {
            _this5.$router.push("/login");
          } else {
            _this5.$store.state.user = response.data.data;
            _this5.user = response.data.data;
          }
        }
      });
    },
    loadWriteDataByUri: function loadWriteDataByUri() {
      if (this.$route.path === "/") {
        this.$router.push("/channel");
        this.componentType = "channels";
      }

      if (this.$route.path.match("/channel.*")) {
        this.componentType = "channels";
      }

      if (this.$route.path.match("/device.*")) {
        this.componentType = "devices";
      }

      if (this.$route.path.match("/card.*")) {
        this.componentType = "cards";
      }

      if (this.$route.path.match("/wiki.*")) {
        this.componentType = "wiki";
      }

      if (this.$route.path.match("/settings.*")) {
        this.componentType = "settings";
      }
    }
  },
  mounted: function mounted() {
    setInterval(function () {
      try {
        this.getAlertsFromDohled();
      } catch (error) {}
    }.bind(this), 10000);
  },
  watch: {
    $route: function $route(to, from) {
      this.loadWriteDataByUri();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchBar/SearchComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SearchBar/SearchComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      searchDialogInput: false,
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      search: null
    };
  },
  created: function created() {},
  methods: {
    searchDialog: function searchDialog() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.searchDialogInput = true;
                _this.search = null;
                _this.model = null;
                _context.next = 5;
                return axios.get('search').then(function (response) {
                  _this.entries = response.data.entries;
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    var self = this;
    window.addEventListener("keyup", function (event) {
      // vyhledáváaní za pomocí stistknutí ctrl
      if (event.keyCode == 18) {
        self.searchDialog();
      }
    });
  },
  watch: {
    model: function model() {
      if (this.model == undefined) {// nic
      } else {
        this.$router.push("/channel");
        this.$router.push("/" + this.model.url);
        this.searchDialogInput = false;
        this.model = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Settings/SettingsMenuComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Settings/SettingsMenuComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      items: [{
        title: "Štítky",
        icon: "mdi-tag",
        route: "tag"
      }, {
        title: "Uživatelé",
        icon: "mdi-account-multiple",
        route: "accounts"
      }, // { title: "IPTV Balíčky", icon: "mdi-package-variant-closed", route: "iptv_package" },
      {
        title: "Zdroje multicastu",
        icon: "mdi-semantic-web",
        route: "multicast_sources"
      }, {
        title: "API",
        icon: "mdi-arrow-collapse",
        route: "api"
      }],
      devices: [["DVB", "mdi-access-point", "dvb"], ["Satelit", "mdi-satellite-variant", "satelit"], ["Kategorie", "mdi-shape", "category"]]
    };
  },
  created: function created() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/ChannelsMenuComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/ChannelsMenuComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      dohledovat: false,
      vytvaretNahled: false,
      zalozitDoDohledu: false,
      start_day: "",
      start_time: "",
      end_day: "",
      end_time: "",
      event_note: "",
      vypadek: false,
      deleteDialog: false,
      checkbox_create_to_dohled: false,
      editChannelName: false,
      createNewChannel: false,
      createMultiplexerDialog: false,
      createPrijemDialog: false,
      createBackupPrijemDialog: false,
      createEventDialog: false,
      multiplexer: null,
      multiplexers: [],
      backup: null,
      prijem: "",
      prijems: [],
      event: null,
      channelTabForEdit: null,
      channels: null,
      channelId: null,
      showMenu: false,
      x: 0,
      y: 0,
      editDialog: false,
      editChannel: [],
      packages: [],
      iptv_package: "",
      editPrijem: [],
      editMultiplexors: [],
      editMulticastSources: [],
      deviceInformation: null,
      backupdeviceInformation: null
    }, _defineProperty(_ref, "deviceInformation", null), _defineProperty(_ref, "prijemInterfaces", null), _defineProperty(_ref, "backup_multicast_ip", null), _defineProperty(_ref, "backup_multicastZdroj", null), _defineProperty(_ref, "stb_ip", null), _defineProperty(_ref, "multicast_ip", null), _defineProperty(_ref, "multicastZdroj", null), _defineProperty(_ref, "sources", []), _defineProperty(_ref, "channelName", null), _defineProperty(_ref, "photo", null), _ref;
  },
  created: function created() {
    this.loadchannels();
  },
  methods: {
    selectFile: function selectFile(event) {
      // `files` is always an array because the file input may be in multiple mode
      this.photo = event.target.files[0];
    },
    saveChannelName: function saveChannelName() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("channel/name/edit", {
                  channelId: _this.channelId,
                  channelName: _this.channelName
                }).then(function (response) {
                  _this.$store.state.alerts = response.data.alert;

                  if (response.data.status === "success") {
                    _this.editChannelName = false;

                    _this.loadchannels();

                    _this.$router.push("/")["catch"](function (err) {});

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
    editChannelNameDialog: function editChannelNameDialog() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("channel/name", {
                  channelId: _this2.channelId
                }).then(function (response) {
                  _this2.channelName = response.data;
                  _this2.editChannelName = true;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    createNewChannelDialog: function createNewChannelDialog() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get("sources").then(function (response) {
                  _this3.sources = response.data;
                  _this3.createNewChannel = true;
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    saveNewChannel: function saveNewChannel() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post("channel/create", {
                  channelName: _this4.channelName,
                  multicastZdroj: _this4.multicastZdroj,
                  multicast_ip: _this4.multicast_ip,
                  stb_ip: _this4.stb_ip,
                  backup_multicastZdroj: _this4.backup_multicastZdroj,
                  backup_multicast_ip: _this4.backup_multicast_ip,
                  dohledovat: _this4.dohledovat,
                  vytvaretNahled: _this4.vytvaretNahled,
                  zalozitDoDohledu: _this4.zalozitDoDohledu
                }).then(function (response) {
                  _this4.$store.state.alerts = response.data.alert;

                  if (response.data.status === "success") {
                    _this4.loadchannels();

                    _this4.createNewChannel = false;
                    _this4.channelName = null;
                    _this4.multicastZdroj = null;
                    _this4.multicast_ip = null;
                    _this4.stb_ip = null;
                    _this4.backup_multicastZdroj = null;
                    _this4.backup_multicast_ip = null;
                    _this4.dohledovat = false;
                    _this4.vytvaretNahled = false;
                    _this4.zalozitDoDohledu = false;

                    _this4.$router.push("/channel/" + response.data.channelId)["catch"](function (err) {});
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
    addEvent: function addEvent() {
      this.createEventDialog = true;
    },
    saveEvent: function saveEvent() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.post("event/create", {
                  channelId: _this5.channelId,
                  start_day: _this5.start_day,
                  start_time: _this5.start_time,
                  end_day: _this5.end_day,
                  end_time: _this5.end_time,
                  event_note: _this5.event_note,
                  vypadek: _this5.vypadek,
                  checkbox_create_to_dohled: _this5.checkbox_create_to_dohled
                }).then(function (response) {
                  _this5.$store.state.alerts = response.data.alert;
                  _this5.createEventDialog = false;

                  _this5.$router.push("/channel");

                  _this5.$router.push("/channel/" + response.data.channelId)["catch"](function (err) {});
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    addMultiplexer: function addMultiplexer() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios.post("channel/check", {
                  channelId: _this6.channelId,
                  param: "multiplexor"
                }).then(function (response) {
                  if (response.data.status === "success") {
                    // je mozné pridat multiplerox
                    _this6.createMultiplexerDialog = true;

                    _this6.getMultiplexors();
                  } else {
                    _this6.$store.state.alerts = response.data.alert;
                  }
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    GetMoreInformationAboutThisDevice: function GetMoreInformationAboutThisDevice(data) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return axios.post("device/info", {
                  deviceName: data
                }).then(function (response) {
                  _this7.deviceInformation = response.data;
                });

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    addBackupPrijem: function addBackupPrijem() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return axios.post("channel/check", {
                  channelId: _this8.channelId,
                  param: "backup"
                }).then(function (response) {
                  if (response.data.status === "success") {
                    _this8.createBackupPrijemDialog = true;

                    _this8.getPrijemDevices();
                  } else {
                    _this8.$store.state.alerts = response.data.alert;
                  }
                });

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    addPrijem: function addPrijem() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return axios.post("channel/check", {
                  channelId: _this9.channelId,
                  param: "prijem"
                }).then(function (response) {
                  if (response.data.status === "success") {
                    // je mozné pridat multiplerox
                    _this9.createPrijemDialog = true;

                    _this9.getPrijemDevices();
                  } else {
                    _this9.$store.state.alerts = response.data.alert;
                  }
                });

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    saveBackupPrijemData: function saveBackupPrijemData() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return axios.post("device/backup/edit", {
                  channelId: _this10.channelId,
                  deviceName: _this10.backup,
                  channelToInterface: _this10.prijemInterfaces,
                  checkIfDeviceHasInterface: _this10.deviceInformation.outputInterfaces
                }).then(function (response) {
                  _this10.backup = null;
                  _this10.channelToInterface = null;
                  _this10.$store.state.alerts = response.data.alert;
                  _this10.createBackupPrijemDialog = false;

                  if (response.data.status === "success") {
                    _this10.$router.push("/")["catch"](function (err) {});

                    _this10.$router.push("/channel/" + response.data.channelId)["catch"](function (err) {});
                  }
                });

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    savePrijemData: function savePrijemData() {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return axios.post("device/prijem/edit", {
                  channelId: _this11.channelId,
                  deviceName: _this11.prijem,
                  channelToInterface: _this11.prijemInterfaces,
                  checkIfDeviceHasInterface: _this11.deviceInformation.outputInterfaces
                }).then(function (response) {
                  _this11.prijem = null;
                  _this11.channelToInterface = null;
                  _this11.$store.state.alerts = response.data.alert;
                  _this11.createPrijemDialog = false;

                  if (response.data.status === "success") {
                    _this11.$router.push("/")["catch"](function (err) {});

                    _this11.$router.push("/channel/" + response.data.channelId)["catch"](function (err) {});
                  }
                });

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    saveMultiplexerdata: function saveMultiplexerdata() {
      var _this12 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return axios.post("channel/multiplexer/edit", {
                  channelId: _this12.channelId,
                  deviceName: _this12.multiplexer.name
                }).then(function (response) {
                  _this12.multiplexer = null;
                  _this12.$store.state.alerts = response.data.alert;
                  _this12.createMultiplexerDialog = false;

                  if (response.data.status === "success") {
                    _this12.$router.push("/")["catch"](function (err) {});

                    _this12.$router.push("/channel/" + response.data.channelId)["catch"](function (err) {});
                  }
                });

              case 2:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    },
    closeDialog: function closeDialog() {
      this.editChannelName = false;
      this.createNewChannel = false;
      this.createMultiplexerDialog = false;
      this.createPrijemDialog = false;
      this.createBackupPrijemDialog = false;
      this.createEventDialog = false;
      this.multiplexer = null;
      this.multiplexers = [];
      this.prijem = null;
      this.prijems = [];
      this.backup = null;
      this.event = null;
    },
    loadchannels: function loadchannels() {
      var _this13 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return axios.get("channels").then(function (response) {
                  _this13.channels = response.data;
                });

              case 2:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }))();
    },
    show: function show(e, channelId) {
      var _this14 = this;

      this.channelId = channelId;
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this14.showMenu = true;
      });
    },
    openDialogEditCurrentChannel: function openDialogEditCurrentChannel() {
      var _this15 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return axios.post("channel", {
                  channelId: _this15.channelId
                }).then(function (response) {
                  _this15.editChannel = response.data;

                  _this15.getIptvPackages();

                  _this15.getPrijemDevices();

                  _this15.getMultiplexors();

                  _this15.getMulticastSources();

                  _this15.GetMoreInformationAboutThisDevice(response.data.prijemId);

                  _this15.editDialog = true;
                });

              case 2:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }))();
    },
    // MOZNA ZRUSIT  A PRESUNOUT DO TAGŮ
    getIptvPackages: function getIptvPackages() {
      var _this16 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return axios.get("packages").then(function (response) {
                  _this16.packages = response.data;
                });

              case 2:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }))();
    },
    getPrijemDevices: function getPrijemDevices() {
      var _this17 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return axios.get("device/prijem").then(function (response) {
                  _this17.prijems = response.data;
                });

              case 2:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }))();
    },
    getMultiplexors: function getMultiplexors() {
      var _this18 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return axios.get("devices/multiplexors").then(function (response) {
                  _this18.editMultiplexors = response.data;
                });

              case 2:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }))();
    },
    getMulticastSources: function getMulticastSources() {
      var _this19 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return axios.get("sources").then(function (response) {
                  _this19.deviceInformation = response.data;
                });

              case 2:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }))();
    },
    removeChannelDialog: function removeChannelDialog() {
      this.deleteDialog = true;
    },
    removeChannel: function removeChannel() {
      var _this20 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return axios.post("channel/delete", {
                  channelId: _this20.channelId
                }).then(function (response) {
                  _this20.$store.state.alerts = response.data.alert;
                  _this20.deleteDialog = false;

                  if (response.data.status === "success") {
                    _this20.loadchannels();

                    _this20.$router.push("/")["catch"](function (err) {});
                  }
                });

              case 2:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/DevicesMenuComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/DevicesMenuComponent.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      editDeviceData: null,
      editDeviceDialog: false,
      interfaces: null,
      allInterfaces: [],
      categories: [],
      vendors: [],
      deviceDialog: false,
      devices: null,
      deviceId: null,
      showMenu: false,
      deviceName: "",
      deviceUser: "",
      category: "",
      vendor: "",
      devicePassword: "",
      deviceIp: "",
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadDevices();
  },
  methods: {
    removeDeviceFromSystem: function removeDeviceFromSystem() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("device/remove", {
                  deviceId: _this.deviceId
                }).then(function (response) {
                  // zobrazení alertu
                  _this.$store.state.alerts = response.data.alert;

                  if (response.data.status === "success") {
                    if (_this.$router.match("/device/" + _this.deviceId)) {
                      _this.loadDevices();

                      _this.$router.push("/device/")["catch"](function (err) {});
                    } else {
                      _this.loadDevices();
                    }
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
    openEditDeviceDialog: function openEditDeviceDialog() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("device/getInfoForBaseEdit", {
                  deviceId: _this2.deviceId
                }).then(function (response) {
                  _this2.editDeviceData = response.data;

                  _this2.loadCategories();

                  _this2.loadVendors();

                  _this2.loadAllInterfaces();

                  _this2.editDeviceDialog = true;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    closeEditDialog: function closeEditDialog() {
      this.deviceDialog = false;
      this.editDeviceData = null;
      this.allInterfaces = [];
      this.categories = [];
      this.vendors = [];
    },
    saveEditDialog: function saveEditDialog() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post("device/baseEdit", {
                  deviceId: _this3.deviceId,
                  name: _this3.editDeviceData.name,
                  ip: _this3.editDeviceData.ip,
                  login_password: _this3.editDeviceData.login_password,
                  login_user: _this3.editDeviceData.login_user,
                  category: _this3.editDeviceData.category,
                  vendor: _this3.editDeviceData.vendor,
                  haveInterface: _this3.editDeviceData.haveInterface
                }).then(function (response) {
                  _this3.$store.state.alerts = response.data.alert;

                  if (response.data.status === "success") {
                    _this3.deviceDialog = false;
                    _this3.editDeviceData = null;
                    _this3.allInterfaces = [];
                    _this3.categories = [];
                    _this3.vendors = [];

                    _this3.loadDevices();

                    _this3.$router.push("/device/")["catch"](function (err) {});

                    _this3.$router.push("/device/" + response.data.deviceId)["catch"](function (err) {});
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
    loadAllInterfaces: function loadAllInterfaces() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get("device/allInterfaces").then(function (response) {
                  _this4.allInterfaces = response.data;
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    createDeviceDialog: function createDeviceDialog() {
      this.deviceDialog = true;
      this.loadCategories();
      this.loadVendors();
      this.loadAllInterfaces();
    },
    loadCategories: function loadCategories() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.get("device/categories").then(function (response) {
                  if (response.data.status === "success") {
                    _this5.categories = response.data.data;
                  } else {
                    _this5.categories = null;
                  }
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    loadVendors: function loadVendors() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios.get("vendors").then(function (response) {
                  if (response.data.status === "success") {
                    _this6.vendors = response.data.data;
                  } else {
                    _this6.vendors = null;
                  }
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    loadDevices: function loadDevices() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return axios.get("devices").then(function (response) {
                  _this7.devices = response.data;
                });

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    saveDialog: function saveDialog() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return axios.post("device/create", {
                  deviceName: _this8.deviceName,
                  deviceUser: _this8.deviceUser,
                  devicePassword: _this8.devicePassword,
                  vendor: _this8.vendor,
                  category: _this8.category,
                  deviceIp: _this8.deviceIp,
                  interfaces: _this8.interfaces
                }).then(function (response) {
                  _this8.$store.state.alerts = response.data.alert;
                  _this8.deviceDialog = false;

                  if (response.data.status === "success") {
                    _this8.loadDevices();

                    _this8.$router.push("/device/" + response.data.deviceId);
                  }
                });

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    show: function show(e, deviceId) {
      var _this9 = this;

      this.deviceId = deviceId;
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this9.showMenu = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Alerts/AlertComponent.vue?vue&type=template&id=ce57e084&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Alerts/AlertComponent.vue?vue&type=template&id=ce57e084& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _vm.alert != null
        ? _c(
            "v-snackbar",
            {
              attrs: {
                timeout: -1,
                value: true,
                absolute: "",
                bottom: "",
                color: _vm.alert.status,
                right: ""
              }
            },
            [
              _vm.alert.status === "success"
                ? _c("v-icon", [_vm._v("\n        mdi-check\n    ")])
                : _vm._e(),
              _vm._v(" "),
              _vm.alert.status === "error"
                ? _c("v-icon", [_vm._v("\n        mdi-close\n    ")])
                : _vm._e(),
              _vm._v(" "),
              _vm.alert.status === "warning" || _vm.alert.status === "info"
                ? _c("v-icon", [_vm._v("\n        mdi-exclamation\n    ")])
                : _vm._e(),
              _vm._v(" "),
              _c("strong", [
                _vm._v("\n            " + _vm._s(_vm.alert.msg) + "\n        ")
              ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Alerts/EventComponent.vue?vue&type=template&id=6a509b40&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Alerts/EventComponent.vue?vue&type=template&id=6a509b40& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _vm.events != null
      ? _c(
          "div",
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
                      value: _vm.dialog,
                      callback: function($$v) {
                        _vm.dialog = $$v
                      },
                      expression: "dialog"
                    }
                  },
                  [
                    _c(
                      "v-card",
                      [
                        _c("v-card-title", { staticClass: "headline" }, [
                          _vm._v(
                            "\n                        Na dnešní jsou události u těchto kanálů\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-container",
                          { staticClass: "body-1" },
                          [
                            _c(
                              "v-list",
                              _vm._l(_vm.events, function(event) {
                                return _c(
                                  "v-list-item",
                                  {
                                    key: event.id,
                                    staticClass: "pl-3",
                                    attrs: {
                                      link: "",
                                      to: "/channel/" + event.channelId
                                    }
                                  },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", {
                                          domProps: {
                                            innerHTML: _vm._s(event.channel)
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-list-item-subtitle", {
                                          staticClass: "pl-3",
                                          domProps: {
                                            innerHTML: _vm._s(event.note)
                                          }
                                        })
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
                                attrs: { color: "green darken-1", text: "" },
                                on: {
                                  click: function($event) {
                                    _vm.dialog = false
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            Zavřít\n                        "
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
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/CardMenuComponent.vue?vue&type=template&id=2f5217c7&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Cards/CardMenuComponent.vue?vue&type=template&id=2f5217c7& ***!
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
  return _c(
    "v-main",
    [
      _c(
        "v-list",
        {
          staticClass: "ml-12",
          attrs: { dense: "", nav: "", color: "#F5F5F7" }
        },
        _vm._l(_vm.cards, function(card) {
          return _c(
            "v-list-item",
            {
              key: card.id,
              staticClass: "pl-3",
              attrs: { link: "", to: "/card/" + card.id },
              on: {
                contextmenu: function($event) {
                  return _vm.show($event, card.id)
                }
              }
            },
            [_c("v-list-item-title", [_vm._v(" " + _vm._s(card.card_number))])],
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
                { on: { click: function($event) {} } },
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c(
                        "v-icon",
                        { attrs: { color: "green", "x-small": "" } },
                        [_vm._v("mdi-plus")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", [
                    _vm._v(
                      "\n                    Založit novou kartu\n                "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                { on: { click: function($event) {} } },
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", { attrs: { color: "red", "x-small": "" } }, [
                        _vm._v("mdi-delete")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", [
                    _vm._v(
                      "\n                    Odebrat kartu\n                "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavigationComponent.vue?vue&type=template&id=34a84aa4&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavigationComponent.vue?vue&type=template&id=34a84aa4& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _c(
        "v-card",
        { attrs: { flat: "", color: "transparent" } },
        [
          _c("event-component"),
          _vm._v(" "),
          _c(
            "v-toolbar",
            { staticClass: "ml-16", attrs: { fixed: "", dense: "", flat: "" } },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c("search-compoennt", { staticClass: "ml-16" }),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-spacer"),
              _c("v-spacer"),
              _c("v-spacer"),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-icon",
                {
                  attrs: { color: "red" },
                  on: {
                    click: function($event) {
                      _vm.alertMenu = true
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                mdi-bell-ring-outline\n            "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-navigation-drawer",
                { attrs: { fixed: "" } },
                [
                  _c(
                    "v-row",
                    { staticClass: "fill-height", attrs: { "no-gutters": "" } },
                    [
                      _c(
                        "v-navigation-drawer",
                        {
                          attrs: {
                            fixed: "",
                            color: "#253341",
                            "mini-variant": "",
                            "mini-variant-width": "56"
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
                                    "v-menu",
                                    {
                                      attrs: {
                                        transition: "scroll-y-transition"
                                      },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            return [
                                              _c(
                                                "v-icon",
                                                _vm._g(
                                                  { attrs: { color: "white" } },
                                                  on
                                                ),
                                                [
                                                  _vm._v(
                                                    "\n                                            mdi-account\n                                        "
                                                  )
                                                ]
                                              )
                                            ]
                                          }
                                        }
                                      ])
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "v-list",
                                        {
                                          staticClass: "text-center subtitle-2",
                                          attrs: { width: "250px" }
                                        },
                                        [
                                          _c(
                                            "v-list-item",
                                            {
                                              on: {
                                                click: function($event) {
                                                  _vm.editPasswordDialog = true
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            Editace "
                                              ),
                                              _c("v-spacer"),
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: {
                                                    color: "grey",
                                                    right: "",
                                                    small: ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "mdi-account-cog-outline"
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-item",
                                            {
                                              attrs: {
                                                link: "",
                                                to: "/settings"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            Nastavení"
                                              ),
                                              _c("v-spacer"),
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: {
                                                    color: "grey",
                                                    right: "",
                                                    small: ""
                                                  }
                                                },
                                                [_vm._v("mdi-settings")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-divider"),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-item",
                                            {
                                              on: {
                                                click: function($event) {
                                                  return _vm.logOut()
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            Odhlásit se "
                                              ),
                                              _c("v-spacer"),
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: {
                                                    color: "grey",
                                                    right: "",
                                                    small: ""
                                                  }
                                                },
                                                [_vm._v("mdi-lock")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-divider"),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-item",
                                            {
                                              attrs: {
                                                href:
                                                  "http://iptvdohled.grapesc.cz/#/",
                                                target: "_blink"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            IPTV Dohled"
                                              ),
                                              _c("v-spacer"),
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: {
                                                    color: "grey",
                                                    right: "",
                                                    small: ""
                                                  }
                                                },
                                                [_vm._v("mdi-television")]
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
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          _vm.mini = !_vm.mini
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", [_vm._v("mdi-chevron-left")])
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
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-list",
                            { attrs: { dense: "", nav: "" } },
                            [
                              _c(
                                "v-list-item",
                                { attrs: { link: "", to: "/channel" } },
                                [
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
                                                    class: {
                                                      "white--text":
                                                        _vm.componentType ===
                                                        "channels",
                                                      "grey--text":
                                                        _vm.componentType !=
                                                        "channels"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        _vm.componentType =
                                                          "channels"
                                                      }
                                                    }
                                                  },
                                                  on
                                                ),
                                                [_vm._v("mdi-television-box")]
                                              )
                                            ]
                                          }
                                        }
                                      ])
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Přehled kanálů")])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item",
                                { attrs: { link: "", to: "/device" } },
                                [
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
                                                    class: {
                                                      "white--text":
                                                        _vm.componentType ===
                                                        "devices",
                                                      "grey--text":
                                                        _vm.componentType !=
                                                        "devices"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        _vm.componentType =
                                                          "devices"
                                                      }
                                                    }
                                                  },
                                                  on
                                                ),
                                                [_vm._v("mdi-devices")]
                                              )
                                            ]
                                          }
                                        }
                                      ])
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Přehled zařízení")])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item",
                                { attrs: { link: "", to: "/card" } },
                                [
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
                                                    class: {
                                                      "white--text":
                                                        _vm.componentType ===
                                                        "cards",
                                                      "grey--text":
                                                        _vm.componentType !=
                                                        "cards"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        _vm.componentType =
                                                          "cards"
                                                      }
                                                    }
                                                  },
                                                  on
                                                ),
                                                [
                                                  _vm._v(
                                                    "mdi-card-text-outline"
                                                  )
                                                ]
                                              )
                                            ]
                                          }
                                        }
                                      ])
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Přehled karet")])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item",
                                { attrs: { link: "", to: "/wiki" } },
                                [
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
                                                    class: {
                                                      "white--text":
                                                        _vm.componentType ===
                                                        "wiki",
                                                      "grey--text":
                                                        _vm.componentType !=
                                                        "wiki"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        _vm.componentType =
                                                          "wiki"
                                                      }
                                                    }
                                                  },
                                                  on
                                                ),
                                                [_vm._v("mdi-wikipedia")]
                                              )
                                            ]
                                          }
                                        }
                                      ])
                                    },
                                    [_vm._v(" "), _c("span", [_vm._v("Wiki")])]
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
                      _c("channelssidemenu-component", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.componentType === "channels",
                            expression: "componentType === 'channels'"
                          }
                        ]
                      }),
                      _vm._v(" "),
                      _c("devicessidemenu-component", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.componentType === "devices",
                            expression: "componentType === 'devices'"
                          }
                        ]
                      }),
                      _vm._v(" "),
                      _c("cardsmenu-component", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.componentType === "cards",
                            expression: "componentType === 'cards'"
                          }
                        ]
                      }),
                      _vm._v(" "),
                      _vm.componentType === "settings"
                        ? _c("settingsmenu-component")
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "transition",
                { attrs: { name: "fade", mode: "out-in" } },
                [_c("router-view", { staticClass: "ml-16" })],
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
        "v-navigation-drawer",
        {
          attrs: { right: "", color: "transparent", fixed: "", temporary: "" },
          model: {
            value: _vm.alertMenu,
            callback: function($$v) {
              _vm.alertMenu = $$v
            },
            expression: "alertMenu"
          }
        },
        [
          _vm.alertCount != "0"
            ? _c(
                "div",
                _vm._l(_vm.alerts, function(alert) {
                  return _c(
                    "div",
                    {
                      key: alert.id,
                      staticClass: "pl-2 pr-2",
                      attrs: { id: "alerty" }
                    },
                    [
                      _vm.alertCount != "0"
                        ? _c(
                            "v-alert",
                            {
                              staticClass: "body-2 mt-2",
                              attrs: {
                                dense: "",
                                border: "left",
                                type: alert.status
                              }
                            },
                            [
                              _c("strong", [_vm._v(_vm._s(alert.msg))]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: alert.data,
                                      expression: "alert.data"
                                    }
                                  ]
                                },
                                _vm._l(alert.data, function(issueData) {
                                  return _c(
                                    "p",
                                    { key: issueData.id, staticClass: "ml-1" },
                                    [
                                      _c("small", [
                                        _c("strong", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(issueData.message) +
                                              "\n                                "
                                          )
                                        ])
                                      ])
                                    ]
                                  )
                                }),
                                0
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                }),
                0
              )
            : _c("div", [
                _c(
                  "div",
                  { staticClass: "pl-2 pr-2" },
                  [
                    _c(
                      "v-alert",
                      {
                        staticClass: "body-2 mt-2",
                        attrs: {
                          transition: "slide-x-transition",
                          dense: "",
                          border: "left",
                          type: "success"
                        }
                      },
                      [
                        _c("strong", [
                          _vm._v("Všechny dohledované streamy jsou funknčí")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ])
        ]
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          staticClass: "text--center",
          attrs: {
            vertical: _vm.vertical,
            bottom: "",
            right: "",
            timeout: -1,
            color: "warning"
          },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _c("strong", [
            _vm._v("\n            " + _vm._s(_vm.text) + "\n        ")
          ])
        ]
      ),
      _vm._v(" "),
      _c("alert-component")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchBar/SearchComponent.vue?vue&type=template&id=8f542214&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SearchBar/SearchComponent.vue?vue&type=template&id=8f542214& ***!
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
  return _c(
    "v-main",
    [
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
                    "v-btn",
                    {
                      attrs: { small: "", icon: "" },
                      on: {
                        click: function($event) {
                          return _vm.searchDialog()
                        },
                        keyup: function($event) {
                          return _vm.searchDialog()
                        }
                      }
                    },
                    [
                      _c("v-icon", _vm._g({ attrs: { color: "blue" } }, on), [
                        _vm._v(
                          "\n                    mdi-magnify\n                "
                        )
                      ])
                    ],
                    1
                  )
                ]
              }
            }
          ])
        },
        [
          _vm._v(" "),
          _c(
            "span",
            [
              _c(
                "v-container",
                [
                  _c("v-row", [
                    _vm._v(
                      "\n                    Vyhledávání ...\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-row", { staticClass: "mt-2" }, [
                    _vm._v(
                      "\n                    Pro vyvolání tohoto okna stistkněte klávesu 'alt'\n                "
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "500" },
          model: {
            value: _vm.searchDialogInput,
            callback: function($$v) {
              _vm.searchDialogInput = $$v
            },
            expression: "searchDialogInput"
          }
        },
        [
          _c(
            "v-card",
            { attrs: { flat: "" } },
            [
              _c(
                "v-card-text",
                { staticClass: "pt-6" },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-autocomplete", {
                        attrs: {
                          autofocus: "",
                          items: _vm.entries,
                          "cache-items": "",
                          "hide-no-data": "",
                          "hide-selected": "",
                          "item-text": "result",
                          "item-value": "url",
                          placeholder: "Vyhledejte v dokumentaci ... ",
                          "prepend-inner-icon": "mdi-magnify",
                          "return-object": ""
                        },
                        model: {
                          value: _vm.model,
                          callback: function($$v) {
                            _vm.model = $$v
                          },
                          expression: "model"
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Settings/SettingsMenuComponent.vue?vue&type=template&id=bb4c40cc&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Settings/SettingsMenuComponent.vue?vue&type=template&id=bb4c40cc& ***!
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
        "v-list",
        { attrs: { dense: "", nav: "" } },
        [
          _vm._l(_vm.items, function(item) {
            return _c(
              "v-list-item",
              {
                key: item.title,
                staticClass: "pl-16",
                attrs: { link: "", to: "/settings/" + item.route }
              },
              [
                _c(
                  "v-list-item-icon",
                  [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-list-item-content",
                  [_c("v-list-item-title", [_vm._v(_vm._s(item.title))])],
                  1
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "v-list-group",
            {
              attrs: { "no-action": "", "sub-group": "", value: true },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function() {
                    return [
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v(" mdi-devices")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-item-title", { staticClass: "ml-8" }, [
                        _vm._v("Zařízení")
                      ])
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _vm._l(_vm.devices, function(ref, i) {
                var title = ref[0]
                var icon = ref[1]
                var path = ref[2]
                return _c(
                  "v-list-item",
                  { key: i, attrs: { link: "", to: "/settings/" + path } },
                  [
                    _c(
                      "v-list-item-icon",
                      [
                        _c("v-icon", {
                          domProps: { textContent: _vm._s(icon) }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-list-item-title", {
                      domProps: { textContent: _vm._s(title) }
                    })
                  ],
                  1
                )
              })
            ],
            2
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/ChannelsMenuComponent.vue?vue&type=template&id=816eb64c&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/channels/ChannelsMenuComponent.vue?vue&type=template&id=816eb64c& ***!
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
        "v-list",
        {
          staticClass: "ml-12",
          attrs: { dense: "", nav: "", color: "#F5F5F7" }
        },
        _vm._l(_vm.channels, function(channel) {
          return _c(
            "v-list-item",
            {
              key: channel.id,
              staticClass: "pl-3",
              attrs: { link: "", to: "/channel/" + channel.id },
              on: {
                contextmenu: function($event) {
                  return _vm.show($event, channel.id)
                }
              }
            },
            [_c("v-list-item-title", [_vm._v(" " + _vm._s(channel.nazev))])],
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
                      return _vm.editChannelNameDialog()
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
                      "\n                    Změnit název kanálu\n                "
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
                      return _vm.addMultiplexer()
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
                      "\n                    Přidat Multiplexer\n                "
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
                      return _vm.addPrijem()
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
                      "\n                    Přidat příjem\n                "
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
                      return _vm.addBackupPrijem()
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
                      "\n                    Přidat záložní příjem\n                "
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
                      return _vm.addEvent()
                    }
                  }
                },
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", { attrs: { "x-small": "" } }, [
                        _vm._v("mdi-calendar")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", [
                    _vm._v(
                      "\n                    Přidat událost\n                "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-list-item",
                {
                  on: {
                    click: function($event) {
                      return _vm.createNewChannelDialog()
                    }
                  }
                },
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c(
                        "v-icon",
                        { attrs: { color: "green", "x-small": "" } },
                        [_vm._v("mdi-plus")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", [
                    _vm._v(
                      "\n                    Založit nový kanál\n                "
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
                      return _vm.removeChannelDialog()
                    }
                  }
                },
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", { attrs: { color: "red", "x-small": "" } }, [
                        _vm._v("mdi-delete")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", [
                    _vm._v(
                      "\n                    Odebrat kanál\n                "
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
                value: _vm.deleteDialog,
                callback: function($$v) {
                  _vm.deleteDialog = $$v
                },
                expression: "deleteDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Odebrání kanálu")
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
                            _c("h3", [
                              _vm._v(
                                "\n                                Touto akcí smažete veškeré záznamy z\n                                Multicastu, unicastu, také dojde k\n                                odstranění z dohledu a Transcodéru\n                            "
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
                              _vm.deleteDialog = false
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
                              return _vm.removeChannel()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Smazat\n                    "
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
              attrs: { persistent: "", "max-width": "1000px" },
              model: {
                value: _vm.createMultiplexerDialog,
                callback: function($$v) {
                  _vm.createMultiplexerDialog = $$v
                },
                expression: "createMultiplexerDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Přidání multiplexoru ke kanálu")
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
                                      items: _vm.editMultiplexors,
                                      "item-text": "name",
                                      "item-value": "id",
                                      required: "",
                                      clearable: ""
                                    },
                                    model: {
                                      value: _vm.multiplexer,
                                      callback: function($$v) {
                                        _vm.multiplexer = $$v
                                      },
                                      expression: "multiplexer"
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
                              return _vm.saveMultiplexerdata()
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
              attrs: { persistent: "", "max-width": "1000px" },
              model: {
                value: _vm.createPrijemDialog,
                callback: function($$v) {
                  _vm.createPrijemDialog = $$v
                },
                expression: "createPrijemDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Přidání přijímače ke kanálu")
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
                                      items: _vm.prijems,
                                      required: "",
                                      clearable: ""
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.GetMoreInformationAboutThisDevice(
                                          _vm.prijem
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.prijem,
                                      callback: function($$v) {
                                        _vm.prijem = $$v
                                      },
                                      expression: "prijem"
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
                                      _vm.deviceInformation.outputInterfaces !=
                                      null
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
                                              value: _vm.prijemInterfaces,
                                              callback: function($$v) {
                                                _vm.prijemInterfaces = $$v
                                              },
                                              expression: "prijemInterfaces"
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
                              return _vm.savePrijemData()
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
              attrs: { persistent: "", "max-width": "1000px" },
              model: {
                value: _vm.createBackupPrijemDialog,
                callback: function($$v) {
                  _vm.createBackupPrijemDialog = $$v
                },
                expression: "createBackupPrijemDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Přidání záložního přijímače ke kanálu")
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
                                      items: _vm.prijems,
                                      required: "",
                                      clearable: ""
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.GetMoreInformationAboutThisDevice(
                                          _vm.backup
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.backup,
                                      callback: function($$v) {
                                        _vm.backup = $$v
                                      },
                                      expression: "backup"
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
                                      _vm.deviceInformation.outputInterfaces !=
                                      null
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
                                              value: _vm.prijemInterfaces,
                                              callback: function($$v) {
                                                _vm.prijemInterfaces = $$v
                                              },
                                              expression: "prijemInterfaces"
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
                              return _vm.saveBackupPrijemData()
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
              attrs: { persistent: "", "max-width": "1000px" },
              model: {
                value: _vm.createEventDialog,
                callback: function($$v) {
                  _vm.createEventDialog = $$v
                },
                expression: "createEventDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Přidání nové události")
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
                                { attrs: { cols: "12", sm: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Den začátku události",
                                      type: "date",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.start_day,
                                      callback: function($$v) {
                                        _vm.start_day = $$v
                                      },
                                      expression: "start_day"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Čas začátku události",
                                      type: "time",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.start_time,
                                      callback: function($$v) {
                                        _vm.start_time = $$v
                                      },
                                      expression: "start_time"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Den konce události",
                                      type: "date",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.end_day,
                                      callback: function($$v) {
                                        _vm.end_day = $$v
                                      },
                                      expression: "end_day"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Čas konce události",
                                      type: "time",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.end_time,
                                      callback: function($$v) {
                                        _vm.end_time = $$v
                                      },
                                      expression: "end_time"
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
                                      label: "Popis události",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.event_note,
                                      callback: function($$v) {
                                        _vm.event_note = $$v
                                      },
                                      expression: "event_note"
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
                                  _c("v-switch", {
                                    attrs: { label: "Kanál bude mít výpadek" },
                                    model: {
                                      value: _vm.vypadek,
                                      callback: function($$v) {
                                        _vm.vypadek = $$v
                                      },
                                      expression: "vypadek"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.vypadek === true
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-checkbox", {
                                        attrs: {
                                          label:
                                            "\n                                        Propsání události do dohledu\n                                    "
                                        },
                                        model: {
                                          value: _vm.checkbox_create_to_dohled,
                                          callback: function($$v) {
                                            _vm.checkbox_create_to_dohled = $$v
                                          },
                                          expression:
                                            "checkbox_create_to_dohled"
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
                              return _vm.saveEvent()
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
              attrs: { persistent: "", "max-width": "1000px" },
              model: {
                value: _vm.editChannelName,
                callback: function($$v) {
                  _vm.editChannelName = $$v
                },
                expression: "editChannelName"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Změna názvu kanálu")
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
                                    attrs: {
                                      label: "Název kanálu",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.channelName,
                                      callback: function($$v) {
                                        _vm.channelName = $$v
                                      },
                                      expression: "channelName"
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
                              return _vm.saveChannelName()
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
              attrs: { persistent: "", "max-width": "1000px" },
              model: {
                value: _vm.createNewChannel,
                callback: function($$v) {
                  _vm.createNewChannel = $$v
                },
                expression: "createNewChannel"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Vytvoření nového kanálu")
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
                                    attrs: { label: "Název kanálu" },
                                    model: {
                                      value: _vm.channelName,
                                      callback: function($$v) {
                                        _vm.channelName = $$v
                                      },
                                      expression: "channelName"
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
                                      label: "Zdroj multicastu",
                                      "item-text": "zdroj",
                                      "item-value": "id",
                                      items: _vm.sources,
                                      required: "",
                                      clearable: ""
                                    },
                                    model: {
                                      value: _vm.multicastZdroj,
                                      callback: function($$v) {
                                        _vm.multicastZdroj = $$v
                                      },
                                      expression: "multicastZdroj"
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
                                      value: _vm.multicast_ip,
                                      callback: function($$v) {
                                        _vm.multicast_ip = $$v
                                      },
                                      expression: "multicast_ip"
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
                                      value: _vm.stb_ip,
                                      callback: function($$v) {
                                        _vm.stb_ip = $$v
                                      },
                                      expression: "stb_ip"
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
                                      value: _vm.backup_multicastZdroj,
                                      callback: function($$v) {
                                        _vm.backup_multicastZdroj = $$v
                                      },
                                      expression: "backup_multicastZdroj"
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
                                      value: _vm.backup_multicast_ip,
                                      callback: function($$v) {
                                        _vm.backup_multicast_ip = $$v
                                      },
                                      expression: "backup_multicast_ip"
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
                                  _c("v-switch", {
                                    attrs: { label: "Založit do dohledu" },
                                    model: {
                                      value: _vm.zalozitDoDohledu,
                                      callback: function($$v) {
                                        _vm.zalozitDoDohledu = $$v
                                      },
                                      expression: "zalozitDoDohledu"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.zalozitDoDohledu === true
                                ? _c(
                                    "v-col",
                                    {
                                      attrs: { cols: "12", sm: "12", md: "6" }
                                    },
                                    [
                                      _c("v-checkbox", {
                                        attrs: { label: "Dohledovat" },
                                        model: {
                                          value: _vm.dohledovat,
                                          callback: function($$v) {
                                            _vm.dohledovat = $$v
                                          },
                                          expression: "dohledovat"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.zalozitDoDohledu === true
                                ? _c(
                                    "v-col",
                                    {
                                      attrs: { cols: "12", sm: "12", md: "6" }
                                    },
                                    [
                                      _c("v-checkbox", {
                                        attrs: { label: "Vytvařet náhledy" },
                                        model: {
                                          value: _vm.vytvaretNahled,
                                          callback: function($$v) {
                                            _vm.vytvaretNahled = $$v
                                          },
                                          expression: "vytvaretNahled"
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
                              return _vm.saveNewChannel()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/DevicesMenuComponent.vue?vue&type=template&id=10f1f2de&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/devices/DevicesMenuComponent.vue?vue&type=template&id=10f1f2de& ***!
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
      _c(
        "v-list",
        {
          staticClass: "ml-12",
          attrs: { dense: "", nav: "", color: "#F5F5F7" }
        },
        _vm._l(_vm.devices, function(device) {
          return _c(
            "v-list-item",
            {
              key: device.id,
              staticClass: "pl-3",
              attrs: { link: "", to: "/device/" + device.id },
              on: {
                contextmenu: function($event) {
                  return _vm.show($event, device.id)
                }
              }
            },
            [_c("v-list-item-title", [_vm._v(" " + _vm._s(device.name))])],
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
                      return _vm.openEditDeviceDialog()
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
                      "\n                    Upravit zařízení\n                "
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
                      return _vm.createDeviceDialog()
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
                      "\n                    Přidat nové zařízení\n                "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-list-item",
                {
                  on: {
                    click: function($event) {
                      return _vm.removeDeviceFromSystem()
                    }
                  }
                },
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", { attrs: { color: "red", "x-small": "" } }, [
                        _vm._v("mdi-delete")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", [
                    _vm._v(
                      "\n                    Odebrat zařízení\n                "
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
      _vm.editDeviceData != null
        ? _c(
            "v-row",
            { attrs: { justify: "center" } },
            [
              _c(
                "v-dialog",
                {
                  attrs: { persistent: "", "max-width": "1000px" },
                  model: {
                    value: _vm.editDeviceDialog,
                    callback: function($$v) {
                      _vm.editDeviceDialog = $$v
                    },
                    expression: "editDeviceDialog"
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-card-title", [
                        _c("span", { staticClass: "headline" }, [
                          _vm._v("Upravení zařízení")
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
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Název zařízení*",
                                          required: ""
                                        },
                                        model: {
                                          value: _vm.editDeviceData.name,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editDeviceData,
                                              "name",
                                              $$v
                                            )
                                          },
                                          expression: "editDeviceData.name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "IP" },
                                        model: {
                                          value: _vm.editDeviceData.ip,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editDeviceData,
                                              "ip",
                                              $$v
                                            )
                                          },
                                          expression: "editDeviceData.ip"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Uživatelské jméno",
                                          hint:
                                            "slouží pro přístup do zařízení",
                                          "persistent-hint": "",
                                          required: ""
                                        },
                                        model: {
                                          value: _vm.editDeviceData.login_user,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editDeviceData,
                                              "login_user",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "editDeviceData.login_user"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Uživatelské heslo",
                                          hint:
                                            "slouží pro přístup do zařízení",
                                          "persistent-hint": "",
                                          required: ""
                                        },
                                        model: {
                                          value:
                                            _vm.editDeviceData.login_password,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editDeviceData,
                                              "login_password",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "editDeviceData.login_password"
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
                                          label: "Kategorie*",
                                          items: _vm.categories,
                                          "item-text": "name",
                                          "item-value": "name",
                                          required: "",
                                          clearable: ""
                                        },
                                        model: {
                                          value: _vm.editDeviceData.category,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editDeviceData,
                                              "category",
                                              $$v
                                            )
                                          },
                                          expression: "editDeviceData.category"
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
                                          value:
                                            _vm.editDeviceData.haveInterface,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editDeviceData,
                                              "haveInterface",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "editDeviceData.haveInterface"
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
                                          label: "Výrobce*",
                                          items: _vm.vendors,
                                          "item-text": "vendor",
                                          "item-value": "vendor",
                                          required: "",
                                          clearable: ""
                                        },
                                        model: {
                                          value: _vm.editDeviceData.vendor,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editDeviceData,
                                              "vendor",
                                              $$v
                                            )
                                          },
                                          expression: "editDeviceData.vendor"
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
                          ),
                          _vm._v(" "),
                          _c("small", [
                            _vm._v("položky označeny * jsou povinné")
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
                                  return _vm.closeEditDialog()
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
                                  return _vm.saveEditDialog()
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
        : _vm._e(),
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
                value: _vm.deviceDialog,
                callback: function($$v) {
                  _vm.deviceDialog = $$v
                },
                expression: "deviceDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Založení zařízení")
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
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Název zařízení*",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.deviceName,
                                      callback: function($$v) {
                                        _vm.deviceName = $$v
                                      },
                                      expression: "deviceName"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "IP" },
                                    model: {
                                      value: _vm.deviceIp,
                                      callback: function($$v) {
                                        _vm.deviceIp = $$v
                                      },
                                      expression: "deviceIp"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Uživatelské jméno",
                                      hint: "slouží pro přístup do zařízení",
                                      "persistent-hint": "",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.deviceUser,
                                      callback: function($$v) {
                                        _vm.deviceUser = $$v
                                      },
                                      expression: "deviceUser"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Uživatelské heslo",
                                      hint: "slouží pro přístup do zařízení",
                                      "persistent-hint": "",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.devicePassword,
                                      callback: function($$v) {
                                        _vm.devicePassword = $$v
                                      },
                                      expression: "devicePassword"
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
                                      label: "Kategorie*",
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
                                      value: _vm.interfaces,
                                      callback: function($$v) {
                                        _vm.interfaces = $$v
                                      },
                                      expression: "interfaces"
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
                                      label: "Výrobce*",
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
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("small", [_vm._v("položky označeny * jsou povinné")])
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
                              _vm.deviceDialog = false
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
                              return _vm.saveDialog()
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

/***/ "./resources/js/components/Alerts/AlertComponent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Alerts/AlertComponent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertComponent_vue_vue_type_template_id_ce57e084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertComponent.vue?vue&type=template&id=ce57e084& */ "./resources/js/components/Alerts/AlertComponent.vue?vue&type=template&id=ce57e084&");
/* harmony import */ var _AlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Alerts/AlertComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertComponent_vue_vue_type_template_id_ce57e084___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertComponent_vue_vue_type_template_id_ce57e084___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Alerts/AlertComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Alerts/AlertComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Alerts/AlertComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Alerts/AlertComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Alerts/AlertComponent.vue?vue&type=template&id=ce57e084&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Alerts/AlertComponent.vue?vue&type=template&id=ce57e084& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_template_id_ce57e084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertComponent.vue?vue&type=template&id=ce57e084& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Alerts/AlertComponent.vue?vue&type=template&id=ce57e084&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_template_id_ce57e084___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_template_id_ce57e084___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Alerts/EventComponent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Alerts/EventComponent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventComponent_vue_vue_type_template_id_6a509b40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventComponent.vue?vue&type=template&id=6a509b40& */ "./resources/js/components/Alerts/EventComponent.vue?vue&type=template&id=6a509b40&");
/* harmony import */ var _EventComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Alerts/EventComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EventComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EventComponent_vue_vue_type_template_id_6a509b40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EventComponent_vue_vue_type_template_id_6a509b40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Alerts/EventComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Alerts/EventComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Alerts/EventComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Alerts/EventComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Alerts/EventComponent.vue?vue&type=template&id=6a509b40&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Alerts/EventComponent.vue?vue&type=template&id=6a509b40& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComponent_vue_vue_type_template_id_6a509b40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventComponent.vue?vue&type=template&id=6a509b40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Alerts/EventComponent.vue?vue&type=template&id=6a509b40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComponent_vue_vue_type_template_id_6a509b40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComponent_vue_vue_type_template_id_6a509b40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Cards/CardMenuComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Cards/CardMenuComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardMenuComponent_vue_vue_type_template_id_2f5217c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardMenuComponent.vue?vue&type=template&id=2f5217c7& */ "./resources/js/components/Cards/CardMenuComponent.vue?vue&type=template&id=2f5217c7&");
/* harmony import */ var _CardMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardMenuComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Cards/CardMenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardMenuComponent_vue_vue_type_template_id_2f5217c7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardMenuComponent_vue_vue_type_template_id_2f5217c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Cards/CardMenuComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Cards/CardMenuComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Cards/CardMenuComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardMenuComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/CardMenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Cards/CardMenuComponent.vue?vue&type=template&id=2f5217c7&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Cards/CardMenuComponent.vue?vue&type=template&id=2f5217c7& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMenuComponent_vue_vue_type_template_id_2f5217c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardMenuComponent.vue?vue&type=template&id=2f5217c7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/CardMenuComponent.vue?vue&type=template&id=2f5217c7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMenuComponent_vue_vue_type_template_id_2f5217c7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardMenuComponent_vue_vue_type_template_id_2f5217c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/NavigationComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/NavigationComponent.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationComponent_vue_vue_type_template_id_34a84aa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationComponent.vue?vue&type=template&id=34a84aa4& */ "./resources/js/components/NavigationComponent.vue?vue&type=template&id=34a84aa4&");
/* harmony import */ var _NavigationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/NavigationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavigationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationComponent_vue_vue_type_template_id_34a84aa4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavigationComponent_vue_vue_type_template_id_34a84aa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NavigationComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NavigationComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/NavigationComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavigationComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NavigationComponent.vue?vue&type=template&id=34a84aa4&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/NavigationComponent.vue?vue&type=template&id=34a84aa4& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationComponent_vue_vue_type_template_id_34a84aa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationComponent.vue?vue&type=template&id=34a84aa4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavigationComponent.vue?vue&type=template&id=34a84aa4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationComponent_vue_vue_type_template_id_34a84aa4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationComponent_vue_vue_type_template_id_34a84aa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SearchBar/SearchComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/SearchBar/SearchComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchComponent_vue_vue_type_template_id_8f542214___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchComponent.vue?vue&type=template&id=8f542214& */ "./resources/js/components/SearchBar/SearchComponent.vue?vue&type=template&id=8f542214&");
/* harmony import */ var _SearchComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/SearchBar/SearchComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchComponent_vue_vue_type_template_id_8f542214___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchComponent_vue_vue_type_template_id_8f542214___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SearchBar/SearchComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SearchBar/SearchComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/SearchBar/SearchComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchBar/SearchComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SearchBar/SearchComponent.vue?vue&type=template&id=8f542214&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/SearchBar/SearchComponent.vue?vue&type=template&id=8f542214& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchComponent_vue_vue_type_template_id_8f542214___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchComponent.vue?vue&type=template&id=8f542214& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchBar/SearchComponent.vue?vue&type=template&id=8f542214&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchComponent_vue_vue_type_template_id_8f542214___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchComponent_vue_vue_type_template_id_8f542214___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Settings/SettingsMenuComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/Settings/SettingsMenuComponent.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SettingsMenuComponent_vue_vue_type_template_id_bb4c40cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsMenuComponent.vue?vue&type=template&id=bb4c40cc& */ "./resources/js/components/Settings/SettingsMenuComponent.vue?vue&type=template&id=bb4c40cc&");
/* harmony import */ var _SettingsMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsMenuComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Settings/SettingsMenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SettingsMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SettingsMenuComponent_vue_vue_type_template_id_bb4c40cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SettingsMenuComponent_vue_vue_type_template_id_bb4c40cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Settings/SettingsMenuComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Settings/SettingsMenuComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Settings/SettingsMenuComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SettingsMenuComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Settings/SettingsMenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Settings/SettingsMenuComponent.vue?vue&type=template&id=bb4c40cc&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Settings/SettingsMenuComponent.vue?vue&type=template&id=bb4c40cc& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsMenuComponent_vue_vue_type_template_id_bb4c40cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SettingsMenuComponent.vue?vue&type=template&id=bb4c40cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Settings/SettingsMenuComponent.vue?vue&type=template&id=bb4c40cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsMenuComponent_vue_vue_type_template_id_bb4c40cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsMenuComponent_vue_vue_type_template_id_bb4c40cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/channels/ChannelsMenuComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/channels/ChannelsMenuComponent.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelsMenuComponent_vue_vue_type_template_id_816eb64c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelsMenuComponent.vue?vue&type=template&id=816eb64c& */ "./resources/js/components/channels/ChannelsMenuComponent.vue?vue&type=template&id=816eb64c&");
/* harmony import */ var _ChannelsMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelsMenuComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/channels/ChannelsMenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelsMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelsMenuComponent_vue_vue_type_template_id_816eb64c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelsMenuComponent_vue_vue_type_template_id_816eb64c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/channels/ChannelsMenuComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/channels/ChannelsMenuComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/channels/ChannelsMenuComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelsMenuComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/ChannelsMenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/channels/ChannelsMenuComponent.vue?vue&type=template&id=816eb64c&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/channels/ChannelsMenuComponent.vue?vue&type=template&id=816eb64c& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsMenuComponent_vue_vue_type_template_id_816eb64c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelsMenuComponent.vue?vue&type=template&id=816eb64c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/channels/ChannelsMenuComponent.vue?vue&type=template&id=816eb64c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsMenuComponent_vue_vue_type_template_id_816eb64c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsMenuComponent_vue_vue_type_template_id_816eb64c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/devices/DevicesMenuComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/devices/DevicesMenuComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DevicesMenuComponent_vue_vue_type_template_id_10f1f2de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DevicesMenuComponent.vue?vue&type=template&id=10f1f2de& */ "./resources/js/components/devices/DevicesMenuComponent.vue?vue&type=template&id=10f1f2de&");
/* harmony import */ var _DevicesMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DevicesMenuComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/devices/DevicesMenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DevicesMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DevicesMenuComponent_vue_vue_type_template_id_10f1f2de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DevicesMenuComponent_vue_vue_type_template_id_10f1f2de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/devices/DevicesMenuComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/devices/DevicesMenuComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/devices/DevicesMenuComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DevicesMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DevicesMenuComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/DevicesMenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DevicesMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/devices/DevicesMenuComponent.vue?vue&type=template&id=10f1f2de&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/devices/DevicesMenuComponent.vue?vue&type=template&id=10f1f2de& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DevicesMenuComponent_vue_vue_type_template_id_10f1f2de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DevicesMenuComponent.vue?vue&type=template&id=10f1f2de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/devices/DevicesMenuComponent.vue?vue&type=template&id=10f1f2de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DevicesMenuComponent_vue_vue_type_template_id_10f1f2de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DevicesMenuComponent_vue_vue_type_template_id_10f1f2de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);