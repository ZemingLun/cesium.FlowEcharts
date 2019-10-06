(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("echarts"), require("Cesium"));
	else if(typeof define === 'function' && define.amd)
		define(["echarts", "Cesium"], factory);
	else if(typeof exports === 'object')
		exports["FlowEcharts"] = factory(require("echarts"), require("Cesium"));
	else
		root["FlowEcharts"] = factory(root["echarts"], root["Cesium"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)
var FlowEcharts=__webpack_require__(7)
module.exports=FlowEcharts;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * GLMap component extension
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  __webpack_require__(2).registerCoordinateSystem(
    'GLMap', __webpack_require__(3)
  )
  __webpack_require__(5)
  __webpack_require__(6)

  // Action
  __webpack_require__(2).registerAction({
    type: 'GLMapRoam',
    event: 'GLMapRoam',
    update: 'updateLayout'
  }, function(payload, ecModel) {
  })

  return {
    version: '1.0.0'
  }
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))




/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require) {
  var echarts = __webpack_require__(2)
  var Cesium = __webpack_require__(4)

  function GLMapCoordSys (GLMap, api) {
    this._GLMap = GLMap
    this.dimensions = ['lng', 'lat']
    this._mapOffset = [0, 0]

    this._api = api
  }

  GLMapCoordSys.prototype.dimensions = ['lng', 'lat']

  GLMapCoordSys.prototype.setMapOffset = function (mapOffset) {
    this._mapOffset = mapOffset
  }

  GLMapCoordSys.prototype.getBMap = function () {
    return this._GLMap
  }

  GLMapCoordSys.prototype.dataToPoint = function (data) {
    var maxReadRadians = Cesium.Math.toRadians(80)
    var undefinePosition = [99999, 99999]
    var position = Cesium.Cartesian3.fromDegrees(data[0], data[1]);
    if (!position){
      return undefinePosition;
    }
    var canvasCoordinates = this._GLMap.cartesianToCanvasCoordinates(position);
    if (!canvasCoordinates){
      return undefinePosition;
    }
    var scene = this._GLMap;
    if (scene.mode === Cesium.SceneMode.SCENE3D) {
      if (Cesium.Cartesian3.angleBetween(scene.camera.position, position) > maxReadRadians){
        return false
      }
    }
    return [canvasCoordinates.x - this._mapOffset[0], canvasCoordinates.y - this._mapOffset[1]]
  }

  GLMapCoordSys.prototype.pointToData = function (pt) {
    var mapOffset = this._mapOffset
    var pt = this._bmap.project(
      [ pt[0] + mapOffset[0],
        pt[1] + mapOffset[1]]
    )
    return [pt.lng, pt.lat]
  }

  GLMapCoordSys.prototype.getViewRect = function () {
    var api = this._api
    return new echarts.graphic.BoundingRect(0, 0, api.getWidth(), api.getHeight())
  }

  GLMapCoordSys.prototype.getRoamTransform = function () {
    return echarts.matrix.create()
  }


  // For deciding which dimensions to use when creating list data
  GLMapCoordSys.dimensions = GLMapCoordSys.prototype.dimensions

  GLMapCoordSys.create = function (ecModel, api) {
    var coordSys;

    ecModel.eachComponent('GLMap', function (GLMapModel) {
      var viewportRoot = api.getZr().painter.getViewportRoot()
      var GLMap = echarts.glMap;
      coordSys = new GLMapCoordSys(GLMap, api)
      coordSys.setMapOffset(GLMapModel.__mapOffset || [0, 0])
      GLMapModel.coordinateSystem = coordSys
    })

    ecModel.eachSeries(function (seriesModel) {
      if (seriesModel.get('coordinateSystem') === 'GLMap') {
        seriesModel.coordinateSystem = coordSys
      }
    })
  }

  return GLMapCoordSys
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {

  return __webpack_require__(2).extendComponentModel({
    type: 'GLMap',

    getBMap: function() {
      // __bmap is injected when creating BMapCoordSys
      return this.__GLMap
    },

    defaultOption: {
      roam: false
    }
  })
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
  return __webpack_require__(2).extendComponentView({
    type: 'GLMap',

    init: function(ecModel, api) {
      this.api = api
      echarts.glMap.postRender.addEventListener(this.moveHandler, this)
    },
    moveHandler: function() {
      this.api.dispatchAction({ type: 'GLMapRoam' })
    },
    render: function(GLMapModel, ecModel, api) {

    },
    dispose: function(ecModel, api) {
      echarts.glMap.postRender.removeEventListener(this.moveHandler, this)
    }
  })
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))


/***/ }),
/* 7 */
/***/ (function(module, exports) {

function FlowEcharts(viewer, option) {
  this._mapContainer = viewer
  this._overlay = this._createChartOverlay()
  this._overlay.setOption(option)
}

FlowEcharts.prototype._createChartOverlay = function() {
  var scene = this._mapContainer.scene
  scene.canvas.setAttribute('tabIndex', 0)
  var echartDom = document.createElement('div')
  echartDom.style.position = 'absolute'
  echartDom.style.top = '0px'
  echartDom.style.left = '0px'
  echartDom.style.width = scene.canvas.width + 'px'
  echartDom.style.height = scene.canvas.height + 'px'
  echartDom.style.pointerEvents = 'none'
  echartDom.setAttribute('id', 'echarts')
  echartDom.setAttribute('class', 'echartMap')
  this._mapContainer.container.appendChild(echartDom)
  this._echartsContainer = echartDom
  echarts.glMap = scene
  return echarts.init(echartDom)
}

FlowEcharts.prototype.dispose = function() {
  if (this._echartsContainer) {
    this._mapContainer.container.removeChild(this._echartsContainer)
    this._echartsContainer = null
  }
  if (this._overlay) {
    this._overlay.dispose()
    this._overlay = null
  }
}

FlowEcharts.prototype.destroy = function() {
  this.dispose()
}

FlowEcharts.prototype.updateOverlay = function(option) {
  if (this._overlay) {
    this._overlay.setOption(option)
  }
}

FlowEcharts.prototype.getMap = function() {
  return this._mapContainer
}

FlowEcharts.prototype.getOverlay = function() {
  return this._overlay
}

module.exports = FlowEcharts


/***/ })
/******/ ]);
});