var path = require('path');
var webpack = require('webpack');
var values = require('postcss-modules-values');
var cssnano = require('cssnano');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry:{
        home:[
            'webpack-hot-middleware/client?reload=true',
             __dirname + '/../common/js/jquery-weui.min.js',
             __dirname + '/home.js',
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
