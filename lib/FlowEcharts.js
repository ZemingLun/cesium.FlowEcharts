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
