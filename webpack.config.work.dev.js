var path = require('path');
var webpack = require('webpack');
var values = require('postcss-modules-values');
var cssnano = require('cssnano');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry:{
		home:[
			'webpack-hot-middleware/client?reload=true',
			__dirname + '/dist/js/jquery-weui.min.js',
			__dirname + '/workspace/meal/home.js',
 		],
 		orderdetail:[
			'webpack-hot-middleware/client?reload=true',
			__dirname + '/dist/js/jquery-weui.min.js',
			__dirname + '/workspace/meal/orderdetail.js',
 		],
 		myorders:[
			'webpack-hot-middleware/client?reload=true',
			__dirname + '/workspace/meal/myorders.js',
 		],
 		settle:[
			'webpack-hot-middleware/client?reload=true',
			__dirname + '/workspace/meal/settle.js',
 		],
 		wpay:[
			'webpack-hot-middleware/client?reload=true',
			__dirname + '/dist/js/jquery-weui.min.js',
			__dirname + '/workspace/meal/wpay.js',
 		],
 		vendors:['react','react-dom','classnames'],
	},
	output:{
		filename:'[name].js',
		publicPath:'/static/',
	},
	module:{
		rules:[
			{
				test: /\.js(x)*$/, 
				exclude: /node_modules/,
				loaders: ['react-hot-loader','babel-loader'],
				include: [
	                // 只去解析运行目录下的 src(提高webpack性能)
	                path.join(process.cwd(), './workspace'),
	            ],
				exclude: function(path) {
		            // 路径中含有 node_modules 的就不去解析。(提高webpack性能)
		            var isNpmModule = !!path.match(/node_modules/);
		            return isNpmModule;
		        },
			},
			{
				test: /\.css$/,
				include:[
					path.resolve(__dirname,'./workspace'),
				],
				loader: "style-loader!css-loader?modules!postcss-loader"
			},
			{
				test:/\.scss$/,
				include:[
					path.resolve(__dirname,'./workspace'),
				],
				loader:'style-loader!css-loader!sass-loader?sourceMap=true&sourceMapContents=true',
			},
			{
				test:/\.(png|jpg)$/,
				include:[
					path.resolve(__dirname,'./workspace'),
				],
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
		new webpack.ProvidePlugin({
		      $:"jquery",
		      jQuery:"jquery",
		      "window.jQuery":"jquery",
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV),
			__DEV__:true,
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	]
}