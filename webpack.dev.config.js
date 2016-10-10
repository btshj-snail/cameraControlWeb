/**
 * Created by snail on 2016/10/9.
 * 开发配置
 */

const commonConfig = require('./webpack.config.js');

commonConfig.module.loaders.push({test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')});

module.exports = commonConfig;