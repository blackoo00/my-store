var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssnano = require('cssnano');
var values = require('postcss-modules-values');

module.exports = {
	devtool: 'source-map',
	entry:{
		home:[
			__dirname + '/../common/js/jquery-weui.min.js',
            __dirname + '/home.js',
 		],
 		orderdetail:[
			__dirname + '/../common/js/jquery-weui.min.js',
            __dirname + '/orderdetail.js',
 		],
 		myorders:[
			__dirname + '/myorders.js',
 		],
 		settle:[
			__dirname + '/settle.js',
 		],
 		wpay:[
			__dirname + '/../common/js/jquery-weui.min.js',
            __dirname + '/wpay.js',
 		],
 		vendors:['react','react-dom','classnames','jquery','react-redux','redux'],
	},
	output:{
		path:path.resolve(__dirname + '/../../','mealbuild'),
		filename:'[name].js',
	},
	module:{
		rules:[
			{
				test: /\.js(x)*$/,
				exclude: /node_modules/,
				loaders:['babel-loader'],
			},
			{
				test: /\.(css)$/,
	            loader:ExtractTextPlugin.extract({
	            	fallbackLoader: 'style-loader',
	            	loader: 'css-loader?modules!postcss-loader'
	            }),
			},
			{
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader!sass-loader?modules!postcss-loader'
				}),
			},
			{
				test:/\.(png|jpg)$/,
				loader:'url-loader?limit=8192',
			},
		],
	},
	resolve:{
		extensions:['.js','.jsx','.scss','.css'],
	},
	plugins:[
		new webpack.LoaderOptionsPlugin({
		    options: {
			    postcss:[
			   		values,
		    		cssnano({
		    			sourcemap:true,
		    			autoprefixer:{
		    				add:true,
		    				remove:true,
		    				browsers:['last 2 version', 'Chrome 31', 'Safari 8'],
		    				discardComments:{
		    					removeAll:true,
		    				}
		    			}
		    		})
		    	],
		    }
		}),
		new webpack.optimize.CommonsChunkPlugin({name:'vendor'}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV),
			__DEV__:false,
		}),
		new ExtractTextPlugin({
			filename:'[name].css',
			disable:false,
			allChunks:true,//全部压缩到一个文件上
		}),
		new webpack.ProvidePlugin({
		      $:"jquery",
		      jQuery:"jquery",
		      "window.jQuery":"jquery",
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				unused:true,
				dead_code:true,
				warnings: false
			}
		})
	]
}
