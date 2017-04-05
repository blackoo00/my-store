var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssnano = require('cssnano');
var values = require('postcss-modules-values');

module.exports = {
	devtool: 'source-map',
	entry:{
		detail:[
            'webpack-hot-middleware/client?reload=true',
             __dirname + '/detail.js',
        ],
 		vendors:['react','react-dom','classnames','jquery','react-redux','redux'],
	},
	output:{
		path:path.resolve(__dirname + '/../../','build'),
		filename:'[name].js',
	},
	module:{
		rules:[
			{
				test: /\.js(x)*$/,
				exclude: /node_modules/,
				loaders:['babel-loader'],
				// include: [
	   //              // 只去解析运行目录下的 src(提高webpack性能)
	   //              path.join(process.cwd(), './workspace'),
	   //          ],
			},
			{
				test: /\.(css)$/,
				// include:[
				// 	path.resolve(__dirname,'./workspace'),
				// ],
	            loader:ExtractTextPlugin.extract({
	            	fallbackLoader: 'style-loader',
	            	loader: 'css-loader?modules!postcss-loader'
	            }),
			},
			{
				test:/\.scss$/,
				// include:[
				// 	path.resolve(__dirname,'./workspace'),
				// ],
				loader:ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader!sass-loader?modules!postcss-loader'
				}),
			},
			{
				test:/\.(png|jpg)$/,
				// include:[
				// 	path.resolve(__dirname,'./workspace'),
				// ],
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
