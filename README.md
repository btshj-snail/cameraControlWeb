# 360 carmera web project

## 项目搭建过程

### 1、初始化工程

	npm init

生成package.json文件

### 2、添加webpack

	npm install webpack -g

	npm install webpack --save-dev

全局安装webpack，然后再到工程目录中安装webpack

### 3、安装webpack load插件

	npm install style-loader css-loader less-loader sass-loader url-loader file-loader babel-loader babel-preset-es2015 babel-preset-react --save-dev

less-loader  less语法编译
sass-loader  sass语法编译
url-loader、file-loader   大图片文件编译
babel-loader babel-preset-es2015 babel-preset-react     ES6 语法编译


### 4、将css抽取为一个独立的css文件，并且以link的方式写入界面中

	npm install extract-text-webpack-plugin --dev-save

安装extract-text-webpack-plugin 插件


### 5、自动生成css3 各浏览器前缀

	npm install autoprefixer --dev-save

安装autoprefixer插件

### 6、搭建开发服务器

	npm install webpack-dev-server -g

	npm install webpack-dev-server --dev-save

搭建开发服务器。运行开发服务器

	webpack-dev-server --inline