global.webpackJsonp([3],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(16);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 json
  config: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '数字彩开奖',
    navigationBarTextStyle: 'black'
  }
});

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e55e3b08_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(22);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(17)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e55e3b08"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e55e3b08_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e55e3b08", Component.options)
  } else {
    hotAPI.reload("data-v-e55e3b08", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      motto: "Hello World",
      userInfo: {}
    };
  },

  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    getDataId(type) {
      console.log(type);
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
});

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "menu"
  }, [_c('p', {
    staticClass: "menu-item",
    attrs: {
      "index": "1",
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.getDataId('all')
      }
    }
  }, [_vm._v("全部")]), _vm._v(" "), _c('p', {
    staticClass: "menu-item",
    attrs: {
      "index": "2",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.getDataId('11X5')
      }
    }
  }, [_vm._v("11选5")]), _vm._v(" "), _c('p', {
    staticClass: "menu-item",
    attrs: {
      "index": "3",
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.getDataId('K3')
      }
    }
  }, [_vm._v("快3")]), _vm._v(" "), _c('p', {
    staticClass: "menu-item",
    attrs: {
      "index": "4",
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.getDataId('other')
      }
    }
  }, [_vm._v("其它")])], 1), _vm._v(" "), _vm._m(0)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list"
  }, [_c('a', {
    staticClass: "counter",
    attrs: {
      "href": "/pages/counter/main"
    }
  }, [_c('div', {
    staticClass: "items"
  }, [_c('div', [_c('span', {
    staticClass: "lotteryName"
  }, [_vm._v("双色球")]), _vm._v(" "), _c('span', {
    staticClass: "lotteryJackpot"
  }, [_vm._v("奖池32亿")]), _vm._v(" "), _c('div', {
    staticClass: "topRight"
  }, [_c('span', {
    staticClass: "issuName"
  }, [_vm._v("第2018011期")]), _vm._v(" "), _c('span', {
    staticClass: "date"
  }, [_vm._v("02-03")])])]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('span', {
    staticClass: "redBall"
  }, [_vm._v("1")]), _vm._v(" "), _c('span', {
    staticClass: "redBall"
  }, [_vm._v("2")]), _vm._v(" "), _c('span', {
    staticClass: "redBall"
  }, [_vm._v("3")]), _vm._v(" "), _c('span', {
    staticClass: "redBall"
  }, [_vm._v("4")]), _vm._v(" "), _c('span', {
    staticClass: "redBall"
  }, [_vm._v("5")]), _vm._v(" "), _c('span', {
    staticClass: "redBall"
  }, [_vm._v("6")]), _vm._v(" "), _c('span', {
    staticClass: "redBall"
  }, [_vm._v("7")]), _vm._v(" "), _c('span', {
    staticClass: "blueBall"
  }, [_vm._v("80")]), _vm._v(" "), _c('div', {
    staticClass: "topRight"
  }, [_c('img', {
    staticClass: "rightArrow",
    attrs: {
      "src": "../../../static/images/timeright.png",
      "alt": ""
    }
  })])])])]), _vm._v(" "), _c('a', {
    staticClass: "counter",
    attrs: {
      "href": "/pages/counter/main"
    }
  }, [_c('div', {
    staticClass: "items"
  }, [_c('div', [_c('span', {
    staticClass: "lotteryName"
  }, [_vm._v("双色球")]), _vm._v(" "), _c('span', {
    staticClass: "lotteryJackpot"
  }, [_vm._v("奖池32亿")]), _vm._v(" "), _c('div', {
    staticClass: "topRight"
  }, [_c('span', {
    staticClass: "issuName"
  }, [_vm._v("第2018011期")]), _vm._v(" "), _c('span', {
    staticClass: "date"
  }, [_vm._v("02-03")])])]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('span', {
    staticClass: "redBall"
  }, [_vm._v("11")]), _vm._v(" "), _c('span', {
    staticClass: "redBall"
  }, [_vm._v("21")]), _vm._v(" "), _c('span', {
    staticClass: "redBall"
  }, [_vm._v("32")]), _vm._v(" "), _c('span', {
    staticClass: "redBall"
  }, [_vm._v("42")]), _vm._v(" "), _c('span', {
    staticClass: "redBall"
  }, [_vm._v("52")]), _vm._v(" "), _c('span', {
    staticClass: "redBall"
  }, [_vm._v("62")]), _vm._v(" "), _c('span', {
    staticClass: "redBall"
  }, [_vm._v("72")]), _vm._v(" "), _c('span', {
    staticClass: "blueBall"
  }, [_vm._v("80")]), _vm._v(" "), _c('div', {
    staticClass: "topRight"
  }, [_c('img', {
    staticClass: "rightArrow",
    attrs: {
      "src": "../../../static/images/timeright.png",
      "alt": ""
    }
  })])])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e55e3b08", esExports)
  }
}

/***/ })

},[15]);
//# sourceMappingURL=main.js.map