# gulp的使用

### 命令升级node          
* 注意：windows系统安装的node不能用命令升级     
* node官网地址下载：https://nodejs.org     
***

`node -v`   
>查看node版本，如果有版本号，说明本机已经安装了nodejs，没有请到官网下载安装。

`npm install -g n`
>全局安装n模块，用来升级node版本，最好用管理员帐户升级。

`n stable`
>升级node到最新稳定版本

`n v6.11.2`
>升级node到指定版本


### npm基本命令
```
npm -v                 查看npm版本

npm version            查看npm版本详细

npm install -g npm@2.9.1        版本号2.9.1 可以根据已发布的版本随意升级或降级

npm init               创建package.json文件，并初始化。

npm install            创建node_modules文件夹，并下载gulpfile.js里面的所有插件。

npm install -g gulp    全局安装gulp插件

npm install --save-dev gulp     本地安装gulp插件，到node_modules文件下。

npm list               列出已安装模块

npm show gulp          显示模块详情

npm update             升级当前目录下的所有模块

npm update gulp        升级当前目录下的指定模块

npm update -g gulp     升级全局安装的gulp模块

npm uninstall gulp     删除指定的模块
```


### 国内用npm下载容易出错，一般是网络原因，你懂的，以下是淘宝的npm镜像。
`npm install -g cnpm --registry=https://registry.npm.taobao.org`
>注意：安装完后最好查看其版本号cnpm -v或关闭命令提示符重新打开，安装完直接使用有可能会出现错误。   
官方网址：http://npm.taobao.org


***
### 在使用本gulpfile.js，里面的插件gulp-rev和gulp-rev-collector时，需要注意以下事项：     

* gulp-rev插件，请下载“7.1.0”版本，并对该版本源码进行如下修改：     

```
打开node_modules\gulp-rev\index.js

源码第144行：manifest[originalFile] = revisionedFile;
更新为：manifest[originalFile] = originalFile + '?v=' + file.revHash;

打开nodemodules\gulp-rev\nodemodules\rev-path\index.js

源码第10行：return filename + '-' + hash + ext;
更新为：return filename + ext;
```

* gulp-rev-collector插件，请下载“1.1.0”版本，并对该版本源码进行如下修改：     

```
打开node_modules\gulp-rev-collector\index.js

源码第31行：if ( !_.isString(json[key]) || path.basename(json[key]).replace(new RegExp( opts.revSuffix ), '' ) !==  path.basename(key) ) {
更新为：if ( !_.isString(json[key]) || path.basename(json[key]).split('?')[0] !== path.basename(key) ) {
   
源码第114行：regexp: new RegExp( '([\/\\\\\'"])' + pattern, 'g' ),
更新为：regexp: new RegExp( '([\/\\\\\'"])' + pattern+'(\\?v=\\w{10})?', 'g' ), 
```
***