var autoprefixer = require('autoprefixer');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var path = require("path");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry:{
		main: './app/js/main.js',
	},
	output: {
		path:'dist',
		filename: '[name].js',
	},
	// externals: {
	//     'react': 'window.__LIB["react"]',
	//   },
	module: {
		loaders: [
			{ 
				test: /\.js(x)*$/, 
				exclude: /node_modules/,
				loader: 'babel',
				include: [
	                // 只去解析运行目录下的 src(提高webpack性能)
	                path.join(process.cwd(), './app'),
	            ],
				query: {
	              	presets: ['es2015','react', 'stage-0']//转义es6
	            },
				exclude: function(path) {
		            // 路径中含有 node_modules 的就不去解析。(提高webpack性能)
		            var isNpmModule = !!path.match(/node_modules/);
		            return isNpmModule;
		        },
			},
        ]
	},
	resolve: {
		root: path.resolve('src/node_modules'),//(提高webpack性能)
		extensions: ['', '.js', '.jsx'],//(提高webpack性能)
        // root: [],
        // alias: {
        //     'jquery': __dirname + '/lib/jquery-1.11.1.min.js'//别名
        // }
    },
	plugins:[
	    // new HtmlWebpackPlugin({//自动生成HTML
		   //  title: 'My App',
		   //  // favicon:'./src/img/favicon.ico', //favicon路径
		   //  filename:'index.html',    //生成的html存放路径，相对于 path
		   //  // template:'./src/index.html',    //html模板路径
		   //  inject:true,    //允许插件修改哪些内容，包括head与body
		   //  hash:true,    //为静态资源生成hash值
		   //  minify: {
	    //         removeComments: true,//移除HTML中的注释
	    //         collapseWhitespace: false//删除空白符与换行符
	    //     },
	    //     cache:false,
	    //     showErrors:false,
	    //     inject: 'body',
	    //     chunks:['page']
	    // }),
	    new BrowserSyncPlugin({//实时刷新
	            host: 'localhost',
	            port: 3001,
	            files: '',
	            server: {
	                //指定服务器启动根目录
	                baseDir: './dist'
	            }
	    }),
	    // new ExtractTextPlugin("styles.css"),//提取的样式文件明
	    // new webpack.ProvidePlugin({//设置全局jquery
     //        $: 'jquery'
     //    }),
        new webpack.DllReferencePlugin({//优化webpack将react react-dom单独分出
	      	context: __dirname,
	      	manifest: require('./dist/vendor-manifest.json')
	    }),
     	new webpack.DefinePlugin({
     	      "process.env": {
     	        NODE_ENV: JSON.stringify("production")
     	      }
     	    }),
	    // new webpack.optimize.UglifyJsPlugin({//压缩,会减慢效率所以注释
	    //     compress: {
	    //        warnings: false
	    //     }
     //    }),
       
    ],
	// postcss:[autoprefixer({browsers:['last 4 versions']})]//样式前缀4个前缀
}