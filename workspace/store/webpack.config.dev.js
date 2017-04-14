var path = require('path');
var webpack = require('webpack');
var values = require('postcss-modules-values');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry:{
		app:[
			'webpack-hot-middleware/client?reload=true',
			__dirname + '/../common/js/jquery-weui.min.js',
			__dirname + '/./js/main.js',
 		],
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
				exclude: function(path) {
		            // 路径中含有 node_modules 的就不去解析。(提高webpack性能)
		            var isNpmModule = !!path.match(/node_modules/);
		            return isNpmModule;
		        },
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader?modules!postcss-loader"
			},
			{
                test:/\.scss$/,
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
			    	values,
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
