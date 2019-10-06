define(function (require) {
  var echarts = require('echarts')
  var Cesium = require('Cesium')

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
})
