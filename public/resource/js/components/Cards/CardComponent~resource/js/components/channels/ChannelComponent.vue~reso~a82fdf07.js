(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource/js/components/Cards/CardComponent~resource/js/components/channels/ChannelComponent.vue~reso~a82fdf07"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tags/TagComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tags/TagComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tagId: null,
      menu: false,
      tags: [],
      type: null,
      addetableTags: null,
      NewTagsDialog: false,
      tagToAdd: null,
      showMenu: false,
      x: 0,
      y: 0
    };
  },
  created: function created() {
    this.loadTags();
  },
  methods: {
    show: function show(e, tagId) {
      var _this = this;

      this.tagId = tagId;
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(function () {
        _this.showMenu = true;
      });
    },
    loadTags: function loadTags() {
      var _this2 = this;

      // obecná fn , kdy se bude hlídat uri a dle toho se bude hledat tag pro daný source
      axios.post("tags", {
        id: this.$route.params.id,
        datatype: this.checkUri()
      }).then(function (response) {
        _this2.tags = response.data;
      });
    },
    checkUri: function checkUri() {
      if (this.$route.path === "/channel/" + this.$route.params.id) {
        this.type = "multicast";
        return "multicastId";
      }

      if (this.$route.path === "/channel/" + this.$route.params.id + "/h264") {
        this.type = "h264";
        return "h264Id";
      }

      if (this.$route.path === "/channel/" + this.$route.params.id + "/h265") {
        this.type = "h265";
        return "h265Id";
      }

      if (this.$route.path === "/device/" + this.$route.params.id) {
        this.type = "device";
        return "deviceId";
      }
    },
    OpenDialogForNewTag: function OpenDialogForNewTag() {
      var _this3 = this;

      axios.get("tags").then(function (response) {
        _this3.addetableTags = response.data.tags;
        _this3.NewTagsDialog = true;
      });
    },
    addtag: function addtag() {
      var _this4 = this;

      axios.post("tag/add", {
        id: this.$route.params.id,
        type: this.type,
        tagId: this.tagToAdd
      }).then(function (response) {
        _this4.$store.state.alerts = response.data.alert;
        _this4.NewTagsDialog = false;

        _this4.loadTags();
      });
    },
    removeTag: function removeTag() {
      var _this5 = this;

      axios.post("tag/removeFrom", {
        tagId: this.tagId
      }).then(function (response) {
        _this5.$store.state.alerts = response.data.alert;

        _this5.loadTags();
      });
    }
  },
  watch: {
    $route: function $route(to, from) {
      this.loadTags();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Default/DefaultComponent.vue?vue&type=template&id=4e717756&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Default/DefaultComponent.vue?vue&type=template&id=4e717756& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "ml-16" },
        [
          _c(
            "v-card",
            { staticClass: "ml-16", attrs: { flat: "" } },
            [
              _c("v-alert", { staticClass: "ml-16", attrs: { type: "info" } }, [
                _vm._v("\n                Vyberte z menu v levo\n            ")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tags/TagComponent.vue?vue&type=template&id=8204b504&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tags/TagComponent.vue?vue&type=template&id=8204b504& ***!
  \********************************************************************************************************************************************************************************************************************/
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
        "v-toolbar",
        { attrs: { fixed: "", dense: "", flat: "" } },
        [
          _c("v-spacer"),
          _vm._v(" "),
          _vm._l(_vm.tags, function(tag) {
            return _c(
              "div",
              { key: tag.id, staticClass: "text-center" },
              [
                _c(
                  "v-chip",
                  {
                    staticClass: "ma-2 white--text",
                    attrs: {
                      small: "",
                      color: tag.color,
                      dense: "",
                      label: ""
                    },
                    on: {
                      contextmenu: function($event) {
                        return _vm.show($event, tag.id)
                      }
                    }
                  },
                  [_vm._v(_vm._s(tag.tagName))]
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "div",
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
                                on: {
                                  click: function($event) {
                                    return _vm.OpenDialogForNewTag()
                                  }
                                }
                              },
                              on
                            ),
                            [
                              _vm._v(
                                "\n                        mdi-plus\n                    "
                              )
                            ]
                          )
                        ]
                      }
                    }
                  ])
                },
                [_vm._v(" "), _c("span", [_vm._v("Nový štítek")])]
              )
            ],
            1
          )
        ],
        2
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
                value: _vm.NewTagsDialog,
                callback: function($$v) {
                  _vm.NewTagsDialog = $$v
                },
                expression: "NewTagsDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Přidat štítek")
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
                                    md: "12",
                                    lg: "12"
                                  }
                                },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      autofocus: "",
                                      items: _vm.addetableTags,
                                      "hide-no-data": "",
                                      "hide-selected": "",
                                      "item-text": "tagName",
                                      "item-value": "id"
                                    },
                                    model: {
                                      value: _vm.tagToAdd,
                                      callback: function($$v) {
                                        _vm.tagToAdd = $$v
                                      },
                                      expression: "tagToAdd"
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
                          attrs: { color: "red darken-1", text: "" },
                          on: {
                            click: function($event) {
                              _vm.NewTagsDialog = false
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
                              return _vm.addtag()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Založit\n                    "
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
                      return _vm.removeTag()
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Default/DefaultComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Default/DefaultComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DefaultComponent_vue_vue_type_template_id_4e717756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultComponent.vue?vue&type=template&id=4e717756& */ "./resources/js/components/Default/DefaultComponent.vue?vue&type=template&id=4e717756&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _DefaultComponent_vue_vue_type_template_id_4e717756___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DefaultComponent_vue_vue_type_template_id_4e717756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Default/DefaultComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Default/DefaultComponent.vue?vue&type=template&id=4e717756&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Default/DefaultComponent.vue?vue&type=template&id=4e717756& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultComponent_vue_vue_type_template_id_4e717756___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DefaultComponent.vue?vue&type=template&id=4e717756& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Default/DefaultComponent.vue?vue&type=template&id=4e717756&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultComponent_vue_vue_type_template_id_4e717756___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DefaultComponent_vue_vue_type_template_id_4e717756___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Tags/TagComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Tags/TagComponent.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TagComponent_vue_vue_type_template_id_8204b504___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagComponent.vue?vue&type=template&id=8204b504& */ "./resources/js/components/Tags/TagComponent.vue?vue&type=template&id=8204b504&");
/* harmony import */ var _TagComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Tags/TagComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TagComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TagComponent_vue_vue_type_template_id_8204b504___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TagComponent_vue_vue_type_template_id_8204b504___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tags/TagComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tags/TagComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Tags/TagComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TagComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tags/TagComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tags/TagComponent.vue?vue&type=template&id=8204b504&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Tags/TagComponent.vue?vue&type=template&id=8204b504& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_template_id_8204b504___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TagComponent.vue?vue&type=template&id=8204b504& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tags/TagComponent.vue?vue&type=template&id=8204b504&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_template_id_8204b504___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TagComponent_vue_vue_type_template_id_8204b504___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);