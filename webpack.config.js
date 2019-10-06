var PROD = process.argv.indexOf('-p') >= 0;

module.exports = {
    entry: {
        'FlowEcharts': __dirname + '/index.js',
    },
    output: {
        libraryTarget: 'umd',
        library: ['[name]'],
        path: __dirname + '/dist/',
        filename: PROD ? '[name].min.js' : '[name].js'
    },
    externals: {
        'echarts': 'echarts',
        'Cesium': 'Cesium'
    }
};
