define(function(require) {
  return require('echarts').extendComponentView({
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
})
