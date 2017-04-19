var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//var vue = require("vue-loader");
module.exports = {
	entry: {
		main: './main.js',
		vendor: [
			'jquery',
			"vue-router",
			"vue"
		]
	},
	output: {
		path: path.join(__dirname, './dist'),
		publicPath: './dist/',
		filename: "[name].min.js"
	},
	module: {
		rules: [{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			}

		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js' // 
		}
	},
	plugins: [
		//提公用js到common.js文件中[比如库文件等~~]
		//		new webpack.optimize.CommonsChunkPlugin({
		//         names: ['common']
		//      }),
		new ExtractTextPlugin({
			filename: "./css/[name].min.css",
			disable: false,
			allChunks: true
		}),
		// 使用 ProvidePlugin 加载使用率高的依赖库
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		})
	]
	//	devtool: 'source-map'
}