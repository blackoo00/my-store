var path = require('path');
var webpack = require('webpack');
var values = require('postcss-modules-values');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry:{
		app:[
			'webpack-hot-middleware/client?reload=true',
			__dirname + '/dist/js/jquery-weui.min.js',
			__dirname + '/app/js/main.js',
 		],
 		vendors:['react','react-dom','react-router','react-addons-css-transition-group','classnames'],
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
	                path.join(process.cwd(), './app'),
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
					path.resolve(__dirname,'./app'),
				],
				loader: "style-loader!css-loader?modules!postcss-loader"
			},
			{
				test:/\.scss$/,
				include:[
					path.resolve(__dirname,'./app'),
				],
				loader:'style-loader!css-loader!sass-loader?sourceMap=true&sourceMapContents=true',
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
			    	values
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