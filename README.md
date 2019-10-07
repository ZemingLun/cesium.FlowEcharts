## cesium FlowEcharts
Add [echarts](https://github.com/ecomfe/echarts) charts to  [cesium](https://github.com/AnalyticalGraphicsInc/cesium) as a layer

In order to use this plugin, include the echartsjs, cesium and FlowEcharts.js  on your page and use it as follow:

### demo

[人员迁徙](https://zeminglun.github.io/cesium.FlowEcharts/demo/line.html)

[散点图态势](https://zeminglun.github.io/cesium.FlowEcharts/demo/scatter.html)

### import

```html
<script type="text/javascript" src="./lib/Cesium/Cesium.js"></script>
<script type="text/javascript" src="./lib/echarts-all-4.js"></script>
<script type="text/javascript" src="../dist/FlowEcharts.js"></script>
<link rel="stylesheet" href="./lib/Cesium/Widgets/widgets.css">
```


### Usage

set the charts attribute coordinateSystem:"GLMap"

```js
option = { 
  GLMap: { //Must

  },
  series: [{
    coordinateSystem: 'GLMap',
  }]
}
