/**
 * Created by snail on 2016/10/9.
 * 开发配置
 */
const webpack = require("webpack");
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");//将css抽取为一个独立的css文件，并且以link的方式写入界面中
const commonConfig = require('./webpack.config.js');


commonConfig.module.loaders.push({test: /\.css$/, loader: "style!css"});
commonConfig.devtool = "source-map";
commonConfig.entry.push('webpack-dev-server/client?http://localhost:3005/');
commonConfig.devServer = {
     contentBase: '',  //静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
        devtool: 'eval',
        hot: true,        //自动刷新
        inline: true,
        port: 3005
}
commonConfig.plugins.push( new webpack.HotModuleReplacementPlugin());//这个好像也是必须的，虽然我还没搞懂它的作用
commonConfig.plugins.push( new webpack.NoErrorsPlugin());//这个好像也是必须的，虽然我还没搞懂它的作用

module.exports = commonConfig;