/**
 * Created by snail on 2016/10/9.
 */
const path = require("path");
const webpack = require("webpack");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");//提取模块中复用的部分，成为一个公共的js

const autoprefixer = require('autoprefixer');

const commonConfig = {
    resolve: {
        alias: {
            "jquery": path.resolve(
                __dirname,
                "static/component/jquery-3.1.1.min.js"
            )
        },
    entry: [
      './source/js/index.js' //单入口文件
    ],
    output: {
        path: path.join(__dirname, 'static/js'),  //打包输出的路径
        filename: 'bundle.js'			  //打包后的名字
    },
    // 新添加的module属性
    module: {
        loaders: [
            {test: /\.js$/,
                exclude:["/node_modules/","//"],
                loader: "babel",query: {
                presets: ['es2015']
            }},
            // {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    },
    plugins: [
        new ExtractTextPlugin("/css/[name].css"),
        new CommonsChunkPlugin("commons.js"),
        new webpack.ProvidePlugin({
            "jQuery": path.resolve(
                __dirname,
                "static/component/jquery-3.1.1.min.js"
            ),
            "$": path.resolve(
                __dirname,
                "static/component/jquery-3.1.1.min.js"
            )
        }),
         new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$','jQuery']
            },
            compress: {
                warnings: false
            }
        })
    ]
};





module.exports = commonConfig;